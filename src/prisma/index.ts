import { PrismaClient } from '@prisma/client'
import extension from '../utils/extension'
extension

const prismaClient = new PrismaClient({
    // log: ["query"]
})

export default prismaClient
