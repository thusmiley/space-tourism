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

// Handle data updates
// async function loadDefault() {
    //   const response = await fetch("./data.json");
    //   const data = await JSON.parse(response);
    // //   data.push(...parsedReponse);
    //   firstLoad();
    //   console.log(data.destinations);
    // }
let destinations = [];
let crew = [];
let technology = [];
fetch("./data.json")
  .then((response) => response.json())
//   .then((json) => data = json);
    .then((json) => {
        console.log(json)
        destinations.push(json.destinations);
        crew.push(json.crew);
        technology.push(json.technology);
    });
console.log(destinations[0][0].name);