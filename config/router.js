// CREATING EXPRESS ROUTER CONNECTION
const router = require('express').Router();
const songs = require('../controllers/popups');
const registrations = require('../controllers/registrations');
const sessions = require('../controllers/sessions');
const secureRoute = require('../lib/secureRoute');

// SETTING HOMEPAGE ROUTING
router.get('/', (req, res) => res.render('pages/home'));

// NEW RESTFUL
router.get('/music/new', secureRoute, songs.new);

// INDEX AND CREATE RESTFUL
router.route('/music')
  .get(songs.index)
  .post(songs.create);

// SHOW, UPDATE AND DELETE RESTFUL
router.route('/music/:id')
  .get(songs.show)
  .put(secureRoute, songs.update)
  .delete(secureRoute, songs.delete);

// EDIT RESTFUL
router.get('/music/:id/edit', secureRoute, songs.edit);

// REGISTRATION NEW AND CREATE
router.route('/register')
  .get(registrations.new)
  .post(registrations.create);

// SESSIONS NEW AND CREATE
router.route('/login')
  .get(sessions.new)
  .post(sessions.create);

// SESSIONS LOGOUT
router.get('/logout', sessions.delete);


// GLOBAL 404 ROUTER
router.all('/*', (req, res) => res.render('pages/404'));

module.exports = router;


// KEEPING THIS OLDER UNFACTORED LAYOUTS FOR REFERENCE
// SETTING HOMEPAGE ROUTING
// router.get('/', (req, res) => res.render('pages/home'));
//
// // INDEX RESTFUL
// router.get('/music', songs.index);
//
// // NEW RESTFUL
// router.get('/music/new', secureRoute, songs.new);
//
// // CREATE RESTFUL
// router.post('/music', songs.create);
//
// // SHOW RESTFUL
// router.get('/music/:id', songs.show);
//
// // EDIT RESTFUL
// router.get('/music/:id/edit', secureRoute, songs.edit);
//
// // REGISTRATION NEW
// router.get('/register', registrations.new);
//
// // REGISTRATION CREATE
// router.post('/register', secureRoute, registrations.create);
//
// // SESSIONS NEW
// router.get('/login', sessions.new);
//
// // SESSIONS LOGOUT
// router.get('/login', sessions.delete);
//
// // SESSIONS CREATE
// router.post('/login', sessions.create);
//
// // UPDATE RESTFUL
// router.put('/music/:id', secureRoute, songs.update);
//
// // DELETE RESTFUL
// router.delete('/music/:id', songs.delete);
