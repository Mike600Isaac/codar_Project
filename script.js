// function eventClicks() {
//   let a = document.querySelector(".a");
// a.addEventListener("click", function() {
//   a.style.backgroundColor="#d4a762";
// })
// }


// for (let i= 0; i < document.querySelectorAll(".clickEve").length; i++) {
//   let allClicks = document.querySelectorAll(".clickEve")[i];
//   allClicks.addEventListener("click", eventClicks);

//   function eventClicks(e) {
//     e.target.classList.toggle("eBColor");
//   }
// }
// switch (key) {
//   case value:
    
//     break;

//   default:
//     break;
// }


let tabLinks = document.getElementsByClassName('clickEve');
let tabContents  = document.getElementsByClassName('tab-contents');

function openTab(tabName) {
  for(tab of tabLinks) {
    tab.classList.remove("active-link");
  }
  for(content of tabContents) {
    content.classList.remove("active-tab");
  } 
  event.currentTarget.classList.add("active-link");
  document.getElementById(tabName).classList.add('active-tab')
}

function removeClass() {
  alert("Am working on it.......")
}