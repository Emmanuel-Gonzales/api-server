'use strict';

module.exports = (sequelizeDatabase, DataTypes) =>{
  return sequelizeDatabase.define('restaurant', {
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
      values: ['fast', 'fancy', 'dinner'],
    },
  });
};