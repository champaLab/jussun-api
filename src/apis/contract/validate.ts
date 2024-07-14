import { body } from 'express-validator'

export const valContract = [body('projectId').not().isEmpty().withMessage('ກະລຸນາເລືອກ ໂຄງການ')]

export const valContractCreate = [
    body('area').not().isEmpty().withMessage('ກະລຸນາປ້ອນ ເນື້ອທີ່ໂຄງການ '),
    body('currency').not().isEmpty().withMessage('ກະລຸນາປ້ອນ ສະກຸນເງິນ'),
    body('docId').not().isEmpty().withMessage('ກະລຸນາປ້ອນ ເລກທີສັນຍາ'),
    body('modeOfPayment').not().isEmpty().withMessage('ກະລຸນາປ້ອນ ຮູບແບບການຈ່າຍ'),
    body('numberOfInstallment').not().isEmpty().withMessage('ກະລຸນາປ້ອນ ຈຳນວນງວດ'),
    body('payInAdvance').not().isEmpty().withMessage('ກະລຸນາປ້ອນ ຈຳນວນຈ່າຍກ່ອນ'),
    body('paidDate').not().isEmpty().withMessage('ກະລຸນາປ້ອນ ວັນທີນັດຊຳລະ'),
    body('price').not().isEmpty().withMessage('ກະລຸນາປ້ອນ ຍອດເງິນ'),
    body('projectId').not().isEmpty().withMessage('ກະລຸນາເລືອກ ໂຄງການ'),
    body('totalPrice').not().isEmpty().withMessage('ກະລຸນາປ້ອນ ຍອດເງິນລວມ')
]

export const valContractUpdate = [
    body('contractId').not().isEmpty().withMessage('ກະລຸນາປ້ອນ ID '),
    body('area').isNumeric().not().withMessage('ເນື້ອທີ່ໂຄງການ ຕ້ອງເປັນຕົວເລກເທົ່ານັ້ນ').isEmpty().withMessage('ກະລຸນາປ້ອນ ເນື້ອທີ່ໂຄງການ '),
    body('currency').not().isEmpty().withMessage('ກະລຸນາປ້ອນ ສະກຸນເງິນ'),
    body('docId').not().isEmpty().withMessage('ກະລຸນາປ້ອນ ເລກທີສັນຍາ'),
    body('modeOfPayment').isNumeric().not().withMessage('ເນື້ອທີ່ໂຄງການ ຕ້ອງເປັນຕົວເລກເທົ່ານັ້ນ').not().isEmpty().withMessage('ກະລຸນາປ້ອນ ຮູບແບບການຈ່າຍ'),
    body('numberOfInstallment').isNumeric().not().withMessage('ຈຳນວນງວດ ຕ້ອງເປັນຕົວເລກເທົ່ານັ້ນ').not().isEmpty().withMessage('ກະລຸນາປ້ອນ ຈຳນວນງວດ'),
    body('payInAdvance').isNumeric().not().withMessage('ຈຳນວນຈ່າຍກ່ອນ ຕ້ອງເປັນຕົວເລກເທົ່ານັ້ນ').not().isEmpty().withMessage('ກະລຸນາປ້ອນ ຈຳນວນຈ່າຍກ່ອນ'),
    body('paidDate').isNumeric().not().withMessage('ວັນທີນັດຊຳລະ ຕ້ອງເປັນຕົວເລກເທົ່ານັ້ນ').not().isEmpty().withMessage('ກະລຸນາປ້ອນ ວັນທີນັດຊຳລະ'),
    body('price').isNumeric().not().withMessage('ຍອດເງິນ ຕ້ອງເປັນຕົວເລກເທົ່ານັ້ນ').not().isEmpty().withMessage('ກະລຸນາປ້ອນ ຍອດເງິນ'),
    body('projectId').not().isEmpty().withMessage('ກະລຸນາເລືອກ ໂຄງການ'),
    body('totalPrice').isNumeric().not().withMessage('ຍອດເງິນລວມ ຕ້ອງເປັນຕົວເລກເທົ່ານັ້ນ').not().isEmpty().withMessage('ກະລຸນາປ້ອນ ຍອດເງິນລວມ')
]
