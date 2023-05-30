'use strict';

module.exports = (sequelizeDatabase, DataTypes) =>{
  return sequelizeDatabase.define('food', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    calories: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    group: {
      type: DataTypes.ENUM,
      values: ['fruit', 'vegie', 'meat', 'grains'],
      allowNull: false,
    },
  });
};