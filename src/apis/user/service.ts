import logger from '../../configs/winston'
import prismaClient from '../../prisma'
import { company, Prisma, users } from '@prisma/client'
import { TResponseUserModel, TUserCreateModel, TUserPayloadModel } from './type'
import { Request } from 'express'
import env from '../../env'
import { TResponseModel } from '../invoice/type'

export const findManyUserService = async (data: { companyId: number | null; key: string | null; page: number; role: string | null }) => {
    const skip = data.key ? 0 : (data.page - 1) * env.ROW_PER_PAGE
    const take = env.ROW_PER_PAGE
    const { role, companyId } = data
    const key = data.key ? `%${data.key}%` : null

    let conditions: Prisma.Sql[] = []

    if (role) {
        conditions.push(Prisma.sql`u.role = ${role}`)
    }

    if (companyId) {
        conditions.push(Prisma.sql`u.companyId = ${companyId}`)
    }
    if (key) {
        conditions.push(Prisma.sql`(u.tel = ${data.key} OR u.fullName LIKE ${key} OR u.lastName LIKE ${key})`)
    }

    let whereClause = Prisma.sql``
    if (conditions.length > 0) {
        whereClause = Prisma.sql`WHERE ${Prisma.join(conditions, ` AND `)}`
    }
    console.log(role, conditions, { companyId })

    try {
        const totalCountResult: any[] = await prismaClient.$queryRaw`
            SELECT COUNT(*) AS totalCount
            FROM users u
            LEFT JOIN company com ON com.companyId = u.companyId
            ${whereClause}
        `

        const totalCount = Number(totalCountResult[0]?.totalCount ?? 0)
        const count = Math.ceil(totalCount / take)

        const users: any[] = await prismaClient.$queryRaw`
            SELECT u.*, com.companyName
            FROM users u
            LEFT JOIN company com ON com.companyId = u.companyId
            ${whereClause}
            LIMIT ${take}
            OFFSET ${skip}
        `

        return { users, count }
    } catch (err) {
        console.error(err)
        return { users: [], count: 0 }
    } finally {
        await prismaClient.$disconnect()
    }
}

export const findOneUserService = async (data: { tel: string }) => {
    try {
        const user = await prismaClient.users.findFirst({ where: { tel: data.tel } })
        return user
    } catch (err) {
        logger.error(err)
        return null
    } finally {
        await prismaClient.$disconnect()
    }
}

export const createUserService = async (data: TUserCreateModel) => {
    console.log(data)
    try {
        const user = await prismaClient.users.create({
            data: {
                tel: data.tel,
                role: data.role,
                userStatus: data.userStatus === 1 ? true : false,
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
    } finally {
        await prismaClient.$disconnect()
    }
}

export const updateUserAndPasswordService = async (userId: number, data: TUserCreateModel) => {
    console.log(data)
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
                userStatus: data.userStatus === 1 ? true : false
            }
        })
        return user
    } catch (err) {
        logger.error(err)
        return null
    }
}

export const updateUserService = async (userId: number, data: TUserCreateModel) => {
    console.log(data)
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
                userStatus: data.userStatus === 1 ? true : false
            }
        })
        return user
    } catch (err) {
        logger.error(err)
        return null
    } finally {
        await prismaClient.$disconnect()
    }
}

export const mergePayloadUserService = (user: users, company: company | null) => {
    const payload: TUserPayloadModel = {
        userId: user.userId,
        tel: user.tel,
        role: user.role ?? 'CUSTOMER',
        userStatus: user.userStatus ?? false,
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

export const findUserService = async (data: { key: string }) => {
    try {
        const user = await prismaClient.users.findFirst({
            where: {
                OR: [{ tel: data.key }, { fullName: { contains: data.key } }, { lastName: { contains: data.key } }]
            }
        })

        return user
    } catch (err) {
        logger.error(err)
        console.error(err)
        return null
    } finally {
        prismaClient.$disconnect()
    }
}

export const sentCodeService = async (data: { code: string; tel: string }) => {
    try {
        const user = await prismaClient.otp.create({
            data: {
                code: data.code,
                tel: data.tel
            }
        })

        return user
    } catch (err) {
        logger.error(err)
        console.error(err)
        return null
    } finally {
        prismaClient.$disconnect()
    }
}

export const verifyCodeService = async (data: { code: string; tel: string }) => {
    try {
        const user = await prismaClient.otp.updateMany({
            where: {
                code: data.code,
                confirm: 'NO',
                tel: data.tel
            },
            data: {
                confirm: 'YES'
            }
        })

        return user
    } catch (err) {
        logger.error(err)
        console.error(err)
        return null
    } finally {
        prismaClient.$disconnect()
    }
}

export const resetPasswordService = async (data: { password: string; tel: string }) => {
    console.log({ data })
    try {
        const user = await prismaClient.users.update({
            where: {
                tel: data.tel
            },
            data: {
                password: data.password
            }
        })

        return user
    } catch (err) {
        logger.error(err)
        console.error(err)
        return null
    } finally {
        prismaClient.$disconnect()
    }
}

export const findUserForResetService = async (tel: string) => {
    try {
        const users = await prismaClient.users.findFirst({
            where: {
                tel
            },
            select: {
                tel: true,
                fullName: true,
                lastName: true,
                userStatus: true
            }
        })

        return users
    } catch (err) {
        logger.error(err)
        console.error(err)
        return null
    } finally {
        prismaClient.$disconnect()
    }
}
