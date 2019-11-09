const express = require('express');
const { routeBuilder } = require('../routeUtilities');

const routerData = { baseRoute: '/users', router: express.Router() };

routeBuilder(
    routerData.router,
    [
        require('./list'),
        require('./get'),
    ],
);

module.exports = routerData;
