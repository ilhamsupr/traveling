//================= Hamburger =================//

document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.getElementById("hamburger");
  const close = document.getElementById("close");
  const navUl = document.querySelector(".nav .nav__list");
  const navLinks = document.querySelectorAll(
    ".nav .nav__list .nav__item .nav__link"
  );

  hamburger.addEventListener("click", function () {
    navUl.classList.toggle("show");
  });

  close.addEventListener("click", function () {
    navUl.classList.remove("show");
  });

  navLinks.forEach((link) => {
    link.addEventListener("click", function () {
      navUl.classList.remove("show");
    });
  });
});
