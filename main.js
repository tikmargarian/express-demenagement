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
}));


const container = document.querySelector('.reviews');
        const prev = document.querySelector('.prev');
        const next = document.querySelector('.next');
        
next.addEventListener('click', () => {
    container.scrollBy({ left: 320, behavior: 'smooth' });
});
        
prev.addEventListener('click', () => {
    container.scrollBy({ left: -320, behavior: 'smooth' });
});

const avatars = document.querySelectorAll(".avatar");
avatars[0].style.backgroundColor = "#d62f2f";
avatars[1].style.backgroundColor = "#8dc63f";
avatars[2].style.backgroundColor = "#ffce40";
avatars[3].style.backgroundColor = "#044944";
avatars[4].style.backgroundColor = "#8bc24a";
avatars[5].style.backgroundColor = "#254bdd";

