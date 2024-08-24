import { body } from 'express-validator'

export const valNews = [
    body('content').isString().trim().notEmpty().withMessage('Content is required'),
    body('imagePath').optional().isString().trim().withMessage('Invalid image path'),
    body('sentStatus').isString().trim().notEmpty().withMessage('Sent status is required'),
    body('tel').optional().isMobilePhone('any').withMessage('Invalid telephone number'),
    body('sentType').isString().trim().notEmpty().withMessage('Sent type is required')
]

// export const valNewsUpdate = [
//     body('nId').not().isEmpty().withMessage('ກະລຸນາເລືອກ ຂ່າວ'),
//     body('imagePath').optional().isString().trim().withMessage('path ຮູບພາບບໍ່ຖືກຕອ້ງ'),
//     body('tel').not().isEmpty().withMessage('ກະລຸນາປ້ອນ ໝາຍເລກໂທລະສັບ'),
//     body('address').not().isEmpty().withMessage('ກະລຸນາປ້ອນ ທີ່ຢູ່ ບໍລິສັດ')
// ]