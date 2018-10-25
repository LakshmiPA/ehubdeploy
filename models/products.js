'use strict';
module.exports = (sequelize, DataTypes) => {
  const products = sequelize.define('products', {
    product_id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    product_name: { type: DataTypes.STRING, allowNull: true },
    price: { type: DataTypes.FLOAT, allowNull: true },
    unit: { type: DataTypes.INTEGER, allowNull: true },
    belongs_to_category: { type: DataTypes.INTEGER, allowNull: true },
    belongs_to_vendor: { type: DataTypes.INTEGER, allowNull: true },
    createdAt:{type:DataTypes.DATE, field:'createdAt'},
    updatedAt:{type:DataTypes.DATE, field:'updatedAt'},
  },{ 
      tableName: 'products',  
      createdAt:'createdAt',
      updatedAt:'updatedAt',
      timestamps: true,
      freezeTableName: true
  });
  products.associate = function(models) {
    // associations can be defined here
    models.products.belongsTo(models.vendor_details,{foreignKey:'belongs_to_vendor',targetKey:'vendor_id'})

  };
  return products;
};