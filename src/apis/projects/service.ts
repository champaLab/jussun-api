import { projects } from '../../../prisma-client'
import logger from '../../configs/winston'
import prismaClient from '../../prisma'
import dayjs from 'dayjs'
import { ProjectModel } from './type'
import env from '../../env'
import { today } from '../../utils/dateFormat'

export const projectsForAutocompleteService = async (companyId: number) => {
    try {
        const p = await prismaClient.projects.findMany({ where: { companyId }, orderBy: { area: 'desc' } })

        return p
    } catch (err) {
        logger.error(err)
        return { count: 1, projects: [] }
    } finally {
        prismaClient.$disconnect()
    }
}

export const projectsService = async (data: { companyId: number; key: string | null; page: number }): Promise<{ count: number; projects: any }> => {
    const skip = data.key ? 0 : (data.page - 1) * env.ROW_PER_PAGE
    const take = env.ROW_PER_PAGE
    const key = data.key ? `%${data.key}%` : null

    try {
        let projects: any[] = []
        if (!key) {
            projects = await prismaClient.projects.findMany({
                where: { companyId: data.companyId, deletedAt: null },
                orderBy: { area: 'desc' },
                skip,
                take
            })
        } else {
            projects = await prismaClient.$queryRaw`
                SELECT p.* FROM projects p 
                WHERE p.companyId = ${data.companyId} 
                AND deletedAt = null 
                AND (
                    p.projectName LIKE ${key}  OR 
                    p.address LIKE ${key} 
                ) ORDER BY p.area DESC 
                LIMIT ${take} OFFSET ${skip} 
            `
        }

        const counter = await prismaClient.projects.count({ where: { companyId: data.companyId, deletedAt: null } })
        const count = Math.ceil(counter / take)

        return { count, projects }
    } catch (err) {
        logger.error(err)
        return { count: 0, projects: [] }
    } finally {
        prismaClient.$disconnect()
    }
}

export const createProjectService = async (data: projects) => {
    const { projectId, createdAt, updatedAt, ...newData } = data
    try {
        const p = await prismaClient.projects.create({
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

export const updateProjectService = async (data: projects) => {
    const { projectId, createdAt, ...newData } = data

    try {
        const p = await prismaClient.projects.update({
            where: {
                projectId: projectId
            },
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

export const deleteProjectService = async (data: { projectId: number; userId: number }) => {
    const { projectId, userId } = data

    try {
        const p = await prismaClient.projects.update({
            where: {
                projectId: projectId
            },
            data: {
                deletedAt: today(),
                deletedBy: userId
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
