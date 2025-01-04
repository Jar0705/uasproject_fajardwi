// Login Functionality
const loginButton = document.getElementById('loginButton');
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');
const errorMessage = document.getElementById('errorMessage');
const loginPage = document.getElementById('loginPage');
const mainContent = document.getElementById('mainContent');
const orderButtons = document.querySelectorAll('.order-button');

loginButton.addEventListener('click', () => {
    const username = usernameInput.value;
    const password = passwordInput.value;

    if (username === 'admin' && password === 'password123') {
        loginPage.style.display = 'none';
        mainContent.style.display = 'block';
    } else {
        errorMessage.style.display = 'block';
    }
});

// Order Now functionality
orderButtons.forEach(button => {
    button.addEventListener('click', () => {
        alert('Thank you for your order! We will contact you shortly.');
    });
});

// PWA Service Worker
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/service-worker.js').then(registration => {
            console.log('ServiceWorker registration successful:', registration.scope);
        }).catch(error => {
            console.log('ServiceWorker registration failed:', error);
        });
    });
}
