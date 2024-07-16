const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
    rating: String,
    review: String,
    userId: String,
    selectedTemplate:String,
}, {
    timestamps: true 
});

module.exports = mongoose.model('Review', reviewSchema);
