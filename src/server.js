'use strict';

const express = require('express');
const cors = require('cors');
const foodRouter = require('./routes/food');
const restaurantRouter = require('./routes/restaurants');

const notFound = require('./error-handlers/404');
const serverError = require('./error-handlers/500');

// ***** MIDDLEWARE *****
const app = express();
app.use(cors());
app.use(express.json());


app.get('/', (req, res, next) => {
  res.status(200).send('Hola World');
});
app.use(foodRouter);
app.use(restaurantRouter);

app.use('*', notFound);
app.use(serverError);


const start = (port) => app.listen(port, () => console.log('server now running on:', port));

module.exports = {start, app};