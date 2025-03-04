import { project_item } from '@prisma/client'
import logger from '../../configs/winston'
import prismaClient from '../../prisma'
import env from '../../env'
import { today } from '../../utils/dateFormat'

export const projectsForAutocompleteService = async ({ companyId, projectId }: { companyId: number; projectId: number }) => {
    console.log({ companyId })
    try {
        const p = await prismaClient.project_item.findMany({
            where: { companyId, deletedAt: null, projectId },
            select: {
                title: true,
                code: true,
                id: true
            },
            orderBy: { createdAt: 'desc' }
        })

        return p
    } catch (err) {
        logger.error(err)
        return []
    } finally {
        prismaClient.$disconnect()
    }
}

export const projectItemService = async (data: {
    companyId: number
    key: string | null
    page: number
    projectId: number
}): Promise<{ count: number; projects: any }> => {
    const skip = data.key ? 0 : (data.page - 1) * env.ROW_PER_PAGE
    const take = env.ROW_PER_PAGE
    const key = data.key ? `%${data.key}%` : null

    try {
        let projects: any[] = []
        if (!key) {
            projects = await prismaClient.$queryRaw`
                SELECT p.* FROM project_item p 
                WHERE p.companyId = ${data.companyId} 
                AND p.deletedAt IS NULL  
                AND p.projectId = ${data.projectId}
                ORDER BY p.status ASC 
                LIMIT ${take} OFFSET ${skip} 
                `
        } else {
            projects = await prismaClient.$queryRaw`
                SELECT p.* FROM project_item p 
                WHERE p.companyId = ${data.companyId} 
                AND p.deletedAt IS NULL  
                AND p.projectId = ${data.projectId}
                AND (
                    p.projectName LIKE ${key}  OR 
                    p.address LIKE ${key} 
                ) ORDER BY p.status ASC 
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

export const createProjectItemService = async (
    data: Pick<project_item, 'area' | 'code' | 'companyId' | 'content' | 'createdAt' | 'projectId' | 'title' | 'status' | 'deletedAt'>
) => {
    console.log(data)
    try {
        const p = await prismaClient.project_item.create({
            data: data
        })
        return p
    } catch (err: any) {
        console.log(err.message)
        throw err
    } finally {
        await prismaClient.$disconnect()
    }
}

export const updateProjectItemService = async (
    data: Pick<project_item, 'id' | 'area' | 'code' | 'companyId' | 'content' | 'updatedAt' | 'projectId' | 'title' | 'status'>
) => {
    const { id, ...newData } = data

    try {
        const p = await prismaClient.project_item.update({
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

export const deleteProjectItemService = async (data: Pick<project_item, 'id' | 'companyId'>) => {
    try {
        const p = await prismaClient.project_item.update({
            where: { id: data.id, companyId: data.companyId },
            data: {
                deletedAt: today()
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
