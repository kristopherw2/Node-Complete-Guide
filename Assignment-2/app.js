const express = require('express');

const app = express();

app.use('/users', (req, res, next) => {
    console.log("Users page works!");
    res.send("<h1>This is the userspage</h1>");
});

app.use('/', (req, res, next) => {
  console.log("Homepage works!");
    res.send("<h1>This is the homepage</h1>");
});

app.listen(3000);