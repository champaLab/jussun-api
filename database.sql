create table company
(
    companyId     int auto_increment
        primary key,
    companyName   varchar(255)                         null,
    logoPath      varchar(255)                         not null,
    financeTel    varchar(10)                          not null,
    fax           varchar(20)                          null,
    tel           varchar(8)                           not null,
    email         varchar(60)                          null,
    whatsapp      varchar(8)                           null,
    address       varchar(100)                         not null,
    createdBy     int                                  not null,
    updatedBy     int                                  null,
    companyStatus tinyint(1) default 1                 null,
    createdAt     datetime   default CURRENT_TIMESTAMP null,
    updatedAt     datetime                             null,
    deletedAt     datetime                             null,
    deletedBy     int                                  null,
    constraint companyName
        unique (companyName),
    constraint updatedAt
        unique (updatedAt)
);

create table contracts
(
    contractId          int auto_increment
        primary key,
    companyId           int                                   not null,
    docId               varchar(15)                           not null,
    createdBy           int                                   not null,
    updatedBy           int                                   null,
    projectId           int                                   not null,
    price               float                                 not null,
    totalPrice          float                                 not null,
    currency            varchar(10) default 'LAK'             null,
    contractStatus      varchar(20) default 'ACTIVE'          null,
    area                float                                 not null,
    numberOfInstallment int         default 1                 null,
    payDay              date                                  not null,
    modeOfPayment       varchar(20) default 'monthly'         null,
    payInAdvance        float       default 0                 null,
    customerIdOne       int                                   not null,
    customerIdTwo       int                                   null,
    createdAt           datetime    default CURRENT_TIMESTAMP null,
    updatedAt           datetime    default CURRENT_TIMESTAMP null,
    cancelAt            datetime                              null,
    cancelBy            int                                   null,
    reason              varchar(255)                          null,
    lastInvoice         int                                   null,
    deletedAt           datetime                              null,
    deletedBy           int                                   null
);

create table exchange
(
    exchangeId int auto_increment
        primary key,
    companyId  int                                not null,
    thb        float                              not null,
    usd        float                              not null,
    createdBy  int                                not null,
    updatedBy  int                                null,
    createdAt  datetime default CURRENT_TIMESTAMP null,
    updatedAt  datetime default CURRENT_TIMESTAMP null,
    deletedAt  datetime                           null,
    deletedBy  int                                null
);

create table invoice
(
    invoiceId           int auto_increment
        primary key,
    fines               float       default 0                 null,
    amount              float                                 not null,
    debt                float       default 0                 null,
    contractId          int                                   not null,
    currency            varchar(30)                           not null,
    numberOfInstallment int         default 0                 not null,
    comment             varchar(255)                          null,
    monthly             varchar(10)                           null,
    paymentMethod       varchar(50)                           null,
    exchangeRate        float                                 null,
    currencyExchange    varchar(5)                            null,
    invoiceStatus       varchar(20) default 'PENDING'         null,
    billPath            varchar(255)                          null,
    paidDate            datetime                              null,
    createdBy           int                                   null,
    createdAt           datetime    default CURRENT_TIMESTAMP null,
    updatedAt           datetime    default CURRENT_TIMESTAMP null,
    reservedBy          int                                   null,
    reservedAt          datetime                              null,
    remindSentTime      int         default 0                 null,
    remindSentDate      datetime                              null
);

create table logs
(
    logId       int auto_increment
        primary key,
    description varchar(200)                        null,
    path        varchar(100)                        not null,
    body        text                                null,
    userId      int                                 not null,
    companyId   int                                 null,
    ip          varchar(100)                        null,
    createdAt   timestamp default CURRENT_TIMESTAMP null,
    deletedAt   datetime                            null
);

