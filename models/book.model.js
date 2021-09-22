const Sequelize = require("sequelize");
const sequelize = require('../database/connection');
exports.Book = sequelize.define("Book",{
    
    title:{
        type:Sequelize.STRING(200),
        allowNull:false
    },
    price:{
        type:Sequelize.DECIMAL(2),
        allowNull:false
    },
    author:{
        type:Sequelize.STRING(50),
        allowNull:false
    }

})

