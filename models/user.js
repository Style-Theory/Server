'use strict';
const Helper = require('../helpers/index')
module.exports = (sequelize, DataTypes) => {
  class User extends sequelize.Sequelize.Model{}
  User.init({
    name: {
      type:DataTypes.STRING,
      allowNull:false
    },
    password: {
      type:DataTypes.STRING,
      allowNull:false,
      isEmail:true,
      unique:true,
      validate:{
        len: {
          args: [6],
          message: 'Password minimal 6 characters'
        }
      }
    },
    email: {
      type:DataTypes.STRING,
      allowNull:false
    }
  }, {
    hooks:{
      beforeCreate: (user,options) => {
        user.password = Helper.encrypt(user.password)
      }
    },
    sequelize
  });
  User.associate = function(models) {
    // associations can be defined here
    User.hasMany(models.Dress)
  };
  return User;
};