'use strict';

const express = require('express');
const cors = require('cors');

// ***** MIDDLEWARE *****
const app = express();
app.use(cors());
app.use(express.json());


app.get('/', (req, res, next) => {
  res.status(200).send('Hola World');
});





const start = (port) => app.listen(port, () => console.log('server now running on:', port));

module.exports = {start, app};