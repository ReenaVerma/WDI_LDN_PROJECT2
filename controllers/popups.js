
const Popup = require('../models/popup');
const Promise = require('bluebird');


// INDEX RESTUL
// function indexRoute(req, res) {
//   // use models/song to get data from database
//   Popup.find()
//     // pass data into views/popuplisting/index
//     .then(popup => res.render('popuplisting/index', { popup: popup }));
// }

function indexRoute(req, res) {

  Promise.props({
    allPopups: Popup.find().exec(),
    popups: Popup.find(req.query).exec()
  })
    .then(data => {
      const allTypes = data.allPopups.map(popup => popup.type);
      const uniqueTypes = Array.from(new Set(allTypes)).sort();
      res.render('popuplisting/index', {
        popups: data.popups,
        types: uniqueTypes,
        selectedType: req.query.type
      });
    });

  // console.log(req.query); //this will display anything that was in query string as an object. eg, /cheeses?origin=france will display {origin=france}
  // Cheese.find(req.query)
  //   .then(cheeses => res.render('cheeses/index', { cheeses }));
  // Popup.find()
  //   // pass data into views/popuplisting/index
  //   .then(popup => res.render('popuplisting/index', { popup: popup }));
}

// NEW RESTFUL
function newRoute (req, res) {
  res.render('popuplisting/new');
}

// CREATE RESTFUL
function createRoute(req, res, next) {
  req.body.user = req.currentUser;
  Popup.create(req.body)
    .then(() => res.redirect('/popuplisting'))
    .catch(next);

}


// SHOW RESTFUL
function showRoute(req, res, next) {
  Popup.findById(req.params.id)
    .populate('user comments.user')
    // populate gets the record
    // inside the comments area, find all the users and populate commentSchema
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


// CREATE FUNCTION FOR COMMENT
function commentsCreateRoute(req, res, next) {
  req.body.user = req.currentUser;
  //set the currentuser as the owner of the post created
  console.log(req.body);

  // find the popup by ID
  Popup.findById(req.params.id)
    .then(popup => {
      // push comment into the the body area of the popup page
      popup.comments.push(req.body);
      req.flash('success', 'Comment added!');
      return popup.save();

    })
    .then(popup => {
      console.log(popup);
      res.redirect(`/popuplisting/${popup._id}`);

    })
    .catch(next); //catch any errors
}




function commentsDeleteRoute(req, res, next) {
  Popup.findById(req.params.id)
    .then(popup => {
      // push req.body/conten for the form into the comments area
      console.log(popup);
      const comment = popup.comments.id(req.params.commentId);
      console.log(comment);
      comment.remove();
      return popup.save();
    })
    .then(popup => res.redirect(`/popuplisting/${popup._id}`))
    .catch(next);  //any problems send to error handler
}



// CREATE FUNCTION FOR Gallery
function galleryCreateRoute(req, res, next) {
  console.log('req.body:', req.body);

  // find the popup by ID
  Popup.findById(req.params.id)
    .then(popup => {
      // push comment into the the body area of the popup page
      popup.galleryImage.push(req.body);
      console.log('popup:', popup);
      req.flash('success', 'Image added!');
      return popup.save();

    })
    .then(popup => {
      console.log(popup);
      res.redirect(`/popuplisting/${popup._id}`);
    })
    .catch(next); //catch any errors
}



module.exports = {
  index: indexRoute,
  new: newRoute,
  create: createRoute,
  show: showRoute,
  edit: editRoute,
  update: updateRoute,
  delete: deleteRoute,
  commentsCreate: commentsCreateRoute,
  commentsDelete: commentsDeleteRoute,
  galleryCreate: galleryCreateRoute

  // show: showRoute
};
