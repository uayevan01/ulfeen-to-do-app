const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const db = {};
db.mongoose = mongoose;
db.url = 'mongodb+srv://ulfeen:VpkVPyTOlVkcXnHg@ulfeen-to-do-app-cluste.tjknw.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
db.models = require('./model.js');

module.exports = db;