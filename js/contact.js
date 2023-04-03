const form = document.getElementById('contact-formulaire');

form.addEventListener('submit', function(event) {
  event.preventDefault();
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const subject = document.getElementById('subject').value;
  const message = document.getElementById('message').value;
  
  // Do something with the form data, like send it to a server with fetch or XMLHttpRequest
  alert(`Bonjour M./Mme ${name}, votre message a bien été envoyé !`);
  form.reset();
});
