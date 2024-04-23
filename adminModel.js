// adminModel.js

const mongoose = require('mongoose');

// Define the schema for admin registration
const adminSchema = new mongoose.Schema({
    adminName: {
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
    facilityName: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
});

// Create a model for admin using the schema
const Admin = mongoose.model('Admin', adminSchema);

// Export the model
module.exports = Admin;
