const navToggler = document.querySelector(".main-header .hamburger");
navToggler.addEventListener("click", () => {
  document.documentElement.classList.toggle("menu-open");
});
