const header = document.querySelector(".header");
const burger = document.querySelector(".header__burger");
const menu = document.querySelector(".menu");
const navItems = [...document.querySelectorAll(".menu__link")];

window.addEventListener("scroll", () => {
  if (window.scrollY > 0) {
    header.classList.add("header--active");
  } else {
    header.classList.remove("header--active");
  }
});

burger.addEventListener("click", () => {
  burger.classList.toggle("header__burger--active");
  menu.classList.toggle("menu--active");
});

const scrollToSection = (e) => {
  const section = document.querySelector(`.${e.target.dataset.key}`);
  section.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });

  burger.classList.remove("header__burger--active");
  menu.classList.remove("menu--active");
};

navItems.forEach((item) => {
  item.addEventListener("click", scrollToSection);
});
