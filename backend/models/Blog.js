const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema({
    imageUrl: { type: String, required: true },
    title: { type: String, required: true },
    excerpt: { type: String, required: true },
    body: { type: String, required: true },
    isPublished: { type: Boolean, default: true },
    lastModified: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Blog', blogSchema);
