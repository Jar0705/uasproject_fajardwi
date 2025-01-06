function addToCart() {
    const notification = document.getElementById('notification');
    notification.classList.remove('hidden');
    notification.style.opacity = '1';

    // Automatically hide the notification after 3 seconds
    setTimeout(() => {
        closeNotification();
    }, 3000);
}

function closeNotification() {
    const notification = document.getElementById('notification');
    notification.style.opacity = '0';
    setTimeout(() => {
        notification.classList.add('hidden');
    }, 500); // Match this duration with the CSS transition duration
}
