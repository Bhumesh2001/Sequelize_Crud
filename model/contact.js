const { Model, DataTypes } = require('sequelize');
const sequelize = require('./index')

class contact extends Model {}

contact.init({
  firstName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  lastName: {
    type: DataTypes.STRING
  }
}, {
    timestamps:false,
    sequelize,
    modelName: 'contact' 
});

console.log(contact === sequelize.models.contact); 

module.exports = contact