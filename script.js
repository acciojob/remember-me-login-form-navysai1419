document.addEventListener("DOMContentLoaded", function() {
  const loginForm = document.getElementById("loginForm");

  // Add submit event listener to the form
  loginForm.addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the form from submitting

    // Get the values of username, password, and rememberMe checkbox
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const rememberMe = document.getElementById("rememberMe").checked;

    if (rememberMe) {
      // If "Remember me" is checked, save username and password to local storage
      localStorage.setItem("username", username);
      localStorage.setItem("password", password);
    } else {
      // If "Remember me" is unchecked, remove username and password from local storage
      localStorage.removeItem("username");
      localStorage.removeItem("password");
    }

    // Display an alert with the logged-in message
    alert("Logged in as: " + username);
  });

  // Check if there are stored credentials
  const storedUsername = localStorage.getItem("username");
  const storedPassword = localStorage.getItem("password");

  // If there are stored credentials, fill the form
  if (storedUsername && storedPassword) {
    document.getElementById("username").value = storedUsername;
    document.getElementById("password").value = storedPassword;
    document.getElementById("rememberMe").checked = true;
  }
});
