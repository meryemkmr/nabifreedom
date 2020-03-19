'use strict';
module.exports = (sequelize, DataTypes) => {
  const contact = sequelize.define('contact', {
    contactName: DataTypes.STRING,
    contactEmail: DataTypes.STRING,
    contactPhone: DataTypes.STRING,
    contactMsg: DataTypes.STRING,
    responded: DataTypes.BOOLEAN
  }, {freezeTableName: true});
  contact.associate = function(models) {
    // associations can be defined here
    // contact.belongsTo(models.user, {foreignKey: 'email'});
  };
  return contact;
};