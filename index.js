//Parses and saves data    
let destinations;
let crew;
let technology;
fetch("data.json")
  //Parses the json data
  .then((response) => response.json())
  //Saves the parsed data to the proper variables
  .then((data) => {
            destinations = data.destinations;
            crew = data.crew;
            technology = data.technology;
            //Log for debugging purposes
            console.log(data)
  })

// Handle mobile menu
const iconOpen = document.querySelector('.icon-ham');
const iconClose = document.querySelector('.icon-close');
const overlayMenu = document.querySelector('.overlay-menu');
const navMobile = document.querySelector(".nav-mobile");

function openNav() {
    iconOpen.classList.add('active');
    iconClose.classList.add('active');
    overlayMenu.classList.add('active');
    navMobile.classList.add("active");
    overlayMenu.style.width = '66%';
}
function closeNav() {
    iconOpen.classList.remove('active');
    iconClose.classList.remove("active");
    overlayMenu.classList.remove("active");
    navMobile.classList.remove("active");
    overlayMenu.style.width = '0';
}


