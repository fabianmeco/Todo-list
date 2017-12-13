const express = require('express');
const app = express();
const body = require('body-parser');
const cors = require('cors');

const routes = require('./routes');

app.listen(3000,  function(){console.log('App listening on 3000')})

app.use(body.urlencoded({extended:false}));

app.use(body.json());

app.use(cors());

app.use('/', routes);

module.exports = app;