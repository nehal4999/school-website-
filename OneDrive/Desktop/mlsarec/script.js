// Toggle navigation menu on mobile devices
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');

navToggle.addEventListener('click', () => {
    navLinks.classList.toggle('show');
});

// Show/hide newsletter popup
const newsletterPopup = document.querySelector('.newsletter-popup');
const newsletterToggle = document.querySelector('.newsletter-toggle');

newsletterToggle.addEventListener('click', () => {
    newsletterPopup.style.display = 'block';
});

newsletterPopup.addEventListener('click', (e) => {
    if (e.target === newsletterPopup) {
        newsletterPopup.style.display = 'none';
    }
});

// Close newsletter popup when submit button is clicked
const newsletterForm = document.querySelector('.newsletter-popup form');

newsletterForm.addEventListener('submit', (e) => {
    e.preventDefault();
    newsletterPopup.style.display = 'none';
});