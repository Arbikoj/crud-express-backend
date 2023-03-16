import { Sequelize } from "sequelize";

import db from "../../../config/Database.js";

const {DataTypes} = Sequelize;
 
const UsersLogin = db.define('users-login',{
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
    email:{
        type: DataTypes.STRING,
        allowNull: false,
        validate:{
            notEmty:true,
            isEmail:true
        }
    },
    password:{
        type: DataTypes.STRING,
        allowNull: false,
        validate:{
            notEmty:true,
        }
    },
    role:{
        type: DataTypes.STRING,
        allowNull: false,
        validate:{
            notEmty:true,
        }
    }
},{
    freezeTableName: true
});

export default UsersLogin;