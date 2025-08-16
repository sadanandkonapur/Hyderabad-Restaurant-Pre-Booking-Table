// Save user credentials in localStorage (simple demo purpose)
function signup() {
  const user = document.getElementById("signupUser").value;
  const pass = document.getElementById("signupPass").value;

  if (user && pass) {
    localStorage.setItem("username", user);
    localStorage.setItem("password", pass);
    alert("Signup successful! Please login.");
    toggleLogin();
  } else {
    alert("Please enter username and password.");
  }
}

function login() {
  const user = document.getElementById("loginUser").value;
  const pass = document.getElementById("loginPass").value;

  const storedUser = localStorage.getItem("username");
  const storedPass = localStorage.getItem("password");

  if (user === storedUser && pass === storedPass) {
    localStorage.setItem("loggedInUser", user);
    window.location.href = "booking.html"; // redirect to booking page
  } else {
    alert("Invalid credentials. Try again.");
  }
}

function logout() {
  localStorage.removeItem("loggedInUser");
  window.location.href = "index.html"; // back to login page
}

function bookTable() {
  const restaurant = document.getElementById("restaurant").value;
  const date = document.getElementById("date").value;
  const time = document.getElementById("time").value;
  const guests = document.getElementById("guests").value;

  if (restaurant && date && time && guests) {
    // Show confirmation on page
    const confirmation = document.getElementById("confirmation");
    confirmation.style.display = "block";
    document.getElementById("confirmed-table").innerText =
      `✅ Table booked at ${restaurant} on ${date} at ${time} for ${guests} guests!`;
  } else {
    alert("Please fill all fields.");
  }
}

function toggleSignup() {
  document.getElementById("loginSection").style.display = "none";
  document.getElementById("signupSection").style.display = "block";
}

function toggleLogin() {
  document.getElementById("signupSection").style.display = "none";
  document.getElementById("loginSection").style.display = "block";
}

// Show username on booking page
window.onload = function() {
  const loggedInUser = localStorage.getItem("loggedInUser");
  if (document.getElementById("usernameDisplay") && loggedInUser) {
    document.getElementById("usernameDisplay").innerText = loggedInUser;
  }
};
