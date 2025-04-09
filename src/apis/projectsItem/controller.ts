import { Request, Response } from 'express'
import { createProjectItemService, deleteProjectItemService, projectsForAutocompleteService, projectItemService, updateProjectItemService } from './service'
import { tokenPayloadService } from '../user/service'
import { dateFormatter, today } from '../../utils/dateFormat'
import { historyService } from '../../utils/createLog'

export const projectItemForAutocompleteController = async (req: Request, res: Response) => {
    const payload = tokenPayloadService(req)
    const companyId = payload.companyId
    const projectId = Number(req.params.projectId)
    const projects = await projectsForAutocompleteService({ companyId, projectId })

    res.json(projects)
}

export const projectItemController = async (req: Request, res: Response) => {
    const payload = tokenPayloadService(req)
    const projectId = req.body.projectId
    let companyId = req.body.companyId
    const key = req.body.key
    const page = req.body.page ? Number(req.body.page) : 1

    if ((payload.role === 'ADMIN' || payload.role === 'SUPERADMIN') && companyId) {
        companyId = Number(companyId)
    } else {
        companyId = payload.companyId
    }

    const result = await projectItemService({ companyId, key, page, projectId })
    const projects = result.projects.map((item, i) => ({
        ...item,
        indexNo: (i + 1) * page,
        createdAt: dateFormatter({ date: item.createdAt }),
        updatedAt: dateFormatter({ date: item.updatedAt })
    }))

    res.json({
        status: 'success',
        projects,
        count: result.count
    })
}

export const createProjectItemController = async (req: Request, res: Response) => {
    const payload = tokenPayloadService(req)
    const area = Number(req.body.area)
    const companyId = payload.companyId
    const title = req.body.title
    const content = req.body.content
    const code = req.body.code
    const description = 'ເພີ່ມຂໍ້ມູນໂຄງການ'
    const createdAt = today()
    const projectId = req.body.projectId
    const status = 'ACTIVE'

    if (!companyId) {
        res.json({
            status: 'error',
            message: 'Company ID is required'
        })
        return
    }

    try {
        const p = await createProjectItemService({
            area,
            code,
            companyId,
            createdAt,
            projectId,
            content,
            title,
            deletedAt: null
        })

        if (!p) {
            res.json({
                status: 'error',
                message: 'ລະຫັດໂຄງການນີ້ ມີໃນລະບົບແລ້ວ'
            })
            return
        }

        await historyService({ req, description })
        res.json({
            status: 'success',
            message: 'ສ້າງໂຄງການ ສຳເລັດແລ້ວ'
        })
    } catch (error) {
        res.json({
            status: 'error',
            message: ''
        })
    }
}

export const updateProjectItemController = async (req: Request, res: Response) => {
    const payload = tokenPayloadService(req)
    const id = Number(req.body.id)
    const area = Number(req.body.area)
    const companyId = payload.companyId
    const title = req.body.title
    const content = req.body.content
    const code = req.body.code
    const updatedAt = today()
    const status = req.body.status
    const projectId = req.body.projectId

    const p = await updateProjectItemService({
        id,
        area,
        code,
        companyId,
        updatedAt,
        projectId,
        content,
        title
    })
    if (!p) {
        res.json({
            status: 'error',
            message: 'ແກ້ໄຂໂຄງການ ຜິດພາດ ລອງໃໝ່ໃນພາຍຫຼັງ'
        })
        return
    }
    const description = 'ແກ້ໄຂຂໍ້ມູນໂຄງການ'
    await historyService({ req, description })

    res.json({
        status: 'success',
        message: 'ແກ້ໄຂໂຄງການ ສຳເລັດແລ້ວ'
    })
}

export const deleteProjectItemController = async (req: Request, res: Response) => {
    const user = tokenPayloadService(req)
    const id = Number(req.params.id)
    const description = 'ລົບຂໍ້ມູນໂຄງການ project item id: ' + id

    const p = await deleteProjectItemService({
        id,
        companyId: user.companyId
    })

    if (!p) {
        res.json({
            status: 'error',
            message: 'ລົບຂໍ້ມູນໂຄງການ ຜິດພາດ ລອງໃໝ່ໃນພາຍຫຼັງ'
        })
        return
    }
    await historyService({ req, description })

    res.json({
        status: 'success',
        message: 'ແກ້ໄຂໂຄງການ ສຳເລັດແລ້ວ'
    })
}
