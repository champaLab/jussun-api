import { Request, Response } from 'express'

import { tokenPayloadService } from '../user/service'
import {
    createContractService,
    contractService,
    updateContractService,
    finOneProjectService,
    updateProjectItemService,
    updateContractStatusService,
    createInvoiceService,
    updateInvoiceService,
    finOneContractService,
    updateContractInvoiceIdService,
    createContractWithCustomerService,
    createScheduleService,
    createContractItemService
} from './service'
import dayjs from 'dayjs'
import { dateFormatter, today } from '../../utils/dateFormat'
import { historyService } from '../../utils/createLog'
import { contract_customer, contract_items, Prisma, PrismaClient, project_item, schedules, users } from '@prisma/client'
import prismaClient from '../../prisma'
import { DefaultArgs } from '@prisma/client/runtime/library'
import { PrismaTSX } from './type'

export const contractController = async (req: Request, res: Response) => {
    const payload = tokenPayloadService(req)
    const projectId = req.body.projectId ? Number(req.body.projectId) : null
    let companyId = payload.companyId
    const key = req.body.key
    const page = req.body.page ? Number(req.body.page) : 1

    if (payload.role === 'ADMIN' || payload.role == 'SUPERADMIN') {
        companyId = Number(req.body.companyId)
    }

    const result = await contractService({ projectId, companyId, key, page })
    const contracts = result.contracts.map((item, i) => ({
        ...item,
        indexNo: (i + 1) * page,
        createdAt: dateFormatter(item.createdAt),
        cancelAt: item.cancelAt ? dateFormatter(item.cancelAt) : null,
        updatedAt: dateFormatter(item.updatedAt)
    }))
    res.json({
        status: 'success',
        contracts,
        count: result.count
    })
}

export const createContractController = async (req: Request, res: Response) => {
    const payload = tokenPayloadService(req)
    const area = Number(req.body.area)
    const companyId = Number(payload.companyId)

    const createdBy = payload.userId
    const updatedBy = payload.userId
    const currency = req.body.currency
    const docId = req.body.docId
    const modeOfPayment = req.body.modeOfPayment
    const payInAdvance = Number(req.body.payInAdvance)
    const payDay = dayjs(req.body.payDay).add(7, 'hours').toDate()
    const price = Number(req.body.price)
    const projectId = Number(req.body.projectId)
    const customers: users[] = req.body.customers
    const projectItem: project_item[] = req.body.projectItem
    const schedulesBody: string[] = req.body.schedules

    const totalPrice = price * area
    const updatedAt = null
    const billPath = null
    const createdAt = dayjs().toDate()
    const paymentMethod = req.body.paymentMethod ?? null
    const description = 'ເພີ່ມຂໍ້ມູນສັນຍາ'

    const debt = totalPrice
    let numberOfInstallment = debt === 0 ? 1 : Number(req.body.numberOfInstallment)
    const contractStatus = 'ACTIVE'

    const amount = payInAdvance > 0 ? payInAdvance : Math.ceil((area * price) / numberOfInstallment)
    const invoiceStatus = 'PENDING'
    const paidNow = null

    console.log({ companyId })

    try {
        const contract = await finOneContractService({ docId })
        if (contract) {
            res.json({
                status: 'error',
                message: 'ເລກທີເອກະສານນີ້ ມີໃນລະບົບແລ້ວ'
            })
            return
        }

        // const project: any = await finOneProjectService({ projectId })

        // if (!project) {
        //     res.json({
        //         status: 'error',
        //         message: 'ບໍ່ພົບຂໍ້ມູນ ໂຄງການ'
        //     })
        //     return
        // }

        await prismaClient.$transaction(async (prisma: PrismaTSX) => {
            const p = await createContractService(prisma, {
                area,
                companyId,
                createdBy,
                createdAt,
                currency,
                docId,
                modeOfPayment,
                numberOfInstallment,
                payInAdvance,
                payDay,
                price,
                projectId,
                totalPrice,
                customerId: customers[0].userId
            })

            const projectItems: number[] = []
            for (const item of projectItem) {
                projectItems.push(item.id)
            }
            await updateProjectItemService({ prisma, projectId: projectItems, contractId: p.contractId })

            const monthly = dayjs().format('MM/YYYY')
            const createInv = await createInvoiceService(prisma, {
                amount,
                debt,
                contractId: p.contractId,
                createdAt,
                currency: currency,
                fines: 0,
                monthly,
                billPath,
                projectId: projectId,
                companyId
            })

            const contractCus: Pick<contract_customer, 'companyId' | 'contractId' | 'customerId' | 'createdAt'>[] = []
            for (const cus of customers) {
                contractCus.push({
                    contractId: p.contractId,
                    customerId: cus.userId,
                    createdAt,
                    companyId
                })
            }

            await createContractWithCustomerService(prisma, contractCus)
            const schedulesData: Pick<schedules, 'date' | 'contractId' | 'modeOfPayment'>[] = []
            for (const schedule of schedulesBody) {
                schedulesData.push({
                    date: today(schedule),
                    contractId: p.contractId,
                    modeOfPayment
                })
            }

            const contractItems: Pick<contract_items, 'companyId' | 'projectItemId' | 'createdAt' | 'contractId'>[] = []
            for (const item of projectItem) {
                contractItems.push({
                    companyId,
                    projectItemId: item.id,
                    createdAt,
                    contractId: p.contractId
                })
            }

            await createScheduleService(prisma, schedulesData)
            await createContractItemService(prisma, contractItems)
        })

        await historyService({ req, description })

        res.json({
            status: 'success',
            message: 'ສ້າງສັນຍາ ສຳເລັດແລ້ວ'
        })
    } catch (error: any) {
        console.log(error.message)
        res.json({
            status: 'error',
            message: 'ສ້າງສັນຍາ ຜິດພາດ ລອງໃໝ່ໃນພາຍຫຼັງ'
        })
    }
}

