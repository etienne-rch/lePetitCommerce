let button = document.querySelector("#subscribe");

button.addEventListener("click", () => {
  const mail = document.querySelector(".email").value;
  return validateEmail(mail);
});
