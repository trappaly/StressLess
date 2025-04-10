
Object.defineProperty(exports, "__esModule", { value: true });

const {
  PrismaClientKnownRequestError,
  PrismaClientUnknownRequestError,
  PrismaClientRustPanicError,
  PrismaClientInitializationError,
  PrismaClientValidationError,
  getPrismaClient,
  sqltag,
  empty,
  join,
  raw,
  skip,
  Decimal,
  Debug,
  objectEnumValues,
  makeStrictEnum,
  Extensions,
  warnOnce,
  defineDmmfProperty,
  Public,
  getRuntime,
  createParam,
} = require('./runtime/wasm.js')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 6.6.0
 * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
 */
Prisma.prismaVersion = {
  client: "6.6.0",
  engine: "f676762280b54cd07c770017ed3711ddde35f37a"
}

Prisma.PrismaClientKnownRequestError = PrismaClientKnownRequestError;
Prisma.PrismaClientUnknownRequestError = PrismaClientUnknownRequestError
Prisma.PrismaClientRustPanicError = PrismaClientRustPanicError
Prisma.PrismaClientInitializationError = PrismaClientInitializationError
Prisma.PrismaClientValidationError = PrismaClientValidationError
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = sqltag
Prisma.empty = empty
Prisma.join = join
Prisma.raw = raw
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = Extensions.getExtensionContext
Prisma.defineExtension = Extensions.defineExtension

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

exports.Prisma.UsersScalarFieldEnum = {
  id: 'id',
  email: 'email',
  created_at: 'created_at'
};

exports.Prisma.Preference_questionsScalarFieldEnum = {
  id: 'id',
  question_text: 'question_text'
};

exports.Prisma.User_preferencesScalarFieldEnum = {
  id: 'id',
  user_id: 'user_id',
  question_id: 'question_id',
  answer: 'answer'
};

