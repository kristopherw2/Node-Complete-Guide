const path = require('path');

const express = require('express');

const indexRouter = express.Router();
const rootDir = require('../util/path');

indexRouter.get('/', (req, res, next) => {
  res.sendFile(path.join(rootDir, 'views', 'index.html'));
});

module.exports = indexRouter