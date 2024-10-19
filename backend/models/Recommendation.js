const mongoose = require('mongoose');

const recommendationSchema = new mongoose.Schema({
    name: { type: String, required: true },
    company: { type: String, required: true },
    designation: { type: String, required: true },
    message: { type: String, required: true },
    onShowcase: { type: Boolean, default: true },
});

module.exports = mongoose.model('Recommendation', recommendationSchema);
