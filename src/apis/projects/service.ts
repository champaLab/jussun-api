import { projects } from '@prisma/client'
import logger from '../../configs/winston'
import prismaClient from '../../prisma'
import dayjs from 'dayjs'
import { ProjectModel } from './type'
import env from '../../env'

export const projectsService = async (data: { companyId: number; key: string | null; page: number }) => {
    const skip = data.key ? 0 : (data.page - 1) * env.ROW_PER_PAGE
    const take = env.ROW_PER_PAGE
    const key = data.key ? `%${data.key}%` : null

    try {
        if (!key) {
            const p = await prismaClient.projects.findMany({
                where: { companyId: data.companyId }
            })
            return p
        }

        const p = await prismaClient.$queryRaw`
        SELECT p.* FROM projects p 
        WHERE p.companyId = ${data.companyId} 
        AND (
            p.projectName LIKE ${key}  OR 
            p.address LIKE ${key} 
        ) ORDER BY p.createdAt DESC 
        LIMIT ${take} OFFSET ${skip} 
        `
        return p
    } catch (err) {
        logger.error(err)
        return []
    } finally {
        prismaClient.$disconnect()
    }
}

export const createProjectService = async (data: ProjectModel) => {
    console.log(data)
    try {
        const p = await prismaClient.projects.create({
            data: {
                area: data.area,
                companyId: data.companyId,
                createdBy: data.createdBy,
                projectName: data.projectName,
                address: data.address
            }
        })
        return p
    } catch (err) {
        logger.error(err)
        return null
    }
}

export const updateProjectService = async (projectId: number, data: ProjectModel) => {
    console.log({ data, projectId })
    try {
        const p = await prismaClient.projects.update({
            where: {
                projectId: projectId
            },
            data: {
                area: data.area,
                companyId: data.companyId,
                updatedBy: data.createdBy,
                projectName: data.projectName,
                address: data.address,
                updatedAt: dayjs().toDate()
            }
        })
        return p
    } catch (err) {
        logger.error(err)
        return null
    }
}
