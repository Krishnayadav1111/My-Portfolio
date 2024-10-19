const express = require('express');
const Blog = require('../models/Blog');

const router = express.Router();

// GET all blogs
router.get('/', async (req, res) => {
    try {
        const blogs = await Blog.find({ isPublished: true }).sort({ lastModified: -1 });
        res.json({ isSuccessful: true, results: blogs });
    } catch (err) {
        console.error(err);
        res.json({ isSuccessful: false, results: [] });
    }
});

// POST a new blog
router.post('/', async (req, res) => {
    try {
        const blog = new Blog(req.body);
        await blog.save();
        res.json({ isSuccessful: true });
    } catch (err) {
        console.error(err);
        res.json({ isSuccessful: false });
    }
});

// GET blog by ID
router.get('/:id', async (req, res) => {
    try {
        const blog = await Blog.findById(req.params.id);
        res.json({ isSuccessful: true, result: blog });
    } catch (err) {
        console.error(err);
        res.json({ isSuccessful: false, result: {} });
    }
});

module.exports = router;
