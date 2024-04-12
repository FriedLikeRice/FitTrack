const router = require('express').Router();
const { User } = require('../../models'); // Check the path to your models file

router.post('/signup', async (req, res) => {
    try {
      const userData = await User.create({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
      });
  
      // Optionally, you can hash the password before saving it to the database
  
      req.session.save(() => {
        req.session.loggedIn = true;
        req.session.userId = userData.id; // Update to userId for consistency
  
        res.status(200).json(userData);
      });
    } catch (err) {
      console.error(err);
      res.status(500).json(err.message || 'Internal server error');
    }
});

router.post('/login', async (req, res) => {
  try {
    const userData = await User.findOne({ where: { email: req.body.email } });

    if (!userData) {
      return res.status(400).json({ message: 'Incorrect email or password, please try again' });
    }

    const validPassword = await userData.checkPassword(req.body.password);

    if (!validPassword) {
      return res.status(400).json({ message: 'Incorrect email or password, please try again' });
    }

    req.session.save(() => {
      req.session.userId = userData.id;
      req.session.loggedIn = true;
      
      res.json({ user: userData, message: 'You are now logged in!' });
    });

  } catch (err) {
    console.error(err);
    res.status(500).json(err.message || 'Internal server error');
  }
});

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
