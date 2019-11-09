const path = require('path');
const express = require('express');
const addAllRoutes = require('./routes');

const app = express();

// set up static files router
const options = {
    setHeaders: (res, path, stat) => { // eslint-disable-line no-shadow
        res.set('x-timestamp', Date.now());
        res.set('just-a-test', 'hello-there');
    },
};
const staticFiles = express.static(path.join(__dirname, 'public'), options);
app.use(staticFiles);

// homemade register all routers function
addAllRoutes(app);

// start the app by listening on a port
const port = process.env.PORT || 4321;
app.listen(port, '0.0.0.0', () => {
    console.log(`Example app listening on port 'http://localhost:${port}!`);
});
