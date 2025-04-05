import { Prisma, project_item } from '@prisma/client'
import logger from '../../configs/winston'
import prismaClient from '../../prisma'
import env from '../../env'
import { today } from '../../utils/dateFormat'

export const projectsForAutocompleteService = async ({ companyId, projectId }: { companyId: number; projectId: number }) => {

    try {
        const p = await prismaClient.project_item.findMany({
            where: {
                companyId,
                deletedAt: null,
                projectId,
                OR: [
                    {
                        contract_items: {
                            none: {},
                        },
                    },
                    {
                        contract_items: {
                            every: {
                                deletedAt: {
                                    not: null,
                                },
                            },
                        },
                    },
                ],
            },
            select: {
                title: true,
                code: true,
                id: true,
                area: true,
                price: true,

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
    const key = data.key?.trim() || null

    try {
        const whereClause: Prisma.project_itemScalarWhereInput = {
            companyId: data.companyId,
            deletedAt: null,
        }

        if (data.projectId) {
            whereClause.projectId = {
                equals: data.projectId
            }
        }

        if (key) {
            whereClause.OR = [
                {
                    title: {
                        contains: key,
                    },
                },
                {
                    content: {
                        contains: key,
                    },
                },
            ]
        }

        const [projects, total] = await prismaClient.$transaction([
            prismaClient.project_item.findMany({
                where: whereClause,
                include: {
                    contract_items: {
                        select: {
                            deletedAt: true
                        }
                    }
                },
                skip,
                take,
                orderBy: {
                    createdAt: 'desc',
                },
            }),
            prismaClient.project_item.count({
                where: whereClause,
            }),
        ])

        const count = Math.ceil(total / take)

        return { count, projects }
    } catch (err) {
        logger.error(err)
        return { count: 0, projects: [] }
    } finally {
        await prismaClient.$disconnect()
    }
}


export const createProjectItemService = async (
    data: Pick<project_item, 'area' | 'code' | 'companyId' | 'content' | 'createdAt' | 'projectId' | 'title' | 'deletedAt'>
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
    data: Pick<project_item, 'id' | 'area' | 'code' | 'companyId' | 'content' | 'updatedAt' | 'projectId' | 'title'>
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
