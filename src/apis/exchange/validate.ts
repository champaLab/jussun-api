import { body } from 'express-validator'

export const valCreateExchange = [
    body('lak').not().isEmpty().withMessage('ກະລຸນາປ້ອນ ອັດຕາແລກປ່ຽນ ກີບ '),
    body('thb').not().isEmpty().withMessage('ກະລຸນາປ້ອນ ອັດຕາແລກປ່ຽນ ບາດ'),
    body('usd').not().isEmpty().withMessage('ກະລຸນາປ້ອນ ອັດຕາແລກປ່ຽນ ໂດລາ')
]

export const valCompanyUpdate = [
    body('companyId').not().isEmpty().withMessage('ກະລຸນາເລືອກ ບໍລິສັດ'),
    body('companyName').not().isEmpty().withMessage('ກະລຸນາປ້ອນຊື່ບໍລິສັດ'),
    body('tel').not().isEmpty().withMessage('ກະລຸນາປ້ອນ ໝາຍເລກໂທລະສັບ'),
    body('address').not().isEmpty().withMessage('ກະລຸນາປ້ອນ ທີ່ຢູ່ ບໍລິສັດ')
]
