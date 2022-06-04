const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");

//Show input error message
function showError(input, message) {
  const formControl = input.parentElement;
  formControl.className = "form-control error";
  const small = formControl.querySelector("small");
  small.innerText = message;
}

//Show success outline
function showSuccess(input) {
  const formControl = input.parentElement;
  formControl.className = "form-control success";
}

//Check valid email
function isValidEmail(email) {
  const re =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  return re.test(String(email).toLocaleLowerCase());
}

form.addEventListener("submit", function (e) {
  e.preventDefault();
  //console.log(username.value);

  //username
  if (username.value === "") {
    showError(username, "Username is required!");
  } else {
    showSuccess(username);
  }

  //email
  if (email.value === "") {
    showError(email, "Email is required!");
  } else if (!isValidEmail(email.value)) {
    showError(email, "Email is not valid!");
  } else {
    showSuccess(email);
  }

  //password
  if (password.value === "") {
    showError(password, "Password is required!");
  } else {
    showSuccess(password);
  }

  //password2
  if (password2.value === "") {
    showError(password2, "Password confirmation is required!");
  } else {
    showSuccess(password2);
  }
});
