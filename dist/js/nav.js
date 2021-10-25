let toggleMenu = document.querySelector(".menu");

let navBar = document.querySelector("nav");

toggleMenu.addEventListener("click", () => {
  navBar.classList.toggle("active");
});

const subMenu = document.querySelector(".submenu");
const menuItems = document.querySelector(".submenu__lists");

subMenu.addEventListener("click", () => {
  menuItems.classList.toggle("toggle");
});
