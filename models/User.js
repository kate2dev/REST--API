const mongoose = require("mongoose");

// Definig the Schema
const userSchema = new mongoose.Schema({
    name: String,
    movie: String,
    ratings: Number
});

// Defining the Schema
const User = mongoose.model('User', userSchema);

module.exports = User;