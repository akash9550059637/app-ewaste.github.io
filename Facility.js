// Import mongoose
const mongoose = require('mongoose');

// Define schema for e-waste request
const FacilitySchema = new mongoose.Schema({
    email: String,
    facilityName: String,
    facilityDetails: String,
    additionalDetails: String,
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
const Facility = mongoose.model('Facility', FacilitySchema);

// Export the model
module.exports = Facility;