exports.Prisma.User_eventsScalarFieldEnum = {
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

exports.Prisma.User_deadlinesScalarFieldEnum = {
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

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.QueryMode = {
  default: 'default',
  insensitive: 'insensitive'
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};


exports.Prisma.ModelName = {
  users: 'users',
  preference_questions: 'preference_questions',
  user_preferences: 'user_preferences',
  user_events: 'user_events',
  user_deadlines: 'user_deadlines'
};
/**
 * Create the Client
 */
const config = {
  "generator": {
    "name": "client",
    "provider": {
      "fromEnvVar": null,
      "value": "prisma-client-js"
    },
    "output": {
      "value": "/Users/alyssatrapp/StressLess/prisma/generated/client",
      "fromEnvVar": null
    },
    "config": {
      "engineType": "library"
    },
    "binaryTargets": [
      {
        "fromEnvVar": null,
        "value": "darwin-arm64",
        "native": true
      }
    ],
    "previewFeatures": [
      "driverAdapters"
    ],
    "sourceFilePath": "/Users/alyssatrapp/StressLess/prisma/schema.prisma",
    "isCustomOutput": true
  },
  "relativeEnvPaths": {
    "rootEnvPath": null
  },
  "relativePath": "../..",
  "clientVersion": "6.6.0",
  "engineVersion": "f676762280b54cd07c770017ed3711ddde35f37a",
  "datasourceNames": [
    "db"
  ],
  "activeProvider": "postgresql",
  "postinstall": false,
  "inlineDatasources": {
    "db": {
      "url": {
        "fromEnvVar": "DATABASE_URL",
        "value": null
      }
    }
  },
  "inlineSchema": "// This is your Prisma schema file,\n// learn more about it in the docs: https://pris.ly/d/prisma-schema\n\n// Looking for ways to speed up your queries, or scale easily with your serverless or edge functions?\n// Try Prisma Accelerate: https://pris.ly/cli/accelerate-init\n\ngenerator client {\n  provider        = \"prisma-client-js\"\n  previewFeatures = [\"driverAdapters\"]\n  output          = \"./generated/client\"\n}\n\ndatasource db {\n  provider  = \"postgresql\"\n  url       = env(\"DATABASE_URL\")\n  directUrl = env(\"DIRECT_URL\")\n}\n\nmodel users {\n  id         String   @id @default(uuid())\n  email      String   @unique\n  created_at DateTime @default(now())\n}\n\nmodel preference_questions {\n  id            String @id @default(uuid())\n  question_text String\n}\n\nmodel user_preferences {\n  id          String  @id @default(uuid())\n  user_id     String\n  question_id String\n  answer      String?\n}\n\nmodel user_events {\n  id                    String    @id @default(uuid())\n  user_id               String\n  title                 String    @db.VarChar(255)\n  start_time            DateTime  @default(now())\n  end_time              DateTime?\n  description           String?\n  location_place        String?   @db.VarChar(255)\n  is_recurring          Boolean   @default(false)\n  recurrence_pattern    String?   @db.VarChar(255)\n  recurrence_start_date DateTime?\n  recurrence_end_date   DateTime?\n  is_generated          Boolean   @default(false)\n  break_time            String?\n  created_at            DateTime  @default(now())\n}\n\nmodel user_deadlines {\n  id                 String    @id @default(uuid())\n  user_id            String\n  event_id           String\n  title              String    @db.VarChar(255)\n  due_time           DateTime?\n  description        String?\n  priority           String?   @db.VarChar(255)\n  projected_duration Int?\n  created_at         DateTime\n}\n",
  "inlineSchemaHash": "740ac7a17ba78d6fe7861cf5033e82f43795af7fa8e5b69a3def250561bb2cde",
  "copyEngine": true
}
config.dirname = '/'

config.runtimeDataModel = JSON.parse("{\"models\":{\"users\":{\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"email\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"created_at\",\"kind\":\"scalar\",\"type\":\"DateTime\"}],\"dbName\":null},\"preference_questions\":{\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"question_text\",\"kind\":\"scalar\",\"type\":\"String\"}],\"dbName\":null},\"user_preferences\":{\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"user_id\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"question_id\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"answer\",\"kind\":\"scalar\",\"type\":\"String\"}],\"dbName\":null},\"user_events\":{\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"user_id\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"title\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"start_time\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"end_time\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"description\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"location_place\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"is_recurring\",\"kind\":\"scalar\",\"type\":\"Boolean\"},{\"name\":\"recurrence_pattern\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"recurrence_start_date\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"recurrence_end_date\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"is_generated\",\"kind\":\"scalar\",\"type\":\"Boolean\"},{\"name\":\"break_time\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"created_at\",\"kind\":\"scalar\",\"type\":\"DateTime\"}],\"dbName\":null},\"user_deadlines\":{\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"user_id\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"event_id\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"title\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"due_time\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"description\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"priority\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"projected_duration\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"created_at\",\"kind\":\"scalar\",\"type\":\"DateTime\"}],\"dbName\":null}},\"enums\":{},\"types\":{}}")
defineDmmfProperty(exports.Prisma, config.runtimeDataModel)
config.engineWasm = {
  getRuntime: async () => require('./query_engine_bg.js'),
  getQueryEngineWasmModule: async () => {
    const loader = (await import('#wasm-engine-loader')).default
    const engine = (await loader).default
    return engine
  }
}
config.compilerWasm = undefined

config.injectableEdgeEnv = () => ({
  parsed: {
    DATABASE_URL: typeof globalThis !== 'undefined' && globalThis['DATABASE_URL'] || typeof process !== 'undefined' && process.env && process.env.DATABASE_URL || undefined
  }
})

if (typeof globalThis !== 'undefined' && globalThis['DEBUG'] || typeof process !== 'undefined' && process.env && process.env.DEBUG || undefined) {
  Debug.enable(typeof globalThis !== 'undefined' && globalThis['DEBUG'] || typeof process !== 'undefined' && process.env && process.env.DEBUG || undefined)
}

const PrismaClient = getPrismaClient(config)
exports.PrismaClient = PrismaClient
Object.assign(exports, Prisma)

