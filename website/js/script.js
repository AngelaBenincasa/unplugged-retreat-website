//hamburger menu / bar icon
const menuIcon = document.querySelector
(".hamburger-menu");
const container = document.querySelector(".container");
const navbar = document.querySelector(".navbar");

menuIcon.addEventListener("click", ()=> {
  container.classList.toggle("change");
  navbar.classList.toggle("change");
})
