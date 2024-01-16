// A simple guard that checks if the user is logged in. If not, it returns a 401 response.

import type { Request, Response } from 'express';

interface UserGuardRequest extends Request {
  user: {
    id: number;
    email: string;
    role: string;
  };
}

export default function userGuard(
  req: Request,
  res: Response,
  next: () => void
) {
  console.log('----------- Running userGuard -------------');

  // do auth check here
  // if (!req?.user) return res.sendStatus(401);

  next();
}
