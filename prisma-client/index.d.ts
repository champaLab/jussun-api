
/**
 * Client
**/

import * as runtime from './runtime/binary.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model company
 * 
 */
export type company = $Result.DefaultSelection<Prisma.$companyPayload>
/**
 * Model contracts
 * 
 */
export type contracts = $Result.DefaultSelection<Prisma.$contractsPayload>
/**
 * Model exchange
 * 
 */
export type exchange = $Result.DefaultSelection<Prisma.$exchangePayload>
/**
 * Model invoice
 * 
 */
export type invoice = $Result.DefaultSelection<Prisma.$invoicePayload>
/**
 * Model logs
 * 
 */
export type logs = $Result.DefaultSelection<Prisma.$logsPayload>
/**
 * Model news
 * 
 */
export type news = $Result.DefaultSelection<Prisma.$newsPayload>
/**
 * Model otp
 * 
 */
export type otp = $Result.DefaultSelection<Prisma.$otpPayload>
/**
 * Model payment_method
 * 
 */
export type payment_method = $Result.DefaultSelection<Prisma.$payment_methodPayload>
/**
 * Model projects
 * 
 */
export type projects = $Result.DefaultSelection<Prisma.$projectsPayload>
/**
 * Model stores
 * 
 */
export type stores = $Result.DefaultSelection<Prisma.$storesPayload>
/**
 * Model transaction
 * 
 */
export type transaction = $Result.DefaultSelection<Prisma.$transactionPayload>
/**
 * Model users
 * 
 */
