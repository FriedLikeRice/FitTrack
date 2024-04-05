const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// Supplement Model
class Supplement extends Model {}

Supplement.init(
  {
    supplement_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    serving_size: {
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
