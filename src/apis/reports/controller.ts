import { Request, Response } from 'express'
import { readReportService, summaryContractPaydayService } from './service'
import { tokenPayloadService } from '../user/service'
import dayjs from 'dayjs'
import { dateFormatter } from '../../utils/dateFormat'

export const readReportController = async (req: Request, res: Response) => {
    const payload = tokenPayloadService(req)
    const userId = Number(payload.userId)
    const dateStart = dayjs(req.body.dateStart).format('YYYY-MM-DD')
    const dateEnd = dayjs(req.body.dateEnd).format('YYYY-MM-DD') + ' 23:59:59'

    const rp = await readReportService({ userId, dateEnd, dateStart })
    console.log(rp)

    const reports = rp.map((item, i) => ({
        ...item,
        indexNo: i + 1,
        createdAt: dateFormatter(item.createdAt)
    }))

    return res.json({
        status: 'success',
        reports
    })
}

export const getReportsController = async (req: Request, res: Response) => {
    const payload = tokenPayloadService(req)
    const userId = Number(payload.userId)
    const dateStart = dayjs(req.body.dateStart).format('YYYY-MM-DD')
    const dateEnd = dayjs(req.body.dateEnd).format('YYYY-MM-DD') + ' 23:59:59'
    const payDay = Number(dayjs().day())

    const payday = await summaryContractPaydayService({ payDay, dateEnd, dateStart, userId })
    console.log(payday)

    return res.json({
        status: 'success',
        ...payday
    })
}
