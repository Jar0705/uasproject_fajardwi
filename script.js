function showPage(page) {
    const content = document.getElementById('content');
    
    if (page === 'home') {
        content.innerHTML = `
            <h2>Selamat Datang di Toko Pakan Burung</h2>
            <p>Menjual berbagai jenis pakan burung berkualitas.</p>
        `;
    } else if (page === 'products') {
        content.innerHTML = `
            <h2>Produk Kami</h2>
            <div class="product">
                <h3>Pakan Burung Premium</h3>
                <p>Harga: Rp 50.000</p>
                <button>Beli Sekarang</button>
            </div>
            <div class="product">
                <h3>Pakan Burung Nutrisi Tinggi</h3>
                <p>Harga: Rp 60.000</p>
                <button>Beli Sekarang</button>
            </div>
            <div class="product">
                <h3>Pakan Burung Organik</h3>
                <p>Harga: Rp 70.000</p>
                <button>Beli Sekarang</button>
            </div>
        `;
    } else if (page === 'contact') {
        content.innerHTML = `
            <h2>Kontak Kami</h2>
            <p>Email: info@tokopakanburung.com</p>
            <p>Telepon: 0812-3456-7890</p>
        `;
    }
}
