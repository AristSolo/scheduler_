'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Projects extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Projects.hasMany(models.Tasks,{
        foreignKey: "projectId", as: "Project"
      })
    }
  };
  Projects.init({
    name:{
      type: DataTypes.STRING,
      unique: true
    },
    description: {
      type: DataTypes.STRING,
    },
    purpose: {
      type: DataTypes.STRING
    }
  }, {
    sequelize,
    modelName: 'Projects',
  });
  return Projects;
};