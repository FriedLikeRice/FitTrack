const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// Supplement Model class
class Supplement extends Model {}

// Supplement model 
Supplement.init(
  {
    // go over this again
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
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
