function addToCart(productName) {
    const notification = document.getElementById('notification');
    notification.classList.remove('hidden');
    notification.style.opacity = '1';
    notification.querySelector('p').innerText = `${productName} telah ditambahkan ke keranjang!`;

    // Otomatis sembunyikan notifikasi setelah 3 detik
    setTimeout(() => {
        closeNotification();
    }, 3000);
}

function closeNotification() {
    const notification = document.getElementById('notification');
    notification.style.opacity = '0';
    setTimeout(() => {
        notification.classList.add('hidden');
    }, 500); // Sesuaikan durasi ini dengan durasi transisi CSS
}
