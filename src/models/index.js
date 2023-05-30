'use strict';

require('dotenv').config();
const { Sequelize, DataTypes } = require('sequelize');
const food = require('./food');
const restaurant = require('./restaurant');
const Collection = require('./collection');

const DATABASE_URL = process.env.DATABASE_URL;

const sequelizeDatabase = new Sequelize(DATABASE_URL);

const foodModel = food(sequelizeDatabase, DataTypes);

const restaurantModel = restaurant(sequelizeDatabase, DataTypes);

restaurantModel.hasMany(foodModel,{
  foreignKey: 'resturantId',
  sourceKey: 'id',
});

foodModel.belongsTo(restaurantModel, {
  foreignKey: 'resturantId',
  sourceKey: 'id',
});

module.exports = {
  sequelizeDatabase,
  food: new Collection(foodModel),
  restaurant: new Collection(restaurantModel),
  restaurantModel,
};