import { body } from 'express-validator'

export const valInvoicePaidToday = [
    body('dateStart').not().isEmpty().withMessage('ກະລຸນາເລືອກ ວັນທີເລີ່ມຕົ້ນ').isNumeric().not().withMessage('ວັນທີເລີ່ມຕົ້ນ ຕ້ອງເປັນຕົວເລກເທົ່ານັ້ນ'),
    body('dateEnd').not().isEmpty().withMessage('ກະລຸນາເລືອກ ວັນທີສິ້ນສຸດ').isNumeric().not().withMessage('ວັນທີສິ້ນສຸດ ຕ້ອງເປັນຕົວເລກເທົ່ານັ້ນ')
]

export const valCompanyCreate = [
    body('companyName').not().isEmpty().withMessage('ກະລຸນາປ້ອນຊື່ບໍລິສັດ'),
    body('tel').not().isEmpty().withMessage('ກະລຸນາປ້ອນ ໝາຍເລກໂທລະສັບ'),
    body('address').not().isEmpty().withMessage('ກະລຸນາປ້ອນ ທີ່ຢູ່ ບໍລິສັດ')
]

export const valCompanyUpdate = [
    body('companyId').not().isEmpty().withMessage('ກະລຸນາເລືອກ ບໍລິສັດ'),
    body('companyName').not().isEmpty().withMessage('ກະລຸນາປ້ອນຊື່ບໍລິສັດ'),
    body('tel').not().isEmpty().withMessage('ກະລຸນາປ້ອນ ໝາຍເລກໂທລະສັບ'),
    body('address').not().isEmpty().withMessage('ກະລຸນາປ້ອນ ທີ່ຢູ່ ບໍລິສັດ')
]
