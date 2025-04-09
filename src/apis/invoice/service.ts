import logger from '../../configs/winston'
import prismaClient from '../../prisma'
import { company, contracts, invoice, Prisma, users } from '@prisma/client'
import { TPaidInvoice, TResponseModel } from './type'
import { Request } from 'express'
import env from '../../env'
import { dateFormatter } from '../../utils/dateFormat'
import { PrismaTSX } from '../contract/type'
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

        console.log({ condition })

        const invoices: any[] = await prismaClient.$queryRaw`
            SELECT c.*, p.projectName,
                u.fullName AS fullNameOne, u.lastName AS lastNameOne,
                u2.fullName AS fullNameTwo, u2.lastName AS lastNameTwo,
                inv.debt, inv.amount, inv.currency, inv.fines, inv.invoiceStatus,
                inv.reservedBy, inv.reservedAt, inv.paymentMethod,
                inv.invoiceId, inv.paidDate, com.companyName, com.logoPath,
                com.address, com.tel AS companyContact,
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
            WHERE ${condition}  AND inv.monthly = ${monthly}
            LIMIT ${take} OFFSET ${skip}
        `

        return { invoices, count }
    } catch (err) {
        throw err
    } finally {
        await prismaClient.$disconnect()
    }
}

export const findInvoicePaydayServices = async (data: {
    companyId: number
    page: number
    key: string | null
    projectId: number | null
    invoiceStatus: string | null
    date: string | null
    monthly: string | null
}): Promise<TResponseModel> => {
    const skip = (data.page - 1) * env.ROW_PER_PAGE
    const take = env.ROW_PER_PAGE
    const { invoiceStatus, companyId, key, projectId, monthly } = data

    console.log({ data })
    try {
        const totalCountResult = await prismaClient.invoice.findMany({
            where: {
                companyId: companyId,
                invoiceStatus: invoiceStatus,
                ...(monthly ? { monthly: { equals: monthly } } : {}),
                ...(projectId ? { projectId: { equals: projectId } } : {}),

            },
            include: {
                users: {
                    select: {
                        fullName: true,
                        lastName: true
                    }
                },
                company: {
                    select: {
                        companyName: true,
                        address: true,
                        logoPath: true,
                        tel: true,
                        fax: true,
                        whatsapp: true,
                        email: true
                    }
                },
                users_invoice_reservedByTousers: {
                    select: {
                        fullName: true,
                        lastName: true
                    }
                },
                contracts: {
                    select: {
                        docId: true,
                        contract_customer: {
                            select: {
                                users: {
                                    select: {
                                        fullName: true,
                                        lastName: true
                                    }
                                }
                            }
                        }
                    }
                }
            }
        })

        const invoices = totalCountResult.map((item, i) => ({
            ...item,
            indexNo: (i + 1) * data.page,
            logoPath: item.company.logoPath ? `${env.HOST_IMAGE}${env.BASE_PATH}${item.company.logoPath}` : null,
            remindSentDate: dateFormatter({ date: item.remindSentDate }),
            paidDate: dateFormatter({ date: item.paidDate }),
            createdAt: dateFormatter({ date: item.createdAt }),
            updatedAt: dateFormatter({ date: item.updatedAt }),
            reservedAt: dateFormatter({ date: item.reservedAt })
        }))

        return { invoices, count: 1 }
    } catch (err) {
        throw err
    } finally {
        await prismaClient.$disconnect()
    }
}

export const findLastExchangeService = async (data: { companyId: number }) => {
    try {
        const exchange = await prismaClient.exchange.findFirstOrThrow({
            where: { companyId: data.companyId },
            orderBy: {
                createdAt: 'desc'
            }
        })

        return exchange
    } catch (err) {
        throw err
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

export const findCountInvoiceService = async (prisma: PrismaTSX, data: { contractId: number; invoiceId: number }) => {
    const { contractId, invoiceId } = data
    try {
        return await prisma.invoice.count({
            where: { contractId, invoiceId: { not: invoiceId } }
        })
    } catch (err) {
        throw err
    }
}


export const paidInvoiceService = async (
    prisma: PrismaTSX,
    data: Pick<invoice, 'invoiceId' | 'paidDate' | 'createdBy' | "amount" | "currency" | "fines" | "paymentMethod" | "comment" | "invoiceStatus" | "exchangeRate" | "currencyExchange" | "updatedAt" | "reservedBy" | 'reservedAt'>,
) => {
    try {
        const result = await prisma.invoice.update({
            where: { invoiceId: data.invoiceId },
            data: data,
        })

        return result
    } catch (err) {
        console.log(err)
        throw err
    }
}

export const closeContractService = async (prisma: PrismaTSX, data: Pick<contracts, 'contractId' | 'contractStatus' | 'updatedAt' | 'updatedBy'>) => {
    try {
        const result = await prisma.contracts.update({
            where: { contractId: data.contractId },
            data: {
                contractStatus: data.contractStatus,
                updatedAt: data.updatedAt,
                updatedBy: data.updatedBy,
                reason: null,
                cancelAt: null,
                cancelBy: null
            }
        })

        return result
    } catch (err) {
        throw err
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
