'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
 
      await queryInterface.bulkInsert('Users', [{
        firstName:'John',
        lastName:'Doe',
        email:'demo@demo.com',
        createdAt:new Date(),
        updatedAt:new Date()
      }], {});
   
  },

  down: async (queryInterface, Sequelize) => {
    
      await queryInterface.bulkDelete('Users', null, {});
     
  }
};