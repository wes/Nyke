import { initFileRouter } from 'node-file-router';
import express from 'express';
import { migrate } from 'services/db';

import userGuard from './guards/userGuard';

const port = 4002;

const app = express();

// setup the guards / policies by routes here
app.use('/', [userGuard]);
// ex:
// app.use('/admin', [userGuard, adminGuard]);

// start file based routing
const fileRouter = await initFileRouter();
app.use(fileRouter);

app.listen(port);
console.log(`Server running at http://localhost:${port}/`);

// run db migration
migrate();
