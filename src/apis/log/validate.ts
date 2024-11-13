import { body } from 'express-validator'

export const valFindHistory = [
    body('dateStart').not().isEmpty().withMessage('ກະລຸນາເລືອກ ວັນທີເລີ່ມຕົ້ນ').isNumeric().not().withMessage('ວັນທີເລີ່ມຕົ້ນ ຕ້ອງເປັນຕົວເລກເທົ່ານັ້ນ'),
    body('dateEnd').not().isEmpty().withMessage('ກະລຸນາເລືອກ ວັນທີສິ້ນສຸດ').isNumeric().not().withMessage('ວັນທີສິ້ນສຸດ ຕ້ອງເປັນຕົວເລກເທົ່ານັ້ນ')
]
