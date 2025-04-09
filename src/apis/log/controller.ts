import { Request, Response } from 'express'
import { tokenPayloadService } from '../user/service'
import dayjs from 'dayjs'
import { dateFormatter } from '../../utils/dateFormat'
import { findManyHistoryService } from './service'

export const findManyHistoryController = async (req: Request, res: Response) => {
    const payload = tokenPayloadService(req)
    const userId = Number(payload.userId) || null
    const companyName = req.body.companyName || null
    const page = req.body.page ? Number(req.body.page) : 1
    const key = req.body.Key
    const dateStart = dayjs(req.body.dateStart).format('YYYY-MM-DD')
    const dateEnd = dayjs(req.body.dateEnd).format('YYYY-MM-DD') + ' 23:59:59'
    const hst = await findManyHistoryService({ userId, companyName, page, key, dateEnd, dateStart })
    console.log({ hst })
    const histories = hst.history.map((item, i) => ({
        ...item,
        indexNo: i + 1,
        createdAt: dateFormatter({ date: item.createdAt }),
    }))

    res.json({
        status: 'success',
        histories,
        count: hst.count
    })
}
