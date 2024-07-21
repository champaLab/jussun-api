import { body } from 'express-validator'

export const valLogin = [
    body('tel').not().isEmpty().withMessage('ກະລຸນາປ້ອນ ໝາຍເລກໂທລະສັບ').isLength({ min: 8, max: 8 }).withMessage('ໝາຍເລກໂທລະສັບ  8 ຕົວອັກສອນເທົ່ານັ້ນ'),
    body('password').not().isEmpty().withMessage('ກະລຸນາປ້ອນ ລະຫັດຜານ')
]

export const valUserCreate = [
    body('role').not().isEmpty().withMessage('ກະລຸນາເລືອກ ສິດການໃຊ້ງານ'),
    body('fullName').not().isEmpty().withMessage('ກະລຸນາປ້ອນ  ຊື່'),
    body('lastName').not().isEmpty().withMessage('ກະລຸນາປ້ອນ ນາມສະກຸນ'),
    body('tel').not().isEmpty().withMessage('ກະລຸນາປ້ອນ ໝາຍເລກໂທລະສັບ').isLength({ min: 8, max: 8 }).withMessage('ໝາຍເລກໂທລະສັບ  8 ຕົວອັກສອນເທົ່ານັ້ນ'),
    body('password').not().isEmpty().withMessage('ກະລຸນາປ້ອນ ລະຫັດຜານ').isLength({ min: 8, max: 20 }).withMessage('ລະຫັດຜ່ານ  8 ຕົວອັກສອນຂຶ້ນໄປ'),
    body('passwordConfirmation')
        .not()
        .isEmpty()
        .withMessage('ກະລຸນາ ຢືນຢັນລະຫັດຜ່ານ')
        .custom((value, { req }) => {
            if (value !== req.body.password) {
                throw new Error('ລະຫັດຜ່ານ ບໍ່ກົງກັນ')
            }
            return true
        })
]

export const valUpdateInvoice = [
    body('invoiceId').not().isEmpty().withMessage('ກະລຸນາປ້ອນ invoiceId'),
    body('invAmount').not().isEmpty().withMessage('ກະລຸນາປ້ອນ ຈຳນວນເງິນທີ່ຈະຊຳລະ'),
    body('invCurrency').not().isEmpty().withMessage('ກະລຸນາເລືອກ ສະກຸນເງິນ'),
    body('invPaymentMethod').not().isEmpty().withMessage('ກະລຸນາເລືອກ ຮູບແບບການຊໍາລະ'),
    body('currencyExchange').not().isEmpty().withMessage('ກະລຸນາເລືອກ ສະກຸນເງິນຂອງອັດຕາແລກປ່ຽນ'),
    body('exchangeRate').not().isEmpty().withMessage('ກະລຸນາປ້ອນ ອັດຕາແລກປ່ຽນ')
]

export const valUserFind = [body('key').not().isEmpty().withMessage('ກະລຸນາປ້ອນ ຄຳຄົ້ນຫາ')]
