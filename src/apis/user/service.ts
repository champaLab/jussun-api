import logger from '../../configs/winston'
import prismaClient from '../../prisma'
import { company, users } from '@prisma/client'
import { TUserCreateModel, TUserPayloadModel } from './type'
import { Request } from 'express'

export const findManyUserService = async (data: { companyId: number; key: string | null }) => {
    const filter: any = { companyId: data.companyId }

    if (data.key) {
        filter.OR = [{ fullName: { contains: data.key } }, { lastName: { contains: data.key } }]
    }

    try {
        const user = await prismaClient.users.findMany({ where: filter })
        return user
    } catch (err) {
        logger.error(err)
        return null
    }
}

export const findOneUserService = async (data: { tel: string }) => {
    try {
        const user = await prismaClient.users.findFirst({ where: { tel: data.tel } })
        return user
    } catch (err) {
        logger.error(err)
        return null
    }
}

export const createUserService = async (data: TUserCreateModel) => {
    console.log(data)
    try {
        const user = await prismaClient.users.create({
            data: {
                tel: data.tel,
                role: data.role,
                userStatus: data.userStatus,
                fullName: data.fullName,
                lastName: data.lastName,
                password: data.password,
                companyId: data.companyId
            }
        })
        return user
    } catch (err) {
        logger.error(err)
        console.error(err)
        return null
    }
}

export const updateUserAndPasswordService = async (userId: number, data: TUserCreateModel) => {
    try {
        const user = await prismaClient.users.update({
            where: {
                userId: userId
            },
            data: {
                tel: data.tel,
                companyId: data.companyId,
                fullName: data.fullName,
                lastName: data.lastName,
                password: data.password,
                role: data.role,
                userStatus: data.userStatus
            }
        })
        return user
    } catch (err) {
        logger.error(err)
        return null
    }
}

export const updateUserService = async (userId: number, data: TUserCreateModel) => {
    try {
        const user = await prismaClient.users.update({
            where: {
                userId: userId
            },
            data: {
                tel: data.tel,
                companyId: data.companyId,
                fullName: data.fullName,
                lastName: data.lastName,
                role: data.role,
                userStatus: data.userStatus
            }
        })
        return user
    } catch (err) {
        logger.error(err)
        return null
    }
}

export const mergePayloadUserService = (user: users, company: company | null) => {
    const payload: TUserPayloadModel = {
        userId: user.userId,
        tel: user.tel,
        role: user.role,
        userStatus: user.userStatus,
        fullName: user.fullName,
        companyId: user.companyId,
        fax: company ? company.fax : null,
        companyTel: company ? company.tel : null,
        logoPath: company ? company.logoPath : null,
        companyName: company ? company.companyName : null,
        address: company ? company.address : null,
        email: company ? company.email : null,
        abbreviatedLetters: company ? company.abbreviatedLetters : null
    }

    return payload
}

export const tokenPayloadService = (req: Request): TUserPayloadModel => {
    //@ts-ignore
    const data = req.tokenPayload
    return data
}
