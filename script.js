const form = document.getElementById("registrationForm");
const passwordInput = document.getElementById("password");
const confirmPasswordInput = document.getElementById("confirm_password");
const passwordMatchMessage = document.getElementById("passwordMatchMessage");

function checkPasswordMatch() {
  const password = passwordInput.value;
  const confirm_password = confirmPasswordInput.value;
  console.log(confirmPasswordInput.value);
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
function validate() {
  if (document.registrationForm.Name.value == "") {
    alert("Please provide your name!");
    document.registrationForm.Name.focus();
    return false;
  }
  if (document.registrationForm.EMail.value == "") {
    alert("Please provide your Email!");
    document.registrationForm.EMail.focus();
    return false;
  }
}
.addEventListener("blur", () => )
