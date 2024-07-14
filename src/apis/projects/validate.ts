import { body } from 'express-validator'

export const valProject = [body('companyId').not().isEmpty().withMessage('ກະລຸນາເລືອກ ບໍລິສັດ')]

export const valProjectCreate = [
    body('companyId').not().isEmpty().withMessage('ກະລຸນາເລືອກ ບໍລິສັດ'),
    body('projectName').not().isEmpty().withMessage('ກະລຸນາປ້ອນ ຊື່ໂຄງການ'),
    body('address').not().isEmpty().withMessage('ກະລຸນາປ້ອນ ທີ່ຢູ່ ໂຄງການ'),
    body('area').not().isEmpty().withMessage('ກະລຸນາປ້ອນ ເນື້ອທີ່ໂຄງການ ')
]

export const valProjectUpdate = [
    body('projectId').not().isEmpty().withMessage('ກະລຸນາເລືອກ ໂຄງການ'),
    body('companyId').not().isEmpty().withMessage('ກະລຸນາເລືອກ ບໍລິສັດ'),
    body('projectName').not().isEmpty().withMessage('ກະລຸນາປ້ອນ ຊື່ໂຄງການ'),
    body('address').not().isEmpty().withMessage('ກະລຸນາປ້ອນ ທີ່ຢູ່ ໂຄງການ')
]
