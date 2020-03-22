'use strict';
module.exports = (sequelize, DataTypes) => {
  const peoples = sequelize.define('peoples', {
    imgURL: DataTypes.STRING,
    name: DataTypes.STRING,
    city: DataTypes.STRING,
    shortSummary: DataTypes.STRING,
    body: DataTypes.STRING
  }, {freezeTableName: true});
  peoples.associate = function(models) {
    // associations can be defined here
  };
  return peoples;
};