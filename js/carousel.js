// const images = document.querySelectorAll('.carousel img');
// let currentImgIndex = 0;
// const maxImgIndex = images.length - 1;

// function showNextImg() {
//   images[currentImgIndex].classList.remove('active');
//   currentImgIndex = currentImgIndex === maxImgIndex ? 0 : currentImgIndex + 1;
//   images[currentImgIndex].classList.add('active');
// }

// setInterval(showNextImg, 3000);

const carousel = document.querySelector(".carousel");
const carouselInner = document.querySelector(".carousel-inner");
const images = carouselInner.querySelectorAll("img");
const imageWidth = carousel.offsetWidth;
let currentImageIndex = 0;

function updateCarousel() {
  carouselInner.style.transform = `translateX(-${currentImageIndex * imageWidth}px)`;
}

setInterval(() => {
  currentImageIndex = (currentImageIndex + 1) % images.length;
  updateCarousel();
}, 3000);
