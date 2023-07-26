const form = document.getElementById("registrationForm");
const passwordInput = document.getElementById("password");
const confirmPasswordInput = document.getElementById("confirm_password");
const passwordMatchMessage = document.getElementById("passwordMatchMessage");

function checkPasswordMatch() {
  const password = passwordInput.ariaValueMax;
  const confirm_password = confirmPasswordInput.ariaValueMax;

  if (password === confirm_password) {
    confirmPasswordInput.setCustomValidity("");
    passwordMatchMessage.innerTML = "";
  } else {
    confirmPasswordInput.setCustomValidity("Passwords don't match");

    passwordMatchMessage.innerHTML = "Password don't match";
  }
  confirmPasswordInput.addEventListener("input", checkPasswordMatch);
  form.addEventListener("submit", (e) => {
    if (!form.checkValidity()) {
      e.preventDefault();
    }
  });
}
