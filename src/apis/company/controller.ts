import { Request, Response } from 'express'
import { companiesService, createCompanyService, updateCompanyService } from './service'
import { tokenPayloadService } from '../user/service'
import { getPhotoPath } from '../../utils/fileUrl'

export const companyController = async (req: Request, res: Response) => {
    const payload = tokenPayloadService(req)
    const companyId = payload.role === 'ADMIN' || payload.role === 'SUPERADMIN' ? req.body.companyId : payload.companyId

    const company = await companiesService({ companyId })
    return res.json({
        status: 'success',
        company
    })
}

export const createCompanyController = async (req: Request, res: Response) => {
    const payload = tokenPayloadService(req)
    const abbreviatedLetters = req.body.abbreviatedLetters
    const companyId = req.body.companyId
    const createdBy = req.body.createdBy
    const address = req.body.address
    const companyName = req.body.companyName
    const companyStatus = req.body.companyStatus
    const email = req.body.email
    const fax = req.body.fax
    const tel = req.body.tel
    const whatsapp = req.body.whatsapp
    const createBy = payload.userId
    const logoPath = getPhotoPath(req.file) ?? req.body.logoOri

    const p = await createCompanyService({
        abbreviatedLetters,
        companyId,
        createdBy,
        address,
        companyName,
        companyStatus,
        email,
        fax,
        logoPath,
        tel,
        whatsapp,
        createBy
    })
    if (!p) {
        return res.json({
            status: 'error',
            message: 'ສ້າງບໍລິສັດ ຜິດພາດ ລອງໃໝ່ໃນພາຍຫຼັງ'
        })
    }

    return res.json({
        status: 'success',
        message: 'ສ້າງບໍລິສັດ ສຳເລັດແລ້ວ'
    })
}

export const updateCompanyController = async (req: Request, res: Response) => {
    const payload = tokenPayloadService(req)
    const abbreviatedLetters = req.body.abbreviatedLetters
    const companyId = req.body.companyId
    const createdBy = req.body.createdBy
    const address = req.body.address
    const companyName = req.body.companyName
    const companyStatus = req.body.companyStatus
    const email = req.body.email
    const fax = req.body.fax
    const tel = req.body.tel
    const whatsapp = req.body.whatsapp
    const createBy = payload.userId
    const logoPath = getPhotoPath(req.file) ?? req.body.logoOri

    const p = await updateCompanyService(
        abbreviatedLetters,
        companyId,
        createdBy,
        address,
        companyName,
        companyStatus,
        email,
        fax,
        logoPath,
        tel,
        whatsapp,
        createBy
    )
    if (!p) {
        return res.json({
            status: 'error',
            message: 'ແກ້ໄຂຂໍ້ມູນບໍລິສັດ ຜິດພາດ ລອງໃໝ່ໃນພາຍຫຼັງ'
        })
    }

    return res.json({
        status: 'success',
        message: 'ແກ້ໄຂຂໍ້ມູນບໍລິສັດ ສຳເລັດແລ້ວ'
    })
}
