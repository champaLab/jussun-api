import logger from '../../configs/winston'
import prismaClient from '../../prisma'
import { company, users } from '@prisma/client'
import { TUserCreateModel, TUserPayloadModel } from './type'
import { Request } from 'express'
import env from '../../env'

export const findInvoicePaydayService = async (data: { companyId: number; key: string | null; page: number; invoiceStatus: string }) => {
    const skip = data.key ? 0 : (data.page - 1) * env.ROW_PER_PAGE
    const take = env.ROW_PER_PAGE

    console.log('findManyUserService', { data })
    try {
        const user: any[] = await prismaClient.$queryRaw`
           SELECT c.*, p.projectName,
                u.fullName fullNameOne,  u.lastName lastNameOne,
                u2.fullName fullNameTwo,  u2.lastName lastNameTwo,
                inv.debt,
                inv.amount,
                inv.debt,
                inv.currency,
                inv.fines,
                inv.invoiceStatus,
                inv.invoiceId
                FROM contracts c
                        LEFT JOIN projects p ON p.projectId = c.projectId
                        LEFT JOIN users u ON c.customerIdOne = u.userId
                        LEFT JOIN users u2 ON c.customerIdOne = u2.userId
                 LEFT JOIN invoice inv ON c.contractId = inv.contractId
                WHERE inv.invoiceStatus = ${data.invoiceStatus} AND
                      c.companyId = ${data.companyId}
                ORDER BY createdAt DESC
             LIMIT ${take} OFFSET ${skip}        
        `
        return user
    } catch (err) {
        logger.error(err)
        return []
    } finally {
        prismaClient.$disconnect()
    }
}
