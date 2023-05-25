let menubar = document.querySelector('#menu-bars')
let mynav = document.querySelector('.navbar');

menubar.onclick = () =>{
    menubar.classList.toggle('fa-times');
    mynav.classList.toggle('active');
}

var button = document.getElementById("myButton");

button.addEventListener("click", function() {
 
  button.innerHTML = "Ordered";
});