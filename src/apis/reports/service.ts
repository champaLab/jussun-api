import { exchange } from '@prisma/client'
import logger from '../../configs/winston'
import prismaClient from '../../prisma'
import env from '../../env'



export const readExchangeService = async (data: { companyId: number, dateStart: string, dateEnd: string, page: number }) => {
    console.log("readExchangeService", data)
    const skip = (data.page - 1) * env.ROW_PER_PAGE
    const take = env.ROW_PER_PAGE
    const { companyId, dateStart, dateEnd } = data
    try {
        const totalPage: any[] = await prismaClient.$queryRaw`
        SELECT COUNT(*) totalCount FROM exchange WHERE DATE(createdAt) BETWEEN ${dateStart} AND ${dateEnd} AND ${companyId};`

        const totalCount = Number(totalPage[0]?.totalCount ?? 0)
        const count = Math.ceil(totalCount / take)

        const exchange: exchange[] = await prismaClient.$queryRaw`
        SELECT * FROM exchange WHERE DATE(createdAt) BETWEEN ${dateStart} AND ${dateEnd} AND ${companyId}
          ORDER BY createdAt DESC LIMIT ${take} OFFSET ${skip}    ;`
        return { count, exchange }

    } catch (err) {
        logger.error(err)
        console.log(err)
        return { count: 0, exchange: [] }
    } finally {
        await prismaClient.$disconnect()
    }
}

export const createExchangeService = async (data: exchange) => {
    const { exchangeId, updatedBy, updatedAt, ...newData } = data
    console.log(newData)
    try {
        const p = await prismaClient.exchange.create({
            data: newData
        })
        return p
    } catch (err) {
        logger.error(err)
        console.log(err)
        return null
    } finally {
        await prismaClient.$disconnect()
    }
}


export const updateExchangeService = async (data: exchange) => {
    const { exchangeId, createdBy, createdAt, ...newData } = data

    console.log(newData)
    try {
        const res = await prismaClient.exchange.update({
            where: { exchangeId: exchangeId },
            data: newData
        })
        return res

    } catch (err) {
        logger.error(err)
        console.log(err)
        return null
    } finally {
        await prismaClient.$disconnect()
    }
}