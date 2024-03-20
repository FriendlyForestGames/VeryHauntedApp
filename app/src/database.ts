import { DB } from './types/database/types';
import { Pool } from 'pg';
import { Kysely, PostgresDialect } from 'kysely';
import * as process from 'process';

const dialect = new PostgresDialect({
  pool: new Pool({
    database: process.env.DATABASE_NAME,
    host: process.env.DATABASE_HOST,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    port: 5434,
    max: 10
  })
});

// Database interface is passed to Kysely's constructor, and from now on, Kysely
// knows your database structure.
// Dialect is passed to Kysely's constructor, and from now on, Kysely knows how
// to communicate with your database.
export const db = new Kysely<DB>({
  dialect
});