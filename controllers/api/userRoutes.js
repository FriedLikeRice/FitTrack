const router = require('express').Router();
const { User } = require('../../models');
const bcrypt = require('bcrypt');
const saltRounds = 20; // can change value

// Importing withAuth middleware 
const withAuth = require('../../middleware/authMiddleware');

// Signup route
router.post('/signup', async (req, res) => {
    try {
      const hashedPassword = await bcrypt.hash(req.body.password, saltRounds);
      
      const userData = await User.create({
        username: req.body.username,
        email: req.body.email,
        password: hashedPassword,
      });
  
      req.session.save(() => {
        req.session.loggedIn = true;
        req.session.userId = userData.id;
  
        res.status(200).json(userData);
      });
    } catch (err) {
      console.error('Error in user signup', err);
      res.status(500).json(err.message || 'Internal server error');
    }
});

// Login route
router.post('/login', async (req, res) => {
  try {
    const userData = await User.findOne({ where: { email: req.body.email } });

    if (!userData) {
      return res.status(400).json({ message: 'Incorrect email or password, please try again' });
    }

    const validPassword = await bcrypt.compare(req.body.password, userData.password);

    if (!validPassword) {
      return res.status(400).json({ message: 'Incorrect email or password, please try again' });
    }

    req.session.save(() => {
      req.session.userId = userData.id;
      req.session.loggedIn = true;
      
      res.json({ user: userData, message: 'You are now logged in!' });
    });

  } catch (err) {
    console.error('Error in bcrypt hashing:', err);
    res.status(500).json(err.message || 'Internal server error');
  }
});

// Logout route
router.post('/logout', (req, res) => {
  if (req.session.loggedIn) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

module.exports = router;