const router = require('express').Router();

// how we make our routes modular
const userRoutes = require('./userRoutes');
const workoutRoutes = require('./workoutRoutes');
const supplementRoutes = require('./supplementRoutes');

// When a request is made to the /users or /projects path, it will be directed to the index.js in the /users or /projects folder.
router.use('/users', userRoutes);
router.use('/workouts', workoutRoutes);
router.use('/supplements', supplementRoutes);

module.exports = router;
