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

export const valUserUpdate = [
    body('userId').not().isEmpty().withMessage('ກະລຸນາປ້ອນ ID'),
    body('role').not().isEmpty().withMessage('ກະລຸນາເລືອກ ສິດການໃຊ້ງານ'),
    body('fullName').not().isEmpty().withMessage('ກະລຸນາປ້ອນ  ຊື່'),
    body('lastName').not().isEmpty().withMessage('ກະລຸນາປ້ອນ ນາມສະກຸນ'),
    body('tel').not().isEmpty().withMessage('ກະລຸນາປ້ອນ ໝາຍເລກໂທລະສັບ').isLength({ min: 8, max: 8 }).withMessage('ໝາຍເລກໂທລະສັບ  8 ຕົວອັກສອນເທົ່ານັ້ນ'),
    body('passwordConfirmation')
        .optional()
        .custom((value, { req }) => {
            if (req.body.password != '' && value !== req.body.password) {
                throw new Error('ລະຫັດຜ່ານ ແລະ ຢືນຢັນລະຫັດຜ່ານ ບໍ່ກົງກັນ')
            }
            return true
        })
]

export const valUserFind = [body('key').not().isEmpty().withMessage('ກະລຸນາປ້ອນ ຄຳຄົ້ນຫາ')]
export const valVerifyCode = [
    body('code').not().isEmpty().withMessage('ກະລຸນາປ້ອນ ລະຫັດຢືນຢັນ 6 ຫຼັກ').isLength({ min: 6, max: 6 }).withMessage('ລະຫັດຢືນຢັນ 6 ຕົວອັກສອນເທົ່ານັ້ນ'),
    body('tel').not().isEmpty().withMessage('ກະລຸນາປ້ອນ ໝາຍເລກໂທລະສັບ').isLength({ min: 8, max: 8 }).withMessage('ໝາຍເລກໂທລະສັບ  8 ຕົວອັກສອນເທົ່ານັ້ນ')
]

export const valSentCode = [
    body('tel').not().isEmpty().withMessage('ກະລຸນາປ້ອນ ໝາຍເລກໂທລະສັບ').isLength({ min: 8, max: 8 }).withMessage('ໝາຍເລກໂທລະສັບ  8 ຕົວອັກສອນເທົ່ານັ້ນ')
]

export const valResetPasswordCode = [
    body('tel').not().isEmpty().withMessage('ກະລຸນາປ້ອນ ໝາຍເລກໂທລະສັບ').isLength({ min: 8, max: 8 }).withMessage('ໝາຍເລກໂທລະສັບ  8 ຕົວອັກສອນເທົ່ານັ້ນ'),
    body('passwordConfirmation')
        .optional()
        .custom((value, { req }) => {
            if (req.body.password != '' && value !== req.body.password) {
                throw new Error('ລະຫັດຜ່ານ ແລະ ຢືນຢັນລະຫັດຜ່ານ ບໍ່ກົງກັນ')
            }
            return true
        })
]
