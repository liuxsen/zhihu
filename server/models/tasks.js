/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tasks', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    title: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    userId: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    deadline: {
      type: DataTypes.DATE,
      allowNull: true
    },
    flag: {
      type: DataTypes.INTEGER(1),
      allowNull: false,
      defaultValue: '1'
    },
    myDate: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    tableName: 'tasks'
  });
};
