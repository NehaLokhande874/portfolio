document.addEventListener('DOMContentLoaded', () => {

    // 1. Contact Form Validation
    const contactForm = document.querySelector('.contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault(); 

            const nameInput = this.querySelector('input[type="text"]');
            const emailInput = this.querySelector('input[type="email"]');
            
            // Simple Logic Validation
            if (nameInput.value.length < 2) {
                alert("Please enter a valid name.");
                return;
            }

            if (!emailInput.value.includes("@")) {
                alert("Please enter a valid email address.");
                return;
            }

            // Success Message
            alert(`Success! Thank you, ${nameInput.value}. Your message has been sent.`);
            this.reset(); 
        });
    }

    // 2. Interactive Hover for Skills and Projects (Day 6 Update)
    // We use the specific classes from your Day 1-5 code
    const interactables = document.querySelectorAll('.skill-card, .project-item');
    
    interactables.forEach(item => {
        item.style.transition = "0.3s ease"; // Ensures smooth movement
        
        item.addEventListener('mouseenter', () => {
            item.style.borderColor = "#00abf0"; // Matching your theme
            item.style.transform = "translateY(-10px)";
        });
        
        item.addEventListener('mouseleave', () => {
            item.style.borderColor = "#334155"; // Return to original gray
            item.style.transform = "translateY(0)";
        });
    });
});
