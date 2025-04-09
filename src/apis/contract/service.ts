import { contract_customer, contract_items, contracts, invoice, Prisma, projects, schedules } from '@prisma/client'
import logger from '../../configs/winston'
import prismaClient from '../../prisma'
import env from '../../env'
import dayjs from 'dayjs'
import { PrismaTSX } from './type'
import { today } from '../../utils/dateFormat'

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

export const createContractWithCustomerService = async (
    prisma: PrismaTSX,
    data: Pick<contract_customer, 'companyId' | 'contractId' | 'customerId' | 'createdAt'>[]
) => {
    try {
        const p = await prisma.contract_customer.createMany({
            data: data
        })

        return p
    } catch (err) {
        logger.error(err)
        throw err
    }
}

export const createContractItemService = async (
    prisma: PrismaTSX,
    data: Pick<contract_items, 'companyId' | 'projectItemId' | 'createdAt' | 'contractId'>[]
) => {
    try {
        const p = await prisma.contract_items.createMany({
            data: data
        })

        return p
    } catch (err) {
        logger.error(err)
        throw err
    }
}

export const createScheduleService = async (prisma: PrismaTSX, data: Pick<schedules, 'date' | 'contractId' | 'modeOfPayment'>[]) => {
    try {
        const p = await prisma.schedules.createMany({
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

export const updateProjectItemService = async ({ prisma, projectId, contractId }: { projectId: number[]; contractId: number; prisma: PrismaTSX }) => {
    console.log('updateProjectAreaService == ', projectId, contractId)
    try {
        const p = await prisma.project_item.updateMany({
            where: { id: { in: projectId } },
            data: {
                contractId: contractId,
                updatedAt: today()
            }
        })
        return p
    } catch (err) {
        throw err
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
                OR inv.invoiceId = ${key}
            )
        `
    }
    if (projectId) {
        whereConditions = Prisma.sql`${whereConditions} AND c.projectId = ${projectId}`
    }

    const query = Prisma.sql`
        SELECT c.*, p.projectName, 
            CONCAT(u.fullName, ' ', u.lastName) fullName,
            u.tel AS tel, 
            inv.invoiceId
        FROM contracts c
        LEFT JOIN projects p ON c.projectId = p.projectId
        LEFT JOIN users u ON c.customerId = u.userId
        LEFT JOIN invoice inv ON c.lastInvoice = inv.invoiceId
        ${whereConditions}
        ORDER BY c.createdAt DESC
        LIMIT ${take} OFFSET ${skip}
    `

    const countQuery = Prisma.sql`
        SELECT COUNT(*) AS totalCount
        FROM contracts c
        LEFT JOIN projects p ON c.projectId = p.projectId
        LEFT JOIN users u ON c.customerId = u.userId
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

export const createContractService = async (
    prisma: PrismaTSX,
    data: Pick<
        contracts,
        | 'companyId'
        | 'projectId'
        | 'docId'
        | 'createdAt'
        | 'area'
        | 'currency'
        | 'modeOfPayment'
        | 'numberOfInstallment'
        | 'createdBy'
        | 'payInAdvance'
        | 'totalPrice'
        | 'payDay'
        | 'price'
        | 'customerId'
    >
) => {
    try {
        const p = await prisma.contracts.create({
            data: data,
            select: { contractId: true }
        })
        return p
    } catch (err) {
        logger.error(err)
        console.error(err)
        throw err
    }
}

export const updateContractInvoiceIdService = async (contract: number, invoiceId: number, prisma?: PrismaTSX) => {
    try {
        if (!prisma) {
            return await prismaClient.contracts.update({
                where: { contractId: contract },
                data: { lastInvoice: invoiceId }
            })
        } else {
            return await prisma.contracts.update({
                where: { contractId: contract },
                data: { lastInvoice: invoiceId }
            })
        }
    } catch (err) {
        throw err
    }
}

export const updateContractService = async (
    data: Pick<
        contracts,
        | 'contractId'
        | 'companyId'
        | 'projectId'
        | 'docId'
        | 'createdAt'
        | 'area'
        | 'currency'
        | 'modeOfPayment'
        | 'numberOfInstallment'
        | 'createdBy'
        | 'payInAdvance'
        | 'totalPrice'
        | 'payDay'
        | 'price'
    >
) => {
    try {
        const p = await prismaClient.contracts.update({
            where: {
                contractId: data.contractId
            },
            data: data
        })
        return p
    } catch (err) {
        logger.error(err)
        console.log(err)
        return null
    }
}


export const createInvoiceService = async (
    prisma: PrismaTSX,
    data: Pick<invoice, 'amount' | 'billPath' | 'contractId' | 'createdAt' | 'currency' | 'debt' | 'fines' | 'monthly' | 'projectId' | "companyId">
) => {
    console.log(data, '666666')
    try {
        return await prisma.invoice.create({
            data: data
        })
    } catch (err) {
        throw err
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
                contractStatus: data.contractStatus,
                contract_items: {
                    updateMany: {
                        where: { contractId: data.contractId },
                        data: { deletedAt: data.cancelAt }
                    }
                }
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
