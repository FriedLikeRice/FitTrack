// links to formHandler.js and app.handlebars
const express = require('express');
const router = express.Router();
const { User, Workout, Supplement } = require('../models');
const bcrypt = require('bcrypt');

// Middleware to ensure user is authenticated
function ensureAuthenticated(req, res, next) {
    if (!req.session.userId) {
        return res.status(403).json({ message: 'User not authenticated' });
    }
    next();
}

router.use(ensureAuthenticated); 

router.post('/submit', async (req, res) => {
    const { workout, reps, weight, supplement, description, intake } = req.body;
    const userId = req.session.userId; // Assuming this is set at login

    if (!workout || reps === undefined || !weight) {
        return res.status(400).json({ message: 'Missing required workout fields' });
    }

    try {
        // Create new workout
        const newWorkout = await Workout.create({
            workout,
            reps,
            weight,
            user_id: userId,
        });

        // checks for supplement data 
        let newSupplement = null;
        if (supplement && description && intake) {
            newSupplement = await Supplement.create({
                supplement,
                description,
                intake,
                user_id: userId,
            });
        }

        // Response
        res.status(200).json({
            message: 'Workout and supplement data submitted successfully',
            workout: newWorkout,
            supplement: newSupplement,
        });
    } catch (error) {
        console.error('Error saving to database:', error);
        res.status(500).json({ message: 'Failed to save data. Please try again.' });
    }
});

module.exports = router;