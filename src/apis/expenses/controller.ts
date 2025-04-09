import { Request, Response } from 'express'
import { tokenPayloadService } from '../user/service'
import dayjs from 'dayjs'
import { today } from '../../utils/dateFormat'
import { createExpenseService, deleteExpenseService, findManyExpenseService, findManyExpenseSummaryService, findManyInvoiceService, findManyInvoiceSummaryService, updateExpenseService } from './service'
import { expenses } from '@prisma/client'
import env from '../../env'
import { handlerResponse } from '../../utils/handlerResponse'
import { Decimal } from '@prisma/client/runtime/library'

export const findManyExpenseController = async (req: Request, res: Response) => {
    try {
        const payload = tokenPayloadService(req)
        const companyId = req.body.companyId ? Number(req.body.companyId) : payload.companyId ?? 0
        const projectId = req.body.projectId
        const accounting: 'all' | 'income' | 'expense' = req.body.accounting
        let dateStart = req.body.dateStart ? dayjs(req.body.dateStart).toDate() : null
        let dateEnd = req.body.dateEnd ? dayjs(req.body.dateEnd).toDate() : null

        if (dateStart && !dateEnd) {
            dateEnd = dateStart
        }
        if (!dateStart && dateEnd) {
            dateStart = dateEnd
        }

        const page = req.body.page ?? 1
        const take = req.body.limit ?? env.ROW_PER_PAGE
        const skip = (page - 1) * take

        let expenses: any[] = []
        let incomes: any[] = []
        let count = 0

        if (accounting == 'all' || accounting == 'expense') {
            const expenseResult = await findManyExpenseService({ companyId, projectId, skip, take, dateStart, dateEnd })
            expenses = expenseResult.expenses
            count = expenseResult.count
        }

        if (accounting == 'all' || accounting == 'income') {
            const invoiceResult = await findManyInvoiceService({ companyId, projectId, skip, take, dateStart, dateEnd })
            incomes = invoiceResult.invoices
            if (count <= invoiceResult.count) count = invoiceResult.count
        }

        const totalExpense = await findManyExpenseSummaryService({ companyId, projectId, dateStart, dateEnd })
        const incomeTotal = await findManyInvoiceSummaryService({ companyId, projectId, dateStart, dateEnd })

        res.json({
            status: 'success',
            expenses,
            incomes,
            total: {
                expense: totalExpense,
                income: incomeTotal,
            },
            count,
        })
    } catch (error) {
        handlerResponse({ res, error })
    }
}

export const createExpenseController = async (req: Request, res: Response) => {
    try {
        const payload = tokenPayloadService(req)
        const data: Omit<expenses, 'id' | 'deletedAt'> = {
            amount: Decimal(req.body.amount),
            description: req.body.description,
            expenseDate: dayjs(req.body.expenseDate).subtract(7, 'hours').toDate(),
            projectId: req.body.projectId,
            userId: payload.userId,
            companyId: payload.companyId,
            currency: req.body.currency,
            createdAt: today(),
            updatedAt: today()
        }
        console.log(data)
        await createExpenseService(data)
        res.json({
            status: 'success',
            message: 'ບັນທຶກຂໍ້ມູນ ສຳເລັດແລ້ວ'
        })
    } catch (error) {
        handlerResponse({ res, error })
    }
}

export const updateExpenseController = async (req: Request, res: Response) => {
    try {
        const payload = tokenPayloadService(req)
        const data: Omit<expenses, 'deletedAt'> = {
            amount: Decimal(req.body.amount),
            description: req.body.description,
            expenseDate: dayjs(req.body.expenseDate).subtract(7, 'hours').toDate(),
            projectId: req.body.projectId,
            companyId: payload.companyId,
            userId: payload.userId,
            createdAt: today(),
            updatedAt: today(),
            id: req.body.id,
            currency: req.body.currency,
        }
        await updateExpenseService(data)
        res.json({
            status: 'success',
            message: 'ແກ້ໄຂຂໍ້ມູນ ສຳເລັດແລ້ວ'
        })
    } catch (error) {
        handlerResponse({ res, error })
    }
}

export const deleteExpenseController = async (req: Request, res: Response) => {
    try {
        const payload = tokenPayloadService(req)
        await deleteExpenseService({
            id: Number(req.params.id),
            companyId: payload.companyId
        })
        res.json({
            status: 'success',
            message: 'ລົບຂໍ້ມູນ ສຳເລັດແລ້ວ'
        })
    } catch (error) {
        handlerResponse({ res, error })
    }
}
