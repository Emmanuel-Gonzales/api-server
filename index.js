'use strict';

require('dotenv').config();
const { start } = require('./src/server');
const PORT = process.env.PORT;
const { sequelizeDatabase } = require('./src/models');

// SYNC
sequelizeDatabase.sync()
  .then(() => {
    console.log('Successfull Conection');
  })
  .catch(error => console.error(error));
  
  
start(PORT);