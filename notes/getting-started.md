- [Getting Started](#getting-started)
  - [The Most Basic App](#the-most-basic-app)
  - [`express` and `app`](#express-and-app)
  - [`app.get(path, callback(req, res, next))`](#appgetpath-callbackreq-res-next)
  - [`app.listen(port, [host] callback)`](#applistenport-host-callback)

# Getting Started
- Here is the starting example given from the docs, with some notes and further reading

## The Most Basic App
```js
const express = require('express');
const app = express();

// pick a port
const port = process.env.PORT || 4321;

app.get('/', (req, res) => {
    console.log('Hit the home route!');
    res.send('Hello World!');
    // res.send({ msg: 'hello world'}); // json payload
});

// "start" the app by listening on a port
app.listen(port, '0.0.0.0', () => {
    console.log(`Example app listening on port ${port}!`);
});
```

## `express` and `app`
- Requiring express returns a function that when called returns an express application, normally the application is called app for convention.

## `app.get(path, callback(req, res, next))`
[docs for `.get`](https://expressjs.com/en/5x/api.html#app.get.method)
- there are others for the http verbs `.get`, `.put`, `.patch`, `.post`, however these aren't usually used directly on the main app, and are instead used on something called a router. More later.
- the function takes three arguments, the request, the response, and the callback for middleware. Again, more on that later
- To actually send anything to the client, you can use `res.send` and a payload.

## `app.listen(port, [host] callback)`
[docs for `.listen`](https://expressjs.com/en/5x/api.html#app.listen)

- this binds our application to a port and listens to it. the host is optional, but given my history with docker, I'm just throwing this in here so I don't forget. The callback runs when the connection is established