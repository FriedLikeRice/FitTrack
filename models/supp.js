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
    dose: {
      type: DataTypes.STRING,
      allowNull: false
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'user', // Change 'User' to 'user'
        key: 'id'
      }
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'Supplement' // Change to 'Supplement' for consistency
  }
);

module.exports = Supplement;
