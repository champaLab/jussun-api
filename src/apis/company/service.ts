import logger from '../../configs/winston'
import prismaClient from '../../prisma'
import { CompanyModel } from './type'

export const findOneCompanyService = async (data: { companyId: number }) => {
    try {
        const p = await prismaClient.company.findFirst({ where: { companyId: data.companyId } })
        return p
    } catch (err) {
        logger.error(err)
        return null
    }
}
export const companiesService = async (data: { companyId: number }) => {
    try {
        const p = await prismaClient.company.findMany({})
        return p
    } catch (err) {
        logger.error(err)
        return []
    }
}

export const createCompanyService = async (data: CompanyModel) => {
    console.log({data})
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
    }
}

export const updateCompanyService = async (
    data: CompanyModel,
    companyId: any,
    createdBy: any,
    address: any,
    companyName: any,
    companyStatus: any,
    email: any,
    fax: any,
    logoPath: any,
    tel: any,
    whatsapp: any,
    createBy: number
) => {
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
        return null
    }
}
