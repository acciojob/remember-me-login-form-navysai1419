document.addEventListener("DOMContentLoaded", function() {
  const loginForm = document.getElementById("loginForm");
  const submitBtn = document.getElementById("submitBtn"); // Get the submit button

  // Add submit event listener to the form
  loginForm.addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the form from submitting

    // Get the values of username, password, and rememberMe checkbox
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const rememberMe = document.getElementById("rememberMe").checked;

    if (rememberMe) {
      // If "Remember me" is checked, save username and password to session storage
      sessionStorage.setItem("username", username);
      sessionStorage.setItem("password", password);
    } else {
      // If "Remember me" is unchecked, remove username and password from session storage
      sessionStorage.removeItem("username");
      sessionStorage.removeItem("password");
    }

    // Display an alert with the logged-in message
    alert("Logged in as: " + username);
  });

  // Check if there are stored credentials
  const storedUsername = sessionStorage.getItem("username");
  const storedPassword = sessionStorage.getItem("password");

  // If there are stored credentials, fill the form
  if (storedUsername && storedPassword) {
    document.getElementById("username").value = storedUsername;
    document.getElementById
