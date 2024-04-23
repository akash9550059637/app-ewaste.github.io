// Import mongoose
const mongoose = require('mongoose');

// Define schema for e-waste request
const RequestSchema = new mongoose.Schema({
    email: String,
    productCategory: String,
    productName: String,
    additionalInfo: String,
    location: {
        type: {
            type: String,
            default: 'Point'
        },
        coordinates: {
            type: [Number],
            required: true
        }
    }
});

// Create model for e-waste request
const Request = mongoose.model('Request', RequestSchema);

// Export the model
module.exports = Request;