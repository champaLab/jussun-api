import logger from '../../configs/winston'
import prismaClient from '../../prisma'
import { CompanyModel } from './type'

export const findManyPaidToDayService = async (data: { companyId: number; gte: number; lte: number }) => {
    try {
        const p = await prismaClient.contracts.findMany({
            where: { companyId: data.companyId, AND: [{ payDay: { gte: data.gte } }, { payDay: { lte: data.lte } }] }
        })
        return p
    } catch (err) {
        logger.error(err)
        return []
    }
}
