// Function to handle new workout form submission
const newFormHandler = async (event) => {
    event.preventDefault();
  
    // Collect values from the new workout form
    const workout = document.querySelector('#workout').value.trim();
    const description = document.querySelector('#description').value.trim();
    const intake = document.querySelector('#intake').value.trim();
  
    if (workout && description) {
      try {
        // Send a POST request to create a new workout
        const response = await fetch(`/api/workouts`, {
          method: 'POST',
          body: JSON.stringify({ workout, description, intake }),
          headers: {
            'Content-Type': 'application/json',
          },
        });
  
        if (!response.ok) {
          throw new Error('Failed to create workout');
        }
  
        // Redirect to the profile page upon successful creation of workout
        document.location.replace('/profile');
      } catch (error) {
        alert(error.message);
      }
    }
  };
  
  // Function to handle delete button click event
  const delButtonHandler = async (event) => {
    if (event.target.hasAttribute('data-id')) {
      const id = event.target.getAttribute('data-id');
  
      try {
        // Send a DELETE request to delete a workout
        const response = await fetch(`/api/workouts/${id}`, {
          method: 'DELETE',
        });
  
        if (!response.ok) {
          throw new Error('Failed to delete workout');
        }
  
        // Redirect to the profile page upon successful deletion of workout
        document.location.replace('/profile');
      } catch (error) {
        alert(error.message);
      }
    }
  };
  
  document.querySelector('.new-workout-form').addEventListener('submit', newFormHandler);
  document.querySelector('.workout-list').addEventListener('click', delButtonHandler);
  