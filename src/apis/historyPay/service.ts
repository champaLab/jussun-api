import { contracts, invoice, Prisma, projects } from '@prisma/client'
import logger from '../../configs/winston'
import prismaClient from '../../prisma'
import env from '../../env'
import dayjs from 'dayjs'
import { THistoryPay } from './type'

export const historiesPayByContractService = async (data: { contractId: number }) => {
    const { contractId } = data

    try {
        const result: THistoryPay[] = await prismaClient.$queryRaw`
            SELECT c.*,
                CONCAT(u1.fullName, ' ', u1.lastName) customerOne,
                CONCAT(u2.fullName, ' ', u2.lastName) customerTwo
            FROM contracts c
                    LEFT JOIN users u1 on u1.userId = c.customerIdOne
                    LEFT JOIN users u2 on u1.userId = c.customerIdTwo

            WHERE c.contractId = ${contractId}
        `

        return result[0]
    } catch (err) {
        logger.error(err)
        return null
    } finally {
        await prismaClient.$disconnect()
    }
}

export const invoicesByContractService = async (data: { contractId: number }) => {
    try {
        const p = await prismaClient.invoice.findMany({
            where: {
                contractId: data.contractId
            }
        })
        return p
    } catch (err) {
        logger.error(err)
        return []
    } finally {
        await prismaClient.$disconnect()
    }
}
