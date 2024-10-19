const mongoose = require('mongoose');

const skillSchema = new mongoose.Schema({
    imageUrl: { type: String, required: true },
    name: { type: String, required: true },
    starsTotal: { type: Number, required: true },
    starsActive: { type: Number, required: true },
});

module.exports = mongoose.model('Skill', skillSchema);
