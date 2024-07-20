import logger from '../../configs/winston'
import prismaClient from '../../prisma'
import { company, invoice, users } from '@prisma/client'
import { TUserCreateModel, TUserPayloadModel } from './type'
import { Request } from 'express'
import env from '../../env'

export const findInvoicePaydayService = async (data: {
    companyId: number
    key: string | null
    page: number
    invoiceStatus: string
}): Promise<{ invoice: any[]; count: number }> => {
    const skip = data.key ? 0 : (data.page - 1) * env.ROW_PER_PAGE
    const take = env.ROW_PER_PAGE

    try {
        const totalCountResult: any[] = await prismaClient.$queryRaw`
            SELECT COUNT(*) AS totalCount
            FROM contracts c
                LEFT JOIN projects p ON p.projectId = c.projectId
                LEFT JOIN users u ON c.customerIdOne = u.userId
                LEFT JOIN users u2 ON c.customerIdOne = u2.userId
                LEFT JOIN company com ON com.companyId = c.companyId
                LEFT JOIN invoice inv ON c.contractId = inv.contractId
            WHERE inv.invoiceStatus = ${data.invoiceStatus} AND
                    c.companyId = ${data.companyId}
        `

        const totalCount = Number(totalCountResult[0]?.totalCount ?? 0)
        const count = Math.ceil(totalCount / take)

        const invoice: any[] = await prismaClient.$queryRaw`
           SELECT c.*, p.projectName,
                u.fullName fullNameOne,  u.lastName lastNameOne,
                u2.fullName fullNameTwo,  u2.lastName lastNameTwo,
                inv.debt,
                inv.amount,
                inv.debt,
                inv.currency,
                inv.fines,
                inv.invoiceStatus,
                inv.invoiceId,
                inv.paidDate,
                com.companyName,
                com.logoPath,
                com.address,
                com.abbreviatedLetters,
                com.tel companyContact,
                com.email,
                com.fax,
                com.whatsapp
            FROM contracts c
                LEFT JOIN projects p ON p.projectId = c.projectId
                LEFT JOIN users u ON c.customerIdOne = u.userId
                LEFT JOIN users u2 ON c.customerIdOne = u2.userId
                LEFT JOIN company com ON com.companyId = c.companyId
                LEFT JOIN invoice inv ON c.contractId = inv.contractId
            WHERE inv.invoiceStatus = ${data.invoiceStatus} AND
                    c.companyId = ${data.companyId}
            ORDER BY createdAt DESC
             LIMIT ${take} OFFSET ${skip}        
        `

        return { invoice, count }
    } catch (err) {
        logger.error(err)
        console.error(err)
        return { invoice: [], count: 0 }
    } finally {
        prismaClient.$disconnect()
    }
}
