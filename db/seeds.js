// necessary variables
const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
const Popup = require('../models/popup');
const popUpData = require('../data/popups');

// connect to this database
mongoose.connect('mongodb://localhost/music-database');

// clean the database first
Popup.collection.drop();

// create list of popups database
// callback example
Popup.create(popUpData, (err, popups) => {    //first function is inflight.
  if (err) console.log(err);
  console.log(`${popups.length} popups created`);

  mongoose.connection.close();
  // now disconnect from database
});
