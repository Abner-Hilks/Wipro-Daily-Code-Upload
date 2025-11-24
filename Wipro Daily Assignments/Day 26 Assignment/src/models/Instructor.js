const { DataTypes } = require("sequelize");
const sequelize = require("../config/sequelize");

const Instructor = sequelize.define("Instructor", {
  name: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  timestamps: false  

});

module.exports = Instructor;
