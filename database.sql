CREATE TABLE company (
<<<<<<< HEAD
    companyId INT PRIMARY KEY AUTO_INCREMENT,
    companyName VARCHAR(255) UNIQUE,
    logoPath VARCHAR(255) NOT NULL,
    financeTel VARCHAR(10) NOT NULL,
    fax VARCHAR(20),
    tel VARCHAR(8) NOT NULL,
    email VARCHAR(60),
    whatsapp VARCHAR(8),
    address VARCHAR(100) NOT NULL,
    createdBy INT NOT NULL,
    updatedBy INT,
    companyStatus BOOLEAN DEFAULT TRUE,
    createdAt DATETIME(0) DEFAULT CURRENT_TIMESTAMP,
    updatedAt DATETIME(0) UNIQUE,
    deletedAt DATETIME(0),
    deletedBy INT
);

CREATE TABLE contracts (
    contractId INT PRIMARY KEY AUTO_INCREMENT,
    companyId INT NOT NULL,
    docId VARCHAR(15) NOT NULL,
    createdBy INT NOT NULL,
    updatedBy INT,
    projectId INT NOT NULL,
    price FLOAT NOT NULL,
    totalPrice FLOAT NOT NULL,
    currency VARCHAR(10) DEFAULT 'LAK',
    contractStatus VARCHAR(20) DEFAULT 'ACTIVE',
    area FLOAT NOT NULL,
    numberOfInstallment INT DEFAULT 1,
    payDay DATE NOT NULL,
    modeOfPayment VARCHAR(20) DEFAULT 'monthly',
    payInAdvance FLOAT DEFAULT 0,
    customerIdOne INT NOT NULL,
    customerIdTwo INT,
    createdAt DATETIME(0) DEFAULT CURRENT_TIMESTAMP,
    updatedAt DATETIME(0) DEFAULT CURRENT_TIMESTAMP,
    cancelAt DATETIME(0),
    cancelBy INT,
    reason VARCHAR(255),
    lastInvoice INT,
    deletedAt DATETIME(0),
    deletedBy INT
);

CREATE TABLE exchange (
    exchangeId INT PRIMARY KEY AUTO_INCREMENT,
    companyId INT NOT NULL,
    thb FLOAT NOT NULL,
    usd FLOAT NOT NULL,
    createdBy INT NOT NULL,
    updatedBy INT,
    createdAt DATETIME(0) DEFAULT CURRENT_TIMESTAMP,
    updatedAt DATETIME(0) DEFAULT CURRENT_TIMESTAMP,
    deletedAt DATETIME(0),
    deletedBy INT
);

CREATE TABLE invoice (
    invoiceId INT PRIMARY KEY AUTO_INCREMENT,
    fines FLOAT DEFAULT 0,
    amount FLOAT NOT NULL,
    debt FLOAT DEFAULT 0,
    contractId INT NOT NULL,
    currency VARCHAR(30) NOT NULL,
    comment VARCHAR(255),
    monthly VARCHAR(10),
    paymentMethod VARCHAR(50),
    exchangeRate FLOAT,
    currencyExchange VARCHAR(5),
    invoiceStatus VARCHAR(20) DEFAULT 'PENDING',
    billPath VARCHAR(255),
    paidDate DATETIME(0),
    createdBy INT,
    createdAt DATETIME(0) DEFAULT CURRENT_TIMESTAMP,
    updatedAt DATETIME(0) DEFAULT CURRENT_TIMESTAMP,
    reservedBy INT,
    reservedAt DATETIME(0),
    remindSentTime INT DEFAULT 0,
    remindSentDate DATETIME(0)
);

CREATE TABLE logs (
    logId INT PRIMARY KEY AUTO_INCREMENT,
    description VARCHAR(200),
    path VARCHAR(100) NOT NULL,
    body TEXT,
    userId INT NOT NULL,
    companyId INT,
    ip VARCHAR(100),
    createdAt TIMESTAMP(0) DEFAULT CURRENT_TIMESTAMP,
    deletedAt DATETIME(0)
);

CREATE TABLE news (
    nId INT PRIMARY KEY AUTO_INCREMENT,
    content LONGTEXT NOT NULL,
    tel TEXT,
    imagePath VARCHAR(200),
    ip VARCHAR(50),
    userId INT NOT NULL,
    sentType VARCHAR(200) NOT NULL,
    sentStatus VARCHAR(10) DEFAULT 'PENDING',
    dateForSent DATETIME(0),
    multi VARCHAR(5) DEFAULT 'YES',
    sentDate DATETIME(0),
    createdAt DATETIME(0) DEFAULT CURRENT_TIMESTAMP,
    deletedAt DATETIME(0),
    deletedBy INT
);

CREATE TABLE otp (
    otpId INT PRIMARY KEY AUTO_INCREMENT,
    tel VARCHAR(10) NOT NULL,
    code VARCHAR(10) NOT NULL,
    confirm VARCHAR(5) DEFAULT 'NO',
    status VARCHAR(10) DEFAULT 'PENDING',
    sentDate DATETIME(0),
    retry INT DEFAULT 0,
    createdAt DATETIME(0) DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE projects (
    projectId INT PRIMARY KEY AUTO_INCREMENT,
    companyId INT NOT NULL,
    area FLOAT NOT NULL,
    code VARCHAR(50) UNIQUE,
    projectName VARCHAR(200) NOT NULL,
    address VARCHAR(100),
    createdBy INT NOT NULL,
    updatedBy INT,
    createdAt DATETIME(0) DEFAULT CURRENT_TIMESTAMP,
    updatedAt DATETIME(0) DEFAULT CURRENT_TIMESTAMP,
    deletedAt DATETIME(0),
    deletedBy INT
);

CREATE TABLE transaction (
    transactionId INT PRIMARY KEY AUTO_INCREMENT,
    ip VARCHAR(200) NOT NULL,
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
    userId INT PRIMARY KEY AUTO_INCREMENT,
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

CREATE TABLE payment_method (
    id INT PRIMARY KEY AUTO_INCREMENT,
    companyId INT NOT NULL,
    accountName VARCHAR(100) NOT NULL,
    accountNumber VARCHAR(100) NOT NULL,
    qrPath VARCHAR(255),
    deletedAt DATETIME(0),
    deletedBy INT
);

CREATE TABLE stores (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(255),
    opening_time DATETIME(0) DEFAULT CURRENT_TIMESTAMP,
    closing_time DATETIME(0) DEFAULT CURRENT_TIMESTAMP,
    closing_id VARCHAR(100)
=======
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
>>>>>>> main
);
