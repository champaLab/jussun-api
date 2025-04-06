import { Request, Response } from 'express'

import { decrypt, encrypt } from '../../utils/crypt'
import { sign } from '../../utils/jwt'
import {
    createUserService,
    findManyUserService,
    findOneUserService,
    findUserForResetService,
    findUserService,
    mergePayloadUserService,
    resetPasswordService,
    sentCodeService,
    tokenPayloadService,
    updateUserAndPasswordService,
    updateUserService,
    verifyCodeService
} from './service'
import { findOneCompanyService } from '../company/service'
import { company, users } from '@prisma/client'
import { dateFormatter } from '../../utils/dateFormat'
import { historyService } from '../../utils/createLog'

export const findUserForResetController = async (req: Request, res: Response) => {
    const tel = `${req.body.tel}`.trim().slice(-8)
    const user = await findUserForResetService(tel)

    if (!user) {
        res.json({
            status: 'error',
            message: 'ບໍ່ພົບບັນຊີ ທີ່ທ່ານຮ້ອງຂໍ'
        })
        return
    }

    if (user && !user.userStatus) {
        res.json({
            status: 'error',
            message: 'ບັນຊີຂອງທ່ານ ຖືກລະງັບການໃຊ້ງານ ຊົ່ວຄາວ'
        })
        return
    }

    const code = `${Math.floor(Math.random() * 900000) + 100000}`
    const verifyCode = await sentCodeService({ tel, code })
    if (!verifyCode) {
        res.json({
            status: 'error',
            message: 'ບໍ່ສາມາດສ້າງ ລະຫັດຢືນຢັນ ຜູ້ໃຊ້ງານໄດ້'
        })
        return
    }

    res.json({
        status: 'success',
        user
    })
}

export const verifyCodeController = async (req: Request, res: Response) => {
    const code = req.body.code
    const tel = `${req.body.tel}`.trim().slice(-8)
    const checkCode = await verifyCodeService({ code, tel })
    if (!checkCode || checkCode.count === 0) {
        res.json({ status: 'error', message: 'ການຢືນຢັນ ບໍ່ສຳເລັດ ລະຫັດຢືນຢັນ ບໍ່ຖືກຕ້ອງ' })
        return
    }

    res.json({ status: 'success', message: '' })
}

export const resetPasswordCodeController = async (req: Request, res: Response) => {
    const pass = req.body.password
    const password = encrypt(pass)
    const tel = req.body.tel

    const update = await resetPasswordService({ password, tel })
    if (!update) {
        res.json({
            status: 'error',
            message: 'ບໍ່ສາມາດ ປ່ຽນລະຫັດຜ່ານໄດ້'
        })
        return
    }

    res.json({
        status: 'success',
        message: 'ປ່ຽນລະຫັດຜ່ານ ສຳເລັດແລ້ວ'
    })
}

// -----------------
export const loginController = async (req: Request, res: Response) => {
    const tel = req.body.tel
    const password = req.body.password

    console.log(encrypt(password))

    const user: users | null = await findOneUserService({ tel })
    if (!user) {
        res.json({
            status: 'error',
            message: 'ບໍ່ພົບຂໍ້ມູນຜູ້ໃຊ້ງານ'
        })
        return
    } else if (!user.userStatus) {
        res.json({
            status: 'error',
            message: 'ບັນຊີຂອງທ່ານ ຖືກລະງັບການໃຊ້ງານ'
        })
        return
    }
    const decryptedPassword = decrypt(user!.password) // Assuming decrypt() returns the decrypted password as a string
    if (decryptedPassword !== password) {
        res.json({
            status: 'error',
            message: 'ໝາຍເລກໂທລະສັບ ຫຼື ລະຫັດຜ່າງ ບໍ່ຖືກຕ້ອງ'
        })
        return
    }

    let company: company | null = null
    if (user && user.role !== 'CUSTOMER') {
        company = await findOneCompanyService({ companyId: Number(user.companyId) })
        if (!company) {
            res.json({
                status: 'error',
                message: 'ບໍ່ພົບຂໍ້ມູນບໍລິສັດ'
            })
            return
        }

        if (company && !company.companyStatus) {
            res.json({
                status: 'error',
                message: 'ບໍລິສັດຂອງທ່ານ ຖືກລະງັບການໃຊ້ງານ'
            })
            return
        }
    }

    const payload = mergePayloadUserService(user!, company)
    const token = await sign(payload)
    if (!token) {
        res.json({
            status: 'error',
            message: 'Sign token error'
        })
        return
    }

    res.json({
        status: 'success',
        message: '',
        user: { ...payload, token }
    })
}

