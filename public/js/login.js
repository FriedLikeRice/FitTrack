// Function to handle login form submission
const loginFormHandler = async (event) => {
    event.preventDefault();
  
    // Collect values from the login form
    const email = document.querySelector('#email-input').value.trim();
    const password = document.querySelector('#password-input').value.trim();
  
    if (email && password) {
      try {
        // Send a POST request to the API endpoint
        const response = await fetch('/api/users/login', {
          method: 'POST',
          body: JSON.stringify({ email, password }),
          headers: { 'Content-Type': 'application/json' },
        });
  
        if (!response.ok) {
          throw new Error('Login failed. Please check your email and password.');
        }
  
        // Redirect to the profile page upon successful login
        document.location.replace('/profile');
      } catch (error) {
        alert(error.message);
      }
    }
  };
  
  document.querySelector('#login-form').addEventListener('submit', loginFormHandler);
  