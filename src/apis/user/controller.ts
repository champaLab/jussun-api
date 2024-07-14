import { Request, Response } from 'express'

import { decrypt, encrypt } from '../../utils/crypt'
import { sign } from '../../utils/jwt'
import {
    createUserService,
    findManyUserService,
    findOneUserService,
    mergePayloadUserService,
    tokenPayloadService,
    updateUserAndPasswordService,
    updateUserService
} from './service'
import { findOneCompanyService } from '../company/service'
import { company } from '@prisma/client'
import { dateFormatter } from '../../utils/dateFormat'

export const loginController = async (req: Request, res: Response) => {
    const tel = req.body.tel
    const password = req.body.password

    console.log(encrypt(password))

    const user = await findOneUserService({ tel })
    if (!user) {
        return res.json({
            status: 'error',
            message: 'ບໍ່ພົບຂໍ້ມູນຜູ້ໃຊ້ງານ'
        })
    } else if (!user.userStatus) {
        return res.json({
            status: 'error',
            message: 'ບັນຊີຂອງທ່ານ ຖືກລະງັບການໃຊ້ງານ'
        })
    }

    if (decrypt(user.password) !== password) {
        return res.json({
            status: 'error',
            message: 'ໝາຍເລກໂທລະສັບ ຫຼື ລະຫັດຜ່ານ ບໍ່ຖືກຕ້ອງ'
        })
    }

    let company: company | null = null
    if (user.role !== 'CUSTOMER') {
        company = await findOneCompanyService({ companyId: Number(user.companyId) })
        if (!company) {
            return res.json({
                status: 'error',
                message: 'ບໍ່ພົບຂໍ້ມູນບໍລິສັດ'
            })
        }

        if (!company.companyStatus) {
            return res.json({
                status: 'error',
                message: 'ບໍລິສັດຂອງທ່ານ ຖືກລະງັບການໃຊ້ງານ'
            })
        }
    }

    const payload = mergePayloadUserService(user, company)
    const token = await sign(payload)
    if (!token) {
        return res.json({
            status: 'error',
            message: 'Sign token error'
        })
    }

    return res.json({
        status: 'success',
        message: '',
        user: { ...payload, token }
    })
}

export const meController = async (req: Request, res: Response) => {
    const tokenPayload = tokenPayloadService(req)

    const user = await findOneUserService({ tel: tokenPayload.tel })
    if (!user) {
        return res.json({
            status: 'error',
            message: 'ບໍ່ພົບຂໍ້ມູນຜູ້ໃຊ້ງານ'
        })
    } else if (!user.userStatus) {
        return res.json({
            status: 'error',
            message: 'ບັນຊີຂອງທ່ານ ຖືກລະງັບການໃຊ້ງານ'
        })
    }

    let company: company | null = null
    if (user.role !== 'CUSTOMER') {
        company = await findOneCompanyService({ companyId: Number(user.companyId) })
        if (!company) {
            return res.json({
                status: 'error',
                message: 'ບໍ່ພົບຂໍ້ມູນບໍລິສັດ'
            })
        }

        if (!company.companyStatus) {
            return res.json({
                status: 'error',
                message: 'ບໍລິສັດຂອງທ່ານ ຖືກລະງັບການໃຊ້ງານ'
            })
        }
    }

    const payload = mergePayloadUserService(user, company)
    const token = await sign(payload)
    if (!token) {
        return res.json({
            status: 'error',
            message: 'Sign token error'
        })
    }

    return res.json({
        status: 'success',
        message: '',
        user: { ...payload, token }
    })
}

export const userController = async (req: Request, res: Response) => {
    const payload = tokenPayloadService(req)
    const key = req.body.key
    const page = req.body.page ? Number(req.body.page) : 1

    let companyId = req.body.companyId
    if ((payload.role === 'ADMIN' || payload.role === 'SUPERADMIN') && companyId) {
        companyId = Number(companyId)
    } else {
        companyId = payload.companyId
    }

    const u = await findManyUserService({ companyId, key, page })

    const users = u.map((user) => ({
        ...user,
        createdAt: dateFormatter(user.createdAt)
    }))

    return res.json({
        status: 'success',
        users
    })
}

export const createUserController = async (req: Request, res: Response) => {
    const payload = tokenPayloadService(req)
    const tel = req.body.tel
    const fullName = req.body.fullName
    const lastName = req.body.lastName
    const pass = req.body.password
    const role = req.body.role
    const userStatus = true
    let companyId: number | null = req.body.companyId

    if (role === 'CUSTOMER') {
        companyId = null
    } else if (companyId && (payload.role === 'ADMIN' || payload.role === 'SUPERADMIN')) {
        companyId = Number(companyId)
    } else if (!companyId) {
        companyId = payload.companyId
    }

    const user = await findOneUserService({ tel })
    if (user) {
        return res.json({
            status: 'error',
            message: 'ໝາຍເລກໂທລະສັບນີ້ມີໃນລະບົບແລ້ວ'
        })
    }

    const password = encrypt(pass)
    const create = await createUserService({ tel, companyId, fullName, lastName, password, role, userStatus })
    if (!create) {
        return res.json({
            status: 'error',
            message: 'ການສ້າງຜູ້ໃຊ້ງານ ຜິດພາດ ລອງໃໝ່ໃນພາຍຫຼັງ'
        })
    }

    return res.json({
        status: 'success',
        message: 'ການສ້າງຜູ້ໃຊ້ງານ ສຳເລັດແລ້ວ'
    })
}

export const updateUserController = async (req: Request, res: Response) => {
    const payload = tokenPayloadService(req)
    const userId = Number(req.body.userId)
    const tel = req.body.tel
    const fullName = req.body.fullName
    const lastName = req.body.lastName
    const pass = req.body.password != '' ? req.body.password : null
    const role = req.body.role

    const userStatus = req.body.userStatus

    let companyId: number | null = req.body.companyId

    if (role === 'CUSTOMER') {
        companyId = null
    } else if (companyId && (payload.role === 'ADMIN' || payload.role === 'SUPERADMIN')) {
        companyId = Number(companyId)
    } else if (!companyId) {
        companyId = payload.companyId
    }

    const user = await findOneUserService({ tel })
    if (user && user.userId !== userId) {
        return res.json({
            status: 'error',
            message: 'ໝາຍເລກໂທລະສັບນີ້ມີໃນລະບົບແລ້ວ'
        })
    }

    if (pass) {
        const password = encrypt(pass)
        const updated = await updateUserAndPasswordService(userId, { tel, companyId, fullName, lastName, password, role, userStatus })
        if (!updated) {
            return res.json({
                status: 'error',
                message: 'ແກ້ໄຂຂໍ້ມູນຜູ້ໃຊ້ງານ ຜິດພາດ ລອງໃໝ່ໃນພາຍຫຼັງ'
            })
        }
    } else {
        const updated = await updateUserService(userId, { tel, companyId, fullName, lastName, password: '', role, userStatus })
        if (!updated) {
            return res.json({
                status: 'error',
                message: 'ແກ້ໄຂຂໍ້ມູນຜູ້ໃຊ້ງານ ຜິດພາດ ລອງໃໝ່ໃນພາຍຫຼັງ'
            })
        }
    }

    return res.json({
        status: 'success',
        message: 'ແກ້ໄຂຂໍ້ມູນຜູ້ໃຊ້ງານ ສຳເລັດແລ້ວ'
    })
}
