const express = require('express');
const Recommendation = require('../models/Recommendation');

const router = express.Router();

// GET all recommendations
router.get('/', async (req, res) => {
    try {
        const recommendations = await Recommendation.find({ onShowcase: true });
        res.json({ isSuccessful: true, results: recommendations });
    } catch (err) {
        console.error(err);
        res.json({ isSuccessful: false, results: [] });
    }
});

// POST a new recommendation
router.post('/', async (req, res) => {
    try {
        const recommendation = new Recommendation(req.body);
        await recommendation.save();
        res.json({ isSuccessful: true });
    } catch (err) {
        console.error(err);
        res.json({ isSuccessful: false });
    }
});

module.exports = router;
