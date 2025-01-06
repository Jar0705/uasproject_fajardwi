// script.js

document.getElementById('login-btn').addEventListener('click', function() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Simple validation (replace with real authentication logic)
    if (username === 'admin' && password === 'password') {
        document.getElementById('login-container').style.display = 'none';
        document.getElementById('dashboard-container').style.display = 'block';
    } else {
        document.getElementById('login-error').textContent = 'Invalid username or password';
    }
});
