// Function to handle login form submission
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
          document.location.replace('/profile');
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
  
  // Function to handle signup form submission
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
  
  // Add event listener to login form
  document.querySelector('.login-form').addEventListener('submit', loginFormHandler);
  
  // Add event listener to signup form
  document.querySelector('#signup-form').addEventListener('submit', signupFormHandler);
  
  // Function to handle workout form submission
  document.getElementById('workout-form').addEventListener('submit', async (event) => {
      event.preventDefault(); // prevents default form submission
  
      // form data
      const date = document.getElementById('date').value;
      const exercise = document.getElementById('exercise').value;
      const reps = document.getElementById('reps').value;
      const weight = document.getElementById('weight').value;
      const supplement = document.getElementById('supplement').value;
      const dosage = document.getElementById('dosage').value;
  
      const formData = {
          date,
          exercise,
          reps,
          weight,
          supplement,
          dosage
      };
  
      try {
          // Send a POST request to the server
          const response = await fetch('/submit', {
              method: 'POST',
              headers: {
                  'Content-Type': 'application/json',
              },
              body: JSON.stringify(formData),
          });
  
          if (!response.ok) {
              throw new Error('Failed to submit workout data');
          }
  
          // Handle the response 
          console.log('Workout data submitted successfully');
      } catch (error) {
          console.error('Error:', error);
      }
  });
  