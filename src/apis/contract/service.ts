import { contracts, projects } from '@prisma/client'
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
    }
}

export const contractService = async (data: { projectId: number | null; companyId: number | null; key: string | null; page: number }) => {
    const { projectId, companyId, key } = data
    const _key = key ? `%${key}%` : null
    const skip = data.key ? 0 : (data.page - 1) * env.ROW_PER_PAGE
    const take = env.ROW_PER_PAGE

    try {
        if (!projectId && !key) {
            const p: any[] = await prismaClient.$queryRaw`
                SELECT c.*, p.projectName, 
                u.fullName fullNameOne,  u.lastName lastNameOne,
                u2.fullName fullNameTwo,  u2.lastName lastNameTwo
                FROM contracts c
                        LEFT JOIN projects p ON p.projectId = c.projectId
                        LEFT JOIN users u ON c.customerIdOne = u.userId
                        LEFT JOIN users u2 ON c.customerIdOne = u2.userId

                WHERE   c.companyId = ${companyId}
                ORDER BY createdAt DESC
                LIMIT ${take} OFFSET ${skip}
            `
            return p
        } else if (!projectId && key) {
            const p: any[] = await prismaClient.$queryRaw`
                SELECT c.*, p.projectName, 
              u.fullName fullNameOne,  u.lastName lastNameOne,
                u2.fullName fullNameTwo,  u2.lastName lastNameTwo
                FROM contracts c
                        LEFT JOIN projects p ON p.projectId = c.projectId
                        LEFT JOIN users u ON c.customerIdOne = u.userId
                        LEFT JOIN users u2 ON c.customerIdOne = u2.userId

                WHERE c.companyId = ${companyId}
                AND (c.docId LIKE ${_key} OR
                    p.projectName LIKE ${_key} OR
                    u.fullName LIKE ${_key} OR
                    u.lastName LIKE ${_key} OR
                    u.tel = ${_key} OR
                    u2.fullName LIKE ${_key} OR
                    u2.lastName LIKE ${_key} OR
                    u2.tel = ${_key}
                    )
                ORDER BY createdAt DESC
                LIMIT ${take} OFFSET ${skip}
            `
            return p
        }

        const p: any[] = await prismaClient.$queryRaw`
                SELECT c.*, p.projectName, 
                u.fullName fullNameOne,  u.lastName lastNameOne,
                u2.fullName fullNameTwo,  u2.lastName lastNameTwo
                FROM contracts c
                        LEFT JOIN projects p ON p.projectId = c.projectId
                        LEFT JOIN users u ON c.customerIdOne = u.userId
                        LEFT JOIN users u2 ON c.customerIdOne = u2.userId

                WHERE c.projectId = ${projectId}
                AND c.companyId = ${companyId}
                AND (c.docId LIKE ${_key} OR
                    p.projectName LIKE ${_key} OR
                    u.fullName LIKE ${_key} OR
                    u.lastName LIKE ${_key} OR
                    u.tel = ${_key} OR
                    u2.fullName LIKE ${_key} OR
                    u2.lastName LIKE ${_key} OR
                    u2.tel = ${_key}
                    )
                ORDER BY createdAt DESC
                LIMIT ${take} OFFSET ${skip}
        `
        return p
    } catch (err) {
        logger.error(err)
        return []
    }
}

export const createContractService = async (data: contracts) => {
    console.log(data)
    try {
        const p = await prismaClient.contracts.create({
            data: {
                area: data.area,
                companyId: data.companyId,
                createdBy: data.createdBy,
                docId: data.docId,
                paidDate: data.paidDate,
                price: data.price,
                projectId: data.projectId,
                totalPrice: data.totalPrice,
                currency: data.currency,
                modeOfPayment: data.modeOfPayment,
                numberOfInstallment: data.numberOfInstallment,
                payInAdvance: data.payInAdvance,
                customerIdOne: data.customerIdOne,
                customerIdTwo: data.customerIdTwo
            }
        })
        return p
    } catch (err) {
        logger.error(err)
        console.error(err)
        return null
    }
}

export const updateContractService = async (data: contracts) => {
    console.log(data)
    try {
        const p = await prismaClient.contracts.update({
            where: {
                contractId: data.contractId
            },
            data: {
                area: data.area,
                updatedBy: data.updatedBy,
                docId: data.docId,
                paidDate: data.paidDate,
                price: data.price,
                projectId: data.projectId,
                totalPrice: data.totalPrice,
                currency: data.currency,
                modeOfPayment: data.modeOfPayment,
                numberOfInstallment: data.numberOfInstallment,
                payInAdvance: data.payInAdvance,
                customerIdOne: data.customerIdOne,
                customerIdTwo: data.customerIdTwo,
                updatedAt: dayjs().toDate()
            }
        })
        return p
    } catch (err) {
        logger.error(err)
        console.log(err)
        return null
    }
}
