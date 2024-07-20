import { exchange } from '@prisma/client'
import logger from '../../configs/winston'
import prismaClient from '../../prisma'

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
