const mongoose = require('mongoose');

const reportSchema = new mongoose.Schema({
    name: { type: String, required: true },
    age: { type: Number, required: true },
    gender: { type: String, required: true },
    dateOfBirth: { type: Date, required: true },
    address: { type: String, required: true },
    disappearanceDate: { type: Date, required: true },
    disappearanceLocation: { type: String, required: true },
    disappearanceDescription: { type: String, required: true },
    height: { type: Number, required: true },
    weight: { type: Number, required: true },
    hairColor: { type: String, required: true },
    eyeColor: { type: String, required: true },
    distinguishingFeatures: { type: String },
    reporterName: { type: String, required: true },
    phoneNumber: { type: String, required: true },
    emailAddress: { type: String, required: true },
    firNumber: { type: String, required: true },
    photo: { type: String },
    status: { 
        type: String, 
        enum: ['active', 'found', 'closed'],
        default: 'active'
    },
    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Report', reportSchema);
