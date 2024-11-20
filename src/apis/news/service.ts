import { TypeNews } from './type.d'
import logger from '../../configs/winston'
import env from '../../env'
import prismaClient from '../../prisma'
import { TResponseModel } from './type'
import { news, Prisma, PrismaClient } from '../../prisma-client'
import { dateDir, today } from '../../utils/dateFormat'
import { table } from 'console'

export const createNewsService = async (data: news) => {
    try {
        const news = await prismaClient.news.create({
            data: data
        })
        return news
    } catch (err) {
        logger.error(err)
        console.log(err)
        return err
    } finally {
        await prismaClient.$disconnect()
    }
}

// deleteAt = is alway be null
export const getNewsService = async (data: { page: number; dateStart: string; dateEnd: string }) => {
    const skip = (data.page - 1) * env.ROW_PER_PAGE
    const take = env.ROW_PER_PAGE
    const { dateStart, dateEnd } = data
    try {
        if (dateStart && dateEnd) {
            const totalPage: any[] = await prismaClient.$queryRaw`
            SELECT COUNT(*) totalCount FROM news WHERE DATE(createdAt) BETWEEN ${dateStart} AND ${dateEnd} `
            const totalCount = Number(totalPage[0]?.totalCount ?? 0)
            const count = Math.ceil(totalCount / take)

            const news: news[] = await prismaClient.$queryRaw` SELECT * FROM news WHERE deletedAt IS NULL ORDER BY createdAt DESC LIMIT ${take} OFFSET ${skip};
 `
            return { count, news }
        }
        const totalPage = await prismaClient.news.count({
            where: { deletedAt: null }
        })

        const count = Math.ceil(totalPage / take)
        const news = await prismaClient.news.findMany({
            where: {
                deletedAt: null
            },
            orderBy: { createdAt: 'desc' },
            skip: skip,
            take: take
        })
        return { count, news }
    } catch (err) {
        logger.error(err)
        console.log(err)
        return { count: 0, news: [] }
    } finally {
        await prismaClient.$disconnect()
    }
}

export const updateNewsService = async (data: news) => {
    const { nId, ...newData } = data
    const newsId = Number(nId)
    console.log('@@@', data)
    try {
        const news = await prismaClient.news.update({
            where: { nId: newsId },
            data: newData
        })

        console.log('Updated News:', news)
        return news
    } catch (err) {
        logger.error('Error updating news:', err)
        console.error('Error details:', err)
        throw err // Rethrow error if you want to handle it further up the call stack
    } finally {
        await prismaClient.$disconnect()
    }
}

export const deleteNewsService = async (userId: number, nId: number) => {
    try {
        const dNews = await prismaClient.news.update({
            where: { nId },
            data: { deletedBy: userId, deletedAt: today() }
        })
        return dNews
    } catch (err) {
        logger.error(err)
        console.log(err)
        return err
    } finally {
        await prismaClient.$disconnect()
    }
}
