'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("Books", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
    },
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
    },
    createdAt:Sequelize.DATE,
    updatedAt:Sequelize.DATE
    })
  },

  down: async (queryInterface, Sequelize) => {
    
      await queryInterface.dropTable('Books');
     
  }
};
