const siteName = "CoolPals";
const h1 = document.querySelector(".heading-primary");

// h1.addEventListener("click", () => {
//   h1.textContent = siteName;
//   h1.style.padding = '5rem'
//   h1.style.backgroundColor = "red";
// });

// set current year
const yearEl = document.querySelector(".year");
const currentYear = new Date().getFullYear();
yearEl.textContent = currentYear;

// mobile navigation
const btnNavEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector('.header')
btnNavEl.addEventListener('click', ()=> headerEl.classList.toggle('nav-open'))

function checkFlexGap() {
  var flex = document.createElement("div");
  flex.style.display = "flex";
  flex.style.flexDirection = "column";
  flex.style.rowGap = "1px";

  flex.appendChild(document.createElement("div"));
  flex.appendChild(document.createElement("div"));

  document.body.appendChild(flex);
  var isSupported = flex.scrollHeight === 1;
  flex.parentNode.removeChild(flex);
  console.log(isSupported);

  if (!isSupported) document.body.classList.add("no-flexbox-gap");
}
checkFlexGap();
