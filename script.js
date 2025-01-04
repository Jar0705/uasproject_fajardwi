function addToCart(productName) {
    alert(productName + " berhasil ditambahkan ke keranjang!");
}

document.getElementById('loginForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === "admin" && password === "admin123") {
        alert("Login berhasil! Selamat datang, " + username + "!");
    } else {
        alert("Login gagal. Silakan periksa username atau password Anda.");
    }
});