export const meController = async (req: Request, res: Response) => {
    try {
        const tokenPayload = tokenPayloadService(req)

        const user: users | null = await findOneUserService({ tel: tokenPayload.tel })
        if (!user) {
            res.json({
                status: 'invalid',
                message: 'ບໍ່ພົບຂໍ້ມູນຜູ້ໃຊ້ງານ'
            })
            return
        } else if (!user.userStatus) {
            res.json({
                status: 'invalid',
                message: 'ບັນຊີຂອງທ່ານ ຖືກລະງັບການໃຊ້ງານ'
            })
            return
        }

        let company: company | null = null
        if (user && user.role !== 'CUSTOMER') {
            company = await findOneCompanyService({ companyId: Number(user.companyId) })
            if (!company) {
                res.json({
                    status: 'invalid',
                    message: 'ບໍ່ພົບຂໍ້ມູນບໍລິສັດ'
                })
                return
            }

            if (company && !company.companyStatus) {
                res.json({
                    status: 'invalid',
                    message: 'ບໍລິສັດຂອງທ່ານ ຖືກລະງັບການໃຊ້ງານ'
                })
            }
        }

        const payload = mergePayloadUserService(user!, company)
        const token = await sign(payload)
        if (!token) {
            res.json({
                status: 'invalid',
                message: 'Sign token error'
            })
            return
        }

        res.json({
            status: 'success',
            message: '',
            user: { ...payload, token }
        })
    } catch (error) {
        res.json({
            status: 'error',
            message: '',
        })
    }
}

export const userController = async (req: Request, res: Response) => {
    const payload = tokenPayloadService(req)
    const key = req.body.key
    const page = req.body.page ? Number(req.body.page) : 1
    const role = req.body.role
    let companyId: number | null = Number(req.body.companyId)
    console.log(req.body)

    if ((payload.role === 'ADMIN' || payload.role === 'SUPERADMIN') && role && role === 'CUSTOMER') {
        companyId = null
    } else if (payload.role === 'OWNER' || payload.role === 'EMPLOYEE') {
        companyId = payload.companyId
    }

    console.log({ companyId })

    const u = await findManyUserService({ companyId, key, page, role })
    const users = u.users.map((item, i) => ({
        ...item,
        indexNo: (i + 1) * page,
        createdAt: dateFormatter(item.createdAt),
        updatedAt: dateFormatter(item.updatedAt)
    }))

    res.json({
        status: 'success',
        users,
        count: u.count
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
    const description = 'ເພີ່ມຂໍ້ມູນຜູ້ໃຊ້ງານ'

    if (role === 'CUSTOMER') {
        companyId = null
    } else if (companyId && (payload.role === 'ADMIN' || payload.role === 'SUPERADMIN')) {
        companyId = Number(companyId)
    } else if (!companyId) {
        companyId = payload.companyId
    }

    const user = await findOneUserService({ tel })
    if (user) {
        res.json({
            status: 'error',
            message: 'ໝາຍເລກໂທລະສັບນີ້ມີໃນລະບົບແລ້ວ'
        })
        return
    }

    const password = encrypt(pass)
    const create = await createUserService({ tel, companyId, fullName, lastName, password, role, userStatus })
    if (!create) {
        res.json({
            status: 'error',
            message: 'ການສ້າງຜູ້ໃຊ້ງານ ຜິດພາດ ລອງໃໝ່ໃນພາຍຫຼັງ'
        })
        return
    }

    await historyService({ req, description })

    res.json({
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
    const description = 'ແກ້ໄຂຂໍ້ມູນຜູ້ໃຊ້ງານ'

    const userStatus = req.body.userStatus === 1 || req.body.userStatus === true ? true : false

    console.log({ userStatus })

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
        res.json({
            status: 'error',
            message: 'ໝາຍເລກໂທລະສັບນີ້ມີໃນລະບົບແລ້ວ'
        })
        return
    }

    if (pass) {
        const password = encrypt(pass)
        const updated = await updateUserAndPasswordService(userId, { tel, companyId, fullName, lastName, password, role, userStatus })
        if (!updated) {
            res.json({
                status: 'error',
                message: 'ແກ້ໄຂຂໍ້ມູນຜູ້ໃຊ້ງານ ຜິດພາດ ລອງໃໝ່ໃນພາຍຫຼັງ'
            })
            return
        }
    } else {
        const updated = await updateUserService(userId, { tel, companyId, fullName, lastName, password: '', role, userStatus })
        if (!updated) {
            res.json({
                status: 'error',
                message: 'ແກ້ໄຂຂໍ້ມູນຜູ້ໃຊ້ງານ ຜິດພາດ ລອງໃໝ່ໃນພາຍຫຼັງ'
            })

            return
        }
    }

    await historyService({ req, description })

    res.json({
        status: 'success',
        message: 'ແກ້ໄຂຂໍ້ມູນຜູ້ໃຊ້ງານ ສຳເລັດແລ້ວ'
    })
}

export const findOneUserController = async (req: Request, res: Response) => {
    try {
        const key = req.body.key

        const user = await findUserService({ key })

        res.json({
            status: 'success',
            message: 'ພົບຂໍ້ມູນ 1 ລາຍການ',
            user
        })
    } catch (error) {
        res.json({
            status: 'error',
            message: 'ບໍ່ພົບຂໍ້ມູນທີ່ຄົ້ນຫາ',
            user: null
        })
    }
}
