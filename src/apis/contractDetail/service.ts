import { contracts, invoice, Prisma, projects } from '@prisma/client'
import logger from '../../configs/winston'
import prismaClient from '../../prisma'
import env from '../../env'
import dayjs from 'dayjs'
import { ResInvoice, ResContract } from './type'

export const historiesPayByContractService = async (data: { contractId: number }): Promise<ResContract | null> => {
    const { contractId } = data

    try {
        const result: ResContract[] = await prismaClient.$queryRaw`
            SELECT c.*,
                CONCAT(u1.fullName, ' ', u1.lastName) customerOne,
                u1.tel  telCustomerOne,
                CONCAT(u2.fullName, ' ', u2.lastName) customerTwo,
                u1.tel  telCustomerTwo,
                pj.projectName,
                cp.companyName,
                cp.address,
                cp.tel companyContact,
                cp.logoPath,
                CONCAT(u3.fullName, ' ', u3.lastName) createdBy
            FROM contracts c
                    LEFT JOIN users u1 on u1.userId = c.customerIdOne
                    LEFT JOIN users u2 on u2.userId = c.customerIdTwo
                    LEFT JOIN users u3 on u3.userId = c.createdBy
                    LEFT JOIN projects pj on pj.projectId = c.projectId
                    LEFT JOIN company cp on cp.companyId = c.companyId
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
    const { contractId } = data
    try {
        const p: ResInvoice[] = await prismaClient.$queryRaw`
            SELECT inv.*,
                CONCAT(u1.fullName, ' ', u1.lastName) receiptBy
            FROM invoice inv
                    LEFT JOIN users u1 on u1.userId = inv.createdBy
            WHERE inv.contractId = ${contractId}
        `
        return p
    } catch (err) {
        logger.error(err)
        return []
    } finally {
        await prismaClient.$disconnect()
    }
}
