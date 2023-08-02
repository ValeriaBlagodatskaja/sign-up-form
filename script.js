const form = document.getElementById("registrationForm");
const passwordInput = document.getElementById("password");
const confirmPasswordInput = document.getElementById("confirm_password");
const passwordMatchMessage = document.getElementById("passwordMatchMessage");
const emailInput = document.getElementById("mail");
const firstnameInput = document.getElementById("first_name");
const lastnameInput = document.getElementById("last_name");
const phoneNumberInput = document.getElementById("phone_number");

const validate = () => {
  const first_name = firstnameInput.value.trim();
  const email = emailInput.value.trim();
  const last_name = lastnameInput.value.trim();
  const phone_number = phoneNumberInput.value.trim();
};

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
  validate();
});
