const express = require('express');
const Skill = require('../models/Skill');

const router = express.Router();

// GET all skills
router.get('/', async (req, res) => {
    try {
        const skills = await Skill.find();
        res.json({ isSuccessful: true, results: skills });
    } catch (err) {
        console.error(err);
        res.json({ isSuccessful: false, results: [] });
    }
});

// POST a new skill
router.post('/', async (req, res) => {
    try {
        const skill = new Skill(req.body);
        await skill.save();
        res.json({ isSuccessful: true });
    } catch (err) {
        console.error(err);
        res.json({ isSuccessful: false });
    }
});

module.exports = router;
