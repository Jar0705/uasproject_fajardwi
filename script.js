document.getElementById('loginForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === "admin" && password === "admin123") {
        alert("Login berhasil!");
        showDashboard();
    } else {
        alert("Login gagal. Periksa username atau password Anda.");
    }
});

function showDashboard() {
    document.getElementById('loginSection').style.display = 'none';
    document.getElementById('dashboardSection').style.display = 'block';
    document.getElementById('dashboardMenu').style.display = 'block';
}

function logout() {
    alert("Anda telah logout.");
    document.getElementById('dashboardSection').style.display = 'none';
    document.getElementById('dashboardMenu').style.display = 'none';
    document.getElementById('loginSection').style.display = 'block';
}
