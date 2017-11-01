const mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
   name: { type: String, unique: true },
   email: { type: String },
   username: { type: String },
   password: { type: String }
});

module.exports = mongoose.model('Users', userSchema);