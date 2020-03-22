'use strict';
module.exports = (sequelize, DataTypes) => {
  const users = sequelize.define('users', {
    fName: DataTypes.STRING,
    lName: DataTypes.STRING,
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    password: DataTypes.STRING,
  }, {freezeTableName: true});
  users.associate = function(models) {
    // associations can be defined here
  };
  return users;
};



//Original Users Table
// 'use strict';
// module.exports = (sequelize, DataTypes) => {
//   const user = sequelize.define('user', {
//     fName: DataTypes.STRING,
//     lName: DataTypes.STRING,
//     email: DataTypes.STRING,
//     username: DataTypes.STRING,
//     password: DataTypes.STRING,
//     imgURL: DataTypes.STRING,
//     bio: DataTypes.STRING
//   }, {});
//   user.associate = function(models) {
//     // associations can be defined here
//   };
//   return user;
// };