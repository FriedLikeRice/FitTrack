const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// Supplement Model
class Supplement extends Model {}

Supplement.init(
  {
    supplement: {
      type: DataTypes.STRING,
      allowNull: false
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false
    },
    intake: {
      type: DataTypes.STRING,
      allowNull: false
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'User',
        key: 'id'
      }
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'supplement'
  }
);

module.exports = Supplement;
