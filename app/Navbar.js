const menuIcon = document.querySelector(".menu-icon");
const navbar = document.querySelector(".navbar");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links li");

menuIcon.addEventListener("click", () => {
  navbar.classList.toggle("active");
  navLinks.classList.toggle("active");
  links.forEach(link => {
    link.classList.toggle("fade");
  });
});
  