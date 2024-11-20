import { news } from '../../prisma-client'
import { tokenPayloadService } from '../user/service'
import { Request, Response } from 'express'
import { createNewsService, deleteNewsService, getNewsService, updateNewsService } from './service'
import { dateFormatter, today } from '../../utils/dateFormat'
import { checkDataNull } from '../company/service'
import { getPhotoPath } from '../../utils/fileUrl'
import dayjs from 'dayjs'
import { getClientIp } from 'request-ip'
import env from '../../env'

export const getNewsController = async (req: Request, res: Response) => {
    const dateStart = req.body.dateStart && dayjs(req.body.dateStart).format('YYYY-MM-DD')
    const dateEnd = req.body.dateEnd && dayjs(req.body.dateEnd).format('YYYY-MM-DD') + ' 23:59:59'
    const page = Number(req.body.page ?? 0)

    const readNews = await getNewsService({
        dateEnd,
        dateStart,
        page
    })

    console.log(readNews)

    const news: any[] = []

    for (let i = 0; i < readNews.news.length; i++) {
        const item = readNews.news[i]
        let sentTypeParsed

        try {
            sentTypeParsed = JSON.parse(item.sentType)
        } catch (error) {
            console.error(`Failed to parse sentType for item at index ${i}:`, error)
            sentTypeParsed = item.sentType // Or handle the error as needed
        }
        news.push({
            ...item,
            indexNo: (i + 1) * page,
            sentType: sentTypeParsed,
            logoPath: item.imagePath ? `${env.HOST_IMAGE}${env.BASE_PATH}${item.imagePath}` : null,
            createdAt: dateFormatter(item.createdAt),
            dateForSent: dateFormatter(item.dateForSent),
            sentDate: dateFormatter(item.sentDate)
        })
    }
    return res.json({
        status: 'success',
        news,
        count: readNews.count
    })
}
export const createNewsController = async (req: Request, res: Response) => {
    const payload = tokenPayloadService(req)
    const nId = req.body.nId
    const content = req.body.content
    const imagePath = getPhotoPath(req.file)
    const multi = req.body.multi
    const sentStatus = 'PENDING'
    const ip = getClientIp(req)
    const userId = payload.userId
    const tel = req.body.tel
    const sentType: any[] = []
    const deletedAt = null
    const deletedBy = req.body.deletedBy
    const createdAt = today()
    const dateForSent = today(req.body.dateForSent)
    const sentDate = null

    console.log()
    req.body.sentType.split(',').forEach((item: any) => {
        sentType.push(item)
    })

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
        sentType: JSON.stringify(sentType),
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
