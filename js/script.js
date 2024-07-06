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
