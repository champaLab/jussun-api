import { Request, Response } from 'express'
import { checkDataNull, companiesService, companyForAutocompleteService, createCompanyService, updateCompanyService } from './service'
import { tokenPayloadService } from '../user/service'
import { getPhotoPath } from '../../utils/fileUrl'
import { dateFormatter, today } from '../../utils/dateFormat'
import env from '../../env'

export const companyForAutocompleteController = async (req: Request, res: Response) => {
    const payload = tokenPayloadService(req)
    let companyId = payload.companyId
    if (payload.role === 'ADMIN' || payload.role === 'SUPERADMIN') {
        companyId = null
    }

    const company = await companyForAutocompleteService(companyId)

    return res.json({
        status: 'success',
        company
    })
}

export const companyController = async (req: Request, res: Response) => {
    const payload = tokenPayloadService(req)
    const key = req.body.key
    const page = req.body.page
    let companyId = req.body.companyId
    if ((payload.role === 'ADMIN' || payload.role === 'SUPERADMIN') && companyId) {
        companyId = req.body.companyId
    } else if (payload.role != 'ADMIN' && payload.role != 'SUPERADMIN') {
        companyId = payload.companyId
    }

    const result = await companiesService({ companyId, key, page })

    const companyRes = result.companies.map((item, i) => ({
        ...item,
        indexNo: (i + 1) * page,
        logoPath: item.logoPath ? `${env.HOST_IMAGE}${env.BASE_PATH}${item.logoPath}` : null,
        logoOriginal: item.logoPath,
        createdAt: dateFormatter(item.createdAt),
        updatedAt: dateFormatter(item.updatedAt)
    }))

    return res.json({
        status: 'success',
        company: companyRes,
        count: result.count
    })
}

export const createCompanyController = async (req: Request, res: Response) => {
    const payload = tokenPayloadService(req)
    const createdBy = payload.userId
    const companyId: any = checkDataNull(req.body.companyId, 'number')
    const address: any = checkDataNull(req.body.address)
    const companyName: any = checkDataNull(req.body.companyName)
    const companyStatus: any = req.body.companyStatus === 'true'
    const email: any = checkDataNull(req.body.email)
    const fax: any = checkDataNull(req.body.fax)
    const tel: any = checkDataNull(req.body.tel)
    const financeTel: any = checkDataNull(req.body.financeTel)
    const whatsapp: any = checkDataNull(req.body.whatsapp)
    const logoPath: any = getPhotoPath(req.file) ?? checkDataNull(req.body.logoOriginal)

    const p = await createCompanyService({
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
        createdAt: today(),
        updatedAt: today(),
        updatedBy: null,
        financeTel
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
    const createdBy = payload.userId
    const companyId: any = checkDataNull(req.body.companyId, 'number')
    const address: any = checkDataNull(req.body.address)
    const companyName: any = checkDataNull(req.body.companyName)
    const companyStatus: any = req.body.companyStatus === 'true'
    const email: any = checkDataNull(req.body.email)
    const fax: any = checkDataNull(req.body.fax)
    const tel: any = checkDataNull(req.body.tel)
    const whatsapp: any = checkDataNull(req.body.whatsapp)
    const logoPath: any = getPhotoPath(req.file) ?? checkDataNull(req.body.logoOriginal)
    const financeTel: any = checkDataNull(req.body.financeTel)

    const p = await updateCompanyService({
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
        createdAt: null,
        updatedAt: null,
        updatedBy: payload.userId,
        financeTel
    })
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
