import {
  int,
  mysqlTable,
  uniqueIndex,
  varchar,
  serial,
} from 'drizzle-orm/mysql-core';

export const users = mysqlTable(
  'users',
  {
    id: serial('id').primaryKey(),
    created_at: int('created_at'),
    updated_at: int('updated_at'),
    first_name: varchar('first_name', { length: 256 }),
    last_name: varchar('last_name', { length: 256 }),
    email: varchar('email', { length: 256 }),
    password: varchar('password', { length: 256 }),
  },
  users => ({
    firstNameIndex: uniqueIndex('first_name_idx').on(users.first_name),
    lastNameIndex: uniqueIndex('last_name_idx').on(users.last_name),
  })
);

export const accounts = mysqlTable(
  'accounts',
  {
    id: serial('id').primaryKey(),
    created_at: int('created_at'),
    updated_at: int('updated_at'),
    name: varchar('name', { length: 256 }),
  },
  accounts => ({
    nameIndex: uniqueIndex('name_idx').on(accounts.name),
  })
);
