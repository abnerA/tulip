const navToggle = document.querySelector(".nav-toggle");
const navMenu = document.querySelector(".menu");
const closeToggle = document.querySelector("body");

navToggle.addEventListener("click", (e) => {
  e.stopPropagation();
  navMenu.classList.toggle("menu_visible");

  if (navMenu.classList.contains("nav-menu_visible")) {
    navToggle.setAttribute("aria-label", "Cerrar menú");
  } else {
    navToggle.setAttribute("aria-label", "Abrir menú");
  }
});

closeToggle.addEventListener("click", () => {
  navMenu.classList.remove("menu_visible");
});
