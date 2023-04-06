const carousel = document.querySelector(".carousel-slide");
const carouselInner = document.querySelector(".carousel-slide-inner");
const images = carouselInner.querySelectorAll("img");
const imageWidth = carousel.offsetWidth;
let currentImageIndex = 0;

function updateCarousel() {
  carouselInner.style.transform = `translateX(-${
    currentImageIndex * imageWidth
  }px)`;
}

setInterval(() => {
  currentImageIndex = (currentImageIndex + 1) % images.length;
  updateCarousel();
}, 3000);

//BOOTSTRAP CAROUSEL//
const myCarouselElement = document.querySelector("#myCarousel");

const bootstrapCarousel = new bootstrap.Carousel(myCarouselElement, {
  interval: 4000,
  pause: "hover",
});
