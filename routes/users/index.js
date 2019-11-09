const express = require('express');
const routeBuilder = require('../routeBuilder');

const usersRouter = express.Router();

const baseRoute = '/users';

const routeObjects = [
    require('./list'),
    require('./get'),
];

routeBuilder(usersRouter, routeObjects, baseRoute);

module.exports = {
    baseRoute,
    router: usersRouter,
};
