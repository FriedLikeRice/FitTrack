const router = require('express').Router();
const { Workout } = require('../../models');
const withAuth = require('../../utils/auth');

// Route for creating a new workout
router.post('/workouts', withAuth, async (req, res) => {
  try {
    const newWorkout = await Workout.create({
      ...req.body,
      user_id: req.session.user_id,
    });

    res.status(200).json(newWorkout);
  } catch (err) {
    res.status(400).json(err);
  }
});

// Route for fetching all workouts
router.get('/workouts', withAuth, async (req, res) => {
  try {
    const workouts = await Workout.findAll({
      where: {
        user_id: req.session.user_id,
      },
    });

    res.status(200).json(workouts);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Route for deleting a workout
router.delete('/workouts/:id', withAuth, async (req, res) => {
  try {
    const workoutData = await Workout.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    if (!workoutData) {
      res.status(404).json({ message: 'No workout found with this ID!' });
      return;
    }

    res.status(200).json(workoutData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
