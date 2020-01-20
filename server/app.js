const express = require('express');
const bodyParser = require('body-parser');

const config = require('./config');
const routes = require('./controllers');
const TestMiddleware = require('./middlewares/testMiddleware');

const app = express();
const port = config.port || 5000;

TestMiddleware.signMiddleware(app);
app.use(bodyParser.json());
app.use('/api', routes);
app.use(express.static('../client/dist'));
  
module.exports = {
    app,
    port
};