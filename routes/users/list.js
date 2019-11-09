module.exports = (router) => {
    router.get('/', (req, res) => {
        console.log('/users hit!');
        res.send([{ msg: 'users would list out here' }]);
    });
};
