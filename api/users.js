import { db } from 'services/db';
export default {
    get: async (req, res) => {
        const users = await db.query.users.findMany();
        res.json(users);
    },
};
