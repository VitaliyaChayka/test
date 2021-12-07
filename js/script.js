"use strict";

///////////burger///////

$(document).ready(function(){
   $('.header__burger').click(function(event){
     $('.header__burger, .nav').toggleClass('active');
     $('body').toggleClass('lock');
   });
 });


 $(document).ready(function() {
    $('.nav__link').click(function(event) {
        $('.header__burger, .nav').removeClass('active');
        $('body').removeClass('lock');
    });
});

////////////////////////// header fon/////

 $(window).on("scroll", function() {
  $('.header').toggleClass("active2", $(this).scrollTop() > $(window).height() / 5);
});


////////////////////////////////// icon scrollup///////

let upBtn = document.getElementById ('scrollup');
window.addEventListener('scroll', function(){
    if (wHeight < window.scrollY){
        upBtn.classList.add('scrollup_active')
    }
    else {
        upBtn.classList.remove('scrollup_active')

    }
})

let wHeight = window.innerHeight;
window.addEventListener('resize', function(){
    wHeight = window.innerHeight;
})

//////////////////////////// behavior: 'smooth'////////
let sectionHight = 0
for (let link of document.getElementsByClassName('nav_link')){
    link.addEventListener('click', function(e){
        e.preventDefault();
        let id_section = this.getAttribute('href') //#section
        let pos = document.querySelector(id_section).getBoundingClientRect();
        window.scrollTo({
        top: document.querySelector(id_section).offsetTop - 110,
        left: 0,
        behavior: 'smooth'
    });
    })
}
////////////////////////animation///
var button = document.querySelector(".info__block_btn");

button.onmousemove = (e) => {
   var x = e.pageX - e.target.offsetLeft;
   var y = e.pageY - e.target.offsetTop;

   button.style.setProperty("--x", x + "px");
   button.style.setProperty("--y", y + "px");
};
