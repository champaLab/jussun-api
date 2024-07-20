import { Request, Response } from 'express'

import { tokenPayloadService } from '../user/service'
import {
    createContractService,
    contractService,
    updateContractService,
    finOneProjectService,
    updateProjectAreaService,
    updateContractStatusService,
    createInvoiceService,
    updateInvoiceService
} from './service'
import dayjs from 'dayjs'
import { responseData } from '../../utils/functions'

export const contractController = async (req: Request, res: Response) => {
    const payload = tokenPayloadService(req)
    const projectId = req.body.projectId ? Number(req.body.projectId) : null
    let companyId = payload.companyId
    const key = req.body.key
    const page = req.body.page ? Number(req.body.page) : 1

    if (payload.role === 'ADMIN' || payload.role == 'SUPERADMIN') {
        companyId = Number(req.body.companyId)
    }

    const contract = await contractService({ projectId, companyId, key, page })
    const contracts = await responseData(contract, page)
    return res.json({
        status: 'success',
        contracts
    })
}

export const createContractController = async (req: Request, res: Response) => {
    const payload = tokenPayloadService(req)
    const area = Number(req.body.area)
    const companyId = Number(payload.companyId)
    const contractId = req.body.contractId
    const createdBy = payload.userId
    const updatedBy = payload.userId
    const currency = req.body.currency
    const docId = req.body.docId
    const modeOfPayment = req.body.modeOfPayment
    const payInAdvance = Number(req.body.payInAdvance)
    const payDay = Number(req.body.payDay)
    const price = Number(req.body.price)
    const projectId = Number(req.body.projectId)
    const customerIdOne = Number(req.body.customerIdOne)
    const customerIdTwo = req.body.customerIdTwo ? Number(req.body.customerIdTwo) : null
    const totalPrice = price * area
    const updatedAt = null
    const createdAt = dayjs().toDate()

    const debt = totalPrice - payInAdvance
    let numberOfInstallment = debt === 0 ? 1 : Number(req.body.numberOfInstallment)
    const contractStatus = debt === 0 ? 'CLOSED' : 'ACTIVE'

    const amount = Math.ceil((area * price) / numberOfInstallment)
    const invoiceStatus = amount == totalPrice ? 'PAID' : 'PENDING'
    const paidNow = amount == totalPrice ? dayjs().toDate() : null

    const project = await finOneProjectService({ projectId })

    if (!project) {
        return res.json({
            status: 'error',
            message: 'ບໍ່ພົບຂໍ້ມູນ ໂຄງການ'
        })
    }

    const newArea = project.area - area
    if (newArea < 0) {
        return res.json({
            status: 'error',
            message: `ເນື້ອທີ່ໂຄງການ ບໍ່ພຽງພໍ, ເນື້ອທີ່ທັງໝົດ ${(project.area - area).toLocaleString()}`
        })
    }

    const projectArea = await updateProjectAreaService({ area: newArea, projectId })
    if (!projectArea) {
        return res.json({
            status: 'error',
            message: 'ແກ້ໄຂເນື້ອທີ່ ໂຄງການ ຜິດພາດ ລອງໃໝ່ໃນພາຍຫຼັງ'
        })
    }

    const p = await createContractService({
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
        totalPrice,
        updatedAt,
        updatedBy,
        customerIdOne,
        customerIdTwo,
        contractStatus,
        cancelAt: null,
        cancelBy: null,
        reason: null
    })
    if (!p) {
        return res.json({
            status: 'error',
            message: 'ສ້າງໂຄງການ ຜິດພາດ ລອງໃໝ່ໃນພາຍຫຼັງ'
        })
    }

    const createInv = await createInvoiceService({
        amount,
        debt,
        contractId: p.contractId,
        createdAt,
        currency: p.currency,
        fines: 0,
        invoiceId: 1,
        invoiceStatus,
        paidDate: paidNow,
        updatedAt: paidNow
    })

    if (!createInv) {
        return res.json({
            status: 'error',
            message: 'ສ້າງໃບແຈ້ງໜີ້ ຜິດພາດ ລອງໃໝ່ໃນພາຍຫຼັງ'
        })
    }

    return res.json({
        status: 'success',
        message: 'ສ້າງໂຄງການ ສຳເລັດແລ້ວ'
    })
}

