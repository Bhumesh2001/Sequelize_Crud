const { DataTypes } = require('sequelize');
const sequelize = require('./index')

const User = sequelize.define('Users', {
  firstName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  lastName: {
    type: DataTypes.STRING
  } 
}, {
    timestamps:false,
    tablename:'Users'
});

console.log(User === User);

module.exports = User

