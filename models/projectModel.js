

const { DataTypes } = require('sequelize');
const { sequelize } = require('./index');

const Product = (sequelize, Sequelize) => {
    const Product = sequelize.define('Product', {
        title: {
            type: DataTypes.STRING,
        },
        price: {
            type: DataTypes.INTEGER
        },
        description: {
            type: DataTypes.STRING
        },
        published: {
            type: DataTypes.BOOLEAN
        }
    });
    return Product;
};



module.exports = Product;
