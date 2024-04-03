// Function to handle logout
const logout = async () => {
    try {
      // Send a POST request to the logout API endpoint
      const response = await fetch('/api/users/logout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (!response.ok) {
        throw new Error('Logout failed. Please try again.');
      }
  
      // Redirect to the homepage upon successful logout
      document.location.replace('/');
    } catch (error) {
      alert(error.message);
    }
  };
  
  document.querySelector('#logout-button').addEventListener('click', logout);
  