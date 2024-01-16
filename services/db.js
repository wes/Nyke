import 'dotenv/config';
import { drizzle } from 'drizzle-orm/mysql2';
import { migrate as migrateDb } from 'drizzle-orm/mysql2/migrator';
import mysql from 'mysql2/promise';
import * as schema from 'schema';
// Create the connection
const poolConnection = mysql.createPool(process.env.DATABASE_URL);
export const db = drizzle(poolConnection, { schema, mode: 'default' });
export const migrate = () => migrateDb(db, { migrationsFolder: 'drizzle' });
