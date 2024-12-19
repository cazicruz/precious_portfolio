let head = document.getElementById("header");
let menu = document.querySelector('.menu-icon');
let navbar = document.querySelector('.navbar');


menu.onclick = () => {
    navbar.classList.toggle('open-menu');
    menu.classList.toggle('move');
}
window.addEventListener("scroll", ()=>{
    if(window.pageYOffset > 50){
        head.style.backgroundColor = "#0d0f26"
        head.style.transition = ".4s"
    }

})