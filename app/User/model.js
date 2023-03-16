import { Sequelize } from "sequelize";

import db from "../../config/Database.js";

const {DataTypes} = Sequelize;


const User = db.define('users',{
    name: {
        type : DataTypes.STRING,
    },
    email: DataTypes.STRING,
    gender: DataTypes.STRING
},{
    freezeTableName:true,
});

export default User;


// generate table
(async()=>{
 await db.sync();   
})()