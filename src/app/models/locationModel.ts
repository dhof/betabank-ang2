const mongoose = require('mongoose');

const locationSchema = mongoose.Schema({
	name	 : String,
	position : Object,
	walls 	 :  [{
		wallName : String,
		problems : []
	}]
})

module.exports = mongoose.model('Locations', locationSchema)