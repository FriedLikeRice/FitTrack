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

// Function to handle signup form submission
const signupFormHandler = async (event) => {
  event.preventDefault();

  // Collect values from the signup form
  const name = document.querySelector('#name-signup').value.trim();
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
      document.location.replace('/profile');
    } catch (error) {
      alert(error.message);
    }
  }
};
document.getElementById('login-form').addEventListener('submit', function(event) {
  event.preventDefault(); 
});


document.getElementById('signup-form').addEventListener('submit', function(event) {
  event.preventDefault(); 
  signupFormHandler(); 
});

