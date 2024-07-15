import Router from 'express'

import { upload } from './utils/file-helper'
import { companyController, createCompanyController, updateCompanyController } from './apis/company/controller'
import { createProjectController, projectsController, updateProjectController } from './apis/projects/controller'
import { verify } from './utils/jwt'
import { createUserController, findOneUserController, loginController, meController, updateUserController, userController } from './apis/user/controller'
import { valLogin, valUserCreate, valUserFind, valUserUpdate } from './apis/user/validate'
import { ContractController, createContractController, updateContractController } from './apis/contract/controller'
import { valCompany, valCompanyCreate, valCompanyUpdate } from './apis/company/validate'
import { valContract, valContractCreate, valContractUpdate } from './apis/contract/validate'
import { valProjectCreate, valProjectUpdate } from './apis/projects/validate'
import { valResult } from './utils/validateResult'

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

router.post('/contracts', verify, valContract, valResult, ContractController)
router.post('/contracts/create', verify, valContractCreate, valResult, createContractController)
router.post('/contracts/update', verify, valContractUpdate, valResult, updateContractController)

export default router
