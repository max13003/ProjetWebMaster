// ===================================
// GESTION DU MENU MOBILE (ACCORDÉON)
// ===================================

document.addEventListener('DOMContentLoaded', () => {
    // Initialisation du carrousel au chargement
    startAutoSlide();
    
    // Gestion des liens de menus déroulants (Dropdowns)
    const dropdowns = document.querySelectorAll('.dropdown > a');
    
    dropdowns.forEach(dropdown => {
        dropdown.addEventListener('click', (e) => {
            // Uniquement sur mobile/tablette
            if (window.innerWidth <= 768) {
                e.preventDefault(); // Empêche de sauter à la section tout de suite
                
                const parent = dropdown.parentElement;
                const currentSubmenu = parent.querySelector('.submenu');
                
                // --- EFFET ACCORDÉON ---
                // On ferme TOUS les autres dropdowns ouverts avant d'ouvrir celui-ci
                document.querySelectorAll('.dropdown').forEach(otherDropdown => {
                    if (otherDropdown !== parent) {
                        otherDropdown.classList.remove('active');
                        const otherSub = otherDropdown.querySelector('.submenu');
                        if (otherSub) otherSub.style.display = 'none';
                    }
                });

                // --- TOGGLE DU MENU ACTUEL ---
                const isActive = parent.classList.toggle('active');
                
                // On affiche ou cache le sous-menu
                if (isActive) {
                    currentSubmenu.style.display = 'block';
                } else {
                    currentSubmenu.style.display = 'none';
                }
            }
        });
    });

    // Animation au scroll (Intersection Observer)
    const elementsToAnimate = document.querySelectorAll('.card, .subsection h3, .subsection p, .subsection ul, .accordion-item');
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

    elementsToAnimate.forEach(el => {
        el.classList.add('animate');
        observer.observe(el);
    });
});

// ===================================
// FONCTIONS DE NAVIGATION
// ===================================

// Toggle l'ouverture du menu mobile entier
function toggleMenu() {
    const menu = document.getElementById('menu');
    menu.classList.toggle('active');
}

// Fermer le menu après clic sur un lien final
function closeMenu() {
    const menu = document.getElementById('menu');
    if (window.innerWidth <= 768) {
        menu.classList.remove('active');
        // On remet tous les sous-menus à zéro pour la prochaine ouverture
        document.querySelectorAll('.dropdown').forEach(dropdown => {
            dropdown.classList.remove('active');
            const sub = dropdown.querySelector('.submenu');
            if (sub) sub.style.display = 'none';
        });
    }
}

// Sécurité : Fermer le menu si on agrandit la fenêtre
window.addEventListener('resize', () => {
    const menu = document.getElementById('menu');
    if (window.innerWidth > 768) {
        menu.classList.remove('active');
        document.querySelectorAll('.dropdown').forEach(dropdown => {
            dropdown.classList.remove('active');
            const sub = dropdown.querySelector('.submenu');
            if (sub) sub.style.display = 'none';
        });
    }
});

// ===================================
// FONCTIONS DES SECTIONS (ACCORDÉONS & PROMOS)
// ===================================

// Accordéons classiques (ex: Enseignements)
function toggleAccordion(button) {
    const content = button.nextElementSibling;
    const isActive = button.classList.contains('active');
    
    const parent = button.closest('.accordion-item').parentElement;
    const siblings = parent.querySelectorAll(':scope > .accordion-item > .accordion-header');
    
    siblings.forEach(sibling => {
        if (sibling !== button) {
            sibling.classList.remove('active');
            sibling.nextElementSibling.classList.remove('active');
        }
    });
    
    if (isActive) {
        button.classList.remove('active');
        content.classList.remove('active');
    } else {
        button.classList.add('active');
        content.classList.add('active');
    }
}

// Listes des Promos Alumnis
function togglePromoList(button) {
    const list = button.nextElementSibling;
    list.classList.toggle('active');
    
    if (list.classList.contains('active')) {
        button.innerHTML = 'Masquer la liste <i class="fas fa-chevron-up"></i>';
        button.style.backgroundColor = '#8b1b59';
        button.style.color = '#fff';
    } else {
        button.innerHTML = 'Voir la liste <i class="fas fa-chevron-down"></i>';
        button.style.backgroundColor = 'transparent';
        button.style.color = '#8b1b59';
    }
}

// ===================================
// CARROUSEL & FORMULAIRE
// ===================================

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

function handleSubmit(event) {
    event.preventDefault();
    alert('Message envoyé !');
    event.target.reset();
}