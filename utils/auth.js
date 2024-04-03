const withAuth = (req, res, next) => {
    // If the user is not logged in, send a 401 Unauthorized response
    if (!req.session.logged_in) {
      res.status(401).json({ message: 'Unauthorized' });
    } else {
      next();
    }
  };
  
  module.exports = withAuth;
  