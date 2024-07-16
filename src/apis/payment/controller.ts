import { Request, Response } from 'express'
import { tokenPayloadService } from '../user/service'
import { findManyPaidToDayService } from './service'

export const findManyPaidToDayController = async (req: Request, res: Response) => {
    const payload = tokenPayloadService(req)
    const gte = Number(req.body.dateStart)
    const lte = Number(req.body.dateEnd)

    if (!payload.companyId) {
        return res.json({
            status: 'error',
            message: 'ບໍ່ພົບຂໍ້ມູນ ບໍລິສັດ'
        })
    }

    const invoice = await findManyPaidToDayService({ companyId: payload.companyId, gte, lte })
    return res.json({
        status: 'success',
        invoice
    })
}
