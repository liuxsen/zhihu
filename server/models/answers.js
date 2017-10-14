/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('answers', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    agreeNum: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    trample: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    uId: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    questionId: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    createAt: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    con: {
      type: DataTypes.STRING(255),
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
    tableName: 'answers'
  });
};
