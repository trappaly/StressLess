
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model users
 * 
 */
export type users = $Result.DefaultSelection<Prisma.$usersPayload>
/**
 * Model preference_questions
 * 
 */
export type preference_questions = $Result.DefaultSelection<Prisma.$preference_questionsPayload>
/**
 * Model user_preferences
 * 
 */
export type user_preferences = $Result.DefaultSelection<Prisma.$user_preferencesPayload>
/**
 * Model user_events
 * 
 */
export type user_events = $Result.DefaultSelection<Prisma.$user_eventsPayload>
/**
 * Model user_deadlines
 * 
 */
export type user_deadlines = $Result.DefaultSelection<Prisma.$user_deadlinesPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.users.findMany()
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
   * // Fetch zero or more Users
   * const users = await prisma.users.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

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


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.users`: Exposes CRUD operations for the **users** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.users.findMany()
    * ```
    */
  get users(): Prisma.usersDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.preference_questions`: Exposes CRUD operations for the **preference_questions** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Preference_questions
    * const preference_questions = await prisma.preference_questions.findMany()
    * ```
    */
  get preference_questions(): Prisma.preference_questionsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.user_preferences`: Exposes CRUD operations for the **user_preferences** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more User_preferences
    * const user_preferences = await prisma.user_preferences.findMany()
    * ```
    */
  get user_preferences(): Prisma.user_preferencesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.user_events`: Exposes CRUD operations for the **user_events** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more User_events
    * const user_events = await prisma.user_events.findMany()
    * ```
    */
  get user_events(): Prisma.user_eventsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.user_deadlines`: Exposes CRUD operations for the **user_deadlines** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more User_deadlines
    * const user_deadlines = await prisma.user_deadlines.findMany()
    * ```
    */
  get user_deadlines(): Prisma.user_deadlinesDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
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
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
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
    users: 'users',
    preference_questions: 'preference_questions',
    user_preferences: 'user_preferences',
    user_events: 'user_events',
    user_deadlines: 'user_deadlines'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "users" | "preference_questions" | "user_preferences" | "user_events" | "user_deadlines"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
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
          createManyAndReturn: {
            args: Prisma.usersCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>[]
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
          updateManyAndReturn: {
            args: Prisma.usersUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>[]
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
      preference_questions: {
        payload: Prisma.$preference_questionsPayload<ExtArgs>
        fields: Prisma.preference_questionsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.preference_questionsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$preference_questionsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.preference_questionsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$preference_questionsPayload>
          }
          findFirst: {
            args: Prisma.preference_questionsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$preference_questionsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.preference_questionsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$preference_questionsPayload>
          }
          findMany: {
            args: Prisma.preference_questionsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$preference_questionsPayload>[]
          }
          create: {
            args: Prisma.preference_questionsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$preference_questionsPayload>
          }
          createMany: {
            args: Prisma.preference_questionsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.preference_questionsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$preference_questionsPayload>[]
          }
          delete: {
            args: Prisma.preference_questionsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$preference_questionsPayload>
          }
          update: {
            args: Prisma.preference_questionsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$preference_questionsPayload>
          }
          deleteMany: {
            args: Prisma.preference_questionsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.preference_questionsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.preference_questionsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$preference_questionsPayload>[]
          }
          upsert: {
            args: Prisma.preference_questionsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$preference_questionsPayload>
          }
          aggregate: {
            args: Prisma.Preference_questionsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePreference_questions>
          }
          groupBy: {
            args: Prisma.preference_questionsGroupByArgs<ExtArgs>
            result: $Utils.Optional<Preference_questionsGroupByOutputType>[]
          }
          count: {
            args: Prisma.preference_questionsCountArgs<ExtArgs>
            result: $Utils.Optional<Preference_questionsCountAggregateOutputType> | number
          }
        }
      }
      user_preferences: {
        payload: Prisma.$user_preferencesPayload<ExtArgs>
        fields: Prisma.user_preferencesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.user_preferencesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_preferencesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.user_preferencesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_preferencesPayload>
          }
          findFirst: {
            args: Prisma.user_preferencesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_preferencesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.user_preferencesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_preferencesPayload>
          }
          findMany: {
            args: Prisma.user_preferencesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_preferencesPayload>[]
          }
          create: {
            args: Prisma.user_preferencesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_preferencesPayload>
          }
          createMany: {
            args: Prisma.user_preferencesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.user_preferencesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_preferencesPayload>[]
          }
          delete: {
            args: Prisma.user_preferencesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_preferencesPayload>
          }
          update: {
            args: Prisma.user_preferencesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_preferencesPayload>
          }
          deleteMany: {
            args: Prisma.user_preferencesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.user_preferencesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.user_preferencesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_preferencesPayload>[]
          }
          upsert: {
            args: Prisma.user_preferencesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_preferencesPayload>
          }
          aggregate: {
            args: Prisma.User_preferencesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser_preferences>
          }
          groupBy: {
            args: Prisma.user_preferencesGroupByArgs<ExtArgs>
            result: $Utils.Optional<User_preferencesGroupByOutputType>[]
          }
          count: {
            args: Prisma.user_preferencesCountArgs<ExtArgs>
            result: $Utils.Optional<User_preferencesCountAggregateOutputType> | number
          }
        }
      }
      user_events: {
        payload: Prisma.$user_eventsPayload<ExtArgs>
        fields: Prisma.user_eventsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.user_eventsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_eventsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.user_eventsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_eventsPayload>
          }
          findFirst: {
            args: Prisma.user_eventsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_eventsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.user_eventsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_eventsPayload>
          }
          findMany: {
            args: Prisma.user_eventsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_eventsPayload>[]
          }
          create: {
            args: Prisma.user_eventsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_eventsPayload>
          }
          createMany: {
            args: Prisma.user_eventsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.user_eventsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_eventsPayload>[]
          }
          delete: {
            args: Prisma.user_eventsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_eventsPayload>
          }
          update: {
            args: Prisma.user_eventsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_eventsPayload>
          }
          deleteMany: {
            args: Prisma.user_eventsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.user_eventsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.user_eventsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_eventsPayload>[]
          }
          upsert: {
            args: Prisma.user_eventsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_eventsPayload>
          }
          aggregate: {
            args: Prisma.User_eventsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser_events>
          }
          groupBy: {
            args: Prisma.user_eventsGroupByArgs<ExtArgs>
            result: $Utils.Optional<User_eventsGroupByOutputType>[]
          }
          count: {
            args: Prisma.user_eventsCountArgs<ExtArgs>
            result: $Utils.Optional<User_eventsCountAggregateOutputType> | number
          }
        }
      }
      user_deadlines: {
        payload: Prisma.$user_deadlinesPayload<ExtArgs>
        fields: Prisma.user_deadlinesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.user_deadlinesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_deadlinesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.user_deadlinesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_deadlinesPayload>
          }
          findFirst: {
            args: Prisma.user_deadlinesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_deadlinesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.user_deadlinesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_deadlinesPayload>
          }
          findMany: {
            args: Prisma.user_deadlinesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_deadlinesPayload>[]
          }
          create: {
            args: Prisma.user_deadlinesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_deadlinesPayload>
          }
          createMany: {
            args: Prisma.user_deadlinesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.user_deadlinesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_deadlinesPayload>[]
          }
          delete: {
            args: Prisma.user_deadlinesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_deadlinesPayload>
          }
          update: {
            args: Prisma.user_deadlinesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_deadlinesPayload>
          }
          deleteMany: {
            args: Prisma.user_deadlinesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.user_deadlinesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.user_deadlinesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_deadlinesPayload>[]
          }
          upsert: {
            args: Prisma.user_deadlinesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_deadlinesPayload>
          }
          aggregate: {
            args: Prisma.User_deadlinesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser_deadlines>
          }
          groupBy: {
            args: Prisma.user_deadlinesGroupByArgs<ExtArgs>
            result: $Utils.Optional<User_deadlinesGroupByOutputType>[]
          }
          count: {
            args: Prisma.user_deadlinesCountArgs<ExtArgs>
            result: $Utils.Optional<User_deadlinesCountAggregateOutputType> | number
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
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    users?: usersOmit
    preference_questions?: preference_questionsOmit
    user_preferences?: user_preferencesOmit
    user_events?: user_eventsOmit
    user_deadlines?: user_deadlinesOmit
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
    | 'updateManyAndReturn'
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
   * Model users
   */

  export type AggregateUsers = {
    _count: UsersCountAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  export type UsersMinAggregateOutputType = {
    id: string | null
    email: string | null
    created_at: Date | null
  }

  export type UsersMaxAggregateOutputType = {
    id: string | null
    email: string | null
    created_at: Date | null
  }

  export type UsersCountAggregateOutputType = {
    id: number
    email: number
    created_at: number
    _all: number
  }


  export type UsersMinAggregateInputType = {
    id?: true
    email?: true
    created_at?: true
  }

  export type UsersMaxAggregateInputType = {
    id?: true
    email?: true
    created_at?: true
  }

  export type UsersCountAggregateInputType = {
    id?: true
    email?: true
    created_at?: true
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
    _min?: UsersMinAggregateInputType
    _max?: UsersMaxAggregateInputType
  }

  export type UsersGroupByOutputType = {
    id: string
    email: string
    created_at: Date
    _count: UsersCountAggregateOutputType | null
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
    id?: boolean
    email?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["users"]>

  export type usersSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["users"]>

  export type usersSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["users"]>

  export type usersSelectScalar = {
    id?: boolean
    email?: boolean
    created_at?: boolean
  }

  export type usersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "created_at", ExtArgs["result"]["users"]>

  export type $usersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "users"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      created_at: Date
    }, ExtArgs["result"]["users"]>
    composites: {}
  }

  type usersGetPayload<S extends boolean | null | undefined | usersDefaultArgs> = $Result.GetResult<Prisma.$usersPayload, S>

  type usersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<usersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsersCountAggregateInputType | true
    }

  export interface usersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
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
    findUnique<T extends usersFindUniqueArgs>(args: SelectSubset<T, usersFindUniqueArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

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
    findUniqueOrThrow<T extends usersFindUniqueOrThrowArgs>(args: SelectSubset<T, usersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
    findFirst<T extends usersFindFirstArgs>(args?: SelectSubset<T, usersFindFirstArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

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
    findFirstOrThrow<T extends usersFindFirstOrThrowArgs>(args?: SelectSubset<T, usersFindFirstOrThrowArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
     * // Only select the `id`
     * const usersWithIdOnly = await prisma.users.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends usersFindManyArgs>(args?: SelectSubset<T, usersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

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
    create<T extends usersCreateArgs>(args: SelectSubset<T, usersCreateArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
     * Create many Users and returns the data saved in the database.
     * @param {usersCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const usersWithIdOnly = await prisma.users.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends usersCreateManyAndReturnArgs>(args?: SelectSubset<T, usersCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

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
    delete<T extends usersDeleteArgs>(args: SelectSubset<T, usersDeleteArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
    update<T extends usersUpdateArgs>(args: SelectSubset<T, usersUpdateArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
     * Update zero or more Users and returns the data updated in the database.
     * @param {usersUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const usersWithIdOnly = await prisma.users.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends usersUpdateManyAndReturnArgs>(args: SelectSubset<T, usersUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

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
    upsert<T extends usersUpsertArgs>(args: SelectSubset<T, usersUpsertArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


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
  export interface Prisma__usersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
    readonly id: FieldRef<"users", 'String'>
    readonly email: FieldRef<"users", 'String'>
    readonly created_at: FieldRef<"users", 'DateTime'>
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
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
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
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
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
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
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
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
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
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
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
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
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
   * users createManyAndReturn
   */
  export type usersCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
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
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
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
    /**
     * Limit how many users to update.
     */
    limit?: number
  }

  /**
   * users updateManyAndReturn
   */
  export type usersUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * The data used to update users.
     */
    data: XOR<usersUpdateManyMutationInput, usersUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: usersWhereInput
    /**
     * Limit how many users to update.
     */
    limit?: number
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
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
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
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
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
    /**
     * Limit how many users to delete.
     */
    limit?: number
  }

  /**
   * users without action
   */
  export type usersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
  }


  /**
   * Model preference_questions
   */

  export type AggregatePreference_questions = {
    _count: Preference_questionsCountAggregateOutputType | null
    _min: Preference_questionsMinAggregateOutputType | null
    _max: Preference_questionsMaxAggregateOutputType | null
  }

  export type Preference_questionsMinAggregateOutputType = {
    id: string | null
    question_text: string | null
  }

  export type Preference_questionsMaxAggregateOutputType = {
    id: string | null
    question_text: string | null
  }

  export type Preference_questionsCountAggregateOutputType = {
    id: number
    question_text: number
    _all: number
  }


  export type Preference_questionsMinAggregateInputType = {
    id?: true
    question_text?: true
  }

  export type Preference_questionsMaxAggregateInputType = {
    id?: true
    question_text?: true
  }

  export type Preference_questionsCountAggregateInputType = {
    id?: true
    question_text?: true
    _all?: true
  }

  export type Preference_questionsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which preference_questions to aggregate.
     */
    where?: preference_questionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of preference_questions to fetch.
     */
    orderBy?: preference_questionsOrderByWithRelationInput | preference_questionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: preference_questionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` preference_questions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` preference_questions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned preference_questions
    **/
    _count?: true | Preference_questionsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Preference_questionsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Preference_questionsMaxAggregateInputType
  }

  export type GetPreference_questionsAggregateType<T extends Preference_questionsAggregateArgs> = {
        [P in keyof T & keyof AggregatePreference_questions]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePreference_questions[P]>
      : GetScalarType<T[P], AggregatePreference_questions[P]>
  }




  export type preference_questionsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: preference_questionsWhereInput
    orderBy?: preference_questionsOrderByWithAggregationInput | preference_questionsOrderByWithAggregationInput[]
    by: Preference_questionsScalarFieldEnum[] | Preference_questionsScalarFieldEnum
    having?: preference_questionsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Preference_questionsCountAggregateInputType | true
    _min?: Preference_questionsMinAggregateInputType
    _max?: Preference_questionsMaxAggregateInputType
  }

  export type Preference_questionsGroupByOutputType = {
    id: string
    question_text: string
    _count: Preference_questionsCountAggregateOutputType | null
    _min: Preference_questionsMinAggregateOutputType | null
    _max: Preference_questionsMaxAggregateOutputType | null
  }

  type GetPreference_questionsGroupByPayload<T extends preference_questionsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Preference_questionsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Preference_questionsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Preference_questionsGroupByOutputType[P]>
            : GetScalarType<T[P], Preference_questionsGroupByOutputType[P]>
        }
      >
    >


  export type preference_questionsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    question_text?: boolean
  }, ExtArgs["result"]["preference_questions"]>

  export type preference_questionsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    question_text?: boolean
  }, ExtArgs["result"]["preference_questions"]>

  export type preference_questionsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    question_text?: boolean
  }, ExtArgs["result"]["preference_questions"]>

  export type preference_questionsSelectScalar = {
    id?: boolean
    question_text?: boolean
  }

  export type preference_questionsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "question_text", ExtArgs["result"]["preference_questions"]>

  export type $preference_questionsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "preference_questions"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      question_text: string
    }, ExtArgs["result"]["preference_questions"]>
    composites: {}
  }

  type preference_questionsGetPayload<S extends boolean | null | undefined | preference_questionsDefaultArgs> = $Result.GetResult<Prisma.$preference_questionsPayload, S>

  type preference_questionsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<preference_questionsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Preference_questionsCountAggregateInputType | true
    }

  export interface preference_questionsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['preference_questions'], meta: { name: 'preference_questions' } }
    /**
     * Find zero or one Preference_questions that matches the filter.
     * @param {preference_questionsFindUniqueArgs} args - Arguments to find a Preference_questions
     * @example
     * // Get one Preference_questions
     * const preference_questions = await prisma.preference_questions.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends preference_questionsFindUniqueArgs>(args: SelectSubset<T, preference_questionsFindUniqueArgs<ExtArgs>>): Prisma__preference_questionsClient<$Result.GetResult<Prisma.$preference_questionsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Preference_questions that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {preference_questionsFindUniqueOrThrowArgs} args - Arguments to find a Preference_questions
     * @example
     * // Get one Preference_questions
     * const preference_questions = await prisma.preference_questions.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends preference_questionsFindUniqueOrThrowArgs>(args: SelectSubset<T, preference_questionsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__preference_questionsClient<$Result.GetResult<Prisma.$preference_questionsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Preference_questions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {preference_questionsFindFirstArgs} args - Arguments to find a Preference_questions
     * @example
     * // Get one Preference_questions
     * const preference_questions = await prisma.preference_questions.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends preference_questionsFindFirstArgs>(args?: SelectSubset<T, preference_questionsFindFirstArgs<ExtArgs>>): Prisma__preference_questionsClient<$Result.GetResult<Prisma.$preference_questionsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Preference_questions that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {preference_questionsFindFirstOrThrowArgs} args - Arguments to find a Preference_questions
     * @example
     * // Get one Preference_questions
     * const preference_questions = await prisma.preference_questions.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends preference_questionsFindFirstOrThrowArgs>(args?: SelectSubset<T, preference_questionsFindFirstOrThrowArgs<ExtArgs>>): Prisma__preference_questionsClient<$Result.GetResult<Prisma.$preference_questionsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Preference_questions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {preference_questionsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Preference_questions
     * const preference_questions = await prisma.preference_questions.findMany()
     * 
     * // Get first 10 Preference_questions
     * const preference_questions = await prisma.preference_questions.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const preference_questionsWithIdOnly = await prisma.preference_questions.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends preference_questionsFindManyArgs>(args?: SelectSubset<T, preference_questionsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$preference_questionsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Preference_questions.
     * @param {preference_questionsCreateArgs} args - Arguments to create a Preference_questions.
     * @example
     * // Create one Preference_questions
     * const Preference_questions = await prisma.preference_questions.create({
     *   data: {
     *     // ... data to create a Preference_questions
     *   }
     * })
     * 
     */
    create<T extends preference_questionsCreateArgs>(args: SelectSubset<T, preference_questionsCreateArgs<ExtArgs>>): Prisma__preference_questionsClient<$Result.GetResult<Prisma.$preference_questionsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Preference_questions.
     * @param {preference_questionsCreateManyArgs} args - Arguments to create many Preference_questions.
     * @example
     * // Create many Preference_questions
     * const preference_questions = await prisma.preference_questions.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends preference_questionsCreateManyArgs>(args?: SelectSubset<T, preference_questionsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Preference_questions and returns the data saved in the database.
     * @param {preference_questionsCreateManyAndReturnArgs} args - Arguments to create many Preference_questions.
     * @example
     * // Create many Preference_questions
     * const preference_questions = await prisma.preference_questions.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Preference_questions and only return the `id`
     * const preference_questionsWithIdOnly = await prisma.preference_questions.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends preference_questionsCreateManyAndReturnArgs>(args?: SelectSubset<T, preference_questionsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$preference_questionsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Preference_questions.
     * @param {preference_questionsDeleteArgs} args - Arguments to delete one Preference_questions.
     * @example
     * // Delete one Preference_questions
     * const Preference_questions = await prisma.preference_questions.delete({
     *   where: {
     *     // ... filter to delete one Preference_questions
     *   }
     * })
     * 
     */
    delete<T extends preference_questionsDeleteArgs>(args: SelectSubset<T, preference_questionsDeleteArgs<ExtArgs>>): Prisma__preference_questionsClient<$Result.GetResult<Prisma.$preference_questionsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Preference_questions.
     * @param {preference_questionsUpdateArgs} args - Arguments to update one Preference_questions.
     * @example
     * // Update one Preference_questions
     * const preference_questions = await prisma.preference_questions.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends preference_questionsUpdateArgs>(args: SelectSubset<T, preference_questionsUpdateArgs<ExtArgs>>): Prisma__preference_questionsClient<$Result.GetResult<Prisma.$preference_questionsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Preference_questions.
     * @param {preference_questionsDeleteManyArgs} args - Arguments to filter Preference_questions to delete.
     * @example
     * // Delete a few Preference_questions
     * const { count } = await prisma.preference_questions.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends preference_questionsDeleteManyArgs>(args?: SelectSubset<T, preference_questionsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Preference_questions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {preference_questionsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Preference_questions
     * const preference_questions = await prisma.preference_questions.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends preference_questionsUpdateManyArgs>(args: SelectSubset<T, preference_questionsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Preference_questions and returns the data updated in the database.
     * @param {preference_questionsUpdateManyAndReturnArgs} args - Arguments to update many Preference_questions.
     * @example
     * // Update many Preference_questions
     * const preference_questions = await prisma.preference_questions.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Preference_questions and only return the `id`
     * const preference_questionsWithIdOnly = await prisma.preference_questions.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends preference_questionsUpdateManyAndReturnArgs>(args: SelectSubset<T, preference_questionsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$preference_questionsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Preference_questions.
     * @param {preference_questionsUpsertArgs} args - Arguments to update or create a Preference_questions.
     * @example
     * // Update or create a Preference_questions
     * const preference_questions = await prisma.preference_questions.upsert({
     *   create: {
     *     // ... data to create a Preference_questions
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Preference_questions we want to update
     *   }
     * })
     */
    upsert<T extends preference_questionsUpsertArgs>(args: SelectSubset<T, preference_questionsUpsertArgs<ExtArgs>>): Prisma__preference_questionsClient<$Result.GetResult<Prisma.$preference_questionsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Preference_questions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {preference_questionsCountArgs} args - Arguments to filter Preference_questions to count.
     * @example
     * // Count the number of Preference_questions
     * const count = await prisma.preference_questions.count({
     *   where: {
     *     // ... the filter for the Preference_questions we want to count
     *   }
     * })
    **/
    count<T extends preference_questionsCountArgs>(
      args?: Subset<T, preference_questionsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Preference_questionsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Preference_questions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Preference_questionsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Preference_questionsAggregateArgs>(args: Subset<T, Preference_questionsAggregateArgs>): Prisma.PrismaPromise<GetPreference_questionsAggregateType<T>>

    /**
     * Group by Preference_questions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {preference_questionsGroupByArgs} args - Group by arguments.
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
      T extends preference_questionsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: preference_questionsGroupByArgs['orderBy'] }
        : { orderBy?: preference_questionsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, preference_questionsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPreference_questionsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the preference_questions model
   */
  readonly fields: preference_questionsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for preference_questions.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__preference_questionsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the preference_questions model
   */
  interface preference_questionsFieldRefs {
    readonly id: FieldRef<"preference_questions", 'String'>
    readonly question_text: FieldRef<"preference_questions", 'String'>
  }
    

  // Custom InputTypes
  /**
   * preference_questions findUnique
   */
  export type preference_questionsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the preference_questions
     */
    select?: preference_questionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the preference_questions
     */
    omit?: preference_questionsOmit<ExtArgs> | null
    /**
     * Filter, which preference_questions to fetch.
     */
    where: preference_questionsWhereUniqueInput
  }

  /**
   * preference_questions findUniqueOrThrow
   */
  export type preference_questionsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the preference_questions
     */
    select?: preference_questionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the preference_questions
     */
    omit?: preference_questionsOmit<ExtArgs> | null
    /**
     * Filter, which preference_questions to fetch.
     */
    where: preference_questionsWhereUniqueInput
  }

  /**
   * preference_questions findFirst
   */
  export type preference_questionsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the preference_questions
     */
    select?: preference_questionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the preference_questions
     */
    omit?: preference_questionsOmit<ExtArgs> | null
    /**
     * Filter, which preference_questions to fetch.
     */
    where?: preference_questionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of preference_questions to fetch.
     */
    orderBy?: preference_questionsOrderByWithRelationInput | preference_questionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for preference_questions.
     */
    cursor?: preference_questionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` preference_questions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` preference_questions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of preference_questions.
     */
    distinct?: Preference_questionsScalarFieldEnum | Preference_questionsScalarFieldEnum[]
  }

  /**
   * preference_questions findFirstOrThrow
   */
  export type preference_questionsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the preference_questions
     */
    select?: preference_questionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the preference_questions
     */
    omit?: preference_questionsOmit<ExtArgs> | null
    /**
     * Filter, which preference_questions to fetch.
     */
    where?: preference_questionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of preference_questions to fetch.
     */
    orderBy?: preference_questionsOrderByWithRelationInput | preference_questionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for preference_questions.
     */
    cursor?: preference_questionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` preference_questions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` preference_questions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of preference_questions.
     */
    distinct?: Preference_questionsScalarFieldEnum | Preference_questionsScalarFieldEnum[]
  }

  /**
   * preference_questions findMany
   */
  export type preference_questionsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the preference_questions
     */
    select?: preference_questionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the preference_questions
     */
    omit?: preference_questionsOmit<ExtArgs> | null
    /**
     * Filter, which preference_questions to fetch.
     */
    where?: preference_questionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of preference_questions to fetch.
     */
    orderBy?: preference_questionsOrderByWithRelationInput | preference_questionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing preference_questions.
     */
    cursor?: preference_questionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` preference_questions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` preference_questions.
     */
    skip?: number
    distinct?: Preference_questionsScalarFieldEnum | Preference_questionsScalarFieldEnum[]
  }

  /**
   * preference_questions create
   */
  export type preference_questionsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the preference_questions
     */
    select?: preference_questionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the preference_questions
     */
    omit?: preference_questionsOmit<ExtArgs> | null
    /**
     * The data needed to create a preference_questions.
     */
    data: XOR<preference_questionsCreateInput, preference_questionsUncheckedCreateInput>
  }

  /**
   * preference_questions createMany
   */
  export type preference_questionsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many preference_questions.
     */
    data: preference_questionsCreateManyInput | preference_questionsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * preference_questions createManyAndReturn
   */
  export type preference_questionsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the preference_questions
     */
    select?: preference_questionsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the preference_questions
     */
    omit?: preference_questionsOmit<ExtArgs> | null
    /**
     * The data used to create many preference_questions.
     */
    data: preference_questionsCreateManyInput | preference_questionsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * preference_questions update
   */
  export type preference_questionsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the preference_questions
     */
    select?: preference_questionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the preference_questions
     */
    omit?: preference_questionsOmit<ExtArgs> | null
    /**
     * The data needed to update a preference_questions.
     */
    data: XOR<preference_questionsUpdateInput, preference_questionsUncheckedUpdateInput>
    /**
     * Choose, which preference_questions to update.
     */
    where: preference_questionsWhereUniqueInput
  }

  /**
   * preference_questions updateMany
   */
  export type preference_questionsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update preference_questions.
     */
    data: XOR<preference_questionsUpdateManyMutationInput, preference_questionsUncheckedUpdateManyInput>
    /**
     * Filter which preference_questions to update
     */
    where?: preference_questionsWhereInput
    /**
     * Limit how many preference_questions to update.
     */
    limit?: number
  }

  /**
   * preference_questions updateManyAndReturn
   */
  export type preference_questionsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the preference_questions
     */
    select?: preference_questionsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the preference_questions
     */
    omit?: preference_questionsOmit<ExtArgs> | null
    /**
     * The data used to update preference_questions.
     */
    data: XOR<preference_questionsUpdateManyMutationInput, preference_questionsUncheckedUpdateManyInput>
    /**
     * Filter which preference_questions to update
     */
    where?: preference_questionsWhereInput
    /**
     * Limit how many preference_questions to update.
     */
    limit?: number
  }

  /**
   * preference_questions upsert
   */
  export type preference_questionsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the preference_questions
     */
    select?: preference_questionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the preference_questions
     */
    omit?: preference_questionsOmit<ExtArgs> | null
    /**
     * The filter to search for the preference_questions to update in case it exists.
     */
    where: preference_questionsWhereUniqueInput
    /**
     * In case the preference_questions found by the `where` argument doesn't exist, create a new preference_questions with this data.
     */
    create: XOR<preference_questionsCreateInput, preference_questionsUncheckedCreateInput>
    /**
     * In case the preference_questions was found with the provided `where` argument, update it with this data.
     */
    update: XOR<preference_questionsUpdateInput, preference_questionsUncheckedUpdateInput>
  }

  /**
   * preference_questions delete
   */
  export type preference_questionsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the preference_questions
     */
    select?: preference_questionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the preference_questions
     */
    omit?: preference_questionsOmit<ExtArgs> | null
    /**
     * Filter which preference_questions to delete.
     */
    where: preference_questionsWhereUniqueInput
  }

  /**
   * preference_questions deleteMany
   */
  export type preference_questionsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which preference_questions to delete
     */
    where?: preference_questionsWhereInput
    /**
     * Limit how many preference_questions to delete.
     */
    limit?: number
  }

  /**
   * preference_questions without action
   */
  export type preference_questionsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the preference_questions
     */
    select?: preference_questionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the preference_questions
     */
    omit?: preference_questionsOmit<ExtArgs> | null
  }


  /**
   * Model user_preferences
   */

  export type AggregateUser_preferences = {
    _count: User_preferencesCountAggregateOutputType | null
    _min: User_preferencesMinAggregateOutputType | null
    _max: User_preferencesMaxAggregateOutputType | null
  }

  export type User_preferencesMinAggregateOutputType = {
    id: string | null
    user_id: string | null
    question_id: string | null
    answer: string | null
  }

  export type User_preferencesMaxAggregateOutputType = {
    id: string | null
    user_id: string | null
    question_id: string | null
    answer: string | null
  }

  export type User_preferencesCountAggregateOutputType = {
    id: number
    user_id: number
    question_id: number
    answer: number
    _all: number
  }


  export type User_preferencesMinAggregateInputType = {
    id?: true
    user_id?: true
    question_id?: true
    answer?: true
  }

  export type User_preferencesMaxAggregateInputType = {
    id?: true
    user_id?: true
    question_id?: true
    answer?: true
  }

  export type User_preferencesCountAggregateInputType = {
    id?: true
    user_id?: true
    question_id?: true
    answer?: true
    _all?: true
  }

  export type User_preferencesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which user_preferences to aggregate.
     */
    where?: user_preferencesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of user_preferences to fetch.
     */
    orderBy?: user_preferencesOrderByWithRelationInput | user_preferencesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: user_preferencesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` user_preferences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` user_preferences.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned user_preferences
    **/
    _count?: true | User_preferencesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: User_preferencesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: User_preferencesMaxAggregateInputType
  }

  export type GetUser_preferencesAggregateType<T extends User_preferencesAggregateArgs> = {
        [P in keyof T & keyof AggregateUser_preferences]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser_preferences[P]>
      : GetScalarType<T[P], AggregateUser_preferences[P]>
  }




  export type user_preferencesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: user_preferencesWhereInput
    orderBy?: user_preferencesOrderByWithAggregationInput | user_preferencesOrderByWithAggregationInput[]
    by: User_preferencesScalarFieldEnum[] | User_preferencesScalarFieldEnum
    having?: user_preferencesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: User_preferencesCountAggregateInputType | true
    _min?: User_preferencesMinAggregateInputType
    _max?: User_preferencesMaxAggregateInputType
  }

  export type User_preferencesGroupByOutputType = {
    id: string
    user_id: string
    question_id: string
    answer: string | null
    _count: User_preferencesCountAggregateOutputType | null
    _min: User_preferencesMinAggregateOutputType | null
    _max: User_preferencesMaxAggregateOutputType | null
  }

  type GetUser_preferencesGroupByPayload<T extends user_preferencesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<User_preferencesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof User_preferencesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], User_preferencesGroupByOutputType[P]>
            : GetScalarType<T[P], User_preferencesGroupByOutputType[P]>
        }
      >
    >


  export type user_preferencesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    question_id?: boolean
    answer?: boolean
  }, ExtArgs["result"]["user_preferences"]>

  export type user_preferencesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    question_id?: boolean
    answer?: boolean
  }, ExtArgs["result"]["user_preferences"]>

  export type user_preferencesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    question_id?: boolean
    answer?: boolean
  }, ExtArgs["result"]["user_preferences"]>

  export type user_preferencesSelectScalar = {
    id?: boolean
    user_id?: boolean
    question_id?: boolean
    answer?: boolean
  }

  export type user_preferencesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "user_id" | "question_id" | "answer", ExtArgs["result"]["user_preferences"]>

  export type $user_preferencesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "user_preferences"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      user_id: string
      question_id: string
      answer: string | null
    }, ExtArgs["result"]["user_preferences"]>
    composites: {}
  }

  type user_preferencesGetPayload<S extends boolean | null | undefined | user_preferencesDefaultArgs> = $Result.GetResult<Prisma.$user_preferencesPayload, S>

  type user_preferencesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<user_preferencesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: User_preferencesCountAggregateInputType | true
    }

  export interface user_preferencesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['user_preferences'], meta: { name: 'user_preferences' } }
    /**
     * Find zero or one User_preferences that matches the filter.
     * @param {user_preferencesFindUniqueArgs} args - Arguments to find a User_preferences
     * @example
     * // Get one User_preferences
     * const user_preferences = await prisma.user_preferences.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends user_preferencesFindUniqueArgs>(args: SelectSubset<T, user_preferencesFindUniqueArgs<ExtArgs>>): Prisma__user_preferencesClient<$Result.GetResult<Prisma.$user_preferencesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User_preferences that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {user_preferencesFindUniqueOrThrowArgs} args - Arguments to find a User_preferences
     * @example
     * // Get one User_preferences
     * const user_preferences = await prisma.user_preferences.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends user_preferencesFindUniqueOrThrowArgs>(args: SelectSubset<T, user_preferencesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__user_preferencesClient<$Result.GetResult<Prisma.$user_preferencesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User_preferences that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_preferencesFindFirstArgs} args - Arguments to find a User_preferences
     * @example
     * // Get one User_preferences
     * const user_preferences = await prisma.user_preferences.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends user_preferencesFindFirstArgs>(args?: SelectSubset<T, user_preferencesFindFirstArgs<ExtArgs>>): Prisma__user_preferencesClient<$Result.GetResult<Prisma.$user_preferencesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User_preferences that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_preferencesFindFirstOrThrowArgs} args - Arguments to find a User_preferences
     * @example
     * // Get one User_preferences
     * const user_preferences = await prisma.user_preferences.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends user_preferencesFindFirstOrThrowArgs>(args?: SelectSubset<T, user_preferencesFindFirstOrThrowArgs<ExtArgs>>): Prisma__user_preferencesClient<$Result.GetResult<Prisma.$user_preferencesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more User_preferences that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_preferencesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all User_preferences
     * const user_preferences = await prisma.user_preferences.findMany()
     * 
     * // Get first 10 User_preferences
     * const user_preferences = await prisma.user_preferences.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const user_preferencesWithIdOnly = await prisma.user_preferences.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends user_preferencesFindManyArgs>(args?: SelectSubset<T, user_preferencesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$user_preferencesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User_preferences.
     * @param {user_preferencesCreateArgs} args - Arguments to create a User_preferences.
     * @example
     * // Create one User_preferences
     * const User_preferences = await prisma.user_preferences.create({
     *   data: {
     *     // ... data to create a User_preferences
     *   }
     * })
     * 
     */
    create<T extends user_preferencesCreateArgs>(args: SelectSubset<T, user_preferencesCreateArgs<ExtArgs>>): Prisma__user_preferencesClient<$Result.GetResult<Prisma.$user_preferencesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many User_preferences.
     * @param {user_preferencesCreateManyArgs} args - Arguments to create many User_preferences.
     * @example
     * // Create many User_preferences
     * const user_preferences = await prisma.user_preferences.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends user_preferencesCreateManyArgs>(args?: SelectSubset<T, user_preferencesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many User_preferences and returns the data saved in the database.
     * @param {user_preferencesCreateManyAndReturnArgs} args - Arguments to create many User_preferences.
     * @example
     * // Create many User_preferences
     * const user_preferences = await prisma.user_preferences.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many User_preferences and only return the `id`
     * const user_preferencesWithIdOnly = await prisma.user_preferences.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends user_preferencesCreateManyAndReturnArgs>(args?: SelectSubset<T, user_preferencesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$user_preferencesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User_preferences.
     * @param {user_preferencesDeleteArgs} args - Arguments to delete one User_preferences.
     * @example
     * // Delete one User_preferences
     * const User_preferences = await prisma.user_preferences.delete({
     *   where: {
     *     // ... filter to delete one User_preferences
     *   }
     * })
     * 
     */
    delete<T extends user_preferencesDeleteArgs>(args: SelectSubset<T, user_preferencesDeleteArgs<ExtArgs>>): Prisma__user_preferencesClient<$Result.GetResult<Prisma.$user_preferencesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User_preferences.
     * @param {user_preferencesUpdateArgs} args - Arguments to update one User_preferences.
     * @example
     * // Update one User_preferences
     * const user_preferences = await prisma.user_preferences.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends user_preferencesUpdateArgs>(args: SelectSubset<T, user_preferencesUpdateArgs<ExtArgs>>): Prisma__user_preferencesClient<$Result.GetResult<Prisma.$user_preferencesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more User_preferences.
     * @param {user_preferencesDeleteManyArgs} args - Arguments to filter User_preferences to delete.
     * @example
     * // Delete a few User_preferences
     * const { count } = await prisma.user_preferences.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends user_preferencesDeleteManyArgs>(args?: SelectSubset<T, user_preferencesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more User_preferences.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_preferencesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many User_preferences
     * const user_preferences = await prisma.user_preferences.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends user_preferencesUpdateManyArgs>(args: SelectSubset<T, user_preferencesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more User_preferences and returns the data updated in the database.
     * @param {user_preferencesUpdateManyAndReturnArgs} args - Arguments to update many User_preferences.
     * @example
     * // Update many User_preferences
     * const user_preferences = await prisma.user_preferences.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more User_preferences and only return the `id`
     * const user_preferencesWithIdOnly = await prisma.user_preferences.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends user_preferencesUpdateManyAndReturnArgs>(args: SelectSubset<T, user_preferencesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$user_preferencesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User_preferences.
     * @param {user_preferencesUpsertArgs} args - Arguments to update or create a User_preferences.
     * @example
     * // Update or create a User_preferences
     * const user_preferences = await prisma.user_preferences.upsert({
     *   create: {
     *     // ... data to create a User_preferences
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User_preferences we want to update
     *   }
     * })
     */
    upsert<T extends user_preferencesUpsertArgs>(args: SelectSubset<T, user_preferencesUpsertArgs<ExtArgs>>): Prisma__user_preferencesClient<$Result.GetResult<Prisma.$user_preferencesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of User_preferences.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_preferencesCountArgs} args - Arguments to filter User_preferences to count.
     * @example
     * // Count the number of User_preferences
     * const count = await prisma.user_preferences.count({
     *   where: {
     *     // ... the filter for the User_preferences we want to count
     *   }
     * })
    **/
    count<T extends user_preferencesCountArgs>(
      args?: Subset<T, user_preferencesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], User_preferencesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User_preferences.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {User_preferencesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends User_preferencesAggregateArgs>(args: Subset<T, User_preferencesAggregateArgs>): Prisma.PrismaPromise<GetUser_preferencesAggregateType<T>>

    /**
     * Group by User_preferences.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_preferencesGroupByArgs} args - Group by arguments.
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
      T extends user_preferencesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: user_preferencesGroupByArgs['orderBy'] }
        : { orderBy?: user_preferencesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, user_preferencesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUser_preferencesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the user_preferences model
   */
  readonly fields: user_preferencesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for user_preferences.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__user_preferencesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the user_preferences model
   */
  interface user_preferencesFieldRefs {
    readonly id: FieldRef<"user_preferences", 'String'>
    readonly user_id: FieldRef<"user_preferences", 'String'>
    readonly question_id: FieldRef<"user_preferences", 'String'>
    readonly answer: FieldRef<"user_preferences", 'String'>
  }
    

  // Custom InputTypes
  /**
   * user_preferences findUnique
   */
  export type user_preferencesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_preferences
     */
    select?: user_preferencesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_preferences
     */
    omit?: user_preferencesOmit<ExtArgs> | null
    /**
     * Filter, which user_preferences to fetch.
     */
    where: user_preferencesWhereUniqueInput
  }

  /**
   * user_preferences findUniqueOrThrow
   */
  export type user_preferencesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_preferences
     */
    select?: user_preferencesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_preferences
     */
    omit?: user_preferencesOmit<ExtArgs> | null
    /**
     * Filter, which user_preferences to fetch.
     */
    where: user_preferencesWhereUniqueInput
  }

  /**
   * user_preferences findFirst
   */
  export type user_preferencesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_preferences
     */
    select?: user_preferencesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_preferences
     */
    omit?: user_preferencesOmit<ExtArgs> | null
    /**
     * Filter, which user_preferences to fetch.
     */
    where?: user_preferencesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of user_preferences to fetch.
     */
    orderBy?: user_preferencesOrderByWithRelationInput | user_preferencesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for user_preferences.
     */
    cursor?: user_preferencesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` user_preferences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` user_preferences.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of user_preferences.
     */
    distinct?: User_preferencesScalarFieldEnum | User_preferencesScalarFieldEnum[]
  }

  /**
   * user_preferences findFirstOrThrow
   */
  export type user_preferencesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_preferences
     */
    select?: user_preferencesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_preferences
     */
    omit?: user_preferencesOmit<ExtArgs> | null
    /**
     * Filter, which user_preferences to fetch.
     */
    where?: user_preferencesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of user_preferences to fetch.
     */
    orderBy?: user_preferencesOrderByWithRelationInput | user_preferencesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for user_preferences.
     */
    cursor?: user_preferencesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` user_preferences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` user_preferences.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of user_preferences.
     */
    distinct?: User_preferencesScalarFieldEnum | User_preferencesScalarFieldEnum[]
  }

  /**
   * user_preferences findMany
   */
  export type user_preferencesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_preferences
     */
    select?: user_preferencesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_preferences
     */
    omit?: user_preferencesOmit<ExtArgs> | null
    /**
     * Filter, which user_preferences to fetch.
     */
    where?: user_preferencesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of user_preferences to fetch.
     */
    orderBy?: user_preferencesOrderByWithRelationInput | user_preferencesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing user_preferences.
     */
    cursor?: user_preferencesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` user_preferences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` user_preferences.
     */
    skip?: number
    distinct?: User_preferencesScalarFieldEnum | User_preferencesScalarFieldEnum[]
  }

  /**
   * user_preferences create
   */
  export type user_preferencesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_preferences
     */
    select?: user_preferencesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_preferences
     */
    omit?: user_preferencesOmit<ExtArgs> | null
    /**
     * The data needed to create a user_preferences.
     */
    data: XOR<user_preferencesCreateInput, user_preferencesUncheckedCreateInput>
  }

  /**
   * user_preferences createMany
   */
  export type user_preferencesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many user_preferences.
     */
    data: user_preferencesCreateManyInput | user_preferencesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * user_preferences createManyAndReturn
   */
  export type user_preferencesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_preferences
     */
    select?: user_preferencesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the user_preferences
     */
    omit?: user_preferencesOmit<ExtArgs> | null
    /**
     * The data used to create many user_preferences.
     */
    data: user_preferencesCreateManyInput | user_preferencesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * user_preferences update
   */
  export type user_preferencesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_preferences
     */
    select?: user_preferencesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_preferences
     */
    omit?: user_preferencesOmit<ExtArgs> | null
    /**
     * The data needed to update a user_preferences.
     */
    data: XOR<user_preferencesUpdateInput, user_preferencesUncheckedUpdateInput>
    /**
     * Choose, which user_preferences to update.
     */
    where: user_preferencesWhereUniqueInput
  }

  /**
   * user_preferences updateMany
   */
  export type user_preferencesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update user_preferences.
     */
    data: XOR<user_preferencesUpdateManyMutationInput, user_preferencesUncheckedUpdateManyInput>
    /**
     * Filter which user_preferences to update
     */
    where?: user_preferencesWhereInput
    /**
     * Limit how many user_preferences to update.
     */
    limit?: number
  }

  /**
   * user_preferences updateManyAndReturn
   */
  export type user_preferencesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_preferences
     */
    select?: user_preferencesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the user_preferences
     */
    omit?: user_preferencesOmit<ExtArgs> | null
    /**
     * The data used to update user_preferences.
     */
    data: XOR<user_preferencesUpdateManyMutationInput, user_preferencesUncheckedUpdateManyInput>
    /**
     * Filter which user_preferences to update
     */
    where?: user_preferencesWhereInput
    /**
     * Limit how many user_preferences to update.
     */
    limit?: number
  }

  /**
   * user_preferences upsert
   */
  export type user_preferencesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_preferences
     */
    select?: user_preferencesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_preferences
     */
    omit?: user_preferencesOmit<ExtArgs> | null
    /**
     * The filter to search for the user_preferences to update in case it exists.
     */
    where: user_preferencesWhereUniqueInput
    /**
     * In case the user_preferences found by the `where` argument doesn't exist, create a new user_preferences with this data.
     */
    create: XOR<user_preferencesCreateInput, user_preferencesUncheckedCreateInput>
    /**
     * In case the user_preferences was found with the provided `where` argument, update it with this data.
     */
    update: XOR<user_preferencesUpdateInput, user_preferencesUncheckedUpdateInput>
  }

  /**
   * user_preferences delete
   */
  export type user_preferencesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_preferences
     */
    select?: user_preferencesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_preferences
     */
    omit?: user_preferencesOmit<ExtArgs> | null
    /**
     * Filter which user_preferences to delete.
     */
    where: user_preferencesWhereUniqueInput
  }

  /**
   * user_preferences deleteMany
   */
  export type user_preferencesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which user_preferences to delete
     */
    where?: user_preferencesWhereInput
    /**
     * Limit how many user_preferences to delete.
     */
    limit?: number
  }

  /**
   * user_preferences without action
   */
  export type user_preferencesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_preferences
     */
    select?: user_preferencesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_preferences
     */
    omit?: user_preferencesOmit<ExtArgs> | null
  }


  /**
   * Model user_events
   */

  export type AggregateUser_events = {
    _count: User_eventsCountAggregateOutputType | null
    _min: User_eventsMinAggregateOutputType | null
    _max: User_eventsMaxAggregateOutputType | null
  }

  export type User_eventsMinAggregateOutputType = {
    id: string | null
    user_id: string | null
    title: string | null
    start_time: Date | null
    end_time: Date | null
    description: string | null
    location_place: string | null
    is_recurring: boolean | null
    recurrence_pattern: string | null
    recurrence_start_date: Date | null
    recurrence_end_date: Date | null
    is_generated: boolean | null
    break_time: string | null
    created_at: Date | null
  }

  export type User_eventsMaxAggregateOutputType = {
    id: string | null
    user_id: string | null
    title: string | null
    start_time: Date | null
    end_time: Date | null
    description: string | null
    location_place: string | null
    is_recurring: boolean | null
    recurrence_pattern: string | null
    recurrence_start_date: Date | null
    recurrence_end_date: Date | null
    is_generated: boolean | null
    break_time: string | null
    created_at: Date | null
  }

  export type User_eventsCountAggregateOutputType = {
    id: number
    user_id: number
    title: number
    start_time: number
    end_time: number
    description: number
    location_place: number
    is_recurring: number
    recurrence_pattern: number
    recurrence_start_date: number
    recurrence_end_date: number
    is_generated: number
    break_time: number
    created_at: number
    _all: number
  }


  export type User_eventsMinAggregateInputType = {
    id?: true
    user_id?: true
    title?: true
    start_time?: true
    end_time?: true
    description?: true
    location_place?: true
    is_recurring?: true
    recurrence_pattern?: true
    recurrence_start_date?: true
    recurrence_end_date?: true
    is_generated?: true
    break_time?: true
    created_at?: true
  }

  export type User_eventsMaxAggregateInputType = {
    id?: true
    user_id?: true
    title?: true
    start_time?: true
    end_time?: true
    description?: true
    location_place?: true
    is_recurring?: true
    recurrence_pattern?: true
    recurrence_start_date?: true
    recurrence_end_date?: true
    is_generated?: true
    break_time?: true
    created_at?: true
  }

  export type User_eventsCountAggregateInputType = {
    id?: true
    user_id?: true
    title?: true
    start_time?: true
    end_time?: true
    description?: true
    location_place?: true
    is_recurring?: true
    recurrence_pattern?: true
    recurrence_start_date?: true
    recurrence_end_date?: true
    is_generated?: true
    break_time?: true
    created_at?: true
    _all?: true
  }

  export type User_eventsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which user_events to aggregate.
     */
    where?: user_eventsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of user_events to fetch.
     */
    orderBy?: user_eventsOrderByWithRelationInput | user_eventsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: user_eventsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` user_events from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` user_events.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned user_events
    **/
    _count?: true | User_eventsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: User_eventsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: User_eventsMaxAggregateInputType
  }

  export type GetUser_eventsAggregateType<T extends User_eventsAggregateArgs> = {
        [P in keyof T & keyof AggregateUser_events]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser_events[P]>
      : GetScalarType<T[P], AggregateUser_events[P]>
  }




  export type user_eventsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: user_eventsWhereInput
    orderBy?: user_eventsOrderByWithAggregationInput | user_eventsOrderByWithAggregationInput[]
    by: User_eventsScalarFieldEnum[] | User_eventsScalarFieldEnum
    having?: user_eventsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: User_eventsCountAggregateInputType | true
    _min?: User_eventsMinAggregateInputType
    _max?: User_eventsMaxAggregateInputType
  }

  export type User_eventsGroupByOutputType = {
    id: string
    user_id: string
    title: string
    start_time: Date
    end_time: Date | null
    description: string | null
    location_place: string | null
    is_recurring: boolean
    recurrence_pattern: string | null
    recurrence_start_date: Date | null
    recurrence_end_date: Date | null
    is_generated: boolean
    break_time: string | null
    created_at: Date
    _count: User_eventsCountAggregateOutputType | null
    _min: User_eventsMinAggregateOutputType | null
    _max: User_eventsMaxAggregateOutputType | null
  }

  type GetUser_eventsGroupByPayload<T extends user_eventsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<User_eventsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof User_eventsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], User_eventsGroupByOutputType[P]>
            : GetScalarType<T[P], User_eventsGroupByOutputType[P]>
        }
      >
    >


  export type user_eventsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    title?: boolean
    start_time?: boolean
    end_time?: boolean
    description?: boolean
    location_place?: boolean
    is_recurring?: boolean
    recurrence_pattern?: boolean
    recurrence_start_date?: boolean
    recurrence_end_date?: boolean
    is_generated?: boolean
    break_time?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["user_events"]>

  export type user_eventsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    title?: boolean
    start_time?: boolean
    end_time?: boolean
    description?: boolean
    location_place?: boolean
    is_recurring?: boolean
    recurrence_pattern?: boolean
    recurrence_start_date?: boolean
    recurrence_end_date?: boolean
    is_generated?: boolean
    break_time?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["user_events"]>

  export type user_eventsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    title?: boolean
    start_time?: boolean
    end_time?: boolean
    description?: boolean
    location_place?: boolean
    is_recurring?: boolean
    recurrence_pattern?: boolean
    recurrence_start_date?: boolean
    recurrence_end_date?: boolean
    is_generated?: boolean
    break_time?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["user_events"]>

  export type user_eventsSelectScalar = {
    id?: boolean
    user_id?: boolean
    title?: boolean
    start_time?: boolean
    end_time?: boolean
    description?: boolean
    location_place?: boolean
    is_recurring?: boolean
    recurrence_pattern?: boolean
    recurrence_start_date?: boolean
    recurrence_end_date?: boolean
    is_generated?: boolean
    break_time?: boolean
    created_at?: boolean
  }

  export type user_eventsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "user_id" | "title" | "start_time" | "end_time" | "description" | "location_place" | "is_recurring" | "recurrence_pattern" | "recurrence_start_date" | "recurrence_end_date" | "is_generated" | "break_time" | "created_at", ExtArgs["result"]["user_events"]>

  export type $user_eventsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "user_events"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      user_id: string
      title: string
      start_time: Date
      end_time: Date | null
      description: string | null
      location_place: string | null
      is_recurring: boolean
      recurrence_pattern: string | null
      recurrence_start_date: Date | null
      recurrence_end_date: Date | null
      is_generated: boolean
      break_time: string | null
      created_at: Date
    }, ExtArgs["result"]["user_events"]>
    composites: {}
  }

  type user_eventsGetPayload<S extends boolean | null | undefined | user_eventsDefaultArgs> = $Result.GetResult<Prisma.$user_eventsPayload, S>

  type user_eventsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<user_eventsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: User_eventsCountAggregateInputType | true
    }

  export interface user_eventsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['user_events'], meta: { name: 'user_events' } }
    /**
     * Find zero or one User_events that matches the filter.
     * @param {user_eventsFindUniqueArgs} args - Arguments to find a User_events
     * @example
     * // Get one User_events
     * const user_events = await prisma.user_events.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends user_eventsFindUniqueArgs>(args: SelectSubset<T, user_eventsFindUniqueArgs<ExtArgs>>): Prisma__user_eventsClient<$Result.GetResult<Prisma.$user_eventsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User_events that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {user_eventsFindUniqueOrThrowArgs} args - Arguments to find a User_events
     * @example
     * // Get one User_events
     * const user_events = await prisma.user_events.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends user_eventsFindUniqueOrThrowArgs>(args: SelectSubset<T, user_eventsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__user_eventsClient<$Result.GetResult<Prisma.$user_eventsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User_events that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_eventsFindFirstArgs} args - Arguments to find a User_events
     * @example
     * // Get one User_events
     * const user_events = await prisma.user_events.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends user_eventsFindFirstArgs>(args?: SelectSubset<T, user_eventsFindFirstArgs<ExtArgs>>): Prisma__user_eventsClient<$Result.GetResult<Prisma.$user_eventsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User_events that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_eventsFindFirstOrThrowArgs} args - Arguments to find a User_events
     * @example
     * // Get one User_events
     * const user_events = await prisma.user_events.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends user_eventsFindFirstOrThrowArgs>(args?: SelectSubset<T, user_eventsFindFirstOrThrowArgs<ExtArgs>>): Prisma__user_eventsClient<$Result.GetResult<Prisma.$user_eventsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more User_events that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_eventsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all User_events
     * const user_events = await prisma.user_events.findMany()
     * 
     * // Get first 10 User_events
     * const user_events = await prisma.user_events.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const user_eventsWithIdOnly = await prisma.user_events.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends user_eventsFindManyArgs>(args?: SelectSubset<T, user_eventsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$user_eventsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User_events.
     * @param {user_eventsCreateArgs} args - Arguments to create a User_events.
     * @example
     * // Create one User_events
     * const User_events = await prisma.user_events.create({
     *   data: {
     *     // ... data to create a User_events
     *   }
     * })
     * 
     */
    create<T extends user_eventsCreateArgs>(args: SelectSubset<T, user_eventsCreateArgs<ExtArgs>>): Prisma__user_eventsClient<$Result.GetResult<Prisma.$user_eventsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many User_events.
     * @param {user_eventsCreateManyArgs} args - Arguments to create many User_events.
     * @example
     * // Create many User_events
     * const user_events = await prisma.user_events.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends user_eventsCreateManyArgs>(args?: SelectSubset<T, user_eventsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many User_events and returns the data saved in the database.
     * @param {user_eventsCreateManyAndReturnArgs} args - Arguments to create many User_events.
     * @example
     * // Create many User_events
     * const user_events = await prisma.user_events.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many User_events and only return the `id`
     * const user_eventsWithIdOnly = await prisma.user_events.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends user_eventsCreateManyAndReturnArgs>(args?: SelectSubset<T, user_eventsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$user_eventsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User_events.
     * @param {user_eventsDeleteArgs} args - Arguments to delete one User_events.
     * @example
     * // Delete one User_events
     * const User_events = await prisma.user_events.delete({
     *   where: {
     *     // ... filter to delete one User_events
     *   }
     * })
     * 
     */
    delete<T extends user_eventsDeleteArgs>(args: SelectSubset<T, user_eventsDeleteArgs<ExtArgs>>): Prisma__user_eventsClient<$Result.GetResult<Prisma.$user_eventsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User_events.
     * @param {user_eventsUpdateArgs} args - Arguments to update one User_events.
     * @example
     * // Update one User_events
     * const user_events = await prisma.user_events.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends user_eventsUpdateArgs>(args: SelectSubset<T, user_eventsUpdateArgs<ExtArgs>>): Prisma__user_eventsClient<$Result.GetResult<Prisma.$user_eventsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more User_events.
     * @param {user_eventsDeleteManyArgs} args - Arguments to filter User_events to delete.
     * @example
     * // Delete a few User_events
     * const { count } = await prisma.user_events.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends user_eventsDeleteManyArgs>(args?: SelectSubset<T, user_eventsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more User_events.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_eventsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many User_events
     * const user_events = await prisma.user_events.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends user_eventsUpdateManyArgs>(args: SelectSubset<T, user_eventsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more User_events and returns the data updated in the database.
     * @param {user_eventsUpdateManyAndReturnArgs} args - Arguments to update many User_events.
     * @example
     * // Update many User_events
     * const user_events = await prisma.user_events.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more User_events and only return the `id`
     * const user_eventsWithIdOnly = await prisma.user_events.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends user_eventsUpdateManyAndReturnArgs>(args: SelectSubset<T, user_eventsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$user_eventsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User_events.
     * @param {user_eventsUpsertArgs} args - Arguments to update or create a User_events.
     * @example
     * // Update or create a User_events
     * const user_events = await prisma.user_events.upsert({
     *   create: {
     *     // ... data to create a User_events
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User_events we want to update
     *   }
     * })
     */
    upsert<T extends user_eventsUpsertArgs>(args: SelectSubset<T, user_eventsUpsertArgs<ExtArgs>>): Prisma__user_eventsClient<$Result.GetResult<Prisma.$user_eventsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of User_events.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_eventsCountArgs} args - Arguments to filter User_events to count.
     * @example
     * // Count the number of User_events
     * const count = await prisma.user_events.count({
     *   where: {
     *     // ... the filter for the User_events we want to count
     *   }
     * })
    **/
    count<T extends user_eventsCountArgs>(
      args?: Subset<T, user_eventsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], User_eventsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User_events.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {User_eventsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends User_eventsAggregateArgs>(args: Subset<T, User_eventsAggregateArgs>): Prisma.PrismaPromise<GetUser_eventsAggregateType<T>>

    /**
     * Group by User_events.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_eventsGroupByArgs} args - Group by arguments.
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
      T extends user_eventsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: user_eventsGroupByArgs['orderBy'] }
        : { orderBy?: user_eventsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, user_eventsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUser_eventsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the user_events model
   */
  readonly fields: user_eventsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for user_events.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__user_eventsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the user_events model
   */
  interface user_eventsFieldRefs {
    readonly id: FieldRef<"user_events", 'String'>
    readonly user_id: FieldRef<"user_events", 'String'>
    readonly title: FieldRef<"user_events", 'String'>
    readonly start_time: FieldRef<"user_events", 'DateTime'>
    readonly end_time: FieldRef<"user_events", 'DateTime'>
    readonly description: FieldRef<"user_events", 'String'>
    readonly location_place: FieldRef<"user_events", 'String'>
    readonly is_recurring: FieldRef<"user_events", 'Boolean'>
    readonly recurrence_pattern: FieldRef<"user_events", 'String'>
    readonly recurrence_start_date: FieldRef<"user_events", 'DateTime'>
    readonly recurrence_end_date: FieldRef<"user_events", 'DateTime'>
    readonly is_generated: FieldRef<"user_events", 'Boolean'>
    readonly break_time: FieldRef<"user_events", 'String'>
    readonly created_at: FieldRef<"user_events", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * user_events findUnique
   */
  export type user_eventsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_events
     */
    select?: user_eventsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_events
     */
    omit?: user_eventsOmit<ExtArgs> | null
    /**
     * Filter, which user_events to fetch.
     */
    where: user_eventsWhereUniqueInput
  }

  /**
   * user_events findUniqueOrThrow
   */
  export type user_eventsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_events
     */
    select?: user_eventsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_events
     */
    omit?: user_eventsOmit<ExtArgs> | null
    /**
     * Filter, which user_events to fetch.
     */
    where: user_eventsWhereUniqueInput
  }

  /**
   * user_events findFirst
   */
  export type user_eventsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_events
     */
    select?: user_eventsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_events
     */
    omit?: user_eventsOmit<ExtArgs> | null
    /**
     * Filter, which user_events to fetch.
     */
    where?: user_eventsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of user_events to fetch.
     */
    orderBy?: user_eventsOrderByWithRelationInput | user_eventsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for user_events.
     */
    cursor?: user_eventsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` user_events from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` user_events.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of user_events.
     */
    distinct?: User_eventsScalarFieldEnum | User_eventsScalarFieldEnum[]
  }

  /**
   * user_events findFirstOrThrow
   */
  export type user_eventsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_events
     */
    select?: user_eventsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_events
     */
    omit?: user_eventsOmit<ExtArgs> | null
    /**
     * Filter, which user_events to fetch.
     */
    where?: user_eventsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of user_events to fetch.
     */
    orderBy?: user_eventsOrderByWithRelationInput | user_eventsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for user_events.
     */
    cursor?: user_eventsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` user_events from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` user_events.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of user_events.
     */
    distinct?: User_eventsScalarFieldEnum | User_eventsScalarFieldEnum[]
  }

  /**
   * user_events findMany
   */
  export type user_eventsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_events
     */
    select?: user_eventsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_events
     */
    omit?: user_eventsOmit<ExtArgs> | null
    /**
     * Filter, which user_events to fetch.
     */
    where?: user_eventsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of user_events to fetch.
     */
    orderBy?: user_eventsOrderByWithRelationInput | user_eventsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing user_events.
     */
    cursor?: user_eventsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` user_events from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` user_events.
     */
    skip?: number
    distinct?: User_eventsScalarFieldEnum | User_eventsScalarFieldEnum[]
  }

  /**
   * user_events create
   */
  export type user_eventsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_events
     */
    select?: user_eventsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_events
     */
    omit?: user_eventsOmit<ExtArgs> | null
    /**
     * The data needed to create a user_events.
     */
    data: XOR<user_eventsCreateInput, user_eventsUncheckedCreateInput>
  }

  /**
   * user_events createMany
   */
  export type user_eventsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many user_events.
     */
    data: user_eventsCreateManyInput | user_eventsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * user_events createManyAndReturn
   */
  export type user_eventsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_events
     */
    select?: user_eventsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the user_events
     */
    omit?: user_eventsOmit<ExtArgs> | null
    /**
     * The data used to create many user_events.
     */
    data: user_eventsCreateManyInput | user_eventsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * user_events update
   */
  export type user_eventsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_events
     */
    select?: user_eventsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_events
     */
    omit?: user_eventsOmit<ExtArgs> | null
    /**
     * The data needed to update a user_events.
     */
    data: XOR<user_eventsUpdateInput, user_eventsUncheckedUpdateInput>
    /**
     * Choose, which user_events to update.
     */
    where: user_eventsWhereUniqueInput
  }

  /**
   * user_events updateMany
   */
  export type user_eventsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update user_events.
     */
    data: XOR<user_eventsUpdateManyMutationInput, user_eventsUncheckedUpdateManyInput>
    /**
     * Filter which user_events to update
     */
    where?: user_eventsWhereInput
    /**
     * Limit how many user_events to update.
     */
    limit?: number
  }

  /**
   * user_events updateManyAndReturn
   */
  export type user_eventsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_events
     */
    select?: user_eventsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the user_events
     */
    omit?: user_eventsOmit<ExtArgs> | null
    /**
     * The data used to update user_events.
     */
    data: XOR<user_eventsUpdateManyMutationInput, user_eventsUncheckedUpdateManyInput>
    /**
     * Filter which user_events to update
     */
    where?: user_eventsWhereInput
    /**
     * Limit how many user_events to update.
     */
    limit?: number
  }

  /**
   * user_events upsert
   */
  export type user_eventsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_events
     */
    select?: user_eventsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_events
     */
    omit?: user_eventsOmit<ExtArgs> | null
    /**
     * The filter to search for the user_events to update in case it exists.
     */
    where: user_eventsWhereUniqueInput
    /**
     * In case the user_events found by the `where` argument doesn't exist, create a new user_events with this data.
     */
    create: XOR<user_eventsCreateInput, user_eventsUncheckedCreateInput>
    /**
     * In case the user_events was found with the provided `where` argument, update it with this data.
     */
    update: XOR<user_eventsUpdateInput, user_eventsUncheckedUpdateInput>
  }

  /**
   * user_events delete
   */
  export type user_eventsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_events
     */
    select?: user_eventsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_events
     */
    omit?: user_eventsOmit<ExtArgs> | null
    /**
     * Filter which user_events to delete.
     */
    where: user_eventsWhereUniqueInput
  }

  /**
   * user_events deleteMany
   */
  export type user_eventsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which user_events to delete
     */
    where?: user_eventsWhereInput
    /**
     * Limit how many user_events to delete.
     */
    limit?: number
  }

  /**
   * user_events without action
   */
  export type user_eventsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_events
     */
    select?: user_eventsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_events
     */
    omit?: user_eventsOmit<ExtArgs> | null
  }


  /**
   * Model user_deadlines
   */

  export type AggregateUser_deadlines = {
    _count: User_deadlinesCountAggregateOutputType | null
    _avg: User_deadlinesAvgAggregateOutputType | null
    _sum: User_deadlinesSumAggregateOutputType | null
    _min: User_deadlinesMinAggregateOutputType | null
    _max: User_deadlinesMaxAggregateOutputType | null
  }

  export type User_deadlinesAvgAggregateOutputType = {
    projected_duration: number | null
  }

  export type User_deadlinesSumAggregateOutputType = {
    projected_duration: number | null
  }

  export type User_deadlinesMinAggregateOutputType = {
    id: string | null
    user_id: string | null
    event_id: string | null
    title: string | null
    due_time: Date | null
    description: string | null
    priority: string | null
    projected_duration: number | null
    created_at: Date | null
  }

  export type User_deadlinesMaxAggregateOutputType = {
    id: string | null
    user_id: string | null
    event_id: string | null
    title: string | null
    due_time: Date | null
    description: string | null
    priority: string | null
    projected_duration: number | null
    created_at: Date | null
  }

  export type User_deadlinesCountAggregateOutputType = {
    id: number
    user_id: number
    event_id: number
    title: number
    due_time: number
    description: number
    priority: number
    projected_duration: number
    created_at: number
    _all: number
  }


  export type User_deadlinesAvgAggregateInputType = {
    projected_duration?: true
  }

  export type User_deadlinesSumAggregateInputType = {
    projected_duration?: true
  }

  export type User_deadlinesMinAggregateInputType = {
    id?: true
    user_id?: true
    event_id?: true
    title?: true
    due_time?: true
    description?: true
    priority?: true
    projected_duration?: true
    created_at?: true
  }

  export type User_deadlinesMaxAggregateInputType = {
    id?: true
    user_id?: true
    event_id?: true
    title?: true
    due_time?: true
    description?: true
    priority?: true
    projected_duration?: true
    created_at?: true
  }

  export type User_deadlinesCountAggregateInputType = {
    id?: true
    user_id?: true
    event_id?: true
    title?: true
    due_time?: true
    description?: true
    priority?: true
    projected_duration?: true
    created_at?: true
    _all?: true
  }

  export type User_deadlinesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which user_deadlines to aggregate.
     */
    where?: user_deadlinesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of user_deadlines to fetch.
     */
    orderBy?: user_deadlinesOrderByWithRelationInput | user_deadlinesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: user_deadlinesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` user_deadlines from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` user_deadlines.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned user_deadlines
    **/
    _count?: true | User_deadlinesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: User_deadlinesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: User_deadlinesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: User_deadlinesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: User_deadlinesMaxAggregateInputType
  }

  export type GetUser_deadlinesAggregateType<T extends User_deadlinesAggregateArgs> = {
        [P in keyof T & keyof AggregateUser_deadlines]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser_deadlines[P]>
      : GetScalarType<T[P], AggregateUser_deadlines[P]>
  }




  export type user_deadlinesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: user_deadlinesWhereInput
    orderBy?: user_deadlinesOrderByWithAggregationInput | user_deadlinesOrderByWithAggregationInput[]
    by: User_deadlinesScalarFieldEnum[] | User_deadlinesScalarFieldEnum
    having?: user_deadlinesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: User_deadlinesCountAggregateInputType | true
    _avg?: User_deadlinesAvgAggregateInputType
    _sum?: User_deadlinesSumAggregateInputType
    _min?: User_deadlinesMinAggregateInputType
    _max?: User_deadlinesMaxAggregateInputType
  }

  export type User_deadlinesGroupByOutputType = {
    id: string
    user_id: string
    event_id: string
    title: string
    due_time: Date | null
    description: string | null
    priority: string | null
    projected_duration: number | null
    created_at: Date
    _count: User_deadlinesCountAggregateOutputType | null
    _avg: User_deadlinesAvgAggregateOutputType | null
    _sum: User_deadlinesSumAggregateOutputType | null
    _min: User_deadlinesMinAggregateOutputType | null
    _max: User_deadlinesMaxAggregateOutputType | null
  }

  type GetUser_deadlinesGroupByPayload<T extends user_deadlinesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<User_deadlinesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof User_deadlinesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], User_deadlinesGroupByOutputType[P]>
            : GetScalarType<T[P], User_deadlinesGroupByOutputType[P]>
        }
      >
    >


  export type user_deadlinesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    event_id?: boolean
    title?: boolean
    due_time?: boolean
    description?: boolean
    priority?: boolean
    projected_duration?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["user_deadlines"]>

  export type user_deadlinesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    event_id?: boolean
    title?: boolean
    due_time?: boolean
    description?: boolean
    priority?: boolean
    projected_duration?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["user_deadlines"]>

  export type user_deadlinesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    event_id?: boolean
    title?: boolean
    due_time?: boolean
    description?: boolean
    priority?: boolean
    projected_duration?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["user_deadlines"]>

  export type user_deadlinesSelectScalar = {
    id?: boolean
    user_id?: boolean
    event_id?: boolean
    title?: boolean
    due_time?: boolean
    description?: boolean
    priority?: boolean
    projected_duration?: boolean
    created_at?: boolean
  }

  export type user_deadlinesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "user_id" | "event_id" | "title" | "due_time" | "description" | "priority" | "projected_duration" | "created_at", ExtArgs["result"]["user_deadlines"]>

  export type $user_deadlinesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "user_deadlines"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      user_id: string
      event_id: string
      title: string
      due_time: Date | null
      description: string | null
      priority: string | null
      projected_duration: number | null
      created_at: Date
    }, ExtArgs["result"]["user_deadlines"]>
    composites: {}
  }

  type user_deadlinesGetPayload<S extends boolean | null | undefined | user_deadlinesDefaultArgs> = $Result.GetResult<Prisma.$user_deadlinesPayload, S>

  type user_deadlinesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<user_deadlinesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: User_deadlinesCountAggregateInputType | true
    }

  export interface user_deadlinesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['user_deadlines'], meta: { name: 'user_deadlines' } }
    /**
     * Find zero or one User_deadlines that matches the filter.
     * @param {user_deadlinesFindUniqueArgs} args - Arguments to find a User_deadlines
     * @example
     * // Get one User_deadlines
     * const user_deadlines = await prisma.user_deadlines.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends user_deadlinesFindUniqueArgs>(args: SelectSubset<T, user_deadlinesFindUniqueArgs<ExtArgs>>): Prisma__user_deadlinesClient<$Result.GetResult<Prisma.$user_deadlinesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User_deadlines that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {user_deadlinesFindUniqueOrThrowArgs} args - Arguments to find a User_deadlines
     * @example
     * // Get one User_deadlines
     * const user_deadlines = await prisma.user_deadlines.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends user_deadlinesFindUniqueOrThrowArgs>(args: SelectSubset<T, user_deadlinesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__user_deadlinesClient<$Result.GetResult<Prisma.$user_deadlinesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User_deadlines that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_deadlinesFindFirstArgs} args - Arguments to find a User_deadlines
     * @example
     * // Get one User_deadlines
     * const user_deadlines = await prisma.user_deadlines.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends user_deadlinesFindFirstArgs>(args?: SelectSubset<T, user_deadlinesFindFirstArgs<ExtArgs>>): Prisma__user_deadlinesClient<$Result.GetResult<Prisma.$user_deadlinesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User_deadlines that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_deadlinesFindFirstOrThrowArgs} args - Arguments to find a User_deadlines
     * @example
     * // Get one User_deadlines
     * const user_deadlines = await prisma.user_deadlines.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends user_deadlinesFindFirstOrThrowArgs>(args?: SelectSubset<T, user_deadlinesFindFirstOrThrowArgs<ExtArgs>>): Prisma__user_deadlinesClient<$Result.GetResult<Prisma.$user_deadlinesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more User_deadlines that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_deadlinesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all User_deadlines
     * const user_deadlines = await prisma.user_deadlines.findMany()
     * 
     * // Get first 10 User_deadlines
     * const user_deadlines = await prisma.user_deadlines.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const user_deadlinesWithIdOnly = await prisma.user_deadlines.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends user_deadlinesFindManyArgs>(args?: SelectSubset<T, user_deadlinesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$user_deadlinesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User_deadlines.
     * @param {user_deadlinesCreateArgs} args - Arguments to create a User_deadlines.
     * @example
     * // Create one User_deadlines
     * const User_deadlines = await prisma.user_deadlines.create({
     *   data: {
     *     // ... data to create a User_deadlines
     *   }
     * })
     * 
     */
    create<T extends user_deadlinesCreateArgs>(args: SelectSubset<T, user_deadlinesCreateArgs<ExtArgs>>): Prisma__user_deadlinesClient<$Result.GetResult<Prisma.$user_deadlinesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many User_deadlines.
     * @param {user_deadlinesCreateManyArgs} args - Arguments to create many User_deadlines.
     * @example
     * // Create many User_deadlines
     * const user_deadlines = await prisma.user_deadlines.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends user_deadlinesCreateManyArgs>(args?: SelectSubset<T, user_deadlinesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many User_deadlines and returns the data saved in the database.
     * @param {user_deadlinesCreateManyAndReturnArgs} args - Arguments to create many User_deadlines.
     * @example
     * // Create many User_deadlines
     * const user_deadlines = await prisma.user_deadlines.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many User_deadlines and only return the `id`
     * const user_deadlinesWithIdOnly = await prisma.user_deadlines.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends user_deadlinesCreateManyAndReturnArgs>(args?: SelectSubset<T, user_deadlinesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$user_deadlinesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User_deadlines.
     * @param {user_deadlinesDeleteArgs} args - Arguments to delete one User_deadlines.
     * @example
     * // Delete one User_deadlines
     * const User_deadlines = await prisma.user_deadlines.delete({
     *   where: {
     *     // ... filter to delete one User_deadlines
     *   }
     * })
     * 
     */
    delete<T extends user_deadlinesDeleteArgs>(args: SelectSubset<T, user_deadlinesDeleteArgs<ExtArgs>>): Prisma__user_deadlinesClient<$Result.GetResult<Prisma.$user_deadlinesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User_deadlines.
     * @param {user_deadlinesUpdateArgs} args - Arguments to update one User_deadlines.
     * @example
     * // Update one User_deadlines
     * const user_deadlines = await prisma.user_deadlines.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends user_deadlinesUpdateArgs>(args: SelectSubset<T, user_deadlinesUpdateArgs<ExtArgs>>): Prisma__user_deadlinesClient<$Result.GetResult<Prisma.$user_deadlinesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more User_deadlines.
     * @param {user_deadlinesDeleteManyArgs} args - Arguments to filter User_deadlines to delete.
     * @example
     * // Delete a few User_deadlines
     * const { count } = await prisma.user_deadlines.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends user_deadlinesDeleteManyArgs>(args?: SelectSubset<T, user_deadlinesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more User_deadlines.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_deadlinesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many User_deadlines
     * const user_deadlines = await prisma.user_deadlines.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends user_deadlinesUpdateManyArgs>(args: SelectSubset<T, user_deadlinesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more User_deadlines and returns the data updated in the database.
     * @param {user_deadlinesUpdateManyAndReturnArgs} args - Arguments to update many User_deadlines.
     * @example
     * // Update many User_deadlines
     * const user_deadlines = await prisma.user_deadlines.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more User_deadlines and only return the `id`
     * const user_deadlinesWithIdOnly = await prisma.user_deadlines.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends user_deadlinesUpdateManyAndReturnArgs>(args: SelectSubset<T, user_deadlinesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$user_deadlinesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User_deadlines.
     * @param {user_deadlinesUpsertArgs} args - Arguments to update or create a User_deadlines.
     * @example
     * // Update or create a User_deadlines
     * const user_deadlines = await prisma.user_deadlines.upsert({
     *   create: {
     *     // ... data to create a User_deadlines
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User_deadlines we want to update
     *   }
     * })
     */
    upsert<T extends user_deadlinesUpsertArgs>(args: SelectSubset<T, user_deadlinesUpsertArgs<ExtArgs>>): Prisma__user_deadlinesClient<$Result.GetResult<Prisma.$user_deadlinesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of User_deadlines.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_deadlinesCountArgs} args - Arguments to filter User_deadlines to count.
     * @example
     * // Count the number of User_deadlines
     * const count = await prisma.user_deadlines.count({
     *   where: {
     *     // ... the filter for the User_deadlines we want to count
     *   }
     * })
    **/
    count<T extends user_deadlinesCountArgs>(
      args?: Subset<T, user_deadlinesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], User_deadlinesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User_deadlines.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {User_deadlinesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends User_deadlinesAggregateArgs>(args: Subset<T, User_deadlinesAggregateArgs>): Prisma.PrismaPromise<GetUser_deadlinesAggregateType<T>>

    /**
     * Group by User_deadlines.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_deadlinesGroupByArgs} args - Group by arguments.
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
      T extends user_deadlinesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: user_deadlinesGroupByArgs['orderBy'] }
        : { orderBy?: user_deadlinesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, user_deadlinesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUser_deadlinesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the user_deadlines model
   */
  readonly fields: user_deadlinesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for user_deadlines.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__user_deadlinesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the user_deadlines model
   */
  interface user_deadlinesFieldRefs {
    readonly id: FieldRef<"user_deadlines", 'String'>
    readonly user_id: FieldRef<"user_deadlines", 'String'>
    readonly event_id: FieldRef<"user_deadlines", 'String'>
    readonly title: FieldRef<"user_deadlines", 'String'>
    readonly due_time: FieldRef<"user_deadlines", 'DateTime'>
    readonly description: FieldRef<"user_deadlines", 'String'>
    readonly priority: FieldRef<"user_deadlines", 'String'>
    readonly projected_duration: FieldRef<"user_deadlines", 'Int'>
    readonly created_at: FieldRef<"user_deadlines", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * user_deadlines findUnique
   */
  export type user_deadlinesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_deadlines
     */
    select?: user_deadlinesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_deadlines
     */
    omit?: user_deadlinesOmit<ExtArgs> | null
    /**
     * Filter, which user_deadlines to fetch.
     */
    where: user_deadlinesWhereUniqueInput
  }

  /**
   * user_deadlines findUniqueOrThrow
   */
  export type user_deadlinesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_deadlines
     */
    select?: user_deadlinesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_deadlines
     */
    omit?: user_deadlinesOmit<ExtArgs> | null
    /**
     * Filter, which user_deadlines to fetch.
     */
    where: user_deadlinesWhereUniqueInput
  }

  /**
   * user_deadlines findFirst
   */
  export type user_deadlinesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_deadlines
     */
    select?: user_deadlinesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_deadlines
     */
    omit?: user_deadlinesOmit<ExtArgs> | null
    /**
     * Filter, which user_deadlines to fetch.
     */
    where?: user_deadlinesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of user_deadlines to fetch.
     */
    orderBy?: user_deadlinesOrderByWithRelationInput | user_deadlinesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for user_deadlines.
     */
    cursor?: user_deadlinesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` user_deadlines from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` user_deadlines.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of user_deadlines.
     */
    distinct?: User_deadlinesScalarFieldEnum | User_deadlinesScalarFieldEnum[]
  }

  /**
   * user_deadlines findFirstOrThrow
   */
  export type user_deadlinesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_deadlines
     */
    select?: user_deadlinesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_deadlines
     */
    omit?: user_deadlinesOmit<ExtArgs> | null
    /**
     * Filter, which user_deadlines to fetch.
     */
    where?: user_deadlinesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of user_deadlines to fetch.
     */
    orderBy?: user_deadlinesOrderByWithRelationInput | user_deadlinesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for user_deadlines.
     */
    cursor?: user_deadlinesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` user_deadlines from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` user_deadlines.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of user_deadlines.
     */
    distinct?: User_deadlinesScalarFieldEnum | User_deadlinesScalarFieldEnum[]
  }

  /**
   * user_deadlines findMany
   */
  export type user_deadlinesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_deadlines
     */
    select?: user_deadlinesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_deadlines
     */
    omit?: user_deadlinesOmit<ExtArgs> | null
    /**
     * Filter, which user_deadlines to fetch.
     */
    where?: user_deadlinesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of user_deadlines to fetch.
     */
    orderBy?: user_deadlinesOrderByWithRelationInput | user_deadlinesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing user_deadlines.
     */
    cursor?: user_deadlinesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` user_deadlines from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` user_deadlines.
     */
    skip?: number
    distinct?: User_deadlinesScalarFieldEnum | User_deadlinesScalarFieldEnum[]
  }

  /**
   * user_deadlines create
   */
  export type user_deadlinesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_deadlines
     */
    select?: user_deadlinesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_deadlines
     */
    omit?: user_deadlinesOmit<ExtArgs> | null
    /**
     * The data needed to create a user_deadlines.
     */
    data: XOR<user_deadlinesCreateInput, user_deadlinesUncheckedCreateInput>
  }

  /**
   * user_deadlines createMany
   */
  export type user_deadlinesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many user_deadlines.
     */
    data: user_deadlinesCreateManyInput | user_deadlinesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * user_deadlines createManyAndReturn
   */
  export type user_deadlinesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_deadlines
     */
    select?: user_deadlinesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the user_deadlines
     */
    omit?: user_deadlinesOmit<ExtArgs> | null
    /**
     * The data used to create many user_deadlines.
     */
    data: user_deadlinesCreateManyInput | user_deadlinesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * user_deadlines update
   */
  export type user_deadlinesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_deadlines
     */
    select?: user_deadlinesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_deadlines
     */
    omit?: user_deadlinesOmit<ExtArgs> | null
    /**
     * The data needed to update a user_deadlines.
     */
    data: XOR<user_deadlinesUpdateInput, user_deadlinesUncheckedUpdateInput>
    /**
     * Choose, which user_deadlines to update.
     */
    where: user_deadlinesWhereUniqueInput
  }

  /**
   * user_deadlines updateMany
   */
  export type user_deadlinesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update user_deadlines.
     */
    data: XOR<user_deadlinesUpdateManyMutationInput, user_deadlinesUncheckedUpdateManyInput>
    /**
     * Filter which user_deadlines to update
     */
    where?: user_deadlinesWhereInput
    /**
     * Limit how many user_deadlines to update.
     */
    limit?: number
  }

  /**
   * user_deadlines updateManyAndReturn
   */
  export type user_deadlinesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_deadlines
     */
    select?: user_deadlinesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the user_deadlines
     */
    omit?: user_deadlinesOmit<ExtArgs> | null
    /**
     * The data used to update user_deadlines.
     */
    data: XOR<user_deadlinesUpdateManyMutationInput, user_deadlinesUncheckedUpdateManyInput>
    /**
     * Filter which user_deadlines to update
     */
    where?: user_deadlinesWhereInput
    /**
     * Limit how many user_deadlines to update.
     */
    limit?: number
  }

  /**
   * user_deadlines upsert
   */
  export type user_deadlinesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_deadlines
     */
    select?: user_deadlinesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_deadlines
     */
    omit?: user_deadlinesOmit<ExtArgs> | null
    /**
     * The filter to search for the user_deadlines to update in case it exists.
     */
    where: user_deadlinesWhereUniqueInput
    /**
     * In case the user_deadlines found by the `where` argument doesn't exist, create a new user_deadlines with this data.
     */
    create: XOR<user_deadlinesCreateInput, user_deadlinesUncheckedCreateInput>
    /**
     * In case the user_deadlines was found with the provided `where` argument, update it with this data.
     */
    update: XOR<user_deadlinesUpdateInput, user_deadlinesUncheckedUpdateInput>
  }

  /**
   * user_deadlines delete
   */
  export type user_deadlinesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_deadlines
     */
    select?: user_deadlinesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_deadlines
     */
    omit?: user_deadlinesOmit<ExtArgs> | null
    /**
     * Filter which user_deadlines to delete.
     */
    where: user_deadlinesWhereUniqueInput
  }

  /**
   * user_deadlines deleteMany
   */
  export type user_deadlinesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which user_deadlines to delete
     */
    where?: user_deadlinesWhereInput
    /**
     * Limit how many user_deadlines to delete.
     */
    limit?: number
  }

  /**
   * user_deadlines without action
   */
  export type user_deadlinesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_deadlines
     */
    select?: user_deadlinesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_deadlines
     */
    omit?: user_deadlinesOmit<ExtArgs> | null
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


  export const UsersScalarFieldEnum: {
    id: 'id',
    email: 'email',
    created_at: 'created_at'
  };

  export type UsersScalarFieldEnum = (typeof UsersScalarFieldEnum)[keyof typeof UsersScalarFieldEnum]


  export const Preference_questionsScalarFieldEnum: {
    id: 'id',
    question_text: 'question_text'
  };

  export type Preference_questionsScalarFieldEnum = (typeof Preference_questionsScalarFieldEnum)[keyof typeof Preference_questionsScalarFieldEnum]


  export const User_preferencesScalarFieldEnum: {
    id: 'id',
    user_id: 'user_id',
    question_id: 'question_id',
    answer: 'answer'
  };

  export type User_preferencesScalarFieldEnum = (typeof User_preferencesScalarFieldEnum)[keyof typeof User_preferencesScalarFieldEnum]


  export const User_eventsScalarFieldEnum: {
    id: 'id',
    user_id: 'user_id',
    title: 'title',
    start_time: 'start_time',
    end_time: 'end_time',
    description: 'description',
    location_place: 'location_place',
    is_recurring: 'is_recurring',
    recurrence_pattern: 'recurrence_pattern',
    recurrence_start_date: 'recurrence_start_date',
    recurrence_end_date: 'recurrence_end_date',
    is_generated: 'is_generated',
    break_time: 'break_time',
    created_at: 'created_at'
  };

  export type User_eventsScalarFieldEnum = (typeof User_eventsScalarFieldEnum)[keyof typeof User_eventsScalarFieldEnum]


  export const User_deadlinesScalarFieldEnum: {
    id: 'id',
    user_id: 'user_id',
    event_id: 'event_id',
    title: 'title',
    due_time: 'due_time',
    description: 'description',
    priority: 'priority',
    projected_duration: 'projected_duration',
    created_at: 'created_at'
  };

  export type User_deadlinesScalarFieldEnum = (typeof User_deadlinesScalarFieldEnum)[keyof typeof User_deadlinesScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type usersWhereInput = {
    AND?: usersWhereInput | usersWhereInput[]
    OR?: usersWhereInput[]
    NOT?: usersWhereInput | usersWhereInput[]
    id?: StringFilter<"users"> | string
    email?: StringFilter<"users"> | string
    created_at?: DateTimeFilter<"users"> | Date | string
  }

  export type usersOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    created_at?: SortOrder
  }

  export type usersWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: usersWhereInput | usersWhereInput[]
    OR?: usersWhereInput[]
    NOT?: usersWhereInput | usersWhereInput[]
    created_at?: DateTimeFilter<"users"> | Date | string
  }, "id" | "email">

  export type usersOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    created_at?: SortOrder
    _count?: usersCountOrderByAggregateInput
    _max?: usersMaxOrderByAggregateInput
    _min?: usersMinOrderByAggregateInput
  }

  export type usersScalarWhereWithAggregatesInput = {
    AND?: usersScalarWhereWithAggregatesInput | usersScalarWhereWithAggregatesInput[]
    OR?: usersScalarWhereWithAggregatesInput[]
    NOT?: usersScalarWhereWithAggregatesInput | usersScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"users"> | string
    email?: StringWithAggregatesFilter<"users"> | string
    created_at?: DateTimeWithAggregatesFilter<"users"> | Date | string
  }

  export type preference_questionsWhereInput = {
    AND?: preference_questionsWhereInput | preference_questionsWhereInput[]
    OR?: preference_questionsWhereInput[]
    NOT?: preference_questionsWhereInput | preference_questionsWhereInput[]
    id?: StringFilter<"preference_questions"> | string
    question_text?: StringFilter<"preference_questions"> | string
  }

  export type preference_questionsOrderByWithRelationInput = {
    id?: SortOrder
    question_text?: SortOrder
  }

  export type preference_questionsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: preference_questionsWhereInput | preference_questionsWhereInput[]
    OR?: preference_questionsWhereInput[]
    NOT?: preference_questionsWhereInput | preference_questionsWhereInput[]
    question_text?: StringFilter<"preference_questions"> | string
  }, "id">

  export type preference_questionsOrderByWithAggregationInput = {
    id?: SortOrder
    question_text?: SortOrder
    _count?: preference_questionsCountOrderByAggregateInput
    _max?: preference_questionsMaxOrderByAggregateInput
    _min?: preference_questionsMinOrderByAggregateInput
  }

  export type preference_questionsScalarWhereWithAggregatesInput = {
    AND?: preference_questionsScalarWhereWithAggregatesInput | preference_questionsScalarWhereWithAggregatesInput[]
    OR?: preference_questionsScalarWhereWithAggregatesInput[]
    NOT?: preference_questionsScalarWhereWithAggregatesInput | preference_questionsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"preference_questions"> | string
    question_text?: StringWithAggregatesFilter<"preference_questions"> | string
  }

  export type user_preferencesWhereInput = {
    AND?: user_preferencesWhereInput | user_preferencesWhereInput[]
    OR?: user_preferencesWhereInput[]
    NOT?: user_preferencesWhereInput | user_preferencesWhereInput[]
    id?: StringFilter<"user_preferences"> | string
    user_id?: StringFilter<"user_preferences"> | string
    question_id?: StringFilter<"user_preferences"> | string
    answer?: StringNullableFilter<"user_preferences"> | string | null
  }

  export type user_preferencesOrderByWithRelationInput = {
    id?: SortOrder
    user_id?: SortOrder
    question_id?: SortOrder
    answer?: SortOrderInput | SortOrder
  }

  export type user_preferencesWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: user_preferencesWhereInput | user_preferencesWhereInput[]
    OR?: user_preferencesWhereInput[]
    NOT?: user_preferencesWhereInput | user_preferencesWhereInput[]
    user_id?: StringFilter<"user_preferences"> | string
    question_id?: StringFilter<"user_preferences"> | string
    answer?: StringNullableFilter<"user_preferences"> | string | null
  }, "id">

  export type user_preferencesOrderByWithAggregationInput = {
    id?: SortOrder
    user_id?: SortOrder
    question_id?: SortOrder
    answer?: SortOrderInput | SortOrder
    _count?: user_preferencesCountOrderByAggregateInput
    _max?: user_preferencesMaxOrderByAggregateInput
    _min?: user_preferencesMinOrderByAggregateInput
  }

  export type user_preferencesScalarWhereWithAggregatesInput = {
    AND?: user_preferencesScalarWhereWithAggregatesInput | user_preferencesScalarWhereWithAggregatesInput[]
    OR?: user_preferencesScalarWhereWithAggregatesInput[]
    NOT?: user_preferencesScalarWhereWithAggregatesInput | user_preferencesScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"user_preferences"> | string
    user_id?: StringWithAggregatesFilter<"user_preferences"> | string
    question_id?: StringWithAggregatesFilter<"user_preferences"> | string
    answer?: StringNullableWithAggregatesFilter<"user_preferences"> | string | null
  }

  export type user_eventsWhereInput = {
    AND?: user_eventsWhereInput | user_eventsWhereInput[]
    OR?: user_eventsWhereInput[]
    NOT?: user_eventsWhereInput | user_eventsWhereInput[]
    id?: StringFilter<"user_events"> | string
    user_id?: StringFilter<"user_events"> | string
    title?: StringFilter<"user_events"> | string
    start_time?: DateTimeFilter<"user_events"> | Date | string
    end_time?: DateTimeNullableFilter<"user_events"> | Date | string | null
    description?: StringNullableFilter<"user_events"> | string | null
    location_place?: StringNullableFilter<"user_events"> | string | null
    is_recurring?: BoolFilter<"user_events"> | boolean
    recurrence_pattern?: StringNullableFilter<"user_events"> | string | null
    recurrence_start_date?: DateTimeNullableFilter<"user_events"> | Date | string | null
    recurrence_end_date?: DateTimeNullableFilter<"user_events"> | Date | string | null
    is_generated?: BoolFilter<"user_events"> | boolean
    break_time?: StringNullableFilter<"user_events"> | string | null
    created_at?: DateTimeFilter<"user_events"> | Date | string
  }

  export type user_eventsOrderByWithRelationInput = {
    id?: SortOrder
    user_id?: SortOrder
    title?: SortOrder
    start_time?: SortOrder
    end_time?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    location_place?: SortOrderInput | SortOrder
    is_recurring?: SortOrder
    recurrence_pattern?: SortOrderInput | SortOrder
    recurrence_start_date?: SortOrderInput | SortOrder
    recurrence_end_date?: SortOrderInput | SortOrder
    is_generated?: SortOrder
    break_time?: SortOrderInput | SortOrder
    created_at?: SortOrder
  }

  export type user_eventsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: user_eventsWhereInput | user_eventsWhereInput[]
    OR?: user_eventsWhereInput[]
    NOT?: user_eventsWhereInput | user_eventsWhereInput[]
    user_id?: StringFilter<"user_events"> | string
    title?: StringFilter<"user_events"> | string
    start_time?: DateTimeFilter<"user_events"> | Date | string
    end_time?: DateTimeNullableFilter<"user_events"> | Date | string | null
    description?: StringNullableFilter<"user_events"> | string | null
    location_place?: StringNullableFilter<"user_events"> | string | null
    is_recurring?: BoolFilter<"user_events"> | boolean
    recurrence_pattern?: StringNullableFilter<"user_events"> | string | null
    recurrence_start_date?: DateTimeNullableFilter<"user_events"> | Date | string | null
    recurrence_end_date?: DateTimeNullableFilter<"user_events"> | Date | string | null
    is_generated?: BoolFilter<"user_events"> | boolean
    break_time?: StringNullableFilter<"user_events"> | string | null
    created_at?: DateTimeFilter<"user_events"> | Date | string
  }, "id">

  export type user_eventsOrderByWithAggregationInput = {
    id?: SortOrder
    user_id?: SortOrder
    title?: SortOrder
    start_time?: SortOrder
    end_time?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    location_place?: SortOrderInput | SortOrder
    is_recurring?: SortOrder
    recurrence_pattern?: SortOrderInput | SortOrder
    recurrence_start_date?: SortOrderInput | SortOrder
    recurrence_end_date?: SortOrderInput | SortOrder
    is_generated?: SortOrder
    break_time?: SortOrderInput | SortOrder
    created_at?: SortOrder
    _count?: user_eventsCountOrderByAggregateInput
    _max?: user_eventsMaxOrderByAggregateInput
    _min?: user_eventsMinOrderByAggregateInput
  }

  export type user_eventsScalarWhereWithAggregatesInput = {
    AND?: user_eventsScalarWhereWithAggregatesInput | user_eventsScalarWhereWithAggregatesInput[]
    OR?: user_eventsScalarWhereWithAggregatesInput[]
    NOT?: user_eventsScalarWhereWithAggregatesInput | user_eventsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"user_events"> | string
    user_id?: StringWithAggregatesFilter<"user_events"> | string
    title?: StringWithAggregatesFilter<"user_events"> | string
    start_time?: DateTimeWithAggregatesFilter<"user_events"> | Date | string
    end_time?: DateTimeNullableWithAggregatesFilter<"user_events"> | Date | string | null
    description?: StringNullableWithAggregatesFilter<"user_events"> | string | null
    location_place?: StringNullableWithAggregatesFilter<"user_events"> | string | null
    is_recurring?: BoolWithAggregatesFilter<"user_events"> | boolean
    recurrence_pattern?: StringNullableWithAggregatesFilter<"user_events"> | string | null
    recurrence_start_date?: DateTimeNullableWithAggregatesFilter<"user_events"> | Date | string | null
    recurrence_end_date?: DateTimeNullableWithAggregatesFilter<"user_events"> | Date | string | null
    is_generated?: BoolWithAggregatesFilter<"user_events"> | boolean
    break_time?: StringNullableWithAggregatesFilter<"user_events"> | string | null
    created_at?: DateTimeWithAggregatesFilter<"user_events"> | Date | string
  }

  export type user_deadlinesWhereInput = {
    AND?: user_deadlinesWhereInput | user_deadlinesWhereInput[]
    OR?: user_deadlinesWhereInput[]
    NOT?: user_deadlinesWhereInput | user_deadlinesWhereInput[]
    id?: StringFilter<"user_deadlines"> | string
    user_id?: StringFilter<"user_deadlines"> | string
    event_id?: StringFilter<"user_deadlines"> | string
    title?: StringFilter<"user_deadlines"> | string
    due_time?: DateTimeNullableFilter<"user_deadlines"> | Date | string | null
    description?: StringNullableFilter<"user_deadlines"> | string | null
    priority?: StringNullableFilter<"user_deadlines"> | string | null
    projected_duration?: IntNullableFilter<"user_deadlines"> | number | null
    created_at?: DateTimeFilter<"user_deadlines"> | Date | string
  }

  export type user_deadlinesOrderByWithRelationInput = {
    id?: SortOrder
    user_id?: SortOrder
    event_id?: SortOrder
    title?: SortOrder
    due_time?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    priority?: SortOrderInput | SortOrder
    projected_duration?: SortOrderInput | SortOrder
    created_at?: SortOrder
  }

  export type user_deadlinesWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: user_deadlinesWhereInput | user_deadlinesWhereInput[]
    OR?: user_deadlinesWhereInput[]
    NOT?: user_deadlinesWhereInput | user_deadlinesWhereInput[]
    user_id?: StringFilter<"user_deadlines"> | string
    event_id?: StringFilter<"user_deadlines"> | string
    title?: StringFilter<"user_deadlines"> | string
    due_time?: DateTimeNullableFilter<"user_deadlines"> | Date | string | null
    description?: StringNullableFilter<"user_deadlines"> | string | null
    priority?: StringNullableFilter<"user_deadlines"> | string | null
    projected_duration?: IntNullableFilter<"user_deadlines"> | number | null
    created_at?: DateTimeFilter<"user_deadlines"> | Date | string
  }, "id">

  export type user_deadlinesOrderByWithAggregationInput = {
    id?: SortOrder
    user_id?: SortOrder
    event_id?: SortOrder
    title?: SortOrder
    due_time?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    priority?: SortOrderInput | SortOrder
    projected_duration?: SortOrderInput | SortOrder
    created_at?: SortOrder
    _count?: user_deadlinesCountOrderByAggregateInput
    _avg?: user_deadlinesAvgOrderByAggregateInput
    _max?: user_deadlinesMaxOrderByAggregateInput
    _min?: user_deadlinesMinOrderByAggregateInput
    _sum?: user_deadlinesSumOrderByAggregateInput
  }

  export type user_deadlinesScalarWhereWithAggregatesInput = {
    AND?: user_deadlinesScalarWhereWithAggregatesInput | user_deadlinesScalarWhereWithAggregatesInput[]
    OR?: user_deadlinesScalarWhereWithAggregatesInput[]
    NOT?: user_deadlinesScalarWhereWithAggregatesInput | user_deadlinesScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"user_deadlines"> | string
    user_id?: StringWithAggregatesFilter<"user_deadlines"> | string
    event_id?: StringWithAggregatesFilter<"user_deadlines"> | string
    title?: StringWithAggregatesFilter<"user_deadlines"> | string
    due_time?: DateTimeNullableWithAggregatesFilter<"user_deadlines"> | Date | string | null
    description?: StringNullableWithAggregatesFilter<"user_deadlines"> | string | null
    priority?: StringNullableWithAggregatesFilter<"user_deadlines"> | string | null
    projected_duration?: IntNullableWithAggregatesFilter<"user_deadlines"> | number | null
    created_at?: DateTimeWithAggregatesFilter<"user_deadlines"> | Date | string
  }

  export type usersCreateInput = {
    id?: string
    email: string
    created_at?: Date | string
  }

  export type usersUncheckedCreateInput = {
    id?: string
    email: string
    created_at?: Date | string
  }

  export type usersUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type usersUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type usersCreateManyInput = {
    id?: string
    email: string
    created_at?: Date | string
  }

  export type usersUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type usersUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type preference_questionsCreateInput = {
    id?: string
    question_text: string
  }

  export type preference_questionsUncheckedCreateInput = {
    id?: string
    question_text: string
  }

  export type preference_questionsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    question_text?: StringFieldUpdateOperationsInput | string
  }

  export type preference_questionsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    question_text?: StringFieldUpdateOperationsInput | string
  }

  export type preference_questionsCreateManyInput = {
    id?: string
    question_text: string
  }

  export type preference_questionsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    question_text?: StringFieldUpdateOperationsInput | string
  }

  export type preference_questionsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    question_text?: StringFieldUpdateOperationsInput | string
  }

  export type user_preferencesCreateInput = {
    id?: string
    user_id: string
    question_id: string
    answer?: string | null
  }

  export type user_preferencesUncheckedCreateInput = {
    id?: string
    user_id: string
    question_id: string
    answer?: string | null
  }

  export type user_preferencesUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    question_id?: StringFieldUpdateOperationsInput | string
    answer?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type user_preferencesUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    question_id?: StringFieldUpdateOperationsInput | string
    answer?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type user_preferencesCreateManyInput = {
    id?: string
    user_id: string
    question_id: string
    answer?: string | null
  }

  export type user_preferencesUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    question_id?: StringFieldUpdateOperationsInput | string
    answer?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type user_preferencesUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    question_id?: StringFieldUpdateOperationsInput | string
    answer?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type user_eventsCreateInput = {
    id?: string
    user_id: string
    title: string
    start_time?: Date | string
    end_time?: Date | string | null
    description?: string | null
    location_place?: string | null
    is_recurring?: boolean
    recurrence_pattern?: string | null
    recurrence_start_date?: Date | string | null
    recurrence_end_date?: Date | string | null
    is_generated?: boolean
    break_time?: string | null
    created_at?: Date | string
  }

  export type user_eventsUncheckedCreateInput = {
    id?: string
    user_id: string
    title: string
    start_time?: Date | string
    end_time?: Date | string | null
    description?: string | null
    location_place?: string | null
    is_recurring?: boolean
    recurrence_pattern?: string | null
    recurrence_start_date?: Date | string | null
    recurrence_end_date?: Date | string | null
    is_generated?: boolean
    break_time?: string | null
    created_at?: Date | string
  }

  export type user_eventsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    start_time?: DateTimeFieldUpdateOperationsInput | Date | string
    end_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    location_place?: NullableStringFieldUpdateOperationsInput | string | null
    is_recurring?: BoolFieldUpdateOperationsInput | boolean
    recurrence_pattern?: NullableStringFieldUpdateOperationsInput | string | null
    recurrence_start_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    recurrence_end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    is_generated?: BoolFieldUpdateOperationsInput | boolean
    break_time?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type user_eventsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    start_time?: DateTimeFieldUpdateOperationsInput | Date | string
    end_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    location_place?: NullableStringFieldUpdateOperationsInput | string | null
    is_recurring?: BoolFieldUpdateOperationsInput | boolean
    recurrence_pattern?: NullableStringFieldUpdateOperationsInput | string | null
    recurrence_start_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    recurrence_end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    is_generated?: BoolFieldUpdateOperationsInput | boolean
    break_time?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type user_eventsCreateManyInput = {
    id?: string
    user_id: string
    title: string
    start_time?: Date | string
    end_time?: Date | string | null
    description?: string | null
    location_place?: string | null
    is_recurring?: boolean
    recurrence_pattern?: string | null
    recurrence_start_date?: Date | string | null
    recurrence_end_date?: Date | string | null
    is_generated?: boolean
    break_time?: string | null
    created_at?: Date | string
  }

  export type user_eventsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    start_time?: DateTimeFieldUpdateOperationsInput | Date | string
    end_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    location_place?: NullableStringFieldUpdateOperationsInput | string | null
    is_recurring?: BoolFieldUpdateOperationsInput | boolean
    recurrence_pattern?: NullableStringFieldUpdateOperationsInput | string | null
    recurrence_start_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    recurrence_end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    is_generated?: BoolFieldUpdateOperationsInput | boolean
    break_time?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type user_eventsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    start_time?: DateTimeFieldUpdateOperationsInput | Date | string
    end_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    location_place?: NullableStringFieldUpdateOperationsInput | string | null
    is_recurring?: BoolFieldUpdateOperationsInput | boolean
    recurrence_pattern?: NullableStringFieldUpdateOperationsInput | string | null
    recurrence_start_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    recurrence_end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    is_generated?: BoolFieldUpdateOperationsInput | boolean
    break_time?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type user_deadlinesCreateInput = {
    id?: string
    user_id: string
    event_id: string
    title: string
    due_time?: Date | string | null
    description?: string | null
    priority?: string | null
    projected_duration?: number | null
    created_at: Date | string
  }

  export type user_deadlinesUncheckedCreateInput = {
    id?: string
    user_id: string
    event_id: string
    title: string
    due_time?: Date | string | null
    description?: string | null
    priority?: string | null
    projected_duration?: number | null
    created_at: Date | string
  }

  export type user_deadlinesUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    event_id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    due_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    priority?: NullableStringFieldUpdateOperationsInput | string | null
    projected_duration?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type user_deadlinesUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    event_id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    due_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    priority?: NullableStringFieldUpdateOperationsInput | string | null
    projected_duration?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type user_deadlinesCreateManyInput = {
    id?: string
    user_id: string
    event_id: string
    title: string
    due_time?: Date | string | null
    description?: string | null
    priority?: string | null
    projected_duration?: number | null
    created_at: Date | string
  }

  export type user_deadlinesUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    event_id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    due_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    priority?: NullableStringFieldUpdateOperationsInput | string | null
    projected_duration?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type user_deadlinesUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    event_id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    due_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    priority?: NullableStringFieldUpdateOperationsInput | string | null
    projected_duration?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type usersCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    created_at?: SortOrder
  }

  export type usersMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    created_at?: SortOrder
  }

  export type usersMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    created_at?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type preference_questionsCountOrderByAggregateInput = {
    id?: SortOrder
    question_text?: SortOrder
  }

  export type preference_questionsMaxOrderByAggregateInput = {
    id?: SortOrder
    question_text?: SortOrder
  }

  export type preference_questionsMinOrderByAggregateInput = {
    id?: SortOrder
    question_text?: SortOrder
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type user_preferencesCountOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    question_id?: SortOrder
    answer?: SortOrder
  }

  export type user_preferencesMaxOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    question_id?: SortOrder
    answer?: SortOrder
  }

  export type user_preferencesMinOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    question_id?: SortOrder
    answer?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type user_eventsCountOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    title?: SortOrder
    start_time?: SortOrder
    end_time?: SortOrder
    description?: SortOrder
    location_place?: SortOrder
    is_recurring?: SortOrder
    recurrence_pattern?: SortOrder
    recurrence_start_date?: SortOrder
    recurrence_end_date?: SortOrder
    is_generated?: SortOrder
    break_time?: SortOrder
    created_at?: SortOrder
  }

  export type user_eventsMaxOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    title?: SortOrder
    start_time?: SortOrder
    end_time?: SortOrder
    description?: SortOrder
    location_place?: SortOrder
    is_recurring?: SortOrder
    recurrence_pattern?: SortOrder
    recurrence_start_date?: SortOrder
    recurrence_end_date?: SortOrder
    is_generated?: SortOrder
    break_time?: SortOrder
    created_at?: SortOrder
  }

  export type user_eventsMinOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    title?: SortOrder
    start_time?: SortOrder
    end_time?: SortOrder
    description?: SortOrder
    location_place?: SortOrder
    is_recurring?: SortOrder
    recurrence_pattern?: SortOrder
    recurrence_start_date?: SortOrder
    recurrence_end_date?: SortOrder
    is_generated?: SortOrder
    break_time?: SortOrder
    created_at?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type user_deadlinesCountOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    event_id?: SortOrder
    title?: SortOrder
    due_time?: SortOrder
    description?: SortOrder
    priority?: SortOrder
    projected_duration?: SortOrder
    created_at?: SortOrder
  }

  export type user_deadlinesAvgOrderByAggregateInput = {
    projected_duration?: SortOrder
  }

  export type user_deadlinesMaxOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    event_id?: SortOrder
    title?: SortOrder
    due_time?: SortOrder
    description?: SortOrder
    priority?: SortOrder
    projected_duration?: SortOrder
    created_at?: SortOrder
  }

  export type user_deadlinesMinOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    event_id?: SortOrder
    title?: SortOrder
    due_time?: SortOrder
    description?: SortOrder
    priority?: SortOrder
    projected_duration?: SortOrder
    created_at?: SortOrder
  }

  export type user_deadlinesSumOrderByAggregateInput = {
    projected_duration?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
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

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
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

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
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

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
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
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }



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