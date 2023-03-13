// handel small dvc 
// get hamburger's elements
let navBar = document.querySelector("nav");
let burger = document.querySelector(".hamburger");
let lineOne = document.querySelector(".bar1");
let lineTwo = document.querySelector(".bar2");
let lineThree = document.querySelector(".bar3");

// function for closs burger menu and burger icon
function close (){
    if(lineTwo.className.match("bar2")){
        lineTwo.className= "opacity";
    } else {
        lineTwo.className= "bar2";
    }
    if(lineOne.className.match("bar1") && lineThree.className.match("bar3")){
        lineOne.className="rotate1"
        lineThree.className= "rotate2";
    } else {
        lineOne.className="bar1"
        lineThree.className= "bar3";
    }
}
// add event to call function and make it play 
burger.addEventListener("click", function() {
    burger.style.justifyContent= "center";  
    navBar.classList.toggle("open");
    close();
});

// add event when click on links
let navBarLinks = document.querySelectorAll(".links a");
navBarLinks.forEach(function(el){
    el.addEventListener("click", ()=>{
        navBar.classList.toggle("open");
        close();
    });
});

// screen width 
let windowWidth = window.innerWidth;

if(windowWidth > 991.98){
    burger.remove();
};