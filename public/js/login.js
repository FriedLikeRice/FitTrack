const loginFormHandler = async (event) => {
  event.preventDefault();

  const email = document.querySelector('#email-login').value.trim();
  const password = document.querySelector('#password-login').value.trim();

  // removed signup handler to be used in signup.js file
  if (email && password) {
    try {
      const response = await fetch('/login', {
        method: 'POST',
        body: JSON.stringify({ email, password }),
        headers: { 'Content-Type': 'application/json' },
      });

      if (response.ok) {
        // Redirect to the homepage upon successful login
        document.location.replace('/');
      } else {
        // Display an error message if login fails
        alert('Failed to log in. Please check your email and password.');
      }
    } catch (error) {
      console.error('Login error:', error);
      alert('An error occurred while logging in. Please try again later.');
    }
  } else {
    alert('Please provide both email and password.');
  }
};

document.querySelector('.login-form').addEventListener('submit', loginFormHandler);