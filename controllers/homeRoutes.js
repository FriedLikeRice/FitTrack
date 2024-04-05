const router = require('express').Router();
const { Workout, Supplement } = require('../models'); 
const withAuth = require('../middleware/authMiddleware'); 

// Route for the homepage
router.get('/', async (req, res) => {
  try {
    // Retrieve workout and supplement data
    const workouts = await Workout.findAll();
    const supplements = await Supplement.findAll();

    // Render the homepage template with data
    res.render('homepage', { 
      workouts, 
      supplements,
      logged_in: req.session.logged_in 
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// Route for viewing individual workout or supplement 
// edit this if needed
router.get('/workout/:id', async (req, res) => {
  try {
    const workout = await Workout.findByPk(req.params.id);
    if (!workout) {
      res.status(404).json({ message: 'Workout not found' });
      return;
    }
    res.render('workout', { workout, logged_in: req.session.logged_in });
  } catch (err) {
    res.status(500).json(err);
  }
});

// Route for user profile page (requires authentication)
// uses middleware folder
router.get('/profile', withAuth, async (req, res) => {
  try {
    // Fetch user data based on session ID
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ['password'] },
      // Include any associations needed for the profile page (e.g., projects)
      include: [/* Include relevant associations */],
    });
    if (!userData) {
      res.status(404).json({ message: 'User not found' });
      return;
    }
    const user = userData.get({ plain: true });
    res.render('profile', { user, logged_in: true });
  } catch (err) {
    res.status(500).json(err);
  }
});

// Route for rendering login page
router.get('/login', (req, res) => {
  if (req.session.logged_in) {
    res.redirect('/profile');
    return;
  }
  res.render('login');
});

module.exports = router;
