import { Request, Response } from 'express'

import { tokenPayloadService } from '../user/service'
import { historiesPayByContractService, invoicesByContractService } from './service'
import dayjs from 'dayjs'
import { dateFormatter } from '../../utils/dateFormat'
import { historyService } from '../../utils/createLog'
import env from '../../env'

export const historiesPayByContractController = async (req: Request, res: Response) => {
    const payload = tokenPayloadService(req)
    const contractId = Number(req.body.contractId)

    const contract = await historiesPayByContractService({ contractId })
    const result = await invoicesByContractService({ contractId })

    const invoices = result.map((item, i) => ({
        ...item,
        indexNo: i + 1,
        billPath: item.billPath ? `${env.HOST_IMAGE}${env.BASE_PATH}${item.billPath}` : null,
        paidDate: dateFormatter(item.paidDate),
        createdAt: dateFormatter(item.createdAt),
        updatedAt: dateFormatter(item.updatedAt)
    }))

    return res.json({
        status: 'success',
        contract,
        invoices
    })
}
