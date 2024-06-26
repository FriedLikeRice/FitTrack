const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
// Added bcrypt import to this file
const bcrypt = require('bcrypt'); 
class User extends Model {
    // checks if input Pw matches stored/created Pw
    checkPassword(loginPw) {
        return bcrypt.compareSync(loginPw, this.password);
    }
}

// User Model
User.init(
  {
    username: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [6, 20], 
      },
    }
  },
  {
    // for new users to be created/added onto db / or update their info onto db
    hooks: {
      beforeCreate: async (newUserData) => {
        newUserData.password = await bcrypt.hash(newUserData.password, 10);
        return newUserData;
      },
      beforeUpdate: async (updatedUserData) => {
        updatedUserData.password = await bcrypt.hash(updatedUserData.password, 10);
        return updatedUserData;
      },
    },
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'user',
  }
);

module.exports = User;
