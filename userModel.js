const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    contact: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    userData: {
        type: mongoose.Schema.Types.Mixed // This can be an object or any other data structure you need
    }
});

const User = mongoose.model('User', userSchema);

module.exports = User;
