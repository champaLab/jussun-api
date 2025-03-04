import { contract_customer, contracts, invoice, Prisma, projects } from '@prisma/client'
import logger from '../../configs/winston'
import prismaClient from '../../prisma'
import env from '../../env'
import dayjs from 'dayjs'

export const finOneProjectService = async (data: { projectId: number }) => {
    try {
        const p = await prismaClient.projects.findFirst({
            where: {
                projectId: data.projectId
            },
            select: {
                area: true
            }
        })
        return p
    } catch (err) {
        logger.error(err)
        return null
    }
}

export const createContractWithCustomerService = async (data: Pick<contract_customer, 'companyId' | 'contractId' | 'customerId' | 'createdAt'>[]) => {
    try {
        const p = await prismaClient.contract_customer.createMany({
            data: data
        })
        return p
    } catch (err) {
        logger.error(err)
        throw err
    }
}

export const finOneContractService = async (data: { docId: string }) => {
    try {
        const p = await prismaClient.contracts.findFirst({
            where: {
                docId: data.docId
            },
            select: {
                contractId: true
            }
        })
        return p
    } catch (err) {
        logger.error(err)
        return null
    }
}

export const updateProjectAreaService = async (data: { projectId: number; area: number }) => {
    console.log('updateProjectAreaService == ', data)
    try {
        const p = await prismaClient.projects.update({
            where: {
                projectId: data.projectId
            },
            data: {
                area: data.area
            }
        })
        return p
    } catch (err) {
        logger.error(err)
        return null
    } finally {
        await prismaClient.$disconnect()
    }
}

export const contractService = async (data: {
    projectId: number | null
    companyId: number | null
    key: string | null
    page: number
}): Promise<{ contracts: contracts[]; count: number }> => {
    const { projectId, companyId, key, page } = data
    const _key = key ? `${key}%` : null
    const skip = key ? 0 : (page - 1) * env.ROW_PER_PAGE
    const take = env.ROW_PER_PAGE

    let whereConditions: Prisma.Sql = Prisma.sql`WHERE c.companyId = ${companyId}`

    if (key) {
        whereConditions = Prisma.sql`
            ${whereConditions} AND (
                c.docId LIKE ${_key}
                OR p.projectName LIKE ${_key}
                OR u.fullName LIKE ${_key}
                OR u.lastName LIKE ${_key}
                OR u.tel = ${key}
                OR u2.fullName LIKE ${_key}
                OR u2.lastName LIKE ${_key}
                OR u2.tel = ${key}
                OR inv.invoiceId = ${key}
            )
        `
    }
    if (projectId) {
        whereConditions = Prisma.sql`${whereConditions} AND c.projectId = ${projectId}`
    }

    const query = Prisma.sql`
        SELECT c.*, p.projectName, 
            u.fullName AS fullNameOne, u.lastName AS lastNameOne,
            u2.fullName AS fullNameTwo, u2.lastName AS lastNameTwo,
            u.tel AS telCustomerOne, u2.tel AS telCustomerTwo,
            inv.*
        FROM contracts c
        LEFT JOIN projects p ON c.projectId = p.projectId
        LEFT JOIN users u ON c.customerIdOne = u.userId
        LEFT JOIN users u2 ON c.customerIdTwo = u2.userId
        LEFT JOIN invoice inv ON c.lastInvoice = inv.invoiceId
        ${whereConditions}
        ORDER BY c.createdAt DESC
        LIMIT ${take} OFFSET ${skip}
    `

    const countQuery = Prisma.sql`
        SELECT COUNT(*) AS totalCount
        FROM contracts c
        LEFT JOIN projects p ON c.projectId = p.projectId
        LEFT JOIN users u ON c.customerIdOne = u.userId
        LEFT JOIN users u2 ON c.customerIdTwo = u2.userId
        LEFT JOIN invoice inv ON c.lastInvoice = inv.invoiceId
        ${whereConditions}
        GROUP BY c.contractId
    `

    try {
        const contracts: contracts[] = await prismaClient.$queryRaw(query)
        const totalCountResult: any[] = await prismaClient.$queryRaw(countQuery)
        const totalCount = Number(totalCountResult[0]?.totalCount ?? 0)
        const count = Math.ceil(totalCount / take)

        return { contracts, count }
    } catch (err) {
        logger.error(err)
        return { contracts: [], count: 0 }
    } finally {
        await prismaClient.$disconnect()
    }
}

export const createContractService = async (data: contracts) => {
    const { contractId, ...newData } = data
    console.log(data)
    try {
        const p = await prismaClient.contracts.create({
            data: newData
        })
        return p
    } catch (err) {
        logger.error(err)
        console.error(err)
        return null
    }
}

export const updateContractInvoiceIdService = async (contract: number, invoiceId: number) => {
    try {
        const p = await prismaClient.contracts.update({
            where: { contractId: contract },
            data: { lastInvoice: invoiceId }
        })
        return p
    } catch (err) {
        logger.error(err)
        console.error(err)
        return null
    }
}

export const updateContractService = async (data: contracts) => {
    const { cancelAt, createdAt, ...newData } = data

    try {
        const p = await prismaClient.contracts.update({
            where: {
                contractId: data.contractId
            },
            data: newData
        })
        return p
    } catch (err) {
        logger.error(err)
        console.log(err)
        return null
    }
}

export const createInvoiceService = async (data: invoice) => {
    const { invoiceId, ...newData } = data
    console.log({ newData })

    try {
        const p = await prismaClient.invoice.create({
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

export const updateInvoiceService = async (data: invoice) => {
    let { invoiceId, paidDate, ...dataCreate } = data
    let { createdAt, createdBy, ...dataUpdate } = dataCreate

    try {
        const p = await prismaClient.invoice.upsert({
            where: { invoiceId: invoiceId },
            create: dataCreate,
            update: dataUpdate
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

export const updateContractStatusService = async (data: {
    cancelAt: Date | null
    cancelBy: number
    reason: string
    contractId: number
    contractStatus: string
}) => {
    try {
        const p = await prismaClient.contracts.update({
            where: {
                contractId: data.contractId
            },
            data: {
                cancelAt: data.cancelAt,
                cancelBy: data.cancelBy,
                reason: data.reason,
                contractStatus: data.contractStatus
            }
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
