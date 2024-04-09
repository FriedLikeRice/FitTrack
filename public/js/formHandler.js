// event listener
document.getElementById('workout-form').addEventListener('submit', async (event) => {
    event.preventDefault(); // prevents default form submission

    // form data
    const date = document.getElementById('date').value;
    const exercise = document.getElementById('exercise').value;
    const reps = document.getElementById('reps').value;
    const weight = document.getElementById('weight').value;
    const supplement = document.getElementById('supplement').value;
    const dosage = document.getElementById('dosage').value;

    const formData = {
        date,
        exercise,
        reps,
        weight,
        supplement,
        dosage
    };

    try {
        // Send a POST request to the server
        const response = await fetch('/submit', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        });

        if (!response.ok) {
            throw new Error('Failed to submit workout data');
        }

        // Handle the response 
        console.log('Workout data submitted successfully');
    } catch (error) {
        console.error('Error:', error);
    }
});