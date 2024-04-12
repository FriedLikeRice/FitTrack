const withAuth = (req, res, next) => {
    // Check if the user is logged in
    if (!req.session.loggedin) {
      res.redirect('/login'); // Redirect to login page if not logged in
    } else {
      next(); // Proceed to route handler
    }
  };
  
  module.exports = withAuth;
  