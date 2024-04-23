const signupFormHandler = async (event) => {
  event.preventDefault();

  const username = document.querySelector('#username-signup').value.trim();
  const email = document.querySelector('#email-signup').value.trim();
  const password = document.querySelector('#password-signup').value.trim();

  // checks on username, email and password
  if (!username || !email || !password) {
    alert('Please fill in all fields.');
    return;
  }

  try {
    const response = await fetch('/api/users/signup', {
      method: 'POST',
      body: JSON.stringify({ username, email, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.replace('/profile');
    } else {
      alert('Failed to sign up.');
    }
  } catch (error) {
    console.error('Error signing up:', error);
    alert('An error occurred while signing up. Please try again later.');
  }
};

// Event listener for signup form
// changed .signup-form to #signup-form 
document.querySelector('#signup-form').addEventListener('submit', signupFormHandler);
