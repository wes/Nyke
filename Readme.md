# Nyke Stack

This stack is a boilerplate for a simple and fast API REST server with based routing guards.  Utilizing Bun for speed and efficiency and powering the database ORM and migrations is Drizzle.

- Bun
- Typescript
- Yarn
- Express
- File Based Router
- Drizzle ORM w/ Migrations
- Guarded routes

### Dev Setup

To get it going, install packages with yarn.  Other package managers probably work just fine too.

```
yarn
```

Run dev server.

```
yarn dev
```

## Database

We are fans of Planetscale and MySQL, but Drizzle also supports Postgres and SQL Lite.  We are just big fans of SQL overall, so anything SQL is good with us.  Currently the default config for this boilerplate uses mysql2 and is configured to work with mysql tables.  Take a look at Drizzle ORM docs to configure using Postgres if you prefer.

### Connecting

Create an .env file
```
DATABASE_URL=mysql://user:password@localhost:3306/database
```

### Schema

The database schema is managed in the ./schema.ts file.  The schema docs here https://orm.drizzle.team/docs/schemas are really great.

### Migrations

To migrate the schema changes you will want to generate a new migration by running:

```
yarn generate
```

This will generate a new file in the ./drizzle/ folder, then will manage the migrations are they are deployed.

### Routing

The routing is handled by https://github.com/Danilqa/node-file-router

The route files are in /api

### Guards

Simple routing based guards are managed directly in the server.ts.  Mostly for transparency and simplicty.
