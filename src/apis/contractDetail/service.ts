import { contracts, invoice, Prisma, projects } from '@prisma/client'
import logger from '../../configs/winston'
import prismaClient from '../../prisma'
import env from '../../env'
import dayjs from 'dayjs'
import { ResInvoice, ResContract } from './type'

export const historiesPayByContractService = async (data: { contractId: number }) => {
    const { contractId } = data

    try {
        const result = await prismaClient.contracts.findFirst({
            where: {
                contractId,

            },
            include: {
                contract_customer: {
                    where: {
                        deletedAt: null
                    },
                    select: {
                        id: true,
                        users: {
                            select: { fullName: true, lastName: true }
                        }
                    }
                },
                company: {
                    select: {
                        companyName: true,
                        address: true,
                        logoPath: true,
                        tel: true
                    }
                },
                schedules: true,
                users_contracts_customerIdTousers: {
                    select: { fullName: true, lastName: true }
                },
                project_item: {
                    select: {
                        title: true,
                        code: true
                    }
                },
                projects: {
                    select: {
                        projectName: true
                    }
                },
                users_contracts_createdByTousers: {
                    select: {
                        fullName: true,
                        lastName: true
                    }
                }
            }
        })

        return result
    } catch (err) {
        throw err
    } finally {
        await prismaClient.$disconnect()
    }
}

export const invoicesByContractService = async ({ contractId }: { contractId: number }) => {
    try {

        const p = await prismaClient.invoice.findMany({
            where: {
                contractId
            },
            include: {
                company: {
                    select: {
                        address: true,
                        companyName: true,
                        tel: true,
                        logoPath: true
                    }
                }
            }
        })
        return p
    } catch (err) {
        logger.error(err)
        return []
    } finally {
        await prismaClient.$disconnect()
    }
}
