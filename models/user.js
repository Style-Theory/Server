'use strict';
module.exports = (sequelize, DataTypes) => {
  class User extends sequelize.Sequelize.Model{}
  User.init({
    name: DataTypes.STRING,
    password: DataTypes.STRING,
    email: DataTypes.STRING
  }, {
    sequelize
  });
  User.associate = function(models) {
    // associations can be defined here
    User.hasMany(models.Dress)
  };
  return User;
};