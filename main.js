const hamburger = document.querySelector(".hamburger");
const navbarItems = document.querySelector(".navbar-items");

function openNavbar () {
    hamburger.classList.toggle("active");
    navbarItems.classList.toggle("active");
}

hamburger.addEventListener("click", openNavbar);

document.querySelectorAll(".navbar-items ul li a").forEach(item => 
    item.addEventListener("click", function () {
    hamburger.classList.remove("active");
    navbarItems.classList.remove("active");
}))