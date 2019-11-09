const express = require('express');

const router = express.Router();
const baseUrl = '/users';

// middleware must be registered BEFORE routes
router.use((req, res, next) => {
    console.log('Time: ', Date.now());
    next();
});

const routes = [
    require('./list'),
    require('./get'),
];

routes.forEach(route => route(router));

module.exports = {
    baseUrl,
    router,
};
