const Sequelize = require('sequelize');
require('dotenv').config();

let sequelize;

if (process.env.JAWSDB_URL) {
  // For deployment on Heroku using JawsDB MySQL addon
  sequelize = new Sequelize(process.env.JAWSDB_URL);
} else {
  // For local development using MySQL database
  sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
      host: process.env.DB_HOST || 'localhost',
      dialect: 'mysql',
      port: process.env.DB_PORT || 3306
    }
  );
}

module.exports = sequelize;
