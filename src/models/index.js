'use strict';

require('dotenv').config();
const { Sequelize, DataTypes } = require('sequelize');
const food = require('./food');
const restaurant = require('./restaurant');

const DATABASE_URL = process.env.DATABASE_URL;

const sequelizeDatabase = new Sequelize(DATABASE_URL);

const foodModel = food(sequelizeDatabase, DataTypes);

const restaurantModel = restaurant(sequelizeDatabase, DataTypes);


module.exports = {
  sequelizeDatabase,
  foodModel,
  restaurantModel,
};