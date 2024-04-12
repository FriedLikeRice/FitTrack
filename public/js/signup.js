// Ensure that signupFormHandler is defined only once
if (!window.signupFormHandler) {
  // Function to handle signup form submission
  const signupFormHandler = async (event) => {
    event.preventDefault();

    // Collect values from the signup form
    const username = document.querySelector('#username-signup').value.trim();
    const email = document.querySelector('#email-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();

    // Perform validation if needed
    
    // Make sure the values are not empty
    if (username && email && password) {
      try {
        // Send a POST request to the API endpoint
        const response = await fetch('/api/user/signup', {
          method: 'POST',
          body: JSON.stringify({ username, email, password }),
          headers: { 'Content-Type': 'application/json' },
        });

        // Check if the response is successful
        if (response.ok) {
          // Redirect to the profile page upon successful signup
          document.location.replace('/profile');
        } else {
          // Display an error message if signup fails
          alert('Failed to sign up. Please try again.');
        }
      } catch (error) {
        console.error('Error signing up:', error);
        alert('An error occurred while signing up. Please try again later.');
      }
    } else {
      // Display an error message if any field is empty
      alert('Please fill in all fields.');
    }
  };

  // Add event listener to signup form
  document.getElementById('signup-form').addEventListener('submit', signupFormHandler);
}
