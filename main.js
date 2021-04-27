var button = document.querySelector(".navbar-toggler");
var menu =document.querySelector("#navbarTogglerDemo01");
button.addEventListener("click", function(event){
    if (menu.style.display == "none") {
        menu.style.display = "";
    } else {
        menu.style.display = "none";
    }
})