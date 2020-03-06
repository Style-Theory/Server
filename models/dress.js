'use strict';
module.exports = (sequelize, DataTypes) => {
  class Dress extends sequelize.Sequelize.Model{}
  Dress.init({
    name: {
      type : DataTypes.STRING,
      allowNull : false,
      validate : {
        len : {
          args : [6],
          msg : 'length cant be less than 6'
        },
        notEmpty : {
          args: true,
          msg : `Name Can't Be Empty`
        }
      }
    },
    price: {
      type : DataTypes.INTEGER,
      allowNull : false,
      validate : {
        isInt : {
          args : true,
          msg : "Only Numbber Allowed"
        },
        notEmpty : {
          args : true,
          msg : `Price Must Not Empty`
        }
      }
    },
    status: {
      type : DataTypes.BOOLEAN,
      allowNull : false
    },
    due_date: {
      type : DataTypes.DATE,
      validate : {
        isAfter : {
          args : new Date().toDateString(),
          msg : "Put The Right Date"
        }
      }
    },
    rent_id: DataTypes.INTEGER,
    UserId: {
      type : DataTypes.INTEGER,
      allowNull : false  
    }
  }, {
    sequelize
  });
  Dress.associate = function(models) {
    Dress.belongsTo(models.User)
  };
  return Dress;
};