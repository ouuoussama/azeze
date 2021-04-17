var another = document.getElementById('bg2');
var parallax = document.getElementById('topone');
window.addEventListener('scroll',function(){
    let offset = window.scrollY;
    parallax.style.backgroundPositionY= offset * -.5+ 'px';
    another.style.backgroundPositionY= offset * -.7 + 'px';
})


///// navbar//('//

var navbarSlid = function(){
     var lines = document.querySelector('.lines');
     var nav = document.querySelector('.nav-links')
    var navlinks = document.querySelectorAll('.nav-links li');
     lines.addEventListener('click', function(){
        nav.classList.toggle('nav-active');
          ///animation link
     navlinks.forEach((link, index)=>{
       if (link.style.animation){
        link.style.animation= '';
       } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 +0.3 }s`
       }
    })
    lines.classList.toggle('toggle');
     });
   
}
navbarSlid();