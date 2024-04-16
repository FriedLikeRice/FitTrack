// Function to handle new workout form submission
const newFormHandler = async (event) => {
  event.preventDefault();

  const workoutName = document.querySelector('#workout-name').value.trim();
  const reps = document.querySelector('#workout-reps').value.trim();
  const weight = document.querySelector('#workout-weight').value.trim();

  if (workoutName && reps && weight) {
    try {
      // Send a POST request to create a new workout
      const response = await fetch(`/api/workouts`, {
        method: 'POST',
        body: JSON.stringify({ name: workoutName, reps, weight }),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        // Reload the page to display the updated list of workouts
        window.location.reload();
      } else {
        alert('Failed to create workout.');
      }
    } catch (error) {
      alert('An error occurred while creating the workout.');
    }
  } else {
    alert('Please fill in all fields.');
  }
};

// Add event listener to the new workout form
document.querySelector('.new-workout-form').addEventListener('submit', newFormHandler);
