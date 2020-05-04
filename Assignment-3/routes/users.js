const path = require('path');

const express = require('express');

const usersRouter = express.Router();
const rootDir = require('../util/path')


usersRouter.get('/users', (req, res, next) => {
  res.sendFile(path.join(rootDir, 'views', 'users.html'))
});

module.exports = usersRouter