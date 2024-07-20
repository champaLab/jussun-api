import { Request, Response } from 'express'
import { createExchangeService, readExchangeService, updateExchangeService } from './service'
import { tokenPayloadService } from '../user/service'
import { dateFormatter, today } from '../../utils/dateFormat'
import dayjs from 'dayjs'


export const readExchangeController = async (req: Request, res: Response) => {
    const payload = tokenPayloadService(req)
    const companyId = Number(payload.companyId)
    const dateStart = dayjs(req.body.dateStart).format('YYYY-MM-DD')
    const dateEnd = dayjs(req.body.dateEnd).format('YYYY-MM-DD') + ' 23:59:59'
    const page = Number(req.body.page ?? 0)


    const exc = await readExchangeService({
        companyId,
        dateStart,
        dateEnd,
        page
    })
    const exchanges = exc.exchange.map((item, i) => ({
        ...item,
        index: (i + 1) * page,
        createdAt: dateFormatter(item.createdAt),
        updatedAt: dateFormatter(item.updatedAt)
    }))
    return res.json({
        status: 'success',
        reports: {
            exchanges,
            count: exc.count
        }
    }
    )
}



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

export const updateExchangeController = async (req: Request, res: Response) => {
    const payload = tokenPayloadService(req)
    console.log({ payload })
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

    const update = await updateExchangeService({
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
    if (!update) {
        return res.json({
            status: 'error',
            message: 'ອັບເດດ ອັດຕາແລກປ່ຽນ ຜິດພາດ ກະລຸນາ ລອງໃໝ່ໃນພາຍຫຼັງ'
        })
    }
    return res.json({
        status: 'success',
        message: 'ອັບເດດ ຂໍ້ມູນສຳເລັດ'
    })
}