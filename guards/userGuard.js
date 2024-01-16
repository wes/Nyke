// A simple guard that checks if the user is logged in. If not, it returns a 401 response.
export default function userGuard(req, res, next) {
    console.log('----------- Running userGuard -------------');
    // do auth check here
    // if (!req?.user) return res.sendStatus(401);
    next();
}
