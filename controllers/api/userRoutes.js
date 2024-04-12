const router = require('express').Router();
const { User } = require('../../models');
const bcrypt = require('bcrypt');
const saltRounds = 20; // can change value

// Importing withAuth middleware 
const withAuth = require('../../middleware/authMiddleware');

// user route 
router.get('/user', async (req, res) => {
  if(req.session.loggedIn) {
    try {
      const userData = await User.findByPk(req.session.userId);
      if (userData) {
        // Assuming 'userProfile' is a view/template that expects 'userData' object
        res.render('userProfile', { userData: userData.get({ plain: true }) });
      } else {
        // Handle case where user data is not found
        res.status(404).send('User not found');
      }
    } catch (err) {
      console.error(err);
      res.status(500).send('Error retrieving user data');
    }
  } else {
    // If not logged in
    res.redirect('/login');
  }
});

// Signup route
router.post('/signup', async (req, res) => {
    try {
      const hashedPassword = await bcrypt.hash(req.body.password);
      
      const userData = await User.create({
        username: req.body.username,
        email: req.body.email,
        password: hashedPassword,
      });
  
      req.session.save(() => {
        req.session.loggedIn = true;
        req.session.userId = userData.id;
        
        // might need to update line 43
        res.status(200).json(userData);
      });
    } catch (err) {
      console.error('Error in bcrypt hashing:', err);
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