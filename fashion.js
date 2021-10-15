const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const navLink = document.querySelectorAll(".nav-link");

hamburger.addEventListener("click", mobileMenu);
// navLink.forEach(n => n.addEventListener("click", closeMenu));

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}

////// Modal Images ///////
var modal = document.getElementById('myModal');

var img= [document.getElementById('myImg'), document.getElementById('myImg2'), document.getElementById('myImg3'), document.getElementById('myImg4'),document.getElementById('myImg5'),document.getElementById('myImg6'),document.getElementById('myImg7'),document.getElementById('myImg8'),document.getElementById('myImg9'),document.getElementById('myImg10')];
var modalImg = document.getElementById('img01');
for( var i=0; i<10; i++){
    img[i].onclick = function (){
        modal.style.display = "block";
        modalImg.src = this.src;
    }
}

var span = document.getElementsByClassName('close')[0];

span.onclick = function (){
    modal.style.display = "none";
}

