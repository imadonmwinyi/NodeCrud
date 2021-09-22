const Sequelize = require('sequelize');

sequelize.define('User',{
    id:{
        type:Sequelize.INTEGER(11),
        allowNull:false,
        autoIncrement:true,
        primaryKey:true,
    },
    email:{
        type:Sequelize.STRING(100),
        allowNull:false,
        unique:true
    },
    firstName:{
        type:Sequelize.STRING(100),
        allowNull:false,
    },
    lastName:{
        type:Sequelize.STRING(100),
        allowNull:false,
    },
    password:{
        type:Sequelize.STRING(50),
        allowNull:false
    }
})