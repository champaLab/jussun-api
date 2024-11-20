import { company, payment_method } from '../../prisma/prisma-client'
import logger from '../../configs/winston'
import prismaClient from '../../prisma'
import { paginate } from '../../utils/functions'

export const findPaymentMethodService = async (data: { companyId: number }) => {
    const { companyId } = data
    try {
        const p = await prismaClient.payment_method.findMany({ where: { companyId } })
        return p

        return p
    } catch (err) {
        logger.error(err)
        return []
    } finally {
        await prismaClient.$disconnect()
    }
}

export const companiesService = async (data: { companyId: number; key: string | null; page: number | null }) => {
    try {
        const { companyId, key } = data

        // Start with a base condition
        let condition: any = { where: {} }

        // Add companyId filter if provided
        if (companyId) {
            condition.where.companyId = companyId
        }

        // Add companyName filter if key is provided
        if (key) {
            condition.where.companyName = { contains: key }
        }
        const { skip, take } = paginate(data)
        // Execute the query with the built condition
        const companies = await prismaClient.company.findMany({ ...condition, take, skip })
        const counter = await prismaClient.company.count({ ...condition })
        const count = Math.ceil(counter / take)

        return { companies, count }
    } catch (err) {
        logger.error(err)
        return { companies: [], count: 0 }
    } finally {
        await prismaClient.$disconnect()
    }
}

export const createPaymentMethodService = async (data: payment_method) => {
    const { id, ...newData } = data
    console.log(newData)
    try {
        const p = await prismaClient.payment_method.create({
            data: newData
        })
        return p
    } catch (err) {
        logger.error(err)
        return null
    } finally {
        await prismaClient.$disconnect()
    }
}

export const updatePaymentMethodService = async (data: payment_method) => {
    const { id, ...newData } = data

    console.log(newData)
    try {
        const p = await prismaClient.payment_method.update({
            where: { id: id },
            data: newData
        })
        return p
    } catch (err) {
        logger.error(err)
        return null
    } finally {
        await prismaClient.$disconnect()
    }
}

export const deletePaymentMethodService = async (id: number, companyId: number) => {
    try {
        const p = await prismaClient.payment_method.delete({
            where: { id, companyId }
        })
        return p
    } catch (err) {
        logger.error(err)
        return null
    } finally {
        await prismaClient.$disconnect()
    }
}
