var typed = new Typed('#element', {
    strings: ['<i>web</i> developer.', '&amp; web designer.','<i>web</i> developer.', '&amp; web designer.','<i>web</i> developer.', '&amp; web designer.','<i>web</i> developer.', '&amp; web designer.','<i>web</i> developer.', '&amp; web designer.','<i>web</i> developer.', '&amp; web designer.','<i>web</i> developer.', '&amp; web designer.','<i>web</i> developer.', '&amp; web designer.','<i>web</i> developer.', '&amp; web designer.','<i>web</i> developer.', '&amp; web designer.'],
    typeSpeed: 50,
});

let showMenu = document.querySelector(".show-menu");
let hideMenu = document.querySelector(".hide-menu");
let menuBar = document.querySelector(".mobile-menu");

function mobileMenu() {
    showMenu.addEventListener("click", function() {
        menuBar.style.display = "block"
    })
    
    hideMenu.addEventListener("click", function() {
        menuBar.style.display = "none"
    })
}

mobileMenu()