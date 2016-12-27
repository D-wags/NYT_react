var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var ArticleSchema = new Schema({
	title: String,
	published: String,
	url: String
});

var Articles = mongoose.model('nyt', Articles);

module.exports = Articles;