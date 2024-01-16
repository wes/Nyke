import type { Request, Response } from 'express';

export default {
  get: async (req: Request, res: Response) => {
    console.log('----------- Running api/index.ts -------------');
    res.send('Hello World!');
  },
};
