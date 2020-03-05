'use strict';
module.exports = (sequelize, DataTypes) => {
  const Dress = sequelize.define('Dress', {
    name: {
      type:DataTypes.STRING
    },
    price: {
      type:DataTypes.INTEGER
    },
    status: {
      type:DataTypes.BOOLEAN
    },
    due_date: {
      type:DataTypes.DATE
    },
    rent_id: {
      type:DataTypes.INTEGER
    },
    UserId: {
      type:DataTypes.INTEGER
    }
  }, {
    sequelize
  });
  Dress.associate = function(models) {
    Dress.belongsTo(models.User)
  };
  return Dress;
};