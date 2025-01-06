function addToCart(productName) {
    alert(`${productName} telah ditambahkan ke keranjang!`);
}

function searchProduct() {
    const query = document.querySelector('.search-bar input').value;
    if (query) {
        alert(`Hasil pencarian untuk: "${query}"`);
    } else {
        alert('Silakan masukkan kata kunci untuk mencari produk.');
    }
}
