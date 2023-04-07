const form = document.getElementById("review-form");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const name = form.elements["name"].value;
  const email = form.elements["email"].value;
  const rating = form.elements["rating"].value;
  const comment = form.elements["comment"].value;

  console.log(`Nom : ${name}`);
  console.log(`Email : ${email}`);
  console.log(`Note : ${rating}`);
  console.log(`Commentaire : ${comment}`);

  // Envoyer le formulaire au serveur
  // ...

  // Réinitialiser le formulaire
  form.reset();
});

//CARDS
const users = [
  {
    name: "Alice Smith",
    rating: 4,
    comment: "Super produit, je suis très satisfait!",
  },
  {
    name: "Bob Johnson",
    rating: 3.5,
    comment: "Bon produit, mais il y a encore des améliorations à faire.",
  },
  {
    name: "Charlie Brown",
    rating: 5,
    comment: "Excellent produit, je le recommande fortement!",
  },
  {
    name: "David Lee",
    rating: 2.5,
    comment: "Mauvais produit, j'ai été très déçu.",
  },
  {
    name: "Emma Davis",
    rating: 4.5,
    comment: "Très bon produit, je suis contente de mon achat.",
  },
  {
    name: "Frank Wilson",
    rating: 3,
    comment: "Produit moyen, je m'attendais à mieux.",
  },
];

const cardsContainer = document.querySelector("#cards-container");

users.forEach((user) => {
  const card = document.createElement("div");
  card.classList.add("card");

  const userInfo = document.createElement("div");
  userInfo.classList.add("user-info");

  const userDetails = document.createElement("div");
  userDetails.classList.add("user-details");
  const name = document.createElement("h3");
  name.classList.add("user-name");
  name.textContent = user.name;
  const rating = document.createElement("div");
  rating.classList.add("user-rating");
  const stars = document.createElement("div");
  stars.classList.add("stars");
  const ratingValue = user.rating;
  for (let i = 0; i < 5; i++) {
    const star = document.createElement("span");
    if (i < ratingValue) {
      star.classList.add("fa", "fa-star");
    } else {
      star.classList.add("fa", "fa-star-o");
    }
    stars.appendChild(star);
  }
  rating.appendChild(stars);
  userDetails.appendChild(name);
  userDetails.appendChild(rating);

  userInfo.appendChild(userDetails);

  const comment = document.createElement("div");
  comment.classList.add("user-comment");
  const p = document.createElement("p");
  p.textContent = user.comment;
  comment.appendChild(p);

  card.appendChild(userInfo);
  card.appendChild(comment);

  cardsContainer.appendChild(card);
});
