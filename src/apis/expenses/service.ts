import { expenses } from '@prisma/client'
import prismaClient from '../../prisma'
import env from '../../env'
import { dateFormatter, today } from '../../utils/dateFormat'
import dayjs from 'dayjs'

export const findManyExpenseService = async (data: { projectId: number | null; companyId: number; skip: number; take: number }) => {
    const { skip, take, companyId, projectId } = data

    try {
        const result = await prismaClient.expenses.findMany({
            where: {
                companyId: companyId,
                deletedAt: null,
                ...(projectId ? { projectId: projectId } : {})
            },

            include: {
                projects: {
                    select: {
                        projectName: true
                    }
                }
            },

            skip,
            take
        })

        const total = await prismaClient.expenses.count({
            where: {
                companyId: data.companyId,
                deletedAt: null,
                ...(data.companyId ? { projectId: data.companyId } : {})
            }
        })

        const _expenses = result.map((item, i) => ({
            ...item,
            indexNo: (i + 1) * (skip + 1),
            createdAt: dateFormatter({ date: item.createdAt }),
            updatedAt: dateFormatter({ date: item.updatedAt }),
            expenseDate: dayjs(item.expenseDate).add(7, 'hours').toDate(),
            expenseAt: dateFormatter({ date: item.expenseDate, format: 'DD MMM YYYY' })
        }))

        return {
            expenses: _expenses,
            count: Math.ceil(total / take)
        }
    } catch (err) {
        throw err
    } finally {
        await prismaClient.$disconnect()
    }
}

export const createExpenseService = async (data: Omit<expenses, 'id' | 'deletedAt'>) => {
    try {
        const receive = await prismaClient.expenses.create({
            data: data
        })
        return receive
    } catch (err) {
        throw err
    } finally {
        await prismaClient.$disconnect()
    }
}

export const updateExpenseService = async (data: Omit<expenses, 'deletedAt'>) => {
    try {
        const receive = await prismaClient.expenses.update({
            where: { id: data.id },
            data: data
        })
        return receive
    } catch (err) {
        throw err
    } finally {
        await prismaClient.$disconnect()
    }
}

export const deleteExpenseService = async (data: Pick<expenses, 'id' | 'companyId'>) => {
    try {
        const receive = await prismaClient.expenses.update({
            where: {
                id: data.id,
                companyId: data.companyId
            },
            data: {
                deletedAt: today()
            }
        })
        return receive
    } catch (err) {
        throw err
    } finally {
        await prismaClient.$disconnect()
    }
}
