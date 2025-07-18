import { body } from 'express-validator'

export const valProjectItemCreate = [
    body('title').not().isEmpty().withMessage('ກະລຸນາປ້ອນ ຊື່ຕອນດິນ'),
    body('code').not().isEmpty().withMessage('ກະລຸນາປ້ອນ ລະຫັດຕອນດິນ'),
    body('area').not().isEmpty().withMessage('ກະລຸນາປ້ອນ ເນື້ອທີ່ໂຄງການ ')
]

export const valProjectUpdate = [
    body('projectId').not().isEmpty().withMessage('ກະລຸນາເລືອກ ໂຄງການ'),
    body('projectName').not().isEmpty().withMessage('ກະລຸນາປ້ອນ ຊື່ໂຄງການ'),
    body('address').not().isEmpty().withMessage('ກະລຸນາປ້ອນ ທີ່ຢູ່ ໂຄງການ')
]
