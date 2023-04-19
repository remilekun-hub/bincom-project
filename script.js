const btn = document.querySelector("#btn");
const mobilemenu = document.querySelector("#mobile-menu");
const closebtn = document.querySelector(".close-btn");
const sectionLink = document.querySelectorAll(".section-link");
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");

btn.addEventListener("click", () => mobilemenu.classList.add("showmenu"));

closebtn.addEventListener("click", () =>
  mobilemenu.classList.remove("showmenu")
);

sectionLink.forEach((link) =>
  link.addEventListener("click", () => {
    mobilemenu.classList.remove("showmenu");
  })
);

prev.addEventListener("click", () => {
  plusSlides(-1);
});

next.addEventListener("click", () => {
  plusSlides(1);
});

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides((slideIndex += n));
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}
