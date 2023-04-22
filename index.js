//Write callbacks here for how to display data for each category (destinations, crew, technologies)
//Each callback should take a single argument -data- which is the specific data object needed for it (i.e. {name: 'Moon', description:'...'})
//To use, in each html page call getPageData(category, name, callback). For example: getPageData('destinations', 'Moon', displayDestinations)
function displayDestinations(data){

}

function displayCrew(data){

}

function displayTechnology(data){

}

//Parses and saves data    
async function getPageData(category, name, callback){
  fetch("data.json")
  //Parses the json data
  .then((response) => response.json())
  //Calls the callback with the proper data
  .then((data) => {
      for(let item of data[category]){
        if(item.name === name){
          console.log(item)
          callback(item.name);
        }
      }
  })
}

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