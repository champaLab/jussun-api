import { contracts, projects } from '@prisma/client'
import logger from '../../configs/winston'
import prismaClient from '../../prisma'

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

export const contractService = async (data: { projectId: number }) => {
    try {
        const p = await prismaClient.contracts.findMany({
            where: {
                projectId: data.projectId
            }
        })
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
                payInAdvance: data.payInAdvance
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
                createdBy: data.createdBy,
                docId: data.docId,
                paidDate: data.paidDate,
                price: data.price,
                projectId: data.projectId,
                totalPrice: data.totalPrice,
                currency: data.currency,
                modeOfPayment: data.modeOfPayment,
                numberOfInstallment: data.numberOfInstallment,
                payInAdvance: data.payInAdvance
            }
        })
        return p
    } catch (err) {
        logger.error(err)
        return null
    }
}
