const form = document.getElementById("loginForm");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const email = emailInput.value.trim();
  const password = passwordInput.value.trim();

  // Validate email
  if (!isValidEmail(email)) {
    alert("Please enter a valid email address.");
    return;
  }

  // Validate password
  if (password.length < 8) {
    alert("Password must be at least 8 characters long.");
    return;
  }

  // If validation passes, you can proceed with form submission or other actions
  // For demonstration, let's just log the values
  console.log("Email:", email);
  console.log("Password:", password);

  // Redirect to home page after successful login
  window.location.href = "home.html";
});

function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}
