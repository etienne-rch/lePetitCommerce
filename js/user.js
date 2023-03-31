// const loginForm = document.getElementById("login-form");
// 		loginForm.addEventListener("submit", function(event) {
// 			event.preventDefault();
// 			const username = loginForm.elements["username"].value;
// 			const password = loginForm.elements["password"].value;

// 			// Vérifier les informations de connexion
// 			// (remplacez ce code par votre propre code de vérification)

// 			if (username === "mon_nom_utilisateur" && password === "mon_mot_de_passe") {
// 				alert("Connexion réussie !");
// 			} else {
// 				alert("Nom d'utilisateur ou mot de passe incorrect.");
// 			}
// 		});


const loginForm = document.getElementById("login-form");

loginForm.addEventListener("submit", function(event) {
	event.preventDefault();
	const email = loginForm.elements["email"].value;
	const password = loginForm.elements["password"].value;

	// Vérifier les informations de connexion
	// (remplacez ce code par votre propre code de vérification)

	if (email === "mon_nom_utilisateur" && password === "mon_mot_de_passe") {
		alert("Connexion réussie !");
	} else {
		alert("Nom d'utilisateur ou mot de passe incorrect.");
	}
});





