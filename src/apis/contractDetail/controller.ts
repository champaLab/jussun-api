import { Request, Response } from 'express'

import { tokenPayloadService } from '../user/service'
import { historiesPayByContractService, invoicesByContractService } from './service'
import dayjs from 'dayjs'
import { dateFormatter } from '../../utils/dateFormat'
import { historyService } from '../../utils/createLog'
import env from '../../env'

export const historiesPayByContractController = async (req: Request, res: Response) => {
    const payload = tokenPayloadService(req)
    const contractId = Number(req.params.contractId)

    const ct: any = await historiesPayByContractService({ contractId })
    if (!ct) {
        res.json({
            status: 'error',
            message: 'contract not found'
        })
        return
    }
    const result = await invoicesByContractService({ contractId })

    const contract = {
        ...ct,
        logoPath: ct.logoPath ? `${env.HOST_IMAGE}${env.BASE_PATH}${ct.logoPath}` : null,
        createdAt: dateFormatter(ct.createdAt)
    }

    const invoices = result.map((item, i) => ({
        ...item,
        indexNo: i + 1,
        billPath: item.co.billPath ? `${env.HOST_IMAGE}${env.BASE_PATH}${item.billPath}` : null,
        paidDate: dateFormatter(item.paidDate),
        createdAt: dateFormatter(item.createdAt),
        updatedAt: dateFormatter(item.updatedAt)
    }))

    res.json({
        status: 'success',
        contract,
        invoices
    })
}
