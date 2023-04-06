const spaceHolder = document.querySelector(".space-holder");
const horizontal = document.querySelector(".horizontal");
spaceHolder.style.height = `${calcDynamicHeight(horizontal)}px`;

function calcDynamicHeight(ref) {
  const vw = window.innerWidth;
  const vh = window.innerHeight;
  const objectWidth = ref.scrollWidth;
  return objectWidth - vw + vh + 150; // 150 is the padding (in pixels) desired on the right side of the .cards container. This can be set to whatever your styles dictate
}

window.addEventListener("scroll", () => {
  const sticky = document.querySelector(".sticky");
  horizontal.style.transform = `translateX(-${sticky.offsetTop}px)`;
});

window.addEventListener("resize", () => {
  spaceHolder.style.height = `${calcDynamicHeight(horizontal)}px`;
});

//CALENDAR
const monthNames = [
  "Janvier",
  "Février",
  "Mars",
  "Avril",
  "Mai",
  "Juin",
  "Juillet",
  "Août",
  "Septembre",
  "Octobre",
  "Novembre",
  "Décembre",
];

const weekdays = ["Dim", "Lun", "Mar", "Mer", "Jeu", "Ven", "Sam"];

const calendar = document.querySelector(".calendar");
const date = calendar.querySelector(".date h1");
const days = calendar.querySelector(".days");

const prevBtn = calendar.querySelector(".prev");
const nextBtn = calendar.querySelector(".next");

let selectedDate = null;

function initCalendar() {
  // Initialisation du calendrier avec la date actuelle
  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth();

  selectedDate = today;

  updateCalendar(year, month);
}

function updateCalendar(year, month) {
  // Mise à jour du calendrier avec l'année et le mois donnés
  const firstDayOfMonth = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  // Mettre à jour le mois et l'année affichés
  date.textContent = `${monthNames[month]} ${year}`;

  // Vider les jours précédents
  days.innerHTML = "";

  // Ajouter les jours du mois au calendrier
  for (let i = 0; i < firstDayOfMonth; i++) {
    const day = document.createElement("div");
    days.appendChild(day);
  }

  for (let i = 1; i <= daysInMonth; i++) {
    const day = document.createElement("div");
    day.textContent = i;
    day.addEventListener("click", selectDate);
    if (
      selectedDate &&
      selectedDate.getDate() === i &&
      selectedDate.getMonth() === month &&
      selectedDate.getFullYear() === year
    ) {
      day.classList.add("selected");
    }
    if (isToday(year, month, i)) {
      day.classList.add("today");
    }
    days.appendChild(day);
  }
}

function isToday(year, month, day) {
  // Vérifier si la date donnée est la date actuelle
  const today = new Date();
  return (
    today.getFullYear() === year &&
    today.getMonth() === month &&
    today.getDate() === day
  );
}

function selectDate() {
  // Sélectionner une date dans le calendrier
  const prevSelected = days.querySelector(".selected");
  if (prevSelected) {
    prevSelected.classList.remove("selected");
  }
  this.classList.add("selected");
  const year = parseInt(date.textContent.split(" ")[1]);
  const month = monthNames.indexOf(date.textContent.split(" ")[0]);
  selectedDate = new Date(year, month, parseInt(this.textContent));
}

prevBtn.addEventListener("click", () => {
  // Aller au mois précédent
  const year = selectedDate.getFullYear();
  const month = selectedDate.getMonth() - 1;
  updateCalendar(year, month);
});

nextBtn.addEventListener("click", () => {
  // Aller au mois suivant
  const year = selectedDate.getFullYear();
  const month = selectedDate.getMonth() + 1;
  updateCalendar(year, month);
});

initCalendar();
