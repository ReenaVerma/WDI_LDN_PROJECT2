// necessary variables
const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
const Popup = require('../models/popup');
const popUpData = require('../data/popups');

// connect to this database
mongoose.connect('mongodb://localhost/music-database');

// clean the database first
Popup.collection.drop();

// create list of songs database
// data/songs.js search/reference
// callback example
Popup.create(popUpData, (err, popups) => {    //first function is inflight.
  if (err) console.log(err);
  console.log(`${popups.length} popups created`);

  mongoose.connection.close();
  // now disconnect from database
});



// mongoose.connect('mongodb://localhost/cheese-database', (err, db) => {
//   db.dropDatabase();
//
//   Cheese.create(CheeseData)
//     // changed into a promoise
//     .then(cheeses => console.log(`${cheeses.length} cheeses created`))
//     // dont forget to add catch and finally/close database
//     .catch(err => console.log(err))
//     .finally(() => mongoose.connection.close());
// });
