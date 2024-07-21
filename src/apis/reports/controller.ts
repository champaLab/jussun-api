import { Request, Response } from 'express'
import { readReportService } from './service'
import { tokenPayloadService } from '../user/service'
import { param } from 'express-validator'

export const readReportController = async (req: Request, res: Response) => {
    const payload = tokenPayloadService(req)
    const userId = Number(payload.userId)

    const rp = await readReportService({ userId })

    const reports = rp.map((item, i) => ({
        ...item,
        indexNo: (i + 1),
    }))

    return res.json({
        status: 'success',
        reports
    })
}