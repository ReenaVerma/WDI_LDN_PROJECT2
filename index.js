// connecting third party needs in application
const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
const router = require('./config/router');
const session = require('express-session');
const userAuth = require('./lib/userAuth');
const googleMapsClient = require('@google/maps').createClient({
  key: 'AIzaSyC8C7HRroI6BaALKHa6EHMc_BDYLIB5kUA'
});
// const filestack = filestack.init(AzIEvsoFPTqyx3Hl6QM08z);


// CALL EXPRESS & SERVER
// THIS IS WHERE WE ARE CREATING OUR APP
const app = express();
const PORT = 8000; //javascript users tend to use this port.  ruby users tend to use 3000

// CONNECT TO THIS DATABASE
//local host is 127.0.0.1.  basically using your local comupter server
mongoose.connect('mongodb://localhost/music-database');

// SET EJS USE
app.set('view engine', 'ejs');
// look for template files
app.set('views', `${__dirname}/views`);
app.use(expressLayouts);
// __dirname references your entire route directory url. eg home/development/homework/myexpress

// tells the requster to check the public file for js, images, css
app.use(express.static(`${__dirname}/public`));


// ENSURES FORM DATA IS LISTENED TO AND CAPTURED
// Looks at form data and adds % in spaces for example, as data cannot be passed with spaces.
// EG ?username=Reena%Verma
app.use(bodyParser.urlencoded({ extended: true }));
// req.body is created here

// YOU NEED THIS TO MAKE UPDATE WORK, AS REQ.BODY IS ONLY CREATED ABOVE
// MUST APPEAR AFTER BODY PARSER
// CONVERTS A GET REQUEST, TO PUT, PATCH OR DELETE.
// IN EDIT.JS WE HAVE MADE A "METHOD=POST" REQUEST
app.use(methodOverride(req => {
  if(req.body && typeof req.body === 'object' && '_method' in req.body) {
    // LOOK IN URL ENCODED POST BODIES
    const method = req.body._method;
    // DELETE IT
    delete req.body._method;
    return method;
  }
}));


// SETTING UP SESSION COOKIE
// Session cookie is encryted, so we need a key to decrypt it
// if the secret is changed, then users will be kicked out
app.use(session({
  secret: 'GysHa^72u91sk0P(', // a random key used to encrypt the session cookie
  resave: false,
  saveUninitialized: false
}));

// googleMapsClient.geocode({
//   address: '1600 Amphitheatre Parkway, Mountain View, CA'
// }, function(err, response) {
//   if (!err) {
//     console.log(response.json.results);
//   }
// });

// CHECKS REQUEST BEFORE SENDING ON
// ON THE WAY TO THE ROUTER, WE PICK UP THIS INFORMATION



app.use(userAuth);

// CONNECT ROUTER FILE
app.use(router);

// GLOBAL ERROR CATCHER FOR 422 and 500
app.use((err, req, res, next) => {
  if(err.name === 'ValidationError') return res.render('pages/422');
  // 'ValidationError' is a mongoose code.  It just knows a validation error, is a 'ValidationError'
  res.render('pages/500', { err });
  next(err); //display error in terminal/also a callback function
});

// PORT LISTENER - MUST BE AT BOTTOM
app.listen(PORT, () => console.log(`Up and running on port ${PORT}`));

// const music = require('./data/songs');
// app.get('/music', (req, res) => res.render('music/index', {music: music}));
