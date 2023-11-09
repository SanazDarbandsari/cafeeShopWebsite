
let search = document.querySelector('#search-box');
let navbar = document.querySelector('.navbar');
let header=document.querySelector('header');
document.querySelector('#search-icon').onclick = () => {
    search.classList.toggle('active');
    navbar.classList.remove('active');
}



document.querySelector('#menu-icon').onclick = () => {
    navbar.classList.toggle('active');
    search.classList.remove('active');
}
window.onscroll = () => {
    navbar.classList.remove('active');
    search.classList.remove('active');
}




window.addEventListener('scroll', () =>{
    header.classList.toggle('shadow',window.scrollY > 0);
});


function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }

