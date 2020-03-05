'use strict';
module.exports = (sequelize, DataTypes) => {
  class User extends sequelize.Sequelize.Model{}
  User.init({
    name: {
      type:DataTypes.STRING,
      allowNull:false
    },
    password: {
      type:DataTypes.STRING,
      allowNull:true
    },
    email: {
      type:DataTypes.STRING,
      allowNull:true
    }
  }, {
    sequelize
  });
  User.associate = function(models) {
    // associations can be defined here
    User.hasMany(models.Dress)
  };
  return User;
};