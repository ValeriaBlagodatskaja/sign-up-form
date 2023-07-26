const form = document.getElementById("registrationForm");
const passwordInput = document.getElementById("password");
const confirmPasswordInput = document.getElementById("confirm_password");
const passwordMatchMessage = document.getElementById("passwordMatchMessage");

function checkPasswordMatch() {
  const password = passwordInput.value;
  const confirm_password = confirmPasswordInput.value;

  if (password === confirm_password) {
    confirmPasswordInput.setCustomValidity("");
    passwordMatchMessage.innerTML = "";
  } else {
    confirmPasswordInput.setCustomValidity("Passwords do not match");

    passwordMatchMessage.innerHTML = "*Passwords do not match";
  }
}
console.log(confirmPasswordInput);
confirmPasswordInput.addEventListener("blur", () => checkPasswordMatch());

form.addEventListener("submit", (e) => {
  if (!form.checkValidity()) {
    e.preventDefault();
  }
});
