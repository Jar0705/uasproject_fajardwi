// script.js

document.addEventListener("DOMContentLoaded", () => {
    const cartButtons = document.querySelectorAll(".product-item .btn");

    cartButtons.forEach(button => {
        button.addEventListener("click", () => {
            alert("Produk telah ditambahkan ke keranjang!");
        });
    });

    const contactForm = document.querySelector(".contact form");

    contactForm.addEventListener("submit", event => {
        event.preventDefault();
        alert("Pesan Anda telah terkirim. Terima kasih!");
        contactForm.reset();
    });
});
