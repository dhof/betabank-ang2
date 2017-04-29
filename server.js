const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const passport = require('passport');


// Connect to mongoDB
mongoose.connect(process.env.MONGOLAB_URI || 'mongodb://localhost/betabank');


// Run the app by serving the static files in the dist directory
app.use(express.static(__dirname + '/dist'));


// For all GET requests, send back index.html
// so that PathLocationStrategy can be used
app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname + '/dist/index.html'));
});


app.listen(process.env.PORT || 3000);

