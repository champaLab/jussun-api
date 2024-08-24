import { news } from '@prisma/client'
import { tokenPayloadService } from '../user/service'
import { Request, Response } from 'express'
import { createNewsService, deleteNewsService, getNewsService, updateNewsService } from './service'
import { dateFormatter, today } from '../../utils/dateFormat'
import { checkDataNull } from '../company/service'
import { getPhotoPath } from '../../utils/fileUrl'
import dayjs from 'dayjs'

export const getNewsController = async (req: Request, res: Response) => {
    const dateStart = req.body.dateStart && dayjs(req.body.dateStart).format('YYYY-MM-DD')
    const dateEnd = req.body.dateEnd && dayjs(req.body.dateEnd).format('YYYY-MM-DD') + ' 23:59:59'
    const page = Number(req.body.page ?? 0)
    console.log('@@@@@@', dateStart, dateEnd)
    const readNews = await getNewsService({
        dateEnd,
        dateStart,
        page
    })
    const news = readNews.news?.map((item, i) => ({
        ...item,
        indexNo: (i + 1) * page,
        createdAt: dateFormatter(item.createdAt),
        updatedAt: dateFormatter(item.deletedAt)
    }))
    return res.json({
        status: 'success',
        reports: {
            news,
            count: readNews.count
        }
    })
}
export const createNewsController = async (req: Request, res: Response) => {
    const payload = tokenPayloadService(req)
    const nId = req.body.nId
    const content = req.body.content
    const imagePath: any = getPhotoPath(req.file) ?? checkDataNull(req.body.imagePath)
    const multi = req.body.multi
    const sentStatus = req.body.sentStatus
    const ip = req.body.ip
    const userId = payload.userId
    const tel = req.body.tel
    const sentType = req.body.sentType
    const deletedAt = req.body.deletedAt
    const deletedBy = req.body.deletedBy
    const createdAt = today()
    const dateForSent = today()
    const sentDate = today()
    const create = await createNewsService({
        deletedAt,
        deletedBy,
        content,
        imagePath,
        multi,
        createdAt,
        sentStatus,
        dateForSent,
        ip,
        nId,
        sentDate,
        sentType,
        tel,
        userId
    })
    if (!create) {
        return res.json({
            status: 'error',
            message: 'ການປະກາດຂ່າວ ຜີດພາດ ລອງໃໝ່ໃນພາຍຫຼັງ'
        })
    }
    return res.json({
        status: 'success',
        message: 'ປະກາດຂ່າວສຳເລັດ'
    })
}

export const updateNewsController = async (req: Request, res: Response) => {
    const payload = tokenPayloadService(req)
    const nId = req.body.nId
    const content = req.body.content
    const imagePath: any = getPhotoPath(req.file) ?? checkDataNull(req.body.imagePath)
    const multi = req.body.multi
    const sentStatus = req.body.sentStatus
    const ip = req.body.ip
    const userId = payload.userId
    const tel = req.body.tel
    const deletedBy = req.body.deletedBy
    const sentType = req.body.sentType
    const deletedAt = null
    const createdAt = today()
    const dateForSent = req.body.dateForSent // vela t thuek kum nod send by font-end date picker for future
    const sentDate = req.body.sentDate //

    const upNews = await updateNewsService({
        deletedAt,
        deletedBy,
        content,
        imagePath,
        multi,
        createdAt,
        sentStatus,
        dateForSent,
        ip,
        nId,
        sentDate,
        sentType,
        tel,
        userId
    })
    return res.json({
        status: 'success',
        message: 'ແກ້ໄຂຂໍ້ມູນຂ່າວ ສຳເລັດ',
        upNews
    })
}

export const deleteNewsController = async (req: Request, res: Response) => {
    const nId = Number(req.body.nId)
    const payload = tokenPayloadService(req)
    const dNews = await deleteNewsService(nId, payload.userId)

    return res.json({
        status: 'success',
        message: 'ລົບຂໍ້ມູນ ສຳເລັດແລ້ວ',
        dNews
    })
}
