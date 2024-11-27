import { body } from 'express-validator'

export const valContract = [body('companyId').not().isEmpty().withMessage('ກະລຸນາເລືອກ ບໍລິສັດ')]

export const valContractCreate = [
    body('area').isNumeric().not().withMessage('ເນື້ອທີ່ໂຄງການ ຕ້ອງເປັນຕົວເລກເທົ່ານັ້ນ').isEmpty().withMessage('ກະລຸນາປ້ອນ ເນື້ອທີ່ໂຄງການ '),
    body('currency').not().isEmpty().withMessage('ກະລຸນາປ້ອນ ສະກຸນເງິນ'),
    body('docId').not().isEmpty().withMessage('ກະລຸນາປ້ອນ ເລກທີສັນຍາ'),
    body('modeOfPayment').not().isEmpty().withMessage('ກະລຸນາປ້ອນ ຮູບແບບການຈ່າຍ'),
    body('numberOfInstallment').not().isEmpty().withMessage('ກະລຸນາປ້ອນ ຈຳນວນງວດ'),
    body('payInAdvance')
        .isNumeric()
        .not()
        .withMessage('ຈຳນວນຈ່າຍກ່ອນ ຕ້ອງເປັນຕົວເລກເທົ່ານັ້ນ')
        .not()
        .isEmpty()
        .withMessage('ກະລຸນາປ້ອນ ຈຳນວນຈ່າຍກ່ອນ')
        .custom((value, { req }) => {
            const total = Number(req.body.price) * Number(req.body.area)
            if (value > total) {
                throw new Error('ຈຳນວນຈ່າຍກ່ອນ ຕ້ອງໜ່ອຍກວ່າ ຫຼື ເທົ່າກັບ ຈຳນວນ ເງິນທັງໝົດເທົ່ານັ້ນ')
            }
            return true
        }),
    body('payDay').not().isEmpty().withMessage('ກະລຸນາປ້ອນ ວັນທີນັດຊຳລະ').isISO8601().withMessage('ວັນທີນັດຊຳລະຕ້ອງເປັນວັນທີ'),
    body('price').not().isEmpty().withMessage('ກະລຸນາປ້ອນ ຍອດເງິນ'),
    body('projectId').not().isEmpty().withMessage('ກະລຸນາເລືອກ ໂຄງການ'),
    body('customerIdOne').not().isEmpty().withMessage('ກະລຸນາເລືອກ ລູກຄ້າ')
]

export const valContractUpdate = [
    body('contractId').not().isEmpty().withMessage('ກະລຸນາປ້ອນ ID '),
    body('area').isNumeric().not().withMessage('ເນື້ອທີ່ໂຄງການ ຕ້ອງເປັນຕົວເລກເທົ່ານັ້ນ').isEmpty().withMessage('ກະລຸນາປ້ອນ ເນື້ອທີ່ໂຄງການ '),
    body('currency').not().isEmpty().withMessage('ກະລຸນາປ້ອນ ສະກຸນເງິນ'),
    body('docId').not().isEmpty().withMessage('ກະລຸນາປ້ອນ ເລກທີສັນຍາ'),
    body('modeOfPayment').not().isEmpty().withMessage('ກະລຸນາປ້ອນ ຮູບແບບການຈ່າຍ'),
    body('numberOfInstallment').not().isEmpty().withMessage('ກະລຸນາປ້ອນ ຈຳນວນງວດ'),
    body('payInAdvance')
        .isNumeric()
        .not()
        .withMessage('ຈຳນວນຈ່າຍກ່ອນ ຕ້ອງເປັນຕົວເລກເທົ່ານັ້ນ')
        .not()
        .isEmpty()
        .withMessage('ກະລຸນາປ້ອນ ຈຳນວນຈ່າຍກ່ອນ')
        .custom((value, { req }) => {
            const total = Number(req.body.price) * Number(req.body.area)
            console.log({ value, total })
            if (value > total) {
                throw new Error('ຈຳນວນຈ່າຍກ່ອນ ຕ້ອງໜ່ອຍກວ່າ ຫຼື ເທົ່າກັບ ຈຳນວນ ເງິນທັງໝົດເທົ່ານັ້ນ')
            }
            return true
        }),
    body('payDay').not().isEmpty().withMessage('ກະລຸນາປ້ອນ ວັນທີນັດຊຳລະ').isISO8601().withMessage('ວັນທີນັດຊຳລະຕ້ອງເປັນວັນທີ'),
    body('price').not().isEmpty().withMessage('ກະລຸນາປ້ອນ ຍອດເງິນ'),
    body('projectId').not().isEmpty().withMessage('ກະລຸນາເລືອກ ໂຄງການ'),
    body('customerIdOne').not().isEmpty().withMessage('ກະລຸນາເລືອກ ລູກຄ້າ'),
    body('invoiceId').not().isEmpty().withMessage('ກະລຸນາເລືອກ ໃບແຈ້ງໜີ້')
]

export const valAddComment = [
    body('invoiceId').not().isEmpty().withMessage('ກະລຸນາປ້ອນ ເລກທີບິນ'),
    body('comment').not().isEmpty().withMessage('ກະລຸນາປ້ອນ ຂໍ້ຄວາມ')
]
