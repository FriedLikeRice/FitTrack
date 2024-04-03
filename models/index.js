const User = require('./user');
const Workout = require('./workout');

User.hasMany(Workout, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Workout.belongsTo(User, {
  foreignKey: 'user_id'
});

module.exports = { User, Workout };
