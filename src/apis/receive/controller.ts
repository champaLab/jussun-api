import { Request, Response } from 'express'
import { tokenPayloadService } from '../user/service'
import dayjs from 'dayjs'
import { dateFormatter } from '../../utils/dateFormat'
import { readReceiveService, summaryReceiveService } from './service'

export const readReceiveController = async (req: Request, res: Response) => {
    const payload = tokenPayloadService(req)
    const companyId = req.body.companyId ? Number(req.body.companyId) : payload.companyId ?? 0
    const dateStart = dayjs(req.body.dateStart).format('YYYY-MM-DD')
    const dateEnd = dayjs(req.body.dateEnd).format('YYYY-MM-DD') + ' 23:59:59'

    const rp = await readReceiveService({ companyId, dateEnd, dateStart })
    const receives = rp.map((item, i) => ({
        ...item,
        indexNo: i + 1
    }))

    const sr = await summaryReceiveService({ companyId, dateEnd, dateStart })
    const summary = sr.map((item, i) => ({
        ...item,
        indexNo: i + 1
    }))

    res.json({
        status: 'success',
        receives,
        summary
    })
}
