// Mobile menu toggle
const mobileMenu = document.getElementById('mobileMenu');
const navLinks = document.getElementById('navLinks');

mobileMenu.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    mobileMenu.classList.toggle('active');
});

// Close mobile menu when clicking a link
navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        mobileMenu.classList.remove('active');
    });
});

// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Scroll reveal animation
const reveals = document.querySelectorAll('.reveal');

const revealOnScroll = () => {
    reveals.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
                
        if (elementTop < windowHeight - 100) {
            element.classList.add('active');
        }
    });
};

window.addEventListener('scroll', revealOnScroll);
revealOnScroll(); // Initial check

// Profile image droplet dissolve effect on scroll
const profileImage = document.querySelector('.profile-image');
const profilePlaceholder = document.querySelector('.profile-placeholder');
const profileElement = profileImage || profilePlaceholder;

window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
            
    // Droplet dissolve effect for profile image
    if (profileElement) {
        const dissolveStart = 100;
        const dissolveEnd = 400;
                
        if (scrolled > dissolveStart) {
            const progress = Math.min((scrolled - dissolveStart) / (dissolveEnd - dissolveStart), 1);
            profileElement.style.opacity = 1 - progress;
            profileElement.style.transform = `translateY(-${progress * 100}px) scale(${1 - progress * 0.2})`;
        } else {
            profileElement.style.opacity = 1;
            profileElement.style.transform = 'translateY(0) scale(1)';
        }
    }

    // Parallax effect on hero text
    const heroText = document.querySelector('.hero-text');
    if (heroText && scrolled < 600) {
        heroText.style.transform = `translateY(${scrolled * 0.3}px)`;
        heroText.style.opacity = 1 - scrolled / 600;
    }
});