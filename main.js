const hamburger = document.querySelector(".hamburger");
const navbarItems = document.querySelector(".navbar-items");

function openNavbar () {
    hamburger.classList.toggle("active");
    navbarItems.classList.toggle("active");
}

hamburger.addEventListener("click", openNavbar);

document.querySelectorAll(".navbar-items li a").forEach(item => 
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

document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contactForm');

    emailjs.init('aNY0-EMR99N3Lj_BE');

    contactForm.addEventListener('submit', (event) => {
        event.preventDefault();

        const form = event.target;

    
        const formData = {
            depart: form.depart.value, 
            destination: form.destination.value,
            name: form.name.value,
            phone: form.phone.value,
            message: form.description.value,
        };

        emailjs
            .send('service_g3kgo4c', 'template_ocpvvym', formData)
            .then(() => {
                alert('Votre message a été envoyé avec succès !');
                form.reset();
            })
            .catch((error) => {
                console.error('Error:', error);
                alert('Une erreur est survenue. Veuillez réessayer plus tard.');
            });
    });
});