import { Request, Response } from 'express'
import { findInvoicePaydayService } from './service'
import { tokenPayloadService } from '../user/service'

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

    const invoice = await findInvoicePaydayService({ invoiceStatus, companyId, key, page })
    return res.json({
        status: 'success',
        invoice
    })
}