create table news
(
    nId         int auto_increment
        primary key,
    content     longtext                              not null,
    tel         text                                  null,
    imagePath   varchar(200)                          null,
    ip          varchar(50)                           null,
    userId      int                                   not null,
    sentType    varchar(200)                          not null,
    sentStatus  varchar(10) default 'PENDING'         null,
    dateForSent datetime                              null,
    multi       varchar(5)  default 'YES'             null,
    sentDate    datetime                              null,
    createdAt   datetime    default CURRENT_TIMESTAMP null,
    deletedAt   datetime                              null,
    deletedBy   int                                   null
);

create table otp
(
    otpId     int auto_increment
        primary key,
    tel       varchar(10)                           not null,
    code      varchar(10)                           not null,
    confirm   varchar(5)  default 'NO'              null,
    status    varchar(10) default 'PENDING'         null,
    sentDate  datetime                              null,
    retry     int         default 0                 null,
    createdAt datetime    default CURRENT_TIMESTAMP null
);

create table payment_method
(
    id            int auto_increment
        primary key,
    companyId     int          not null,
    accountName   varchar(100) not null,
    accountNumber varchar(100) not null,
    qrPath        varchar(255) null,
    deletedAt     datetime     null,
    deletedBy     int          null
);

create table projects
(
    projectId   int auto_increment
        primary key,
    companyId   int                                not null,
    area        float                              not null,
    code        varchar(50)                        null,
    projectName varchar(200)                       not null,
    address     varchar(100)                       null,
    createdBy   int                                not null,
    updatedBy   int                                null,
    createdAt   datetime default CURRENT_TIMESTAMP null,
    updatedAt   datetime default CURRENT_TIMESTAMP null,
    deletedAt   datetime                           null,
    deletedBy   int                                null,
    constraint code
        unique (code)
);

create table stores
(
    id           int auto_increment
        primary key,
    name         varchar(255)                       null,
    opening_time datetime default CURRENT_TIMESTAMP null,
    closing_time datetime default CURRENT_TIMESTAMP null,
    closing_id   varchar(100)                       null
);

create table transaction
(
    transactionId   int auto_increment
        primary key,
    ip              varchar(200)                       not null,
    amount          float                              not null,
    remark          varchar(255)                       null,
    currency        varchar(5)                         not null,
    pamentMethod    varchar(50)                        not null,
    transactionUUID varchar(50)                        null,
    contractId      int                                not null,
    currencyLAK     float                              not null,
    currencyTHB     float                              not null,
    currencyUSD     float                              not null,
    createdBy       int                                null,
    updatedBy       int                                null,
    createdAt       datetime default CURRENT_TIMESTAMP null,
    updatedAt       datetime default CURRENT_TIMESTAMP null,
    deletedAt       datetime                           null
);

create table users
(
    userId     int auto_increment
        primary key,
    companyId  int                                   null,
    fullName   varchar(80)                           not null,
    lastName   varchar(80)                           not null,
    tel        varchar(8)                            not null,
    password   varchar(255)                          not null,
    role       varchar(10) default 'CUSTOMER'        null,
    userStatus tinyint(1)  default 1                 null,
    createdAt  datetime    default CURRENT_TIMESTAMP null,
    updatedAt  datetime    default CURRENT_TIMESTAMP null,
    constraint tel
        unique (tel)
);


-- -----------------------
INSERT INTO company (companyId, companyName, logoPath, financeTel, fax, tel, email, whatsapp, address, createdBy, updatedBy, companyStatus, createdAt, updatedAt, deletedAt, deletedBy) VALUES (1, 'Champa LAB', '/company/20241113file8juvI55nVjsmOwbm5wwGhdsix.png', '91116465', '91116465', '91116465', 'sonephetmnlv@gmail.com', null, 'Bankok', 1, 1, 1, '2024-11-13 03:19:34', null, null, null);
INSERT INTO users (userId, companyId, fullName, lastName, tel, password, role, userStatus, createdAt, updatedAt) VALUES (1, 1, 'Champa ', 'LAB', '91116465', '794b2bedd9fd5e5711d05aa991aededb:6d06748388bce01122cf4bd7fcd2cda2', 'ADMIN', 1, '2024-11-13 03:18:21', '2024-11-13 03:18:21');

