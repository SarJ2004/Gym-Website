const toggleButton = document.querySelector(".toggle-btn");
const toggleBtnIcon =  document.querySelector(".toggle-btn i");
const header =  document.querySelector("header");
const dropDownMenu = header.querySelector("div:nth-child(5)");


toggleButton.addEventListener("click", (event)=>{
    dropDownMenu.classList.toggle("open");
    const isOpen = dropDownMenu.classList.contains("open");
 
     if(isOpen)
     {
         toggleBtnIcon.classList.remove('fa','fa-bars');
         toggleBtnIcon.classList.add('fa','fa-times');
         
     }
     else{
         // toggleBtnIcon.classList = "fa fa-bars"
         toggleBtnIcon.classList.add('fa','fa-bars');
     }
 })

//  BTT:
// Get the button:
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 60px from the top of the document, show the button
window.onscroll = function() {
    scrollFunction()
};

function scrollFunction() {
  if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

// NAV:
