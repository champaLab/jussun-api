import Router from 'express'

import { upload } from './utils/file-helper'
import { companyController, companyForAutocompleteController, createCompanyController, updateCompanyController } from './apis/company/controller'
import {
    createProjectController,
    deleteProjectController,
    projectsController,
    projectsForAutocompleteController,
    updateProjectController
} from './apis/projects/controller'
import { verify } from './utils/jwt'
import {
    createUserController,
    findOneUserController,
    findUserForResetController,
    loginController,
    meController,
    resetPasswordCodeController,
    updateUserController,
    userController,
    verifyCodeController
} from './apis/user/controller'
import { valLogin, valResetPasswordCode, valSentCode, valUserCreate, valUserFind, valUserUpdate, valVerifyCode } from './apis/user/validate'
import { contractController, createContractController, updateContractController, updateContractStatusController } from './apis/contract/controller'
import { valCompany, valCompanyCreate, valCompanyUpdate } from './apis/company/validate'
import { valAddComment, valContract, valContractCreate, valContractUpdate } from './apis/contract/validate'
import { valProjectCreate, valProjectUpdate } from './apis/projects/validate'
import { valResult } from './utils/validateResult'
import { valInvoicePaidToday } from './apis/payment/validate'
import { actionInvoiceController, addCommentInvoiceController, invoicePaidController, invoicePaydayController } from './apis/invoice/controller'
import { createExchangeController, readExchangeController, updateExchangeController } from './apis/exchange/controller'
import { valCreateExchange, valReadExchange, valUpdateExchange } from './apis/exchange/validate'
import { valUpdateInvoice } from './apis/invoice/validate'
import { getReportsController, readReportController } from './apis/reports/controller'
import { readReceiveController } from './apis/receive/controller'
import { findManyHistoryController } from './apis/log/controller'
import { historiesPayByContractController } from './apis/contractDetail/controller'
import { valRemind } from './apis/remindToPay/validate'
import { sentRemindToPayController } from './apis/remindToPay/controller'
import {
    createPaymentMethodController,
    deletePaymentMethodController,
    paymentMethodController,
    updatePaymentMethodController
} from './apis/paymentMethod/controller'
import { createNewsController, deleteNewsController, getNewsController, updateNewsController } from './apis/news/controller'
import { valNews } from './apis/news/validatotr'
import { noticePaymentController } from './apis/payment/controller'
import {
    createProjectItemController,
    deleteProjectItemController,
    projectItemController,
    projectItemForAutocompleteController,
    updateProjectItemController
} from './apis/projectsItem/controller'
import { valProjectItemCreate } from './apis/projectsItem/validate'

const router = Router()

router.post('/login', valLogin, valResult, loginController)
router.get('/me', verify, meController)
router.post('/users', verify, userController)
router.post('/users/create', verify, valUserCreate, valResult, createUserController)
router.post('/users/update', verify, valUserUpdate, valResult, updateUserController)
router.post('/user/find', verify, valUserFind, valResult, findOneUserController)

router.post('/forgot/find', valSentCode, valResult, findUserForResetController)
router.post('/forgot/verify', valVerifyCode, valResult, verifyCodeController)
router.post('/forgot/reset', valResetPasswordCode, valResult, resetPasswordCodeController)

router.post('/company', verify, companyController)
router.post('/company/create', verify, upload('company', true).single('file'), valCompanyCreate, valResult, createCompanyController)
router.post('/company/update', verify, upload('company', true).single('file'), valCompanyUpdate, valResult, updateCompanyController)
router.get('/company/autocomplete', verify, companyForAutocompleteController)

router.post('/projects', verify, projectsController)
router.post('/projects/create', verify, valProjectCreate, valResult, createProjectController)
router.post('/projects/update', verify, valProjectUpdate, valResult, updateProjectController)
router.delete('/projects/delete/:projectId', verify, deleteProjectController)
router.get('/projects/autocomplete', verify, projectsForAutocompleteController)

// Endpoint project item
router.post('/project/items', verify, projectItemController)
router.post('/project/items/create', verify, valProjectItemCreate, valResult, createProjectItemController)
router.post('/project/items/update', verify, valProjectUpdate, valResult, updateProjectItemController)
router.delete('/project/items/delete/:id', verify, deleteProjectItemController)
router.get('/projects/items/autocomplete/:projectId', verify, projectItemForAutocompleteController)

router.post('/contracts', verify, valContract, valResult, contractController)
router.post('/contracts/create', verify, valContractCreate, valResult, createContractController)
router.post('/contracts/update', verify, valContractUpdate, valResult, updateContractController)
router.post('/contracts/update/status', verify, updateContractStatusController)

router.get('/contract/:contractId', verify, historiesPayByContractController)

// TODO: PAYMENT
router.post('/invoices/action', verify, actionInvoiceController)
router.post('/invoices/payday', verify, invoicePaydayController)
router.post('/invoices/comment', verify, valAddComment, valResult, addCommentInvoiceController)
router.post('/invoices/paid', verify, upload('bills', true).single('file'), verify, valUpdateInvoice, valResult, invoicePaidController)
router.post('/remind-to-pay', verify, valRemind, valResult, sentRemindToPayController)

// TODO:Exchange endpoint
router.post('/exchanges', verify, valReadExchange, valResult, readExchangeController)
router.post('/exchanges/create', verify, valCreateExchange, valResult, createExchangeController)
router.post('/exchanges/update', verify, valUpdateExchange, valResult, updateExchangeController)

//TODO: Report endpoint
router.post('/money/me', verify, readReportController)
router.post('/receive', verify, readReceiveController)
router.get('/reports', verify, getReportsController)

router.post('/payments', verify, paymentMethodController)
router.post('/payments/create', verify, upload('payment', true).single('file'), verify, createPaymentMethodController)
router.post('/payments/update', verify, upload('payment', true).single('file'), verify, updatePaymentMethodController)
router.post('/payments/delete', verify, deletePaymentMethodController)

router.post('/payments/notice', noticePaymentController)

//TODO: History endpoint
router.post('/history', verify, findManyHistoryController)

//TODO: News endpoint
router.post('/news/create', verify, upload('news', true).single('file'), valNews, createNewsController)
router.post('/news/update', verify, upload('news', true).single('file'), updateNewsController)
router.post('/news/delete', verify, deleteNewsController)
router.post('/news', verify, getNewsController)
export default router
