const cards = document.querySelectorAll(".slider .card");
let currentIndex = 1;

function updateCards() {
  cards.forEach((card, index) => {
    card.classList.remove("left", "active", "right");
    if (index === currentIndex) {
      card.classList.add("active");
    } else if (index === (currentIndex + 1) % cards.length) {
      card.classList.add("right");
    } else {
      card.classList.add("left");
    }
  });
}

document
  .querySelectorAll(".card-button, .card-button-active")
  .forEach((button) => {
    button.addEventListener("click", () => {
      currentIndex = (currentIndex + 1) % cards.length;
      updateCards();
    });
  });

updateCards();
document.addEventListener("DOMContentLoaded", function () {
  const prevButton = document.getElementById("testimonial-prev");
  const nextButton = document.getElementById("testimonial-next");
  const testimonialSlider = document.querySelector(".testimonial-slider");
  const testimonials = document.querySelectorAll(".testimonial-card");
  let currentIndex = 0;

  function updateSlider() {
    const translateX =
      -currentIndex * (testimonialSlider.clientWidth / testimonials.length);
    testimonialSlider.style.transform = `translateX(${translateX}px)`;
  }

  prevButton.addEventListener("click", function () {
    currentIndex =
      currentIndex > 0 ? currentIndex - 1 : testimonials.length - 1;
    updateSlider();
  });

  nextButton.addEventListener("click", function () {
    currentIndex =
      currentIndex < testimonials.length - 1 ? currentIndex + 1 : 0;
    updateSlider();
  });
});
