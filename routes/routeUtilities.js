/**
 * Add all routes to router at once
 *
 * @param {object} router - express router to add routes
 * @param {array} routeFunctions - array of functions that add a route to given router
 */
const routeBuilder = (router, routerFunctions) => {
    routerFunctions.forEach(routeMaker => routeMaker(router));
};

/**
 * Register all routers on an app at once
 * @param {object} app - express app
 * @param {array} routers - all routers to register on the app shape: {baseRoute, router}
 */
const registerRouters = (app, routers) => {
    routers.forEach(({ baseRoute, router }) => {
        app.use(baseRoute, router);
    });
};

module.exports = {
    routeBuilder,
    registerRouters,
};
