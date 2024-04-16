const loginFormHandler = async (event) => {
  event.preventDefault();

  // Collect values from the login form
  const email = document.querySelector('#email-login').value.trim();
  const password = document.querySelector('#password-login').value.trim();

  // checks on both email and password
  if (!email || !password) {
    alert('Please provide both email and password.');
    return;
  }

  try {
    const response = await fetch('/api/users/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      // If successful, redirect the browser to the profile page
      document.location.replace('/profile');
    } else {
      alert('Failed to log in. Please check your email and password.');
    }
  } catch (error) {
    console.error('Login error:', error);
    alert('An error occurred while logging in. Please try again later.');
  }
};

document.querySelector('.login-form').addEventListener('submit', loginFormHandler);
