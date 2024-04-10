// Function to handle signup form submission
const signupFormHandler = async (event) => {
    event.preventDefault();
  
    // Collect values from the signup form
    const name = document.querySelector('#username-signup').value.trim();
    const email = document.querySelector('#email-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();
  
    if (name && email && password) {
      try {
        // Send a POST request to the API endpoint
        const response = await fetch('/api/users/signup', {
          method: 'POST',
          body: JSON.stringify({ name, email, password }),
          headers: { 'Content-Type': 'application/json' },
        });
  
        if (!response.ok) {
          throw new Error('Signup failed. Please try again later.');
        }
  
        // Redirect to the profile page upon successful signup
        document.location.replace('/user');
      } catch (error) {
        alert(error.message);
      }
    }
  };
  
  // Add event listener to signup form
  document.getElementById('signup-form').addEventListener('submit', function(event) {
    event.preventDefault(); 
    signupFormHandler(); // Call signup form handler function
  });
  