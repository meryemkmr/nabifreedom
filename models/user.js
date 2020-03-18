'use strict';
module.exports = (sequelize, DataTypes) => {
  const user = sequelize.define('user', {
    fName: DataTypes.STRING,
    lName: DataTypes.STRING,
    email: DataTypes.STRING,
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    imgURL: DataTypes.STRING,
    bio: DataTypes.STRING
  }, {});
  user.associate = function(models) {
    // associations can be defined here
  };
  return user;
};