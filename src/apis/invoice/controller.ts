import { Request, Response } from 'express'
import { closeContractService, findInvoicePaydayService, findLastExchangeService, findOneInvoiceService, paidInvoiceService } from './service'
import { tokenPayloadService } from '../user/service'
import { responseData } from '../../utils/functions'
import { dateFormatter, today } from '../../utils/dateFormat'
import env from '../../env'
import { createInvoiceService } from '../contract/service'
import { TResponseModel } from './type'

export const invoicePaydayController = async (req: Request, res: Response) => {
    const payload = tokenPayloadService(req)
    let companyId = req.body.companyId
    const key = req.body.key
    const page = req.body.page ? Number(req.body.page) : 1
    const invoiceStatus = req.body.invoiceStatus
    const projectId = req.body.projectId ? parseInt(req.body.projectId) : null

    if ((payload.role === 'ADMIN' || payload.role === 'SUPERADMIN') && companyId) {
        companyId = Number(companyId)
    } else {
        companyId = payload.companyId
    }

    const inv = await findInvoicePaydayService({ invoiceStatus, companyId, key, page, projectId })
    const invoices = inv.invoices.map((item, i) => ({
        ...item,
        indexNo: (i + 1) * page,
        logoPath: item.logoPath ? `${env.HOST_IMAGE}${env.BASE_PATH}${item.logoPath}` : null,
        paidDate: dateFormatter(item.paidDate),
        createdAt: dateFormatter(item.createdAt),
        updatedAt: dateFormatter(item.updatedAt)
    }))

    const exchange = await findLastExchangeService({ companyId })
    return res.json({
        status: 'success',
        reports: {
            invoices,
            count: inv.count,
            exchange
        }
    })
}
export const invoicePaidController = async (req: Request, res: Response) => {
    const payload = tokenPayloadService(req)
    const invoiceId = Number(req.body.invoiceId)
    const invAmount = parseFloat(req.body.invAmount)
    const invCurrency = req.body.invCurrency
    const invoiceStatus = 'PAID'
    const fines = parseFloat(req.body.fines ?? 0)
    const paymentMethod = req.body.invPaymentMethod
    let currencyExchange = req.body.currencyExchange
    let exchangeRate: number | null = parseFloat(req.body.exchangeRate)
    const paidDate = today()

    const inv = await findOneInvoiceService({ invoiceId })

    if (!inv) {
        return res.json({
            status: 'error',
            message: 'ບໍ່ພົບຂໍ້ມູນ ໃຈແຈ້ງໜີ້'
        })
    } else if ((inv && inv.paidDate) || inv.invoiceStatus === 'PAID') {
        return res.json({
            status: 'error',
            message: 'ໃຈແຈ້ງໜີ້ ທີ່ທ່ານແຈ້ງການຊຳລະ ແມ່ນໄດ້ຖືກຊຳລະກ່ອນໜ້ານີ້ແລ້ວ'
        })
    }

    let debt = inv.debt
    if (inv.currency == invCurrency) {
        debt = inv.debt - invAmount
        currencyExchange = null
        exchangeRate = null
    } else if (inv.currency != invCurrency) {
        debt = inv.debt - invAmount / exchangeRate
    }

    // if (debt > inv.debt) {
    //     return res.json({
    //         status: 'error',
    //         message: ''
    //     })
    // }

    const paid = await paidInvoiceService({
        invoiceId,
        amount: invAmount,
        currency: invCurrency,
        debt: debt,
        fines,
        paidDate,
        paymentMethod,
        updatedAt: paidDate,
        currencyExchange,
        exchangeRate,
        invoiceStatus,
        createdBy: payload.userId
    })

    if (!paid) {
        return res.json({
            status: 'ຳerror',
            message: 'ແຈ້ງຊຳລະ ຜິດພາດ ລອງໃໝ່ໃນພາຍຫຼັງ'
        })
    }

    if (debt > 0) {
        const createInv = await createInvoiceService({
            amount: inv.amount,
            debt,
            contractId: inv.contractId,
            createdAt: paidDate,
            currency: inv.currency,
            fines: 0,
            invoiceId: 1,
            invoiceStatus: 'PENDING',
            paidDate: null,
            updatedAt: null,
            paymentMethod: null,
            currencyExchange: null,
            exchangeRate: null,
            createdBy: null
        })
        if (!createInv) {
            return res.json({
                status: 'error',
                message: 'ສ້າງໃບແຈ້ງໜີ້ ຜິດພາດ ລອງໃໝ່ໃນພາຍຫຼັງ'
            })
        }
    } else {
        const closeContract = await closeContractService({
            contractId: inv.contractId,
            contractStatus: 'CLOSED',
            updatedAt: paidDate,
            updatedBy: payload.userId
        })

        if (!closeContract) {
            return res.json({
                status: 'error',
                message: 'ປິດສັນຍາ ຜິດພາດ ລອງໃໝ່ໃນພາຍຫຼັງ'
            })
        }
    }

    return res.json({
        status: 'success',
        message: 'ແຈ້ງຊຳລະ ສຳເລັດແລ້ວ'
    })
}