export const updateContractController = async (req: Request, res: Response) => {
    const payload = tokenPayloadService(req)
    const companyId = Number(payload.companyId)
    const contractId = Number(req.body.contractId)
    const createdBy = Number(req.body.createdBy)
    const updatedBy = payload.userId
    const currency = req.body.currency
    const modeOfPayment = req.body.modeOfPayment
    const payInAdvance = Number(req.body.payInAdvance)
    const payDay = dayjs(req.body.payDay).add(7, 'hours').toDate()
    const price = Number(req.body.price)
    const projectId = Number(req.body.projectId)
    const area = Number(req.body.area)
    const oldProjectId = Number(req.body.oldProjectId)
    const oldArea = Number(req.body.oldArea)
    const totalPrice = price * area
    const updatedAt = dayjs().toDate()
    const createdAt = dayjs().toDate()
    const customerIdOne = Number(req.body.customerIdOne)
    const customerIdTwo = req.body.customerIdTwo ? Number(req.body.customerIdTwo) : null

    const cancelAt = req.body.cancelAt
    const cancelBy = req.body.cancelBy
    const reason = req.body.reason
    const paymentMethod = req.body.paymentMethod
    const currencyExchange = req.body.currencyExchange
    const exchangeRate = req.body.exchangeRate
    const reservedBy = req.body.reservedBy
    const reservedAt = req.body.reservedAt
    const monthly = req.body.monthly
    const billPath = req.body.billPath
    const lastInvoice = Number(req.body.lastInvoice)
    const description = 'ແກ້ໄຂຂໍ້ມູນສັນຍາ'
    const docId = req.body.docId

    // if (oldArea != area || oldProjectId != projectId) {
    //     const projectOld: any = await finOneProjectService({ projectId: oldProjectId })
    //     const projectNew: any = await finOneProjectService({ projectId })
    //     if (!projectOld || !projectNew) {
    //         res.json({
    //             status: 'error',
    //             message: 'ບໍ່ພົບຂໍ້ມູນ ໂຄງການ'
    //         })
    //         return
    //     }

    //     if (oldProjectId === projectId) {
    //         const newAre = projectOld.area + oldArea - area
    //         if (newAre < 0) {
    //             res.json({
    //                 status: 'error',
    //                 message: `ເນື້ອທີ່ໂຄງການ ບໍ່ພຽງພໍ, ເນື້ອທີ່ທັງໝົດ ${(projectOld.area - area).toLocaleString()}`
    //             })
    //             return
    //         }

    //         await updateProjectItemService({ area: newAre, projectId })
    //     } else if (oldProjectId !== projectId) {
    //         const _newAre = projectNew.area - area
    //         const _oldArea = projectOld.area + oldArea

    //         if (_newAre < 0) {
    //             res.json({
    //                 status: 'error',
    //                 message: `ເນື້ອທີ່ໂຄງການ ທີ່ທ່ານເລືອກ ບໍ່ພຽງພໍ, ເນື້ອທີ່ທັງໝົດ ${(projectNew.area - area).toLocaleString()}`
    //             })
    //             return
    //         }
    //         console.log({ _newAre, _oldArea })
    //         console.log('-'.repeat(200))

    //         await updateProjectItemService({ area: _newAre, projectId })
    //         await updateProjectItemService({ area: _oldArea, projectId: oldProjectId })
    //     }
    // }

    const debt = totalPrice - payInAdvance
    const numberOfInstallment = debt === 0 ? 1 : Number(req.body.numberOfInstallment)
    const contractStatus = debt === 0 ? 'CLOSED' : 'ACTIVE'

    const amount: number = Math.ceil((area * price - payInAdvance) / numberOfInstallment)
    const invoiceStatus = debt === 0 ? 'PAID' : 'PENDING'
    const paidNow = dayjs().toDate()
    const invoiceId = Number(req.body.invoiceId)
    const fines = req.body.fines ? parseFloat(req.body.fines) : 0
    const comment = req.body.comment

    console.log('-'.repeat(150))
    console.error({ debt, numberOfInstallment, contractStatus, amount, invoiceStatus, paidNow, invoiceId })

    const p: any = await updateContractService({
        area,
        companyId,
        createdBy,
        contractId,
        createdAt,
        currency,
        docId,
        modeOfPayment,
        numberOfInstallment,
        payInAdvance,
        payDay,
        price,
        projectId,
        totalPrice
    })
    if (!p) {
        res.json({
            status: 'error',
            message: 'ແກ້ໄຂຂໍ້ມູນສັນຍາ ຜິດພາດ ລອງໃໝ່ໃນພາຍຫຼັງ'
        })
        return
    }

    const createInv = await updateInvoiceService({
        amount,
        debt,
        contractId: p.contractId,
        createdAt,
        currency: p.currency ?? 'LAK',
        fines,
        invoiceId,
        invoiceStatus,
        paidDate: paidNow,
        updatedAt: paidNow,
        paymentMethod,
        currencyExchange,
        exchangeRate,
        createdBy: null,
        reservedAt,
        reservedBy,
        comment,
        monthly,
        billPath,
        remindSentDate: null,
        remindSentTime: null,
        numberOfInstallment,
        projectId,
        companyId
    })

    if (!createInv) {
        res.json({
            status: 'error',
            message: 'ສ້າງໃບແຈ້ງໜີ້ ຜິດພາດ ລອງໃໝ່ໃນພາຍຫຼັງ'
        })
        return
    }

    await historyService({ req, description })

    res.json({
        status: 'success',
        message: 'ແກ້ໄຂຂໍ້ມູນສັນຍາ ສຳເລັດແລ້ວ'
    })
}

export const updateContractStatusController = async (req: Request, res: Response) => {
    const payload = tokenPayloadService(req)
    const contractStatus = req.body.contractStatus
    const contractId = Number(req.body.contractId)
    const cancelBy = payload.userId
    const reason = contractStatus == 'ACTIVE' ? null : req.body.reason
    const cancelAt = dayjs().toDate()
    const description = 'ແກ້ໄຂອັດສະຖານະສັນຍາ'

    const p = await updateContractStatusService({
        cancelAt,
        cancelBy,
        reason,
        contractStatus,
        contractId
    })
    if (!p) {
        res.json({
            status: 'error',
            message: 'ແກ້ໄຂຂໍ້ມູນສັນຍາ ຜິດພາດ ລອງໃໝ່ໃນພາຍຫຼັງ'
        })
        return
    }

    await historyService({ req, description })

    res.json({
        status: 'success',
        message: 'ແກ້ໄຂຂໍ້ມູນສັນຍາ ສຳເລັດແລ້ວ'
    })
}
