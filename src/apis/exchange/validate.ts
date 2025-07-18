import { body } from 'express-validator'

export const valCreateExchange = [
    body('thb').not().isEmpty().withMessage('ກະລຸນາປ້ອນ ອັດຕາແລກປ່ຽນ ບາດ').isFloat({ min: 1 }).withMessage('ອັດຕາແລກປ່ຽນ ບາດ ຕ້ອງຫຼາຍກວ່າ 0'),
    body('usd').not().isEmpty().withMessage('ກະລຸນາປ້ອນ ອັດຕາແລກປ່ຽນ ໂດລາ').isFloat({ min: 1 }).withMessage('ອັດຕາແລກປ່ຽນ ໂດລາ ຕ້ອງຫຼາຍກວ່າ 0')
]

export const valUpdateExchange = [
    body('exchangeId').not().isEmpty().withMessage(' '),
    body('lak').not().isEmpty().withMessage('ກະລຸນາປ້ອນ ອັດຕາແລກປ່ຽນ ກີບ'),
    body('thb').not().isEmpty().withMessage('ກະລຸນາປ້ອນ ອັດຕາແລກປ່ຽນ ບາດ'),
    body('usd').not().isEmpty().withMessage('ກະລຸນາປ້ອນ ອັດຕາແລກປ່ຽນ ໂດລາ')
]
export const valReadExchange = [body('page').not().isEmpty().withMessage('ກະລຸນາປ້ອນ ໜ້າ')]
