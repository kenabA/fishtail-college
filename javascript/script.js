const navBtn = document.querySelector(".btn-mobile-nav");
const header = document.querySelector(".header");

navBtn.addEventListener("click", function () {
  header.classList.toggle("nav-btn-open");
});
