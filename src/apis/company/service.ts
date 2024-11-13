import { company } from '@prisma/client'
import logger from '../../configs/winston'
import prismaClient from '../../prisma'
import { paginate } from '../../utils/functions'

export const findOneCompanyService = async (data: { companyId: number }) => {
    try {
        const p = await prismaClient.company.findFirst({ where: { companyId: data.companyId } })
        return p
    } catch (err) {
        logger.error(err)
        return null
    } finally {
        await prismaClient.$disconnect()
    }
}

export const companyForAutocompleteService = async (companyId: number | null) => {
    try {
        if (companyId) {
            const com = await prismaClient.company.findMany({
                where: { companyId: companyId, companyStatus: true },
                select: { companyId: true, companyName: true, tel: true }
            })
            return com
        }

        const p = await prismaClient.company.findMany({
            where: { companyStatus: true },
            select: { companyId: true, companyName: true, tel: true }
        })
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

export const createCompanyService = async (data: company) => {
    const { companyId, createdAt, ...newData } = data
    try {
        const p = await prismaClient.company.create({
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

export const checkDataNull = (value: string, type?: 'string' | 'number' | 'boolean') => {
    if (value === 'undefined' || value === 'null' || value === '') return null
    if (type === 'number') return parseInt(value)
    if (type === 'boolean') return value === 'true' ? true : false
    return value
}

export const updateCompanyService = async (data: company) => {
    const { companyId, createdAt, ...newData } = data
    try {
        const p = await prismaClient.company.update({
            where: {
                companyId: data.companyId
            },
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
