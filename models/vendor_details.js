'use strict';
module.exports = (sequelize, DataTypes) => {
  const vendor_details = sequelize.define('vendor_details', {
    vendor_id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    user_name: { type: DataTypes.STRING, allowNull: true },
    email: { type: DataTypes.STRING, allowNull: true },
    phone_number: { type: DataTypes.INTEGER, allowNull: true },
    address: { type: DataTypes.TEXT, allowNull: true },
    user_type: { type: DataTypes.STRING, allowNull: true },
    selected_category: { type: DataTypes.INTEGER, allowNull: true },
    selected_product: { type: DataTypes.INTEGER, allowNull: true },
    createdAt:{type:DataTypes.DATE, field:'createdAt'},
    updatedAt:{type:DataTypes.DATE, field:'updatedAt'},
  },{ 
      tableName: 'vendor_details',  
      createdAt:'createdAt',
      updatedAt:'updatedAt',
      timestamps: true,
      freezeTableName: true
  });
  vendor_details.associate = function(models) {
    // associations can be defined here
  };
  return vendor_details;
};