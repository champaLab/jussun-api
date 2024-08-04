import logger from '../../configs/winston'
import prismaClient from '../../prisma'
import { paginate } from '../../utils/functions'
import { CompanyModel } from './type'

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

export const createCompanyService = async (data: CompanyModel) => {
    console.log({ data })
    try {
        const p = await prismaClient.company.create({
            data: {
                address: data.address,
                companyName: data.companyName,
                createdBy: data.createdBy,
                logoPath: data.logoPath,
                tel: data.tel,
                abbreviatedLetters: data.abbreviatedLetters,
                companyStatus: data.companyStatus,
                fax: data.fax,
                email: data.email,
                whatsapp: data.whatsapp
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

export const updateCompanyService = async (data: CompanyModel) => {
    console.log(data)
    try {
        const p = await prismaClient.company.update({
            where: {
                companyId: data.companyId
            },
            data: {
                address: data.address,
                companyName: data.companyName,
                updatedBy: data.createdBy,
                logoPath: data.logoPath,
                tel: data.tel,
                abbreviatedLetters: data.abbreviatedLetters,
                companyStatus: data.companyStatus,
                fax: data.fax,
                email: data.email,
                whatsapp: data.whatsapp
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
