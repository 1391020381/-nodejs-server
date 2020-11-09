'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class scheduleLock extends Model {
   
    static associate(models) {
      // define association here
    }
  };
  scheduleLock.init({
    name: DataTypes.STRING,
    counter: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'scheduleLock',
    tableName:'schedule_lock'
  });
  return scheduleLock;
};