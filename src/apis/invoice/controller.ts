import { Request, Response } from 'express'
import {
    actionInvoiceService,
    addCommentInvoiceService,
    closeContractService,
    findCountInvoiceService,
    findInvoicePaydayService,
    findInvoicePaydayServices,
    findLastExchangeService,
    findOneContractService,
    findOneInvoiceService,
    paidInvoiceService
} from './service'
import { tokenPayloadService } from '../user/service'
import { responseData } from '../../utils/functions'
import { dateFormatter, today } from '../../utils/dateFormat'
import env from '../../env'
import { createInvoiceService, updateContractInvoiceIdService } from '../contract/service'
import { TResponseModel } from './type'
import dayjs from 'dayjs'
import { getPhotoPath } from '../../utils/fileUrl'
import { handlerResponse } from '../../utils/handlerResponse'
import prismaClient from '../../prisma'

export const invoicePaydayController = async (req: Request, res: Response) => {
    try {
        const payload = tokenPayloadService(req)
        let companyId = req.body.companyId
        const key = req.body.key != '' ? req.body.key : null
        const monthly = req.body.monthly
        const page = req.body.page ? Number(req.body.page) : 1
        const invoiceStatus = req.body.invoiceStatus
        const date = req.body.date ? dayjs(req.body.date).add(7, 'hours').format('DD') : null
        const projectId = req.body.projectId ? parseInt(req.body.projectId) : null

        if ((payload.role === 'ADMIN' || payload.role === 'SUPERADMIN') && companyId) {
            companyId = Number(companyId)
        } else {
            companyId = payload.companyId
        }

        const inv = await findInvoicePaydayServices({ invoiceStatus, companyId, key, page, projectId, date, monthly })

        const exchangeResult = await findLastExchangeService({ companyId })
        console.log(exchangeResult)
        const exchange = {
            ...exchangeResult, updatedAt: dateFormatter({ date: exchangeResult.updatedAt })
        }
        res.json({
            status: 'success',
            reports: {
                invoices: inv.invoices,
                count: inv.count,
                exchange
            }
        })
    } catch (error) {
        handlerResponse({ res, error })
    }
}


export const invoicePaidController = async (req: Request, res: Response) => {
    const payload = tokenPayloadService(req)
    const invoiceId = Number(req.body.invoiceId)
    const invAmount = parseFloat(req.body.invAmount)
    const invCurrency = req.body.invCurrency
    const fines = parseFloat(req.body.fines ?? 0)
    const paymentMethod = req.body.invPaymentMethod
    let currencyExchange = req.body.currencyExchange
    const comment = req.body.comment === 'null' ? null : req.body.comment
    let exchangeRate = parseFloat(req.body.exchangeRate ?? '0')
    const paidDate = today()
    const invoiceStatus = 'PAID'

    const billPath = getPhotoPath(req.file)

    try {
        const inv: any = await findOneInvoiceService({ invoiceId })

        if (!inv) {
            res.json({ status: 'error', message: 'ບໍ່ພົບຂໍ້ມູນ ໃຈແຈ້ງໜີ້' })
            return
        } else if (inv.paidDate || inv.invoiceStatus === 'PAID') {
            res.json({ status: 'error', message: 'ໃຈແຈ້ງໜີ້ ຖືກຊຳລະແລ້ວ' })
            return
        }

        const contract: any = await findOneContractService(inv.contractId)

        if (!contract) {
            res.json({ status: 'error', message: 'ບໍ່ພົບຂໍ້ມູນສັນຍາ' })
            return
        }

        await prismaClient.$transaction(async (tx) => {
            let debt: number = inv.debt ?? 0

            if (inv.currency === invCurrency) {
                debt -= invAmount
                currencyExchange = null
                exchangeRate = 0
            } else {
                debt -= invAmount / exchangeRate
            }

            const resultPaid = await paidInvoiceService(tx, {
                invoiceId,
                amount: invAmount,
                currency: invCurrency,
                fines,
                paidDate,
                paymentMethod,
                updatedAt: paidDate,
                currencyExchange,
                exchangeRate,
                invoiceStatus,
                createdBy: payload.userId,
                comment
            })
            console.log({ debt })


            if (debt > 0) {
                const month = resultPaid.monthly + '-20'
                const monthly = dayjs(month, 'YYYY-MM-DD').add(1, 'month').format('YYYY-MM')
                let newAmount = 0

                if (resultPaid.debt > resultPaid.amount && inv.amount <= debt) {
                    console.log('condition 1')
                    newAmount = inv.amount
                } else if (resultPaid.debt > resultPaid.amount && inv.amount > debt) {
                    console.log('condition 2')
                    newAmount = debt
                } else {
                    console.log('condition 3')
                    newAmount = resultPaid.debt - invAmount
                }

                const createInv = await createInvoiceService(tx, {
                    amount: newAmount,
                    debt,
                    contractId: inv.contractId,
                    createdAt: paidDate,
                    currency: inv.currency,
                    fines: 0,
                    monthly,
                    billPath,
                    projectId: contract.projectId,
                    companyId: contract.companyId
                })

                await updateContractInvoiceIdService(inv.contractId, createInv.invoiceId, tx)
            }

            if (debt === 0) {
                await closeContractService(tx, {
                    contractId: inv.contractId,
                    contractStatus: 'CLOSED',
                    updatedAt: paidDate,
                    updatedBy: payload.userId
                })
            }
        })

        res.json({
            status: 'success',
            message: 'ແຈ້ງຊຳລະ ສຳເລັດແລ້ວ'
        })

    } catch (error: any) {
        console.error(error)
        res.status(500).json({
            status: 'error',
            message: 'Internal Server Error'
        })
    }
}

export const actionInvoiceController = async (req: Request, res: Response) => {
    const payload = tokenPayloadService(req)
    const invoiceId = Number(req.body.invoiceId)
    const action = req.body.action

    console.log({ payload })
    const reservedBy = payload.userId
    const reservedAt = today()
    const result = await actionInvoiceService({ invoiceId, reservedBy, reservedAt, action })

    if (!result) {
        res.json({
            status: 'error',
            message: 'ບໍ່ສາມາດຈ່ອງເອກະສານໄດ້'
        })
        return
    }

    res.json({
        status: 'success',
        message: ''
    })
}

export const addCommentInvoiceController = async (req: Request, res: Response) => {
    const payload = tokenPayloadService(req)
    const invoiceId = Number(req.body.invoiceId)
    const comment = req.body.comment

    const result = await addCommentInvoiceService({ invoiceId, comment })

    if (!result) {
        res.json({
            status: 'error',
            message: 'ບັນທຶກຂໍ້ມູນຜິດພາດ ລອງໃໝ່ໃນພາຍຫຼັງ'
        })
        return
    }

    res.json({
        status: 'success',
        message: 'ບັນທຶກຂໍ້ມູນ ສຳເລັດແລ້ວ'
    })
}
