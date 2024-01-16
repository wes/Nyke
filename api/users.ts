import type { Request, Response } from 'express';

import { db } from 'services/db';

export default {
  get: async (req: Request, res: Response) => {
    const users = await db.query.users.findMany();
    res.json(users);
  },
};
