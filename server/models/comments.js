/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('comments', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    answerId: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    uId: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    agreeNum: {
      type: DataTypes.INTEGER(11),
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
    tableName: 'comments'
  });
};
