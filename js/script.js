////////////////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////////////////
// -------------=====typing animation ===----------------
var typed = new Typed(".typing", {
  strings: [
    "",
    "Web Developer 🙂",
    "React Developer 😀",
    "JavaScript Engineer 😎 😉",
    "Next Developer 😊",
    "MERN Stack Developer 😃",
  ],
  typeSpeed: 100,
  BackSpeed: 60,
  loop: true,
});
////////////////////////////////////////////////////////////////////////////////
const nav = document.querySelector(".nav");
const navList = document.querySelectorAll("li");
const allSection = document.querySelectorAll(".section");
const totalNavList = navList.length;
const totalSection = allSection.length;

for (let i = 0; i < totalNavList; i++) {
  const a = navList[i].querySelector("a");

  a.addEventListener("click", function () {
    removeBackSection();
    for (let j = 0; j < totalNavList; j++) {
      if (navList[j].querySelector("a").classList.contains("active")) {
        addBackSection(j);
        // allSection[j].classList.add("back-section");
      }
      navList[j].querySelector("a").classList.remove("active");
    }
    this.classList.add("active");
    showSection(this);
    if (window.innerWidth < 1200) {
      asideSectionTogglerBtn();
    }
  });
}

function removeBackSection() {
  for (let i = 0; i < totalSection; i++) {
    allSection[i].classList.remove("back-section");
  }
}

function addBackSection(n) {
  allSection[n].classList.add("back-section");
}

function showSection(element) {
  for (let i = 0; i < totalSection; i++) {
    allSection[i].classList.remove("active");
  }

  const target = element.getAttribute("href").split("#")[1];
  document.querySelector("#" + target).classList.add("active");
}
///////////////////NAVBAR
function updateNav(element) {
  for (let i = 0; i < totalNavList; i++) {
    navList[i].querySelector("a").classList.remove("active");
    const target = element.getAttribute("href").split("#")[1];
    if (
      target ===
      navList[i].querySelector("a").getAttribute("href").split("#")[1]
    ) {
      navList[i].querySelector("a").classList.add("active");
    }
  }
}

document.querySelector(".hire-me").addEventListener("click", function () {
  const sectionIndex = this.getAttribute("data-section-index");
  showSection(this);
  updateNav(this);
  removeBackSection();
  addBackSection(sectionIndex);
});

const navTogglerBtn = document.querySelector(".nav-toggler"),
  aside = document.querySelector(".aside");

navTogglerBtn.addEventListener("click", () => {
  asideSectionTogglerBtn();
});

function asideSectionTogglerBtn() {
  aside.classList.toggle("open");
  navTogglerBtn.classList.toggle("open");
  for (let i = 0; i < totalSection; i++) {
    allSection[i].classList.toggle("open");
  }
}
// OPTIMIZATION NEW FEATURES
// function showSection(element) {
//   allSection.forEach(function (e) {
//     e.classList.remove("active");
//   });
//   const target = element.getAttribute("href").split("#")[1];
//   document.querySelector("#" + target).classList.add("active");
// }
// navList.forEach((e) => {
//   e.querySelector("a").addEventListener("click", function () {
//     navList.forEach(function (e) {
//       if (e.querySelector("a").classList.contains("active")) {
//         allSection.forEach(function (s) {
//           s.classList.add("back-section");
//         });
//       }
//       e.querySelector("a").classList.remove("active");
//     });

//     this.classList.add("active");
//     showSection(this);
//   });
// });
////////////////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
