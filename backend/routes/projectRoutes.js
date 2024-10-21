const express = require('express');
const Project = require('../models/Project');

const router = express.Router();

// GET all projects
router.get('/:id', async (req, res) => {
    try {
        const project = await Project.findById(req.params.id);
        res.json({ isSuccessful: true, result: project });
    } catch (err) {
        console.error(err);
        res.json({ isSuccessful: false, result: {} });
    }
});

// POST a new project
router.post('http://127.0.0.1:3000/api/project', async (req, res) => {
    console.log(req.body);
    try {
        const newProject = new Project({
            imageUrl: req.body.imageUrl,
            title: req.body.title,
            excerpt: req.body.excerpt,
            body: req.body.body,
            isPublished: req.body.isPublished, // Make sure to include all required fields
        });
        const savedProject = await newProject.save();
        res.status(201).json({ isSuccessful: true, result: savedProject });
    } catch (err) {
        console.error(err);
        res.status(500).json({ isSuccessful: false });
    }
});

// GET project by ID
router.get('/:id', async (req, res) => {
    try {
        const project = await Project.findById(req.params.id);
        res.json({ isSuccessful: true, result: project });
    } catch (err) {
        console.error(err);
        res.json({ isSuccessful: false, result: {} });
    }
});

module.exports = router;
