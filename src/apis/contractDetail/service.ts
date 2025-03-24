import { contracts, invoice, Prisma, projects } from '@prisma/client'
import logger from '../../configs/winston'
import prismaClient from '../../prisma'
import env from '../../env'
import dayjs from 'dayjs'
import { ResInvoice, ResContract } from './type'

export const historiesPayByContractService = async (data: { contractId: number }) => {
    const { contractId } = data

    console.log({ contractId })

    try {
        const result = await prismaClient.contracts.findFirst({
            where: {
                contractId
            },
            include: {
                contract_customer: {
                    select: {
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
        logger.error(err)
        return null
    } finally {
        await prismaClient.$disconnect()
    }
}

export const invoicesByContractService = async ({ contractId }: { contractId: number }) => {
    try {
        // const p: ResInvoice[] = await prismaClient.$queryRaw`
        //     SELECT inv.*,
        //         CONCAT(u1.fullName, ' ', u1.lastName) receiptBy
        //     FROM invoice inv
        //             LEFT JOIN users u1 on u1.userId = inv.createdBy
        //     WHERE inv.contractId = ${contractId}
        // `

        const p = await prismaClient.invoice.findMany({
            where: {
                contractId
            },
            include: {}
        })
        return p
    } catch (err) {
        logger.error(err)
        return []
    } finally {
        await prismaClient.$disconnect()
    }
}
