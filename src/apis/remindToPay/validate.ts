import { body } from 'express-validator'

export const valRemind = [
    body('invoiceId').not().isEmpty().withMessage('ກະລຸນາເລືອກ ເລກທີໃບແຈ້ງໜີ້').isNumeric().not().withMessage('ເລກທີໃບແຈ້ງໜີ້ ຕ້ອງເປັນຕົວເລກເທົ່ານັ້ນ')
]
