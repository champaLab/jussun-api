import { body } from 'express-validator'

export const valCompany = [body('companyId').not().isEmpty().withMessage('ກະລຸນາເລືອກ ບໍລິສັດ')]

export const valCompanyCreate = [
    body('companyName').not().isEmpty().withMessage('ກະລຸນາປ້ອນຊື່ບໍລິສັດ'),
    body('tel').not().isEmpty().withMessage('ກະລຸນາປ້ອນ ໝາຍເລກໂທລະສັບ'),
    body('address').not().isEmpty().withMessage('ກະລຸນາປ້ອນ ທີ່ຢູ່ ບໍລິສັດ')
]

export const valCompanyUpdate = [
    body('companyId').not().isEmpty().withMessage('ກະລຸນາເລືອກ ບໍລິສັດ'),
    body('tel').not().isEmpty().withMessage('ກະລຸນາປ້ອນ ໝາຍເລກໂທລະສັບ'),
    body('address').not().isEmpty().withMessage('ກະລຸນາປ້ອນ ທີ່ຢູ່ ບໍລິສັດ')
]
