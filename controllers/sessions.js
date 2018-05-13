const User = require('../models/user');


function newRoute(req, res) {
  res.render('sessions/new');
}

// LOGIN AUTHENTICATION
// Pull email address from database
function createRoute(req, res, next) {
  User.findOne({ email: req.body.email })
    .then(user => {
      if (!user || !user.validatePassword(req.body.password)) {
        return res.redirect('/login');
      }

      // now cookies is setup, write this
      // store the logged in users ID into the session cookie
      req.session.userId = user._id;
      req.flash('success, animated bouce', `Welcome back good lookin' ${user.username}`);
      res.redirect('/popuplisting');
    })
    .catch(next);
}

// LOGOUT FUNCTION
// Regenerates session cookie
function deleteRoute(req, res) {
  req.session.regenerate(() => res.redirect('/'));
}


module.exports = {
  new: newRoute,
  create: createRoute,
  delete: deleteRoute
};
