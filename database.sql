CREATE TABLE company (
  companyId INT AUTO_INCREMENT PRIMARY KEY,
  companyName VARCHAR(255) UNIQUE,
  logoPath VARCHAR(255),
  fax VARCHAR(20),
  tel VARCHAR(8),
  email VARCHAR(60),
  whatsapp VARCHAR(8),
  address VARCHAR(100),
  abbreviatedLetters VARCHAR(20),
  createdBy INT NOT NULL,
  updatedBy INT,
  companyStatus BOOLEAN DEFAULT TRUE,
  createdAt DATETIME(0) DEFAULT CURRENT_TIMESTAMP,
  updatedAt DATETIME(0) UNIQUE,
  UNIQUE (companyName)
);

CREATE TABLE contracts (
  contractId INT AUTO_INCREMENT PRIMARY KEY,
  companyId INT NOT NULL,
  docId VARCHAR(15),
  createdBy INT NOT NULL,
  updatedBy INT,
  projectId INT NOT NULL,
  price FLOAT,
  totalPrice FLOAT,
  currency VARCHAR(10) DEFAULT 'LAK',
  contractStatus VARCHAR(20) DEFAULT 'ACTIVE',
  area FLOAT,
  numberOfInstallment INT DEFAULT 1,
  payDay INT NOT NULL,
  modeOfPayment VARCHAR(20) DEFAULT 'monthly',
  payInAdvance FLOAT DEFAULT 0,
  customerIdOne INT NOT NULL,
  customerIdTwo INT,
  createdAt DATETIME(0) DEFAULT CURRENT_TIMESTAMP,
  updatedAt DATETIME(0) DEFAULT CURRENT_TIMESTAMP,
  cancelAt DATETIME(0),
  cancelBy INT,
  reason VARCHAR(255),
  lastInvoice INT
);

CREATE TABLE exchange (
  exchangeId INT AUTO_INCREMENT PRIMARY KEY,
  companyId INT NOT NULL,
  thb FLOAT,
  usd FLOAT,
  createdBy INT NOT NULL,
  updatedBy INT,
  createdAt DATETIME(0) DEFAULT CURRENT_TIMESTAMP,
  updatedAt DATETIME(0) DEFAULT CURRENT_TIMESTAMP,
  deletedAt DATETIME(0)
);

CREATE TABLE invoice (
  invoiceId INT AUTO_INCREMENT PRIMARY KEY,
  fines FLOAT DEFAULT 0,
  amount FLOAT NOT NULL,
  debt FLOAT DEFAULT 0,
  contractId INT NOT NULL,
  currency VARCHAR(30) NOT NULL,
  paymentMethod VARCHAR(50),
  exchangeRate FLOAT,
  currencyExchange VARCHAR(5),
  invoiceStatus VARCHAR(20) DEFAULT 'PENDING',
  paidDate DATETIME(0),
  createdBy INT,
  createdAt DATETIME(0) DEFAULT CURRENT_TIMESTAMP,
  updatedAt DATETIME(0) DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE projects (
  projectId INT AUTO_INCREMENT PRIMARY KEY,
  companyId INT NOT NULL,
  area FLOAT NOT NULL DEFAULT 0,
  projectName VARCHAR(200),
  address VARCHAR(100),
  createdBy INT NOT NULL,
  updatedBy INT,
  createdAt DATETIME(0) DEFAULT CURRENT_TIMESTAMP,
  updatedAt DATETIME(0) DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE transaction (
  transactionId INT AUTO_INCREMENT PRIMARY KEY,
  ip VARCHAR(200),
  amount FLOAT NOT NULL,
  remark VARCHAR(255),
  currency VARCHAR(5) NOT NULL,
  pamentMethod VARCHAR(50) NOT NULL,
  transactionUUID VARCHAR(50),
  contractId INT NOT NULL,
  currencyLAK FLOAT NOT NULL,
  currencyTHB FLOAT NOT NULL,
  currencyUSD FLOAT NOT NULL,
  createdBy INT,
  updatedBy INT,
  createdAt DATETIME(0) DEFAULT CURRENT_TIMESTAMP,
  updatedAt DATETIME(0) DEFAULT CURRENT_TIMESTAMP,
  deletedAt DATETIME(0)
);

CREATE TABLE users (
  userId INT AUTO_INCREMENT PRIMARY KEY,
  companyId INT,
  fullName VARCHAR(80) NOT NULL,
  lastName VARCHAR(80) NOT NULL,
  tel VARCHAR(8) UNIQUE NOT NULL,
  password VARCHAR(255) NOT NULL,
  role VARCHAR(10) DEFAULT 'CUSTOMER',
  userStatus BOOLEAN DEFAULT TRUE,
  createdAt DATETIME(0) DEFAULT CURRENT_TIMESTAMP,
  updatedAt DATETIME(0) DEFAULT CURRENT_TIMESTAMP
);
