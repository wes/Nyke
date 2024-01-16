import type { IncomingMessage, ServerResponse } from 'node:http';

export default {
  get: async (req: IncomingMessage, res: ServerResponse) => {
    res.end('Super secret app! ');
  },
};
