import { Request, Response } from 'express'
import {
    actionInvoiceService,
    addCommentInvoiceService,
    closeContractService,
    findCountInvoiceService,
    findInvoicePaydayService,
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

export const invoicePaydayController = async (req: Request, res: Response) => {
    const payload = tokenPayloadService(req)
    let companyId = req.body.companyId
    const key = req.body.key
    const monthly = req.body.monthly
    const page = req.body.page ? Number(req.body.page) : 1
    const invoiceStatus = req.body.invoiceStatus
    const date = dayjs(req.body.date).add(7, 'hours').format('DD')
    const projectId = req.body.projectId ? parseInt(req.body.projectId) : null

    if ((payload.role === 'ADMIN' || payload.role === 'SUPERADMIN') && companyId) {
        companyId = Number(companyId)
    } else {
        companyId = payload.companyId
    }

    const inv = await findInvoicePaydayService({ invoiceStatus, companyId, key, page, projectId, date, monthly })
    const invoices = inv.invoices.map((item, i) => ({
        ...item,
        indexNo: (i + 1) * page,
        logoPath: item.logoPath ? `${env.HOST_IMAGE}${env.BASE_PATH}${item.logoPath}` : null,
        remindSentDate: dateFormatter(item.remindSentDate),
        paidDate: dateFormatter(item.paidDate),
        createdAt: dateFormatter(item.createdAt),
        updatedAt: dateFormatter(item.updatedAt),
        reservedAt: dateFormatter(item.reservedAt)
    }))

    const exchange = await findLastExchangeService({ companyId })
    return res.json({
        status: 'success',
        reports: {
            invoices,
            count: inv.count,
            exchange: { ...exchange, updatedAt: dateFormatter(exchange?.updatedAt) }
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
    let comment = req.body.comment
    let exchangeRate: number | null = parseFloat(req.body.exchangeRate)
    const paidDate = today()

    const inv = await findOneInvoiceService({ invoiceId })
    const billPath = getPhotoPath(req.file)
    console.log({ billPath })

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

    const contract = await findOneContractService(inv.contractId)
    if (!contract) {
        return res.json({
            status: 'error',
            message: 'ບໍ່ພົບຂໍ້ມູນສັນຍາ'
        })
    }

    let debt: number = inv.debt ?? 0
    if (inv.currency == invCurrency) {
        debt = (inv.debt ?? 0) - invAmount
        currencyExchange = null
        exchangeRate = null
    } else if (inv.currency != invCurrency) {
        debt = (inv.debt ?? 0) - invAmount / exchangeRate
    }

    console.log('-'.repeat(100))
    console.log({ debt })

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
        createdBy: payload.userId,
        comment
    })

    if (!paid) {
        return res.json({
            status: 'ຳerror',
            message: 'ແຈ້ງຊຳລະ ຜິດພາດ ລອງໃໝ່ໃນພາຍຫຼັງ'
        })
    }
    const monthly = dayjs().add(1, 'month').format('MM/YYYY')

    if (debt > 0) {
        const countInv = await findCountInvoiceService({ contractId: contract.contractId, invoiceId })
        const numberOfInstallment = countInv > contract.numberOfInstallment ? 1 : contract.numberOfInstallment - countInv
        const amount = inv.amount / numberOfInstallment

        const createInv = await createInvoiceService({
            amount: amount,
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
            createdBy: null,
            reservedAt: null,
            reservedBy: null,
            comment: null,
            monthly,
            billPath,
            remindSentDate: null,
            remindSentTime: null
        })
        if (!createInv) {
            return res.json({
                status: 'error',
                message: 'ສ້າງໃບແຈ້ງໜີ້ ຜິດພາດ ລອງໃໝ່ໃນພາຍຫຼັງ'
            })
        }

        await updateContractInvoiceIdService(inv.contractId, createInv.invoiceId)
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

export const actionInvoiceController = async (req: Request, res: Response) => {
    const payload = tokenPayloadService(req)
    const invoiceId = Number(req.body.invoiceId)
    const action = req.body.action

    console.log({ payload })
    const reservedBy = payload.userId
    const reservedAt = today()
    const result = await actionInvoiceService({ invoiceId, reservedBy, reservedAt, action })

    if (!result) {
        return res.json({
            status: 'error',
            message: 'ບໍ່ສາມາດຈ່ອງເອກະສານໄດ້'
        })
    }

    return res.json({
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
        return res.json({
            status: 'error',
            message: 'ບັນທຶກຂໍ້ມູນຜິດພາດ ລອງໃໝ່ໃນພາຍຫຼັງ'
        })
    }

    return res.json({
        status: 'success',
        message: 'ບັນທຶກຂໍ້ມູນ ສຳເລັດແລ້ວ'
    })
}
