// script.js
document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.btn');

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            if (button.textContent === 'Add to Cart') {
                // Display notification
                const notification = document.createElement('div');
                notification.className = 'notification';
                notification.textContent = 'Item added to cart!';
                document.body.appendChild(notification);

                // Remove notification after 3 seconds
                setTimeout(() => {
                    notification.remove();
                }, 3000);
            } else if (button.textContent === 'Send Message') {
                alert('Thank you for contacting us!');
            }
        });
    });

    const contactForm = document.getElementById('contact-form');
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault(); // Prevent actual form submission
        alert('Message sent successfully!');
        contactForm.reset(); // Clear the form fields
    });
});
