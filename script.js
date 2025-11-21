// Menu mobile
document.querySelector('.mobile-menu')?.addEventListener('click', function() {
    document.querySelector('nav').classList.toggle('active');
});

// Animation au défilement
window.addEventListener('scroll', function() {
    const elements = document.querySelectorAll('.service-card, .partner-card, .team-member');
    
    elements.forEach(element => {
        const position = element.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;
        
        if(position < screenPosition) {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }
    });
});

// Initialisation des animations
document.addEventListener('DOMContentLoaded', function() {
    const menuBtn = document.querySelector('.mobile-menu');
    const nav = document.querySelector('nav');

    if (menuBtn && nav) {
        menuBtn.addEventListener('click', function() {
            // Ajoute ou enlève la classe 'active' au menu
            nav.classList.toggle('active');
            
            // Optionnel : Change l'icône du bouton (☰ devient ✕)
            if (nav.classList.contains('active')) {
                menuBtn.textContent = '✕';
                menuBtn.style.position = 'fixed'; // Garde le bouton visible
                menuBtn.style.right = '20px';     // Ajuste la position
            } else {
                menuBtn.textContent = '☰';
                menuBtn.style.position = 'relative'; // Remet la position normale
                menuBtn.style.right = '0';
            }
        });
    } else {
        console.error("Erreur : Le bouton menu ou la navigation n'ont pas été trouvés.");
    }
});

// Ajouts à script.js

// Fonctionnalité thème clair/sombre
function initTheme() {
    const themeToggle = document.getElementById('themeToggle');
    const themeIcon = document.querySelector('.theme-icon');
    const savedTheme = localStorage.getItem('theme') || 'light';
    
    // Appliquer le thème sauvegardé
    document.documentElement.setAttribute('data-theme', savedTheme);
    updateThemeIcon(savedTheme, themeIcon);
    
    // Ajouter la classe de transition après le chargement
    setTimeout(() => {
        document.body.classList.add('theme-transition');
    }, 100);
    
    // Gérer le clic sur le bouton de thème
    themeToggle?.addEventListener('click', function() {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';
        
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        updateThemeIcon(newTheme, themeIcon);
    });
}

function updateThemeIcon(theme, iconElement) {
    if (theme === 'dark') {
        iconElement.textContent = '☀️';
    } else {
        iconElement.textContent = '🌙';
    }
}

// Initialisation au chargement
document.addEventListener('DOMContentLoaded', function() {
    initTheme();
    
    // Autres initialisations existantes...
    const elements = document.querySelectorAll('.service-card, .partner-card, .team-member, .testimonial-card');
    
    elements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    });

    window.dispatchEvent(new Event('scroll'));
});

// Menu mobile (existant)
document.querySelector('.mobile-menu')?.addEventListener('click', function() {
    document.querySelector('nav').classList.toggle('active');
});

// Animation au défilement (existant)
window.addEventListener('scroll', function() {
    const elements = document.querySelectorAll('.service-card, .partner-card, .team-member, .testimonial-card');
    
    elements.forEach(element => {
        const position = element.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;
        
        if(position < screenPosition) {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }
    });
});

// --- Gestion de la Pop-up ---

document.addEventListener('DOMContentLoaded', function() {
    const popup = document.getElementById('monPopup');
    const closeBtn = document.querySelector('.close-btn');

    // Vérifier si la pop-up existe sur la page
    if (popup && closeBtn) {
        
        // Vérifier si l'utilisateur a déjà vu la popup (Stockage local)
        // Si vous voulez qu'elle s'affiche À CHAQUE FOIS, supprimez la condition "if (!localStorage...)"
        
        /* if (!localStorage.getItem('popupVue')) {
            
            // Ouvrir la pop-up après 3 secondes (3000 ms)
            setTimeout(() => {
                popup.style.display = 'flex'; // 'flex' pour centrer
            }, 3000);
        } */

        // Fermer la pop-up au clic sur la croix
        closeBtn.addEventListener('click', function() {
            popup.style.display = 'none';
            // Enregistrer que l'utilisateur l'a vue
            localStorage.setItem('popupVue', 'true');
        });

        // Fermer si on clique en dehors de la fenêtre blanche
        window.addEventListener('click', function(e) {
            if (e.target === popup) {
                popup.style.display = 'none';
                localStorage.setItem('popupVue', 'true');
            }
        });
    }
});