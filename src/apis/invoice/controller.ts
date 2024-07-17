import { Request, Response } from 'express'
import { findInvoicePaydayService } from './service'
import { tokenPayloadService } from '../user/service'
import { responseData } from '../../utils/functions'
import { dateFormatter } from '../../utils/dateFormat'
import env from '../../env'

export const invoicePaydayController = async (req: Request, res: Response) => {
    const payload = tokenPayloadService(req)
    let companyId = req.body.companyId
    const key = req.body.key
    const page = req.body.page ? Number(req.body.page) : 1
    const invoiceStatus = req.body.invoiceStatus

    if ((payload.role === 'ADMIN' || payload.role === 'SUPERADMIN') && companyId) {
        companyId = Number(companyId)
    } else {
        companyId = payload.companyId
    }

    const inv = await findInvoicePaydayService({ invoiceStatus, companyId, key, page })
    const invoices = inv.map((item, i) => ({
        ...item,
        index: (i + 1) * page,
        logoPath: item.logoPath ? `${env.HOST_IMAGE}${env.BASE_PATH}${item.logoPath}` : null,
        paidDate: dateFormatter(item.paidDate),
        createdAt: dateFormatter(item.createdAt),
        updatedAt: dateFormatter(item.updatedAt)
    }))
    return res.json({
        status: 'success',
        invoices
    })
}
