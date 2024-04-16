const router = require('express').Router();
const { User } = require('../../models'); 

// POST /api/user/signup
router.post('/signup', async (req, res) => {
  try {
    // Create a new user in the database
    const userData = await User.create({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
    });

    // Optionally, you can hash the password before saving it to the database

    // Save the user ID in the session
    req.session.save(() => {
      req.session.userId = userData.id;
      req.session.loggedIn = true;
      res.status(200).json({ user: userData, message: 'User created successfully' });
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Failed to create user' });
  }
});

module.exports = router;
