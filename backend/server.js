const express = require('express');
const server = express();
const port = 3000;
const indexRouter = require('./routes/index');
const apiRouter = require('./routes/api');

server.use('/api',apiRouter);
server.use('/', indexRouter);

server.listen(port, () =>{
    console.log('Express server has start!');
    console.log('http://localhost:3000');
})