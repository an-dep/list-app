const {Sequelize, DataTypes} = require('sequelize');
const sequelize = new Sequelize('sqlite:memory');

const Task = require('tasks',{
    id:{
      type: DataTypes.INTEGER,
    },
    title:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    description:{
        type: DataTypes.STRING,
    },
    is_completed:{
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
    }
});
module.exports = Task;