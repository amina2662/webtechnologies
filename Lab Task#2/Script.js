/*
/*function validateForm() {
    var name = document.forms[0]["name"].value;
    var email = document.forms[0]["email"].value;
    var phone = document.forms[0]["phone"].value;
    var address = document.forms[0]["address"].value;

    if (name == "") {
        alert("Please enter your name.");
        return false;
    }

    if (email == "") {
        alert("Please enter your email address.");
        return false;
    }

    return true;
}
*/
/*
// Get the form and input elements
const form = document.getElementById('signup-form');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const emailError = document.getElementById('email-error');
const passwordError = document.getElementById('password-error');

// Regular expression to validate email format
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Function to validate email format
function validateEmail() {
  if (!emailRegex.test(emailInput.value)) {
    emailError.textContent = 'Please enter a valid email address';
  } else {
    emailError.textContent = '';
  }
}

// Function to validate password length
function validatePassword() {
  if (passwordInput.value.length < 8) {
    passwordError.textContent = 'Password must be at least 8 characters long';
  } else {
    passwordError.textContent = '';
  }
}

// Add event listeners to input fields
emailInput.addEventListener('input', validateEmail);
passwordInput.addEventListener('input', validatePassword);

// Add event listener to form to prevent submission if inputs are invalid
form.addEventListener('submit', function(event) {
    if (!emailRegex.test(emailInput.value) || passwordInput.value.length < 8) {
        event.preventDefault();
        emailError.textContent = !email;
  }
});
*/
/*
function doBindings() {
  console.log("Binding Started");
  var mybtn = document.getElementById("mybtn");
  mybtn.onclick = submit;
}

  window.onload = doBindings;

function submit() {
  // get the input elements
  const emailInput = document.querySelector('#email');
  const passwordInput = document.querySelector('#password');

  document.querySelector('#signup-form').addEventListener('submit', function(event) {
  // check if either field is empty
  if (!emailInput.value || !passwordInput.value) 
  {
    // show an alert message
    alert('Please enter your email and password.');
    // prevent the form from submitting
    event.preventDefault();
  } 
  else if (!emailInput.checkValidity() || !passwordInput.checkValidity()) 
  {
    // show an alert message for invalid input
    alert('Please enter a valid email and password.');
    // prevent the form from submitting
    event.preventDefault();
  }
  });
  
  }
*/

const form = document.getElementById('signup-form');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const submitBtn = document.getElementById('submit-btn');

function validateForm() {
  let isValid = true;

  if (nameInput.value.trim() === '') {
    nameInput.style.backgroundColor = 'red';
    isValid = false;
  } 
  else {
    nameInput.style.backgroundColor = '#ccc';
  }

  if (emailInput.value.trim() === '') {
    emailInput.style.borderColor = 'red';
    isValid = false;
  } 
  else {
    emailInput.style.borderColor = '#ccc';
  }

  if (passwordInput.value.trim() === '') {
    passwordInput.style.borderColor = 'red';
    isValid = false;
  } 
  else {
    passwordInput.style.borderColor = '#ccc';
  }

  return isValid;
}

submitBtn.addEventListener('click', function(event) {
  if (!validateForm()) {
    event.preventDefault(); 
  }
});
