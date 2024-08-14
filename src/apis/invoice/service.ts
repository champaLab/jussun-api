import logger from '../../configs/winston'
import prismaClient from '../../prisma'
import { company, invoice, Prisma, users } from '@prisma/client'
import { TPaidInvoice, TResponseModel } from './type'
import { Request } from 'express'
import env from '../../env'
export const findInvoicePaydayService = async (data: {
    companyId: number
    page: number
    key: string | null
    projectId: number | null
    invoiceStatus: string | null
    date: string
    monthly: string
}): Promise<TResponseModel> => {
    const skip = (data.page - 1) * env.ROW_PER_PAGE
    const take = env.ROW_PER_PAGE
    const { invoiceStatus, companyId, key, projectId, monthly } = data

    console.log({ data })

    let condition = Prisma.sql`c.companyId = ${companyId}`
    if (invoiceStatus) {
        condition = Prisma.sql`${condition} AND inv.invoiceStatus = ${invoiceStatus}`
    }

    if (key && key != '') {
        condition = Prisma.sql`${condition} AND (
            u.fullName LIKE ${'%' + key + '%'} 
            OR p.projectName LIKE ${'%' + key + '%'}
            OR c.docId = ${key}
            OR inv.invoiceId = ${key}
        )
        `
    } else {
        condition = Prisma.sql`${condition} AND (
            DAY(c.payDay) = ${data.date}  
        )
        `
    }

    if (projectId) {
        condition = Prisma.sql`${condition} AND p.projectId = ${projectId}`
    }

    try {
        const totalCountResult: any[] = await prismaClient.$queryRaw`
            SELECT COUNT(*) AS totalCount
            FROM contracts c
                LEFT JOIN projects p ON p.projectId = c.projectId
                LEFT JOIN users u ON c.customerIdOne = u.userId
                LEFT JOIN users u2 ON c.customerIdTwo = u2.userId
                LEFT JOIN company com ON com.companyId = c.companyId
                LEFT JOIN invoice inv ON c.contractId = inv.contractId
            WHERE ${condition} AND inv.monthly = ${monthly}
        `

        const totalCount = Number(totalCountResult[0]?.totalCount ?? 0)
        const count = Math.ceil(totalCount / take)

        const invoices: any[] = await prismaClient.$queryRaw`
            SELECT c.*, p.projectName,
                u.fullName AS fullNameOne, u.lastName AS lastNameOne,
                u2.fullName AS fullNameTwo, u2.lastName AS lastNameTwo,
                inv.debt, inv.amount, inv.currency, inv.fines, inv.invoiceStatus,
                inv.reservedBy, inv.reservedAt, inv.paymentMethod,
                inv.invoiceId, inv.paidDate, com.companyName, com.logoPath,
                com.address, com.abbreviatedLetters, com.tel AS companyContact,
                com.email, com.fax, com.whatsapp,
                CONCAT(u3.fullName, ' ', u3.lastName) AS reservedByName,
                inv.comment
            FROM contracts c
                LEFT JOIN projects p ON p.projectId = c.projectId
                LEFT JOIN users u ON c.customerIdOne = u.userId
                LEFT JOIN users u2 ON c.customerIdTwo = u2.userId
                LEFT JOIN company com ON com.companyId = c.companyId
                LEFT JOIN invoice inv ON c.contractId = inv.contractId
                LEFT JOIN users u3 ON inv.reservedBy  = u3.userId
            WHERE ${condition} AND inv.monthly = ${monthly}
            LIMIT ${take} OFFSET ${skip}
        `

        return { invoices, count }
    } catch (err) {
        logger.error(err)
        console.error(err)
        return { invoices: [], count: 0 }
    } finally {
        await prismaClient.$disconnect()
    }
}

export const findLastExchangeService = async (data: { companyId: number }) => {
    try {
        const exchange = await prismaClient.exchange.findFirst({
            orderBy: {
                createdAt: 'desc'
            }
        })

        return exchange
    } catch (err) {
        logger.error(err)
        console.error(err)
        return null
    } finally {
        prismaClient.$disconnect()
    }
}

export const findOneInvoiceService = async (data: { invoiceId: number }) => {
    try {
        const result = await prismaClient.invoice.findFirst({
            where: { invoiceId: data.invoiceId }
        })

        return result
    } catch (err) {
        logger.error(err)
        console.error(err)
        return null
    } finally {
        prismaClient.$disconnect()
    }
}

export const findOneContractService = async (contractId: number) => {
    try {
        const result = await prismaClient.contracts.findFirst({
            where: { contractId }
        })

        return result
    } catch (err) {
        logger.error(err)
        console.error(err)
        return null
    } finally {
        prismaClient.$disconnect()
    }
}

export const findCountInvoiceService = async (data: { contractId: number; invoiceId: number }) => {
    const { contractId, invoiceId } = data
    try {
        const result = await prismaClient.invoice.count({
            where: { contractId, invoiceId: { not: invoiceId } }
        })

        return result
    } catch (err) {
        logger.error(err)
        console.error(err)
        return 0
    } finally {
        prismaClient.$disconnect()
    }
}

export const paidInvoiceService = async (data: TPaidInvoice) => {
    try {
        const result = await prismaClient.invoice.update({
            where: { invoiceId: data.invoiceId },
            data: data
        })

        return result
    } catch (err) {
        logger.error(err)
        console.error(err)
        return null
    } finally {
        prismaClient.$disconnect()
    }
}

export const closeContractService = async (data: { contractId: number; contractStatus: string; updatedAt: Date; updatedBy: number }) => {
    try {
        const result = await prismaClient.contracts.update({
            where: { contractId: data.contractId },
            data: {
                ...data,
                reason: null,
                cancelAt: null,
                cancelBy: null
            }
        })

        return result
    } catch (err) {
        logger.error(err)
        console.error(err)
        return null
    } finally {
        prismaClient.$disconnect()
    }
}

export const actionInvoiceService = async (data: { invoiceId: number; reservedBy: number | null; reservedAt: Date | null; action: string }) => {
    const { invoiceId, reservedBy, reservedAt, action } = data
    try {
        if (action === 'RESERVE') {
            const result = await prismaClient.invoice.update({
                where: { invoiceId, reservedBy: null },
                data: { reservedBy, reservedAt }
            })
            return result
        }

        const result = await prismaClient.invoice.update({
            where: { invoiceId },
            data: { reservedBy: null, reservedAt: null }
        })
        return result
    } catch (err) {
        logger.error(err)
        console.error(err)
        return null
    } finally {
        await prismaClient.$disconnect()
    }
}

export const addCommentInvoiceService = async (data: { invoiceId: number; comment: string }) => {
    const { invoiceId, comment } = data
    try {
        const result = await prismaClient.invoice.update({
            where: { invoiceId },
            data: { comment }
        })
        return result
    } catch (err) {
        logger.error(err)
        console.error(err)
        return null
    } finally {
        await prismaClient.$disconnect()
    }
}
