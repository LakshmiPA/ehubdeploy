'use strict';
module.exports = (sequelize, DataTypes) => {
  const categories = sequelize.define('categories', {
    category_id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    category_name: { type: DataTypes.STRING, allowNull: true },
    createdAt:{type:DataTypes.DATE, field:'createdAt'},
    updatedAt:{type:DataTypes.DATE, field:'updatedAt'},
  },{ 
      tableName: 'categories',  
      createdAt:'createdAt',
      updatedAt:'updatedAt',
      timestamps: true,
      freezeTableName: true
  });
  categories.associate = function(models) {
    // associations can be defined here
  };
  return categories;
};