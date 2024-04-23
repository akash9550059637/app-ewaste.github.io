const mongoose = require('mongoose');

// Define Reward Schema
const rewardSchema = new mongoose.Schema({
    item: {
        type: String,
        required: true,
        unique: true,
    },
    points: {
        type: Number,
        required: true,
    },
});

// Create Reward model
const Reward = mongoose.model('Reward', rewardSchema);

module.exports = Reward;
