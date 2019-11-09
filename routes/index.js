/**
 * Add all each router and their routes to an app at once
 * @param {object} app - an Express app
 */
const addAllRoutes = (app) => {
    const routers = [
        require('./users'),
        require('./example-next'),
    ];

    routers.forEach(({ baseUrl, router }) => { app.use(baseUrl, router); });
};

module.exports = addAllRoutes;
