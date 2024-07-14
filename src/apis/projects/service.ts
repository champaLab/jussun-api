import { projects } from '@prisma/client'
import logger from '../../configs/winston'
import prismaClient from '../../prisma'
import dayjs from 'dayjs'
import { ProjectModel } from './type'

export const projectsService = async (data: { companyId: number }) => {
    try {
        const p = await prismaClient.projects.findMany({
            where: {
                companyId: data.companyId
            }
        })
        return p
    } catch (err) {
        logger.error(err)
        return []
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
