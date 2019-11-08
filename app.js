// const path = require('path');
const express = require('express');
// const indexRouter = require('./routes/index');
// const usersRouter = require('./routes/users');

// run the app by listening to port
// pick a port
const app = express();
const port = process.env.PORT || 4321;

// Set up routes
// app.use('/', indexRouter);
// app.use('/users', usersRouter);


// view engine setup
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'express-handlebars');

// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));
// app.use(cookieParser());
// app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    console.log('Hit the home route!');
    res.send({ msg: 'hello world' });
});

// "start" the app by listening on a port
app.listen(port, '0.0.0.0', () => {
    console.log(`Example app listening on port ${port}!`);
});
