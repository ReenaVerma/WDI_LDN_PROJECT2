
const Popup = require('../models/popup');


// INDEX RESTUL
function indexRoute(req, res) {
  // use models/song to get data from database
  Popup.find()
    // pass data into views/music/index
    .then(popup => res.render('popuplisting/index', { popup: popup }));
}

// NEW RESTFUL
function newRoute (req, res) {
  res.render('popuplisting/new');
}

// CREATE RESTFUL
function createRoute(req, res, next) {
  console.log(req.body);
  Popup.create(req.body)
    .then(() => res.redirect('/popuplisting'))
    .catch(next);
}

// // SHOW RESTFUL
// function showRoute(req, res) {
//   Song.findById(req.params.id, (err, song) => {
//     res.render('music/show', { song });
//   });
// }

// SHOW RESTFUL
function showRoute(req, res, next) {
  Popup.findById(req.params.id)
    .then(popup => {
      if(!popup) return res.render('pages/404');
      res.render('popuplisting/show', { popup });
    })
    .catch(next);
}

// EDIT RESTFUL
// FOR PREPOPULATION OCCURS HERE
function editRoute(req, res) {
  Popup.findById(req.params.id)
    .then(popup => res.render('popuplisting/edit', { popup }));
}

// UPDATE RESTFUL
// have to get the data from the database.
// update the record and apply data
// save this change
function updateRoute(req, res) {
  Popup.findById(req.params.id)
    //assign req.body to the song
    .then(popup => Object.assign(popup, req.body))
    // save
    .then(popup => popup.save())
    // and then redirect to the specifc id page
    .then(() => res.redirect(`/popuplisting/${req.params.id}`));
}


// DELETE RESTFUL
function deleteRoute(req, res) {
  Popup.findById(req.params.id)
    .then(popup => popup.remove())
    .then(() => res.redirect('/popuplisting'));
}


module.exports = {
  index: indexRoute,
  new: newRoute,
  create: createRoute,
  show: showRoute,
  edit: editRoute,
  update: updateRoute,
  delete: deleteRoute
  // show: showRoute
};
