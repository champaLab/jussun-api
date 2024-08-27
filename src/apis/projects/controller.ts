import { Request, Response } from 'express'
import { createProjectService, projectsForAutocompleteService, projectsService, updateProjectService } from './service'
import { tokenPayloadService } from '../user/service'
import { dateFormatter, today } from '../../utils/dateFormat'
import { historyService } from '../../utils/createLog'

export const projectsForAutocompleteController = async (req: Request, res: Response) => {
    const payload = tokenPayloadService(req)
    const projects = await projectsForAutocompleteService(payload.companyId!)

    return res.json({
        status: 'success',
        projects
    })
}

export const projectsController = async (req: Request, res: Response) => {
    const payload = tokenPayloadService(req)
    let companyId = req.body.companyId
    const key = req.body.key
    const page = req.body.page ? Number(req.body.page) : 1

    if ((payload.role === 'ADMIN' || payload.role === 'SUPERADMIN') && companyId) {
        companyId = Number(companyId)
    } else {
        companyId = payload.companyId
    }

    const result = await projectsService({ companyId, key, page })
    const projects = result.projects.map((item, i) => ({
        ...item,
        indexNo: (i + 1) * page,
        createdAt: dateFormatter(item.createdAt),
        updatedAt: dateFormatter(item.updatedAt)
    }))

    return res.json({
        status: 'success',
        projects,
        count: result.count
    })
}

export const createProjectController = async (req: Request, res: Response) => {
    const payload = tokenPayloadService(req)
    const area = Number(req.body.area)
    const companyId = payload.companyId
    const createdBy = payload.userId
    const projectName = req.body.projectName
    const address = req.body.address
    const code = req.body.code
    const description = 'ເພີ່ມຂໍ້ມູນໂຄງການ'
    const createdAt = null
    const projectId = 1
    const updatedAt = null
    const updatedBy = null

    if (!companyId) {
        return res.json({
            status: 'error',
            message: 'Company ID is required'
        })
    }

    const p = await createProjectService({
        address,
        area,
        code,
        companyId,
        createdAt,
        createdBy,
        projectId,
        projectName,
        updatedAt,
        updatedBy,
        deletedAt: null,
        deletedBy: null
    })

    if (!p) {
        return res.json({
            status: 'error',
            message: 'ລະຫັດໂຄງການນີ້ ມີໃນລະບົບແລ້ວ'
        })
    }
    await historyService({ req, description })
    return res.json({
        status: 'success',
        message: 'ສ້າງໂຄງການ ສຳເລັດແລ້ວ'
    })
}

export const updateProjectController = async (req: Request, res: Response) => {
    const payload = tokenPayloadService(req)
    const projectId = Number(req.body.projectId)
    const area = Number(req.body.area)
    const companyId = Number(req.body.companyId)
    const createdBy = payload.userId
    const projectName = req.body.projectName
    const address = req.body.address
    const code = req.body.code
    const description = 'ແກ້ໄຂຂໍ້ມູນໂຄງການ'
    const createdAt = null
    const updatedAt = today()
    const updatedBy = payload.userId

    const p = await updateProjectService({
        area,
        companyId,
        createdBy,
        projectName,
        address,
        code,
        createdAt,
        projectId,
        updatedAt,
        updatedBy,
        deletedAt: null,
        deletedBy: null
    })
    if (!p) {
        return res.json({
            status: 'error',
            message: 'ແກ້ໄຂໂຄງການ ຜິດພາດ ລອງໃໝ່ໃນພາຍຫຼັງ'
        })
    }
    await historyService({ req, description })

    return res.json({
        status: 'success',
        message: 'ແກ້ໄຂໂຄງການ ສຳເລັດແລ້ວ'
    })
}
