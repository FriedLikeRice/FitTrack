const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// POST route to handle submission of workout data
app.post('/submit', (req, res) => {
    // Extract workout data from the request body
    const { date, exercise, reps, weight, supplement, dosage } = req.body;

    // Process the workout data (you can perform database operations or other actions here)
    console.log('Received workout data:');
    console.log('Date:', date);
    console.log('Exercise:', exercise);
    console.log('Reps:', reps);
    console.log('Weight:', weight);
    console.log('Supplement:', supplement);
    console.log('Dosage:', dosage);

    // Send a response indicating success
    res.status(200).json({ message: 'Workout data received successfully' });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
