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

create table exchange
(
    exchangeId int auto_increment
        primary key,
    companyId  int                                not null,
    thb        float                              not null,
    usd        float                              not null,
    chy        float                              not null,
    createdBy  int                                not null,
    updatedBy  int                                null,
    createdAt  datetime default CURRENT_TIMESTAMP null,
    updatedAt  datetime default CURRENT_TIMESTAMP null,
    deletedAt  datetime                           null,
    deletedBy  int                                null
);

create table logs
(
    logId       int auto_increment
        primary key,
    description varchar(200)                       null,
    path        varchar(100)                       not null,
    body        text                               null,
    userId      int                                not null,
    companyId   int                                null,
    ip          varchar(100)                       null,
    createdAt   datetime default CURRENT_TIMESTAMP null,
    deletedAt   datetime                           null
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
    area        float                              null,
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
    contractId      int                                null,
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
    customerId          int                                   not null,
    totalPrice          float                                 not null,
    currency            varchar(10) default 'LAK'             null,
    contractStatus      varchar(30) default 'ACTIVE'          null,
    area                float                                 not null,
    numberOfInstallment int         default 1                 null,
    payDay              date                                  null,
    modeOfPayment       varchar(20) default 'monthly'         null,
    payInAdvance        float       default 0                 null,
    createdAt           datetime    default CURRENT_TIMESTAMP null,
    updatedAt           datetime    default CURRENT_TIMESTAMP null,
    cancelAt            datetime                              null,
    cancelBy            int                                   null,
    reason              varchar(255)                          null,
    lastInvoice         int                                   null,
    deletedAt           datetime                              null,
    deletedBy           int                                   null,
    constraint contracts_company_companyId_fk
        foreign key (companyId) references company (companyId),
    constraint contracts_customerId_userId_fk
        foreign key (customerId) references users (userId),
    constraint contracts_projects_projectId_fk
        foreign key (projectId) references projects (projectId),
    constraint contracts_users_userId_fk
        foreign key (createdBy) references users (userId)
);

create table contract_customer
(
    id         int auto_increment
        primary key,
    companyId  int      not null,
    customerId int      not null,
    contractId int      not null,
    createdAt  datetime null,
    updatedAt  datetime null,
    deletedAt  datetime null,
    deletedBy  int      null,
    constraint contract_customer_company_companyId_fk
        foreign key (companyId) references company (companyId),
    constraint contract_customer_contracts_contractId_fk
        foreign key (contractId) references contracts (contractId),
    constraint contract_customer_users_userId_fk
        foreign key (customerId) references users (userId),
    constraint contract_customer_users_userId_fk_2
        foreign key (deletedBy) references users (userId)
);

create table expenses
(
    id          int auto_increment
        primary key,
    description varchar(255)                          not null,
    amount      decimal(10, 2)                        not null,
    projectId   int                                   not null,
    expenseDate date                                  not null,
    companyId   int                                   not null,
    currency    varchar(10) default 'LAK'             not null,
    createdAt   timestamp   default CURRENT_TIMESTAMP not null,
    userId      int                                   not null,
    updatedAt   timestamp                             null,
    deletedAt   timestamp                             null,
    constraint expenses_company_companyId_fk
        foreign key (companyId) references company (companyId),
    constraint expenses_projects_projectId_fk
        foreign key (projectId) references projects (projectId),
    constraint expenses_users_userId_fk
        foreign key (userId) references users (userId)
);

create table invoice
(
    invoiceId           int auto_increment
        primary key,
    invoiceStatus       varchar(20) default 'PENDING'         null,
    fines               float       default 0                 not null,
    paymentMethod       varchar(50)                           null,
    exchangeRate        float                                 null,
    currencyExchange    varchar(5)                            null,
    amount              float                                 not null,
    debt                float       default 0                 not null,
    currency            varchar(30)                           not null,
    contractId          int                                   not null,
    companyId           int                                   not null,
    projectId           int                                   not null,
    numberOfInstallment int         default 0                 null,
    comment             varchar(255)                          null,
    monthly             varchar(10)                           null,
    billPath            varchar(255)                          null,
    paidDate            datetime                              null,
    createdBy           int                                   null,
    createdAt           datetime    default CURRENT_TIMESTAMP null,
    updatedAt           datetime    default CURRENT_TIMESTAMP null,
    reservedBy          int                                   null,
    reservedAt          datetime                              null,
    remindSentTime      int         default 0                 null,
    remindSentDate      datetime                              null,
    constraint invoice_company_companyId_fk
        foreign key (companyId) references company (companyId),
    constraint invoice_contracts_contractId_fk
        foreign key (contractId) references contracts (contractId),
    constraint invoice_projects_projectId_fk
        foreign key (projectId) references projects (projectId),
    constraint invoice_users_userId_fk
        foreign key (createdBy) references users (userId),
    constraint invoice_users_userId_fk_2
        foreign key (createdBy) references users (userId),
    constraint invoice_users_userId_fk_3
        foreign key (reservedBy) references users (userId)
);

create table project_item
(
    id         int auto_increment
        primary key,
    title      varchar(100)                       not null,
    content    varchar(255)                       null,
    projectId  int                                not null,
    companyId  int                                not null,
    area       double                             not null,
    code       varchar(50)                        not null,
    price      double                             null,
    createdAt  datetime default CURRENT_TIMESTAMP not null,
    contractId int                                null,
    updatedAt  datetime                           null,
    deletedAt  datetime                           null,
    constraint project_item_pk_2
        unique (id),
    constraint project_item_company_companyId_fk
        foreign key (companyId) references company (companyId),
    constraint project_item_contracts_contractId_fk
        foreign key (contractId) references contracts (contractId),
    constraint project_item_projects_projectId_fk
        foreign key (projectId) references projects (projectId)
);

create table contract_items
(
    id            int auto_increment
        primary key,
    companyId     int      not null,
    contractId    int      not null,
    projectItemId int      not null,
    createdAt     datetime null,
    updatedAt     datetime null,
    deletedAt     datetime null,
    constraint contract_items_pk_2
        unique (id),
    constraint contract_items_company_companyId_fk
        foreign key (companyId) references company (companyId),
    constraint contract_items_contracts_contractId_fk
        foreign key (contractId) references contracts (contractId),
    constraint contract_items_project_item_id_fk
        foreign key (projectItemId) references project_item (id)
);

create table schedules
(
    id            int auto_increment
        primary key,
    modeOfPayment varchar(100)                       not null,
    date          datetime                           not null,
    contractId    int                                not null,
    createdAt     datetime default CURRENT_TIMESTAMP null,
    constraint schedules_pk_2
        unique (id),
    constraint schedules_contracts_contractId_fk
        foreign key (contractId) references contracts (contractId)
);

