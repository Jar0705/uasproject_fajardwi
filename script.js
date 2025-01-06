// script.js
document.addEventListener('DOMContentLoaded', () => {
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    const notification = document.getElementById('notification');

    addToCartButtons.forEach(button => {
        button.addEventListener('click', () => {
            showNotification();
        });
    });

    function showNotification() {
        notification.classList.add('visible');
        setTimeout(() => {
            notification.classList.remove('visible');
        }, 2000); // Notification disappears after 2 seconds
    }
});