export type users = $Result.DefaultSelection<Prisma.$usersPayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Companies
 * const companies = await prisma.company.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Companies
   * const companies = await prisma.company.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends (U | 'beforeExit')>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : V extends 'beforeExit' ? () => $Utils.JsPromise<void> : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.company`: Exposes CRUD operations for the **company** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Companies
    * const companies = await prisma.company.findMany()
    * ```
    */
  get company(): Prisma.companyDelegate<ExtArgs>;

  /**
   * `prisma.contracts`: Exposes CRUD operations for the **contracts** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Contracts
    * const contracts = await prisma.contracts.findMany()
    * ```
    */
  get contracts(): Prisma.contractsDelegate<ExtArgs>;

  /**
   * `prisma.exchange`: Exposes CRUD operations for the **exchange** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Exchanges
    * const exchanges = await prisma.exchange.findMany()
    * ```
    */
  get exchange(): Prisma.exchangeDelegate<ExtArgs>;

  /**
   * `prisma.invoice`: Exposes CRUD operations for the **invoice** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Invoices
    * const invoices = await prisma.invoice.findMany()
    * ```
    */
  get invoice(): Prisma.invoiceDelegate<ExtArgs>;

  /**
   * `prisma.logs`: Exposes CRUD operations for the **logs** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Logs
    * const logs = await prisma.logs.findMany()
    * ```
    */
  get logs(): Prisma.logsDelegate<ExtArgs>;

  /**
   * `prisma.news`: Exposes CRUD operations for the **news** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more News
    * const news = await prisma.news.findMany()
    * ```
    */
  get news(): Prisma.newsDelegate<ExtArgs>;

  /**
   * `prisma.otp`: Exposes CRUD operations for the **otp** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Otps
    * const otps = await prisma.otp.findMany()
    * ```
    */
  get otp(): Prisma.otpDelegate<ExtArgs>;

  /**
   * `prisma.payment_method`: Exposes CRUD operations for the **payment_method** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Payment_methods
    * const payment_methods = await prisma.payment_method.findMany()
    * ```
    */
  get payment_method(): Prisma.payment_methodDelegate<ExtArgs>;

  /**
   * `prisma.projects`: Exposes CRUD operations for the **projects** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Projects
    * const projects = await prisma.projects.findMany()
    * ```
    */
  get projects(): Prisma.projectsDelegate<ExtArgs>;

  /**
   * `prisma.stores`: Exposes CRUD operations for the **stores** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Stores
    * const stores = await prisma.stores.findMany()
    * ```
    */
  get stores(): Prisma.storesDelegate<ExtArgs>;

  /**
   * `prisma.transaction`: Exposes CRUD operations for the **transaction** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Transactions
    * const transactions = await prisma.transaction.findMany()
    * ```
    */
  get transaction(): Prisma.transactionDelegate<ExtArgs>;

  /**
   * `prisma.users`: Exposes CRUD operations for the **users** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.users.findMany()
    * ```
    */
  get users(): Prisma.usersDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 5.22.0
   * Query Engine version: 605197351a3c8bdd595af2d2a9bc3025bca48ea2
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
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

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs, clientOptions: PrismaClientOptions }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], this['params']['clientOptions']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> = {
    meta: {
      modelProps: "company" | "contracts" | "exchange" | "invoice" | "logs" | "news" | "otp" | "payment_method" | "projects" | "stores" | "transaction" | "users"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      company: {
        payload: Prisma.$companyPayload<ExtArgs>
        fields: Prisma.companyFieldRefs
        operations: {
          findUnique: {
            args: Prisma.companyFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$companyPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.companyFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$companyPayload>
          }
          findFirst: {
            args: Prisma.companyFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$companyPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.companyFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$companyPayload>
          }
          findMany: {
            args: Prisma.companyFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$companyPayload>[]
          }
          create: {
            args: Prisma.companyCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$companyPayload>
          }
          createMany: {
            args: Prisma.companyCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.companyDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$companyPayload>
          }
          update: {
            args: Prisma.companyUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$companyPayload>
          }
          deleteMany: {
            args: Prisma.companyDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.companyUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.companyUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$companyPayload>
          }
          aggregate: {
            args: Prisma.CompanyAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCompany>
          }
          groupBy: {
            args: Prisma.companyGroupByArgs<ExtArgs>
            result: $Utils.Optional<CompanyGroupByOutputType>[]
          }
          count: {
            args: Prisma.companyCountArgs<ExtArgs>
            result: $Utils.Optional<CompanyCountAggregateOutputType> | number
          }
        }
      }
      contracts: {
        payload: Prisma.$contractsPayload<ExtArgs>
        fields: Prisma.contractsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.contractsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$contractsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.contractsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$contractsPayload>
          }
          findFirst: {
            args: Prisma.contractsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$contractsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.contractsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$contractsPayload>
          }
          findMany: {
            args: Prisma.contractsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$contractsPayload>[]
          }
          create: {
            args: Prisma.contractsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$contractsPayload>
          }
          createMany: {
            args: Prisma.contractsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.contractsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$contractsPayload>
          }
          update: {
            args: Prisma.contractsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$contractsPayload>
          }
          deleteMany: {
            args: Prisma.contractsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.contractsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.contractsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$contractsPayload>
          }
          aggregate: {
            args: Prisma.ContractsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateContracts>
          }
          groupBy: {
            args: Prisma.contractsGroupByArgs<ExtArgs>
            result: $Utils.Optional<ContractsGroupByOutputType>[]
          }
          count: {
            args: Prisma.contractsCountArgs<ExtArgs>
            result: $Utils.Optional<ContractsCountAggregateOutputType> | number
          }
        }
      }
      exchange: {
        payload: Prisma.$exchangePayload<ExtArgs>
        fields: Prisma.exchangeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.exchangeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$exchangePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.exchangeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$exchangePayload>
          }
          findFirst: {
            args: Prisma.exchangeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$exchangePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.exchangeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$exchangePayload>
          }
          findMany: {
            args: Prisma.exchangeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$exchangePayload>[]
          }
          create: {
            args: Prisma.exchangeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$exchangePayload>
          }
          createMany: {
            args: Prisma.exchangeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.exchangeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$exchangePayload>
          }
          update: {
            args: Prisma.exchangeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$exchangePayload>
          }
          deleteMany: {
            args: Prisma.exchangeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.exchangeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.exchangeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$exchangePayload>
          }
          aggregate: {
            args: Prisma.ExchangeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateExchange>
          }
          groupBy: {
            args: Prisma.exchangeGroupByArgs<ExtArgs>
            result: $Utils.Optional<ExchangeGroupByOutputType>[]
          }
          count: {
            args: Prisma.exchangeCountArgs<ExtArgs>
            result: $Utils.Optional<ExchangeCountAggregateOutputType> | number
          }
        }
      }
      invoice: {
        payload: Prisma.$invoicePayload<ExtArgs>
        fields: Prisma.invoiceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.invoiceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$invoicePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.invoiceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$invoicePayload>
          }
          findFirst: {
            args: Prisma.invoiceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$invoicePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.invoiceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$invoicePayload>
          }
          findMany: {
            args: Prisma.invoiceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$invoicePayload>[]
          }
          create: {
            args: Prisma.invoiceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$invoicePayload>
          }
          createMany: {
            args: Prisma.invoiceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.invoiceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$invoicePayload>
          }
          update: {
            args: Prisma.invoiceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$invoicePayload>
          }
          deleteMany: {
            args: Prisma.invoiceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.invoiceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.invoiceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$invoicePayload>
          }
          aggregate: {
            args: Prisma.InvoiceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateInvoice>
          }
          groupBy: {
            args: Prisma.invoiceGroupByArgs<ExtArgs>
            result: $Utils.Optional<InvoiceGroupByOutputType>[]
          }
          count: {
            args: Prisma.invoiceCountArgs<ExtArgs>
            result: $Utils.Optional<InvoiceCountAggregateOutputType> | number
          }
        }
      }
      logs: {
        payload: Prisma.$logsPayload<ExtArgs>
        fields: Prisma.logsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.logsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$logsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.logsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$logsPayload>
          }
          findFirst: {
            args: Prisma.logsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$logsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.logsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$logsPayload>
          }
          findMany: {
            args: Prisma.logsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$logsPayload>[]
          }
          create: {
            args: Prisma.logsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$logsPayload>
          }
          createMany: {
            args: Prisma.logsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.logsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$logsPayload>
          }
          update: {
            args: Prisma.logsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$logsPayload>
          }
          deleteMany: {
            args: Prisma.logsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.logsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.logsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$logsPayload>
          }
          aggregate: {
            args: Prisma.LogsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLogs>
          }
          groupBy: {
            args: Prisma.logsGroupByArgs<ExtArgs>
            result: $Utils.Optional<LogsGroupByOutputType>[]
          }
          count: {
            args: Prisma.logsCountArgs<ExtArgs>
            result: $Utils.Optional<LogsCountAggregateOutputType> | number
          }
        }
      }
      news: {
        payload: Prisma.$newsPayload<ExtArgs>
        fields: Prisma.newsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.newsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$newsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.newsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$newsPayload>
          }
          findFirst: {
            args: Prisma.newsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$newsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.newsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$newsPayload>
          }
          findMany: {
            args: Prisma.newsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$newsPayload>[]
          }
          create: {
            args: Prisma.newsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$newsPayload>
          }
          createMany: {
            args: Prisma.newsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.newsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$newsPayload>
          }
          update: {
            args: Prisma.newsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$newsPayload>
          }
          deleteMany: {
            args: Prisma.newsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.newsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.newsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$newsPayload>
          }
          aggregate: {
            args: Prisma.NewsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateNews>
          }
          groupBy: {
            args: Prisma.newsGroupByArgs<ExtArgs>
            result: $Utils.Optional<NewsGroupByOutputType>[]
          }
          count: {
            args: Prisma.newsCountArgs<ExtArgs>
            result: $Utils.Optional<NewsCountAggregateOutputType> | number
          }
        }
      }
      otp: {
        payload: Prisma.$otpPayload<ExtArgs>
        fields: Prisma.otpFieldRefs
        operations: {
          findUnique: {
            args: Prisma.otpFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$otpPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.otpFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$otpPayload>
          }
          findFirst: {
            args: Prisma.otpFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$otpPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.otpFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$otpPayload>
          }
          findMany: {
            args: Prisma.otpFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$otpPayload>[]
          }
          create: {
            args: Prisma.otpCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$otpPayload>
          }
          createMany: {
            args: Prisma.otpCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.otpDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$otpPayload>
          }
          update: {
            args: Prisma.otpUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$otpPayload>
          }
          deleteMany: {
            args: Prisma.otpDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.otpUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.otpUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$otpPayload>
          }
          aggregate: {
            args: Prisma.OtpAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOtp>
          }
          groupBy: {
            args: Prisma.otpGroupByArgs<ExtArgs>
            result: $Utils.Optional<OtpGroupByOutputType>[]
          }
          count: {
            args: Prisma.otpCountArgs<ExtArgs>
            result: $Utils.Optional<OtpCountAggregateOutputType> | number
          }
        }
      }
      payment_method: {
        payload: Prisma.$payment_methodPayload<ExtArgs>
        fields: Prisma.payment_methodFieldRefs
        operations: {
          findUnique: {
            args: Prisma.payment_methodFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$payment_methodPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.payment_methodFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$payment_methodPayload>
          }
          findFirst: {
            args: Prisma.payment_methodFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$payment_methodPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.payment_methodFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$payment_methodPayload>
          }
          findMany: {
            args: Prisma.payment_methodFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$payment_methodPayload>[]
          }
          create: {
            args: Prisma.payment_methodCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$payment_methodPayload>
          }
          createMany: {
            args: Prisma.payment_methodCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.payment_methodDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$payment_methodPayload>
          }
          update: {
            args: Prisma.payment_methodUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$payment_methodPayload>
          }
          deleteMany: {
            args: Prisma.payment_methodDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.payment_methodUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.payment_methodUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$payment_methodPayload>
          }
          aggregate: {
            args: Prisma.Payment_methodAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePayment_method>
          }
          groupBy: {
            args: Prisma.payment_methodGroupByArgs<ExtArgs>
            result: $Utils.Optional<Payment_methodGroupByOutputType>[]
          }
          count: {
            args: Prisma.payment_methodCountArgs<ExtArgs>
            result: $Utils.Optional<Payment_methodCountAggregateOutputType> | number
          }
        }
      }
      projects: {
        payload: Prisma.$projectsPayload<ExtArgs>
        fields: Prisma.projectsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.projectsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$projectsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.projectsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$projectsPayload>
          }
          findFirst: {
            args: Prisma.projectsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$projectsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.projectsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$projectsPayload>
          }
          findMany: {
            args: Prisma.projectsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$projectsPayload>[]
          }
          create: {
            args: Prisma.projectsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$projectsPayload>
          }
          createMany: {
            args: Prisma.projectsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.projectsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$projectsPayload>
          }
          update: {
            args: Prisma.projectsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$projectsPayload>
          }
          deleteMany: {
            args: Prisma.projectsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.projectsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.projectsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$projectsPayload>
          }
          aggregate: {
            args: Prisma.ProjectsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProjects>
          }
          groupBy: {
            args: Prisma.projectsGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProjectsGroupByOutputType>[]
          }
          count: {
            args: Prisma.projectsCountArgs<ExtArgs>
            result: $Utils.Optional<ProjectsCountAggregateOutputType> | number
          }
        }
      }
      stores: {
        payload: Prisma.$storesPayload<ExtArgs>
        fields: Prisma.storesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.storesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$storesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.storesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$storesPayload>
          }
          findFirst: {
            args: Prisma.storesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$storesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.storesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$storesPayload>
          }
          findMany: {
            args: Prisma.storesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$storesPayload>[]
          }
          create: {
            args: Prisma.storesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$storesPayload>
          }
          createMany: {
            args: Prisma.storesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.storesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$storesPayload>
          }
          update: {
            args: Prisma.storesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$storesPayload>
          }
          deleteMany: {
            args: Prisma.storesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.storesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.storesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$storesPayload>
          }
          aggregate: {
            args: Prisma.StoresAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStores>
          }
          groupBy: {
            args: Prisma.storesGroupByArgs<ExtArgs>
            result: $Utils.Optional<StoresGroupByOutputType>[]
          }
          count: {
            args: Prisma.storesCountArgs<ExtArgs>
            result: $Utils.Optional<StoresCountAggregateOutputType> | number
          }
        }
      }
      transaction: {
        payload: Prisma.$transactionPayload<ExtArgs>
        fields: Prisma.transactionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.transactionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$transactionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.transactionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$transactionPayload>
          }
          findFirst: {
            args: Prisma.transactionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$transactionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.transactionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$transactionPayload>
          }
          findMany: {
            args: Prisma.transactionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$transactionPayload>[]
          }
          create: {
            args: Prisma.transactionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$transactionPayload>
          }
          createMany: {
            args: Prisma.transactionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.transactionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$transactionPayload>
          }
          update: {
            args: Prisma.transactionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$transactionPayload>
          }
          deleteMany: {
            args: Prisma.transactionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.transactionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.transactionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$transactionPayload>
          }
          aggregate: {
            args: Prisma.TransactionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTransaction>
          }
          groupBy: {
            args: Prisma.transactionGroupByArgs<ExtArgs>
            result: $Utils.Optional<TransactionGroupByOutputType>[]
          }
          count: {
            args: Prisma.transactionCountArgs<ExtArgs>
            result: $Utils.Optional<TransactionCountAggregateOutputType> | number
          }
        }
      }
      users: {
        payload: Prisma.$usersPayload<ExtArgs>
        fields: Prisma.usersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.usersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.usersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          findFirst: {
            args: Prisma.usersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.usersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          findMany: {
            args: Prisma.usersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>[]
          }
          create: {
            args: Prisma.usersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          createMany: {
            args: Prisma.usersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.usersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          update: {
            args: Prisma.usersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          deleteMany: {
            args: Prisma.usersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.usersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.usersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          aggregate: {
            args: Prisma.UsersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsers>
          }
          groupBy: {
            args: Prisma.usersGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsersGroupByOutputType>[]
          }
          count: {
            args: Prisma.usersCountArgs<ExtArgs>
            result: $Utils.Optional<UsersCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
  }


  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */



  /**
   * Models
   */

  /**
   * Model company
   */

  export type AggregateCompany = {
    _count: CompanyCountAggregateOutputType | null
    _avg: CompanyAvgAggregateOutputType | null
    _sum: CompanySumAggregateOutputType | null
    _min: CompanyMinAggregateOutputType | null
    _max: CompanyMaxAggregateOutputType | null
  }

  export type CompanyAvgAggregateOutputType = {
    companyId: number | null
    createdBy: number | null
    updatedBy: number | null
    deletedBy: number | null
  }

  export type CompanySumAggregateOutputType = {
    companyId: number | null
    createdBy: number | null
    updatedBy: number | null
    deletedBy: number | null
  }

  export type CompanyMinAggregateOutputType = {
    companyId: number | null
    companyName: string | null
    logoPath: string | null
    financeTel: string | null
    fax: string | null
    tel: string | null
    email: string | null
    whatsapp: string | null
    address: string | null
    createdBy: number | null
    updatedBy: number | null
    companyStatus: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
    deletedBy: number | null
  }

  export type CompanyMaxAggregateOutputType = {
    companyId: number | null
    companyName: string | null
    logoPath: string | null
    financeTel: string | null
    fax: string | null
    tel: string | null
    email: string | null
    whatsapp: string | null
    address: string | null
    createdBy: number | null
    updatedBy: number | null
    companyStatus: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
    deletedBy: number | null
  }

  export type CompanyCountAggregateOutputType = {
    companyId: number
    companyName: number
    logoPath: number
    financeTel: number
    fax: number
    tel: number
    email: number
    whatsapp: number
    address: number
    createdBy: number
    updatedBy: number
    companyStatus: number
    createdAt: number
    updatedAt: number
    deletedAt: number
    deletedBy: number
    _all: number
  }


  export type CompanyAvgAggregateInputType = {
    companyId?: true
    createdBy?: true
    updatedBy?: true
    deletedBy?: true
  }

  export type CompanySumAggregateInputType = {
    companyId?: true
    createdBy?: true
    updatedBy?: true
    deletedBy?: true
  }

  export type CompanyMinAggregateInputType = {
    companyId?: true
    companyName?: true
    logoPath?: true
    financeTel?: true
    fax?: true
    tel?: true
    email?: true
    whatsapp?: true
    address?: true
    createdBy?: true
    updatedBy?: true
    companyStatus?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
    deletedBy?: true
  }

  export type CompanyMaxAggregateInputType = {
    companyId?: true
    companyName?: true
    logoPath?: true
    financeTel?: true
    fax?: true
    tel?: true
    email?: true
    whatsapp?: true
    address?: true
    createdBy?: true
    updatedBy?: true
    companyStatus?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
    deletedBy?: true
  }

  export type CompanyCountAggregateInputType = {
    companyId?: true
    companyName?: true
    logoPath?: true
    financeTel?: true
    fax?: true
    tel?: true
    email?: true
    whatsapp?: true
    address?: true
    createdBy?: true
    updatedBy?: true
    companyStatus?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
    deletedBy?: true
    _all?: true
  }

  export type CompanyAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which company to aggregate.
     */
    where?: companyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of companies to fetch.
     */
    orderBy?: companyOrderByWithRelationInput | companyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: companyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` companies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` companies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned companies
    **/
    _count?: true | CompanyCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CompanyAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CompanySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CompanyMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CompanyMaxAggregateInputType
  }

  export type GetCompanyAggregateType<T extends CompanyAggregateArgs> = {
        [P in keyof T & keyof AggregateCompany]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCompany[P]>
      : GetScalarType<T[P], AggregateCompany[P]>
  }




  export type companyGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: companyWhereInput
    orderBy?: companyOrderByWithAggregationInput | companyOrderByWithAggregationInput[]
    by: CompanyScalarFieldEnum[] | CompanyScalarFieldEnum
    having?: companyScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CompanyCountAggregateInputType | true
    _avg?: CompanyAvgAggregateInputType
    _sum?: CompanySumAggregateInputType
    _min?: CompanyMinAggregateInputType
    _max?: CompanyMaxAggregateInputType
  }

  export type CompanyGroupByOutputType = {
    companyId: number
    companyName: string | null
    logoPath: string
    financeTel: string
    fax: string | null
    tel: string
    email: string | null
    whatsapp: string | null
    address: string
    createdBy: number
    updatedBy: number | null
    companyStatus: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
    deletedBy: number | null
    _count: CompanyCountAggregateOutputType | null
    _avg: CompanyAvgAggregateOutputType | null
    _sum: CompanySumAggregateOutputType | null
    _min: CompanyMinAggregateOutputType | null
    _max: CompanyMaxAggregateOutputType | null
  }

  type GetCompanyGroupByPayload<T extends companyGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CompanyGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CompanyGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CompanyGroupByOutputType[P]>
            : GetScalarType<T[P], CompanyGroupByOutputType[P]>
        }
      >
    >


  export type companySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    companyId?: boolean
    companyName?: boolean
    logoPath?: boolean
    financeTel?: boolean
    fax?: boolean
    tel?: boolean
    email?: boolean
    whatsapp?: boolean
    address?: boolean
    createdBy?: boolean
    updatedBy?: boolean
    companyStatus?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    deletedBy?: boolean
  }, ExtArgs["result"]["company"]>


  export type companySelectScalar = {
    companyId?: boolean
    companyName?: boolean
    logoPath?: boolean
    financeTel?: boolean
    fax?: boolean
    tel?: boolean
    email?: boolean
    whatsapp?: boolean
    address?: boolean
    createdBy?: boolean
    updatedBy?: boolean
    companyStatus?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    deletedBy?: boolean
  }


  export type $companyPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "company"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      companyId: number
      companyName: string | null
      logoPath: string
      financeTel: string
      fax: string | null
      tel: string
      email: string | null
      whatsapp: string | null
      address: string
      createdBy: number
      updatedBy: number | null
      companyStatus: boolean | null
      createdAt: Date | null
      updatedAt: Date | null
      deletedAt: Date | null
      deletedBy: number | null
    }, ExtArgs["result"]["company"]>
    composites: {}
  }

  type companyGetPayload<S extends boolean | null | undefined | companyDefaultArgs> = $Result.GetResult<Prisma.$companyPayload, S>

  type companyCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<companyFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: CompanyCountAggregateInputType | true
    }

  export interface companyDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['company'], meta: { name: 'company' } }
    /**
     * Find zero or one Company that matches the filter.
     * @param {companyFindUniqueArgs} args - Arguments to find a Company
     * @example
     * // Get one Company
     * const company = await prisma.company.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends companyFindUniqueArgs>(args: SelectSubset<T, companyFindUniqueArgs<ExtArgs>>): Prisma__companyClient<$Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Company that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {companyFindUniqueOrThrowArgs} args - Arguments to find a Company
     * @example
     * // Get one Company
     * const company = await prisma.company.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends companyFindUniqueOrThrowArgs>(args: SelectSubset<T, companyFindUniqueOrThrowArgs<ExtArgs>>): Prisma__companyClient<$Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Company that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {companyFindFirstArgs} args - Arguments to find a Company
     * @example
     * // Get one Company
     * const company = await prisma.company.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends companyFindFirstArgs>(args?: SelectSubset<T, companyFindFirstArgs<ExtArgs>>): Prisma__companyClient<$Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Company that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {companyFindFirstOrThrowArgs} args - Arguments to find a Company
     * @example
     * // Get one Company
     * const company = await prisma.company.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends companyFindFirstOrThrowArgs>(args?: SelectSubset<T, companyFindFirstOrThrowArgs<ExtArgs>>): Prisma__companyClient<$Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Companies that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {companyFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Companies
     * const companies = await prisma.company.findMany()
     * 
     * // Get first 10 Companies
     * const companies = await prisma.company.findMany({ take: 10 })
     * 
     * // Only select the `companyId`
     * const companyWithCompanyIdOnly = await prisma.company.findMany({ select: { companyId: true } })
     * 
     */
    findMany<T extends companyFindManyArgs>(args?: SelectSubset<T, companyFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Company.
     * @param {companyCreateArgs} args - Arguments to create a Company.
     * @example
     * // Create one Company
     * const Company = await prisma.company.create({
     *   data: {
     *     // ... data to create a Company
     *   }
     * })
     * 
     */
    create<T extends companyCreateArgs>(args: SelectSubset<T, companyCreateArgs<ExtArgs>>): Prisma__companyClient<$Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Companies.
     * @param {companyCreateManyArgs} args - Arguments to create many Companies.
     * @example
     * // Create many Companies
     * const company = await prisma.company.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends companyCreateManyArgs>(args?: SelectSubset<T, companyCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Company.
     * @param {companyDeleteArgs} args - Arguments to delete one Company.
     * @example
     * // Delete one Company
     * const Company = await prisma.company.delete({
     *   where: {
     *     // ... filter to delete one Company
     *   }
     * })
     * 
     */
    delete<T extends companyDeleteArgs>(args: SelectSubset<T, companyDeleteArgs<ExtArgs>>): Prisma__companyClient<$Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Company.
     * @param {companyUpdateArgs} args - Arguments to update one Company.
     * @example
     * // Update one Company
     * const company = await prisma.company.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends companyUpdateArgs>(args: SelectSubset<T, companyUpdateArgs<ExtArgs>>): Prisma__companyClient<$Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Companies.
     * @param {companyDeleteManyArgs} args - Arguments to filter Companies to delete.
     * @example
     * // Delete a few Companies
     * const { count } = await prisma.company.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends companyDeleteManyArgs>(args?: SelectSubset<T, companyDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Companies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {companyUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Companies
     * const company = await prisma.company.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends companyUpdateManyArgs>(args: SelectSubset<T, companyUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Company.
     * @param {companyUpsertArgs} args - Arguments to update or create a Company.
     * @example
     * // Update or create a Company
     * const company = await prisma.company.upsert({
     *   create: {
     *     // ... data to create a Company
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Company we want to update
     *   }
     * })
     */
    upsert<T extends companyUpsertArgs>(args: SelectSubset<T, companyUpsertArgs<ExtArgs>>): Prisma__companyClient<$Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Companies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {companyCountArgs} args - Arguments to filter Companies to count.
     * @example
     * // Count the number of Companies
     * const count = await prisma.company.count({
     *   where: {
     *     // ... the filter for the Companies we want to count
     *   }
     * })
    **/
    count<T extends companyCountArgs>(
      args?: Subset<T, companyCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CompanyCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Company.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CompanyAggregateArgs>(args: Subset<T, CompanyAggregateArgs>): Prisma.PrismaPromise<GetCompanyAggregateType<T>>

    /**
     * Group by Company.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {companyGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends companyGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: companyGroupByArgs['orderBy'] }
        : { orderBy?: companyGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, companyGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCompanyGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the company model
   */
  readonly fields: companyFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for company.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__companyClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the company model
   */ 
  interface companyFieldRefs {
    readonly companyId: FieldRef<"company", 'Int'>
    readonly companyName: FieldRef<"company", 'String'>
    readonly logoPath: FieldRef<"company", 'String'>
    readonly financeTel: FieldRef<"company", 'String'>
    readonly fax: FieldRef<"company", 'String'>
    readonly tel: FieldRef<"company", 'String'>
    readonly email: FieldRef<"company", 'String'>
    readonly whatsapp: FieldRef<"company", 'String'>
    readonly address: FieldRef<"company", 'String'>
    readonly createdBy: FieldRef<"company", 'Int'>
    readonly updatedBy: FieldRef<"company", 'Int'>
    readonly companyStatus: FieldRef<"company", 'Boolean'>
    readonly createdAt: FieldRef<"company", 'DateTime'>
    readonly updatedAt: FieldRef<"company", 'DateTime'>
    readonly deletedAt: FieldRef<"company", 'DateTime'>
    readonly deletedBy: FieldRef<"company", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * company findUnique
   */
  export type companyFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelect<ExtArgs> | null
    /**
     * Filter, which company to fetch.
     */
    where: companyWhereUniqueInput
  }

  /**
   * company findUniqueOrThrow
   */
  export type companyFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelect<ExtArgs> | null
    /**
     * Filter, which company to fetch.
     */
    where: companyWhereUniqueInput
  }

  /**
   * company findFirst
   */
  export type companyFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelect<ExtArgs> | null
    /**
     * Filter, which company to fetch.
     */
    where?: companyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of companies to fetch.
     */
    orderBy?: companyOrderByWithRelationInput | companyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for companies.
     */
    cursor?: companyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` companies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` companies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of companies.
     */
    distinct?: CompanyScalarFieldEnum | CompanyScalarFieldEnum[]
  }

  /**
   * company findFirstOrThrow
   */
  export type companyFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelect<ExtArgs> | null
    /**
     * Filter, which company to fetch.
     */
    where?: companyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of companies to fetch.
     */
    orderBy?: companyOrderByWithRelationInput | companyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for companies.
     */
    cursor?: companyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` companies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` companies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of companies.
     */
    distinct?: CompanyScalarFieldEnum | CompanyScalarFieldEnum[]
  }

  /**
   * company findMany
   */
  export type companyFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelect<ExtArgs> | null
    /**
     * Filter, which companies to fetch.
     */
    where?: companyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of companies to fetch.
     */
    orderBy?: companyOrderByWithRelationInput | companyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing companies.
     */
    cursor?: companyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` companies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` companies.
     */
    skip?: number
    distinct?: CompanyScalarFieldEnum | CompanyScalarFieldEnum[]
  }

  /**
   * company create
   */
  export type companyCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelect<ExtArgs> | null
    /**
     * The data needed to create a company.
     */
    data: XOR<companyCreateInput, companyUncheckedCreateInput>
  }

  /**
   * company createMany
   */
  export type companyCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many companies.
     */
    data: companyCreateManyInput | companyCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * company update
   */
  export type companyUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelect<ExtArgs> | null
    /**
     * The data needed to update a company.
     */
    data: XOR<companyUpdateInput, companyUncheckedUpdateInput>
    /**
     * Choose, which company to update.
     */
    where: companyWhereUniqueInput
  }

  /**
   * company updateMany
   */
  export type companyUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update companies.
     */
    data: XOR<companyUpdateManyMutationInput, companyUncheckedUpdateManyInput>
    /**
     * Filter which companies to update
     */
    where?: companyWhereInput
  }

  /**
   * company upsert
   */
  export type companyUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelect<ExtArgs> | null
    /**
     * The filter to search for the company to update in case it exists.
     */
    where: companyWhereUniqueInput
    /**
     * In case the company found by the `where` argument doesn't exist, create a new company with this data.
     */
    create: XOR<companyCreateInput, companyUncheckedCreateInput>
    /**
     * In case the company was found with the provided `where` argument, update it with this data.
     */
    update: XOR<companyUpdateInput, companyUncheckedUpdateInput>
  }

  /**
   * company delete
   */
  export type companyDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelect<ExtArgs> | null
    /**
     * Filter which company to delete.
     */
    where: companyWhereUniqueInput
  }

  /**
   * company deleteMany
   */
  export type companyDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which companies to delete
     */
    where?: companyWhereInput
  }

  /**
   * company without action
   */
  export type companyDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelect<ExtArgs> | null
  }


  /**
   * Model contracts
   */

  export type AggregateContracts = {
    _count: ContractsCountAggregateOutputType | null
    _avg: ContractsAvgAggregateOutputType | null
    _sum: ContractsSumAggregateOutputType | null
    _min: ContractsMinAggregateOutputType | null
    _max: ContractsMaxAggregateOutputType | null
  }

  export type ContractsAvgAggregateOutputType = {
    contractId: number | null
    companyId: number | null
    createdBy: number | null
    updatedBy: number | null
    projectId: number | null
    price: number | null
    totalPrice: number | null
    area: number | null
    numberOfInstallment: number | null
    payInAdvance: number | null
    customerIdOne: number | null
    customerIdTwo: number | null
    cancelBy: number | null
    lastInvoice: number | null
    deletedBy: number | null
  }

  export type ContractsSumAggregateOutputType = {
    contractId: number | null
    companyId: number | null
    createdBy: number | null
    updatedBy: number | null
    projectId: number | null
    price: number | null
    totalPrice: number | null
    area: number | null
    numberOfInstallment: number | null
    payInAdvance: number | null
    customerIdOne: number | null
    customerIdTwo: number | null
    cancelBy: number | null
    lastInvoice: number | null
    deletedBy: number | null
  }

  export type ContractsMinAggregateOutputType = {
    contractId: number | null
    companyId: number | null
    docId: string | null
    createdBy: number | null
    updatedBy: number | null
    projectId: number | null
    price: number | null
    totalPrice: number | null
    currency: string | null
    contractStatus: string | null
    area: number | null
    numberOfInstallment: number | null
    payDay: Date | null
    modeOfPayment: string | null
    payInAdvance: number | null
    customerIdOne: number | null
    customerIdTwo: number | null
    createdAt: Date | null
    updatedAt: Date | null
    cancelAt: Date | null
    cancelBy: number | null
    reason: string | null
    lastInvoice: number | null
    deletedAt: Date | null
    deletedBy: number | null
  }

  export type ContractsMaxAggregateOutputType = {
    contractId: number | null
    companyId: number | null
    docId: string | null
    createdBy: number | null
    updatedBy: number | null
    projectId: number | null
    price: number | null
    totalPrice: number | null
    currency: string | null
    contractStatus: string | null
    area: number | null
    numberOfInstallment: number | null
    payDay: Date | null
    modeOfPayment: string | null
    payInAdvance: number | null
    customerIdOne: number | null
    customerIdTwo: number | null
    createdAt: Date | null
    updatedAt: Date | null
    cancelAt: Date | null
    cancelBy: number | null
    reason: string | null
    lastInvoice: number | null
    deletedAt: Date | null
    deletedBy: number | null
  }

  export type ContractsCountAggregateOutputType = {
    contractId: number
    companyId: number
    docId: number
    createdBy: number
    updatedBy: number
    projectId: number
    price: number
    totalPrice: number
    currency: number
    contractStatus: number
    area: number
    numberOfInstallment: number
    payDay: number
    modeOfPayment: number
    payInAdvance: number
    customerIdOne: number
    customerIdTwo: number
    createdAt: number
    updatedAt: number
    cancelAt: number
    cancelBy: number
    reason: number
    lastInvoice: number
    deletedAt: number
    deletedBy: number
    _all: number
  }


  export type ContractsAvgAggregateInputType = {
    contractId?: true
    companyId?: true
    createdBy?: true
    updatedBy?: true
    projectId?: true
    price?: true
    totalPrice?: true
    area?: true
    numberOfInstallment?: true
    payInAdvance?: true
    customerIdOne?: true
    customerIdTwo?: true
    cancelBy?: true
    lastInvoice?: true
    deletedBy?: true
  }

  export type ContractsSumAggregateInputType = {
    contractId?: true
    companyId?: true
    createdBy?: true
    updatedBy?: true
    projectId?: true
    price?: true
    totalPrice?: true
    area?: true
    numberOfInstallment?: true
    payInAdvance?: true
    customerIdOne?: true
    customerIdTwo?: true
    cancelBy?: true
    lastInvoice?: true
    deletedBy?: true
  }

  export type ContractsMinAggregateInputType = {
    contractId?: true
    companyId?: true
    docId?: true
    createdBy?: true
    updatedBy?: true
    projectId?: true
    price?: true
    totalPrice?: true
    currency?: true
    contractStatus?: true
    area?: true
    numberOfInstallment?: true
    payDay?: true
    modeOfPayment?: true
    payInAdvance?: true
    customerIdOne?: true
    customerIdTwo?: true
    createdAt?: true
    updatedAt?: true
    cancelAt?: true
    cancelBy?: true
    reason?: true
    lastInvoice?: true
    deletedAt?: true
    deletedBy?: true
  }

  export type ContractsMaxAggregateInputType = {
    contractId?: true
    companyId?: true
    docId?: true
    createdBy?: true
    updatedBy?: true
    projectId?: true
    price?: true
    totalPrice?: true
    currency?: true
    contractStatus?: true
    area?: true
    numberOfInstallment?: true
    payDay?: true
    modeOfPayment?: true
    payInAdvance?: true
    customerIdOne?: true
    customerIdTwo?: true
    createdAt?: true
    updatedAt?: true
    cancelAt?: true
    cancelBy?: true
    reason?: true
    lastInvoice?: true
    deletedAt?: true
    deletedBy?: true
  }

  export type ContractsCountAggregateInputType = {
    contractId?: true
    companyId?: true
    docId?: true
    createdBy?: true
    updatedBy?: true
    projectId?: true
    price?: true
    totalPrice?: true
    currency?: true
    contractStatus?: true
    area?: true
    numberOfInstallment?: true
    payDay?: true
    modeOfPayment?: true
    payInAdvance?: true
    customerIdOne?: true
    customerIdTwo?: true
    createdAt?: true
    updatedAt?: true
    cancelAt?: true
    cancelBy?: true
    reason?: true
    lastInvoice?: true
    deletedAt?: true
    deletedBy?: true
    _all?: true
  }

  export type ContractsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which contracts to aggregate.
     */
    where?: contractsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of contracts to fetch.
     */
    orderBy?: contractsOrderByWithRelationInput | contractsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: contractsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` contracts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` contracts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned contracts
    **/
    _count?: true | ContractsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ContractsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ContractsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ContractsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ContractsMaxAggregateInputType
  }

  export type GetContractsAggregateType<T extends ContractsAggregateArgs> = {
        [P in keyof T & keyof AggregateContracts]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateContracts[P]>
      : GetScalarType<T[P], AggregateContracts[P]>
  }




  export type contractsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: contractsWhereInput
    orderBy?: contractsOrderByWithAggregationInput | contractsOrderByWithAggregationInput[]
    by: ContractsScalarFieldEnum[] | ContractsScalarFieldEnum
    having?: contractsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ContractsCountAggregateInputType | true
    _avg?: ContractsAvgAggregateInputType
    _sum?: ContractsSumAggregateInputType
    _min?: ContractsMinAggregateInputType
    _max?: ContractsMaxAggregateInputType
  }

  export type ContractsGroupByOutputType = {
    contractId: number
    companyId: number
    docId: string
    createdBy: number
    updatedBy: number | null
    projectId: number
    price: number
    totalPrice: number
    currency: string | null
    contractStatus: string | null
    area: number
    numberOfInstallment: number | null
    payDay: Date
    modeOfPayment: string | null
    payInAdvance: number | null
    customerIdOne: number
    customerIdTwo: number | null
    createdAt: Date | null
    updatedAt: Date | null
    cancelAt: Date | null
    cancelBy: number | null
    reason: string | null
    lastInvoice: number | null
    deletedAt: Date | null
    deletedBy: number | null
    _count: ContractsCountAggregateOutputType | null
    _avg: ContractsAvgAggregateOutputType | null
    _sum: ContractsSumAggregateOutputType | null
    _min: ContractsMinAggregateOutputType | null
    _max: ContractsMaxAggregateOutputType | null
  }

  type GetContractsGroupByPayload<T extends contractsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ContractsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ContractsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ContractsGroupByOutputType[P]>
            : GetScalarType<T[P], ContractsGroupByOutputType[P]>
        }
      >
    >


  export type contractsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    contractId?: boolean
    companyId?: boolean
    docId?: boolean
    createdBy?: boolean
    updatedBy?: boolean
    projectId?: boolean
    price?: boolean
    totalPrice?: boolean
    currency?: boolean
    contractStatus?: boolean
    area?: boolean
    numberOfInstallment?: boolean
    payDay?: boolean
    modeOfPayment?: boolean
    payInAdvance?: boolean
    customerIdOne?: boolean
    customerIdTwo?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    cancelAt?: boolean
    cancelBy?: boolean
    reason?: boolean
    lastInvoice?: boolean
    deletedAt?: boolean
    deletedBy?: boolean
  }, ExtArgs["result"]["contracts"]>


  export type contractsSelectScalar = {
    contractId?: boolean
    companyId?: boolean
    docId?: boolean
    createdBy?: boolean
    updatedBy?: boolean
    projectId?: boolean
    price?: boolean
    totalPrice?: boolean
    currency?: boolean
    contractStatus?: boolean
    area?: boolean
    numberOfInstallment?: boolean
    payDay?: boolean
    modeOfPayment?: boolean
    payInAdvance?: boolean
    customerIdOne?: boolean
    customerIdTwo?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    cancelAt?: boolean
    cancelBy?: boolean
    reason?: boolean
    lastInvoice?: boolean
    deletedAt?: boolean
    deletedBy?: boolean
  }


  export type $contractsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "contracts"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      contractId: number
      companyId: number
      docId: string
      createdBy: number
      updatedBy: number | null
      projectId: number
      price: number
      totalPrice: number
      currency: string | null
      contractStatus: string | null
      area: number
      numberOfInstallment: number | null
      payDay: Date
      modeOfPayment: string | null
      payInAdvance: number | null
      customerIdOne: number
      customerIdTwo: number | null
      createdAt: Date | null
      updatedAt: Date | null
      cancelAt: Date | null
      cancelBy: number | null
      reason: string | null
      lastInvoice: number | null
      deletedAt: Date | null
      deletedBy: number | null
    }, ExtArgs["result"]["contracts"]>
    composites: {}
  }

  type contractsGetPayload<S extends boolean | null | undefined | contractsDefaultArgs> = $Result.GetResult<Prisma.$contractsPayload, S>

  type contractsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<contractsFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ContractsCountAggregateInputType | true
    }

  export interface contractsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['contracts'], meta: { name: 'contracts' } }
    /**
     * Find zero or one Contracts that matches the filter.
     * @param {contractsFindUniqueArgs} args - Arguments to find a Contracts
     * @example
     * // Get one Contracts
     * const contracts = await prisma.contracts.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends contractsFindUniqueArgs>(args: SelectSubset<T, contractsFindUniqueArgs<ExtArgs>>): Prisma__contractsClient<$Result.GetResult<Prisma.$contractsPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Contracts that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {contractsFindUniqueOrThrowArgs} args - Arguments to find a Contracts
     * @example
     * // Get one Contracts
     * const contracts = await prisma.contracts.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends contractsFindUniqueOrThrowArgs>(args: SelectSubset<T, contractsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__contractsClient<$Result.GetResult<Prisma.$contractsPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Contracts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {contractsFindFirstArgs} args - Arguments to find a Contracts
     * @example
     * // Get one Contracts
     * const contracts = await prisma.contracts.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends contractsFindFirstArgs>(args?: SelectSubset<T, contractsFindFirstArgs<ExtArgs>>): Prisma__contractsClient<$Result.GetResult<Prisma.$contractsPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Contracts that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {contractsFindFirstOrThrowArgs} args - Arguments to find a Contracts
     * @example
     * // Get one Contracts
     * const contracts = await prisma.contracts.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends contractsFindFirstOrThrowArgs>(args?: SelectSubset<T, contractsFindFirstOrThrowArgs<ExtArgs>>): Prisma__contractsClient<$Result.GetResult<Prisma.$contractsPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Contracts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {contractsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Contracts
     * const contracts = await prisma.contracts.findMany()
     * 
     * // Get first 10 Contracts
     * const contracts = await prisma.contracts.findMany({ take: 10 })
     * 
     * // Only select the `contractId`
     * const contractsWithContractIdOnly = await prisma.contracts.findMany({ select: { contractId: true } })
     * 
     */
    findMany<T extends contractsFindManyArgs>(args?: SelectSubset<T, contractsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$contractsPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Contracts.
     * @param {contractsCreateArgs} args - Arguments to create a Contracts.
     * @example
     * // Create one Contracts
     * const Contracts = await prisma.contracts.create({
     *   data: {
     *     // ... data to create a Contracts
     *   }
     * })
     * 
     */
    create<T extends contractsCreateArgs>(args: SelectSubset<T, contractsCreateArgs<ExtArgs>>): Prisma__contractsClient<$Result.GetResult<Prisma.$contractsPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Contracts.
     * @param {contractsCreateManyArgs} args - Arguments to create many Contracts.
     * @example
     * // Create many Contracts
     * const contracts = await prisma.contracts.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends contractsCreateManyArgs>(args?: SelectSubset<T, contractsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Contracts.
     * @param {contractsDeleteArgs} args - Arguments to delete one Contracts.
     * @example
     * // Delete one Contracts
     * const Contracts = await prisma.contracts.delete({
     *   where: {
     *     // ... filter to delete one Contracts
     *   }
     * })
     * 
     */
    delete<T extends contractsDeleteArgs>(args: SelectSubset<T, contractsDeleteArgs<ExtArgs>>): Prisma__contractsClient<$Result.GetResult<Prisma.$contractsPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Contracts.
     * @param {contractsUpdateArgs} args - Arguments to update one Contracts.
     * @example
     * // Update one Contracts
     * const contracts = await prisma.contracts.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends contractsUpdateArgs>(args: SelectSubset<T, contractsUpdateArgs<ExtArgs>>): Prisma__contractsClient<$Result.GetResult<Prisma.$contractsPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Contracts.
     * @param {contractsDeleteManyArgs} args - Arguments to filter Contracts to delete.
     * @example
     * // Delete a few Contracts
     * const { count } = await prisma.contracts.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends contractsDeleteManyArgs>(args?: SelectSubset<T, contractsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Contracts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {contractsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Contracts
     * const contracts = await prisma.contracts.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends contractsUpdateManyArgs>(args: SelectSubset<T, contractsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Contracts.
     * @param {contractsUpsertArgs} args - Arguments to update or create a Contracts.
     * @example
     * // Update or create a Contracts
     * const contracts = await prisma.contracts.upsert({
     *   create: {
     *     // ... data to create a Contracts
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Contracts we want to update
     *   }
     * })
     */
    upsert<T extends contractsUpsertArgs>(args: SelectSubset<T, contractsUpsertArgs<ExtArgs>>): Prisma__contractsClient<$Result.GetResult<Prisma.$contractsPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Contracts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {contractsCountArgs} args - Arguments to filter Contracts to count.
     * @example
     * // Count the number of Contracts
     * const count = await prisma.contracts.count({
     *   where: {
     *     // ... the filter for the Contracts we want to count
     *   }
     * })
    **/
    count<T extends contractsCountArgs>(
      args?: Subset<T, contractsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ContractsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Contracts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContractsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ContractsAggregateArgs>(args: Subset<T, ContractsAggregateArgs>): Prisma.PrismaPromise<GetContractsAggregateType<T>>

    /**
     * Group by Contracts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {contractsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends contractsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: contractsGroupByArgs['orderBy'] }
        : { orderBy?: contractsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, contractsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetContractsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the contracts model
   */
  readonly fields: contractsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for contracts.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__contractsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the contracts model
   */ 
  interface contractsFieldRefs {
    readonly contractId: FieldRef<"contracts", 'Int'>
    readonly companyId: FieldRef<"contracts", 'Int'>
    readonly docId: FieldRef<"contracts", 'String'>
    readonly createdBy: FieldRef<"contracts", 'Int'>
    readonly updatedBy: FieldRef<"contracts", 'Int'>
    readonly projectId: FieldRef<"contracts", 'Int'>
    readonly price: FieldRef<"contracts", 'Float'>
    readonly totalPrice: FieldRef<"contracts", 'Float'>
    readonly currency: FieldRef<"contracts", 'String'>
    readonly contractStatus: FieldRef<"contracts", 'String'>
    readonly area: FieldRef<"contracts", 'Float'>
    readonly numberOfInstallment: FieldRef<"contracts", 'Int'>
    readonly payDay: FieldRef<"contracts", 'DateTime'>
    readonly modeOfPayment: FieldRef<"contracts", 'String'>
    readonly payInAdvance: FieldRef<"contracts", 'Float'>
    readonly customerIdOne: FieldRef<"contracts", 'Int'>
    readonly customerIdTwo: FieldRef<"contracts", 'Int'>
    readonly createdAt: FieldRef<"contracts", 'DateTime'>
    readonly updatedAt: FieldRef<"contracts", 'DateTime'>
    readonly cancelAt: FieldRef<"contracts", 'DateTime'>
    readonly cancelBy: FieldRef<"contracts", 'Int'>
    readonly reason: FieldRef<"contracts", 'String'>
    readonly lastInvoice: FieldRef<"contracts", 'Int'>
    readonly deletedAt: FieldRef<"contracts", 'DateTime'>
    readonly deletedBy: FieldRef<"contracts", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * contracts findUnique
   */
  export type contractsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the contracts
     */
    select?: contractsSelect<ExtArgs> | null
    /**
     * Filter, which contracts to fetch.
     */
    where: contractsWhereUniqueInput
  }

  /**
   * contracts findUniqueOrThrow
   */
  export type contractsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the contracts
     */
    select?: contractsSelect<ExtArgs> | null
    /**
     * Filter, which contracts to fetch.
     */
    where: contractsWhereUniqueInput
  }

  /**
   * contracts findFirst
   */
  export type contractsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the contracts
     */
    select?: contractsSelect<ExtArgs> | null
    /**
     * Filter, which contracts to fetch.
     */
    where?: contractsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of contracts to fetch.
     */
    orderBy?: contractsOrderByWithRelationInput | contractsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for contracts.
     */
    cursor?: contractsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` contracts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` contracts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of contracts.
     */
    distinct?: ContractsScalarFieldEnum | ContractsScalarFieldEnum[]
  }

  /**
   * contracts findFirstOrThrow
   */
  export type contractsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the contracts
     */
    select?: contractsSelect<ExtArgs> | null
    /**
     * Filter, which contracts to fetch.
     */
    where?: contractsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of contracts to fetch.
     */
    orderBy?: contractsOrderByWithRelationInput | contractsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for contracts.
     */
    cursor?: contractsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` contracts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` contracts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of contracts.
     */
    distinct?: ContractsScalarFieldEnum | ContractsScalarFieldEnum[]
  }

  /**
   * contracts findMany
   */
  export type contractsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the contracts
     */
    select?: contractsSelect<ExtArgs> | null
    /**
     * Filter, which contracts to fetch.
     */
    where?: contractsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of contracts to fetch.
     */
    orderBy?: contractsOrderByWithRelationInput | contractsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing contracts.
     */
    cursor?: contractsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` contracts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` contracts.
     */
    skip?: number
    distinct?: ContractsScalarFieldEnum | ContractsScalarFieldEnum[]
  }

  /**
   * contracts create
   */
  export type contractsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the contracts
     */
    select?: contractsSelect<ExtArgs> | null
    /**
     * The data needed to create a contracts.
     */
    data: XOR<contractsCreateInput, contractsUncheckedCreateInput>
  }

  /**
   * contracts createMany
   */
  export type contractsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many contracts.
     */
    data: contractsCreateManyInput | contractsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * contracts update
   */
  export type contractsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the contracts
     */
    select?: contractsSelect<ExtArgs> | null
    /**
     * The data needed to update a contracts.
     */
    data: XOR<contractsUpdateInput, contractsUncheckedUpdateInput>
    /**
     * Choose, which contracts to update.
     */
    where: contractsWhereUniqueInput
  }

  /**
   * contracts updateMany
   */
  export type contractsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update contracts.
     */
    data: XOR<contractsUpdateManyMutationInput, contractsUncheckedUpdateManyInput>
    /**
     * Filter which contracts to update
     */
    where?: contractsWhereInput
  }

  /**
   * contracts upsert
   */
  export type contractsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the contracts
     */
    select?: contractsSelect<ExtArgs> | null
    /**
     * The filter to search for the contracts to update in case it exists.
     */
    where: contractsWhereUniqueInput
    /**
     * In case the contracts found by the `where` argument doesn't exist, create a new contracts with this data.
     */
    create: XOR<contractsCreateInput, contractsUncheckedCreateInput>
    /**
     * In case the contracts was found with the provided `where` argument, update it with this data.
     */
    update: XOR<contractsUpdateInput, contractsUncheckedUpdateInput>
  }

  /**
   * contracts delete
   */
  export type contractsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the contracts
     */
    select?: contractsSelect<ExtArgs> | null
    /**
     * Filter which contracts to delete.
     */
    where: contractsWhereUniqueInput
  }

  /**
   * contracts deleteMany
   */
  export type contractsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which contracts to delete
     */
    where?: contractsWhereInput
  }

  /**
   * contracts without action
   */
  export type contractsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the contracts
     */
    select?: contractsSelect<ExtArgs> | null
  }


  /**
   * Model exchange
   */

  export type AggregateExchange = {
    _count: ExchangeCountAggregateOutputType | null
    _avg: ExchangeAvgAggregateOutputType | null
    _sum: ExchangeSumAggregateOutputType | null
    _min: ExchangeMinAggregateOutputType | null
    _max: ExchangeMaxAggregateOutputType | null
  }

  export type ExchangeAvgAggregateOutputType = {
    exchangeId: number | null
    companyId: number | null
    thb: number | null
    usd: number | null
    createdBy: number | null
    updatedBy: number | null
    deletedBy: number | null
  }

  export type ExchangeSumAggregateOutputType = {
    exchangeId: number | null
    companyId: number | null
    thb: number | null
    usd: number | null
    createdBy: number | null
    updatedBy: number | null
    deletedBy: number | null
  }

  export type ExchangeMinAggregateOutputType = {
    exchangeId: number | null
    companyId: number | null
    thb: number | null
    usd: number | null
    createdBy: number | null
    updatedBy: number | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
    deletedBy: number | null
  }

  export type ExchangeMaxAggregateOutputType = {
    exchangeId: number | null
    companyId: number | null
    thb: number | null
    usd: number | null
    createdBy: number | null
    updatedBy: number | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
    deletedBy: number | null
  }

  export type ExchangeCountAggregateOutputType = {
    exchangeId: number
    companyId: number
    thb: number
    usd: number
    createdBy: number
    updatedBy: number
    createdAt: number
    updatedAt: number
    deletedAt: number
    deletedBy: number
    _all: number
  }


  export type ExchangeAvgAggregateInputType = {
    exchangeId?: true
    companyId?: true
    thb?: true
    usd?: true
    createdBy?: true
    updatedBy?: true
    deletedBy?: true
  }

  export type ExchangeSumAggregateInputType = {
    exchangeId?: true
    companyId?: true
    thb?: true
    usd?: true
    createdBy?: true
    updatedBy?: true
    deletedBy?: true
  }

  export type ExchangeMinAggregateInputType = {
    exchangeId?: true
    companyId?: true
    thb?: true
    usd?: true
    createdBy?: true
    updatedBy?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
    deletedBy?: true
  }

  export type ExchangeMaxAggregateInputType = {
    exchangeId?: true
    companyId?: true
    thb?: true
    usd?: true
    createdBy?: true
    updatedBy?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
    deletedBy?: true
  }

  export type ExchangeCountAggregateInputType = {
    exchangeId?: true
    companyId?: true
    thb?: true
    usd?: true
    createdBy?: true
    updatedBy?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
    deletedBy?: true
    _all?: true
  }

  export type ExchangeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which exchange to aggregate.
     */
    where?: exchangeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of exchanges to fetch.
     */
    orderBy?: exchangeOrderByWithRelationInput | exchangeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: exchangeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` exchanges from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` exchanges.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned exchanges
    **/
    _count?: true | ExchangeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ExchangeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ExchangeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ExchangeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ExchangeMaxAggregateInputType
  }

  export type GetExchangeAggregateType<T extends ExchangeAggregateArgs> = {
        [P in keyof T & keyof AggregateExchange]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateExchange[P]>
      : GetScalarType<T[P], AggregateExchange[P]>
  }




  export type exchangeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: exchangeWhereInput
    orderBy?: exchangeOrderByWithAggregationInput | exchangeOrderByWithAggregationInput[]
    by: ExchangeScalarFieldEnum[] | ExchangeScalarFieldEnum
    having?: exchangeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ExchangeCountAggregateInputType | true
    _avg?: ExchangeAvgAggregateInputType
    _sum?: ExchangeSumAggregateInputType
    _min?: ExchangeMinAggregateInputType
    _max?: ExchangeMaxAggregateInputType
  }

  export type ExchangeGroupByOutputType = {
    exchangeId: number
    companyId: number
    thb: number
    usd: number
    createdBy: number
    updatedBy: number | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
    deletedBy: number | null
    _count: ExchangeCountAggregateOutputType | null
    _avg: ExchangeAvgAggregateOutputType | null
    _sum: ExchangeSumAggregateOutputType | null
    _min: ExchangeMinAggregateOutputType | null
    _max: ExchangeMaxAggregateOutputType | null
  }

  type GetExchangeGroupByPayload<T extends exchangeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ExchangeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ExchangeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ExchangeGroupByOutputType[P]>
            : GetScalarType<T[P], ExchangeGroupByOutputType[P]>
        }
      >
    >


  export type exchangeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    exchangeId?: boolean
    companyId?: boolean
    thb?: boolean
    usd?: boolean
    createdBy?: boolean
    updatedBy?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    deletedBy?: boolean
  }, ExtArgs["result"]["exchange"]>


  export type exchangeSelectScalar = {
    exchangeId?: boolean
    companyId?: boolean
    thb?: boolean
    usd?: boolean
    createdBy?: boolean
    updatedBy?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    deletedBy?: boolean
  }


  export type $exchangePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "exchange"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      exchangeId: number
      companyId: number
      thb: number
      usd: number
      createdBy: number
      updatedBy: number | null
      createdAt: Date | null
      updatedAt: Date | null
      deletedAt: Date | null
      deletedBy: number | null
    }, ExtArgs["result"]["exchange"]>
    composites: {}
  }

  type exchangeGetPayload<S extends boolean | null | undefined | exchangeDefaultArgs> = $Result.GetResult<Prisma.$exchangePayload, S>

  type exchangeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<exchangeFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ExchangeCountAggregateInputType | true
    }

  export interface exchangeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['exchange'], meta: { name: 'exchange' } }
    /**
     * Find zero or one Exchange that matches the filter.
     * @param {exchangeFindUniqueArgs} args - Arguments to find a Exchange
     * @example
     * // Get one Exchange
     * const exchange = await prisma.exchange.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends exchangeFindUniqueArgs>(args: SelectSubset<T, exchangeFindUniqueArgs<ExtArgs>>): Prisma__exchangeClient<$Result.GetResult<Prisma.$exchangePayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Exchange that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {exchangeFindUniqueOrThrowArgs} args - Arguments to find a Exchange
     * @example
     * // Get one Exchange
     * const exchange = await prisma.exchange.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends exchangeFindUniqueOrThrowArgs>(args: SelectSubset<T, exchangeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__exchangeClient<$Result.GetResult<Prisma.$exchangePayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Exchange that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {exchangeFindFirstArgs} args - Arguments to find a Exchange
     * @example
     * // Get one Exchange
     * const exchange = await prisma.exchange.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends exchangeFindFirstArgs>(args?: SelectSubset<T, exchangeFindFirstArgs<ExtArgs>>): Prisma__exchangeClient<$Result.GetResult<Prisma.$exchangePayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Exchange that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {exchangeFindFirstOrThrowArgs} args - Arguments to find a Exchange
     * @example
     * // Get one Exchange
     * const exchange = await prisma.exchange.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends exchangeFindFirstOrThrowArgs>(args?: SelectSubset<T, exchangeFindFirstOrThrowArgs<ExtArgs>>): Prisma__exchangeClient<$Result.GetResult<Prisma.$exchangePayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Exchanges that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {exchangeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Exchanges
     * const exchanges = await prisma.exchange.findMany()
     * 
     * // Get first 10 Exchanges
     * const exchanges = await prisma.exchange.findMany({ take: 10 })
     * 
     * // Only select the `exchangeId`
     * const exchangeWithExchangeIdOnly = await prisma.exchange.findMany({ select: { exchangeId: true } })
     * 
     */
    findMany<T extends exchangeFindManyArgs>(args?: SelectSubset<T, exchangeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$exchangePayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Exchange.
     * @param {exchangeCreateArgs} args - Arguments to create a Exchange.
     * @example
     * // Create one Exchange
     * const Exchange = await prisma.exchange.create({
     *   data: {
     *     // ... data to create a Exchange
     *   }
     * })
     * 
     */
    create<T extends exchangeCreateArgs>(args: SelectSubset<T, exchangeCreateArgs<ExtArgs>>): Prisma__exchangeClient<$Result.GetResult<Prisma.$exchangePayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Exchanges.
     * @param {exchangeCreateManyArgs} args - Arguments to create many Exchanges.
     * @example
     * // Create many Exchanges
     * const exchange = await prisma.exchange.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends exchangeCreateManyArgs>(args?: SelectSubset<T, exchangeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Exchange.
     * @param {exchangeDeleteArgs} args - Arguments to delete one Exchange.
     * @example
     * // Delete one Exchange
     * const Exchange = await prisma.exchange.delete({
     *   where: {
     *     // ... filter to delete one Exchange
     *   }
     * })
     * 
     */
    delete<T extends exchangeDeleteArgs>(args: SelectSubset<T, exchangeDeleteArgs<ExtArgs>>): Prisma__exchangeClient<$Result.GetResult<Prisma.$exchangePayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Exchange.
     * @param {exchangeUpdateArgs} args - Arguments to update one Exchange.
     * @example
     * // Update one Exchange
     * const exchange = await prisma.exchange.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends exchangeUpdateArgs>(args: SelectSubset<T, exchangeUpdateArgs<ExtArgs>>): Prisma__exchangeClient<$Result.GetResult<Prisma.$exchangePayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Exchanges.
     * @param {exchangeDeleteManyArgs} args - Arguments to filter Exchanges to delete.
     * @example
     * // Delete a few Exchanges
     * const { count } = await prisma.exchange.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends exchangeDeleteManyArgs>(args?: SelectSubset<T, exchangeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Exchanges.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {exchangeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Exchanges
     * const exchange = await prisma.exchange.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends exchangeUpdateManyArgs>(args: SelectSubset<T, exchangeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Exchange.
     * @param {exchangeUpsertArgs} args - Arguments to update or create a Exchange.
     * @example
     * // Update or create a Exchange
     * const exchange = await prisma.exchange.upsert({
     *   create: {
     *     // ... data to create a Exchange
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Exchange we want to update
     *   }
     * })
     */
    upsert<T extends exchangeUpsertArgs>(args: SelectSubset<T, exchangeUpsertArgs<ExtArgs>>): Prisma__exchangeClient<$Result.GetResult<Prisma.$exchangePayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Exchanges.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {exchangeCountArgs} args - Arguments to filter Exchanges to count.
     * @example
     * // Count the number of Exchanges
     * const count = await prisma.exchange.count({
     *   where: {
     *     // ... the filter for the Exchanges we want to count
     *   }
     * })
    **/
    count<T extends exchangeCountArgs>(
      args?: Subset<T, exchangeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ExchangeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Exchange.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExchangeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ExchangeAggregateArgs>(args: Subset<T, ExchangeAggregateArgs>): Prisma.PrismaPromise<GetExchangeAggregateType<T>>

    /**
     * Group by Exchange.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {exchangeGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends exchangeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: exchangeGroupByArgs['orderBy'] }
        : { orderBy?: exchangeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, exchangeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetExchangeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the exchange model
   */
  readonly fields: exchangeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for exchange.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__exchangeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the exchange model
   */ 
  interface exchangeFieldRefs {
    readonly exchangeId: FieldRef<"exchange", 'Int'>
    readonly companyId: FieldRef<"exchange", 'Int'>
    readonly thb: FieldRef<"exchange", 'Float'>
    readonly usd: FieldRef<"exchange", 'Float'>
    readonly createdBy: FieldRef<"exchange", 'Int'>
    readonly updatedBy: FieldRef<"exchange", 'Int'>
    readonly createdAt: FieldRef<"exchange", 'DateTime'>
    readonly updatedAt: FieldRef<"exchange", 'DateTime'>
    readonly deletedAt: FieldRef<"exchange", 'DateTime'>
    readonly deletedBy: FieldRef<"exchange", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * exchange findUnique
   */
  export type exchangeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the exchange
     */
    select?: exchangeSelect<ExtArgs> | null
    /**
     * Filter, which exchange to fetch.
     */
    where: exchangeWhereUniqueInput
  }

  /**
   * exchange findUniqueOrThrow
   */
  export type exchangeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the exchange
     */
    select?: exchangeSelect<ExtArgs> | null
    /**
     * Filter, which exchange to fetch.
     */
    where: exchangeWhereUniqueInput
  }

  /**
   * exchange findFirst
   */
  export type exchangeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the exchange
     */
    select?: exchangeSelect<ExtArgs> | null
    /**
     * Filter, which exchange to fetch.
     */
    where?: exchangeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of exchanges to fetch.
     */
    orderBy?: exchangeOrderByWithRelationInput | exchangeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for exchanges.
     */
    cursor?: exchangeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` exchanges from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` exchanges.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of exchanges.
     */
    distinct?: ExchangeScalarFieldEnum | ExchangeScalarFieldEnum[]
  }

  /**
   * exchange findFirstOrThrow
   */
  export type exchangeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the exchange
     */
    select?: exchangeSelect<ExtArgs> | null
    /**
     * Filter, which exchange to fetch.
     */
    where?: exchangeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of exchanges to fetch.
     */
    orderBy?: exchangeOrderByWithRelationInput | exchangeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for exchanges.
     */
    cursor?: exchangeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` exchanges from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` exchanges.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of exchanges.
     */
    distinct?: ExchangeScalarFieldEnum | ExchangeScalarFieldEnum[]
  }

  /**
   * exchange findMany
   */
  export type exchangeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the exchange
     */
    select?: exchangeSelect<ExtArgs> | null
    /**
     * Filter, which exchanges to fetch.
     */
    where?: exchangeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of exchanges to fetch.
     */
    orderBy?: exchangeOrderByWithRelationInput | exchangeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing exchanges.
     */
    cursor?: exchangeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` exchanges from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` exchanges.
     */
    skip?: number
    distinct?: ExchangeScalarFieldEnum | ExchangeScalarFieldEnum[]
  }

  /**
   * exchange create
   */
  export type exchangeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the exchange
     */
    select?: exchangeSelect<ExtArgs> | null
    /**
     * The data needed to create a exchange.
     */
    data: XOR<exchangeCreateInput, exchangeUncheckedCreateInput>
  }

  /**
   * exchange createMany
   */
  export type exchangeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many exchanges.
     */
    data: exchangeCreateManyInput | exchangeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * exchange update
   */
  export type exchangeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the exchange
     */
    select?: exchangeSelect<ExtArgs> | null
    /**
     * The data needed to update a exchange.
     */
    data: XOR<exchangeUpdateInput, exchangeUncheckedUpdateInput>
    /**
     * Choose, which exchange to update.
     */
    where: exchangeWhereUniqueInput
  }

  /**
   * exchange updateMany
   */
  export type exchangeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update exchanges.
     */
    data: XOR<exchangeUpdateManyMutationInput, exchangeUncheckedUpdateManyInput>
    /**
     * Filter which exchanges to update
     */
    where?: exchangeWhereInput
  }

  /**
   * exchange upsert
   */
  export type exchangeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the exchange
     */
    select?: exchangeSelect<ExtArgs> | null
    /**
     * The filter to search for the exchange to update in case it exists.
     */
    where: exchangeWhereUniqueInput
    /**
     * In case the exchange found by the `where` argument doesn't exist, create a new exchange with this data.
     */
    create: XOR<exchangeCreateInput, exchangeUncheckedCreateInput>
    /**
     * In case the exchange was found with the provided `where` argument, update it with this data.
     */
    update: XOR<exchangeUpdateInput, exchangeUncheckedUpdateInput>
  }

  /**
   * exchange delete
   */
  export type exchangeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the exchange
     */
    select?: exchangeSelect<ExtArgs> | null
    /**
     * Filter which exchange to delete.
     */
    where: exchangeWhereUniqueInput
  }

  /**
   * exchange deleteMany
   */
  export type exchangeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which exchanges to delete
     */
    where?: exchangeWhereInput
  }

  /**
   * exchange without action
   */
  export type exchangeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the exchange
     */
    select?: exchangeSelect<ExtArgs> | null
  }


  /**
   * Model invoice
   */

  export type AggregateInvoice = {
    _count: InvoiceCountAggregateOutputType | null
    _avg: InvoiceAvgAggregateOutputType | null
    _sum: InvoiceSumAggregateOutputType | null
    _min: InvoiceMinAggregateOutputType | null
    _max: InvoiceMaxAggregateOutputType | null
  }

  export type InvoiceAvgAggregateOutputType = {
    invoiceId: number | null
    fines: number | null
    amount: number | null
    debt: number | null
    contractId: number | null
    numberOfInstallment: number | null
    exchangeRate: number | null
    createdBy: number | null
    reservedBy: number | null
    remindSentTime: number | null
  }

  export type InvoiceSumAggregateOutputType = {
    invoiceId: number | null
    fines: number | null
    amount: number | null
    debt: number | null
    contractId: number | null
    numberOfInstallment: number | null
    exchangeRate: number | null
    createdBy: number | null
    reservedBy: number | null
    remindSentTime: number | null
  }

  export type InvoiceMinAggregateOutputType = {
    invoiceId: number | null
    fines: number | null
    amount: number | null
    debt: number | null
    contractId: number | null
    currency: string | null
    numberOfInstallment: number | null
    comment: string | null
    monthly: string | null
    paymentMethod: string | null
    exchangeRate: number | null
    currencyExchange: string | null
    invoiceStatus: string | null
    billPath: string | null
    paidDate: Date | null
    createdBy: number | null
    createdAt: Date | null
    updatedAt: Date | null
    reservedBy: number | null
    reservedAt: Date | null
    remindSentTime: number | null
    remindSentDate: Date | null
  }

  export type InvoiceMaxAggregateOutputType = {
    invoiceId: number | null
    fines: number | null
    amount: number | null
    debt: number | null
    contractId: number | null
    currency: string | null
    numberOfInstallment: number | null
    comment: string | null
    monthly: string | null
    paymentMethod: string | null
    exchangeRate: number | null
    currencyExchange: string | null
    invoiceStatus: string | null
    billPath: string | null
    paidDate: Date | null
    createdBy: number | null
    createdAt: Date | null
    updatedAt: Date | null
    reservedBy: number | null
    reservedAt: Date | null
    remindSentTime: number | null
    remindSentDate: Date | null
  }

  export type InvoiceCountAggregateOutputType = {
    invoiceId: number
    fines: number
    amount: number
    debt: number
    contractId: number
    currency: number
    numberOfInstallment: number
    comment: number
    monthly: number
    paymentMethod: number
    exchangeRate: number
    currencyExchange: number
    invoiceStatus: number
    billPath: number
    paidDate: number
    createdBy: number
    createdAt: number
    updatedAt: number
    reservedBy: number
    reservedAt: number
    remindSentTime: number
    remindSentDate: number
    _all: number
  }


  export type InvoiceAvgAggregateInputType = {
    invoiceId?: true
    fines?: true
    amount?: true
    debt?: true
    contractId?: true
    numberOfInstallment?: true
    exchangeRate?: true
    createdBy?: true
    reservedBy?: true
    remindSentTime?: true
  }

  export type InvoiceSumAggregateInputType = {
    invoiceId?: true
    fines?: true
    amount?: true
    debt?: true
    contractId?: true
    numberOfInstallment?: true
    exchangeRate?: true
    createdBy?: true
    reservedBy?: true
    remindSentTime?: true
  }

  export type InvoiceMinAggregateInputType = {
    invoiceId?: true
    fines?: true
    amount?: true
    debt?: true
    contractId?: true
    currency?: true
    numberOfInstallment?: true
    comment?: true
    monthly?: true
    paymentMethod?: true
    exchangeRate?: true
    currencyExchange?: true
    invoiceStatus?: true
    billPath?: true
    paidDate?: true
    createdBy?: true
    createdAt?: true
    updatedAt?: true
    reservedBy?: true
    reservedAt?: true
    remindSentTime?: true
    remindSentDate?: true
  }

  export type InvoiceMaxAggregateInputType = {
    invoiceId?: true
    fines?: true
    amount?: true
    debt?: true
    contractId?: true
    currency?: true
    numberOfInstallment?: true
    comment?: true
    monthly?: true
    paymentMethod?: true
    exchangeRate?: true
    currencyExchange?: true
    invoiceStatus?: true
    billPath?: true
    paidDate?: true
    createdBy?: true
    createdAt?: true
    updatedAt?: true
    reservedBy?: true
    reservedAt?: true
    remindSentTime?: true
    remindSentDate?: true
  }

  export type InvoiceCountAggregateInputType = {
    invoiceId?: true
    fines?: true
    amount?: true
    debt?: true
    contractId?: true
    currency?: true
    numberOfInstallment?: true
    comment?: true
    monthly?: true
    paymentMethod?: true
    exchangeRate?: true
    currencyExchange?: true
    invoiceStatus?: true
    billPath?: true
    paidDate?: true
    createdBy?: true
    createdAt?: true
    updatedAt?: true
    reservedBy?: true
    reservedAt?: true
    remindSentTime?: true
    remindSentDate?: true
    _all?: true
  }

  export type InvoiceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which invoice to aggregate.
     */
    where?: invoiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of invoices to fetch.
     */
    orderBy?: invoiceOrderByWithRelationInput | invoiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: invoiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` invoices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` invoices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned invoices
    **/
    _count?: true | InvoiceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: InvoiceAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: InvoiceSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: InvoiceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: InvoiceMaxAggregateInputType
  }

  export type GetInvoiceAggregateType<T extends InvoiceAggregateArgs> = {
        [P in keyof T & keyof AggregateInvoice]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateInvoice[P]>
      : GetScalarType<T[P], AggregateInvoice[P]>
  }




  export type invoiceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: invoiceWhereInput
    orderBy?: invoiceOrderByWithAggregationInput | invoiceOrderByWithAggregationInput[]
    by: InvoiceScalarFieldEnum[] | InvoiceScalarFieldEnum
    having?: invoiceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: InvoiceCountAggregateInputType | true
    _avg?: InvoiceAvgAggregateInputType
    _sum?: InvoiceSumAggregateInputType
    _min?: InvoiceMinAggregateInputType
    _max?: InvoiceMaxAggregateInputType
  }

  export type InvoiceGroupByOutputType = {
    invoiceId: number
    fines: number | null
    amount: number
    debt: number | null
    contractId: number
    currency: string
    numberOfInstallment: number
    comment: string | null
    monthly: string | null
    paymentMethod: string | null
    exchangeRate: number | null
    currencyExchange: string | null
    invoiceStatus: string | null
    billPath: string | null
    paidDate: Date | null
    createdBy: number | null
    createdAt: Date | null
    updatedAt: Date | null
    reservedBy: number | null
    reservedAt: Date | null
    remindSentTime: number | null
    remindSentDate: Date | null
    _count: InvoiceCountAggregateOutputType | null
    _avg: InvoiceAvgAggregateOutputType | null
    _sum: InvoiceSumAggregateOutputType | null
    _min: InvoiceMinAggregateOutputType | null
    _max: InvoiceMaxAggregateOutputType | null
  }

  type GetInvoiceGroupByPayload<T extends invoiceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<InvoiceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof InvoiceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], InvoiceGroupByOutputType[P]>
            : GetScalarType<T[P], InvoiceGroupByOutputType[P]>
        }
      >
    >


  export type invoiceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    invoiceId?: boolean
    fines?: boolean
    amount?: boolean
    debt?: boolean
    contractId?: boolean
    currency?: boolean
    numberOfInstallment?: boolean
    comment?: boolean
    monthly?: boolean
    paymentMethod?: boolean
    exchangeRate?: boolean
    currencyExchange?: boolean
    invoiceStatus?: boolean
    billPath?: boolean
    paidDate?: boolean
    createdBy?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    reservedBy?: boolean
    reservedAt?: boolean
    remindSentTime?: boolean
    remindSentDate?: boolean
  }, ExtArgs["result"]["invoice"]>


  export type invoiceSelectScalar = {
    invoiceId?: boolean
    fines?: boolean
    amount?: boolean
    debt?: boolean
    contractId?: boolean
    currency?: boolean
    numberOfInstallment?: boolean
    comment?: boolean
    monthly?: boolean
    paymentMethod?: boolean
    exchangeRate?: boolean
    currencyExchange?: boolean
    invoiceStatus?: boolean
    billPath?: boolean
    paidDate?: boolean
    createdBy?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    reservedBy?: boolean
    reservedAt?: boolean
    remindSentTime?: boolean
    remindSentDate?: boolean
  }


  export type $invoicePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "invoice"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      invoiceId: number
      fines: number | null
      amount: number
      debt: number | null
      contractId: number
      currency: string
      numberOfInstallment: number
      comment: string | null
      monthly: string | null
      paymentMethod: string | null
      exchangeRate: number | null
      currencyExchange: string | null
      invoiceStatus: string | null
      billPath: string | null
      paidDate: Date | null
      createdBy: number | null
      createdAt: Date | null
      updatedAt: Date | null
      reservedBy: number | null
      reservedAt: Date | null
      remindSentTime: number | null
      remindSentDate: Date | null
    }, ExtArgs["result"]["invoice"]>
    composites: {}
  }

  type invoiceGetPayload<S extends boolean | null | undefined | invoiceDefaultArgs> = $Result.GetResult<Prisma.$invoicePayload, S>

  type invoiceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<invoiceFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: InvoiceCountAggregateInputType | true
    }

  export interface invoiceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['invoice'], meta: { name: 'invoice' } }
    /**
     * Find zero or one Invoice that matches the filter.
     * @param {invoiceFindUniqueArgs} args - Arguments to find a Invoice
     * @example
     * // Get one Invoice
     * const invoice = await prisma.invoice.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends invoiceFindUniqueArgs>(args: SelectSubset<T, invoiceFindUniqueArgs<ExtArgs>>): Prisma__invoiceClient<$Result.GetResult<Prisma.$invoicePayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Invoice that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {invoiceFindUniqueOrThrowArgs} args - Arguments to find a Invoice
     * @example
     * // Get one Invoice
     * const invoice = await prisma.invoice.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends invoiceFindUniqueOrThrowArgs>(args: SelectSubset<T, invoiceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__invoiceClient<$Result.GetResult<Prisma.$invoicePayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Invoice that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {invoiceFindFirstArgs} args - Arguments to find a Invoice
     * @example
     * // Get one Invoice
     * const invoice = await prisma.invoice.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends invoiceFindFirstArgs>(args?: SelectSubset<T, invoiceFindFirstArgs<ExtArgs>>): Prisma__invoiceClient<$Result.GetResult<Prisma.$invoicePayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Invoice that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {invoiceFindFirstOrThrowArgs} args - Arguments to find a Invoice
     * @example
     * // Get one Invoice
     * const invoice = await prisma.invoice.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends invoiceFindFirstOrThrowArgs>(args?: SelectSubset<T, invoiceFindFirstOrThrowArgs<ExtArgs>>): Prisma__invoiceClient<$Result.GetResult<Prisma.$invoicePayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Invoices that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {invoiceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Invoices
     * const invoices = await prisma.invoice.findMany()
     * 
     * // Get first 10 Invoices
     * const invoices = await prisma.invoice.findMany({ take: 10 })
     * 
     * // Only select the `invoiceId`
     * const invoiceWithInvoiceIdOnly = await prisma.invoice.findMany({ select: { invoiceId: true } })
     * 
     */
    findMany<T extends invoiceFindManyArgs>(args?: SelectSubset<T, invoiceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$invoicePayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Invoice.
     * @param {invoiceCreateArgs} args - Arguments to create a Invoice.
     * @example
     * // Create one Invoice
     * const Invoice = await prisma.invoice.create({
     *   data: {
     *     // ... data to create a Invoice
     *   }
     * })
     * 
     */
    create<T extends invoiceCreateArgs>(args: SelectSubset<T, invoiceCreateArgs<ExtArgs>>): Prisma__invoiceClient<$Result.GetResult<Prisma.$invoicePayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Invoices.
     * @param {invoiceCreateManyArgs} args - Arguments to create many Invoices.
     * @example
     * // Create many Invoices
     * const invoice = await prisma.invoice.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends invoiceCreateManyArgs>(args?: SelectSubset<T, invoiceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Invoice.
     * @param {invoiceDeleteArgs} args - Arguments to delete one Invoice.
     * @example
     * // Delete one Invoice
     * const Invoice = await prisma.invoice.delete({
     *   where: {
     *     // ... filter to delete one Invoice
     *   }
     * })
     * 
     */
    delete<T extends invoiceDeleteArgs>(args: SelectSubset<T, invoiceDeleteArgs<ExtArgs>>): Prisma__invoiceClient<$Result.GetResult<Prisma.$invoicePayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Invoice.
     * @param {invoiceUpdateArgs} args - Arguments to update one Invoice.
     * @example
     * // Update one Invoice
     * const invoice = await prisma.invoice.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends invoiceUpdateArgs>(args: SelectSubset<T, invoiceUpdateArgs<ExtArgs>>): Prisma__invoiceClient<$Result.GetResult<Prisma.$invoicePayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Invoices.
     * @param {invoiceDeleteManyArgs} args - Arguments to filter Invoices to delete.
     * @example
     * // Delete a few Invoices
     * const { count } = await prisma.invoice.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends invoiceDeleteManyArgs>(args?: SelectSubset<T, invoiceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Invoices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {invoiceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Invoices
     * const invoice = await prisma.invoice.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends invoiceUpdateManyArgs>(args: SelectSubset<T, invoiceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Invoice.
     * @param {invoiceUpsertArgs} args - Arguments to update or create a Invoice.
     * @example
     * // Update or create a Invoice
     * const invoice = await prisma.invoice.upsert({
     *   create: {
     *     // ... data to create a Invoice
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Invoice we want to update
     *   }
     * })
     */
    upsert<T extends invoiceUpsertArgs>(args: SelectSubset<T, invoiceUpsertArgs<ExtArgs>>): Prisma__invoiceClient<$Result.GetResult<Prisma.$invoicePayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Invoices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {invoiceCountArgs} args - Arguments to filter Invoices to count.
     * @example
     * // Count the number of Invoices
     * const count = await prisma.invoice.count({
     *   where: {
     *     // ... the filter for the Invoices we want to count
     *   }
     * })
    **/
    count<T extends invoiceCountArgs>(
      args?: Subset<T, invoiceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], InvoiceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Invoice.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvoiceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends InvoiceAggregateArgs>(args: Subset<T, InvoiceAggregateArgs>): Prisma.PrismaPromise<GetInvoiceAggregateType<T>>

    /**
     * Group by Invoice.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {invoiceGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends invoiceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: invoiceGroupByArgs['orderBy'] }
        : { orderBy?: invoiceGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, invoiceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInvoiceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the invoice model
   */
  readonly fields: invoiceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for invoice.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__invoiceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the invoice model
   */ 
  interface invoiceFieldRefs {
    readonly invoiceId: FieldRef<"invoice", 'Int'>
    readonly fines: FieldRef<"invoice", 'Float'>
    readonly amount: FieldRef<"invoice", 'Float'>
    readonly debt: FieldRef<"invoice", 'Float'>
    readonly contractId: FieldRef<"invoice", 'Int'>
    readonly currency: FieldRef<"invoice", 'String'>
    readonly numberOfInstallment: FieldRef<"invoice", 'Int'>
    readonly comment: FieldRef<"invoice", 'String'>
    readonly monthly: FieldRef<"invoice", 'String'>
    readonly paymentMethod: FieldRef<"invoice", 'String'>
    readonly exchangeRate: FieldRef<"invoice", 'Float'>
    readonly currencyExchange: FieldRef<"invoice", 'String'>
    readonly invoiceStatus: FieldRef<"invoice", 'String'>
    readonly billPath: FieldRef<"invoice", 'String'>
    readonly paidDate: FieldRef<"invoice", 'DateTime'>
    readonly createdBy: FieldRef<"invoice", 'Int'>
    readonly createdAt: FieldRef<"invoice", 'DateTime'>
    readonly updatedAt: FieldRef<"invoice", 'DateTime'>
    readonly reservedBy: FieldRef<"invoice", 'Int'>
    readonly reservedAt: FieldRef<"invoice", 'DateTime'>
    readonly remindSentTime: FieldRef<"invoice", 'Int'>
    readonly remindSentDate: FieldRef<"invoice", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * invoice findUnique
   */
  export type invoiceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the invoice
     */
    select?: invoiceSelect<ExtArgs> | null
    /**
     * Filter, which invoice to fetch.
     */
    where: invoiceWhereUniqueInput
  }

  /**
   * invoice findUniqueOrThrow
   */
  export type invoiceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the invoice
     */
    select?: invoiceSelect<ExtArgs> | null
    /**
     * Filter, which invoice to fetch.
     */
    where: invoiceWhereUniqueInput
  }

  /**
   * invoice findFirst
   */
  export type invoiceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the invoice
     */
    select?: invoiceSelect<ExtArgs> | null
    /**
     * Filter, which invoice to fetch.
     */
    where?: invoiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of invoices to fetch.
     */
    orderBy?: invoiceOrderByWithRelationInput | invoiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for invoices.
     */
    cursor?: invoiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` invoices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` invoices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of invoices.
     */
    distinct?: InvoiceScalarFieldEnum | InvoiceScalarFieldEnum[]
  }

  /**
   * invoice findFirstOrThrow
   */
  export type invoiceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the invoice
     */
    select?: invoiceSelect<ExtArgs> | null
    /**
     * Filter, which invoice to fetch.
     */
    where?: invoiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of invoices to fetch.
     */
    orderBy?: invoiceOrderByWithRelationInput | invoiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for invoices.
     */
    cursor?: invoiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` invoices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` invoices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of invoices.
     */
    distinct?: InvoiceScalarFieldEnum | InvoiceScalarFieldEnum[]
  }

  /**
   * invoice findMany
   */
  export type invoiceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the invoice
     */
    select?: invoiceSelect<ExtArgs> | null
    /**
     * Filter, which invoices to fetch.
     */
    where?: invoiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of invoices to fetch.
     */
    orderBy?: invoiceOrderByWithRelationInput | invoiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing invoices.
     */
    cursor?: invoiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` invoices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` invoices.
     */
    skip?: number
    distinct?: InvoiceScalarFieldEnum | InvoiceScalarFieldEnum[]
  }

  /**
   * invoice create
   */
  export type invoiceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the invoice
     */
    select?: invoiceSelect<ExtArgs> | null
    /**
     * The data needed to create a invoice.
     */
    data: XOR<invoiceCreateInput, invoiceUncheckedCreateInput>
  }

  /**
   * invoice createMany
   */
  export type invoiceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many invoices.
     */
    data: invoiceCreateManyInput | invoiceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * invoice update
   */
  export type invoiceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the invoice
     */
    select?: invoiceSelect<ExtArgs> | null
    /**
     * The data needed to update a invoice.
     */
    data: XOR<invoiceUpdateInput, invoiceUncheckedUpdateInput>
    /**
     * Choose, which invoice to update.
     */
    where: invoiceWhereUniqueInput
  }

  /**
   * invoice updateMany
   */
  export type invoiceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update invoices.
     */
    data: XOR<invoiceUpdateManyMutationInput, invoiceUncheckedUpdateManyInput>
    /**
     * Filter which invoices to update
     */
    where?: invoiceWhereInput
  }

  /**
   * invoice upsert
   */
  export type invoiceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the invoice
     */
    select?: invoiceSelect<ExtArgs> | null
    /**
     * The filter to search for the invoice to update in case it exists.
     */
    where: invoiceWhereUniqueInput
    /**
     * In case the invoice found by the `where` argument doesn't exist, create a new invoice with this data.
     */
    create: XOR<invoiceCreateInput, invoiceUncheckedCreateInput>
    /**
     * In case the invoice was found with the provided `where` argument, update it with this data.
     */
    update: XOR<invoiceUpdateInput, invoiceUncheckedUpdateInput>
  }

  /**
   * invoice delete
   */
  export type invoiceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the invoice
     */
    select?: invoiceSelect<ExtArgs> | null
    /**
     * Filter which invoice to delete.
     */
    where: invoiceWhereUniqueInput
  }

  /**
   * invoice deleteMany
   */
  export type invoiceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which invoices to delete
     */
    where?: invoiceWhereInput
  }

  /**
   * invoice without action
   */
  export type invoiceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the invoice
     */
    select?: invoiceSelect<ExtArgs> | null
  }


  /**
   * Model logs
   */

  export type AggregateLogs = {
    _count: LogsCountAggregateOutputType | null
    _avg: LogsAvgAggregateOutputType | null
    _sum: LogsSumAggregateOutputType | null
    _min: LogsMinAggregateOutputType | null
    _max: LogsMaxAggregateOutputType | null
  }

  export type LogsAvgAggregateOutputType = {
    logId: number | null
    userId: number | null
    companyId: number | null
  }

  export type LogsSumAggregateOutputType = {
    logId: number | null
    userId: number | null
    companyId: number | null
  }

  export type LogsMinAggregateOutputType = {
    logId: number | null
    description: string | null
    path: string | null
    body: string | null
    userId: number | null
    companyId: number | null
    ip: string | null
    createdAt: Date | null
    deletedAt: Date | null
  }

  export type LogsMaxAggregateOutputType = {
    logId: number | null
    description: string | null
    path: string | null
    body: string | null
    userId: number | null
    companyId: number | null
    ip: string | null
    createdAt: Date | null
    deletedAt: Date | null
  }

  export type LogsCountAggregateOutputType = {
    logId: number
    description: number
    path: number
    body: number
    userId: number
    companyId: number
    ip: number
    createdAt: number
    deletedAt: number
    _all: number
  }


  export type LogsAvgAggregateInputType = {
    logId?: true
    userId?: true
    companyId?: true
  }

  export type LogsSumAggregateInputType = {
    logId?: true
    userId?: true
    companyId?: true
  }

  export type LogsMinAggregateInputType = {
    logId?: true
    description?: true
    path?: true
    body?: true
    userId?: true
    companyId?: true
    ip?: true
    createdAt?: true
    deletedAt?: true
  }

  export type LogsMaxAggregateInputType = {
    logId?: true
    description?: true
    path?: true
    body?: true
    userId?: true
    companyId?: true
    ip?: true
    createdAt?: true
    deletedAt?: true
  }

  export type LogsCountAggregateInputType = {
    logId?: true
    description?: true
    path?: true
    body?: true
    userId?: true
    companyId?: true
    ip?: true
    createdAt?: true
    deletedAt?: true
    _all?: true
  }

  export type LogsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which logs to aggregate.
     */
    where?: logsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of logs to fetch.
     */
    orderBy?: logsOrderByWithRelationInput | logsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: logsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` logs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` logs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned logs
    **/
    _count?: true | LogsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LogsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LogsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LogsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LogsMaxAggregateInputType
  }

  export type GetLogsAggregateType<T extends LogsAggregateArgs> = {
        [P in keyof T & keyof AggregateLogs]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLogs[P]>
      : GetScalarType<T[P], AggregateLogs[P]>
  }




  export type logsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: logsWhereInput
    orderBy?: logsOrderByWithAggregationInput | logsOrderByWithAggregationInput[]
    by: LogsScalarFieldEnum[] | LogsScalarFieldEnum
    having?: logsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LogsCountAggregateInputType | true
    _avg?: LogsAvgAggregateInputType
    _sum?: LogsSumAggregateInputType
    _min?: LogsMinAggregateInputType
    _max?: LogsMaxAggregateInputType
  }

  export type LogsGroupByOutputType = {
    logId: number
    description: string | null
    path: string
    body: string | null
    userId: number
    companyId: number | null
    ip: string | null
    createdAt: Date | null
    deletedAt: Date | null
    _count: LogsCountAggregateOutputType | null
    _avg: LogsAvgAggregateOutputType | null
    _sum: LogsSumAggregateOutputType | null
    _min: LogsMinAggregateOutputType | null
    _max: LogsMaxAggregateOutputType | null
  }

  type GetLogsGroupByPayload<T extends logsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LogsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LogsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LogsGroupByOutputType[P]>
            : GetScalarType<T[P], LogsGroupByOutputType[P]>
        }
      >
    >


  export type logsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    logId?: boolean
    description?: boolean
    path?: boolean
    body?: boolean
    userId?: boolean
    companyId?: boolean
    ip?: boolean
    createdAt?: boolean
    deletedAt?: boolean
  }, ExtArgs["result"]["logs"]>


  export type logsSelectScalar = {
    logId?: boolean
    description?: boolean
    path?: boolean
    body?: boolean
    userId?: boolean
    companyId?: boolean
    ip?: boolean
    createdAt?: boolean
    deletedAt?: boolean
  }


  export type $logsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "logs"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      logId: number
      description: string | null
      path: string
      body: string | null
      userId: number
      companyId: number | null
      ip: string | null
      createdAt: Date | null
      deletedAt: Date | null
    }, ExtArgs["result"]["logs"]>
    composites: {}
  }

  type logsGetPayload<S extends boolean | null | undefined | logsDefaultArgs> = $Result.GetResult<Prisma.$logsPayload, S>

  type logsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<logsFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: LogsCountAggregateInputType | true
    }

  export interface logsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['logs'], meta: { name: 'logs' } }
    /**
     * Find zero or one Logs that matches the filter.
     * @param {logsFindUniqueArgs} args - Arguments to find a Logs
     * @example
     * // Get one Logs
     * const logs = await prisma.logs.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends logsFindUniqueArgs>(args: SelectSubset<T, logsFindUniqueArgs<ExtArgs>>): Prisma__logsClient<$Result.GetResult<Prisma.$logsPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Logs that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {logsFindUniqueOrThrowArgs} args - Arguments to find a Logs
     * @example
     * // Get one Logs
     * const logs = await prisma.logs.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends logsFindUniqueOrThrowArgs>(args: SelectSubset<T, logsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__logsClient<$Result.GetResult<Prisma.$logsPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Logs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {logsFindFirstArgs} args - Arguments to find a Logs
     * @example
     * // Get one Logs
     * const logs = await prisma.logs.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends logsFindFirstArgs>(args?: SelectSubset<T, logsFindFirstArgs<ExtArgs>>): Prisma__logsClient<$Result.GetResult<Prisma.$logsPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Logs that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {logsFindFirstOrThrowArgs} args - Arguments to find a Logs
     * @example
     * // Get one Logs
     * const logs = await prisma.logs.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends logsFindFirstOrThrowArgs>(args?: SelectSubset<T, logsFindFirstOrThrowArgs<ExtArgs>>): Prisma__logsClient<$Result.GetResult<Prisma.$logsPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Logs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {logsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Logs
     * const logs = await prisma.logs.findMany()
     * 
     * // Get first 10 Logs
     * const logs = await prisma.logs.findMany({ take: 10 })
     * 
     * // Only select the `logId`
     * const logsWithLogIdOnly = await prisma.logs.findMany({ select: { logId: true } })
     * 
     */
    findMany<T extends logsFindManyArgs>(args?: SelectSubset<T, logsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$logsPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Logs.
     * @param {logsCreateArgs} args - Arguments to create a Logs.
     * @example
     * // Create one Logs
     * const Logs = await prisma.logs.create({
     *   data: {
     *     // ... data to create a Logs
     *   }
     * })
     * 
     */
    create<T extends logsCreateArgs>(args: SelectSubset<T, logsCreateArgs<ExtArgs>>): Prisma__logsClient<$Result.GetResult<Prisma.$logsPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Logs.
     * @param {logsCreateManyArgs} args - Arguments to create many Logs.
     * @example
     * // Create many Logs
     * const logs = await prisma.logs.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends logsCreateManyArgs>(args?: SelectSubset<T, logsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Logs.
     * @param {logsDeleteArgs} args - Arguments to delete one Logs.
     * @example
     * // Delete one Logs
     * const Logs = await prisma.logs.delete({
     *   where: {
     *     // ... filter to delete one Logs
     *   }
     * })
     * 
     */
    delete<T extends logsDeleteArgs>(args: SelectSubset<T, logsDeleteArgs<ExtArgs>>): Prisma__logsClient<$Result.GetResult<Prisma.$logsPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Logs.
     * @param {logsUpdateArgs} args - Arguments to update one Logs.
     * @example
     * // Update one Logs
     * const logs = await prisma.logs.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends logsUpdateArgs>(args: SelectSubset<T, logsUpdateArgs<ExtArgs>>): Prisma__logsClient<$Result.GetResult<Prisma.$logsPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Logs.
     * @param {logsDeleteManyArgs} args - Arguments to filter Logs to delete.
     * @example
     * // Delete a few Logs
     * const { count } = await prisma.logs.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends logsDeleteManyArgs>(args?: SelectSubset<T, logsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Logs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {logsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Logs
     * const logs = await prisma.logs.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends logsUpdateManyArgs>(args: SelectSubset<T, logsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Logs.
     * @param {logsUpsertArgs} args - Arguments to update or create a Logs.
     * @example
     * // Update or create a Logs
     * const logs = await prisma.logs.upsert({
     *   create: {
     *     // ... data to create a Logs
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Logs we want to update
     *   }
     * })
     */
    upsert<T extends logsUpsertArgs>(args: SelectSubset<T, logsUpsertArgs<ExtArgs>>): Prisma__logsClient<$Result.GetResult<Prisma.$logsPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Logs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {logsCountArgs} args - Arguments to filter Logs to count.
     * @example
     * // Count the number of Logs
     * const count = await prisma.logs.count({
     *   where: {
     *     // ... the filter for the Logs we want to count
     *   }
     * })
    **/
    count<T extends logsCountArgs>(
      args?: Subset<T, logsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LogsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Logs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LogsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends LogsAggregateArgs>(args: Subset<T, LogsAggregateArgs>): Prisma.PrismaPromise<GetLogsAggregateType<T>>

    /**
     * Group by Logs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {logsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends logsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: logsGroupByArgs['orderBy'] }
        : { orderBy?: logsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, logsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLogsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the logs model
   */
  readonly fields: logsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for logs.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__logsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the logs model
   */ 
  interface logsFieldRefs {
    readonly logId: FieldRef<"logs", 'Int'>
    readonly description: FieldRef<"logs", 'String'>
    readonly path: FieldRef<"logs", 'String'>
    readonly body: FieldRef<"logs", 'String'>
    readonly userId: FieldRef<"logs", 'Int'>
    readonly companyId: FieldRef<"logs", 'Int'>
    readonly ip: FieldRef<"logs", 'String'>
    readonly createdAt: FieldRef<"logs", 'DateTime'>
    readonly deletedAt: FieldRef<"logs", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * logs findUnique
   */
  export type logsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the logs
     */
    select?: logsSelect<ExtArgs> | null
    /**
     * Filter, which logs to fetch.
     */
    where: logsWhereUniqueInput
  }

  /**
   * logs findUniqueOrThrow
   */
  export type logsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the logs
     */
    select?: logsSelect<ExtArgs> | null
    /**
     * Filter, which logs to fetch.
     */
    where: logsWhereUniqueInput
  }

  /**
   * logs findFirst
   */
  export type logsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the logs
     */
    select?: logsSelect<ExtArgs> | null
    /**
     * Filter, which logs to fetch.
     */
    where?: logsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of logs to fetch.
     */
    orderBy?: logsOrderByWithRelationInput | logsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for logs.
     */
    cursor?: logsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` logs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` logs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of logs.
     */
    distinct?: LogsScalarFieldEnum | LogsScalarFieldEnum[]
  }

  /**
   * logs findFirstOrThrow
   */
  export type logsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the logs
     */
    select?: logsSelect<ExtArgs> | null
    /**
     * Filter, which logs to fetch.
     */
    where?: logsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of logs to fetch.
     */
    orderBy?: logsOrderByWithRelationInput | logsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for logs.
     */
    cursor?: logsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` logs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` logs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of logs.
     */
    distinct?: LogsScalarFieldEnum | LogsScalarFieldEnum[]
  }

  /**
   * logs findMany
   */
  export type logsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the logs
     */
    select?: logsSelect<ExtArgs> | null
    /**
     * Filter, which logs to fetch.
     */
    where?: logsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of logs to fetch.
     */
    orderBy?: logsOrderByWithRelationInput | logsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing logs.
     */
    cursor?: logsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` logs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` logs.
     */
    skip?: number
    distinct?: LogsScalarFieldEnum | LogsScalarFieldEnum[]
  }

  /**
   * logs create
   */
  export type logsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the logs
     */
    select?: logsSelect<ExtArgs> | null
    /**
     * The data needed to create a logs.
     */
    data: XOR<logsCreateInput, logsUncheckedCreateInput>
  }

  /**
   * logs createMany
   */
  export type logsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many logs.
     */
    data: logsCreateManyInput | logsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * logs update
   */
  export type logsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the logs
     */
    select?: logsSelect<ExtArgs> | null
    /**
     * The data needed to update a logs.
     */
    data: XOR<logsUpdateInput, logsUncheckedUpdateInput>
    /**
     * Choose, which logs to update.
     */
    where: logsWhereUniqueInput
  }

  /**
   * logs updateMany
   */
  export type logsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update logs.
     */
    data: XOR<logsUpdateManyMutationInput, logsUncheckedUpdateManyInput>
    /**
     * Filter which logs to update
     */
    where?: logsWhereInput
  }

  /**
   * logs upsert
   */
  export type logsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the logs
     */
    select?: logsSelect<ExtArgs> | null
    /**
     * The filter to search for the logs to update in case it exists.
     */
    where: logsWhereUniqueInput
    /**
     * In case the logs found by the `where` argument doesn't exist, create a new logs with this data.
     */
    create: XOR<logsCreateInput, logsUncheckedCreateInput>
    /**
     * In case the logs was found with the provided `where` argument, update it with this data.
     */
    update: XOR<logsUpdateInput, logsUncheckedUpdateInput>
  }

  /**
   * logs delete
   */
  export type logsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the logs
     */
    select?: logsSelect<ExtArgs> | null
    /**
     * Filter which logs to delete.
     */
    where: logsWhereUniqueInput
  }

  /**
   * logs deleteMany
   */
  export type logsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which logs to delete
     */
    where?: logsWhereInput
  }

  /**
   * logs without action
   */
  export type logsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the logs
     */
    select?: logsSelect<ExtArgs> | null
  }


  /**
   * Model news
   */

  export type AggregateNews = {
    _count: NewsCountAggregateOutputType | null
    _avg: NewsAvgAggregateOutputType | null
    _sum: NewsSumAggregateOutputType | null
    _min: NewsMinAggregateOutputType | null
    _max: NewsMaxAggregateOutputType | null
  }

  export type NewsAvgAggregateOutputType = {
    nId: number | null
    userId: number | null
    deletedBy: number | null
  }

  export type NewsSumAggregateOutputType = {
    nId: number | null
    userId: number | null
    deletedBy: number | null
  }

  export type NewsMinAggregateOutputType = {
    nId: number | null
    content: string | null
    tel: string | null
    imagePath: string | null
    ip: string | null
    userId: number | null
    sentType: string | null
    sentStatus: string | null
    dateForSent: Date | null
    multi: string | null
    sentDate: Date | null
    createdAt: Date | null
    deletedAt: Date | null
    deletedBy: number | null
  }

  export type NewsMaxAggregateOutputType = {
    nId: number | null
    content: string | null
    tel: string | null
    imagePath: string | null
    ip: string | null
    userId: number | null
    sentType: string | null
    sentStatus: string | null
    dateForSent: Date | null
    multi: string | null
    sentDate: Date | null
    createdAt: Date | null
    deletedAt: Date | null
    deletedBy: number | null
  }

  export type NewsCountAggregateOutputType = {
    nId: number
    content: number
    tel: number
    imagePath: number
    ip: number
    userId: number
    sentType: number
    sentStatus: number
    dateForSent: number
    multi: number
    sentDate: number
    createdAt: number
    deletedAt: number
    deletedBy: number
    _all: number
  }


  export type NewsAvgAggregateInputType = {
    nId?: true
    userId?: true
    deletedBy?: true
  }

  export type NewsSumAggregateInputType = {
    nId?: true
    userId?: true
    deletedBy?: true
  }

  export type NewsMinAggregateInputType = {
    nId?: true
    content?: true
    tel?: true
    imagePath?: true
    ip?: true
    userId?: true
    sentType?: true
    sentStatus?: true
    dateForSent?: true
    multi?: true
    sentDate?: true
    createdAt?: true
    deletedAt?: true
    deletedBy?: true
  }

  export type NewsMaxAggregateInputType = {
    nId?: true
    content?: true
    tel?: true
    imagePath?: true
    ip?: true
    userId?: true
    sentType?: true
    sentStatus?: true
    dateForSent?: true
    multi?: true
    sentDate?: true
    createdAt?: true
    deletedAt?: true
    deletedBy?: true
  }

  export type NewsCountAggregateInputType = {
    nId?: true
    content?: true
    tel?: true
    imagePath?: true
    ip?: true
    userId?: true
    sentType?: true
    sentStatus?: true
    dateForSent?: true
    multi?: true
    sentDate?: true
    createdAt?: true
    deletedAt?: true
    deletedBy?: true
    _all?: true
  }

  export type NewsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which news to aggregate.
     */
    where?: newsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of news to fetch.
     */
    orderBy?: newsOrderByWithRelationInput | newsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: newsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` news from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` news.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned news
    **/
    _count?: true | NewsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: NewsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: NewsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NewsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NewsMaxAggregateInputType
  }

  export type GetNewsAggregateType<T extends NewsAggregateArgs> = {
        [P in keyof T & keyof AggregateNews]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNews[P]>
      : GetScalarType<T[P], AggregateNews[P]>
  }




  export type newsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: newsWhereInput
    orderBy?: newsOrderByWithAggregationInput | newsOrderByWithAggregationInput[]
    by: NewsScalarFieldEnum[] | NewsScalarFieldEnum
    having?: newsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NewsCountAggregateInputType | true
    _avg?: NewsAvgAggregateInputType
    _sum?: NewsSumAggregateInputType
    _min?: NewsMinAggregateInputType
    _max?: NewsMaxAggregateInputType
  }

  export type NewsGroupByOutputType = {
    nId: number
    content: string
    tel: string | null
    imagePath: string | null
    ip: string | null
    userId: number
    sentType: string
    sentStatus: string | null
    dateForSent: Date | null
    multi: string | null
    sentDate: Date | null
    createdAt: Date | null
    deletedAt: Date | null
    deletedBy: number | null
    _count: NewsCountAggregateOutputType | null
    _avg: NewsAvgAggregateOutputType | null
    _sum: NewsSumAggregateOutputType | null
    _min: NewsMinAggregateOutputType | null
    _max: NewsMaxAggregateOutputType | null
  }

  type GetNewsGroupByPayload<T extends newsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NewsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NewsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NewsGroupByOutputType[P]>
            : GetScalarType<T[P], NewsGroupByOutputType[P]>
        }
      >
    >


  export type newsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    nId?: boolean
    content?: boolean
    tel?: boolean
    imagePath?: boolean
    ip?: boolean
    userId?: boolean
    sentType?: boolean
    sentStatus?: boolean
    dateForSent?: boolean
    multi?: boolean
    sentDate?: boolean
    createdAt?: boolean
    deletedAt?: boolean
    deletedBy?: boolean
  }, ExtArgs["result"]["news"]>


  export type newsSelectScalar = {
    nId?: boolean
    content?: boolean
    tel?: boolean
    imagePath?: boolean
    ip?: boolean
    userId?: boolean
    sentType?: boolean
    sentStatus?: boolean
    dateForSent?: boolean
    multi?: boolean
    sentDate?: boolean
    createdAt?: boolean
    deletedAt?: boolean
    deletedBy?: boolean
  }


  export type $newsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "news"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      nId: number
      content: string
      tel: string | null
      imagePath: string | null
      ip: string | null
      userId: number
      sentType: string
      sentStatus: string | null
      dateForSent: Date | null
      multi: string | null
      sentDate: Date | null
      createdAt: Date | null
      deletedAt: Date | null
      deletedBy: number | null
    }, ExtArgs["result"]["news"]>
    composites: {}
  }

  type newsGetPayload<S extends boolean | null | undefined | newsDefaultArgs> = $Result.GetResult<Prisma.$newsPayload, S>

  type newsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<newsFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: NewsCountAggregateInputType | true
    }

  export interface newsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['news'], meta: { name: 'news' } }
    /**
     * Find zero or one News that matches the filter.
     * @param {newsFindUniqueArgs} args - Arguments to find a News
     * @example
     * // Get one News
     * const news = await prisma.news.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends newsFindUniqueArgs>(args: SelectSubset<T, newsFindUniqueArgs<ExtArgs>>): Prisma__newsClient<$Result.GetResult<Prisma.$newsPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one News that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {newsFindUniqueOrThrowArgs} args - Arguments to find a News
     * @example
     * // Get one News
     * const news = await prisma.news.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends newsFindUniqueOrThrowArgs>(args: SelectSubset<T, newsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__newsClient<$Result.GetResult<Prisma.$newsPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first News that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {newsFindFirstArgs} args - Arguments to find a News
     * @example
     * // Get one News
     * const news = await prisma.news.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends newsFindFirstArgs>(args?: SelectSubset<T, newsFindFirstArgs<ExtArgs>>): Prisma__newsClient<$Result.GetResult<Prisma.$newsPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first News that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {newsFindFirstOrThrowArgs} args - Arguments to find a News
     * @example
     * // Get one News
     * const news = await prisma.news.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends newsFindFirstOrThrowArgs>(args?: SelectSubset<T, newsFindFirstOrThrowArgs<ExtArgs>>): Prisma__newsClient<$Result.GetResult<Prisma.$newsPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more News that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {newsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all News
     * const news = await prisma.news.findMany()
     * 
     * // Get first 10 News
     * const news = await prisma.news.findMany({ take: 10 })
     * 
     * // Only select the `nId`
     * const newsWithNIdOnly = await prisma.news.findMany({ select: { nId: true } })
     * 
     */
    findMany<T extends newsFindManyArgs>(args?: SelectSubset<T, newsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$newsPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a News.
     * @param {newsCreateArgs} args - Arguments to create a News.
     * @example
     * // Create one News
     * const News = await prisma.news.create({
     *   data: {
     *     // ... data to create a News
     *   }
     * })
     * 
     */
    create<T extends newsCreateArgs>(args: SelectSubset<T, newsCreateArgs<ExtArgs>>): Prisma__newsClient<$Result.GetResult<Prisma.$newsPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many News.
     * @param {newsCreateManyArgs} args - Arguments to create many News.
     * @example
     * // Create many News
     * const news = await prisma.news.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends newsCreateManyArgs>(args?: SelectSubset<T, newsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a News.
     * @param {newsDeleteArgs} args - Arguments to delete one News.
     * @example
     * // Delete one News
     * const News = await prisma.news.delete({
     *   where: {
     *     // ... filter to delete one News
     *   }
     * })
     * 
     */
    delete<T extends newsDeleteArgs>(args: SelectSubset<T, newsDeleteArgs<ExtArgs>>): Prisma__newsClient<$Result.GetResult<Prisma.$newsPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one News.
     * @param {newsUpdateArgs} args - Arguments to update one News.
     * @example
     * // Update one News
     * const news = await prisma.news.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends newsUpdateArgs>(args: SelectSubset<T, newsUpdateArgs<ExtArgs>>): Prisma__newsClient<$Result.GetResult<Prisma.$newsPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more News.
     * @param {newsDeleteManyArgs} args - Arguments to filter News to delete.
     * @example
     * // Delete a few News
     * const { count } = await prisma.news.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends newsDeleteManyArgs>(args?: SelectSubset<T, newsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more News.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {newsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many News
     * const news = await prisma.news.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends newsUpdateManyArgs>(args: SelectSubset<T, newsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one News.
     * @param {newsUpsertArgs} args - Arguments to update or create a News.
     * @example
     * // Update or create a News
     * const news = await prisma.news.upsert({
     *   create: {
     *     // ... data to create a News
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the News we want to update
     *   }
     * })
     */
    upsert<T extends newsUpsertArgs>(args: SelectSubset<T, newsUpsertArgs<ExtArgs>>): Prisma__newsClient<$Result.GetResult<Prisma.$newsPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of News.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {newsCountArgs} args - Arguments to filter News to count.
     * @example
     * // Count the number of News
     * const count = await prisma.news.count({
     *   where: {
     *     // ... the filter for the News we want to count
     *   }
     * })
    **/
    count<T extends newsCountArgs>(
      args?: Subset<T, newsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NewsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a News.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends NewsAggregateArgs>(args: Subset<T, NewsAggregateArgs>): Prisma.PrismaPromise<GetNewsAggregateType<T>>

    /**
     * Group by News.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {newsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends newsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: newsGroupByArgs['orderBy'] }
        : { orderBy?: newsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, newsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNewsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the news model
   */
  readonly fields: newsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for news.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__newsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the news model
   */ 
  interface newsFieldRefs {
    readonly nId: FieldRef<"news", 'Int'>
    readonly content: FieldRef<"news", 'String'>
    readonly tel: FieldRef<"news", 'String'>
    readonly imagePath: FieldRef<"news", 'String'>
    readonly ip: FieldRef<"news", 'String'>
    readonly userId: FieldRef<"news", 'Int'>
    readonly sentType: FieldRef<"news", 'String'>
    readonly sentStatus: FieldRef<"news", 'String'>
    readonly dateForSent: FieldRef<"news", 'DateTime'>
    readonly multi: FieldRef<"news", 'String'>
    readonly sentDate: FieldRef<"news", 'DateTime'>
    readonly createdAt: FieldRef<"news", 'DateTime'>
    readonly deletedAt: FieldRef<"news", 'DateTime'>
    readonly deletedBy: FieldRef<"news", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * news findUnique
   */
  export type newsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the news
     */
    select?: newsSelect<ExtArgs> | null
    /**
     * Filter, which news to fetch.
     */
    where: newsWhereUniqueInput
  }

  /**
   * news findUniqueOrThrow
   */
  export type newsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the news
     */
    select?: newsSelect<ExtArgs> | null
    /**
     * Filter, which news to fetch.
     */
    where: newsWhereUniqueInput
  }

  /**
   * news findFirst
   */
  export type newsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the news
     */
    select?: newsSelect<ExtArgs> | null
    /**
     * Filter, which news to fetch.
     */
    where?: newsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of news to fetch.
     */
    orderBy?: newsOrderByWithRelationInput | newsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for news.
     */
    cursor?: newsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` news from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` news.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of news.
     */
    distinct?: NewsScalarFieldEnum | NewsScalarFieldEnum[]
  }

  /**
   * news findFirstOrThrow
   */
  export type newsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the news
     */
    select?: newsSelect<ExtArgs> | null
    /**
     * Filter, which news to fetch.
     */
    where?: newsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of news to fetch.
     */
    orderBy?: newsOrderByWithRelationInput | newsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for news.
     */
    cursor?: newsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` news from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` news.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of news.
     */
    distinct?: NewsScalarFieldEnum | NewsScalarFieldEnum[]
  }

  /**
   * news findMany
   */
  export type newsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the news
     */
    select?: newsSelect<ExtArgs> | null
    /**
     * Filter, which news to fetch.
     */
    where?: newsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of news to fetch.
     */
    orderBy?: newsOrderByWithRelationInput | newsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing news.
     */
    cursor?: newsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` news from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` news.
     */
    skip?: number
    distinct?: NewsScalarFieldEnum | NewsScalarFieldEnum[]
  }

  /**
   * news create
   */
  export type newsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the news
     */
    select?: newsSelect<ExtArgs> | null
    /**
     * The data needed to create a news.
     */
    data: XOR<newsCreateInput, newsUncheckedCreateInput>
  }

  /**
   * news createMany
   */
  export type newsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many news.
     */
    data: newsCreateManyInput | newsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * news update
   */
  export type newsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the news
     */
    select?: newsSelect<ExtArgs> | null
    /**
     * The data needed to update a news.
     */
    data: XOR<newsUpdateInput, newsUncheckedUpdateInput>
    /**
     * Choose, which news to update.
     */
    where: newsWhereUniqueInput
  }

  /**
   * news updateMany
   */
  export type newsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update news.
     */
    data: XOR<newsUpdateManyMutationInput, newsUncheckedUpdateManyInput>
    /**
     * Filter which news to update
     */
    where?: newsWhereInput
  }

  /**
   * news upsert
   */
  export type newsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the news
     */
    select?: newsSelect<ExtArgs> | null
    /**
     * The filter to search for the news to update in case it exists.
     */
    where: newsWhereUniqueInput
    /**
     * In case the news found by the `where` argument doesn't exist, create a new news with this data.
     */
    create: XOR<newsCreateInput, newsUncheckedCreateInput>
    /**
     * In case the news was found with the provided `where` argument, update it with this data.
     */
    update: XOR<newsUpdateInput, newsUncheckedUpdateInput>
  }

  /**
   * news delete
   */
  export type newsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the news
     */
    select?: newsSelect<ExtArgs> | null
    /**
     * Filter which news to delete.
     */
    where: newsWhereUniqueInput
  }

  /**
   * news deleteMany
   */
  export type newsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which news to delete
     */
    where?: newsWhereInput
  }

  /**
   * news without action
   */
  export type newsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the news
     */
    select?: newsSelect<ExtArgs> | null
  }


  /**
   * Model otp
   */

  export type AggregateOtp = {
    _count: OtpCountAggregateOutputType | null
    _avg: OtpAvgAggregateOutputType | null
    _sum: OtpSumAggregateOutputType | null
    _min: OtpMinAggregateOutputType | null
    _max: OtpMaxAggregateOutputType | null
  }

  export type OtpAvgAggregateOutputType = {
    otpId: number | null
    retry: number | null
  }

  export type OtpSumAggregateOutputType = {
    otpId: number | null
    retry: number | null
  }

  export type OtpMinAggregateOutputType = {
    otpId: number | null
    tel: string | null
    code: string | null
    confirm: string | null
    status: string | null
    sentDate: Date | null
    retry: number | null
    createdAt: Date | null
  }

  export type OtpMaxAggregateOutputType = {
    otpId: number | null
    tel: string | null
    code: string | null
    confirm: string | null
    status: string | null
    sentDate: Date | null
    retry: number | null
    createdAt: Date | null
  }

  export type OtpCountAggregateOutputType = {
    otpId: number
    tel: number
    code: number
    confirm: number
    status: number
    sentDate: number
    retry: number
    createdAt: number
    _all: number
  }


  export type OtpAvgAggregateInputType = {
    otpId?: true
    retry?: true
  }

  export type OtpSumAggregateInputType = {
    otpId?: true
    retry?: true
  }

  export type OtpMinAggregateInputType = {
    otpId?: true
    tel?: true
    code?: true
    confirm?: true
    status?: true
    sentDate?: true
    retry?: true
    createdAt?: true
  }

  export type OtpMaxAggregateInputType = {
    otpId?: true
    tel?: true
    code?: true
    confirm?: true
    status?: true
    sentDate?: true
    retry?: true
    createdAt?: true
  }

  export type OtpCountAggregateInputType = {
    otpId?: true
    tel?: true
    code?: true
    confirm?: true
    status?: true
    sentDate?: true
    retry?: true
    createdAt?: true
    _all?: true
  }

  export type OtpAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which otp to aggregate.
     */
    where?: otpWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of otps to fetch.
     */
    orderBy?: otpOrderByWithRelationInput | otpOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: otpWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` otps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` otps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned otps
    **/
    _count?: true | OtpCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OtpAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OtpSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OtpMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OtpMaxAggregateInputType
  }

  export type GetOtpAggregateType<T extends OtpAggregateArgs> = {
        [P in keyof T & keyof AggregateOtp]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOtp[P]>
      : GetScalarType<T[P], AggregateOtp[P]>
  }




  export type otpGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: otpWhereInput
    orderBy?: otpOrderByWithAggregationInput | otpOrderByWithAggregationInput[]
    by: OtpScalarFieldEnum[] | OtpScalarFieldEnum
    having?: otpScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OtpCountAggregateInputType | true
    _avg?: OtpAvgAggregateInputType
    _sum?: OtpSumAggregateInputType
    _min?: OtpMinAggregateInputType
    _max?: OtpMaxAggregateInputType
  }

  export type OtpGroupByOutputType = {
    otpId: number
    tel: string
    code: string
    confirm: string | null
    status: string | null
    sentDate: Date | null
    retry: number | null
    createdAt: Date | null
    _count: OtpCountAggregateOutputType | null
    _avg: OtpAvgAggregateOutputType | null
    _sum: OtpSumAggregateOutputType | null
    _min: OtpMinAggregateOutputType | null
    _max: OtpMaxAggregateOutputType | null
  }

  type GetOtpGroupByPayload<T extends otpGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OtpGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OtpGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OtpGroupByOutputType[P]>
            : GetScalarType<T[P], OtpGroupByOutputType[P]>
        }
      >
    >


  export type otpSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    otpId?: boolean
    tel?: boolean
    code?: boolean
    confirm?: boolean
    status?: boolean
    sentDate?: boolean
    retry?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["otp"]>


  export type otpSelectScalar = {
    otpId?: boolean
    tel?: boolean
    code?: boolean
    confirm?: boolean
    status?: boolean
    sentDate?: boolean
    retry?: boolean
    createdAt?: boolean
  }


  export type $otpPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "otp"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      otpId: number
      tel: string
      code: string
      confirm: string | null
      status: string | null
      sentDate: Date | null
      retry: number | null
      createdAt: Date | null
    }, ExtArgs["result"]["otp"]>
    composites: {}
  }

  type otpGetPayload<S extends boolean | null | undefined | otpDefaultArgs> = $Result.GetResult<Prisma.$otpPayload, S>

  type otpCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<otpFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: OtpCountAggregateInputType | true
    }

  export interface otpDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['otp'], meta: { name: 'otp' } }
    /**
     * Find zero or one Otp that matches the filter.
     * @param {otpFindUniqueArgs} args - Arguments to find a Otp
     * @example
     * // Get one Otp
     * const otp = await prisma.otp.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends otpFindUniqueArgs>(args: SelectSubset<T, otpFindUniqueArgs<ExtArgs>>): Prisma__otpClient<$Result.GetResult<Prisma.$otpPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Otp that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {otpFindUniqueOrThrowArgs} args - Arguments to find a Otp
     * @example
     * // Get one Otp
     * const otp = await prisma.otp.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends otpFindUniqueOrThrowArgs>(args: SelectSubset<T, otpFindUniqueOrThrowArgs<ExtArgs>>): Prisma__otpClient<$Result.GetResult<Prisma.$otpPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Otp that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {otpFindFirstArgs} args - Arguments to find a Otp
     * @example
     * // Get one Otp
     * const otp = await prisma.otp.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends otpFindFirstArgs>(args?: SelectSubset<T, otpFindFirstArgs<ExtArgs>>): Prisma__otpClient<$Result.GetResult<Prisma.$otpPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Otp that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {otpFindFirstOrThrowArgs} args - Arguments to find a Otp
     * @example
     * // Get one Otp
     * const otp = await prisma.otp.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends otpFindFirstOrThrowArgs>(args?: SelectSubset<T, otpFindFirstOrThrowArgs<ExtArgs>>): Prisma__otpClient<$Result.GetResult<Prisma.$otpPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Otps that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {otpFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Otps
     * const otps = await prisma.otp.findMany()
     * 
     * // Get first 10 Otps
     * const otps = await prisma.otp.findMany({ take: 10 })
     * 
     * // Only select the `otpId`
     * const otpWithOtpIdOnly = await prisma.otp.findMany({ select: { otpId: true } })
     * 
     */
    findMany<T extends otpFindManyArgs>(args?: SelectSubset<T, otpFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$otpPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Otp.
     * @param {otpCreateArgs} args - Arguments to create a Otp.
     * @example
     * // Create one Otp
     * const Otp = await prisma.otp.create({
     *   data: {
     *     // ... data to create a Otp
     *   }
     * })
     * 
     */
    create<T extends otpCreateArgs>(args: SelectSubset<T, otpCreateArgs<ExtArgs>>): Prisma__otpClient<$Result.GetResult<Prisma.$otpPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Otps.
     * @param {otpCreateManyArgs} args - Arguments to create many Otps.
     * @example
     * // Create many Otps
     * const otp = await prisma.otp.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends otpCreateManyArgs>(args?: SelectSubset<T, otpCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Otp.
     * @param {otpDeleteArgs} args - Arguments to delete one Otp.
     * @example
     * // Delete one Otp
     * const Otp = await prisma.otp.delete({
     *   where: {
     *     // ... filter to delete one Otp
     *   }
     * })
     * 
     */
    delete<T extends otpDeleteArgs>(args: SelectSubset<T, otpDeleteArgs<ExtArgs>>): Prisma__otpClient<$Result.GetResult<Prisma.$otpPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Otp.
     * @param {otpUpdateArgs} args - Arguments to update one Otp.
     * @example
     * // Update one Otp
     * const otp = await prisma.otp.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends otpUpdateArgs>(args: SelectSubset<T, otpUpdateArgs<ExtArgs>>): Prisma__otpClient<$Result.GetResult<Prisma.$otpPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Otps.
     * @param {otpDeleteManyArgs} args - Arguments to filter Otps to delete.
     * @example
     * // Delete a few Otps
     * const { count } = await prisma.otp.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends otpDeleteManyArgs>(args?: SelectSubset<T, otpDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Otps.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {otpUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Otps
     * const otp = await prisma.otp.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends otpUpdateManyArgs>(args: SelectSubset<T, otpUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Otp.
     * @param {otpUpsertArgs} args - Arguments to update or create a Otp.
     * @example
     * // Update or create a Otp
     * const otp = await prisma.otp.upsert({
     *   create: {
     *     // ... data to create a Otp
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Otp we want to update
     *   }
     * })
     */
    upsert<T extends otpUpsertArgs>(args: SelectSubset<T, otpUpsertArgs<ExtArgs>>): Prisma__otpClient<$Result.GetResult<Prisma.$otpPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Otps.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {otpCountArgs} args - Arguments to filter Otps to count.
     * @example
     * // Count the number of Otps
     * const count = await prisma.otp.count({
     *   where: {
     *     // ... the filter for the Otps we want to count
     *   }
     * })
    **/
    count<T extends otpCountArgs>(
      args?: Subset<T, otpCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OtpCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Otp.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OtpAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends OtpAggregateArgs>(args: Subset<T, OtpAggregateArgs>): Prisma.PrismaPromise<GetOtpAggregateType<T>>

    /**
     * Group by Otp.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {otpGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends otpGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: otpGroupByArgs['orderBy'] }
        : { orderBy?: otpGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, otpGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOtpGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the otp model
   */
  readonly fields: otpFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for otp.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__otpClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the otp model
   */ 
  interface otpFieldRefs {
    readonly otpId: FieldRef<"otp", 'Int'>
    readonly tel: FieldRef<"otp", 'String'>
    readonly code: FieldRef<"otp", 'String'>
    readonly confirm: FieldRef<"otp", 'String'>
    readonly status: FieldRef<"otp", 'String'>
    readonly sentDate: FieldRef<"otp", 'DateTime'>
    readonly retry: FieldRef<"otp", 'Int'>
    readonly createdAt: FieldRef<"otp", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * otp findUnique
   */
  export type otpFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the otp
     */
    select?: otpSelect<ExtArgs> | null
    /**
     * Filter, which otp to fetch.
     */
    where: otpWhereUniqueInput
  }

  /**
   * otp findUniqueOrThrow
   */
  export type otpFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the otp
     */
    select?: otpSelect<ExtArgs> | null
    /**
     * Filter, which otp to fetch.
     */
    where: otpWhereUniqueInput
  }

  /**
   * otp findFirst
   */
  export type otpFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the otp
     */
    select?: otpSelect<ExtArgs> | null
    /**
     * Filter, which otp to fetch.
     */
    where?: otpWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of otps to fetch.
     */
    orderBy?: otpOrderByWithRelationInput | otpOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for otps.
     */
    cursor?: otpWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` otps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` otps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of otps.
     */
    distinct?: OtpScalarFieldEnum | OtpScalarFieldEnum[]
  }

  /**
   * otp findFirstOrThrow
   */
  export type otpFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the otp
     */
    select?: otpSelect<ExtArgs> | null
    /**
     * Filter, which otp to fetch.
     */
    where?: otpWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of otps to fetch.
     */
    orderBy?: otpOrderByWithRelationInput | otpOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for otps.
     */
    cursor?: otpWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` otps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` otps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of otps.
     */
    distinct?: OtpScalarFieldEnum | OtpScalarFieldEnum[]
  }

  /**
   * otp findMany
   */
  export type otpFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the otp
     */
    select?: otpSelect<ExtArgs> | null
    /**
     * Filter, which otps to fetch.
     */
    where?: otpWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of otps to fetch.
     */
    orderBy?: otpOrderByWithRelationInput | otpOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing otps.
     */
    cursor?: otpWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` otps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` otps.
     */
    skip?: number
    distinct?: OtpScalarFieldEnum | OtpScalarFieldEnum[]
  }

  /**
   * otp create
   */
  export type otpCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the otp
     */
    select?: otpSelect<ExtArgs> | null
    /**
     * The data needed to create a otp.
     */
    data: XOR<otpCreateInput, otpUncheckedCreateInput>
  }

  /**
   * otp createMany
   */
  export type otpCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many otps.
     */
    data: otpCreateManyInput | otpCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * otp update
   */
  export type otpUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the otp
     */
    select?: otpSelect<ExtArgs> | null
    /**
     * The data needed to update a otp.
     */
    data: XOR<otpUpdateInput, otpUncheckedUpdateInput>
    /**
     * Choose, which otp to update.
     */
    where: otpWhereUniqueInput
  }

  /**
   * otp updateMany
   */
  export type otpUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update otps.
     */
    data: XOR<otpUpdateManyMutationInput, otpUncheckedUpdateManyInput>
    /**
     * Filter which otps to update
     */
    where?: otpWhereInput
  }

  /**
   * otp upsert
   */
  export type otpUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the otp
     */
    select?: otpSelect<ExtArgs> | null
    /**
     * The filter to search for the otp to update in case it exists.
     */
    where: otpWhereUniqueInput
    /**
     * In case the otp found by the `where` argument doesn't exist, create a new otp with this data.
     */
    create: XOR<otpCreateInput, otpUncheckedCreateInput>
    /**
     * In case the otp was found with the provided `where` argument, update it with this data.
     */
    update: XOR<otpUpdateInput, otpUncheckedUpdateInput>
  }

  /**
   * otp delete
   */
  export type otpDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the otp
     */
    select?: otpSelect<ExtArgs> | null
    /**
     * Filter which otp to delete.
     */
    where: otpWhereUniqueInput
  }

  /**
   * otp deleteMany
   */
  export type otpDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which otps to delete
     */
    where?: otpWhereInput
  }

  /**
   * otp without action
   */
  export type otpDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the otp
     */
    select?: otpSelect<ExtArgs> | null
  }


  /**
   * Model payment_method
   */

  export type AggregatePayment_method = {
    _count: Payment_methodCountAggregateOutputType | null
    _avg: Payment_methodAvgAggregateOutputType | null
    _sum: Payment_methodSumAggregateOutputType | null
    _min: Payment_methodMinAggregateOutputType | null
    _max: Payment_methodMaxAggregateOutputType | null
  }

  export type Payment_methodAvgAggregateOutputType = {
    id: number | null
    companyId: number | null
    deletedBy: number | null
  }

  export type Payment_methodSumAggregateOutputType = {
    id: number | null
    companyId: number | null
    deletedBy: number | null
  }

  export type Payment_methodMinAggregateOutputType = {
    id: number | null
    companyId: number | null
    accountName: string | null
    accountNumber: string | null
    qrPath: string | null
    deletedAt: Date | null
    deletedBy: number | null
  }

  export type Payment_methodMaxAggregateOutputType = {
    id: number | null
    companyId: number | null
    accountName: string | null
    accountNumber: string | null
    qrPath: string | null
    deletedAt: Date | null
    deletedBy: number | null
  }

  export type Payment_methodCountAggregateOutputType = {
    id: number
    companyId: number
    accountName: number
    accountNumber: number
    qrPath: number
    deletedAt: number
    deletedBy: number
    _all: number
  }


  export type Payment_methodAvgAggregateInputType = {
    id?: true
    companyId?: true
    deletedBy?: true
  }

  export type Payment_methodSumAggregateInputType = {
    id?: true
    companyId?: true
    deletedBy?: true
  }

  export type Payment_methodMinAggregateInputType = {
    id?: true
    companyId?: true
    accountName?: true
    accountNumber?: true
    qrPath?: true
    deletedAt?: true
    deletedBy?: true
  }

  export type Payment_methodMaxAggregateInputType = {
    id?: true
    companyId?: true
    accountName?: true
    accountNumber?: true
    qrPath?: true
    deletedAt?: true
    deletedBy?: true
  }

  export type Payment_methodCountAggregateInputType = {
    id?: true
    companyId?: true
    accountName?: true
    accountNumber?: true
    qrPath?: true
    deletedAt?: true
    deletedBy?: true
    _all?: true
  }

  export type Payment_methodAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which payment_method to aggregate.
     */
    where?: payment_methodWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of payment_methods to fetch.
     */
    orderBy?: payment_methodOrderByWithRelationInput | payment_methodOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: payment_methodWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` payment_methods from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` payment_methods.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned payment_methods
    **/
    _count?: true | Payment_methodCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Payment_methodAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Payment_methodSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Payment_methodMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Payment_methodMaxAggregateInputType
  }

  export type GetPayment_methodAggregateType<T extends Payment_methodAggregateArgs> = {
        [P in keyof T & keyof AggregatePayment_method]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePayment_method[P]>
      : GetScalarType<T[P], AggregatePayment_method[P]>
  }




  export type payment_methodGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: payment_methodWhereInput
    orderBy?: payment_methodOrderByWithAggregationInput | payment_methodOrderByWithAggregationInput[]
    by: Payment_methodScalarFieldEnum[] | Payment_methodScalarFieldEnum
    having?: payment_methodScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Payment_methodCountAggregateInputType | true
    _avg?: Payment_methodAvgAggregateInputType
    _sum?: Payment_methodSumAggregateInputType
    _min?: Payment_methodMinAggregateInputType
    _max?: Payment_methodMaxAggregateInputType
  }

  export type Payment_methodGroupByOutputType = {
    id: number
    companyId: number
    accountName: string
    accountNumber: string
    qrPath: string | null
    deletedAt: Date | null
    deletedBy: number | null
    _count: Payment_methodCountAggregateOutputType | null
    _avg: Payment_methodAvgAggregateOutputType | null
    _sum: Payment_methodSumAggregateOutputType | null
    _min: Payment_methodMinAggregateOutputType | null
    _max: Payment_methodMaxAggregateOutputType | null
  }

  type GetPayment_methodGroupByPayload<T extends payment_methodGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Payment_methodGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Payment_methodGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Payment_methodGroupByOutputType[P]>
            : GetScalarType<T[P], Payment_methodGroupByOutputType[P]>
        }
      >
    >


  export type payment_methodSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    companyId?: boolean
    accountName?: boolean
    accountNumber?: boolean
    qrPath?: boolean
    deletedAt?: boolean
    deletedBy?: boolean
  }, ExtArgs["result"]["payment_method"]>


  export type payment_methodSelectScalar = {
    id?: boolean
    companyId?: boolean
    accountName?: boolean
    accountNumber?: boolean
    qrPath?: boolean
    deletedAt?: boolean
    deletedBy?: boolean
  }


  export type $payment_methodPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "payment_method"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      companyId: number
      accountName: string
      accountNumber: string
      qrPath: string | null
      deletedAt: Date | null
      deletedBy: number | null
    }, ExtArgs["result"]["payment_method"]>
    composites: {}
  }

  type payment_methodGetPayload<S extends boolean | null | undefined | payment_methodDefaultArgs> = $Result.GetResult<Prisma.$payment_methodPayload, S>

  type payment_methodCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<payment_methodFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: Payment_methodCountAggregateInputType | true
    }

  export interface payment_methodDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['payment_method'], meta: { name: 'payment_method' } }
    /**
     * Find zero or one Payment_method that matches the filter.
     * @param {payment_methodFindUniqueArgs} args - Arguments to find a Payment_method
     * @example
     * // Get one Payment_method
     * const payment_method = await prisma.payment_method.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends payment_methodFindUniqueArgs>(args: SelectSubset<T, payment_methodFindUniqueArgs<ExtArgs>>): Prisma__payment_methodClient<$Result.GetResult<Prisma.$payment_methodPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Payment_method that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {payment_methodFindUniqueOrThrowArgs} args - Arguments to find a Payment_method
     * @example
     * // Get one Payment_method
     * const payment_method = await prisma.payment_method.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends payment_methodFindUniqueOrThrowArgs>(args: SelectSubset<T, payment_methodFindUniqueOrThrowArgs<ExtArgs>>): Prisma__payment_methodClient<$Result.GetResult<Prisma.$payment_methodPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Payment_method that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {payment_methodFindFirstArgs} args - Arguments to find a Payment_method
     * @example
     * // Get one Payment_method
     * const payment_method = await prisma.payment_method.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends payment_methodFindFirstArgs>(args?: SelectSubset<T, payment_methodFindFirstArgs<ExtArgs>>): Prisma__payment_methodClient<$Result.GetResult<Prisma.$payment_methodPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Payment_method that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {payment_methodFindFirstOrThrowArgs} args - Arguments to find a Payment_method
     * @example
     * // Get one Payment_method
     * const payment_method = await prisma.payment_method.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends payment_methodFindFirstOrThrowArgs>(args?: SelectSubset<T, payment_methodFindFirstOrThrowArgs<ExtArgs>>): Prisma__payment_methodClient<$Result.GetResult<Prisma.$payment_methodPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Payment_methods that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {payment_methodFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Payment_methods
     * const payment_methods = await prisma.payment_method.findMany()
     * 
     * // Get first 10 Payment_methods
     * const payment_methods = await prisma.payment_method.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const payment_methodWithIdOnly = await prisma.payment_method.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends payment_methodFindManyArgs>(args?: SelectSubset<T, payment_methodFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$payment_methodPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Payment_method.
     * @param {payment_methodCreateArgs} args - Arguments to create a Payment_method.
     * @example
     * // Create one Payment_method
     * const Payment_method = await prisma.payment_method.create({
     *   data: {
     *     // ... data to create a Payment_method
     *   }
     * })
     * 
     */
    create<T extends payment_methodCreateArgs>(args: SelectSubset<T, payment_methodCreateArgs<ExtArgs>>): Prisma__payment_methodClient<$Result.GetResult<Prisma.$payment_methodPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Payment_methods.
     * @param {payment_methodCreateManyArgs} args - Arguments to create many Payment_methods.
     * @example
     * // Create many Payment_methods
     * const payment_method = await prisma.payment_method.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends payment_methodCreateManyArgs>(args?: SelectSubset<T, payment_methodCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Payment_method.
     * @param {payment_methodDeleteArgs} args - Arguments to delete one Payment_method.
     * @example
     * // Delete one Payment_method
     * const Payment_method = await prisma.payment_method.delete({
     *   where: {
     *     // ... filter to delete one Payment_method
     *   }
     * })
     * 
     */
    delete<T extends payment_methodDeleteArgs>(args: SelectSubset<T, payment_methodDeleteArgs<ExtArgs>>): Prisma__payment_methodClient<$Result.GetResult<Prisma.$payment_methodPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Payment_method.
     * @param {payment_methodUpdateArgs} args - Arguments to update one Payment_method.
     * @example
     * // Update one Payment_method
     * const payment_method = await prisma.payment_method.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends payment_methodUpdateArgs>(args: SelectSubset<T, payment_methodUpdateArgs<ExtArgs>>): Prisma__payment_methodClient<$Result.GetResult<Prisma.$payment_methodPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Payment_methods.
     * @param {payment_methodDeleteManyArgs} args - Arguments to filter Payment_methods to delete.
     * @example
     * // Delete a few Payment_methods
     * const { count } = await prisma.payment_method.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends payment_methodDeleteManyArgs>(args?: SelectSubset<T, payment_methodDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Payment_methods.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {payment_methodUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Payment_methods
     * const payment_method = await prisma.payment_method.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends payment_methodUpdateManyArgs>(args: SelectSubset<T, payment_methodUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Payment_method.
     * @param {payment_methodUpsertArgs} args - Arguments to update or create a Payment_method.
     * @example
     * // Update or create a Payment_method
     * const payment_method = await prisma.payment_method.upsert({
     *   create: {
     *     // ... data to create a Payment_method
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Payment_method we want to update
     *   }
     * })
     */
    upsert<T extends payment_methodUpsertArgs>(args: SelectSubset<T, payment_methodUpsertArgs<ExtArgs>>): Prisma__payment_methodClient<$Result.GetResult<Prisma.$payment_methodPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Payment_methods.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {payment_methodCountArgs} args - Arguments to filter Payment_methods to count.
     * @example
     * // Count the number of Payment_methods
     * const count = await prisma.payment_method.count({
     *   where: {
     *     // ... the filter for the Payment_methods we want to count
     *   }
     * })
    **/
    count<T extends payment_methodCountArgs>(
      args?: Subset<T, payment_methodCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Payment_methodCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Payment_method.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Payment_methodAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Payment_methodAggregateArgs>(args: Subset<T, Payment_methodAggregateArgs>): Prisma.PrismaPromise<GetPayment_methodAggregateType<T>>

    /**
     * Group by Payment_method.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {payment_methodGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends payment_methodGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: payment_methodGroupByArgs['orderBy'] }
        : { orderBy?: payment_methodGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, payment_methodGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPayment_methodGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the payment_method model
   */
  readonly fields: payment_methodFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for payment_method.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__payment_methodClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the payment_method model
   */ 
  interface payment_methodFieldRefs {
    readonly id: FieldRef<"payment_method", 'Int'>
    readonly companyId: FieldRef<"payment_method", 'Int'>
    readonly accountName: FieldRef<"payment_method", 'String'>
    readonly accountNumber: FieldRef<"payment_method", 'String'>
    readonly qrPath: FieldRef<"payment_method", 'String'>
    readonly deletedAt: FieldRef<"payment_method", 'DateTime'>
    readonly deletedBy: FieldRef<"payment_method", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * payment_method findUnique
   */
  export type payment_methodFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payment_method
     */
    select?: payment_methodSelect<ExtArgs> | null
    /**
     * Filter, which payment_method to fetch.
     */
    where: payment_methodWhereUniqueInput
  }

  /**
   * payment_method findUniqueOrThrow
   */
  export type payment_methodFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payment_method
     */
    select?: payment_methodSelect<ExtArgs> | null
    /**
     * Filter, which payment_method to fetch.
     */
    where: payment_methodWhereUniqueInput
  }

  /**
   * payment_method findFirst
   */
  export type payment_methodFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payment_method
     */
    select?: payment_methodSelect<ExtArgs> | null
    /**
     * Filter, which payment_method to fetch.
     */
    where?: payment_methodWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of payment_methods to fetch.
     */
    orderBy?: payment_methodOrderByWithRelationInput | payment_methodOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for payment_methods.
     */
    cursor?: payment_methodWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` payment_methods from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` payment_methods.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of payment_methods.
     */
    distinct?: Payment_methodScalarFieldEnum | Payment_methodScalarFieldEnum[]
  }

  /**
   * payment_method findFirstOrThrow
   */
  export type payment_methodFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payment_method
     */
    select?: payment_methodSelect<ExtArgs> | null
    /**
     * Filter, which payment_method to fetch.
     */
    where?: payment_methodWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of payment_methods to fetch.
     */
    orderBy?: payment_methodOrderByWithRelationInput | payment_methodOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for payment_methods.
     */
    cursor?: payment_methodWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` payment_methods from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` payment_methods.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of payment_methods.
     */
    distinct?: Payment_methodScalarFieldEnum | Payment_methodScalarFieldEnum[]
  }

  /**
   * payment_method findMany
   */
  export type payment_methodFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payment_method
     */
    select?: payment_methodSelect<ExtArgs> | null
    /**
     * Filter, which payment_methods to fetch.
     */
    where?: payment_methodWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of payment_methods to fetch.
     */
    orderBy?: payment_methodOrderByWithRelationInput | payment_methodOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing payment_methods.
     */
    cursor?: payment_methodWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` payment_methods from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` payment_methods.
     */
    skip?: number
    distinct?: Payment_methodScalarFieldEnum | Payment_methodScalarFieldEnum[]
  }

  /**
   * payment_method create
   */
  export type payment_methodCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payment_method
     */
    select?: payment_methodSelect<ExtArgs> | null
    /**
     * The data needed to create a payment_method.
     */
    data: XOR<payment_methodCreateInput, payment_methodUncheckedCreateInput>
  }

  /**
   * payment_method createMany
   */
  export type payment_methodCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many payment_methods.
     */
    data: payment_methodCreateManyInput | payment_methodCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * payment_method update
   */
  export type payment_methodUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payment_method
     */
    select?: payment_methodSelect<ExtArgs> | null
    /**
     * The data needed to update a payment_method.
     */
    data: XOR<payment_methodUpdateInput, payment_methodUncheckedUpdateInput>
    /**
     * Choose, which payment_method to update.
     */
    where: payment_methodWhereUniqueInput
  }

  /**
   * payment_method updateMany
   */
  export type payment_methodUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update payment_methods.
     */
    data: XOR<payment_methodUpdateManyMutationInput, payment_methodUncheckedUpdateManyInput>
    /**
     * Filter which payment_methods to update
     */
    where?: payment_methodWhereInput
  }

  /**
   * payment_method upsert
   */
  export type payment_methodUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payment_method
     */
    select?: payment_methodSelect<ExtArgs> | null
    /**
     * The filter to search for the payment_method to update in case it exists.
     */
    where: payment_methodWhereUniqueInput
    /**
     * In case the payment_method found by the `where` argument doesn't exist, create a new payment_method with this data.
     */
    create: XOR<payment_methodCreateInput, payment_methodUncheckedCreateInput>
    /**
     * In case the payment_method was found with the provided `where` argument, update it with this data.
     */
    update: XOR<payment_methodUpdateInput, payment_methodUncheckedUpdateInput>
  }

  /**
   * payment_method delete
   */
  export type payment_methodDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payment_method
     */
    select?: payment_methodSelect<ExtArgs> | null
    /**
     * Filter which payment_method to delete.
     */
    where: payment_methodWhereUniqueInput
  }

  /**
   * payment_method deleteMany
   */
  export type payment_methodDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which payment_methods to delete
     */
    where?: payment_methodWhereInput
  }

  /**
   * payment_method without action
   */
  export type payment_methodDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payment_method
     */
    select?: payment_methodSelect<ExtArgs> | null
  }


  /**
   * Model projects
   */

  export type AggregateProjects = {
    _count: ProjectsCountAggregateOutputType | null
    _avg: ProjectsAvgAggregateOutputType | null
    _sum: ProjectsSumAggregateOutputType | null
    _min: ProjectsMinAggregateOutputType | null
    _max: ProjectsMaxAggregateOutputType | null
  }

  export type ProjectsAvgAggregateOutputType = {
    projectId: number | null
    companyId: number | null
    area: number | null
    createdBy: number | null
    updatedBy: number | null
    deletedBy: number | null
  }

  export type ProjectsSumAggregateOutputType = {
    projectId: number | null
    companyId: number | null
    area: number | null
    createdBy: number | null
    updatedBy: number | null
    deletedBy: number | null
  }

  export type ProjectsMinAggregateOutputType = {
    projectId: number | null
    companyId: number | null
    area: number | null
    code: string | null
    projectName: string | null
    address: string | null
    createdBy: number | null
    updatedBy: number | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
    deletedBy: number | null
  }

  export type ProjectsMaxAggregateOutputType = {
    projectId: number | null
    companyId: number | null
    area: number | null
    code: string | null
    projectName: string | null
    address: string | null
    createdBy: number | null
    updatedBy: number | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
    deletedBy: number | null
  }

  export type ProjectsCountAggregateOutputType = {
    projectId: number
    companyId: number
    area: number
    code: number
    projectName: number
    address: number
    createdBy: number
    updatedBy: number
    createdAt: number
    updatedAt: number
    deletedAt: number
    deletedBy: number
    _all: number
  }


  export type ProjectsAvgAggregateInputType = {
    projectId?: true
    companyId?: true
    area?: true
    createdBy?: true
    updatedBy?: true
    deletedBy?: true
  }

  export type ProjectsSumAggregateInputType = {
    projectId?: true
    companyId?: true
    area?: true
    createdBy?: true
    updatedBy?: true
    deletedBy?: true
  }

  export type ProjectsMinAggregateInputType = {
    projectId?: true
    companyId?: true
    area?: true
    code?: true
    projectName?: true
    address?: true
    createdBy?: true
    updatedBy?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
    deletedBy?: true
  }

  export type ProjectsMaxAggregateInputType = {
    projectId?: true
    companyId?: true
    area?: true
    code?: true
    projectName?: true
    address?: true
    createdBy?: true
    updatedBy?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
    deletedBy?: true
  }

  export type ProjectsCountAggregateInputType = {
    projectId?: true
    companyId?: true
    area?: true
    code?: true
    projectName?: true
    address?: true
    createdBy?: true
    updatedBy?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
    deletedBy?: true
    _all?: true
  }

  export type ProjectsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which projects to aggregate.
     */
    where?: projectsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of projects to fetch.
     */
    orderBy?: projectsOrderByWithRelationInput | projectsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: projectsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` projects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned projects
    **/
    _count?: true | ProjectsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProjectsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProjectsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProjectsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProjectsMaxAggregateInputType
  }

  export type GetProjectsAggregateType<T extends ProjectsAggregateArgs> = {
        [P in keyof T & keyof AggregateProjects]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProjects[P]>
      : GetScalarType<T[P], AggregateProjects[P]>
  }




  export type projectsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: projectsWhereInput
    orderBy?: projectsOrderByWithAggregationInput | projectsOrderByWithAggregationInput[]
    by: ProjectsScalarFieldEnum[] | ProjectsScalarFieldEnum
    having?: projectsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProjectsCountAggregateInputType | true
    _avg?: ProjectsAvgAggregateInputType
    _sum?: ProjectsSumAggregateInputType
    _min?: ProjectsMinAggregateInputType
    _max?: ProjectsMaxAggregateInputType
  }

  export type ProjectsGroupByOutputType = {
    projectId: number
    companyId: number
    area: number
    code: string | null
    projectName: string
    address: string | null
    createdBy: number
    updatedBy: number | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
    deletedBy: number | null
    _count: ProjectsCountAggregateOutputType | null
    _avg: ProjectsAvgAggregateOutputType | null
    _sum: ProjectsSumAggregateOutputType | null
    _min: ProjectsMinAggregateOutputType | null
    _max: ProjectsMaxAggregateOutputType | null
  }

  type GetProjectsGroupByPayload<T extends projectsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProjectsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProjectsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProjectsGroupByOutputType[P]>
            : GetScalarType<T[P], ProjectsGroupByOutputType[P]>
        }
      >
    >


  export type projectsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    projectId?: boolean
    companyId?: boolean
    area?: boolean
    code?: boolean
    projectName?: boolean
    address?: boolean
    createdBy?: boolean
    updatedBy?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    deletedBy?: boolean
  }, ExtArgs["result"]["projects"]>


  export type projectsSelectScalar = {
    projectId?: boolean
    companyId?: boolean
    area?: boolean
    code?: boolean
    projectName?: boolean
    address?: boolean
    createdBy?: boolean
    updatedBy?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    deletedBy?: boolean
  }


  export type $projectsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "projects"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      projectId: number
      companyId: number
      area: number
      code: string | null
      projectName: string
      address: string | null
      createdBy: number
      updatedBy: number | null
      createdAt: Date | null
      updatedAt: Date | null
      deletedAt: Date | null
      deletedBy: number | null
    }, ExtArgs["result"]["projects"]>
    composites: {}
  }

  type projectsGetPayload<S extends boolean | null | undefined | projectsDefaultArgs> = $Result.GetResult<Prisma.$projectsPayload, S>

  type projectsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<projectsFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ProjectsCountAggregateInputType | true
    }

  export interface projectsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['projects'], meta: { name: 'projects' } }
    /**
     * Find zero or one Projects that matches the filter.
     * @param {projectsFindUniqueArgs} args - Arguments to find a Projects
     * @example
     * // Get one Projects
     * const projects = await prisma.projects.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends projectsFindUniqueArgs>(args: SelectSubset<T, projectsFindUniqueArgs<ExtArgs>>): Prisma__projectsClient<$Result.GetResult<Prisma.$projectsPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Projects that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {projectsFindUniqueOrThrowArgs} args - Arguments to find a Projects
     * @example
     * // Get one Projects
     * const projects = await prisma.projects.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends projectsFindUniqueOrThrowArgs>(args: SelectSubset<T, projectsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__projectsClient<$Result.GetResult<Prisma.$projectsPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Projects that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {projectsFindFirstArgs} args - Arguments to find a Projects
     * @example
     * // Get one Projects
     * const projects = await prisma.projects.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends projectsFindFirstArgs>(args?: SelectSubset<T, projectsFindFirstArgs<ExtArgs>>): Prisma__projectsClient<$Result.GetResult<Prisma.$projectsPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Projects that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {projectsFindFirstOrThrowArgs} args - Arguments to find a Projects
     * @example
     * // Get one Projects
     * const projects = await prisma.projects.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends projectsFindFirstOrThrowArgs>(args?: SelectSubset<T, projectsFindFirstOrThrowArgs<ExtArgs>>): Prisma__projectsClient<$Result.GetResult<Prisma.$projectsPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Projects that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {projectsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Projects
     * const projects = await prisma.projects.findMany()
     * 
     * // Get first 10 Projects
     * const projects = await prisma.projects.findMany({ take: 10 })
     * 
     * // Only select the `projectId`
     * const projectsWithProjectIdOnly = await prisma.projects.findMany({ select: { projectId: true } })
     * 
     */
    findMany<T extends projectsFindManyArgs>(args?: SelectSubset<T, projectsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$projectsPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Projects.
     * @param {projectsCreateArgs} args - Arguments to create a Projects.
     * @example
     * // Create one Projects
     * const Projects = await prisma.projects.create({
     *   data: {
     *     // ... data to create a Projects
     *   }
     * })
     * 
     */
    create<T extends projectsCreateArgs>(args: SelectSubset<T, projectsCreateArgs<ExtArgs>>): Prisma__projectsClient<$Result.GetResult<Prisma.$projectsPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Projects.
     * @param {projectsCreateManyArgs} args - Arguments to create many Projects.
     * @example
     * // Create many Projects
     * const projects = await prisma.projects.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends projectsCreateManyArgs>(args?: SelectSubset<T, projectsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Projects.
     * @param {projectsDeleteArgs} args - Arguments to delete one Projects.
     * @example
     * // Delete one Projects
     * const Projects = await prisma.projects.delete({
     *   where: {
     *     // ... filter to delete one Projects
     *   }
     * })
     * 
     */
    delete<T extends projectsDeleteArgs>(args: SelectSubset<T, projectsDeleteArgs<ExtArgs>>): Prisma__projectsClient<$Result.GetResult<Prisma.$projectsPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Projects.
     * @param {projectsUpdateArgs} args - Arguments to update one Projects.
     * @example
     * // Update one Projects
     * const projects = await prisma.projects.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends projectsUpdateArgs>(args: SelectSubset<T, projectsUpdateArgs<ExtArgs>>): Prisma__projectsClient<$Result.GetResult<Prisma.$projectsPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Projects.
     * @param {projectsDeleteManyArgs} args - Arguments to filter Projects to delete.
     * @example
     * // Delete a few Projects
     * const { count } = await prisma.projects.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends projectsDeleteManyArgs>(args?: SelectSubset<T, projectsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Projects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {projectsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Projects
     * const projects = await prisma.projects.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends projectsUpdateManyArgs>(args: SelectSubset<T, projectsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Projects.
     * @param {projectsUpsertArgs} args - Arguments to update or create a Projects.
     * @example
     * // Update or create a Projects
     * const projects = await prisma.projects.upsert({
     *   create: {
     *     // ... data to create a Projects
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Projects we want to update
     *   }
     * })
     */
    upsert<T extends projectsUpsertArgs>(args: SelectSubset<T, projectsUpsertArgs<ExtArgs>>): Prisma__projectsClient<$Result.GetResult<Prisma.$projectsPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Projects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {projectsCountArgs} args - Arguments to filter Projects to count.
     * @example
     * // Count the number of Projects
     * const count = await prisma.projects.count({
     *   where: {
     *     // ... the filter for the Projects we want to count
     *   }
     * })
    **/
    count<T extends projectsCountArgs>(
      args?: Subset<T, projectsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProjectsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Projects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProjectsAggregateArgs>(args: Subset<T, ProjectsAggregateArgs>): Prisma.PrismaPromise<GetProjectsAggregateType<T>>

    /**
     * Group by Projects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {projectsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends projectsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: projectsGroupByArgs['orderBy'] }
        : { orderBy?: projectsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, projectsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProjectsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the projects model
   */
  readonly fields: projectsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for projects.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__projectsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the projects model
   */ 
  interface projectsFieldRefs {
    readonly projectId: FieldRef<"projects", 'Int'>
    readonly companyId: FieldRef<"projects", 'Int'>
    readonly area: FieldRef<"projects", 'Float'>
    readonly code: FieldRef<"projects", 'String'>
    readonly projectName: FieldRef<"projects", 'String'>
    readonly address: FieldRef<"projects", 'String'>
    readonly createdBy: FieldRef<"projects", 'Int'>
    readonly updatedBy: FieldRef<"projects", 'Int'>
    readonly createdAt: FieldRef<"projects", 'DateTime'>
    readonly updatedAt: FieldRef<"projects", 'DateTime'>
    readonly deletedAt: FieldRef<"projects", 'DateTime'>
    readonly deletedBy: FieldRef<"projects", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * projects findUnique
   */
  export type projectsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the projects
     */
    select?: projectsSelect<ExtArgs> | null
    /**
     * Filter, which projects to fetch.
     */
    where: projectsWhereUniqueInput
  }

  /**
   * projects findUniqueOrThrow
   */
  export type projectsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the projects
     */
    select?: projectsSelect<ExtArgs> | null
    /**
     * Filter, which projects to fetch.
     */
    where: projectsWhereUniqueInput
  }

  /**
   * projects findFirst
   */
  export type projectsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the projects
     */
    select?: projectsSelect<ExtArgs> | null
    /**
     * Filter, which projects to fetch.
     */
    where?: projectsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of projects to fetch.
     */
    orderBy?: projectsOrderByWithRelationInput | projectsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for projects.
     */
    cursor?: projectsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` projects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of projects.
     */
    distinct?: ProjectsScalarFieldEnum | ProjectsScalarFieldEnum[]
  }

  /**
   * projects findFirstOrThrow
   */
  export type projectsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the projects
     */
    select?: projectsSelect<ExtArgs> | null
    /**
     * Filter, which projects to fetch.
     */
    where?: projectsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of projects to fetch.
     */
    orderBy?: projectsOrderByWithRelationInput | projectsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for projects.
     */
    cursor?: projectsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` projects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of projects.
     */
    distinct?: ProjectsScalarFieldEnum | ProjectsScalarFieldEnum[]
  }

  /**
   * projects findMany
   */
  export type projectsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the projects
     */
    select?: projectsSelect<ExtArgs> | null
    /**
     * Filter, which projects to fetch.
     */
    where?: projectsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of projects to fetch.
     */
    orderBy?: projectsOrderByWithRelationInput | projectsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing projects.
     */
    cursor?: projectsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` projects.
     */
    skip?: number
    distinct?: ProjectsScalarFieldEnum | ProjectsScalarFieldEnum[]
  }

  /**
   * projects create
   */
  export type projectsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the projects
     */
    select?: projectsSelect<ExtArgs> | null
    /**
     * The data needed to create a projects.
     */
    data: XOR<projectsCreateInput, projectsUncheckedCreateInput>
  }

  /**
   * projects createMany
   */
  export type projectsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many projects.
     */
    data: projectsCreateManyInput | projectsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * projects update
   */
  export type projectsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the projects
     */
    select?: projectsSelect<ExtArgs> | null
    /**
     * The data needed to update a projects.
     */
    data: XOR<projectsUpdateInput, projectsUncheckedUpdateInput>
    /**
     * Choose, which projects to update.
     */
    where: projectsWhereUniqueInput
  }

  /**
   * projects updateMany
   */
  export type projectsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update projects.
     */
    data: XOR<projectsUpdateManyMutationInput, projectsUncheckedUpdateManyInput>
    /**
     * Filter which projects to update
     */
    where?: projectsWhereInput
  }

  /**
   * projects upsert
   */
  export type projectsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the projects
     */
    select?: projectsSelect<ExtArgs> | null
    /**
     * The filter to search for the projects to update in case it exists.
     */
    where: projectsWhereUniqueInput
    /**
     * In case the projects found by the `where` argument doesn't exist, create a new projects with this data.
     */
    create: XOR<projectsCreateInput, projectsUncheckedCreateInput>
    /**
     * In case the projects was found with the provided `where` argument, update it with this data.
     */
    update: XOR<projectsUpdateInput, projectsUncheckedUpdateInput>
  }

  /**
   * projects delete
   */
  export type projectsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the projects
     */
    select?: projectsSelect<ExtArgs> | null
    /**
     * Filter which projects to delete.
     */
    where: projectsWhereUniqueInput
  }

  /**
   * projects deleteMany
   */
  export type projectsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which projects to delete
     */
    where?: projectsWhereInput
  }

  /**
   * projects without action
   */
  export type projectsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the projects
     */
    select?: projectsSelect<ExtArgs> | null
  }


  /**
   * Model stores
   */

  export type AggregateStores = {
    _count: StoresCountAggregateOutputType | null
    _avg: StoresAvgAggregateOutputType | null
    _sum: StoresSumAggregateOutputType | null
    _min: StoresMinAggregateOutputType | null
    _max: StoresMaxAggregateOutputType | null
  }

  export type StoresAvgAggregateOutputType = {
    id: number | null
  }

  export type StoresSumAggregateOutputType = {
    id: number | null
  }

  export type StoresMinAggregateOutputType = {
    id: number | null
    name: string | null
    opening_time: Date | null
    closing_time: Date | null
    closing_id: string | null
  }

  export type StoresMaxAggregateOutputType = {
    id: number | null
    name: string | null
    opening_time: Date | null
    closing_time: Date | null
    closing_id: string | null
  }

  export type StoresCountAggregateOutputType = {
    id: number
    name: number
    opening_time: number
    closing_time: number
    closing_id: number
    _all: number
  }


  export type StoresAvgAggregateInputType = {
    id?: true
  }

  export type StoresSumAggregateInputType = {
    id?: true
  }

  export type StoresMinAggregateInputType = {
    id?: true
    name?: true
    opening_time?: true
    closing_time?: true
    closing_id?: true
  }

  export type StoresMaxAggregateInputType = {
    id?: true
    name?: true
    opening_time?: true
    closing_time?: true
    closing_id?: true
  }

  export type StoresCountAggregateInputType = {
    id?: true
    name?: true
    opening_time?: true
    closing_time?: true
    closing_id?: true
    _all?: true
  }

  export type StoresAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which stores to aggregate.
     */
    where?: storesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of stores to fetch.
     */
    orderBy?: storesOrderByWithRelationInput | storesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: storesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` stores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` stores.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned stores
    **/
    _count?: true | StoresCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: StoresAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: StoresSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StoresMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StoresMaxAggregateInputType
  }

  export type GetStoresAggregateType<T extends StoresAggregateArgs> = {
        [P in keyof T & keyof AggregateStores]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStores[P]>
      : GetScalarType<T[P], AggregateStores[P]>
  }




  export type storesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: storesWhereInput
    orderBy?: storesOrderByWithAggregationInput | storesOrderByWithAggregationInput[]
    by: StoresScalarFieldEnum[] | StoresScalarFieldEnum
    having?: storesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StoresCountAggregateInputType | true
    _avg?: StoresAvgAggregateInputType
    _sum?: StoresSumAggregateInputType
    _min?: StoresMinAggregateInputType
    _max?: StoresMaxAggregateInputType
  }

  export type StoresGroupByOutputType = {
    id: number
    name: string | null
    opening_time: Date | null
    closing_time: Date | null
    closing_id: string | null
    _count: StoresCountAggregateOutputType | null
    _avg: StoresAvgAggregateOutputType | null
    _sum: StoresSumAggregateOutputType | null
    _min: StoresMinAggregateOutputType | null
    _max: StoresMaxAggregateOutputType | null
  }

  type GetStoresGroupByPayload<T extends storesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StoresGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StoresGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StoresGroupByOutputType[P]>
            : GetScalarType<T[P], StoresGroupByOutputType[P]>
        }
      >
    >


  export type storesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    opening_time?: boolean
    closing_time?: boolean
    closing_id?: boolean
  }, ExtArgs["result"]["stores"]>


  export type storesSelectScalar = {
    id?: boolean
    name?: boolean
    opening_time?: boolean
    closing_time?: boolean
    closing_id?: boolean
  }


  export type $storesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "stores"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string | null
      opening_time: Date | null
      closing_time: Date | null
      closing_id: string | null
    }, ExtArgs["result"]["stores"]>
    composites: {}
  }

  type storesGetPayload<S extends boolean | null | undefined | storesDefaultArgs> = $Result.GetResult<Prisma.$storesPayload, S>

  type storesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<storesFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: StoresCountAggregateInputType | true
    }

  export interface storesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['stores'], meta: { name: 'stores' } }
    /**
     * Find zero or one Stores that matches the filter.
     * @param {storesFindUniqueArgs} args - Arguments to find a Stores
     * @example
     * // Get one Stores
     * const stores = await prisma.stores.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends storesFindUniqueArgs>(args: SelectSubset<T, storesFindUniqueArgs<ExtArgs>>): Prisma__storesClient<$Result.GetResult<Prisma.$storesPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Stores that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {storesFindUniqueOrThrowArgs} args - Arguments to find a Stores
     * @example
     * // Get one Stores
     * const stores = await prisma.stores.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends storesFindUniqueOrThrowArgs>(args: SelectSubset<T, storesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__storesClient<$Result.GetResult<Prisma.$storesPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Stores that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {storesFindFirstArgs} args - Arguments to find a Stores
     * @example
     * // Get one Stores
     * const stores = await prisma.stores.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends storesFindFirstArgs>(args?: SelectSubset<T, storesFindFirstArgs<ExtArgs>>): Prisma__storesClient<$Result.GetResult<Prisma.$storesPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Stores that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {storesFindFirstOrThrowArgs} args - Arguments to find a Stores
     * @example
     * // Get one Stores
     * const stores = await prisma.stores.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends storesFindFirstOrThrowArgs>(args?: SelectSubset<T, storesFindFirstOrThrowArgs<ExtArgs>>): Prisma__storesClient<$Result.GetResult<Prisma.$storesPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Stores that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {storesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Stores
     * const stores = await prisma.stores.findMany()
     * 
     * // Get first 10 Stores
     * const stores = await prisma.stores.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const storesWithIdOnly = await prisma.stores.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends storesFindManyArgs>(args?: SelectSubset<T, storesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$storesPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Stores.
     * @param {storesCreateArgs} args - Arguments to create a Stores.
     * @example
     * // Create one Stores
     * const Stores = await prisma.stores.create({
     *   data: {
     *     // ... data to create a Stores
     *   }
     * })
     * 
     */
    create<T extends storesCreateArgs>(args: SelectSubset<T, storesCreateArgs<ExtArgs>>): Prisma__storesClient<$Result.GetResult<Prisma.$storesPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Stores.
     * @param {storesCreateManyArgs} args - Arguments to create many Stores.
     * @example
     * // Create many Stores
     * const stores = await prisma.stores.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends storesCreateManyArgs>(args?: SelectSubset<T, storesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Stores.
     * @param {storesDeleteArgs} args - Arguments to delete one Stores.
     * @example
     * // Delete one Stores
     * const Stores = await prisma.stores.delete({
     *   where: {
     *     // ... filter to delete one Stores
     *   }
     * })
     * 
     */
    delete<T extends storesDeleteArgs>(args: SelectSubset<T, storesDeleteArgs<ExtArgs>>): Prisma__storesClient<$Result.GetResult<Prisma.$storesPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Stores.
     * @param {storesUpdateArgs} args - Arguments to update one Stores.
     * @example
     * // Update one Stores
     * const stores = await prisma.stores.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends storesUpdateArgs>(args: SelectSubset<T, storesUpdateArgs<ExtArgs>>): Prisma__storesClient<$Result.GetResult<Prisma.$storesPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Stores.
     * @param {storesDeleteManyArgs} args - Arguments to filter Stores to delete.
     * @example
     * // Delete a few Stores
     * const { count } = await prisma.stores.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends storesDeleteManyArgs>(args?: SelectSubset<T, storesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Stores.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {storesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Stores
     * const stores = await prisma.stores.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends storesUpdateManyArgs>(args: SelectSubset<T, storesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Stores.
     * @param {storesUpsertArgs} args - Arguments to update or create a Stores.
     * @example
     * // Update or create a Stores
     * const stores = await prisma.stores.upsert({
     *   create: {
     *     // ... data to create a Stores
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Stores we want to update
     *   }
     * })
     */
    upsert<T extends storesUpsertArgs>(args: SelectSubset<T, storesUpsertArgs<ExtArgs>>): Prisma__storesClient<$Result.GetResult<Prisma.$storesPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Stores.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {storesCountArgs} args - Arguments to filter Stores to count.
     * @example
     * // Count the number of Stores
     * const count = await prisma.stores.count({
     *   where: {
     *     // ... the filter for the Stores we want to count
     *   }
     * })
    **/
    count<T extends storesCountArgs>(
      args?: Subset<T, storesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StoresCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Stores.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StoresAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends StoresAggregateArgs>(args: Subset<T, StoresAggregateArgs>): Prisma.PrismaPromise<GetStoresAggregateType<T>>

    /**
     * Group by Stores.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {storesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends storesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: storesGroupByArgs['orderBy'] }
        : { orderBy?: storesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, storesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStoresGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the stores model
   */
  readonly fields: storesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for stores.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__storesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the stores model
   */ 
  interface storesFieldRefs {
    readonly id: FieldRef<"stores", 'Int'>
    readonly name: FieldRef<"stores", 'String'>
    readonly opening_time: FieldRef<"stores", 'DateTime'>
    readonly closing_time: FieldRef<"stores", 'DateTime'>
    readonly closing_id: FieldRef<"stores", 'String'>
  }
    

  // Custom InputTypes
  /**
   * stores findUnique
   */
  export type storesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the stores
     */
    select?: storesSelect<ExtArgs> | null
    /**
     * Filter, which stores to fetch.
     */
    where: storesWhereUniqueInput
  }

  /**
   * stores findUniqueOrThrow
   */
  export type storesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the stores
     */
    select?: storesSelect<ExtArgs> | null
    /**
     * Filter, which stores to fetch.
     */
    where: storesWhereUniqueInput
  }

  /**
   * stores findFirst
   */
  export type storesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the stores
     */
    select?: storesSelect<ExtArgs> | null
    /**
     * Filter, which stores to fetch.
     */
    where?: storesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of stores to fetch.
     */
    orderBy?: storesOrderByWithRelationInput | storesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for stores.
     */
    cursor?: storesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` stores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` stores.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of stores.
     */
    distinct?: StoresScalarFieldEnum | StoresScalarFieldEnum[]
  }

  /**
   * stores findFirstOrThrow
   */
  export type storesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the stores
     */
    select?: storesSelect<ExtArgs> | null
    /**
     * Filter, which stores to fetch.
     */
    where?: storesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of stores to fetch.
     */
    orderBy?: storesOrderByWithRelationInput | storesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for stores.
     */
    cursor?: storesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` stores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` stores.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of stores.
     */
    distinct?: StoresScalarFieldEnum | StoresScalarFieldEnum[]
  }

  /**
   * stores findMany
   */
  export type storesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the stores
     */
    select?: storesSelect<ExtArgs> | null
    /**
     * Filter, which stores to fetch.
     */
    where?: storesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of stores to fetch.
     */
    orderBy?: storesOrderByWithRelationInput | storesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing stores.
     */
    cursor?: storesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` stores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` stores.
     */
    skip?: number
    distinct?: StoresScalarFieldEnum | StoresScalarFieldEnum[]
  }

  /**
   * stores create
   */
  export type storesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the stores
     */
    select?: storesSelect<ExtArgs> | null
    /**
     * The data needed to create a stores.
     */
    data?: XOR<storesCreateInput, storesUncheckedCreateInput>
  }

  /**
   * stores createMany
   */
  export type storesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many stores.
     */
    data: storesCreateManyInput | storesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * stores update
   */
  export type storesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the stores
     */
    select?: storesSelect<ExtArgs> | null
    /**
     * The data needed to update a stores.
     */
    data: XOR<storesUpdateInput, storesUncheckedUpdateInput>
    /**
     * Choose, which stores to update.
     */
    where: storesWhereUniqueInput
  }

  /**
   * stores updateMany
   */
  export type storesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update stores.
     */
    data: XOR<storesUpdateManyMutationInput, storesUncheckedUpdateManyInput>
    /**
     * Filter which stores to update
     */
    where?: storesWhereInput
  }

  /**
   * stores upsert
   */
  export type storesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the stores
     */
    select?: storesSelect<ExtArgs> | null
    /**
     * The filter to search for the stores to update in case it exists.
     */
    where: storesWhereUniqueInput
    /**
     * In case the stores found by the `where` argument doesn't exist, create a new stores with this data.
     */
    create: XOR<storesCreateInput, storesUncheckedCreateInput>
    /**
     * In case the stores was found with the provided `where` argument, update it with this data.
     */
    update: XOR<storesUpdateInput, storesUncheckedUpdateInput>
  }

  /**
   * stores delete
   */
  export type storesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the stores
     */
    select?: storesSelect<ExtArgs> | null
    /**
     * Filter which stores to delete.
     */
    where: storesWhereUniqueInput
  }

  /**
   * stores deleteMany
   */
  export type storesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which stores to delete
     */
    where?: storesWhereInput
  }

  /**
   * stores without action
   */
  export type storesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the stores
     */
    select?: storesSelect<ExtArgs> | null
  }


  /**
   * Model transaction
   */

  export type AggregateTransaction = {
    _count: TransactionCountAggregateOutputType | null
    _avg: TransactionAvgAggregateOutputType | null
    _sum: TransactionSumAggregateOutputType | null
    _min: TransactionMinAggregateOutputType | null
    _max: TransactionMaxAggregateOutputType | null
  }

  export type TransactionAvgAggregateOutputType = {
    transactionId: number | null
    amount: number | null
    contractId: number | null
    currencyLAK: number | null
    currencyTHB: number | null
    currencyUSD: number | null
    createdBy: number | null
    updatedBy: number | null
  }

  export type TransactionSumAggregateOutputType = {
    transactionId: number | null
    amount: number | null
    contractId: number | null
    currencyLAK: number | null
    currencyTHB: number | null
    currencyUSD: number | null
    createdBy: number | null
    updatedBy: number | null
  }

  export type TransactionMinAggregateOutputType = {
    transactionId: number | null
    ip: string | null
    amount: number | null
    remark: string | null
    currency: string | null
    pamentMethod: string | null
    transactionUUID: string | null
    contractId: number | null
    currencyLAK: number | null
    currencyTHB: number | null
    currencyUSD: number | null
    createdBy: number | null
    updatedBy: number | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type TransactionMaxAggregateOutputType = {
    transactionId: number | null
    ip: string | null
    amount: number | null
    remark: string | null
    currency: string | null
    pamentMethod: string | null
    transactionUUID: string | null
    contractId: number | null
    currencyLAK: number | null
    currencyTHB: number | null
    currencyUSD: number | null
    createdBy: number | null
    updatedBy: number | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type TransactionCountAggregateOutputType = {
    transactionId: number
    ip: number
    amount: number
    remark: number
    currency: number
    pamentMethod: number
    transactionUUID: number
    contractId: number
    currencyLAK: number
    currencyTHB: number
    currencyUSD: number
    createdBy: number
    updatedBy: number
    createdAt: number
    updatedAt: number
    deletedAt: number
    _all: number
  }


  export type TransactionAvgAggregateInputType = {
    transactionId?: true
    amount?: true
    contractId?: true
    currencyLAK?: true
    currencyTHB?: true
    currencyUSD?: true
    createdBy?: true
    updatedBy?: true
  }

  export type TransactionSumAggregateInputType = {
    transactionId?: true
    amount?: true
    contractId?: true
    currencyLAK?: true
    currencyTHB?: true
    currencyUSD?: true
    createdBy?: true
    updatedBy?: true
  }

  export type TransactionMinAggregateInputType = {
    transactionId?: true
    ip?: true
    amount?: true
    remark?: true
    currency?: true
    pamentMethod?: true
    transactionUUID?: true
    contractId?: true
    currencyLAK?: true
    currencyTHB?: true
    currencyUSD?: true
    createdBy?: true
    updatedBy?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type TransactionMaxAggregateInputType = {
    transactionId?: true
    ip?: true
    amount?: true
    remark?: true
    currency?: true
    pamentMethod?: true
    transactionUUID?: true
    contractId?: true
    currencyLAK?: true
    currencyTHB?: true
    currencyUSD?: true
    createdBy?: true
    updatedBy?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type TransactionCountAggregateInputType = {
    transactionId?: true
    ip?: true
    amount?: true
    remark?: true
    currency?: true
    pamentMethod?: true
    transactionUUID?: true
    contractId?: true
    currencyLAK?: true
    currencyTHB?: true
    currencyUSD?: true
    createdBy?: true
    updatedBy?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
    _all?: true
  }

  export type TransactionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which transaction to aggregate.
     */
    where?: transactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of transactions to fetch.
     */
    orderBy?: transactionOrderByWithRelationInput | transactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: transactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` transactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned transactions
    **/
    _count?: true | TransactionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TransactionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TransactionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TransactionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TransactionMaxAggregateInputType
  }

  export type GetTransactionAggregateType<T extends TransactionAggregateArgs> = {
        [P in keyof T & keyof AggregateTransaction]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTransaction[P]>
      : GetScalarType<T[P], AggregateTransaction[P]>
  }




  export type transactionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: transactionWhereInput
    orderBy?: transactionOrderByWithAggregationInput | transactionOrderByWithAggregationInput[]
    by: TransactionScalarFieldEnum[] | TransactionScalarFieldEnum
    having?: transactionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TransactionCountAggregateInputType | true
    _avg?: TransactionAvgAggregateInputType
    _sum?: TransactionSumAggregateInputType
    _min?: TransactionMinAggregateInputType
    _max?: TransactionMaxAggregateInputType
  }

  export type TransactionGroupByOutputType = {
    transactionId: number
    ip: string
    amount: number
    remark: string | null
    currency: string
    pamentMethod: string
    transactionUUID: string | null
    contractId: number
    currencyLAK: number
    currencyTHB: number
    currencyUSD: number
    createdBy: number | null
    updatedBy: number | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
    _count: TransactionCountAggregateOutputType | null
    _avg: TransactionAvgAggregateOutputType | null
    _sum: TransactionSumAggregateOutputType | null
    _min: TransactionMinAggregateOutputType | null
    _max: TransactionMaxAggregateOutputType | null
  }

  type GetTransactionGroupByPayload<T extends transactionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TransactionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TransactionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TransactionGroupByOutputType[P]>
            : GetScalarType<T[P], TransactionGroupByOutputType[P]>
        }
      >
    >


  export type transactionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    transactionId?: boolean
    ip?: boolean
    amount?: boolean
    remark?: boolean
    currency?: boolean
    pamentMethod?: boolean
    transactionUUID?: boolean
    contractId?: boolean
    currencyLAK?: boolean
    currencyTHB?: boolean
    currencyUSD?: boolean
    createdBy?: boolean
    updatedBy?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
  }, ExtArgs["result"]["transaction"]>


  export type transactionSelectScalar = {
    transactionId?: boolean
    ip?: boolean
    amount?: boolean
    remark?: boolean
    currency?: boolean
    pamentMethod?: boolean
    transactionUUID?: boolean
    contractId?: boolean
    currencyLAK?: boolean
    currencyTHB?: boolean
    currencyUSD?: boolean
    createdBy?: boolean
    updatedBy?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
  }


  export type $transactionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "transaction"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      transactionId: number
      ip: string
      amount: number
      remark: string | null
      currency: string
      pamentMethod: string
      transactionUUID: string | null
      contractId: number
      currencyLAK: number
      currencyTHB: number
      currencyUSD: number
      createdBy: number | null
      updatedBy: number | null
      createdAt: Date | null
      updatedAt: Date | null
      deletedAt: Date | null
    }, ExtArgs["result"]["transaction"]>
    composites: {}
  }

  type transactionGetPayload<S extends boolean | null | undefined | transactionDefaultArgs> = $Result.GetResult<Prisma.$transactionPayload, S>

  type transactionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<transactionFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: TransactionCountAggregateInputType | true
    }

  export interface transactionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['transaction'], meta: { name: 'transaction' } }
    /**
     * Find zero or one Transaction that matches the filter.
     * @param {transactionFindUniqueArgs} args - Arguments to find a Transaction
     * @example
     * // Get one Transaction
     * const transaction = await prisma.transaction.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends transactionFindUniqueArgs>(args: SelectSubset<T, transactionFindUniqueArgs<ExtArgs>>): Prisma__transactionClient<$Result.GetResult<Prisma.$transactionPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Transaction that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {transactionFindUniqueOrThrowArgs} args - Arguments to find a Transaction
     * @example
     * // Get one Transaction
     * const transaction = await prisma.transaction.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends transactionFindUniqueOrThrowArgs>(args: SelectSubset<T, transactionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__transactionClient<$Result.GetResult<Prisma.$transactionPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Transaction that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {transactionFindFirstArgs} args - Arguments to find a Transaction
     * @example
     * // Get one Transaction
     * const transaction = await prisma.transaction.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends transactionFindFirstArgs>(args?: SelectSubset<T, transactionFindFirstArgs<ExtArgs>>): Prisma__transactionClient<$Result.GetResult<Prisma.$transactionPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Transaction that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {transactionFindFirstOrThrowArgs} args - Arguments to find a Transaction
     * @example
     * // Get one Transaction
     * const transaction = await prisma.transaction.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends transactionFindFirstOrThrowArgs>(args?: SelectSubset<T, transactionFindFirstOrThrowArgs<ExtArgs>>): Prisma__transactionClient<$Result.GetResult<Prisma.$transactionPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Transactions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {transactionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Transactions
     * const transactions = await prisma.transaction.findMany()
     * 
     * // Get first 10 Transactions
     * const transactions = await prisma.transaction.findMany({ take: 10 })
     * 
     * // Only select the `transactionId`
     * const transactionWithTransactionIdOnly = await prisma.transaction.findMany({ select: { transactionId: true } })
     * 
     */
    findMany<T extends transactionFindManyArgs>(args?: SelectSubset<T, transactionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$transactionPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Transaction.
     * @param {transactionCreateArgs} args - Arguments to create a Transaction.
     * @example
     * // Create one Transaction
     * const Transaction = await prisma.transaction.create({
     *   data: {
     *     // ... data to create a Transaction
     *   }
     * })
     * 
     */
    create<T extends transactionCreateArgs>(args: SelectSubset<T, transactionCreateArgs<ExtArgs>>): Prisma__transactionClient<$Result.GetResult<Prisma.$transactionPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Transactions.
     * @param {transactionCreateManyArgs} args - Arguments to create many Transactions.
     * @example
     * // Create many Transactions
     * const transaction = await prisma.transaction.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends transactionCreateManyArgs>(args?: SelectSubset<T, transactionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Transaction.
     * @param {transactionDeleteArgs} args - Arguments to delete one Transaction.
     * @example
     * // Delete one Transaction
     * const Transaction = await prisma.transaction.delete({
     *   where: {
     *     // ... filter to delete one Transaction
     *   }
     * })
     * 
     */
    delete<T extends transactionDeleteArgs>(args: SelectSubset<T, transactionDeleteArgs<ExtArgs>>): Prisma__transactionClient<$Result.GetResult<Prisma.$transactionPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Transaction.
     * @param {transactionUpdateArgs} args - Arguments to update one Transaction.
     * @example
     * // Update one Transaction
     * const transaction = await prisma.transaction.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends transactionUpdateArgs>(args: SelectSubset<T, transactionUpdateArgs<ExtArgs>>): Prisma__transactionClient<$Result.GetResult<Prisma.$transactionPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Transactions.
     * @param {transactionDeleteManyArgs} args - Arguments to filter Transactions to delete.
     * @example
     * // Delete a few Transactions
     * const { count } = await prisma.transaction.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends transactionDeleteManyArgs>(args?: SelectSubset<T, transactionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Transactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {transactionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Transactions
     * const transaction = await prisma.transaction.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends transactionUpdateManyArgs>(args: SelectSubset<T, transactionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Transaction.
     * @param {transactionUpsertArgs} args - Arguments to update or create a Transaction.
     * @example
     * // Update or create a Transaction
     * const transaction = await prisma.transaction.upsert({
     *   create: {
     *     // ... data to create a Transaction
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Transaction we want to update
     *   }
     * })
     */
    upsert<T extends transactionUpsertArgs>(args: SelectSubset<T, transactionUpsertArgs<ExtArgs>>): Prisma__transactionClient<$Result.GetResult<Prisma.$transactionPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Transactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {transactionCountArgs} args - Arguments to filter Transactions to count.
     * @example
     * // Count the number of Transactions
     * const count = await prisma.transaction.count({
     *   where: {
     *     // ... the filter for the Transactions we want to count
     *   }
     * })
    **/
    count<T extends transactionCountArgs>(
      args?: Subset<T, transactionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TransactionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Transaction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TransactionAggregateArgs>(args: Subset<T, TransactionAggregateArgs>): Prisma.PrismaPromise<GetTransactionAggregateType<T>>

    /**
     * Group by Transaction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {transactionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends transactionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: transactionGroupByArgs['orderBy'] }
        : { orderBy?: transactionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, transactionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTransactionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the transaction model
   */
  readonly fields: transactionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for transaction.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__transactionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the transaction model
   */ 
  interface transactionFieldRefs {
    readonly transactionId: FieldRef<"transaction", 'Int'>
    readonly ip: FieldRef<"transaction", 'String'>
    readonly amount: FieldRef<"transaction", 'Float'>
    readonly remark: FieldRef<"transaction", 'String'>
    readonly currency: FieldRef<"transaction", 'String'>
    readonly pamentMethod: FieldRef<"transaction", 'String'>
    readonly transactionUUID: FieldRef<"transaction", 'String'>
    readonly contractId: FieldRef<"transaction", 'Int'>
    readonly currencyLAK: FieldRef<"transaction", 'Float'>
    readonly currencyTHB: FieldRef<"transaction", 'Float'>
    readonly currencyUSD: FieldRef<"transaction", 'Float'>
    readonly createdBy: FieldRef<"transaction", 'Int'>
    readonly updatedBy: FieldRef<"transaction", 'Int'>
    readonly createdAt: FieldRef<"transaction", 'DateTime'>
    readonly updatedAt: FieldRef<"transaction", 'DateTime'>
    readonly deletedAt: FieldRef<"transaction", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * transaction findUnique
   */
  export type transactionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transaction
     */
    select?: transactionSelect<ExtArgs> | null
    /**
     * Filter, which transaction to fetch.
     */
    where: transactionWhereUniqueInput
  }

  /**
   * transaction findUniqueOrThrow
   */
  export type transactionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transaction
     */
    select?: transactionSelect<ExtArgs> | null
    /**
     * Filter, which transaction to fetch.
     */
    where: transactionWhereUniqueInput
  }

  /**
   * transaction findFirst
   */
  export type transactionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transaction
     */
    select?: transactionSelect<ExtArgs> | null
    /**
     * Filter, which transaction to fetch.
     */
    where?: transactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of transactions to fetch.
     */
    orderBy?: transactionOrderByWithRelationInput | transactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for transactions.
     */
    cursor?: transactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` transactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of transactions.
     */
    distinct?: TransactionScalarFieldEnum | TransactionScalarFieldEnum[]
  }

  /**
   * transaction findFirstOrThrow
   */
  export type transactionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transaction
     */
    select?: transactionSelect<ExtArgs> | null
    /**
     * Filter, which transaction to fetch.
     */
    where?: transactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of transactions to fetch.
     */
    orderBy?: transactionOrderByWithRelationInput | transactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for transactions.
     */
    cursor?: transactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` transactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of transactions.
     */
    distinct?: TransactionScalarFieldEnum | TransactionScalarFieldEnum[]
  }

  /**
   * transaction findMany
   */
  export type transactionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transaction
     */
    select?: transactionSelect<ExtArgs> | null
    /**
     * Filter, which transactions to fetch.
     */
    where?: transactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of transactions to fetch.
     */
    orderBy?: transactionOrderByWithRelationInput | transactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing transactions.
     */
    cursor?: transactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` transactions.
     */
    skip?: number
    distinct?: TransactionScalarFieldEnum | TransactionScalarFieldEnum[]
  }

  /**
   * transaction create
   */
  export type transactionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transaction
     */
    select?: transactionSelect<ExtArgs> | null
    /**
     * The data needed to create a transaction.
     */
    data: XOR<transactionCreateInput, transactionUncheckedCreateInput>
  }

  /**
   * transaction createMany
   */
  export type transactionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many transactions.
     */
    data: transactionCreateManyInput | transactionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * transaction update
   */
  export type transactionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transaction
     */
    select?: transactionSelect<ExtArgs> | null
    /**
     * The data needed to update a transaction.
     */
    data: XOR<transactionUpdateInput, transactionUncheckedUpdateInput>
    /**
     * Choose, which transaction to update.
     */
    where: transactionWhereUniqueInput
  }

  /**
   * transaction updateMany
   */
  export type transactionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update transactions.
     */
    data: XOR<transactionUpdateManyMutationInput, transactionUncheckedUpdateManyInput>
    /**
     * Filter which transactions to update
     */
    where?: transactionWhereInput
  }

  /**
   * transaction upsert
   */
  export type transactionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transaction
     */
    select?: transactionSelect<ExtArgs> | null
    /**
     * The filter to search for the transaction to update in case it exists.
     */
    where: transactionWhereUniqueInput
    /**
     * In case the transaction found by the `where` argument doesn't exist, create a new transaction with this data.
     */
    create: XOR<transactionCreateInput, transactionUncheckedCreateInput>
    /**
     * In case the transaction was found with the provided `where` argument, update it with this data.
     */
    update: XOR<transactionUpdateInput, transactionUncheckedUpdateInput>
  }

  /**
   * transaction delete
   */
  export type transactionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transaction
     */
    select?: transactionSelect<ExtArgs> | null
    /**
     * Filter which transaction to delete.
     */
    where: transactionWhereUniqueInput
  }

  /**
   * transaction deleteMany
   */
  export type transactionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which transactions to delete
     */
    where?: transactionWhereInput
  }

  /**
   * transaction without action
   */
  export type transactionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transaction
     */
    select?: transactionSelect<ExtArgs> | null
  }


  /**
   * Model users
   */

  export type AggregateUsers = {
    _count: UsersCountAggregateOutputType | null
    _avg: UsersAvgAggregateOutputType | null
    _sum: UsersSumAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  export type UsersAvgAggregateOutputType = {
    userId: number | null
    companyId: number | null
  }

  export type UsersSumAggregateOutputType = {
    userId: number | null
    companyId: number | null
  }

  export type UsersMinAggregateOutputType = {
    userId: number | null
    companyId: number | null
    fullName: string | null
    lastName: string | null
    tel: string | null
    password: string | null
    role: string | null
    userStatus: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UsersMaxAggregateOutputType = {
    userId: number | null
    companyId: number | null
    fullName: string | null
    lastName: string | null
    tel: string | null
    password: string | null
    role: string | null
    userStatus: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UsersCountAggregateOutputType = {
    userId: number
    companyId: number
    fullName: number
    lastName: number
    tel: number
    password: number
    role: number
    userStatus: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UsersAvgAggregateInputType = {
    userId?: true
    companyId?: true
  }

  export type UsersSumAggregateInputType = {
    userId?: true
    companyId?: true
  }

  export type UsersMinAggregateInputType = {
    userId?: true
    companyId?: true
    fullName?: true
    lastName?: true
    tel?: true
    password?: true
    role?: true
    userStatus?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UsersMaxAggregateInputType = {
    userId?: true
    companyId?: true
    fullName?: true
    lastName?: true
    tel?: true
    password?: true
    role?: true
    userStatus?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UsersCountAggregateInputType = {
    userId?: true
    companyId?: true
    fullName?: true
    lastName?: true
    tel?: true
    password?: true
    role?: true
    userStatus?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UsersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to aggregate.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned users
    **/
    _count?: true | UsersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UsersAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UsersSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsersMaxAggregateInputType
  }

  export type GetUsersAggregateType<T extends UsersAggregateArgs> = {
        [P in keyof T & keyof AggregateUsers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsers[P]>
      : GetScalarType<T[P], AggregateUsers[P]>
  }




  export type usersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: usersWhereInput
    orderBy?: usersOrderByWithAggregationInput | usersOrderByWithAggregationInput[]
    by: UsersScalarFieldEnum[] | UsersScalarFieldEnum
    having?: usersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsersCountAggregateInputType | true
    _avg?: UsersAvgAggregateInputType
    _sum?: UsersSumAggregateInputType
    _min?: UsersMinAggregateInputType
    _max?: UsersMaxAggregateInputType
  }

  export type UsersGroupByOutputType = {
    userId: number
    companyId: number | null
    fullName: string
    lastName: string
    tel: string
    password: string
    role: string | null
    userStatus: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
    _count: UsersCountAggregateOutputType | null
    _avg: UsersAvgAggregateOutputType | null
    _sum: UsersSumAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  type GetUsersGroupByPayload<T extends usersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsersGroupByOutputType[P]>
            : GetScalarType<T[P], UsersGroupByOutputType[P]>
        }
      >
    >


  export type usersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    companyId?: boolean
    fullName?: boolean
    lastName?: boolean
    tel?: boolean
    password?: boolean
    role?: boolean
    userStatus?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["users"]>


  export type usersSelectScalar = {
    userId?: boolean
    companyId?: boolean
    fullName?: boolean
    lastName?: boolean
    tel?: boolean
    password?: boolean
    role?: boolean
    userStatus?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }


  export type $usersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "users"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      userId: number
      companyId: number | null
      fullName: string
      lastName: string
      tel: string
      password: string
      role: string | null
      userStatus: boolean | null
      createdAt: Date | null
      updatedAt: Date | null
    }, ExtArgs["result"]["users"]>
    composites: {}
  }

  type usersGetPayload<S extends boolean | null | undefined | usersDefaultArgs> = $Result.GetResult<Prisma.$usersPayload, S>

  type usersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<usersFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: UsersCountAggregateInputType | true
    }

  export interface usersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['users'], meta: { name: 'users' } }
    /**
     * Find zero or one Users that matches the filter.
     * @param {usersFindUniqueArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends usersFindUniqueArgs>(args: SelectSubset<T, usersFindUniqueArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Users that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {usersFindUniqueOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends usersFindUniqueOrThrowArgs>(args: SelectSubset<T, usersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindFirstArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends usersFindFirstArgs>(args?: SelectSubset<T, usersFindFirstArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Users that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindFirstOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends usersFindFirstOrThrowArgs>(args?: SelectSubset<T, usersFindFirstOrThrowArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.users.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.users.findMany({ take: 10 })
     * 
     * // Only select the `userId`
     * const usersWithUserIdOnly = await prisma.users.findMany({ select: { userId: true } })
     * 
     */
    findMany<T extends usersFindManyArgs>(args?: SelectSubset<T, usersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Users.
     * @param {usersCreateArgs} args - Arguments to create a Users.
     * @example
     * // Create one Users
     * const Users = await prisma.users.create({
     *   data: {
     *     // ... data to create a Users
     *   }
     * })
     * 
     */
    create<T extends usersCreateArgs>(args: SelectSubset<T, usersCreateArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Users.
     * @param {usersCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends usersCreateManyArgs>(args?: SelectSubset<T, usersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Users.
     * @param {usersDeleteArgs} args - Arguments to delete one Users.
     * @example
     * // Delete one Users
     * const Users = await prisma.users.delete({
     *   where: {
     *     // ... filter to delete one Users
     *   }
     * })
     * 
     */
    delete<T extends usersDeleteArgs>(args: SelectSubset<T, usersDeleteArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Users.
     * @param {usersUpdateArgs} args - Arguments to update one Users.
     * @example
     * // Update one Users
     * const users = await prisma.users.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends usersUpdateArgs>(args: SelectSubset<T, usersUpdateArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Users.
     * @param {usersDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.users.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends usersDeleteManyArgs>(args?: SelectSubset<T, usersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends usersUpdateManyArgs>(args: SelectSubset<T, usersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Users.
     * @param {usersUpsertArgs} args - Arguments to update or create a Users.
     * @example
     * // Update or create a Users
     * const users = await prisma.users.upsert({
     *   create: {
     *     // ... data to create a Users
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Users we want to update
     *   }
     * })
     */
    upsert<T extends usersUpsertArgs>(args: SelectSubset<T, usersUpsertArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.users.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends usersCountArgs>(
      args?: Subset<T, usersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UsersAggregateArgs>(args: Subset<T, UsersAggregateArgs>): Prisma.PrismaPromise<GetUsersAggregateType<T>>

    /**
     * Group by Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends usersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: usersGroupByArgs['orderBy'] }
        : { orderBy?: usersGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, usersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the users model
   */
  readonly fields: usersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for users.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__usersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the users model
   */ 
  interface usersFieldRefs {
    readonly userId: FieldRef<"users", 'Int'>
    readonly companyId: FieldRef<"users", 'Int'>
    readonly fullName: FieldRef<"users", 'String'>
    readonly lastName: FieldRef<"users", 'String'>
    readonly tel: FieldRef<"users", 'String'>
    readonly password: FieldRef<"users", 'String'>
    readonly role: FieldRef<"users", 'String'>
    readonly userStatus: FieldRef<"users", 'Boolean'>
    readonly createdAt: FieldRef<"users", 'DateTime'>
    readonly updatedAt: FieldRef<"users", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * users findUnique
   */
  export type usersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users findUniqueOrThrow
   */
  export type usersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users findFirst
   */
  export type usersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users findFirstOrThrow
   */
  export type usersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users findMany
   */
  export type usersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users create
   */
  export type usersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * The data needed to create a users.
     */
    data: XOR<usersCreateInput, usersUncheckedCreateInput>
  }

  /**
   * users createMany
   */
  export type usersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many users.
     */
    data: usersCreateManyInput | usersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * users update
   */
  export type usersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * The data needed to update a users.
     */
    data: XOR<usersUpdateInput, usersUncheckedUpdateInput>
    /**
     * Choose, which users to update.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users updateMany
   */
  export type usersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update users.
     */
    data: XOR<usersUpdateManyMutationInput, usersUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: usersWhereInput
  }

  /**
   * users upsert
   */
  export type usersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * The filter to search for the users to update in case it exists.
     */
    where: usersWhereUniqueInput
    /**
     * In case the users found by the `where` argument doesn't exist, create a new users with this data.
     */
    create: XOR<usersCreateInput, usersUncheckedCreateInput>
    /**
     * In case the users was found with the provided `where` argument, update it with this data.
     */
    update: XOR<usersUpdateInput, usersUncheckedUpdateInput>
  }

  /**
   * users delete
   */
  export type usersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Filter which users to delete.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users deleteMany
   */
  export type usersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to delete
     */
    where?: usersWhereInput
  }

  /**
   * users without action
   */
  export type usersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const CompanyScalarFieldEnum: {
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

  export type CompanyScalarFieldEnum = (typeof CompanyScalarFieldEnum)[keyof typeof CompanyScalarFieldEnum]


  export const ContractsScalarFieldEnum: {
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

  export type ContractsScalarFieldEnum = (typeof ContractsScalarFieldEnum)[keyof typeof ContractsScalarFieldEnum]


  export const ExchangeScalarFieldEnum: {
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

  export type ExchangeScalarFieldEnum = (typeof ExchangeScalarFieldEnum)[keyof typeof ExchangeScalarFieldEnum]


  export const InvoiceScalarFieldEnum: {
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

  export type InvoiceScalarFieldEnum = (typeof InvoiceScalarFieldEnum)[keyof typeof InvoiceScalarFieldEnum]


  export const LogsScalarFieldEnum: {
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

  export type LogsScalarFieldEnum = (typeof LogsScalarFieldEnum)[keyof typeof LogsScalarFieldEnum]


  export const NewsScalarFieldEnum: {
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

  export type NewsScalarFieldEnum = (typeof NewsScalarFieldEnum)[keyof typeof NewsScalarFieldEnum]


  export const OtpScalarFieldEnum: {
    otpId: 'otpId',
    tel: 'tel',
    code: 'code',
    confirm: 'confirm',
    status: 'status',
    sentDate: 'sentDate',
    retry: 'retry',
    createdAt: 'createdAt'
  };

  export type OtpScalarFieldEnum = (typeof OtpScalarFieldEnum)[keyof typeof OtpScalarFieldEnum]


  export const Payment_methodScalarFieldEnum: {
    id: 'id',
    companyId: 'companyId',
    accountName: 'accountName',
    accountNumber: 'accountNumber',
    qrPath: 'qrPath',
    deletedAt: 'deletedAt',
    deletedBy: 'deletedBy'
  };

  export type Payment_methodScalarFieldEnum = (typeof Payment_methodScalarFieldEnum)[keyof typeof Payment_methodScalarFieldEnum]


  export const ProjectsScalarFieldEnum: {
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

  export type ProjectsScalarFieldEnum = (typeof ProjectsScalarFieldEnum)[keyof typeof ProjectsScalarFieldEnum]


  export const StoresScalarFieldEnum: {
    id: 'id',
    name: 'name',
    opening_time: 'opening_time',
    closing_time: 'closing_time',
    closing_id: 'closing_id'
  };

  export type StoresScalarFieldEnum = (typeof StoresScalarFieldEnum)[keyof typeof StoresScalarFieldEnum]


  export const TransactionScalarFieldEnum: {
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

  export type TransactionScalarFieldEnum = (typeof TransactionScalarFieldEnum)[keyof typeof TransactionScalarFieldEnum]


  export const UsersScalarFieldEnum: {
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

  export type UsersScalarFieldEnum = (typeof UsersScalarFieldEnum)[keyof typeof UsersScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type companyWhereInput = {
    AND?: companyWhereInput | companyWhereInput[]
    OR?: companyWhereInput[]
    NOT?: companyWhereInput | companyWhereInput[]
    companyId?: IntFilter<"company"> | number
    companyName?: StringNullableFilter<"company"> | string | null
    logoPath?: StringFilter<"company"> | string
    financeTel?: StringFilter<"company"> | string
    fax?: StringNullableFilter<"company"> | string | null
    tel?: StringFilter<"company"> | string
    email?: StringNullableFilter<"company"> | string | null
    whatsapp?: StringNullableFilter<"company"> | string | null
    address?: StringFilter<"company"> | string
    createdBy?: IntFilter<"company"> | number
    updatedBy?: IntNullableFilter<"company"> | number | null
    companyStatus?: BoolNullableFilter<"company"> | boolean | null
    createdAt?: DateTimeNullableFilter<"company"> | Date | string | null
    updatedAt?: DateTimeNullableFilter<"company"> | Date | string | null
    deletedAt?: DateTimeNullableFilter<"company"> | Date | string | null
    deletedBy?: IntNullableFilter<"company"> | number | null
  }

  export type companyOrderByWithRelationInput = {
    companyId?: SortOrder
    companyName?: SortOrderInput | SortOrder
    logoPath?: SortOrder
    financeTel?: SortOrder
    fax?: SortOrderInput | SortOrder
    tel?: SortOrder
    email?: SortOrderInput | SortOrder
    whatsapp?: SortOrderInput | SortOrder
    address?: SortOrder
    createdBy?: SortOrder
    updatedBy?: SortOrderInput | SortOrder
    companyStatus?: SortOrderInput | SortOrder
    createdAt?: SortOrderInput | SortOrder
    updatedAt?: SortOrderInput | SortOrder
    deletedAt?: SortOrderInput | SortOrder
    deletedBy?: SortOrderInput | SortOrder
  }

  export type companyWhereUniqueInput = Prisma.AtLeast<{
    companyId?: number
    companyName?: string
    updatedAt?: Date | string
    AND?: companyWhereInput | companyWhereInput[]
    OR?: companyWhereInput[]
    NOT?: companyWhereInput | companyWhereInput[]
    logoPath?: StringFilter<"company"> | string
    financeTel?: StringFilter<"company"> | string
    fax?: StringNullableFilter<"company"> | string | null
    tel?: StringFilter<"company"> | string
    email?: StringNullableFilter<"company"> | string | null
    whatsapp?: StringNullableFilter<"company"> | string | null
    address?: StringFilter<"company"> | string
    createdBy?: IntFilter<"company"> | number
    updatedBy?: IntNullableFilter<"company"> | number | null
    companyStatus?: BoolNullableFilter<"company"> | boolean | null
    createdAt?: DateTimeNullableFilter<"company"> | Date | string | null
    deletedAt?: DateTimeNullableFilter<"company"> | Date | string | null
    deletedBy?: IntNullableFilter<"company"> | number | null
  }, "companyId" | "companyName" | "updatedAt">

  export type companyOrderByWithAggregationInput = {
    companyId?: SortOrder
    companyName?: SortOrderInput | SortOrder
    logoPath?: SortOrder
    financeTel?: SortOrder
    fax?: SortOrderInput | SortOrder
    tel?: SortOrder
    email?: SortOrderInput | SortOrder
    whatsapp?: SortOrderInput | SortOrder
    address?: SortOrder
    createdBy?: SortOrder
    updatedBy?: SortOrderInput | SortOrder
    companyStatus?: SortOrderInput | SortOrder
    createdAt?: SortOrderInput | SortOrder
    updatedAt?: SortOrderInput | SortOrder
    deletedAt?: SortOrderInput | SortOrder
    deletedBy?: SortOrderInput | SortOrder
    _count?: companyCountOrderByAggregateInput
    _avg?: companyAvgOrderByAggregateInput
    _max?: companyMaxOrderByAggregateInput
    _min?: companyMinOrderByAggregateInput
    _sum?: companySumOrderByAggregateInput
  }

  export type companyScalarWhereWithAggregatesInput = {
    AND?: companyScalarWhereWithAggregatesInput | companyScalarWhereWithAggregatesInput[]
    OR?: companyScalarWhereWithAggregatesInput[]
    NOT?: companyScalarWhereWithAggregatesInput | companyScalarWhereWithAggregatesInput[]
    companyId?: IntWithAggregatesFilter<"company"> | number
    companyName?: StringNullableWithAggregatesFilter<"company"> | string | null
    logoPath?: StringWithAggregatesFilter<"company"> | string
    financeTel?: StringWithAggregatesFilter<"company"> | string
    fax?: StringNullableWithAggregatesFilter<"company"> | string | null
    tel?: StringWithAggregatesFilter<"company"> | string
    email?: StringNullableWithAggregatesFilter<"company"> | string | null
    whatsapp?: StringNullableWithAggregatesFilter<"company"> | string | null
    address?: StringWithAggregatesFilter<"company"> | string
    createdBy?: IntWithAggregatesFilter<"company"> | number
    updatedBy?: IntNullableWithAggregatesFilter<"company"> | number | null
    companyStatus?: BoolNullableWithAggregatesFilter<"company"> | boolean | null
    createdAt?: DateTimeNullableWithAggregatesFilter<"company"> | Date | string | null
    updatedAt?: DateTimeNullableWithAggregatesFilter<"company"> | Date | string | null
    deletedAt?: DateTimeNullableWithAggregatesFilter<"company"> | Date | string | null
    deletedBy?: IntNullableWithAggregatesFilter<"company"> | number | null
  }

  export type contractsWhereInput = {
    AND?: contractsWhereInput | contractsWhereInput[]
    OR?: contractsWhereInput[]
    NOT?: contractsWhereInput | contractsWhereInput[]
    contractId?: IntFilter<"contracts"> | number
    companyId?: IntFilter<"contracts"> | number
    docId?: StringFilter<"contracts"> | string
    createdBy?: IntFilter<"contracts"> | number
    updatedBy?: IntNullableFilter<"contracts"> | number | null
    projectId?: IntFilter<"contracts"> | number
    price?: FloatFilter<"contracts"> | number
    totalPrice?: FloatFilter<"contracts"> | number
    currency?: StringNullableFilter<"contracts"> | string | null
    contractStatus?: StringNullableFilter<"contracts"> | string | null
    area?: FloatFilter<"contracts"> | number
    numberOfInstallment?: IntNullableFilter<"contracts"> | number | null
    payDay?: DateTimeFilter<"contracts"> | Date | string
    modeOfPayment?: StringNullableFilter<"contracts"> | string | null
    payInAdvance?: FloatNullableFilter<"contracts"> | number | null
    customerIdOne?: IntFilter<"contracts"> | number
    customerIdTwo?: IntNullableFilter<"contracts"> | number | null
    createdAt?: DateTimeNullableFilter<"contracts"> | Date | string | null
    updatedAt?: DateTimeNullableFilter<"contracts"> | Date | string | null
    cancelAt?: DateTimeNullableFilter<"contracts"> | Date | string | null
    cancelBy?: IntNullableFilter<"contracts"> | number | null
    reason?: StringNullableFilter<"contracts"> | string | null
    lastInvoice?: IntNullableFilter<"contracts"> | number | null
    deletedAt?: DateTimeNullableFilter<"contracts"> | Date | string | null
    deletedBy?: IntNullableFilter<"contracts"> | number | null
  }

  export type contractsOrderByWithRelationInput = {
    contractId?: SortOrder
    companyId?: SortOrder
    docId?: SortOrder
    createdBy?: SortOrder
    updatedBy?: SortOrderInput | SortOrder
    projectId?: SortOrder
    price?: SortOrder
    totalPrice?: SortOrder
    currency?: SortOrderInput | SortOrder
    contractStatus?: SortOrderInput | SortOrder
    area?: SortOrder
    numberOfInstallment?: SortOrderInput | SortOrder
    payDay?: SortOrder
    modeOfPayment?: SortOrderInput | SortOrder
    payInAdvance?: SortOrderInput | SortOrder
    customerIdOne?: SortOrder
    customerIdTwo?: SortOrderInput | SortOrder
    createdAt?: SortOrderInput | SortOrder
    updatedAt?: SortOrderInput | SortOrder
    cancelAt?: SortOrderInput | SortOrder
    cancelBy?: SortOrderInput | SortOrder
    reason?: SortOrderInput | SortOrder
    lastInvoice?: SortOrderInput | SortOrder
    deletedAt?: SortOrderInput | SortOrder
    deletedBy?: SortOrderInput | SortOrder
  }

  export type contractsWhereUniqueInput = Prisma.AtLeast<{
    contractId?: number
    AND?: contractsWhereInput | contractsWhereInput[]
    OR?: contractsWhereInput[]
    NOT?: contractsWhereInput | contractsWhereInput[]
    companyId?: IntFilter<"contracts"> | number
    docId?: StringFilter<"contracts"> | string
    createdBy?: IntFilter<"contracts"> | number
    updatedBy?: IntNullableFilter<"contracts"> | number | null
    projectId?: IntFilter<"contracts"> | number
    price?: FloatFilter<"contracts"> | number
    totalPrice?: FloatFilter<"contracts"> | number
    currency?: StringNullableFilter<"contracts"> | string | null
    contractStatus?: StringNullableFilter<"contracts"> | string | null
    area?: FloatFilter<"contracts"> | number
    numberOfInstallment?: IntNullableFilter<"contracts"> | number | null
    payDay?: DateTimeFilter<"contracts"> | Date | string
    modeOfPayment?: StringNullableFilter<"contracts"> | string | null
    payInAdvance?: FloatNullableFilter<"contracts"> | number | null
    customerIdOne?: IntFilter<"contracts"> | number
    customerIdTwo?: IntNullableFilter<"contracts"> | number | null
    createdAt?: DateTimeNullableFilter<"contracts"> | Date | string | null
    updatedAt?: DateTimeNullableFilter<"contracts"> | Date | string | null
    cancelAt?: DateTimeNullableFilter<"contracts"> | Date | string | null
    cancelBy?: IntNullableFilter<"contracts"> | number | null
    reason?: StringNullableFilter<"contracts"> | string | null
    lastInvoice?: IntNullableFilter<"contracts"> | number | null
    deletedAt?: DateTimeNullableFilter<"contracts"> | Date | string | null
    deletedBy?: IntNullableFilter<"contracts"> | number | null
  }, "contractId">

  export type contractsOrderByWithAggregationInput = {
    contractId?: SortOrder
    companyId?: SortOrder
    docId?: SortOrder
    createdBy?: SortOrder
    updatedBy?: SortOrderInput | SortOrder
    projectId?: SortOrder
    price?: SortOrder
    totalPrice?: SortOrder
    currency?: SortOrderInput | SortOrder
    contractStatus?: SortOrderInput | SortOrder
    area?: SortOrder
    numberOfInstallment?: SortOrderInput | SortOrder
    payDay?: SortOrder
    modeOfPayment?: SortOrderInput | SortOrder
    payInAdvance?: SortOrderInput | SortOrder
    customerIdOne?: SortOrder
    customerIdTwo?: SortOrderInput | SortOrder
    createdAt?: SortOrderInput | SortOrder
    updatedAt?: SortOrderInput | SortOrder
    cancelAt?: SortOrderInput | SortOrder
    cancelBy?: SortOrderInput | SortOrder
    reason?: SortOrderInput | SortOrder
    lastInvoice?: SortOrderInput | SortOrder
    deletedAt?: SortOrderInput | SortOrder
    deletedBy?: SortOrderInput | SortOrder
    _count?: contractsCountOrderByAggregateInput
    _avg?: contractsAvgOrderByAggregateInput
    _max?: contractsMaxOrderByAggregateInput
    _min?: contractsMinOrderByAggregateInput
    _sum?: contractsSumOrderByAggregateInput
  }

  export type contractsScalarWhereWithAggregatesInput = {
    AND?: contractsScalarWhereWithAggregatesInput | contractsScalarWhereWithAggregatesInput[]
    OR?: contractsScalarWhereWithAggregatesInput[]
    NOT?: contractsScalarWhereWithAggregatesInput | contractsScalarWhereWithAggregatesInput[]
    contractId?: IntWithAggregatesFilter<"contracts"> | number
    companyId?: IntWithAggregatesFilter<"contracts"> | number
    docId?: StringWithAggregatesFilter<"contracts"> | string
    createdBy?: IntWithAggregatesFilter<"contracts"> | number
    updatedBy?: IntNullableWithAggregatesFilter<"contracts"> | number | null
    projectId?: IntWithAggregatesFilter<"contracts"> | number
    price?: FloatWithAggregatesFilter<"contracts"> | number
    totalPrice?: FloatWithAggregatesFilter<"contracts"> | number
    currency?: StringNullableWithAggregatesFilter<"contracts"> | string | null
    contractStatus?: StringNullableWithAggregatesFilter<"contracts"> | string | null
    area?: FloatWithAggregatesFilter<"contracts"> | number
    numberOfInstallment?: IntNullableWithAggregatesFilter<"contracts"> | number | null
    payDay?: DateTimeWithAggregatesFilter<"contracts"> | Date | string
    modeOfPayment?: StringNullableWithAggregatesFilter<"contracts"> | string | null
    payInAdvance?: FloatNullableWithAggregatesFilter<"contracts"> | number | null
    customerIdOne?: IntWithAggregatesFilter<"contracts"> | number
    customerIdTwo?: IntNullableWithAggregatesFilter<"contracts"> | number | null
    createdAt?: DateTimeNullableWithAggregatesFilter<"contracts"> | Date | string | null
    updatedAt?: DateTimeNullableWithAggregatesFilter<"contracts"> | Date | string | null
    cancelAt?: DateTimeNullableWithAggregatesFilter<"contracts"> | Date | string | null
    cancelBy?: IntNullableWithAggregatesFilter<"contracts"> | number | null
    reason?: StringNullableWithAggregatesFilter<"contracts"> | string | null
    lastInvoice?: IntNullableWithAggregatesFilter<"contracts"> | number | null
    deletedAt?: DateTimeNullableWithAggregatesFilter<"contracts"> | Date | string | null
    deletedBy?: IntNullableWithAggregatesFilter<"contracts"> | number | null
  }

  export type exchangeWhereInput = {
    AND?: exchangeWhereInput | exchangeWhereInput[]
    OR?: exchangeWhereInput[]
    NOT?: exchangeWhereInput | exchangeWhereInput[]
    exchangeId?: IntFilter<"exchange"> | number
    companyId?: IntFilter<"exchange"> | number
    thb?: FloatFilter<"exchange"> | number
    usd?: FloatFilter<"exchange"> | number
    createdBy?: IntFilter<"exchange"> | number
    updatedBy?: IntNullableFilter<"exchange"> | number | null
    createdAt?: DateTimeNullableFilter<"exchange"> | Date | string | null
    updatedAt?: DateTimeNullableFilter<"exchange"> | Date | string | null
    deletedAt?: DateTimeNullableFilter<"exchange"> | Date | string | null
    deletedBy?: IntNullableFilter<"exchange"> | number | null
  }

  export type exchangeOrderByWithRelationInput = {
    exchangeId?: SortOrder
    companyId?: SortOrder
    thb?: SortOrder
    usd?: SortOrder
    createdBy?: SortOrder
    updatedBy?: SortOrderInput | SortOrder
    createdAt?: SortOrderInput | SortOrder
    updatedAt?: SortOrderInput | SortOrder
    deletedAt?: SortOrderInput | SortOrder
    deletedBy?: SortOrderInput | SortOrder
  }

  export type exchangeWhereUniqueInput = Prisma.AtLeast<{
    exchangeId?: number
    AND?: exchangeWhereInput | exchangeWhereInput[]
    OR?: exchangeWhereInput[]
    NOT?: exchangeWhereInput | exchangeWhereInput[]
    companyId?: IntFilter<"exchange"> | number
    thb?: FloatFilter<"exchange"> | number
    usd?: FloatFilter<"exchange"> | number
    createdBy?: IntFilter<"exchange"> | number
    updatedBy?: IntNullableFilter<"exchange"> | number | null
    createdAt?: DateTimeNullableFilter<"exchange"> | Date | string | null
    updatedAt?: DateTimeNullableFilter<"exchange"> | Date | string | null
    deletedAt?: DateTimeNullableFilter<"exchange"> | Date | string | null
    deletedBy?: IntNullableFilter<"exchange"> | number | null
  }, "exchangeId">

  export type exchangeOrderByWithAggregationInput = {
    exchangeId?: SortOrder
    companyId?: SortOrder
    thb?: SortOrder
    usd?: SortOrder
    createdBy?: SortOrder
    updatedBy?: SortOrderInput | SortOrder
    createdAt?: SortOrderInput | SortOrder
    updatedAt?: SortOrderInput | SortOrder
    deletedAt?: SortOrderInput | SortOrder
    deletedBy?: SortOrderInput | SortOrder
    _count?: exchangeCountOrderByAggregateInput
    _avg?: exchangeAvgOrderByAggregateInput
    _max?: exchangeMaxOrderByAggregateInput
    _min?: exchangeMinOrderByAggregateInput
    _sum?: exchangeSumOrderByAggregateInput
  }

  export type exchangeScalarWhereWithAggregatesInput = {
    AND?: exchangeScalarWhereWithAggregatesInput | exchangeScalarWhereWithAggregatesInput[]
    OR?: exchangeScalarWhereWithAggregatesInput[]
    NOT?: exchangeScalarWhereWithAggregatesInput | exchangeScalarWhereWithAggregatesInput[]
    exchangeId?: IntWithAggregatesFilter<"exchange"> | number
    companyId?: IntWithAggregatesFilter<"exchange"> | number
    thb?: FloatWithAggregatesFilter<"exchange"> | number
    usd?: FloatWithAggregatesFilter<"exchange"> | number
    createdBy?: IntWithAggregatesFilter<"exchange"> | number
    updatedBy?: IntNullableWithAggregatesFilter<"exchange"> | number | null
    createdAt?: DateTimeNullableWithAggregatesFilter<"exchange"> | Date | string | null
    updatedAt?: DateTimeNullableWithAggregatesFilter<"exchange"> | Date | string | null
    deletedAt?: DateTimeNullableWithAggregatesFilter<"exchange"> | Date | string | null
    deletedBy?: IntNullableWithAggregatesFilter<"exchange"> | number | null
  }

  export type invoiceWhereInput = {
    AND?: invoiceWhereInput | invoiceWhereInput[]
    OR?: invoiceWhereInput[]
    NOT?: invoiceWhereInput | invoiceWhereInput[]
    invoiceId?: IntFilter<"invoice"> | number
    fines?: FloatNullableFilter<"invoice"> | number | null
    amount?: FloatFilter<"invoice"> | number
    debt?: FloatNullableFilter<"invoice"> | number | null
    contractId?: IntFilter<"invoice"> | number
    currency?: StringFilter<"invoice"> | string
    numberOfInstallment?: IntFilter<"invoice"> | number
    comment?: StringNullableFilter<"invoice"> | string | null
    monthly?: StringNullableFilter<"invoice"> | string | null
    paymentMethod?: StringNullableFilter<"invoice"> | string | null
    exchangeRate?: FloatNullableFilter<"invoice"> | number | null
    currencyExchange?: StringNullableFilter<"invoice"> | string | null
    invoiceStatus?: StringNullableFilter<"invoice"> | string | null
    billPath?: StringNullableFilter<"invoice"> | string | null
    paidDate?: DateTimeNullableFilter<"invoice"> | Date | string | null
    createdBy?: IntNullableFilter<"invoice"> | number | null
    createdAt?: DateTimeNullableFilter<"invoice"> | Date | string | null
    updatedAt?: DateTimeNullableFilter<"invoice"> | Date | string | null
    reservedBy?: IntNullableFilter<"invoice"> | number | null
    reservedAt?: DateTimeNullableFilter<"invoice"> | Date | string | null
    remindSentTime?: IntNullableFilter<"invoice"> | number | null
    remindSentDate?: DateTimeNullableFilter<"invoice"> | Date | string | null
  }

  export type invoiceOrderByWithRelationInput = {
    invoiceId?: SortOrder
    fines?: SortOrderInput | SortOrder
    amount?: SortOrder
    debt?: SortOrderInput | SortOrder
    contractId?: SortOrder
    currency?: SortOrder
    numberOfInstallment?: SortOrder
    comment?: SortOrderInput | SortOrder
    monthly?: SortOrderInput | SortOrder
    paymentMethod?: SortOrderInput | SortOrder
    exchangeRate?: SortOrderInput | SortOrder
    currencyExchange?: SortOrderInput | SortOrder
    invoiceStatus?: SortOrderInput | SortOrder
    billPath?: SortOrderInput | SortOrder
    paidDate?: SortOrderInput | SortOrder
    createdBy?: SortOrderInput | SortOrder
    createdAt?: SortOrderInput | SortOrder
    updatedAt?: SortOrderInput | SortOrder
    reservedBy?: SortOrderInput | SortOrder
    reservedAt?: SortOrderInput | SortOrder
    remindSentTime?: SortOrderInput | SortOrder
    remindSentDate?: SortOrderInput | SortOrder
  }

  export type invoiceWhereUniqueInput = Prisma.AtLeast<{
    invoiceId?: number
    AND?: invoiceWhereInput | invoiceWhereInput[]
    OR?: invoiceWhereInput[]
    NOT?: invoiceWhereInput | invoiceWhereInput[]
    fines?: FloatNullableFilter<"invoice"> | number | null
    amount?: FloatFilter<"invoice"> | number
    debt?: FloatNullableFilter<"invoice"> | number | null
    contractId?: IntFilter<"invoice"> | number
    currency?: StringFilter<"invoice"> | string
    numberOfInstallment?: IntFilter<"invoice"> | number
    comment?: StringNullableFilter<"invoice"> | string | null
    monthly?: StringNullableFilter<"invoice"> | string | null
    paymentMethod?: StringNullableFilter<"invoice"> | string | null
    exchangeRate?: FloatNullableFilter<"invoice"> | number | null
    currencyExchange?: StringNullableFilter<"invoice"> | string | null
    invoiceStatus?: StringNullableFilter<"invoice"> | string | null
    billPath?: StringNullableFilter<"invoice"> | string | null
    paidDate?: DateTimeNullableFilter<"invoice"> | Date | string | null
    createdBy?: IntNullableFilter<"invoice"> | number | null
    createdAt?: DateTimeNullableFilter<"invoice"> | Date | string | null
    updatedAt?: DateTimeNullableFilter<"invoice"> | Date | string | null
    reservedBy?: IntNullableFilter<"invoice"> | number | null
    reservedAt?: DateTimeNullableFilter<"invoice"> | Date | string | null
    remindSentTime?: IntNullableFilter<"invoice"> | number | null
    remindSentDate?: DateTimeNullableFilter<"invoice"> | Date | string | null
  }, "invoiceId">

  export type invoiceOrderByWithAggregationInput = {
    invoiceId?: SortOrder
    fines?: SortOrderInput | SortOrder
    amount?: SortOrder
    debt?: SortOrderInput | SortOrder
    contractId?: SortOrder
    currency?: SortOrder
    numberOfInstallment?: SortOrder
    comment?: SortOrderInput | SortOrder
    monthly?: SortOrderInput | SortOrder
    paymentMethod?: SortOrderInput | SortOrder
    exchangeRate?: SortOrderInput | SortOrder
    currencyExchange?: SortOrderInput | SortOrder
    invoiceStatus?: SortOrderInput | SortOrder
    billPath?: SortOrderInput | SortOrder
    paidDate?: SortOrderInput | SortOrder
    createdBy?: SortOrderInput | SortOrder
    createdAt?: SortOrderInput | SortOrder
    updatedAt?: SortOrderInput | SortOrder
    reservedBy?: SortOrderInput | SortOrder
    reservedAt?: SortOrderInput | SortOrder
    remindSentTime?: SortOrderInput | SortOrder
    remindSentDate?: SortOrderInput | SortOrder
    _count?: invoiceCountOrderByAggregateInput
    _avg?: invoiceAvgOrderByAggregateInput
    _max?: invoiceMaxOrderByAggregateInput
    _min?: invoiceMinOrderByAggregateInput
    _sum?: invoiceSumOrderByAggregateInput
  }

  export type invoiceScalarWhereWithAggregatesInput = {
    AND?: invoiceScalarWhereWithAggregatesInput | invoiceScalarWhereWithAggregatesInput[]
    OR?: invoiceScalarWhereWithAggregatesInput[]
    NOT?: invoiceScalarWhereWithAggregatesInput | invoiceScalarWhereWithAggregatesInput[]
    invoiceId?: IntWithAggregatesFilter<"invoice"> | number
    fines?: FloatNullableWithAggregatesFilter<"invoice"> | number | null
    amount?: FloatWithAggregatesFilter<"invoice"> | number
    debt?: FloatNullableWithAggregatesFilter<"invoice"> | number | null
    contractId?: IntWithAggregatesFilter<"invoice"> | number
    currency?: StringWithAggregatesFilter<"invoice"> | string
    numberOfInstallment?: IntWithAggregatesFilter<"invoice"> | number
    comment?: StringNullableWithAggregatesFilter<"invoice"> | string | null
    monthly?: StringNullableWithAggregatesFilter<"invoice"> | string | null
    paymentMethod?: StringNullableWithAggregatesFilter<"invoice"> | string | null
    exchangeRate?: FloatNullableWithAggregatesFilter<"invoice"> | number | null
    currencyExchange?: StringNullableWithAggregatesFilter<"invoice"> | string | null
    invoiceStatus?: StringNullableWithAggregatesFilter<"invoice"> | string | null
    billPath?: StringNullableWithAggregatesFilter<"invoice"> | string | null
    paidDate?: DateTimeNullableWithAggregatesFilter<"invoice"> | Date | string | null
    createdBy?: IntNullableWithAggregatesFilter<"invoice"> | number | null
    createdAt?: DateTimeNullableWithAggregatesFilter<"invoice"> | Date | string | null
    updatedAt?: DateTimeNullableWithAggregatesFilter<"invoice"> | Date | string | null
    reservedBy?: IntNullableWithAggregatesFilter<"invoice"> | number | null
    reservedAt?: DateTimeNullableWithAggregatesFilter<"invoice"> | Date | string | null
    remindSentTime?: IntNullableWithAggregatesFilter<"invoice"> | number | null
    remindSentDate?: DateTimeNullableWithAggregatesFilter<"invoice"> | Date | string | null
  }

  export type logsWhereInput = {
    AND?: logsWhereInput | logsWhereInput[]
    OR?: logsWhereInput[]
    NOT?: logsWhereInput | logsWhereInput[]
    logId?: IntFilter<"logs"> | number
    description?: StringNullableFilter<"logs"> | string | null
    path?: StringFilter<"logs"> | string
    body?: StringNullableFilter<"logs"> | string | null
    userId?: IntFilter<"logs"> | number
    companyId?: IntNullableFilter<"logs"> | number | null
    ip?: StringNullableFilter<"logs"> | string | null
    createdAt?: DateTimeNullableFilter<"logs"> | Date | string | null
    deletedAt?: DateTimeNullableFilter<"logs"> | Date | string | null
  }

  export type logsOrderByWithRelationInput = {
    logId?: SortOrder
    description?: SortOrderInput | SortOrder
    path?: SortOrder
    body?: SortOrderInput | SortOrder
    userId?: SortOrder
    companyId?: SortOrderInput | SortOrder
    ip?: SortOrderInput | SortOrder
    createdAt?: SortOrderInput | SortOrder
    deletedAt?: SortOrderInput | SortOrder
  }

  export type logsWhereUniqueInput = Prisma.AtLeast<{
    logId?: number
    AND?: logsWhereInput | logsWhereInput[]
    OR?: logsWhereInput[]
    NOT?: logsWhereInput | logsWhereInput[]
    description?: StringNullableFilter<"logs"> | string | null
    path?: StringFilter<"logs"> | string
    body?: StringNullableFilter<"logs"> | string | null
    userId?: IntFilter<"logs"> | number
    companyId?: IntNullableFilter<"logs"> | number | null
    ip?: StringNullableFilter<"logs"> | string | null
    createdAt?: DateTimeNullableFilter<"logs"> | Date | string | null
    deletedAt?: DateTimeNullableFilter<"logs"> | Date | string | null
  }, "logId">

  export type logsOrderByWithAggregationInput = {
    logId?: SortOrder
    description?: SortOrderInput | SortOrder
    path?: SortOrder
    body?: SortOrderInput | SortOrder
    userId?: SortOrder
    companyId?: SortOrderInput | SortOrder
    ip?: SortOrderInput | SortOrder
    createdAt?: SortOrderInput | SortOrder
    deletedAt?: SortOrderInput | SortOrder
    _count?: logsCountOrderByAggregateInput
    _avg?: logsAvgOrderByAggregateInput
    _max?: logsMaxOrderByAggregateInput
    _min?: logsMinOrderByAggregateInput
    _sum?: logsSumOrderByAggregateInput
  }

  export type logsScalarWhereWithAggregatesInput = {
    AND?: logsScalarWhereWithAggregatesInput | logsScalarWhereWithAggregatesInput[]
    OR?: logsScalarWhereWithAggregatesInput[]
    NOT?: logsScalarWhereWithAggregatesInput | logsScalarWhereWithAggregatesInput[]
    logId?: IntWithAggregatesFilter<"logs"> | number
    description?: StringNullableWithAggregatesFilter<"logs"> | string | null
    path?: StringWithAggregatesFilter<"logs"> | string
    body?: StringNullableWithAggregatesFilter<"logs"> | string | null
    userId?: IntWithAggregatesFilter<"logs"> | number
    companyId?: IntNullableWithAggregatesFilter<"logs"> | number | null
    ip?: StringNullableWithAggregatesFilter<"logs"> | string | null
    createdAt?: DateTimeNullableWithAggregatesFilter<"logs"> | Date | string | null
    deletedAt?: DateTimeNullableWithAggregatesFilter<"logs"> | Date | string | null
  }

  export type newsWhereInput = {
    AND?: newsWhereInput | newsWhereInput[]
    OR?: newsWhereInput[]
    NOT?: newsWhereInput | newsWhereInput[]
    nId?: IntFilter<"news"> | number
    content?: StringFilter<"news"> | string
    tel?: StringNullableFilter<"news"> | string | null
    imagePath?: StringNullableFilter<"news"> | string | null
    ip?: StringNullableFilter<"news"> | string | null
    userId?: IntFilter<"news"> | number
    sentType?: StringFilter<"news"> | string
    sentStatus?: StringNullableFilter<"news"> | string | null
    dateForSent?: DateTimeNullableFilter<"news"> | Date | string | null
    multi?: StringNullableFilter<"news"> | string | null
    sentDate?: DateTimeNullableFilter<"news"> | Date | string | null
    createdAt?: DateTimeNullableFilter<"news"> | Date | string | null
    deletedAt?: DateTimeNullableFilter<"news"> | Date | string | null
    deletedBy?: IntNullableFilter<"news"> | number | null
  }

  export type newsOrderByWithRelationInput = {
    nId?: SortOrder
    content?: SortOrder
    tel?: SortOrderInput | SortOrder
    imagePath?: SortOrderInput | SortOrder
    ip?: SortOrderInput | SortOrder
    userId?: SortOrder
    sentType?: SortOrder
    sentStatus?: SortOrderInput | SortOrder
    dateForSent?: SortOrderInput | SortOrder
    multi?: SortOrderInput | SortOrder
    sentDate?: SortOrderInput | SortOrder
    createdAt?: SortOrderInput | SortOrder
    deletedAt?: SortOrderInput | SortOrder
    deletedBy?: SortOrderInput | SortOrder
  }

  export type newsWhereUniqueInput = Prisma.AtLeast<{
    nId?: number
    AND?: newsWhereInput | newsWhereInput[]
    OR?: newsWhereInput[]
    NOT?: newsWhereInput | newsWhereInput[]
    content?: StringFilter<"news"> | string
    tel?: StringNullableFilter<"news"> | string | null
    imagePath?: StringNullableFilter<"news"> | string | null
    ip?: StringNullableFilter<"news"> | string | null
    userId?: IntFilter<"news"> | number
    sentType?: StringFilter<"news"> | string
    sentStatus?: StringNullableFilter<"news"> | string | null
    dateForSent?: DateTimeNullableFilter<"news"> | Date | string | null
    multi?: StringNullableFilter<"news"> | string | null
    sentDate?: DateTimeNullableFilter<"news"> | Date | string | null
    createdAt?: DateTimeNullableFilter<"news"> | Date | string | null
    deletedAt?: DateTimeNullableFilter<"news"> | Date | string | null
    deletedBy?: IntNullableFilter<"news"> | number | null
  }, "nId">

  export type newsOrderByWithAggregationInput = {
    nId?: SortOrder
    content?: SortOrder
    tel?: SortOrderInput | SortOrder
    imagePath?: SortOrderInput | SortOrder
    ip?: SortOrderInput | SortOrder
    userId?: SortOrder
    sentType?: SortOrder
    sentStatus?: SortOrderInput | SortOrder
    dateForSent?: SortOrderInput | SortOrder
    multi?: SortOrderInput | SortOrder
    sentDate?: SortOrderInput | SortOrder
    createdAt?: SortOrderInput | SortOrder
    deletedAt?: SortOrderInput | SortOrder
    deletedBy?: SortOrderInput | SortOrder
    _count?: newsCountOrderByAggregateInput
    _avg?: newsAvgOrderByAggregateInput
    _max?: newsMaxOrderByAggregateInput
    _min?: newsMinOrderByAggregateInput
    _sum?: newsSumOrderByAggregateInput
  }

  export type newsScalarWhereWithAggregatesInput = {
    AND?: newsScalarWhereWithAggregatesInput | newsScalarWhereWithAggregatesInput[]
    OR?: newsScalarWhereWithAggregatesInput[]
    NOT?: newsScalarWhereWithAggregatesInput | newsScalarWhereWithAggregatesInput[]
    nId?: IntWithAggregatesFilter<"news"> | number
    content?: StringWithAggregatesFilter<"news"> | string
    tel?: StringNullableWithAggregatesFilter<"news"> | string | null
    imagePath?: StringNullableWithAggregatesFilter<"news"> | string | null
    ip?: StringNullableWithAggregatesFilter<"news"> | string | null
    userId?: IntWithAggregatesFilter<"news"> | number
    sentType?: StringWithAggregatesFilter<"news"> | string
    sentStatus?: StringNullableWithAggregatesFilter<"news"> | string | null
    dateForSent?: DateTimeNullableWithAggregatesFilter<"news"> | Date | string | null
    multi?: StringNullableWithAggregatesFilter<"news"> | string | null
    sentDate?: DateTimeNullableWithAggregatesFilter<"news"> | Date | string | null
    createdAt?: DateTimeNullableWithAggregatesFilter<"news"> | Date | string | null
    deletedAt?: DateTimeNullableWithAggregatesFilter<"news"> | Date | string | null
    deletedBy?: IntNullableWithAggregatesFilter<"news"> | number | null
  }

  export type otpWhereInput = {
    AND?: otpWhereInput | otpWhereInput[]
    OR?: otpWhereInput[]
    NOT?: otpWhereInput | otpWhereInput[]
    otpId?: IntFilter<"otp"> | number
    tel?: StringFilter<"otp"> | string
    code?: StringFilter<"otp"> | string
    confirm?: StringNullableFilter<"otp"> | string | null
    status?: StringNullableFilter<"otp"> | string | null
    sentDate?: DateTimeNullableFilter<"otp"> | Date | string | null
    retry?: IntNullableFilter<"otp"> | number | null
    createdAt?: DateTimeNullableFilter<"otp"> | Date | string | null
  }

  export type otpOrderByWithRelationInput = {
    otpId?: SortOrder
    tel?: SortOrder
    code?: SortOrder
    confirm?: SortOrderInput | SortOrder
    status?: SortOrderInput | SortOrder
    sentDate?: SortOrderInput | SortOrder
    retry?: SortOrderInput | SortOrder
    createdAt?: SortOrderInput | SortOrder
  }

  export type otpWhereUniqueInput = Prisma.AtLeast<{
    otpId?: number
    AND?: otpWhereInput | otpWhereInput[]
    OR?: otpWhereInput[]
    NOT?: otpWhereInput | otpWhereInput[]
    tel?: StringFilter<"otp"> | string
    code?: StringFilter<"otp"> | string
    confirm?: StringNullableFilter<"otp"> | string | null
    status?: StringNullableFilter<"otp"> | string | null
    sentDate?: DateTimeNullableFilter<"otp"> | Date | string | null
    retry?: IntNullableFilter<"otp"> | number | null
    createdAt?: DateTimeNullableFilter<"otp"> | Date | string | null
  }, "otpId">

  export type otpOrderByWithAggregationInput = {
    otpId?: SortOrder
    tel?: SortOrder
    code?: SortOrder
    confirm?: SortOrderInput | SortOrder
    status?: SortOrderInput | SortOrder
    sentDate?: SortOrderInput | SortOrder
    retry?: SortOrderInput | SortOrder
    createdAt?: SortOrderInput | SortOrder
    _count?: otpCountOrderByAggregateInput
    _avg?: otpAvgOrderByAggregateInput
    _max?: otpMaxOrderByAggregateInput
    _min?: otpMinOrderByAggregateInput
    _sum?: otpSumOrderByAggregateInput
  }

  export type otpScalarWhereWithAggregatesInput = {
    AND?: otpScalarWhereWithAggregatesInput | otpScalarWhereWithAggregatesInput[]
    OR?: otpScalarWhereWithAggregatesInput[]
    NOT?: otpScalarWhereWithAggregatesInput | otpScalarWhereWithAggregatesInput[]
    otpId?: IntWithAggregatesFilter<"otp"> | number
    tel?: StringWithAggregatesFilter<"otp"> | string
    code?: StringWithAggregatesFilter<"otp"> | string
    confirm?: StringNullableWithAggregatesFilter<"otp"> | string | null
    status?: StringNullableWithAggregatesFilter<"otp"> | string | null
    sentDate?: DateTimeNullableWithAggregatesFilter<"otp"> | Date | string | null
    retry?: IntNullableWithAggregatesFilter<"otp"> | number | null
    createdAt?: DateTimeNullableWithAggregatesFilter<"otp"> | Date | string | null
  }

  export type payment_methodWhereInput = {
    AND?: payment_methodWhereInput | payment_methodWhereInput[]
    OR?: payment_methodWhereInput[]
    NOT?: payment_methodWhereInput | payment_methodWhereInput[]
    id?: IntFilter<"payment_method"> | number
    companyId?: IntFilter<"payment_method"> | number
    accountName?: StringFilter<"payment_method"> | string
    accountNumber?: StringFilter<"payment_method"> | string
    qrPath?: StringNullableFilter<"payment_method"> | string | null
    deletedAt?: DateTimeNullableFilter<"payment_method"> | Date | string | null
    deletedBy?: IntNullableFilter<"payment_method"> | number | null
  }

  export type payment_methodOrderByWithRelationInput = {
    id?: SortOrder
    companyId?: SortOrder
    accountName?: SortOrder
    accountNumber?: SortOrder
    qrPath?: SortOrderInput | SortOrder
    deletedAt?: SortOrderInput | SortOrder
    deletedBy?: SortOrderInput | SortOrder
  }

  export type payment_methodWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: payment_methodWhereInput | payment_methodWhereInput[]
    OR?: payment_methodWhereInput[]
    NOT?: payment_methodWhereInput | payment_methodWhereInput[]
    companyId?: IntFilter<"payment_method"> | number
    accountName?: StringFilter<"payment_method"> | string
    accountNumber?: StringFilter<"payment_method"> | string
    qrPath?: StringNullableFilter<"payment_method"> | string | null
    deletedAt?: DateTimeNullableFilter<"payment_method"> | Date | string | null
    deletedBy?: IntNullableFilter<"payment_method"> | number | null
  }, "id">

  export type payment_methodOrderByWithAggregationInput = {
    id?: SortOrder
    companyId?: SortOrder
    accountName?: SortOrder
    accountNumber?: SortOrder
    qrPath?: SortOrderInput | SortOrder
    deletedAt?: SortOrderInput | SortOrder
    deletedBy?: SortOrderInput | SortOrder
    _count?: payment_methodCountOrderByAggregateInput
    _avg?: payment_methodAvgOrderByAggregateInput
    _max?: payment_methodMaxOrderByAggregateInput
    _min?: payment_methodMinOrderByAggregateInput
    _sum?: payment_methodSumOrderByAggregateInput
  }

  export type payment_methodScalarWhereWithAggregatesInput = {
    AND?: payment_methodScalarWhereWithAggregatesInput | payment_methodScalarWhereWithAggregatesInput[]
    OR?: payment_methodScalarWhereWithAggregatesInput[]
    NOT?: payment_methodScalarWhereWithAggregatesInput | payment_methodScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"payment_method"> | number
    companyId?: IntWithAggregatesFilter<"payment_method"> | number
    accountName?: StringWithAggregatesFilter<"payment_method"> | string
    accountNumber?: StringWithAggregatesFilter<"payment_method"> | string
    qrPath?: StringNullableWithAggregatesFilter<"payment_method"> | string | null
    deletedAt?: DateTimeNullableWithAggregatesFilter<"payment_method"> | Date | string | null
    deletedBy?: IntNullableWithAggregatesFilter<"payment_method"> | number | null
  }

  export type projectsWhereInput = {
    AND?: projectsWhereInput | projectsWhereInput[]
    OR?: projectsWhereInput[]
    NOT?: projectsWhereInput | projectsWhereInput[]
    projectId?: IntFilter<"projects"> | number
    companyId?: IntFilter<"projects"> | number
    area?: FloatFilter<"projects"> | number
    code?: StringNullableFilter<"projects"> | string | null
    projectName?: StringFilter<"projects"> | string
    address?: StringNullableFilter<"projects"> | string | null
    createdBy?: IntFilter<"projects"> | number
    updatedBy?: IntNullableFilter<"projects"> | number | null
    createdAt?: DateTimeNullableFilter<"projects"> | Date | string | null
    updatedAt?: DateTimeNullableFilter<"projects"> | Date | string | null
    deletedAt?: DateTimeNullableFilter<"projects"> | Date | string | null
    deletedBy?: IntNullableFilter<"projects"> | number | null
  }

  export type projectsOrderByWithRelationInput = {
    projectId?: SortOrder
    companyId?: SortOrder
    area?: SortOrder
    code?: SortOrderInput | SortOrder
    projectName?: SortOrder
    address?: SortOrderInput | SortOrder
    createdBy?: SortOrder
    updatedBy?: SortOrderInput | SortOrder
    createdAt?: SortOrderInput | SortOrder
    updatedAt?: SortOrderInput | SortOrder
    deletedAt?: SortOrderInput | SortOrder
    deletedBy?: SortOrderInput | SortOrder
  }

  export type projectsWhereUniqueInput = Prisma.AtLeast<{
    projectId?: number
    code?: string
    AND?: projectsWhereInput | projectsWhereInput[]
    OR?: projectsWhereInput[]
    NOT?: projectsWhereInput | projectsWhereInput[]
    companyId?: IntFilter<"projects"> | number
    area?: FloatFilter<"projects"> | number
    projectName?: StringFilter<"projects"> | string
    address?: StringNullableFilter<"projects"> | string | null
    createdBy?: IntFilter<"projects"> | number
    updatedBy?: IntNullableFilter<"projects"> | number | null
    createdAt?: DateTimeNullableFilter<"projects"> | Date | string | null
    updatedAt?: DateTimeNullableFilter<"projects"> | Date | string | null
    deletedAt?: DateTimeNullableFilter<"projects"> | Date | string | null
    deletedBy?: IntNullableFilter<"projects"> | number | null
  }, "projectId" | "code">

  export type projectsOrderByWithAggregationInput = {
    projectId?: SortOrder
    companyId?: SortOrder
    area?: SortOrder
    code?: SortOrderInput | SortOrder
    projectName?: SortOrder
    address?: SortOrderInput | SortOrder
    createdBy?: SortOrder
    updatedBy?: SortOrderInput | SortOrder
    createdAt?: SortOrderInput | SortOrder
    updatedAt?: SortOrderInput | SortOrder
    deletedAt?: SortOrderInput | SortOrder
    deletedBy?: SortOrderInput | SortOrder
    _count?: projectsCountOrderByAggregateInput
    _avg?: projectsAvgOrderByAggregateInput
    _max?: projectsMaxOrderByAggregateInput
    _min?: projectsMinOrderByAggregateInput
    _sum?: projectsSumOrderByAggregateInput
  }

  export type projectsScalarWhereWithAggregatesInput = {
    AND?: projectsScalarWhereWithAggregatesInput | projectsScalarWhereWithAggregatesInput[]
    OR?: projectsScalarWhereWithAggregatesInput[]
    NOT?: projectsScalarWhereWithAggregatesInput | projectsScalarWhereWithAggregatesInput[]
    projectId?: IntWithAggregatesFilter<"projects"> | number
    companyId?: IntWithAggregatesFilter<"projects"> | number
    area?: FloatWithAggregatesFilter<"projects"> | number
    code?: StringNullableWithAggregatesFilter<"projects"> | string | null
    projectName?: StringWithAggregatesFilter<"projects"> | string
    address?: StringNullableWithAggregatesFilter<"projects"> | string | null
    createdBy?: IntWithAggregatesFilter<"projects"> | number
    updatedBy?: IntNullableWithAggregatesFilter<"projects"> | number | null
    createdAt?: DateTimeNullableWithAggregatesFilter<"projects"> | Date | string | null
    updatedAt?: DateTimeNullableWithAggregatesFilter<"projects"> | Date | string | null
    deletedAt?: DateTimeNullableWithAggregatesFilter<"projects"> | Date | string | null
    deletedBy?: IntNullableWithAggregatesFilter<"projects"> | number | null
  }

  export type storesWhereInput = {
    AND?: storesWhereInput | storesWhereInput[]
    OR?: storesWhereInput[]
    NOT?: storesWhereInput | storesWhereInput[]
    id?: IntFilter<"stores"> | number
    name?: StringNullableFilter<"stores"> | string | null
    opening_time?: DateTimeNullableFilter<"stores"> | Date | string | null
    closing_time?: DateTimeNullableFilter<"stores"> | Date | string | null
    closing_id?: StringNullableFilter<"stores"> | string | null
  }

  export type storesOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    opening_time?: SortOrderInput | SortOrder
    closing_time?: SortOrderInput | SortOrder
    closing_id?: SortOrderInput | SortOrder
  }

  export type storesWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: storesWhereInput | storesWhereInput[]
    OR?: storesWhereInput[]
    NOT?: storesWhereInput | storesWhereInput[]
    name?: StringNullableFilter<"stores"> | string | null
    opening_time?: DateTimeNullableFilter<"stores"> | Date | string | null
    closing_time?: DateTimeNullableFilter<"stores"> | Date | string | null
    closing_id?: StringNullableFilter<"stores"> | string | null
  }, "id">

  export type storesOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    opening_time?: SortOrderInput | SortOrder
    closing_time?: SortOrderInput | SortOrder
    closing_id?: SortOrderInput | SortOrder
    _count?: storesCountOrderByAggregateInput
    _avg?: storesAvgOrderByAggregateInput
    _max?: storesMaxOrderByAggregateInput
    _min?: storesMinOrderByAggregateInput
    _sum?: storesSumOrderByAggregateInput
  }

  export type storesScalarWhereWithAggregatesInput = {
    AND?: storesScalarWhereWithAggregatesInput | storesScalarWhereWithAggregatesInput[]
    OR?: storesScalarWhereWithAggregatesInput[]
    NOT?: storesScalarWhereWithAggregatesInput | storesScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"stores"> | number
    name?: StringNullableWithAggregatesFilter<"stores"> | string | null
    opening_time?: DateTimeNullableWithAggregatesFilter<"stores"> | Date | string | null
    closing_time?: DateTimeNullableWithAggregatesFilter<"stores"> | Date | string | null
    closing_id?: StringNullableWithAggregatesFilter<"stores"> | string | null
  }

  export type transactionWhereInput = {
    AND?: transactionWhereInput | transactionWhereInput[]
    OR?: transactionWhereInput[]
    NOT?: transactionWhereInput | transactionWhereInput[]
    transactionId?: IntFilter<"transaction"> | number
    ip?: StringFilter<"transaction"> | string
    amount?: FloatFilter<"transaction"> | number
    remark?: StringNullableFilter<"transaction"> | string | null
    currency?: StringFilter<"transaction"> | string
    pamentMethod?: StringFilter<"transaction"> | string
    transactionUUID?: StringNullableFilter<"transaction"> | string | null
    contractId?: IntFilter<"transaction"> | number
    currencyLAK?: FloatFilter<"transaction"> | number
    currencyTHB?: FloatFilter<"transaction"> | number
    currencyUSD?: FloatFilter<"transaction"> | number
    createdBy?: IntNullableFilter<"transaction"> | number | null
    updatedBy?: IntNullableFilter<"transaction"> | number | null
    createdAt?: DateTimeNullableFilter<"transaction"> | Date | string | null
    updatedAt?: DateTimeNullableFilter<"transaction"> | Date | string | null
    deletedAt?: DateTimeNullableFilter<"transaction"> | Date | string | null
  }

  export type transactionOrderByWithRelationInput = {
    transactionId?: SortOrder
    ip?: SortOrder
    amount?: SortOrder
    remark?: SortOrderInput | SortOrder
    currency?: SortOrder
    pamentMethod?: SortOrder
    transactionUUID?: SortOrderInput | SortOrder
    contractId?: SortOrder
    currencyLAK?: SortOrder
    currencyTHB?: SortOrder
    currencyUSD?: SortOrder
    createdBy?: SortOrderInput | SortOrder
    updatedBy?: SortOrderInput | SortOrder
    createdAt?: SortOrderInput | SortOrder
    updatedAt?: SortOrderInput | SortOrder
    deletedAt?: SortOrderInput | SortOrder
  }

  export type transactionWhereUniqueInput = Prisma.AtLeast<{
    transactionId?: number
    AND?: transactionWhereInput | transactionWhereInput[]
    OR?: transactionWhereInput[]
    NOT?: transactionWhereInput | transactionWhereInput[]
    ip?: StringFilter<"transaction"> | string
    amount?: FloatFilter<"transaction"> | number
    remark?: StringNullableFilter<"transaction"> | string | null
    currency?: StringFilter<"transaction"> | string
    pamentMethod?: StringFilter<"transaction"> | string
    transactionUUID?: StringNullableFilter<"transaction"> | string | null
    contractId?: IntFilter<"transaction"> | number
    currencyLAK?: FloatFilter<"transaction"> | number
    currencyTHB?: FloatFilter<"transaction"> | number
    currencyUSD?: FloatFilter<"transaction"> | number
    createdBy?: IntNullableFilter<"transaction"> | number | null
    updatedBy?: IntNullableFilter<"transaction"> | number | null
    createdAt?: DateTimeNullableFilter<"transaction"> | Date | string | null
    updatedAt?: DateTimeNullableFilter<"transaction"> | Date | string | null
    deletedAt?: DateTimeNullableFilter<"transaction"> | Date | string | null
  }, "transactionId">

  export type transactionOrderByWithAggregationInput = {
    transactionId?: SortOrder
    ip?: SortOrder
    amount?: SortOrder
    remark?: SortOrderInput | SortOrder
    currency?: SortOrder
    pamentMethod?: SortOrder
    transactionUUID?: SortOrderInput | SortOrder
    contractId?: SortOrder
    currencyLAK?: SortOrder
    currencyTHB?: SortOrder
    currencyUSD?: SortOrder
    createdBy?: SortOrderInput | SortOrder
    updatedBy?: SortOrderInput | SortOrder
    createdAt?: SortOrderInput | SortOrder
    updatedAt?: SortOrderInput | SortOrder
    deletedAt?: SortOrderInput | SortOrder
    _count?: transactionCountOrderByAggregateInput
    _avg?: transactionAvgOrderByAggregateInput
    _max?: transactionMaxOrderByAggregateInput
    _min?: transactionMinOrderByAggregateInput
    _sum?: transactionSumOrderByAggregateInput
  }

  export type transactionScalarWhereWithAggregatesInput = {
    AND?: transactionScalarWhereWithAggregatesInput | transactionScalarWhereWithAggregatesInput[]
    OR?: transactionScalarWhereWithAggregatesInput[]
    NOT?: transactionScalarWhereWithAggregatesInput | transactionScalarWhereWithAggregatesInput[]
    transactionId?: IntWithAggregatesFilter<"transaction"> | number
    ip?: StringWithAggregatesFilter<"transaction"> | string
    amount?: FloatWithAggregatesFilter<"transaction"> | number
    remark?: StringNullableWithAggregatesFilter<"transaction"> | string | null
    currency?: StringWithAggregatesFilter<"transaction"> | string
    pamentMethod?: StringWithAggregatesFilter<"transaction"> | string
    transactionUUID?: StringNullableWithAggregatesFilter<"transaction"> | string | null
    contractId?: IntWithAggregatesFilter<"transaction"> | number
    currencyLAK?: FloatWithAggregatesFilter<"transaction"> | number
    currencyTHB?: FloatWithAggregatesFilter<"transaction"> | number
    currencyUSD?: FloatWithAggregatesFilter<"transaction"> | number
    createdBy?: IntNullableWithAggregatesFilter<"transaction"> | number | null
    updatedBy?: IntNullableWithAggregatesFilter<"transaction"> | number | null
    createdAt?: DateTimeNullableWithAggregatesFilter<"transaction"> | Date | string | null
    updatedAt?: DateTimeNullableWithAggregatesFilter<"transaction"> | Date | string | null
    deletedAt?: DateTimeNullableWithAggregatesFilter<"transaction"> | Date | string | null
  }

  export type usersWhereInput = {
    AND?: usersWhereInput | usersWhereInput[]
    OR?: usersWhereInput[]
    NOT?: usersWhereInput | usersWhereInput[]
    userId?: IntFilter<"users"> | number
    companyId?: IntNullableFilter<"users"> | number | null
    fullName?: StringFilter<"users"> | string
    lastName?: StringFilter<"users"> | string
    tel?: StringFilter<"users"> | string
    password?: StringFilter<"users"> | string
    role?: StringNullableFilter<"users"> | string | null
    userStatus?: BoolNullableFilter<"users"> | boolean | null
    createdAt?: DateTimeNullableFilter<"users"> | Date | string | null
    updatedAt?: DateTimeNullableFilter<"users"> | Date | string | null
  }

  export type usersOrderByWithRelationInput = {
    userId?: SortOrder
    companyId?: SortOrderInput | SortOrder
    fullName?: SortOrder
    lastName?: SortOrder
    tel?: SortOrder
    password?: SortOrder
    role?: SortOrderInput | SortOrder
    userStatus?: SortOrderInput | SortOrder
    createdAt?: SortOrderInput | SortOrder
    updatedAt?: SortOrderInput | SortOrder
  }

  export type usersWhereUniqueInput = Prisma.AtLeast<{
    userId?: number
    tel?: string
    AND?: usersWhereInput | usersWhereInput[]
    OR?: usersWhereInput[]
    NOT?: usersWhereInput | usersWhereInput[]
    companyId?: IntNullableFilter<"users"> | number | null
    fullName?: StringFilter<"users"> | string
    lastName?: StringFilter<"users"> | string
    password?: StringFilter<"users"> | string
    role?: StringNullableFilter<"users"> | string | null
    userStatus?: BoolNullableFilter<"users"> | boolean | null
    createdAt?: DateTimeNullableFilter<"users"> | Date | string | null
    updatedAt?: DateTimeNullableFilter<"users"> | Date | string | null
  }, "userId" | "tel">

  export type usersOrderByWithAggregationInput = {
    userId?: SortOrder
    companyId?: SortOrderInput | SortOrder
    fullName?: SortOrder
    lastName?: SortOrder
    tel?: SortOrder
    password?: SortOrder
    role?: SortOrderInput | SortOrder
    userStatus?: SortOrderInput | SortOrder
    createdAt?: SortOrderInput | SortOrder
    updatedAt?: SortOrderInput | SortOrder
    _count?: usersCountOrderByAggregateInput
    _avg?: usersAvgOrderByAggregateInput
    _max?: usersMaxOrderByAggregateInput
    _min?: usersMinOrderByAggregateInput
    _sum?: usersSumOrderByAggregateInput
  }

  export type usersScalarWhereWithAggregatesInput = {
    AND?: usersScalarWhereWithAggregatesInput | usersScalarWhereWithAggregatesInput[]
    OR?: usersScalarWhereWithAggregatesInput[]
    NOT?: usersScalarWhereWithAggregatesInput | usersScalarWhereWithAggregatesInput[]
    userId?: IntWithAggregatesFilter<"users"> | number
    companyId?: IntNullableWithAggregatesFilter<"users"> | number | null
    fullName?: StringWithAggregatesFilter<"users"> | string
    lastName?: StringWithAggregatesFilter<"users"> | string
    tel?: StringWithAggregatesFilter<"users"> | string
    password?: StringWithAggregatesFilter<"users"> | string
    role?: StringNullableWithAggregatesFilter<"users"> | string | null
    userStatus?: BoolNullableWithAggregatesFilter<"users"> | boolean | null
    createdAt?: DateTimeNullableWithAggregatesFilter<"users"> | Date | string | null
    updatedAt?: DateTimeNullableWithAggregatesFilter<"users"> | Date | string | null
  }

  export type companyCreateInput = {
    companyName?: string | null
    logoPath: string
    financeTel: string
    fax?: string | null
    tel: string
    email?: string | null
    whatsapp?: string | null
    address: string
    createdBy: number
    updatedBy?: number | null
    companyStatus?: boolean | null
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
    deletedBy?: number | null
  }

  export type companyUncheckedCreateInput = {
    companyId?: number
    companyName?: string | null
    logoPath: string
    financeTel: string
    fax?: string | null
    tel: string
    email?: string | null
    whatsapp?: string | null
    address: string
    createdBy: number
    updatedBy?: number | null
    companyStatus?: boolean | null
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
    deletedBy?: number | null
  }

  export type companyUpdateInput = {
    companyName?: NullableStringFieldUpdateOperationsInput | string | null
    logoPath?: StringFieldUpdateOperationsInput | string
    financeTel?: StringFieldUpdateOperationsInput | string
    fax?: NullableStringFieldUpdateOperationsInput | string | null
    tel?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    whatsapp?: NullableStringFieldUpdateOperationsInput | string | null
    address?: StringFieldUpdateOperationsInput | string
    createdBy?: IntFieldUpdateOperationsInput | number
    updatedBy?: NullableIntFieldUpdateOperationsInput | number | null
    companyStatus?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedBy?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type companyUncheckedUpdateInput = {
    companyId?: IntFieldUpdateOperationsInput | number
    companyName?: NullableStringFieldUpdateOperationsInput | string | null
    logoPath?: StringFieldUpdateOperationsInput | string
    financeTel?: StringFieldUpdateOperationsInput | string
    fax?: NullableStringFieldUpdateOperationsInput | string | null
    tel?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    whatsapp?: NullableStringFieldUpdateOperationsInput | string | null
    address?: StringFieldUpdateOperationsInput | string
    createdBy?: IntFieldUpdateOperationsInput | number
    updatedBy?: NullableIntFieldUpdateOperationsInput | number | null
    companyStatus?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedBy?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type companyCreateManyInput = {
    companyId?: number
    companyName?: string | null
    logoPath: string
    financeTel: string
    fax?: string | null
    tel: string
    email?: string | null
    whatsapp?: string | null
    address: string
    createdBy: number
    updatedBy?: number | null
    companyStatus?: boolean | null
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
    deletedBy?: number | null
  }

  export type companyUpdateManyMutationInput = {
    companyName?: NullableStringFieldUpdateOperationsInput | string | null
    logoPath?: StringFieldUpdateOperationsInput | string
    financeTel?: StringFieldUpdateOperationsInput | string
    fax?: NullableStringFieldUpdateOperationsInput | string | null
    tel?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    whatsapp?: NullableStringFieldUpdateOperationsInput | string | null
    address?: StringFieldUpdateOperationsInput | string
    createdBy?: IntFieldUpdateOperationsInput | number
    updatedBy?: NullableIntFieldUpdateOperationsInput | number | null
    companyStatus?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedBy?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type companyUncheckedUpdateManyInput = {
    companyId?: IntFieldUpdateOperationsInput | number
    companyName?: NullableStringFieldUpdateOperationsInput | string | null
    logoPath?: StringFieldUpdateOperationsInput | string
    financeTel?: StringFieldUpdateOperationsInput | string
    fax?: NullableStringFieldUpdateOperationsInput | string | null
    tel?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    whatsapp?: NullableStringFieldUpdateOperationsInput | string | null
    address?: StringFieldUpdateOperationsInput | string
    createdBy?: IntFieldUpdateOperationsInput | number
    updatedBy?: NullableIntFieldUpdateOperationsInput | number | null
    companyStatus?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedBy?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type contractsCreateInput = {
    companyId: number
    docId: string
    createdBy: number
    updatedBy?: number | null
    projectId: number
    price: number
    totalPrice: number
    currency?: string | null
    contractStatus?: string | null
    area: number
    numberOfInstallment?: number | null
    payDay: Date | string
    modeOfPayment?: string | null
    payInAdvance?: number | null
    customerIdOne: number
    customerIdTwo?: number | null
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    cancelAt?: Date | string | null
    cancelBy?: number | null
    reason?: string | null
    lastInvoice?: number | null
    deletedAt?: Date | string | null
    deletedBy?: number | null
  }

  export type contractsUncheckedCreateInput = {
    contractId?: number
    companyId: number
    docId: string
    createdBy: number
    updatedBy?: number | null
    projectId: number
    price: number
    totalPrice: number
    currency?: string | null
    contractStatus?: string | null
    area: number
    numberOfInstallment?: number | null
    payDay: Date | string
    modeOfPayment?: string | null
    payInAdvance?: number | null
    customerIdOne: number
    customerIdTwo?: number | null
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    cancelAt?: Date | string | null
    cancelBy?: number | null
    reason?: string | null
    lastInvoice?: number | null
    deletedAt?: Date | string | null
    deletedBy?: number | null
  }

  export type contractsUpdateInput = {
    companyId?: IntFieldUpdateOperationsInput | number
    docId?: StringFieldUpdateOperationsInput | string
    createdBy?: IntFieldUpdateOperationsInput | number
    updatedBy?: NullableIntFieldUpdateOperationsInput | number | null
    projectId?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    totalPrice?: FloatFieldUpdateOperationsInput | number
    currency?: NullableStringFieldUpdateOperationsInput | string | null
    contractStatus?: NullableStringFieldUpdateOperationsInput | string | null
    area?: FloatFieldUpdateOperationsInput | number
    numberOfInstallment?: NullableIntFieldUpdateOperationsInput | number | null
    payDay?: DateTimeFieldUpdateOperationsInput | Date | string
    modeOfPayment?: NullableStringFieldUpdateOperationsInput | string | null
    payInAdvance?: NullableFloatFieldUpdateOperationsInput | number | null
    customerIdOne?: IntFieldUpdateOperationsInput | number
    customerIdTwo?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cancelAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cancelBy?: NullableIntFieldUpdateOperationsInput | number | null
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    lastInvoice?: NullableIntFieldUpdateOperationsInput | number | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedBy?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type contractsUncheckedUpdateInput = {
    contractId?: IntFieldUpdateOperationsInput | number
    companyId?: IntFieldUpdateOperationsInput | number
    docId?: StringFieldUpdateOperationsInput | string
    createdBy?: IntFieldUpdateOperationsInput | number
    updatedBy?: NullableIntFieldUpdateOperationsInput | number | null
    projectId?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    totalPrice?: FloatFieldUpdateOperationsInput | number
    currency?: NullableStringFieldUpdateOperationsInput | string | null
    contractStatus?: NullableStringFieldUpdateOperationsInput | string | null
    area?: FloatFieldUpdateOperationsInput | number
    numberOfInstallment?: NullableIntFieldUpdateOperationsInput | number | null
    payDay?: DateTimeFieldUpdateOperationsInput | Date | string
    modeOfPayment?: NullableStringFieldUpdateOperationsInput | string | null
    payInAdvance?: NullableFloatFieldUpdateOperationsInput | number | null
    customerIdOne?: IntFieldUpdateOperationsInput | number
    customerIdTwo?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cancelAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cancelBy?: NullableIntFieldUpdateOperationsInput | number | null
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    lastInvoice?: NullableIntFieldUpdateOperationsInput | number | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedBy?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type contractsCreateManyInput = {
    contractId?: number
    companyId: number
    docId: string
    createdBy: number
    updatedBy?: number | null
    projectId: number
    price: number
    totalPrice: number
    currency?: string | null
    contractStatus?: string | null
    area: number
    numberOfInstallment?: number | null
    payDay: Date | string
    modeOfPayment?: string | null
    payInAdvance?: number | null
    customerIdOne: number
    customerIdTwo?: number | null
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    cancelAt?: Date | string | null
    cancelBy?: number | null
    reason?: string | null
    lastInvoice?: number | null
    deletedAt?: Date | string | null
    deletedBy?: number | null
  }

  export type contractsUpdateManyMutationInput = {
    companyId?: IntFieldUpdateOperationsInput | number
    docId?: StringFieldUpdateOperationsInput | string
    createdBy?: IntFieldUpdateOperationsInput | number
    updatedBy?: NullableIntFieldUpdateOperationsInput | number | null
    projectId?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    totalPrice?: FloatFieldUpdateOperationsInput | number
    currency?: NullableStringFieldUpdateOperationsInput | string | null
    contractStatus?: NullableStringFieldUpdateOperationsInput | string | null
    area?: FloatFieldUpdateOperationsInput | number
    numberOfInstallment?: NullableIntFieldUpdateOperationsInput | number | null
    payDay?: DateTimeFieldUpdateOperationsInput | Date | string
    modeOfPayment?: NullableStringFieldUpdateOperationsInput | string | null
    payInAdvance?: NullableFloatFieldUpdateOperationsInput | number | null
    customerIdOne?: IntFieldUpdateOperationsInput | number
    customerIdTwo?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cancelAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cancelBy?: NullableIntFieldUpdateOperationsInput | number | null
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    lastInvoice?: NullableIntFieldUpdateOperationsInput | number | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedBy?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type contractsUncheckedUpdateManyInput = {
    contractId?: IntFieldUpdateOperationsInput | number
    companyId?: IntFieldUpdateOperationsInput | number
    docId?: StringFieldUpdateOperationsInput | string
    createdBy?: IntFieldUpdateOperationsInput | number
    updatedBy?: NullableIntFieldUpdateOperationsInput | number | null
    projectId?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    totalPrice?: FloatFieldUpdateOperationsInput | number
    currency?: NullableStringFieldUpdateOperationsInput | string | null
    contractStatus?: NullableStringFieldUpdateOperationsInput | string | null
    area?: FloatFieldUpdateOperationsInput | number
    numberOfInstallment?: NullableIntFieldUpdateOperationsInput | number | null
    payDay?: DateTimeFieldUpdateOperationsInput | Date | string
    modeOfPayment?: NullableStringFieldUpdateOperationsInput | string | null
    payInAdvance?: NullableFloatFieldUpdateOperationsInput | number | null
    customerIdOne?: IntFieldUpdateOperationsInput | number
    customerIdTwo?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cancelAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cancelBy?: NullableIntFieldUpdateOperationsInput | number | null
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    lastInvoice?: NullableIntFieldUpdateOperationsInput | number | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedBy?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type exchangeCreateInput = {
    companyId: number
    thb: number
    usd: number
    createdBy: number
    updatedBy?: number | null
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
    deletedBy?: number | null
  }

  export type exchangeUncheckedCreateInput = {
    exchangeId?: number
    companyId: number
    thb: number
    usd: number
    createdBy: number
    updatedBy?: number | null
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
    deletedBy?: number | null
  }

  export type exchangeUpdateInput = {
    companyId?: IntFieldUpdateOperationsInput | number
    thb?: FloatFieldUpdateOperationsInput | number
    usd?: FloatFieldUpdateOperationsInput | number
    createdBy?: IntFieldUpdateOperationsInput | number
    updatedBy?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedBy?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type exchangeUncheckedUpdateInput = {
    exchangeId?: IntFieldUpdateOperationsInput | number
    companyId?: IntFieldUpdateOperationsInput | number
    thb?: FloatFieldUpdateOperationsInput | number
    usd?: FloatFieldUpdateOperationsInput | number
    createdBy?: IntFieldUpdateOperationsInput | number
    updatedBy?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedBy?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type exchangeCreateManyInput = {
    exchangeId?: number
    companyId: number
    thb: number
    usd: number
    createdBy: number
    updatedBy?: number | null
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
    deletedBy?: number | null
  }

  export type exchangeUpdateManyMutationInput = {
    companyId?: IntFieldUpdateOperationsInput | number
    thb?: FloatFieldUpdateOperationsInput | number
    usd?: FloatFieldUpdateOperationsInput | number
    createdBy?: IntFieldUpdateOperationsInput | number
    updatedBy?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedBy?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type exchangeUncheckedUpdateManyInput = {
    exchangeId?: IntFieldUpdateOperationsInput | number
    companyId?: IntFieldUpdateOperationsInput | number
    thb?: FloatFieldUpdateOperationsInput | number
    usd?: FloatFieldUpdateOperationsInput | number
    createdBy?: IntFieldUpdateOperationsInput | number
    updatedBy?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedBy?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type invoiceCreateInput = {
    fines?: number | null
    amount: number
    debt?: number | null
    contractId: number
    currency: string
    numberOfInstallment?: number
    comment?: string | null
    monthly?: string | null
    paymentMethod?: string | null
    exchangeRate?: number | null
    currencyExchange?: string | null
    invoiceStatus?: string | null
    billPath?: string | null
    paidDate?: Date | string | null
    createdBy?: number | null
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    reservedBy?: number | null
    reservedAt?: Date | string | null
    remindSentTime?: number | null
    remindSentDate?: Date | string | null
  }

  export type invoiceUncheckedCreateInput = {
    invoiceId?: number
    fines?: number | null
    amount: number
    debt?: number | null
    contractId: number
    currency: string
    numberOfInstallment?: number
    comment?: string | null
    monthly?: string | null
    paymentMethod?: string | null
    exchangeRate?: number | null
    currencyExchange?: string | null
    invoiceStatus?: string | null
    billPath?: string | null
    paidDate?: Date | string | null
    createdBy?: number | null
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    reservedBy?: number | null
    reservedAt?: Date | string | null
    remindSentTime?: number | null
    remindSentDate?: Date | string | null
  }

  export type invoiceUpdateInput = {
    fines?: NullableFloatFieldUpdateOperationsInput | number | null
    amount?: FloatFieldUpdateOperationsInput | number
    debt?: NullableFloatFieldUpdateOperationsInput | number | null
    contractId?: IntFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    numberOfInstallment?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    monthly?: NullableStringFieldUpdateOperationsInput | string | null
    paymentMethod?: NullableStringFieldUpdateOperationsInput | string | null
    exchangeRate?: NullableFloatFieldUpdateOperationsInput | number | null
    currencyExchange?: NullableStringFieldUpdateOperationsInput | string | null
    invoiceStatus?: NullableStringFieldUpdateOperationsInput | string | null
    billPath?: NullableStringFieldUpdateOperationsInput | string | null
    paidDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdBy?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    reservedBy?: NullableIntFieldUpdateOperationsInput | number | null
    reservedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    remindSentTime?: NullableIntFieldUpdateOperationsInput | number | null
    remindSentDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type invoiceUncheckedUpdateInput = {
    invoiceId?: IntFieldUpdateOperationsInput | number
    fines?: NullableFloatFieldUpdateOperationsInput | number | null
    amount?: FloatFieldUpdateOperationsInput | number
    debt?: NullableFloatFieldUpdateOperationsInput | number | null
    contractId?: IntFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    numberOfInstallment?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    monthly?: NullableStringFieldUpdateOperationsInput | string | null
    paymentMethod?: NullableStringFieldUpdateOperationsInput | string | null
    exchangeRate?: NullableFloatFieldUpdateOperationsInput | number | null
    currencyExchange?: NullableStringFieldUpdateOperationsInput | string | null
    invoiceStatus?: NullableStringFieldUpdateOperationsInput | string | null
    billPath?: NullableStringFieldUpdateOperationsInput | string | null
    paidDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdBy?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    reservedBy?: NullableIntFieldUpdateOperationsInput | number | null
    reservedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    remindSentTime?: NullableIntFieldUpdateOperationsInput | number | null
    remindSentDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type invoiceCreateManyInput = {
    invoiceId?: number
    fines?: number | null
    amount: number
    debt?: number | null
    contractId: number
    currency: string
    numberOfInstallment?: number
    comment?: string | null
    monthly?: string | null
    paymentMethod?: string | null
    exchangeRate?: number | null
    currencyExchange?: string | null
    invoiceStatus?: string | null
    billPath?: string | null
    paidDate?: Date | string | null
    createdBy?: number | null
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    reservedBy?: number | null
    reservedAt?: Date | string | null
    remindSentTime?: number | null
    remindSentDate?: Date | string | null
  }

  export type invoiceUpdateManyMutationInput = {
    fines?: NullableFloatFieldUpdateOperationsInput | number | null
    amount?: FloatFieldUpdateOperationsInput | number
    debt?: NullableFloatFieldUpdateOperationsInput | number | null
    contractId?: IntFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    numberOfInstallment?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    monthly?: NullableStringFieldUpdateOperationsInput | string | null
    paymentMethod?: NullableStringFieldUpdateOperationsInput | string | null
    exchangeRate?: NullableFloatFieldUpdateOperationsInput | number | null
    currencyExchange?: NullableStringFieldUpdateOperationsInput | string | null
    invoiceStatus?: NullableStringFieldUpdateOperationsInput | string | null
    billPath?: NullableStringFieldUpdateOperationsInput | string | null
    paidDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdBy?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    reservedBy?: NullableIntFieldUpdateOperationsInput | number | null
    reservedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    remindSentTime?: NullableIntFieldUpdateOperationsInput | number | null
    remindSentDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type invoiceUncheckedUpdateManyInput = {
    invoiceId?: IntFieldUpdateOperationsInput | number
    fines?: NullableFloatFieldUpdateOperationsInput | number | null
    amount?: FloatFieldUpdateOperationsInput | number
    debt?: NullableFloatFieldUpdateOperationsInput | number | null
    contractId?: IntFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    numberOfInstallment?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    monthly?: NullableStringFieldUpdateOperationsInput | string | null
    paymentMethod?: NullableStringFieldUpdateOperationsInput | string | null
    exchangeRate?: NullableFloatFieldUpdateOperationsInput | number | null
    currencyExchange?: NullableStringFieldUpdateOperationsInput | string | null
    invoiceStatus?: NullableStringFieldUpdateOperationsInput | string | null
    billPath?: NullableStringFieldUpdateOperationsInput | string | null
    paidDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdBy?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    reservedBy?: NullableIntFieldUpdateOperationsInput | number | null
    reservedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    remindSentTime?: NullableIntFieldUpdateOperationsInput | number | null
    remindSentDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type logsCreateInput = {
    description?: string | null
    path: string
    body?: string | null
    userId: number
    companyId?: number | null
    ip?: string | null
    createdAt?: Date | string | null
    deletedAt?: Date | string | null
  }

  export type logsUncheckedCreateInput = {
    logId?: number
    description?: string | null
    path: string
    body?: string | null
    userId: number
    companyId?: number | null
    ip?: string | null
    createdAt?: Date | string | null
    deletedAt?: Date | string | null
  }

  export type logsUpdateInput = {
    description?: NullableStringFieldUpdateOperationsInput | string | null
    path?: StringFieldUpdateOperationsInput | string
    body?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: IntFieldUpdateOperationsInput | number
    companyId?: NullableIntFieldUpdateOperationsInput | number | null
    ip?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type logsUncheckedUpdateInput = {
    logId?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    path?: StringFieldUpdateOperationsInput | string
    body?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: IntFieldUpdateOperationsInput | number
    companyId?: NullableIntFieldUpdateOperationsInput | number | null
    ip?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type logsCreateManyInput = {
    logId?: number
    description?: string | null
    path: string
    body?: string | null
    userId: number
    companyId?: number | null
    ip?: string | null
    createdAt?: Date | string | null
    deletedAt?: Date | string | null
  }

  export type logsUpdateManyMutationInput = {
    description?: NullableStringFieldUpdateOperationsInput | string | null
    path?: StringFieldUpdateOperationsInput | string
    body?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: IntFieldUpdateOperationsInput | number
    companyId?: NullableIntFieldUpdateOperationsInput | number | null
    ip?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type logsUncheckedUpdateManyInput = {
    logId?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    path?: StringFieldUpdateOperationsInput | string
    body?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: IntFieldUpdateOperationsInput | number
    companyId?: NullableIntFieldUpdateOperationsInput | number | null
    ip?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type newsCreateInput = {
    content: string
    tel?: string | null
    imagePath?: string | null
    ip?: string | null
    userId: number
    sentType: string
    sentStatus?: string | null
    dateForSent?: Date | string | null
    multi?: string | null
    sentDate?: Date | string | null
    createdAt?: Date | string | null
    deletedAt?: Date | string | null
    deletedBy?: number | null
  }

  export type newsUncheckedCreateInput = {
    nId?: number
    content: string
    tel?: string | null
    imagePath?: string | null
    ip?: string | null
    userId: number
    sentType: string
    sentStatus?: string | null
    dateForSent?: Date | string | null
    multi?: string | null
    sentDate?: Date | string | null
    createdAt?: Date | string | null
    deletedAt?: Date | string | null
    deletedBy?: number | null
  }

  export type newsUpdateInput = {
    content?: StringFieldUpdateOperationsInput | string
    tel?: NullableStringFieldUpdateOperationsInput | string | null
    imagePath?: NullableStringFieldUpdateOperationsInput | string | null
    ip?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: IntFieldUpdateOperationsInput | number
    sentType?: StringFieldUpdateOperationsInput | string
    sentStatus?: NullableStringFieldUpdateOperationsInput | string | null
    dateForSent?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    multi?: NullableStringFieldUpdateOperationsInput | string | null
    sentDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedBy?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type newsUncheckedUpdateInput = {
    nId?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    tel?: NullableStringFieldUpdateOperationsInput | string | null
    imagePath?: NullableStringFieldUpdateOperationsInput | string | null
    ip?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: IntFieldUpdateOperationsInput | number
    sentType?: StringFieldUpdateOperationsInput | string
    sentStatus?: NullableStringFieldUpdateOperationsInput | string | null
    dateForSent?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    multi?: NullableStringFieldUpdateOperationsInput | string | null
    sentDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedBy?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type newsCreateManyInput = {
    nId?: number
    content: string
    tel?: string | null
    imagePath?: string | null
    ip?: string | null
    userId: number
    sentType: string
    sentStatus?: string | null
    dateForSent?: Date | string | null
    multi?: string | null
    sentDate?: Date | string | null
    createdAt?: Date | string | null
    deletedAt?: Date | string | null
    deletedBy?: number | null
  }

  export type newsUpdateManyMutationInput = {
    content?: StringFieldUpdateOperationsInput | string
    tel?: NullableStringFieldUpdateOperationsInput | string | null
    imagePath?: NullableStringFieldUpdateOperationsInput | string | null
    ip?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: IntFieldUpdateOperationsInput | number
    sentType?: StringFieldUpdateOperationsInput | string
    sentStatus?: NullableStringFieldUpdateOperationsInput | string | null
    dateForSent?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    multi?: NullableStringFieldUpdateOperationsInput | string | null
    sentDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedBy?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type newsUncheckedUpdateManyInput = {
    nId?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    tel?: NullableStringFieldUpdateOperationsInput | string | null
    imagePath?: NullableStringFieldUpdateOperationsInput | string | null
    ip?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: IntFieldUpdateOperationsInput | number
    sentType?: StringFieldUpdateOperationsInput | string
    sentStatus?: NullableStringFieldUpdateOperationsInput | string | null
    dateForSent?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    multi?: NullableStringFieldUpdateOperationsInput | string | null
    sentDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedBy?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type otpCreateInput = {
    tel: string
    code: string
    confirm?: string | null
    status?: string | null
    sentDate?: Date | string | null
    retry?: number | null
    createdAt?: Date | string | null
  }

  export type otpUncheckedCreateInput = {
    otpId?: number
    tel: string
    code: string
    confirm?: string | null
    status?: string | null
    sentDate?: Date | string | null
    retry?: number | null
    createdAt?: Date | string | null
  }

  export type otpUpdateInput = {
    tel?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    confirm?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    sentDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    retry?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type otpUncheckedUpdateInput = {
    otpId?: IntFieldUpdateOperationsInput | number
    tel?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    confirm?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    sentDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    retry?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type otpCreateManyInput = {
    otpId?: number
    tel: string
    code: string
    confirm?: string | null
    status?: string | null
    sentDate?: Date | string | null
    retry?: number | null
    createdAt?: Date | string | null
  }

  export type otpUpdateManyMutationInput = {
    tel?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    confirm?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    sentDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    retry?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type otpUncheckedUpdateManyInput = {
    otpId?: IntFieldUpdateOperationsInput | number
    tel?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    confirm?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    sentDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    retry?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type payment_methodCreateInput = {
    companyId: number
    accountName: string
    accountNumber: string
    qrPath?: string | null
    deletedAt?: Date | string | null
    deletedBy?: number | null
  }

  export type payment_methodUncheckedCreateInput = {
    id?: number
    companyId: number
    accountName: string
    accountNumber: string
    qrPath?: string | null
    deletedAt?: Date | string | null
    deletedBy?: number | null
  }

  export type payment_methodUpdateInput = {
    companyId?: IntFieldUpdateOperationsInput | number
    accountName?: StringFieldUpdateOperationsInput | string
    accountNumber?: StringFieldUpdateOperationsInput | string
    qrPath?: NullableStringFieldUpdateOperationsInput | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedBy?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type payment_methodUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    companyId?: IntFieldUpdateOperationsInput | number
    accountName?: StringFieldUpdateOperationsInput | string
    accountNumber?: StringFieldUpdateOperationsInput | string
    qrPath?: NullableStringFieldUpdateOperationsInput | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedBy?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type payment_methodCreateManyInput = {
    id?: number
    companyId: number
    accountName: string
    accountNumber: string
    qrPath?: string | null
    deletedAt?: Date | string | null
    deletedBy?: number | null
  }

  export type payment_methodUpdateManyMutationInput = {
    companyId?: IntFieldUpdateOperationsInput | number
    accountName?: StringFieldUpdateOperationsInput | string
    accountNumber?: StringFieldUpdateOperationsInput | string
    qrPath?: NullableStringFieldUpdateOperationsInput | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedBy?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type payment_methodUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    companyId?: IntFieldUpdateOperationsInput | number
    accountName?: StringFieldUpdateOperationsInput | string
    accountNumber?: StringFieldUpdateOperationsInput | string
    qrPath?: NullableStringFieldUpdateOperationsInput | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedBy?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type projectsCreateInput = {
    companyId: number
    area: number
    code?: string | null
    projectName: string
    address?: string | null
    createdBy: number
    updatedBy?: number | null
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
    deletedBy?: number | null
  }

  export type projectsUncheckedCreateInput = {
    projectId?: number
    companyId: number
    area: number
    code?: string | null
    projectName: string
    address?: string | null
    createdBy: number
    updatedBy?: number | null
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
    deletedBy?: number | null
  }

  export type projectsUpdateInput = {
    companyId?: IntFieldUpdateOperationsInput | number
    area?: FloatFieldUpdateOperationsInput | number
    code?: NullableStringFieldUpdateOperationsInput | string | null
    projectName?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    createdBy?: IntFieldUpdateOperationsInput | number
    updatedBy?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedBy?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type projectsUncheckedUpdateInput = {
    projectId?: IntFieldUpdateOperationsInput | number
    companyId?: IntFieldUpdateOperationsInput | number
    area?: FloatFieldUpdateOperationsInput | number
    code?: NullableStringFieldUpdateOperationsInput | string | null
    projectName?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    createdBy?: IntFieldUpdateOperationsInput | number
    updatedBy?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedBy?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type projectsCreateManyInput = {
    projectId?: number
    companyId: number
    area: number
    code?: string | null
    projectName: string
    address?: string | null
    createdBy: number
    updatedBy?: number | null
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
    deletedBy?: number | null
  }

  export type projectsUpdateManyMutationInput = {
    companyId?: IntFieldUpdateOperationsInput | number
    area?: FloatFieldUpdateOperationsInput | number
    code?: NullableStringFieldUpdateOperationsInput | string | null
    projectName?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    createdBy?: IntFieldUpdateOperationsInput | number
    updatedBy?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedBy?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type projectsUncheckedUpdateManyInput = {
    projectId?: IntFieldUpdateOperationsInput | number
    companyId?: IntFieldUpdateOperationsInput | number
    area?: FloatFieldUpdateOperationsInput | number
    code?: NullableStringFieldUpdateOperationsInput | string | null
    projectName?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    createdBy?: IntFieldUpdateOperationsInput | number
    updatedBy?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedBy?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type storesCreateInput = {
    name?: string | null
    opening_time?: Date | string | null
    closing_time?: Date | string | null
    closing_id?: string | null
  }

  export type storesUncheckedCreateInput = {
    id?: number
    name?: string | null
    opening_time?: Date | string | null
    closing_time?: Date | string | null
    closing_id?: string | null
  }

  export type storesUpdateInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    opening_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    closing_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    closing_id?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type storesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    opening_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    closing_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    closing_id?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type storesCreateManyInput = {
    id?: number
    name?: string | null
    opening_time?: Date | string | null
    closing_time?: Date | string | null
    closing_id?: string | null
  }

  export type storesUpdateManyMutationInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    opening_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    closing_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    closing_id?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type storesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    opening_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    closing_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    closing_id?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type transactionCreateInput = {
    ip: string
    amount: number
    remark?: string | null
    currency: string
    pamentMethod: string
    transactionUUID?: string | null
    contractId: number
    currencyLAK: number
    currencyTHB: number
    currencyUSD: number
    createdBy?: number | null
    updatedBy?: number | null
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
  }

  export type transactionUncheckedCreateInput = {
    transactionId?: number
    ip: string
    amount: number
    remark?: string | null
    currency: string
    pamentMethod: string
    transactionUUID?: string | null
    contractId: number
    currencyLAK: number
    currencyTHB: number
    currencyUSD: number
    createdBy?: number | null
    updatedBy?: number | null
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
  }

  export type transactionUpdateInput = {
    ip?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    remark?: NullableStringFieldUpdateOperationsInput | string | null
    currency?: StringFieldUpdateOperationsInput | string
    pamentMethod?: StringFieldUpdateOperationsInput | string
    transactionUUID?: NullableStringFieldUpdateOperationsInput | string | null
    contractId?: IntFieldUpdateOperationsInput | number
    currencyLAK?: FloatFieldUpdateOperationsInput | number
    currencyTHB?: FloatFieldUpdateOperationsInput | number
    currencyUSD?: FloatFieldUpdateOperationsInput | number
    createdBy?: NullableIntFieldUpdateOperationsInput | number | null
    updatedBy?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type transactionUncheckedUpdateInput = {
    transactionId?: IntFieldUpdateOperationsInput | number
    ip?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    remark?: NullableStringFieldUpdateOperationsInput | string | null
    currency?: StringFieldUpdateOperationsInput | string
    pamentMethod?: StringFieldUpdateOperationsInput | string
    transactionUUID?: NullableStringFieldUpdateOperationsInput | string | null
    contractId?: IntFieldUpdateOperationsInput | number
    currencyLAK?: FloatFieldUpdateOperationsInput | number
    currencyTHB?: FloatFieldUpdateOperationsInput | number
    currencyUSD?: FloatFieldUpdateOperationsInput | number
    createdBy?: NullableIntFieldUpdateOperationsInput | number | null
    updatedBy?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type transactionCreateManyInput = {
    transactionId?: number
    ip: string
    amount: number
    remark?: string | null
    currency: string
    pamentMethod: string
    transactionUUID?: string | null
    contractId: number
    currencyLAK: number
    currencyTHB: number
    currencyUSD: number
    createdBy?: number | null
    updatedBy?: number | null
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
  }

  export type transactionUpdateManyMutationInput = {
    ip?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    remark?: NullableStringFieldUpdateOperationsInput | string | null
    currency?: StringFieldUpdateOperationsInput | string
    pamentMethod?: StringFieldUpdateOperationsInput | string
    transactionUUID?: NullableStringFieldUpdateOperationsInput | string | null
    contractId?: IntFieldUpdateOperationsInput | number
    currencyLAK?: FloatFieldUpdateOperationsInput | number
    currencyTHB?: FloatFieldUpdateOperationsInput | number
    currencyUSD?: FloatFieldUpdateOperationsInput | number
    createdBy?: NullableIntFieldUpdateOperationsInput | number | null
    updatedBy?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type transactionUncheckedUpdateManyInput = {
    transactionId?: IntFieldUpdateOperationsInput | number
    ip?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    remark?: NullableStringFieldUpdateOperationsInput | string | null
    currency?: StringFieldUpdateOperationsInput | string
    pamentMethod?: StringFieldUpdateOperationsInput | string
    transactionUUID?: NullableStringFieldUpdateOperationsInput | string | null
    contractId?: IntFieldUpdateOperationsInput | number
    currencyLAK?: FloatFieldUpdateOperationsInput | number
    currencyTHB?: FloatFieldUpdateOperationsInput | number
    currencyUSD?: FloatFieldUpdateOperationsInput | number
    createdBy?: NullableIntFieldUpdateOperationsInput | number | null
    updatedBy?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type usersCreateInput = {
    companyId?: number | null
    fullName: string
    lastName: string
    tel: string
    password: string
    role?: string | null
    userStatus?: boolean | null
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
  }

  export type usersUncheckedCreateInput = {
    userId?: number
    companyId?: number | null
    fullName: string
    lastName: string
    tel: string
    password: string
    role?: string | null
    userStatus?: boolean | null
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
  }

  export type usersUpdateInput = {
    companyId?: NullableIntFieldUpdateOperationsInput | number | null
    fullName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    tel?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: NullableStringFieldUpdateOperationsInput | string | null
    userStatus?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type usersUncheckedUpdateInput = {
    userId?: IntFieldUpdateOperationsInput | number
    companyId?: NullableIntFieldUpdateOperationsInput | number | null
    fullName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    tel?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: NullableStringFieldUpdateOperationsInput | string | null
    userStatus?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type usersCreateManyInput = {
    userId?: number
    companyId?: number | null
    fullName: string
    lastName: string
    tel: string
    password: string
    role?: string | null
    userStatus?: boolean | null
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
  }

  export type usersUpdateManyMutationInput = {
    companyId?: NullableIntFieldUpdateOperationsInput | number | null
    fullName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    tel?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: NullableStringFieldUpdateOperationsInput | string | null
    userStatus?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type usersUncheckedUpdateManyInput = {
    userId?: IntFieldUpdateOperationsInput | number
    companyId?: NullableIntFieldUpdateOperationsInput | number | null
    fullName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    tel?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: NullableStringFieldUpdateOperationsInput | string | null
    userStatus?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type BoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type companyCountOrderByAggregateInput = {
    companyId?: SortOrder
    companyName?: SortOrder
    logoPath?: SortOrder
    financeTel?: SortOrder
    fax?: SortOrder
    tel?: SortOrder
    email?: SortOrder
    whatsapp?: SortOrder
    address?: SortOrder
    createdBy?: SortOrder
    updatedBy?: SortOrder
    companyStatus?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
    deletedBy?: SortOrder
  }

  export type companyAvgOrderByAggregateInput = {
    companyId?: SortOrder
    createdBy?: SortOrder
    updatedBy?: SortOrder
    deletedBy?: SortOrder
  }

  export type companyMaxOrderByAggregateInput = {
    companyId?: SortOrder
    companyName?: SortOrder
    logoPath?: SortOrder
    financeTel?: SortOrder
    fax?: SortOrder
    tel?: SortOrder
    email?: SortOrder
    whatsapp?: SortOrder
    address?: SortOrder
    createdBy?: SortOrder
    updatedBy?: SortOrder
    companyStatus?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
    deletedBy?: SortOrder
  }

  export type companyMinOrderByAggregateInput = {
    companyId?: SortOrder
    companyName?: SortOrder
    logoPath?: SortOrder
    financeTel?: SortOrder
    fax?: SortOrder
    tel?: SortOrder
    email?: SortOrder
    whatsapp?: SortOrder
    address?: SortOrder
    createdBy?: SortOrder
    updatedBy?: SortOrder
    companyStatus?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
    deletedBy?: SortOrder
  }

  export type companySumOrderByAggregateInput = {
    companyId?: SortOrder
    createdBy?: SortOrder
    updatedBy?: SortOrder
    deletedBy?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type BoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type contractsCountOrderByAggregateInput = {
    contractId?: SortOrder
    companyId?: SortOrder
    docId?: SortOrder
    createdBy?: SortOrder
    updatedBy?: SortOrder
    projectId?: SortOrder
    price?: SortOrder
    totalPrice?: SortOrder
    currency?: SortOrder
    contractStatus?: SortOrder
    area?: SortOrder
    numberOfInstallment?: SortOrder
    payDay?: SortOrder
    modeOfPayment?: SortOrder
    payInAdvance?: SortOrder
    customerIdOne?: SortOrder
    customerIdTwo?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    cancelAt?: SortOrder
    cancelBy?: SortOrder
    reason?: SortOrder
    lastInvoice?: SortOrder
    deletedAt?: SortOrder
    deletedBy?: SortOrder
  }

  export type contractsAvgOrderByAggregateInput = {
    contractId?: SortOrder
    companyId?: SortOrder
    createdBy?: SortOrder
    updatedBy?: SortOrder
    projectId?: SortOrder
    price?: SortOrder
    totalPrice?: SortOrder
    area?: SortOrder
    numberOfInstallment?: SortOrder
    payInAdvance?: SortOrder
    customerIdOne?: SortOrder
    customerIdTwo?: SortOrder
    cancelBy?: SortOrder
    lastInvoice?: SortOrder
    deletedBy?: SortOrder
  }

  export type contractsMaxOrderByAggregateInput = {
    contractId?: SortOrder
    companyId?: SortOrder
    docId?: SortOrder
    createdBy?: SortOrder
    updatedBy?: SortOrder
    projectId?: SortOrder
    price?: SortOrder
    totalPrice?: SortOrder
    currency?: SortOrder
    contractStatus?: SortOrder
    area?: SortOrder
    numberOfInstallment?: SortOrder
    payDay?: SortOrder
    modeOfPayment?: SortOrder
    payInAdvance?: SortOrder
    customerIdOne?: SortOrder
    customerIdTwo?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    cancelAt?: SortOrder
    cancelBy?: SortOrder
    reason?: SortOrder
    lastInvoice?: SortOrder
    deletedAt?: SortOrder
    deletedBy?: SortOrder
  }

  export type contractsMinOrderByAggregateInput = {
    contractId?: SortOrder
    companyId?: SortOrder
    docId?: SortOrder
    createdBy?: SortOrder
    updatedBy?: SortOrder
    projectId?: SortOrder
    price?: SortOrder
    totalPrice?: SortOrder
    currency?: SortOrder
    contractStatus?: SortOrder
    area?: SortOrder
    numberOfInstallment?: SortOrder
    payDay?: SortOrder
    modeOfPayment?: SortOrder
    payInAdvance?: SortOrder
    customerIdOne?: SortOrder
    customerIdTwo?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    cancelAt?: SortOrder
    cancelBy?: SortOrder
    reason?: SortOrder
    lastInvoice?: SortOrder
    deletedAt?: SortOrder
    deletedBy?: SortOrder
  }

  export type contractsSumOrderByAggregateInput = {
    contractId?: SortOrder
    companyId?: SortOrder
    createdBy?: SortOrder
    updatedBy?: SortOrder
    projectId?: SortOrder
    price?: SortOrder
    totalPrice?: SortOrder
    area?: SortOrder
    numberOfInstallment?: SortOrder
    payInAdvance?: SortOrder
    customerIdOne?: SortOrder
    customerIdTwo?: SortOrder
    cancelBy?: SortOrder
    lastInvoice?: SortOrder
    deletedBy?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type exchangeCountOrderByAggregateInput = {
    exchangeId?: SortOrder
    companyId?: SortOrder
    thb?: SortOrder
    usd?: SortOrder
    createdBy?: SortOrder
    updatedBy?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
    deletedBy?: SortOrder
  }

  export type exchangeAvgOrderByAggregateInput = {
    exchangeId?: SortOrder
    companyId?: SortOrder
    thb?: SortOrder
    usd?: SortOrder
    createdBy?: SortOrder
    updatedBy?: SortOrder
    deletedBy?: SortOrder
  }

  export type exchangeMaxOrderByAggregateInput = {
    exchangeId?: SortOrder
    companyId?: SortOrder
    thb?: SortOrder
    usd?: SortOrder
    createdBy?: SortOrder
    updatedBy?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
    deletedBy?: SortOrder
  }

  export type exchangeMinOrderByAggregateInput = {
    exchangeId?: SortOrder
    companyId?: SortOrder
    thb?: SortOrder
    usd?: SortOrder
    createdBy?: SortOrder
    updatedBy?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
    deletedBy?: SortOrder
  }

  export type exchangeSumOrderByAggregateInput = {
    exchangeId?: SortOrder
    companyId?: SortOrder
    thb?: SortOrder
    usd?: SortOrder
    createdBy?: SortOrder
    updatedBy?: SortOrder
    deletedBy?: SortOrder
  }

  export type invoiceCountOrderByAggregateInput = {
    invoiceId?: SortOrder
    fines?: SortOrder
    amount?: SortOrder
    debt?: SortOrder
    contractId?: SortOrder
    currency?: SortOrder
    numberOfInstallment?: SortOrder
    comment?: SortOrder
    monthly?: SortOrder
    paymentMethod?: SortOrder
    exchangeRate?: SortOrder
    currencyExchange?: SortOrder
    invoiceStatus?: SortOrder
    billPath?: SortOrder
    paidDate?: SortOrder
    createdBy?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    reservedBy?: SortOrder
    reservedAt?: SortOrder
    remindSentTime?: SortOrder
    remindSentDate?: SortOrder
  }

  export type invoiceAvgOrderByAggregateInput = {
    invoiceId?: SortOrder
    fines?: SortOrder
    amount?: SortOrder
    debt?: SortOrder
    contractId?: SortOrder
    numberOfInstallment?: SortOrder
    exchangeRate?: SortOrder
    createdBy?: SortOrder
    reservedBy?: SortOrder
    remindSentTime?: SortOrder
  }

  export type invoiceMaxOrderByAggregateInput = {
    invoiceId?: SortOrder
    fines?: SortOrder
    amount?: SortOrder
    debt?: SortOrder
    contractId?: SortOrder
    currency?: SortOrder
    numberOfInstallment?: SortOrder
    comment?: SortOrder
    monthly?: SortOrder
    paymentMethod?: SortOrder
    exchangeRate?: SortOrder
    currencyExchange?: SortOrder
    invoiceStatus?: SortOrder
    billPath?: SortOrder
    paidDate?: SortOrder
    createdBy?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    reservedBy?: SortOrder
    reservedAt?: SortOrder
    remindSentTime?: SortOrder
    remindSentDate?: SortOrder
  }

  export type invoiceMinOrderByAggregateInput = {
    invoiceId?: SortOrder
    fines?: SortOrder
    amount?: SortOrder
    debt?: SortOrder
    contractId?: SortOrder
    currency?: SortOrder
    numberOfInstallment?: SortOrder
    comment?: SortOrder
    monthly?: SortOrder
    paymentMethod?: SortOrder
    exchangeRate?: SortOrder
    currencyExchange?: SortOrder
    invoiceStatus?: SortOrder
    billPath?: SortOrder
    paidDate?: SortOrder
    createdBy?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    reservedBy?: SortOrder
    reservedAt?: SortOrder
    remindSentTime?: SortOrder
    remindSentDate?: SortOrder
  }

  export type invoiceSumOrderByAggregateInput = {
    invoiceId?: SortOrder
    fines?: SortOrder
    amount?: SortOrder
    debt?: SortOrder
    contractId?: SortOrder
    numberOfInstallment?: SortOrder
    exchangeRate?: SortOrder
    createdBy?: SortOrder
    reservedBy?: SortOrder
    remindSentTime?: SortOrder
  }

  export type logsCountOrderByAggregateInput = {
    logId?: SortOrder
    description?: SortOrder
    path?: SortOrder
    body?: SortOrder
    userId?: SortOrder
    companyId?: SortOrder
    ip?: SortOrder
    createdAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type logsAvgOrderByAggregateInput = {
    logId?: SortOrder
    userId?: SortOrder
    companyId?: SortOrder
  }

  export type logsMaxOrderByAggregateInput = {
    logId?: SortOrder
    description?: SortOrder
    path?: SortOrder
    body?: SortOrder
    userId?: SortOrder
    companyId?: SortOrder
    ip?: SortOrder
    createdAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type logsMinOrderByAggregateInput = {
    logId?: SortOrder
    description?: SortOrder
    path?: SortOrder
    body?: SortOrder
    userId?: SortOrder
    companyId?: SortOrder
    ip?: SortOrder
    createdAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type logsSumOrderByAggregateInput = {
    logId?: SortOrder
    userId?: SortOrder
    companyId?: SortOrder
  }

  export type newsCountOrderByAggregateInput = {
    nId?: SortOrder
    content?: SortOrder
    tel?: SortOrder
    imagePath?: SortOrder
    ip?: SortOrder
    userId?: SortOrder
    sentType?: SortOrder
    sentStatus?: SortOrder
    dateForSent?: SortOrder
    multi?: SortOrder
    sentDate?: SortOrder
    createdAt?: SortOrder
    deletedAt?: SortOrder
    deletedBy?: SortOrder
  }

  export type newsAvgOrderByAggregateInput = {
    nId?: SortOrder
    userId?: SortOrder
    deletedBy?: SortOrder
  }

  export type newsMaxOrderByAggregateInput = {
    nId?: SortOrder
    content?: SortOrder
    tel?: SortOrder
    imagePath?: SortOrder
    ip?: SortOrder
    userId?: SortOrder
    sentType?: SortOrder
    sentStatus?: SortOrder
    dateForSent?: SortOrder
    multi?: SortOrder
    sentDate?: SortOrder
    createdAt?: SortOrder
    deletedAt?: SortOrder
    deletedBy?: SortOrder
  }

  export type newsMinOrderByAggregateInput = {
    nId?: SortOrder
    content?: SortOrder
    tel?: SortOrder
    imagePath?: SortOrder
    ip?: SortOrder
    userId?: SortOrder
    sentType?: SortOrder
    sentStatus?: SortOrder
    dateForSent?: SortOrder
    multi?: SortOrder
    sentDate?: SortOrder
    createdAt?: SortOrder
    deletedAt?: SortOrder
    deletedBy?: SortOrder
  }

  export type newsSumOrderByAggregateInput = {
    nId?: SortOrder
    userId?: SortOrder
    deletedBy?: SortOrder
  }

  export type otpCountOrderByAggregateInput = {
    otpId?: SortOrder
    tel?: SortOrder
    code?: SortOrder
    confirm?: SortOrder
    status?: SortOrder
    sentDate?: SortOrder
    retry?: SortOrder
    createdAt?: SortOrder
  }

  export type otpAvgOrderByAggregateInput = {
    otpId?: SortOrder
    retry?: SortOrder
  }

  export type otpMaxOrderByAggregateInput = {
    otpId?: SortOrder
    tel?: SortOrder
    code?: SortOrder
    confirm?: SortOrder
    status?: SortOrder
    sentDate?: SortOrder
    retry?: SortOrder
    createdAt?: SortOrder
  }

  export type otpMinOrderByAggregateInput = {
    otpId?: SortOrder
    tel?: SortOrder
    code?: SortOrder
    confirm?: SortOrder
    status?: SortOrder
    sentDate?: SortOrder
    retry?: SortOrder
    createdAt?: SortOrder
  }

  export type otpSumOrderByAggregateInput = {
    otpId?: SortOrder
    retry?: SortOrder
  }

  export type payment_methodCountOrderByAggregateInput = {
    id?: SortOrder
    companyId?: SortOrder
    accountName?: SortOrder
    accountNumber?: SortOrder
    qrPath?: SortOrder
    deletedAt?: SortOrder
    deletedBy?: SortOrder
  }

  export type payment_methodAvgOrderByAggregateInput = {
    id?: SortOrder
    companyId?: SortOrder
    deletedBy?: SortOrder
  }

  export type payment_methodMaxOrderByAggregateInput = {
    id?: SortOrder
    companyId?: SortOrder
    accountName?: SortOrder
    accountNumber?: SortOrder
    qrPath?: SortOrder
    deletedAt?: SortOrder
    deletedBy?: SortOrder
  }

  export type payment_methodMinOrderByAggregateInput = {
    id?: SortOrder
    companyId?: SortOrder
    accountName?: SortOrder
    accountNumber?: SortOrder
    qrPath?: SortOrder
    deletedAt?: SortOrder
    deletedBy?: SortOrder
  }

  export type payment_methodSumOrderByAggregateInput = {
    id?: SortOrder
    companyId?: SortOrder
    deletedBy?: SortOrder
  }

  export type projectsCountOrderByAggregateInput = {
    projectId?: SortOrder
    companyId?: SortOrder
    area?: SortOrder
    code?: SortOrder
    projectName?: SortOrder
    address?: SortOrder
    createdBy?: SortOrder
    updatedBy?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
    deletedBy?: SortOrder
  }

  export type projectsAvgOrderByAggregateInput = {
    projectId?: SortOrder
    companyId?: SortOrder
    area?: SortOrder
    createdBy?: SortOrder
    updatedBy?: SortOrder
    deletedBy?: SortOrder
  }

  export type projectsMaxOrderByAggregateInput = {
    projectId?: SortOrder
    companyId?: SortOrder
    area?: SortOrder
    code?: SortOrder
    projectName?: SortOrder
    address?: SortOrder
    createdBy?: SortOrder
    updatedBy?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
    deletedBy?: SortOrder
  }

  export type projectsMinOrderByAggregateInput = {
    projectId?: SortOrder
    companyId?: SortOrder
    area?: SortOrder
    code?: SortOrder
    projectName?: SortOrder
    address?: SortOrder
    createdBy?: SortOrder
    updatedBy?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
    deletedBy?: SortOrder
  }

  export type projectsSumOrderByAggregateInput = {
    projectId?: SortOrder
    companyId?: SortOrder
    area?: SortOrder
    createdBy?: SortOrder
    updatedBy?: SortOrder
    deletedBy?: SortOrder
  }

  export type storesCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    opening_time?: SortOrder
    closing_time?: SortOrder
    closing_id?: SortOrder
  }

  export type storesAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type storesMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    opening_time?: SortOrder
    closing_time?: SortOrder
    closing_id?: SortOrder
  }

  export type storesMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    opening_time?: SortOrder
    closing_time?: SortOrder
    closing_id?: SortOrder
  }

  export type storesSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type transactionCountOrderByAggregateInput = {
    transactionId?: SortOrder
    ip?: SortOrder
    amount?: SortOrder
    remark?: SortOrder
    currency?: SortOrder
    pamentMethod?: SortOrder
    transactionUUID?: SortOrder
    contractId?: SortOrder
    currencyLAK?: SortOrder
    currencyTHB?: SortOrder
    currencyUSD?: SortOrder
    createdBy?: SortOrder
    updatedBy?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type transactionAvgOrderByAggregateInput = {
    transactionId?: SortOrder
    amount?: SortOrder
    contractId?: SortOrder
    currencyLAK?: SortOrder
    currencyTHB?: SortOrder
    currencyUSD?: SortOrder
    createdBy?: SortOrder
    updatedBy?: SortOrder
  }

  export type transactionMaxOrderByAggregateInput = {
    transactionId?: SortOrder
    ip?: SortOrder
    amount?: SortOrder
    remark?: SortOrder
    currency?: SortOrder
    pamentMethod?: SortOrder
    transactionUUID?: SortOrder
    contractId?: SortOrder
    currencyLAK?: SortOrder
    currencyTHB?: SortOrder
    currencyUSD?: SortOrder
    createdBy?: SortOrder
    updatedBy?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type transactionMinOrderByAggregateInput = {
    transactionId?: SortOrder
    ip?: SortOrder
    amount?: SortOrder
    remark?: SortOrder
    currency?: SortOrder
    pamentMethod?: SortOrder
    transactionUUID?: SortOrder
    contractId?: SortOrder
    currencyLAK?: SortOrder
    currencyTHB?: SortOrder
    currencyUSD?: SortOrder
    createdBy?: SortOrder
    updatedBy?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type transactionSumOrderByAggregateInput = {
    transactionId?: SortOrder
    amount?: SortOrder
    contractId?: SortOrder
    currencyLAK?: SortOrder
    currencyTHB?: SortOrder
    currencyUSD?: SortOrder
    createdBy?: SortOrder
    updatedBy?: SortOrder
  }

  export type usersCountOrderByAggregateInput = {
    userId?: SortOrder
    companyId?: SortOrder
    fullName?: SortOrder
    lastName?: SortOrder
    tel?: SortOrder
    password?: SortOrder
    role?: SortOrder
    userStatus?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type usersAvgOrderByAggregateInput = {
    userId?: SortOrder
    companyId?: SortOrder
  }

  export type usersMaxOrderByAggregateInput = {
    userId?: SortOrder
    companyId?: SortOrder
    fullName?: SortOrder
    lastName?: SortOrder
    tel?: SortOrder
    password?: SortOrder
    role?: SortOrder
    userStatus?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type usersMinOrderByAggregateInput = {
    userId?: SortOrder
    companyId?: SortOrder
    fullName?: SortOrder
    lastName?: SortOrder
    tel?: SortOrder
    password?: SortOrder
    role?: SortOrder
    userStatus?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type usersSumOrderByAggregateInput = {
    userId?: SortOrder
    companyId?: SortOrder
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableBoolFieldUpdateOperationsInput = {
    set?: boolean | null
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use companyDefaultArgs instead
     */
    export type companyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = companyDefaultArgs<ExtArgs>
    /**
     * @deprecated Use contractsDefaultArgs instead
     */
    export type contractsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = contractsDefaultArgs<ExtArgs>
    /**
     * @deprecated Use exchangeDefaultArgs instead
     */
    export type exchangeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = exchangeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use invoiceDefaultArgs instead
     */
    export type invoiceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = invoiceDefaultArgs<ExtArgs>
    /**
     * @deprecated Use logsDefaultArgs instead
     */
    export type logsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = logsDefaultArgs<ExtArgs>
    /**
     * @deprecated Use newsDefaultArgs instead
     */
    export type newsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = newsDefaultArgs<ExtArgs>
    /**
     * @deprecated Use otpDefaultArgs instead
     */
    export type otpArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = otpDefaultArgs<ExtArgs>
    /**
     * @deprecated Use payment_methodDefaultArgs instead
     */
    export type payment_methodArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = payment_methodDefaultArgs<ExtArgs>
    /**
     * @deprecated Use projectsDefaultArgs instead
     */
    export type projectsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = projectsDefaultArgs<ExtArgs>
    /**
     * @deprecated Use storesDefaultArgs instead
     */
    export type storesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = storesDefaultArgs<ExtArgs>
    /**
     * @deprecated Use transactionDefaultArgs instead
     */
    export type transactionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = transactionDefaultArgs<ExtArgs>
    /**
     * @deprecated Use usersDefaultArgs instead
     */
    export type usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = usersDefaultArgs<ExtArgs>

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}