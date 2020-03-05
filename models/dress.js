'use strict';
module.exports = (sequelize, DataTypes) => {
  class Dress extends sequelize.Sequelize.Model{}
  dress.init({
    name: DataTypes.STRING,
    price: DataTypes.INTEGER,
    status: DataTypes.BOOLEAN,
    due_date: DataTypes.DATE,
    rent_id: DataTypes.INTEGER,
    UserId: DataTypes.INTEGER
  }, {
    sequelize
  });
  dress.associate = function(models) {
    Dress.belongsTo(models.User)
  };
  return dress;
};