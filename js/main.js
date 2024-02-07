// script для click по бургер-меню
const menuBtn = document.querySelector(".btn-menu");
const menuMobile = document.querySelector(".header-menu-list-mob");

menuBtn.addEventListener("click", () => {
  menuMobile.classList.toggle("menu-open");
});
