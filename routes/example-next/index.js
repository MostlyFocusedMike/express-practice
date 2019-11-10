/**
 * This file is to show that you can have multiple handlers per route that
 * get called in succession, you can also arrange them in an array
 *
 */
const express = require('express');

const router = express.Router();

// since there are no other routes, we can use a simpler structure
router.get(
    '/',
    (req, res, next) => {
        console.log('the client response will be sent by the next function');
        console.log('this function just makes a log');
        next();
    },
    (req, res, next) => {
        res.send('Hello client,\n\t- from Second Function!');
        next();
    },
    (req, res, next) => {
        console.log('You can only send one response, but you can use next');
        console.log('To get to other stuff like logging');
        next();
    },
);

module.exports = router;
