const navBtn = document.querySelector(".btn-mobile-nav");
const header = document.querySelector(".header");

navBtn.addEventListener("click", function () {
  header.classList.toggle("nav-btn-open");
  changeScroll();
});

const changeScroll = () => {
  if (header.classList.contains("nav-btn-open")) {
    document.documentElement.style.overflow = "hidden";
    document.addEventListener("keydown", function (event) {
      if (event.keyCode == 27) {
        header.classList.remove("nav-btn-open");
      }
    });
  } else {
    document.documentElement.style.overflow = "scroll";
  }
};
