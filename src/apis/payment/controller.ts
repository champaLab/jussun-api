import { Request, Response } from 'express'
import { tokenPayloadService } from '../user/service'
import { logToCustomPath } from '../../middlewares/logToCustomPath'
import dayjs from 'dayjs'

export const findManyPaidToDayController = async (req: Request, res: Response) => {
    const payload = tokenPayloadService(req)
    const gte = Number(req.body.dateStart)
    const lte = Number(req.body.dateEnd)

    if (!payload.companyId) {
        res.json({
            status: 'error',
            message: 'ບໍ່ພົບຂໍ້ມູນ ບໍລິສັດ'
        })
    }
}

export const noticePaymentController = async (req: Request, res: Response) => {
    console.log('===**==='.repeat(30))
    console.log(req.body)
    console.log('===**==='.repeat(30))
    logToCustomPath({ data: JSON.stringify(req.body.data), logName: 'notice-payment' })

    res.json({
        res_code: '00',
        res_desc: 'Received notice successfully',
        paymentId: req.body.paymentId,
        confirmId: `${dayjs().unix()}`
    })
}
