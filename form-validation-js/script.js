// Write the JavaScript code for form validation here

const form = document.getElementById("myForm");
const nameInput = document.getElementById("name-input");
const errorMessage = document.getElementById("error-msg");

form.addEventListener("submit", function (event) {
  if (nameInput.value.trim() === "") {
    event.preventDefault();
    errorMessage.textContent = "Name is required";
  } else {
    errorMessage.textContent = "";
  }
});