export const updateContractController = async (req: Request, res: Response) => {
    const payload = tokenPayloadService(req)
    const companyId = Number(payload.companyId)
    const contractId = Number(req.body.contractId)
    const createdBy = Number(req.body.createdBy)
    const updatedBy = payload.userId
    const currency = req.body.currency
    const docId = req.body.docId
    const modeOfPayment = req.body.modeOfPayment
    const payInAdvance = Number(req.body.payInAdvance)
    const payDay = Number(req.body.payDay)
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

    if (oldArea != area || oldProjectId != projectId) {
        const projectOld = await finOneProjectService({ projectId: oldProjectId })
        const projectNew = await finOneProjectService({ projectId })
        if (!projectOld || !projectNew) {
            return res.json({
                status: 'error',
                message: 'ບໍ່ພົບຂໍ້ມູນ ໂຄງການ'
            })
        }

        if (oldProjectId === projectId) {
            const newAre = projectOld.area + oldArea - area
            if (newAre < 0) {
                return res.json({
                    status: 'error',
                    message: `ເນື້ອທີ່ໂຄງການ ບໍ່ພຽງພໍ, ເນື້ອທີ່ທັງໝົດ ${(projectOld.area - area).toLocaleString()}`
                })
            }

            await updateProjectAreaService({ area: newAre, projectId })
        } else if (oldProjectId !== projectId) {
            const _newAre = projectNew.area - area
            const _oldArea = projectOld.area + oldArea

            if (_newAre < 0) {
                return res.json({
                    status: 'error',
                    message: `ເນື້ອທີ່ໂຄງການ ທີ່ທ່ານເລືອກ ບໍ່ພຽງພໍ, ເນື້ອທີ່ທັງໝົດ ${(projectNew.area - area).toLocaleString()}`
                })
            }
            console.log({ _newAre, _oldArea })
            console.log('-'.repeat(200))

            await updateProjectAreaService({ area: _newAre, projectId })
            await updateProjectAreaService({ area: _oldArea, projectId: oldProjectId })
        }
    }

    const debt = totalPrice - payInAdvance
    const numberOfInstallment = debt === 0 ? 1 : Number(req.body.numberOfInstallment)
    const contractStatus = debt === 0 ? 'CLOSED' : 'ACTIVE'

    const amount = Math.ceil((area * price - payInAdvance) / numberOfInstallment)
    const invoiceStatus = debt === 0 ? 'PAID' : 'PENDING'
    const paidNow = dayjs().toDate()
    const invoiceId = Number(req.body.invoiceId)
    const fines = req.body.fines ? Number(req.body.fines) : 0

    console.log('-'.repeat(150))
    console.error({ debt, numberOfInstallment, contractStatus, amount, invoiceStatus, paidNow, invoiceId })

    const p = await updateContractService({
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
        totalPrice,
        updatedAt,
        updatedBy,
        customerIdOne,
        customerIdTwo,
        cancelAt,
        cancelBy,
        reason,
        contractStatus
    })
    if (!p) {
        return res.json({
            status: 'error',
            message: 'ແກ້ໄຂຂໍ້ມູນສັນຍາ ຜິດພາດ ລອງໃໝ່ໃນພາຍຫຼັງ'
        })
    }

    const createInv = await updateInvoiceService({
        amount,
        debt,
        contractId: p.contractId,
        createdAt,
        currency: p.currency,
        fines,
        invoiceId,
        invoiceStatus,
        paidDate: paidNow,
        updatedAt: paidNow
    })

    if (!createInv) {
        return res.json({
            status: 'error',
            message: 'ສ້າງໃບແຈ້ງໜີ້ ຜິດພາດ ລອງໃໝ່ໃນພາຍຫຼັງ'
        })
    }

    return res.json({
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

    const p = await updateContractStatusService({
        cancelAt,
        cancelBy,
        reason,
        contractStatus,
        contractId
    })
    if (!p) {
        return res.json({
            status: 'error',
            message: 'ແກ້ໄຂຂໍ້ມູນສັນຍາ ຜິດພາດ ລອງໃໝ່ໃນພາຍຫຼັງ'
        })
    }

    return res.json({
        status: 'success',
        message: 'ແກ້ໄຂຂໍ້ມູນສັນຍາ ສຳເລັດແລ້ວ'
    })
}
