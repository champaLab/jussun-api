import Router from 'express'

import { upload } from './utils/file-helper'
import { companyController, createCompanyController, updateCompanyController } from './apis/company/controller'
import { createProjectController, projectsController, updateProjectController } from './apis/projects/controller'
import { verify } from './utils/jwt'
import { createUserController, findOneUserController, loginController, meController, updateUserController, userController } from './apis/user/controller'
import { valLogin, valUserCreate, valUserFind, valUserUpdate } from './apis/user/validate'
import { contractController, createContractController, updateContractController, updateContractStatusController } from './apis/contract/controller'
import { valCompany, valCompanyCreate, valCompanyUpdate } from './apis/company/validate'
import { valContract, valContractCreate, valContractUpdate } from './apis/contract/validate'
import { valProjectCreate, valProjectUpdate } from './apis/projects/validate'
import { valResult } from './utils/validateResult'
import { findManyPaidToDayController } from './apis/payment/controller'
import { valInvoicePaidToday } from './apis/payment/validate'
import { actionInvoiceController, invoicePaidController, invoicePaydayController } from './apis/invoice/controller'
import { createExchangeController, readExchangeController, updateExchangeController } from './apis/exchange/controller'
import { valCreateExchange, valReadExchange, valUpdateExchange } from './apis/exchange/validate'
import { valUpdateInvoice } from './apis/invoice/validate'
import { getReportsController, readReportController } from './apis/reports/controller'
import { readReceiveController } from './apis/receive/controller'

const router = Router()

router.post('/login', valLogin, valResult, loginController)
router.get('/me', verify, meController)
router.post('/users', verify, userController)
router.post('/users/create', verify, valUserCreate, valResult, createUserController)
router.post('/users/update', verify, valUserUpdate, valResult, updateUserController)
router.post('/user/find', verify, valUserFind, valResult, findOneUserController)

router.post('/company', verify, companyController)
router.post('/company/create', verify, upload('company', true).single('file'), valCompanyCreate, valResult, createCompanyController)
router.post('/company/update', verify, upload('company', true).single('file'), valCompanyUpdate, valResult, updateCompanyController)

router.post('/projects', verify, projectsController)
router.post('/projects/create', verify, valProjectCreate, valResult, createProjectController)
router.post('/projects/update', verify, valProjectUpdate, valResult, updateProjectController)

router.post('/contracts', verify, valContract, valResult, contractController)
router.post('/contracts/create', verify, valContractCreate, valResult, createContractController)
router.post('/contracts/update', verify, valContractUpdate, valResult, updateContractController)
router.post('/contracts/update/status', verify, updateContractStatusController)

// TODO: PAYMENT
router.post('/invoices/action', verify, actionInvoiceController)
router.post('/invoices/payday', verify, invoicePaydayController)
router.post('/invoices/paid', verify, upload('bills', true).single('file'), verify, valUpdateInvoice, valResult, invoicePaidController)

// TODO:Exchange endpoint
router.post('/exchanges', verify, valReadExchange, valResult, readExchangeController)
router.post('/exchanges/create', verify, valCreateExchange, valResult, createExchangeController)
router.post('/exchanges/update', verify, valUpdateExchange, valResult, updateExchangeController)

//TODO: Report endpoint
router.post('/money/me', verify, readReportController)
router.post('/receive', verify, readReceiveController)
router.get('/reports', verify, getReportsController)

export default router
