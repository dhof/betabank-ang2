const mongoose = require('mongoose');

// User Schema
const userSchema = mongoose.Schema({
	firstname : String,
	lastname  : String,
	username  : String,
	password  : String,
	completedClimbs : {},
	date      : { type : Date, default : Date.now }
});

module.exports = mongoose.model('User', userSchema)
