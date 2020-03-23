const Sequelize = require('sequelize');
const Friend = require('./Friend')
const db = require('../db');

const User = db.define('user', {
  // id: {
  //   type: Sequelize.UUID,
  //   defaultValue: Sequelize.UUIDV4, // Generates a UUID V4
  //   primaryKey: true
  // },
  username: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true
  },
  email: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false
  },
  imageURL: {
    type: Sequelize.STRING,
    defaultValue: ''
    // https://favpng.com/png_view/booth-vector-selfie-social-media-celebrity-png/PSp4WHDX
  },
  bio: {
    type: Sequelize.TEXT,
    validate: {
      len: [0, 150]
    }
  },
  phone: {
    type: Sequelize.STRING
  },
  pushNotifs: {
    type: Sequelize.BOOLEAN,
    defaultValue: true
  }
});

User.prototype.getFriends = function(){
  const myFriends = Friend.findFriends(this.id);
  console.log('my friends!', myFriends);
}

module.exports = User;
