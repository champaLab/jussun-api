import { Prisma, PrismaClient } from '@prisma/client'
import { DefaultArgs } from '@prisma/client/runtime/library'

export interface ProjectModel {
    area: number
    companyId: number
    createdBy: number
    projectName: string
    address: string
}

type PrismaTSX = Omit<PrismaClient<Prisma.PrismaClientOptions, never, DefaultArgs>, '$connect' | '$disconnect' | '$on' | '$transaction' | '$use' | '$extends'>
