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
