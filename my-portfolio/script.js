// Wait for the DOM to fully load
document.addEventListener('DOMContentLoaded', () => {

    // 1. Contact Form Validation
    const contactForm = document.querySelector('.contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault(); // Prevents page from refreshing

            // Get form inputs
            const name = this.querySelector('input[type="text"]').value;
            const email = this.querySelector('input[type="email"]').value;
            const message = this.querySelector('textarea').value;

            // Simple Logic Validation
            if (name.length < 2) {
                alert("Please enter a valid name.");
                return;
            }

            if (!email.includes("@")) {
                alert("Please enter a valid email address.");
                return;
            }

            // Success Message
            alert(`Success! Thank you, ${name}. Your message has been sent.`);
            this.reset(); // Clears the form fields
        });
    }

    // 2. Active Link Highlighting
    // This detects which page you are on and highlights the nav link
    const currentPath = window.location.pathname;
    const navLinks = document.querySelectorAll('.nav-links a');

    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentPath.split('/').pop()) {
            link.classList.add('active');
        }
    });

    // 3. Interactive Hover Effect for Project Cards
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.borderColor = "#007bff";
            card.style.transform = "translateY(-5px)";
        });
        card.addEventListener('mouseleave', () => {
            card.style.borderColor = "transparent";
            card.style.transform = "translateY(0)";
        });
    });

});
