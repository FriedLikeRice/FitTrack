const sequelize = require('../config/connection');
const { User, Workout } = require('../models'); // double check all this

const userData = require('./userData.json');
const fitnessData = require('./workoutData.json');

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
    }
  
    process.exit(0);
  };
  
  seedDatabase();