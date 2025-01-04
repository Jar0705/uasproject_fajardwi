document.getElementById('loginForm')?.addEventListener('submit', function (e) {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === "admin" && password === "admin123") {
        alert("Login berhasil!");
        window.location.href = "dashboard.html";
    } else {
        alert("Login gagal. Periksa username atau password Anda.");
    }
});

function addToCart(productName) {
    alert(productName + " berhasil ditambahkan ke keranjang!");
}
