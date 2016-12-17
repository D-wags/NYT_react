var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var Articles = new Schema({
	title: String,
	published: String,
	url: String
})

var nyt = mongoose.model('nyt', Articles);

module.exports = nyt;