// JavaScript for Difficult Calls Law Firm Website

// DOM Ready
document.addEventListener('DOMContentLoaded', function() {
    // Form validation
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Simple validation
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;
            
            if (name && email && message) {
                // In a real implementation, you would send the form data to a server
                alert('Thank you for your message. We will contact you shortly.');
                contactForm.reset();
            } else {
                alert('Please fill in all required fields.');
            }
        });
    }
    
    // Attorney login form validation
    const attorneyLoginForm = document.getElementById('attorney-login-form');
    if (attorneyLoginForm) {
        attorneyLoginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const email = document.getElementById('attorney-email').value;
            const password = document.getElementById('attorney-password').value;
            
            if (email && password) {
                // In a real implementation, you would submit to login endpoint
                alert('Login functionality would be implemented here.');
            } else {
                alert('Please enter both email and password.');
            }
        });
    }
    
    // Mobile navigation toggle (for future implementation)
    const mobileNav = document.querySelector('.mobile-nav');
    if (mobileNav) {
        // This would be implemented in a responsive design
        console.log('Mobile nav ready');
    }
});

// Utility functions for the site
const DifficultCalls = {
    // Initialize any site-specific functionality
    init: function() {
        console.log('Difficult Calls Law Firm website initialized');
    },
    
    // Validate email format
    validateEmail: function(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    }
};

// Initialize site when page loads
DifficultCalls.init();