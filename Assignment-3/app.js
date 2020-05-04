const path = require('path');

const express = require('express');

const app = express();

const rootDir = require('./util/path')

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users')


app.use(express.static(path.join(rootDir, 'public',)))

app.use(indexRouter);
app.use(usersRouter);

app.listen(3000);
