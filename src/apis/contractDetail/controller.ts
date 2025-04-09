import { Request, Response } from 'express'

import { tokenPayloadService } from '../user/service'
import { historiesPayByContractService, invoicesByContractService } from './service'
import dayjs from 'dayjs'
import { dateFormatter } from '../../utils/dateFormat'
import { historyService } from '../../utils/createLog'
import env from '../../env'

export const historiesPayByContractController = async (req: Request, res: Response) => {
    try {
        const payload = tokenPayloadService(req)
        const contractId = Number(req.params.contractId)

        const ct = await historiesPayByContractService({ contractId })
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
            logoPath: ct.company.logoPath ? `${env.HOST_IMAGE}${env.BASE_PATH}${ct.company.logoPath}` : null,
            createdAt: dateFormatter({ date: ct.createdAt })
        }

        const invoices = result.map((item, i) => ({
            ...item,
            ...item.company,
            indexNo: i + 1,
            billPath: item.billPath ? `${env.HOST_IMAGE}${env.BASE_PATH}${item.billPath}` : null,
            logoPath: item.company.logoPath ? `${env.HOST_IMAGE}${env.BASE_PATH}${item.company.logoPath}` : null,
            paidDate: dateFormatter({ date: item.paidDate }),
            createdAt: dateFormatter({ date: item.createdAt }),
            updatedAt: dateFormatter({ date: item.updatedAt })
        }))

        res.json({
            status: 'success',
            contract,
            invoices
        })
    } catch (error) {
        res.json({
            status: 'error',
        })
    }
}
