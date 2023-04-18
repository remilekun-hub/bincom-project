const btn = document.querySelector("#btn");
const mobilemenu = document.querySelector("#mobile-menu");
const closebtn = document.querySelector(".close-btn");
const sectionLink = document.querySelectorAll(".section-link");

btn.addEventListener("click", () => mobilemenu.classList.add("showmenu"));

closebtn.addEventListener("click", () =>
  mobilemenu.classList.remove("showmenu")
);

sectionLink.forEach((link) =>
  link.addEventListener("click", () => {
    mobilemenu.classList.remove("showmenu");
  })
);
