module.exports = {
    route: '/:id',
    method: 'GET',
    handler: (req, res) => {
        const userId = req.params.id;
        console.log(`/users/${userId} hit!`);
        res.send(`user ${userId} would go here.`);
    },
};
