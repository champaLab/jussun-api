import { historyService } from './../../utils/createLog'
import { Request, Response } from 'express'
import { createExchangeService, readExchangeService, updateExchangeService } from './service'
import { tokenPayloadService } from '../user/service'
import { dateFormatter, today } from '../../utils/dateFormat'
import dayjs from 'dayjs'

export const readExchangeController = async (req: Request, res: Response) => {
    const payload = tokenPayloadService(req)
    const companyId = Number(payload.companyId)
    const dateStart = req.body.dateStart && dayjs(req.body.dateStart).format('YYYY-MM-DD')
    const dateEnd = req.body.dateEnd && dayjs(req.body.dateEnd).format('YYYY-MM-DD') + ' 23:59:59'
    const page = Number(req.body.page ?? 0)

    const exc = await readExchangeService({
        companyId,
        dateStart,
        dateEnd,
        page
    })
    const exchanges = exc.exchange.map((item, i) => ({
        ...item,
        indexNo: (i + 1) * page,
        createdAt: dateFormatter(item.createdAt),
        updatedAt: dateFormatter(item.updatedAt)
    }))
    res.json({
        status: 'success',
        reports: {
            exchanges,
            count: exc.count
        }
    })
}

export const createExchangeController = async (req: Request, res: Response) => {
    const payload = tokenPayloadService(req)
    const companyId = Number(payload.companyId)
    const createdAt = today()
    const createdBy = payload.userId
    const deletedAt = null
    const exchangeId = Number(req.body.exchangeId)
    const updatedAt = today()
    const updatedBy = payload.userId
    const thb = parseFloat(req.body.thb)
    const usd = parseFloat(req.body.usd)
    const description = 'ເພີ່ມອັດຕາແລກປ່ຽນ'
    const create = await createExchangeService({
        companyId,
        createdAt,
        createdBy,
        deletedAt,
        exchangeId,
        thb,
        updatedAt,
        updatedBy,
        usd,
        deletedBy: null
    })

    console.log({ createdAt })

    if (!create) {
        res.json({
            status: 'error',
            message: 'ການສ້າງ ອັດຕາແລກປ່ຽນ ຜິດພາດ ລອງໃໝ່ໃນພາຍຫຼັງ'
        })
    }
    await historyService({ req, description })
    res.json({
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
    const updatedAt = today()
    const updatedBy = payload.userId
    const thb = parseFloat(req.body.thb)
    const usd = parseFloat(req.body.usd)
    const description = 'ແກ້ໄຂອັດຕາເເລກປ່ຽນ'

    const update = await updateExchangeService({
        companyId,
        createdAt,
        createdBy,
        deletedAt,
        exchangeId,
        thb,
        updatedAt,
        updatedBy,
        usd,
        deletedBy: null
    })
    if (!update) {
        res.json({
            status: 'error',
            message: 'ອັບເດດ ອັດຕາແລກປ່ຽນ ຜິດພາດ ກະລຸນາ ລອງໃໝ່ໃນພາຍຫຼັງ'
        })
    }
    await historyService({ req, description })
    res.json({
        status: 'success',
        message: 'ອັບເດດ ຂໍ້ມູນສຳເລັດ'
    })
}
