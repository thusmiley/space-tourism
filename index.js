const destinationTitle = document.getElementById("destination-title");
const destinationIntro = document.getElementById("destination-intro");
const distance = document.getElementById("distance");
const travel = document.getElementById("travel");
const destinationImg = document.getElementById("destination-img");

function displayDestinations(data) {
  destinationTitle.innerText = data.name;
  destinationIntro.innerText = data.description;
  distance.innerText = data.distance;
  travel.innerText = data.travel;
  console.log(data)
  destinationImg.src = data.images.png;
}

const crewTitle = document.getElementById("crew-title");
const crewName = document.getElementById("crew-name");
const crewIntro = document.getElementById("crew-intro");
const crewImg = document.getElementById("crew-img");

function displayCrew(data) { 
  crewTitle.innerText = data.role;
  crewName.innerText = data.name;
  crewIntro.innerText = data.bio;
  crewImg.src = data.images.png;
}

const techName = document.getElementById("tech-name");
const techIntro = document.getElementById("tech-intro");
const techImg = document.getElementById("tech-img");


function displayTechnology(data) {
  techName.innerText = data.name;
  techIntro.innerText = data.description;
  // techImg.src = data.images.portrait;
  //Handle screen resolutions of the images on Technology
  window.onresize = function () {
    if (window.innerWidth < 1200) {
      techImg.setAttribute("src", data.images.portrait);
    } else {
      techImg.setAttribute("src", data.images.landscape);
      // image.setAttribute("src", "image.jpg");
    }
  };
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
