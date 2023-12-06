let currentIndex = 0;
const slides = document.querySelector(".slides");
const totalSlides = document.querySelectorAll(".slides img").length;

document.querySelector(".prev-arrow").addEventListener("click", () => {
  currentIndex = currentIndex === 0 ? totalSlides - 1 : currentIndex - 1;
  updateSlidePosition();
});

document.querySelector(".next-arrow").addEventListener("click", () => {
  currentIndex = currentIndex === totalSlides - 1 ? 0 : currentIndex + 1;
  updateSlidePosition();
});

function updateSlidePosition() {
  slides.style.transform = `translateX(${-currentIndex * 600}px)`; // Adjust the 600px if your images have a different width
}
