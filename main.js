// Fonction pour gérer les accordéons
function toggleAccordion(button) {
    const content = button.nextElementSibling;
    const isActive = button.classList.contains('active');
    
    // Fermer tous les accordéons du même niveau
    const parent = button.closest('.accordion-item').parentElement;
    const siblings = parent.querySelectorAll(':scope > .accordion-item > .accordion-header');
    
    siblings.forEach(sibling => {
        if (sibling !== button) {
            sibling.classList.remove('active');
            sibling.nextElementSibling.classList.remove('active');
        }
    });
    
    // Toggle l'accordéon cliqué
    if (isActive) {
        button.classList.remove('active');
        content.classList.remove('active');
    } else {
        button.classList.add('active');
        content.classList.add('active');
    }
}

// Toggle menu mobile
function toggleMenu() {
    const menu = document.getElementById('menu');
    menu.classList.toggle('active');
}

// Fermer le menu après clic sur un lien
function closeMenu() {
    const menu = document.getElementById('menu');
    if (window.innerWidth <= 768) {
        menu.classList.remove('active');
        // Fermer tous les sous-menus
        document.querySelectorAll('.dropdown').forEach(dropdown => {
            dropdown.classList.remove('active');
        });
    }
}

// Gérer la soumission du formulaire
function handleSubmit(event) {
    event.preventDefault();
    alert('Message envoyé !');
    event.target.reset();
}

// Variables du carrousel
let currentSlide = 0;
let autoSlideInterval;

function changeSlide(direction) {
    const slides = document.querySelectorAll('.carousel-slide');
    const indicators = document.querySelectorAll('.indicator');
    
    slides[currentSlide].classList.remove('active');
    indicators[currentSlide].classList.remove('active');
    
    currentSlide = (currentSlide + direction + slides.length) % slides.length;
    
    slides[currentSlide].classList.add('active');
    indicators[currentSlide].classList.add('active');

    resetAutoSlide();
}

function goToSlide(index) {
    const slides = document.querySelectorAll('.carousel-slide');
    const indicators = document.querySelectorAll('.indicator');
    
    slides[currentSlide].classList.remove('active');
    indicators[currentSlide].classList.remove('active');
    
    currentSlide = index;
    
    slides[currentSlide].classList.add('active');
    indicators[currentSlide].classList.add('active');
    
    resetAutoSlide();
}

function startAutoSlide() {
    autoSlideInterval = setInterval(() => {
        changeSlide(1);
    }, 5000);
}

function resetAutoSlide() {
    clearInterval(autoSlideInterval);
    startAutoSlide();
}

document.addEventListener('DOMContentLoaded', () => {
    startAutoSlide();
    
    const dropdowns = document.querySelectorAll('.dropdown > a');
    
    dropdowns.forEach(dropdown => {
        dropdown.addEventListener('click', (e) => {
            if (window.innerWidth <= 768) {
                e.preventDefault();
                const parent = dropdown.parentElement;
                parent.classList.toggle('active');
            }
        });
    });
});

window.addEventListener('resize', () => {
    const menu = document.getElementById('menu');
    if (window.innerWidth > 768) {
        menu.classList.remove('active');
        document.querySelectorAll('.dropdown').forEach(dropdown => {
            dropdown.classList.remove('active');
        });
    }
});

// Animation au scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

document.addEventListener('DOMContentLoaded', () => {
    const elementsToAnimate = document.querySelectorAll('.card, .subsection h3, .subsection p, .subsection ul, .accordion-item');
    
    elementsToAnimate.forEach(el => {
        el.classList.add('animate');
        observer.observe(el);
    });
});