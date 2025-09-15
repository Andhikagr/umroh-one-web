const navbarLinks = document.querySelector(".nav__drawer");
const hamburgerMenu = document.querySelector("#hamburger-menu");
const overlay = document.querySelector("#overlay");
const navClose = document.querySelector("#nav-close");

hamburgerMenu.addEventListener("click", () => {
  navbarLinks.classList.toggle("active");
  overlay.classList.toggle("active");
  hamburgerMenu.classList.toggle("hidden");
});

overlay.addEventListener("click", () => {
  navbarLinks.classList.remove("active");
  overlay.classList.remove("active");
  hamburgerMenu.classList.remove("hidden");
});

if (navClose) {
  navClose.addEventListener("click", () => {
    navbarLinks.classList.remove("active");
    overlay.classList.remove("active");
    hamburgerMenu.classList.remove("hidden");
  });
}
