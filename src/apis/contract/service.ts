import { contracts, invoice, projects } from '@prisma/client'
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

export const contractService = async (data: { projectId: number | null; companyId: number | null; key: string | null; page: number }) => {
    const { projectId, companyId, key } = data
    const _key = key ? `${key}%` : null
    const skip = data.key ? 0 : (data.page - 1) * env.ROW_PER_PAGE
    const take = env.ROW_PER_PAGE
    console.log({ projectId, key })
    try {
        if (!projectId && key) {
            const p: any[] = await prismaClient.$queryRaw`
                SELECT c.*, p.projectName, 
                    u.fullName fullNameOne,  u.lastName lastNameOne,
                    u2.fullName fullNameTwo,  u2.lastName lastNameTwo,
                    inv.debt,
                    inv.invoiceId
                FROM contracts c
                    LEFT JOIN projects p ON p.projectId = c.projectId
                    LEFT JOIN users u ON c.customerIdOne = u.userId
                    LEFT JOIN users u2 ON c.customerIdOne = u2.userId
                LEFT JOIN invoice inv ON c.contractId = inv.contractId
                WHERE c.companyId = ${companyId}
                AND (c.docId LIKE ${_key} OR
                    p.projectName LIKE ${_key} OR
                    u.fullName LIKE ${_key} OR
                    u.lastName LIKE ${_key} OR
                    u.tel = ${key} OR
                    u2.fullName LIKE ${_key} OR
                    u2.lastName LIKE ${_key} OR
                    u2.tel = ${key} OR 
                    inv.invoiceId = ${key}
                    )
                ORDER BY createdAt DESC
                LIMIT ${take} OFFSET ${skip}
            `
            console.log('Conditions 1')
            return p
        } else if (projectId && key) {
            const p: any[] = await prismaClient.$queryRaw`
                SELECT c.*, p.projectName, 
                    u.fullName fullNameOne,  u.lastName lastNameOne,
                    u2.fullName fullNameTwo,  u2.lastName lastNameTwo,
                    inv.debt,
                    inv.invoiceId
                FROM contracts c
                    LEFT JOIN projects p ON p.projectId = c.projectId
                    LEFT JOIN users u ON c.customerIdOne = u.userId
                    LEFT JOIN users u2 ON c.customerIdOne = u2.userId
                LEFT JOIN invoice inv ON c.contractId = inv.contractId
                WHERE c.companyId = ${companyId} AND
                    c.projectId = ${projectId} AND 
                    (c.docId LIKE ${_key} OR
                    p.projectName LIKE ${_key} OR
                    u.fullName LIKE ${_key} OR
                    u.lastName LIKE ${_key} OR
                    u.tel = ${key} OR
                    u2.fullName LIKE ${_key} OR
                    u2.lastName LIKE ${_key} OR
                    u2.tel = ${key} OR 
                    inv.invoiceId = ${key}
                    )
                ORDER BY createdAt DESC
                LIMIT ${take} OFFSET ${skip}
            `
            console.log('Conditions 2')
            return p
        } else if (projectId && !key) {
            const p: any[] = await prismaClient.$queryRaw`
                SELECT c.*, p.projectName, 
                    u.fullName fullNameOne,  u.lastName lastNameOne,
                    u2.fullName fullNameTwo,  u2.lastName lastNameTwo,
                    inv.debt,
                    inv.invoiceId
                FROM contracts c
                    LEFT JOIN projects p ON p.projectId = c.projectId
                    LEFT JOIN users u ON c.customerIdOne = u.userId
                    LEFT JOIN users u2 ON c.customerIdOne = u2.userId
                LEFT JOIN invoice inv ON c.contractId = inv.contractId
                WHERE c.companyId = ${companyId} AND
                    c.projectId = ${projectId}  
                ORDER BY createdAt DESC
                LIMIT ${take} OFFSET ${skip}
            `
            console.log('Conditions 3')
            return p
        }

        const p: any[] = await prismaClient.$queryRaw`
                SELECT c.*, p.projectName, 
                u.fullName fullNameOne,  u.lastName lastNameOne,
                u2.fullName fullNameTwo,  u2.lastName lastNameTwo,
                inv.debt,
                inv.invoiceId
                FROM contracts c
                    LEFT JOIN projects p ON p.projectId = c.projectId
                    LEFT JOIN users u ON c.customerIdOne = u.userId
                    LEFT JOIN users u2 ON c.customerIdOne = u2.userId
                LEFT JOIN invoice inv ON c.contractId = inv.contractId
                WHERE c.companyId = ${companyId}
                ORDER BY createdAt DESC
                LIMIT ${take} OFFSET ${skip}
            `
        return p
    } catch (err) {
        logger.error(err)
        return []
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
    let { createdAt, ...dataUpdate } = dataCreate

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
