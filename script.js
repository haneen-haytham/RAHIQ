// ---------- Mobile menu ----------
const hamburger = document.getElementById("hamburger");
const menu = document.getElementById("menu");

hamburger.addEventListener("click", function () {
  const isOpen = menu.classList.toggle("open");
  hamburger.classList.toggle("open", isOpen);
  hamburger.setAttribute("aria-expanded", isOpen);
});

// Close the menu after tapping a link
menu.querySelectorAll("a").forEach(function (link) {
  link.addEventListener("click", function () {
    menu.classList.remove("open");
    hamburger.classList.remove("open");
    hamburger.setAttribute("aria-expanded", "false");
  });
});

// ---------- Find your scent ----------
const moods = document.querySelectorAll(".mood");
const result = document.getElementById("mood-result");

const messages = {
  Romantic: "Romantic: soft florals and warm vanilla. Look at VELVET BLOOM.",
  Bold: "Bold: deep, spicy and unforgettable. Look at SILVER VEIL.",
  Fresh: "Fresh: clean, airy and easy to wear. Look at AMBER DUSK."
};

moods.forEach(function (mood) {
  mood.addEventListener("click", function () {
    // Only one mood can be selected at a time
    moods.forEach(function (m) {
      m.setAttribute("aria-pressed", "false");
    });
    mood.setAttribute("aria-pressed", "true");
    result.textContent = messages[mood.dataset.mood];
  });
});
