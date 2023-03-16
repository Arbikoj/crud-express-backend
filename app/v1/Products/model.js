import { Sequelize } from "sequelize";

import db from "../../../config/Database.js";

import UsersLogin, {  } from "../Users/model.js";
const {DataTypes} = Sequelize;
 
const Products = db.define('products',{
    uuid:{
        type: DataTypes.STRING,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        validate:{
            notEmty:true
        }
    },
    name:{
        type: DataTypes.STRING,
        allowNull: false,
        validate:{
            notEmty:true,
            len: [3, 100]
        }
    },
    price:{
        type: DataTypes.INTEGER,
        allowNull: false,
        validate:{
            notEmty:true,
        }
    },
    userID:{
        type: DataTypes.INTEGER,
        allowNull: false,
        validate:{
            notEmty:true,
        }
    }
},{
    freezeTableName: true
});


// relasi one to many
// 1 user dapat input banyak product
UsersLogin.hasMany(Products);
Products.belongsTo(UsersLogin, {foreignKey:'userID'});
export default Products;