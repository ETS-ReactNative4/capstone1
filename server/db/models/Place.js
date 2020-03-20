const Sequelize = require('sequelize')
const db = require('../db')

const Place = db.define('place', {
  id: {
    type: Sequelize.UUID,
    defaultValue: Sequelize.UUIDV4, // Generates a UUID V4
    primaryKey: true
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true
  },
  //storing category as a string but it's a custom "array"
  category: {
    type: Sequelize.STRING,
    validate: {
      notEmpty: true
    },

    //see: https://stackoverflow.com/questions/41860792/how-can-i-have-a-datatype-of-array-in-mysql-sequelize-instance
    get: function(){
      return this.getDataValue('category').split(',')
    },
    set: function(){
      return this.setDataValue('category').join(',')
    }

  },
  location: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true
  },
  //priceratingaverage
  all_tags: {
    type: Sequelize.STRING,
    get: function(){
      return this.getDataValue('all_tags').split(',')
    },
    set: function(){
      return this.setDataValue('all_tags').join(',')
    }
  }
})

module.exports = Place;
