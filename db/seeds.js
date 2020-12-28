// necessary variables
const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
const Popup = require('../models/popup');
let popUpData = require('./data/popups');
const User = require('../models/user');

// connect to this database
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/music-database', (err, db) => {
  // clean the database first
  db.dropDatabase();
  console.log("TEST!!!");
  // create list of popups database
  // callback example
  
  User.create({
    username: 'ReenaVerma',
    email: 'reena@reena.com',
    password: 'password',
    passwordConfirmation: 'password'
  })
    .then(user => {
      popUpData = popUpData.map(popup => {
        popup.user = user;
        return popup;
      });

      return Popup.create(popUpData);
    })
    .then(popups => console.log(`${popups.length} popups created`))
    .catch(err => console.log(err))
    .finally(() => mongoose.connection.close()); // now disconnect from database
});
