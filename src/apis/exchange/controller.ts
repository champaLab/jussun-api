import { Request, Response } from 'express'
import { createExchangeService } from './service'
import { tokenPayloadService } from '../user/service'
import { getPhotoPath } from '../../utils/fileUrl'
import { dateFormatter, today } from '../../utils/dateFormat'
import env from '../../env'

export const createExchangeController = async (req: Request, res: Response) => {
    const payload = tokenPayloadService(req)

    const companyId = Number(payload.companyId)
    const createdAt = today()
    const createdBy = payload.userId
    const deletedAt = null
    const exchangeId = Number(req.body.exchangeId)
    const lak = req.body.lak
    const thb = req.body.thb
    const updatedAt = today()
    const updatedBy = payload.userId
    const usd = req.body.usd

    const create = await createExchangeService({
        companyId,
        createdAt,
        createdBy,
        deletedAt,
        exchangeId,
        lak,
        thb,
        updatedAt,
        updatedBy,
        usd
    })

    if (!create) {
        return res.json({
            status: 'error',
            message: 'ການສ້າງ ອັດຕາແລກປ່ຽນ ຜິດພາດ ລອງໃໝ່ໃນພາຍຫຼັງ'
        })
    }
    return res.json({
        status: 'success',
        message: 'ບັນທຶກ ຂໍ້ມູນສຳເລັດ'
    })
}
