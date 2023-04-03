const select = document.getElementById("taille");
select.addEventListener("change", function() {
  const selectedSize = select.value;
  console.log(`La taille sélectionnée est : ${selectedSize}`);
});

const inputQuantite = document.getElementById("quantite");
const btnMoins = document.querySelector(".btn-moins");
const btnPlus = document.querySelector(".btn-plus");

btnMoins.addEventListener("click", function() {
  if (inputQuantite.value > 1) {
    inputQuantite.value--;
  }
});

btnPlus.addEventListener("click", function() {
  inputQuantite.value++;
});

inputQuantite.addEventListener("change", function() {
  const quantite = inputQuantite.value;
});

