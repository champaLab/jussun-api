
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum,
  Public,
  getRuntime,
  skip
} = require('./runtime/index-browser.js')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 5.22.0
 * Query Engine version: 605197351a3c8bdd595af2d2a9bc3025bca48ea2
 */
Prisma.prismaVersion = {
  client: "5.22.0",
  engine: "605197351a3c8bdd595af2d2a9bc3025bca48ea2"
}

Prisma.PrismaClientKnownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientKnownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientUnknownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientRustPanicError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientRustPanicError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientInitializationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientInitializationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientValidationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientValidationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.NotFoundError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`NotFoundError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`sqltag is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.empty = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`empty is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.join = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`join is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.raw = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`raw is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.getExtensionContext is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.defineExtension = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.defineExtension is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}



/**
 * Enums
 */

exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.CompanyScalarFieldEnum = {
  companyId: 'companyId',
  companyName: 'companyName',
  logoPath: 'logoPath',
  financeTel: 'financeTel',
  fax: 'fax',
  tel: 'tel',
  email: 'email',
  whatsapp: 'whatsapp',
  address: 'address',
  createdBy: 'createdBy',
  updatedBy: 'updatedBy',
  companyStatus: 'companyStatus',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  deletedAt: 'deletedAt',
  deletedBy: 'deletedBy'
};

exports.Prisma.ContractsScalarFieldEnum = {
  contractId: 'contractId',
  companyId: 'companyId',
  docId: 'docId',
  createdBy: 'createdBy',
  updatedBy: 'updatedBy',
  projectId: 'projectId',
  price: 'price',
  totalPrice: 'totalPrice',
  currency: 'currency',
  contractStatus: 'contractStatus',
  area: 'area',
  numberOfInstallment: 'numberOfInstallment',
  payDay: 'payDay',
  modeOfPayment: 'modeOfPayment',
  payInAdvance: 'payInAdvance',
  customerIdOne: 'customerIdOne',
  customerIdTwo: 'customerIdTwo',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  cancelAt: 'cancelAt',
  cancelBy: 'cancelBy',
  reason: 'reason',
  lastInvoice: 'lastInvoice',
  deletedAt: 'deletedAt',
  deletedBy: 'deletedBy'
};

exports.Prisma.ExchangeScalarFieldEnum = {
  exchangeId: 'exchangeId',
  companyId: 'companyId',
  thb: 'thb',
  usd: 'usd',
  createdBy: 'createdBy',
  updatedBy: 'updatedBy',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  deletedAt: 'deletedAt',
  deletedBy: 'deletedBy'
};

exports.Prisma.InvoiceScalarFieldEnum = {
  invoiceId: 'invoiceId',
  fines: 'fines',
  amount: 'amount',
  debt: 'debt',
  contractId: 'contractId',
  currency: 'currency',
  numberOfInstallment: 'numberOfInstallment',
  comment: 'comment',
  monthly: 'monthly',
  paymentMethod: 'paymentMethod',
  exchangeRate: 'exchangeRate',
  currencyExchange: 'currencyExchange',
  invoiceStatus: 'invoiceStatus',
  billPath: 'billPath',
  paidDate: 'paidDate',
  createdBy: 'createdBy',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  reservedBy: 'reservedBy',
  reservedAt: 'reservedAt',
  remindSentTime: 'remindSentTime',
  remindSentDate: 'remindSentDate'
};

exports.Prisma.LogsScalarFieldEnum = {
  logId: 'logId',
  description: 'description',
  path: 'path',
  body: 'body',
  userId: 'userId',
  companyId: 'companyId',
  ip: 'ip',
  createdAt: 'createdAt',
  deletedAt: 'deletedAt'
};

exports.Prisma.NewsScalarFieldEnum = {
  nId: 'nId',
  content: 'content',
  tel: 'tel',
  imagePath: 'imagePath',
  ip: 'ip',
  userId: 'userId',
  sentType: 'sentType',
  sentStatus: 'sentStatus',
  dateForSent: 'dateForSent',
  multi: 'multi',
  sentDate: 'sentDate',
  createdAt: 'createdAt',
  deletedAt: 'deletedAt',
  deletedBy: 'deletedBy'
};

exports.Prisma.OtpScalarFieldEnum = {
  otpId: 'otpId',
  tel: 'tel',
  code: 'code',
  confirm: 'confirm',
  status: 'status',
  sentDate: 'sentDate',
  retry: 'retry',
  createdAt: 'createdAt'
};

exports.Prisma.Payment_methodScalarFieldEnum = {
  id: 'id',
  companyId: 'companyId',
  accountName: 'accountName',
  accountNumber: 'accountNumber',
  qrPath: 'qrPath',
  deletedAt: 'deletedAt',
  deletedBy: 'deletedBy'
};

exports.Prisma.ProjectsScalarFieldEnum = {
  projectId: 'projectId',
  companyId: 'companyId',
  area: 'area',
  code: 'code',
  projectName: 'projectName',
  address: 'address',
  createdBy: 'createdBy',
  updatedBy: 'updatedBy',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  deletedAt: 'deletedAt',
  deletedBy: 'deletedBy'
};

exports.Prisma.StoresScalarFieldEnum = {
  id: 'id',
  name: 'name',
  opening_time: 'opening_time',
  closing_time: 'closing_time',
  closing_id: 'closing_id'
};

exports.Prisma.TransactionScalarFieldEnum = {
  transactionId: 'transactionId',
  ip: 'ip',
  amount: 'amount',
  remark: 'remark',
  currency: 'currency',
  pamentMethod: 'pamentMethod',
  transactionUUID: 'transactionUUID',
  contractId: 'contractId',
  currencyLAK: 'currencyLAK',
  currencyTHB: 'currencyTHB',
  currencyUSD: 'currencyUSD',
  createdBy: 'createdBy',
  updatedBy: 'updatedBy',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  deletedAt: 'deletedAt'
};

exports.Prisma.UsersScalarFieldEnum = {
  userId: 'userId',
  companyId: 'companyId',
  fullName: 'fullName',
  lastName: 'lastName',
  tel: 'tel',
  password: 'password',
  role: 'role',
  userStatus: 'userStatus',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};


exports.Prisma.ModelName = {
  company: 'company',
  contracts: 'contracts',
  exchange: 'exchange',
  invoice: 'invoice',
  logs: 'logs',
  news: 'news',
  otp: 'otp',
  payment_method: 'payment_method',
  projects: 'projects',
  stores: 'stores',
  transaction: 'transaction',
  users: 'users'
};

/**
 * This is a stub Prisma Client that will error at runtime if called.
 */
class PrismaClient {
  constructor() {
    return new Proxy(this, {
      get(target, prop) {
        let message
        const runtime = getRuntime()
        if (runtime.isEdge) {
          message = `PrismaClient is not configured to run in ${runtime.prettyName}. In order to run Prisma Client on edge runtime, either:
- Use Prisma Accelerate: https://pris.ly/d/accelerate
- Use Driver Adapters: https://pris.ly/d/driver-adapters
`;
        } else {
          message = 'PrismaClient is unable to run in this browser environment, or has been bundled for the browser (running in `' + runtime.prettyName + '`).'
        }
        
        message += `
If this is unexpected, please open an issue: https://pris.ly/prisma-prisma-bug-report`

        throw new Error(message)
      }
    })
  }
}

exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
