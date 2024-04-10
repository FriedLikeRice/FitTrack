const loginFormHandler = async (event) => {
  event.preventDefault();

  const email = document.querySelector('#email-login').value.trim();
  const password = document.querySelector('#password-login').value.trim();

  if (email && password) {
    try {
      const response = await fetch('/api/user/login', {
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

const signupFormHandler = async (event) => {
  event.preventDefault();

  const username = document.querySelector('#username-signup').value.trim();
  const email = document.querySelector('#email-signup').value.trim();
  const password = document.querySelector('#password-signup').value.trim();

  if (username && email && password) {
    try {
      const response = await fetch('/api/user/signup', {
        method: 'POST',
        body: JSON.stringify({ username, email, password }),
        headers: { 'Content-Type': 'application/json' },
      });

      if (response.ok) {
        document.location.replace('/profile'); // Redirect to profile page on successful signup
      } else {
        alert('Failed to sign up.');
      }
    } catch (error) {
      console.error('Error signing up:', error);
      alert('An error occurred while signing up. Please try again later.');
    }
  }
};

document
  .querySelector('.login-form')
  .addEventListener('submit', loginFormHandler);

document
  .querySelector('.signup-form')
  .addEventListener('submit', signupFormHandler);
