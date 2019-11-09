const express = require('express');

const usersRouter = express.Router();

const routerName = '/users';

const routeBuilder = (router, routeObjects, baseRoute) => {
    routeObjects.forEach(({ method, route, handler }) => {
        if (/GET/i.test(method)) {
            router.get(route, handler);
        } else if (/POST/i.test(method)) {
            router.post(route, handler);
        } else if (/PUT/i.test(method)) {
            router.put(route, handler);
        } else if (/DELETE/i.test(method)) {
            router.delete(route, handler);
        } else {
            throw new Error(`No method specified for  /${baseRoute}${route}`);
        }
    });
};

const routeObjects = [
    require('./list'),
    require('./get'),
];

routeBuilder(usersRouter, routeObjects, routerName);


module.exports = {
    routerName,
    router: usersRouter,
};
