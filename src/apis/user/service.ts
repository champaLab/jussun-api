import logger from '../../configs/winston'
import prismaClient from '../../prisma'
import { company, Prisma, users } from '@prisma/client'
import { TUserCreateModel, TUserPayloadModel } from './type'
import { Request } from 'express'
import env from '../../env'

export const findManyUserService = async (data: { companyId: number; key: string; page: number }) => {
    const skip = data.key ? 0 : (data.page - 1) * env.ROW_PER_PAGE
    const take = env.ROW_PER_PAGE
    const key = data.key ? `%${data.key}%` : null

    console.log('findManyUserService', { data })
    try {
        if (!key) {
            const user = await prismaClient.users.findMany({
                where: {
                    companyId: data.companyId
                },
                skip,
                take
            })
            return user
        }

        const user: any[] = await prismaClient.$queryRaw`
            SELECT * FROM users 
            WHERE 
            companyId = ${data.companyId} AND (
                fullName LIKE ${key} OR 
                lastName LIKE ${key} 
                OR tel LIKE ${key}
            ) ORDER BY createdAt DESC
             LIMIT ${take} OFFSET ${skip}        
        `
        return user
    } catch (err) {
        logger.error(err)
        return []
    } finally {
        prismaClient.$disconnect()
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
    } finally {
        await prismaClient.$disconnect()
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


export const findRoleService = async (data: { role: string, tel: string, key: string | null, fullName: string }) => {
    const { role, tel, key, fullName } = data;

    let condition = Prisma.sql``;
    let conditions:any = [];

    if (fullName) {
        conditions.push(Prisma.sql`u.fullName = ${fullName}`);
    }
    if (role) {
        conditions.push(Prisma.sql`u.role = ${role}`);
    }
    if (tel) {
        conditions.push(Prisma.sql`u.tel = ${tel}`);
    }
    if (key) {
        conditions.push(Prisma.sql`(u.tel = ${key} OR u.role = ${key} OR com.companyName = ${key})`);
    }

    if (conditions.length > 0) {
        condition = Prisma.sql`WHERE ${Prisma.join(conditions, ' AND ')}`;
    }

    try {
        const findRoleUser: any[] = await prismaClient.$queryRaw`
      SELECT u.*, com.companyName
      FROM users u
      LEFT JOIN company com ON com.companyId = u.companyId
      ${condition}
    `;
        return findRoleUser;
    } catch (err) {
        console.error(err);
        return null;
    } finally {
        await prismaClient.$disconnect();
    }
};