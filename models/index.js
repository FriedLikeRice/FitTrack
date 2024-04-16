const User = require('./user');
const Workout = require('./workout');
const Supplement = require('./supp'); 

User.hasMany(Workout, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

User.hasMany(Supplement, { 
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Workout.belongsTo(User, {
  foreignKey: 'user_id'
});

Supplement.belongsTo(User, { 
  foreignKey: 'user_id'
});

// Export models
module.exports = { User, Workout, Supplement }; 
