const router = require('express').Router();
// Import the routes. This is how we make our routes modular.
const userRoutes = require('./userRoutes');
const workoutRoutes = require('./workoutRoutes');
const supplementRoutes = require('./supplementRoutes');

// When a request is made to the /users or /projects path, it will be directed to the index.js in the /users or /projects folder.
router.use('/', userRoutes);
router.use('/', workoutRoutes);
router.use('/', supplementRoutes);

module.exports = router;
