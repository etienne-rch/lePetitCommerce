const loginForm = document.getElementById("login-form");

loginForm.addEventListener("submit", function (event) {
  event.preventDefault();
  const email = loginForm.elements["email"].value;
  const password = loginForm.elements["password"].value;

  function validatePassword(motDePasse) {
    // Vérifier la longueur
    if (motDePasse.length < 8) {
      return false;
    }

    // Vérifier la présence d'au moins une majuscule, une minuscule et un chiffre
    var majuscule = false;
    var minuscule = false;
    var chiffre = false;
    for (var i = 0; i < motDePasse.length; i++) {
      var caractere = motDePasse[i];
      if (!majuscule && caractere === caractere.toUpperCase()) {
        majuscule = true;
      } else if (!minuscule && caractere === caractere.toLowerCase()) {
        minuscule = true;
      } else if (!chiffre && !isNaN(parseInt(caractere))) {
        chiffre = true;
      }
    }

    // Vérifier que toutes les conditions sont remplies
    if (majuscule && minuscule && chiffre) {
      return true;
    } else {
      return false;
    }
  }
  // Vérifier les informations de connexion
  if (validateEmail(email) === true && validatePassword(password) === true) {
    alert("Connexion réussie !");
  } else {
    alert("Nom d'utilisateur ou mot de passe incorrect.");
  }
});
