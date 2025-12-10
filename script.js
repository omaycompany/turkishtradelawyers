// Mobile Navigation Toggle
const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');
const navLinks = document.querySelectorAll('.nav-link');

navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    navToggle.classList.toggle('active');
});

// Close mobile menu when clicking on a link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        navToggle.classList.remove('active');
    });
});

// Smooth Scroll for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offsetTop = target.offsetTop - 70;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Active Navigation Link on Scroll
const sections = document.querySelectorAll('section[id]');

function activateNavLink() {
    const scrollY = window.pageYOffset;

    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 100;
        const sectionId = section.getAttribute('id');
        const navLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            navLink?.classList.add('active');
        } else {
            navLink?.classList.remove('active');
        }
    });
}

window.addEventListener('scroll', activateNavLink);

// Navbar Shadow on Scroll
const navbar = document.getElementById('navbar');

function handleNavbarScroll() {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
}

window.addEventListener('scroll', handleNavbarScroll);

// Scroll Animation for Elements
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        }
    });
}, observerOptions);

// Observe service cards and why-us items
document.addEventListener('DOMContentLoaded', () => {
    const serviceCards = document.querySelectorAll('.service-card');
    const whyUsItems = document.querySelectorAll('.why-us-item');
    const contactItems = document.querySelectorAll('.contact-item');
    const heroFeatures = document.querySelectorAll('.hero-feature');
    const heroBadges = document.querySelectorAll('.hero-badge');
    const teamCards = document.querySelectorAll('.team-card');

    serviceCards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = `opacity 0.6s ease-out ${index * 0.1}s, transform 0.6s ease-out ${index * 0.1}s`;
        observer.observe(card);
    });

    whyUsItems.forEach((item, index) => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(30px)';
        item.style.transition = `opacity 0.6s ease-out ${index * 0.1}s, transform 0.6s ease-out ${index * 0.1}s`;
        observer.observe(item);
    });

    contactItems.forEach((item, index) => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(30px)';
        item.style.transition = `opacity 0.6s ease-out ${index * 0.15}s, transform 0.6s ease-out ${index * 0.15}s`;
        observer.observe(item);
    });

    heroFeatures.forEach((feature, index) => {
        feature.style.opacity = '0';
        feature.style.transform = 'translateY(30px)';
        feature.style.transition = `opacity 0.6s ease-out ${index * 0.08}s, transform 0.6s ease-out ${index * 0.08}s`;
        observer.observe(feature);
    });

    heroBadges.forEach((badge, index) => {
        badge.style.opacity = '0';
        badge.style.transform = 'translateY(20px)';
        badge.style.transition = `opacity 0.5s ease-out ${index * 0.1}s, transform 0.5s ease-out ${index * 0.1}s`;
        observer.observe(badge);
    });

    teamCards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(40px)';
        card.style.transition = `opacity 0.7s ease-out ${index * 0.15}s, transform 0.7s ease-out ${index * 0.15}s`;
        observer.observe(card);
    });
});

// Intersection Observer callback for adding active class
const intersectionCallback = (entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
};

const intersectionObserver = new IntersectionObserver(intersectionCallback, observerOptions);

// Observe all animated elements
setTimeout(() => {
    document.querySelectorAll('.service-card, .why-us-item, .contact-item, .hero-feature, .hero-badge, .team-card').forEach(el => {
        intersectionObserver.observe(el);
    });
}, 100);

// Prevent scroll jump on page load
window.addEventListener('beforeunload', () => {
    window.scrollTo(0, 0);
});

// Dynamic Hero Title & Team Page Card Expansion
document.addEventListener('DOMContentLoaded', () => {
    // Dynamic Hero Title
    const keywords = [
        "Market Entry", "Financial Interests", "Compliance Standards",
        "Strategic Moves", "Contracts", "Transactions",
        "Cross-Border Deals", "Supply Chain", "Trade Flows",
        "Business Operations", "Investments", "Intellectual Assets", "Legal Rights"
    ];
    const dynamicKeywordSpan = document.getElementById('dynamic-keyword');
    let currentIndex = 0;

    const heroTitle = document.querySelector('.hero-title');
    if (dynamicKeywordSpan && heroTitle) {
        setInterval(() => {
            dynamicKeywordSpan.style.opacity = '0';

            setTimeout(() => {
                currentIndex = (currentIndex + 1) % keywords.length;
                const newKeyword = keywords[currentIndex];
                dynamicKeywordSpan.textContent = newKeyword;
                dynamicKeywordSpan.style.opacity = '1';
            }, 500);
        }, 3000);
    }

    // Team Page Card Expansion
    const teamCardsPage = document.querySelectorAll('.team-card-page');

    teamCardsPage.forEach(card => {
        card.addEventListener('click', () => {
            const wasActive = card.classList.contains('active');

            teamCardsPage.forEach(c => c.classList.remove('active'));

            if (!wasActive) {
                card.classList.add('active');
            }
        });
    });
});
