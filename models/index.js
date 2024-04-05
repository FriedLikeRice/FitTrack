const User = require('./user');
const Workout = require('./workout');
const Supplement = require('./supp'); // Import the Supplement model

User.hasMany(Workout, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Workout.belongsTo(User, {
  foreignKey: 'user_id'
});

User.hasMany(Supplement, { // association b/w User and Supplement
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Supplement.belongsTo(User, { // association b/w Supplement and User
  foreignKey: 'user_id'
});

module.exports = { User, Workout, Supplement }; // Export models
