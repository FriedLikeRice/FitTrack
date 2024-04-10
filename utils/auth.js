const withAuth = (req, res, next) => {
  // Check if the user is logged in
  if (!req.session.userId) {
      // If not logged in, redirect to the login page
      res.redirect('/login');
  } else {
      // If logged in, allow the request to proceed
      next();
  }
};

module.exports = withAuth;