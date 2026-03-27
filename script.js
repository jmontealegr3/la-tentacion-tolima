document.addEventListener('DOMContentLoaded', () => {
    // Navbar Scroll Effect
    const navbar = document.querySelector('.navbar');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Mobile Menu Toggle (Basic implementation)
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    
    // In a real scenario, we might want a full screen overlay or a dropdown.
    // For now we'll just toggle display or create an alert placeholder.
    menuToggle.addEventListener('click', () => {
        const isVisible = navLinks.style.display === 'flex';
        if (isVisible) {
            navLinks.style.display = 'none';
        } else {
            navLinks.style.display = 'flex';
            navLinks.style.flexDirection = 'column';
            navLinks.style.position = 'absolute';
            navLinks.style.top = '100%';
            navLinks.style.left = '0';
            navLinks.style.width = '100%';
            navLinks.style.background = 'rgba(17, 14, 12, 0.95)';
            navLinks.style.padding = '1rem';
            navLinks.style.alignItems = 'center';
            navLinks.style.borderBottom = '1px solid rgba(255, 255, 255, 0.05)';
        }
    });
});
