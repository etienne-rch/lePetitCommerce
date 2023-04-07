let prevBtn = document.querySelector(".prev-btn");
let nextBtn = document.querySelector(".next-btn");
let positionImage = 1;

const queryString = window.location.search;
console.log("query", queryString);

const urlParams = new URLSearchParams(queryString);
const productName = urlParams.get("productName");
const productTitle = urlParams.get("title");
const productPrice = urlParams.get("price");
const productDescription = urlParams.get("description");

function buildSrcImage(position) {
  return `../assets/img/Sweat/${productName}/${position}.webp`;
}

const productImageElement = document.querySelector("#product-image");
const productTitleElement = document.querySelector("#product-title");
const productPriceElement = document.querySelector("#product-price");
const productDescriptionElement = document.querySelector(
  "#product-description"
);

productImageElement.src = buildSrcImage(1);
productTitleElement.innerHTML = productTitle;
productPriceElement.innerHTML = productPrice;
productDescriptionElement.innerHTML = productDescription;

function changeCarouselImage(src) {
  let slideActive = document.querySelector(".slide-active");
  slideActive.src = src;
}

prevBtn.onclick = () => {
  if (positionImage - 1 < 0) {
    positionImage = 4;
  }
  const newPositionImage = positionImage - 1 === 0 ? 1 : positionImage - 1;
  const src = buildSrcImage(newPositionImage);
  changeCarouselImage(src);
  positionImage -= 1;
};

nextBtn.onclick = () => {
  if (positionImage + 1 > 3) {
    positionImage = 0;
  }
  const newPositionImage = positionImage + 1 === 3 ? 3 : positionImage + 1;
  const src = buildSrcImage(newPositionImage);
  changeCarouselImage(src);
  positionImage += 1;
};
