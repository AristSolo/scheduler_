'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Tasks extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Tasks.belongsTo(models.Projects,{
        foreignKey: 'projectId', as: 'project',
      })
    }
  };
  Tasks.init({
    category: {
      type:DataTypes.STRING,
    },
    name: {
      type: DataTypes.STRING,
    },
    description: {
      type: DataTypes.STRING,
    },
    date: {
      type: DataTypes.DATE,
    },
    status: {
      type: DataTypes.STRING,
    },
    projectId: {
      type: DataTypes.INTEGER
    }
  }, {
    sequelize,
    modelName: 'Tasks',
  });
  return Tasks;
};