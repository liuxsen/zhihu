/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('questions', {
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
    con: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    uid: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    createAt: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    type: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: false
    }
  }, {
    tableName: 'questions'
  });
};
