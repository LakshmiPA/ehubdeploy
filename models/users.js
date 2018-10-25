'use strict';
module.exports = (sequelize, DataTypes) => {
  const users = sequelize.define('users', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    email: { type: DataTypes.STRING, allowNull: false },
    password: { type: DataTypes.STRING, allowNull: true, defaultValue: null },
    createdAt:{type:DataTypes.DATE, field:'createdAt'},
    updatedAt:{type:DataTypes.DATE, field:'updatedAt'},
  },{ 
      tableName: 'users',  
      createdAt:'createdAt',
      updatedAt:'updatedAt',
      timestamps: true,
      freezeTableName: true
  });
  users.associate = function(models) {
    // associations can be defined here
  };
  return users;
};