const { DataTypes } = require("sequelize");
const sequelize = require("../config/sequelize");

const Course = sequelize.define("Course", {
  title: {
    type: DataTypes.STRING,
    allowNull: false
  },
  duration: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  timestamps: false   
});

module.exports = Course;
