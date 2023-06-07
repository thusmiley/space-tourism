window.onload = checkActiveMenuTab;

const menuTabs = document.querySelectorAll("nav a");

function checkActiveMenuTab() {
  for (i = 0; i < menuTabs.length; i++) {
    menuTabs[i].classList.remove("active");
  }
  if (document.title.includes("Home")) {
    menuTabs[0].classList.add("active");
  }
  if (document.title.includes("Destination")) {

    menuTabs[1].classList.add("active");
  }
  if (document.title.includes("Crew")) {
    menuTabs[2].classList.add("active");
  }
  if (document.title.includes("Technology")) {
    menuTabs[3].classList.add("active");
  }
}
const destinationTitle = document.getElementById("destination-title");
const destinationIntro = document.getElementById("destination-intro");
const distance = document.getElementById("distance");
const travel = document.getElementById("travel");
const destinationImg = document.getElementById("destination-img");
const activeTabs = document.querySelectorAll('.tab')

function displayDestinations(data) {
  destinationTitle.innerText = data.name;
  destinationIntro.innerText = data.description;
  distance.innerText = data.distance;
  travel.innerText = data.travel;
  console.log(data);
  destinationImg.src = data.images.png;

  for (i = 0; i < activeTabs.length; i++) {
    activeTabs[i].classList.remove("active");
  }
  if (data.name === 'Moon') {
    activeTabs[0].classList.add("active");
  }
  if (data.name === 'Mars') {
    activeTabs[1].classList.add("active");
  }
  if (data.name === 'Europa') {
    activeTabs[2].classList.add("active");
  }
  if (data.name === 'Titan') {
    activeTabs[3].classList.add("active");
  }
}

const crewTitle = document.getElementById("crew-title");
const crewName = document.getElementById("crew-name");
const crewIntro = document.getElementById("crew-intro");
const crewImg = document.getElementById("crew-img");
const activeDots = document.querySelectorAll('.dot')

function displayCrew(data) {
  crewTitle.innerText = data.role;
  crewName.innerText = data.name;
  crewIntro.innerText = data.bio;
  crewImg.src = data.images.png;

  for (i = 0; i < activeDots.length; i++) {
    activeDots[i].classList.remove("active");
  }
  if (data.name === "Douglas Hurley") {
    activeDots[0].classList.add("active");
  }
  if (data.name === "Mark Shuttleworth") {
    activeDots[1].classList.add("active");
  }
  if (data.name === "Victor Glover") {
    activeDots[2].classList.add("active");
  }
  if (data.name === "Anousheh Ansari") {
    activeDots[3].classList.add("active");
  }
}

const techName = document.getElementById("tech-name");
const techIntro = document.getElementById("tech-intro");
const techImgWideScreen = document.getElementById("tech-img-wide-screen");
const techImgNarrowScreen = document.getElementById("tech-img-narrow-screen");
const activeNums = document.querySelectorAll('.num');

function displayTechnology(data) {
  techName.innerText = data.name;
  techIntro.innerText = data.description;

  for (i = 0; i < activeNums.length; i++) {
    activeNums[i].classList.remove("active");
  }
  if (data.name === "Launch vehicle") {
    activeNums[0].classList.add("active");
  }
  if (data.name === "Spaceport") {
    activeNums[1].classList.add("active");
  }
  if (data.name === "Space capsule") {
    activeNums[2].classList.add("active");
  }

  //Handle screen resolutions of the images on Technology
  function selectTechImageSize() {
    if (window.innerWidth > 1200) {
      techImgWideScreen.setAttribute("srcset", data.images.portrait);
    } else {
      techImgNarrowScreen.setAttribute("src", data.images.landscape);
    }
  }
  selectTechImageSize();
  window.onresize = selectTechImageSize;
}

//Parses and saves data
async function getPageData(category, name, callback) {
  fetch("data.json")
    //Parses the json data
    .then((response) => response.json())
    //Calls the callback with the proper data
    .then((data) => {
      for (let item of data[category]) {
        if (item.name === name) {
          // console.log(item);
          callback(item);
        }
      }
    });
}

// Handle mobile menu
const iconOpen = document.querySelector(".icon-ham");
const iconClose = document.querySelector(".icon-close");
const overlayMenu = document.querySelector(".overlay-menu");
const navMobile = document.querySelector(".nav-mobile");

function openNav() {
  iconOpen.classList.add("active");
  iconClose.classList.add("active");
  overlayMenu.classList.add("active");
  navMobile.classList.add("active");
  overlayMenu.style.width = "66%";
}
function closeNav() {
  iconOpen.classList.remove("active");
  iconClose.classList.remove("active");
  overlayMenu.classList.remove("active");
  navMobile.classList.remove("active");
  overlayMenu.style.width = "0";
}
