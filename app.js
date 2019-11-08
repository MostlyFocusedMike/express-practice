const path = require('path');
const express = require('express');
// const indexRouter = require('./routes/index');
// const usersRouter = require('./routes/users');

// run the app by listening to port
// pick a port
const app = express();
const port = process.env.PORT || 4321;

// set up static files router
const options = {
    setHeaders: (res, path, stat) => { // eslint-disable-line no-shadow
        res.set('x-timestamp', Date.now());
        res.set('just-a-test', 'hello-there');
        res.set('path', path);
    },
};

const staticFiles = express.static(path.join(__dirname, 'public'), options);
app.use(staticFiles);

app.get('/example', (req, res) => {
    console.log('Hit the example route!');
    res.send({ msg: 'hello world in json now' });
});

// "start" the app by listening on a port
app.listen(port, '0.0.0.0', () => {
    console.log(`Example app listening on port ${port}!`);
});
