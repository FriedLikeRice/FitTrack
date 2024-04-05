const sequelize = require('../config/connection');
const { User, Workout, Supplement} = require('../models'); // double check all this

const userData = require('./userData.json');
const workoutData = require('./workoutData.json');
const supplementData = require('./supplementData.json');

// create the 2 files: workoutData.json & userData.json found in seeds folder 

const seedDatabase = async () => {
    await sequelize.sync({ force: true });
  
    const users = await User.bulkCreate(userData, {
      individualHooks: true,
      returning: true,
    });
  
    for (const workout of workoutData) {
      await Workout.create({
        ...workout,
        user_id: users[Math.floor(Math.random() * users.length)].id,
      });

      for (const supplement of supplementData) {
        await Supplement.create({
          ...supplement,
          user_id: users[Math.floor(Math.random() * users.length)].id,
        });
    }}
  
    process.exit(0);
  };
  
  seedDatabase();