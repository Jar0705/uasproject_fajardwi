document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.item button');
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            alert('Produk berhasil ditambahkan ke keranjang!');
        });
    });
});
