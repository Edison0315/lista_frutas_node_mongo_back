const express = require('express')

const app = express();

app.use(require('./Product'))

module.exports = app;