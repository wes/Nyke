export default {
    get: async (req, res) => {
        console.log('----------- Running api/index.ts -------------');
        res.send('Hello World!');
    },
};
