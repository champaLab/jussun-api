import { Request, Response } from 'express'
import { tokenPayloadService } from '../user/service'
import dayjs from 'dayjs'
import { dateFormatter } from '../../utils/dateFormat'
import { readReceiveService } from './service'

export const readReceiveController = async (req: Request, res: Response) => {
    const payload = tokenPayloadService(req)
    const companyId = Number(payload.userId)
    const dateStart = dayjs(req.body.dateStart).format('YYYY-MM-DD')
    const dateEnd = dayjs(req.body.dateEnd).format('YYYY-MM-DD') + ' 23:59:59'

    const rp = await readReceiveService({ companyId, dateEnd, dateStart })
    console.log(rp)

    const receives = rp.map((item, i) => ({
        ...item,
        indexNo: (i + 1),
        createdAt: dateFormatter(item.createdAt),
    }))

    return res.json({
        status: 'success',
        receives
    })
}