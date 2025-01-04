const products = [
    { id: 1, name: 'Pakan Burung Kenari', price: 20000, image: 'https://via.placeholder.com/150' },
    { id: 2, name: 'Pakan Burung Lovebird', price: 25000, image: 'https://via.placeholder.com/150' },
    { id: 3, name: 'Pakan Burung Murai', price: 30000, image: 'https://via.placeholder.com/150' },
    { id: 4, name: 'Pakan Burung Pleci', price: 15000, image: 'https://via.placeholder.com/150' },
    { id: 5, name: 'Pakan Burung Cucak Ijo', price: 35000, image: 'https://via.placeholder.com/150' },
    { id: 6, name: 'Pakan Burung Kacer', price: 28000, image: 'https://via.placeholder.com/150' },
    { id: 7, name: 'Pakan Burung Jalak', price: 32000, image: 'https://via.placeholder.com/150' },
    { id: 8, name: 'Pakan Burung Cendet', price: 27000, image: 'https://via.placeholder.com/150' },
    { id: 9, name: 'Pakan Burung Hantu', price: 40000, image: 'https://via.placeholder.com/150' },
    { id: 10, name: 'Pakan Burung Pipit', price: 10000, image: 'https://via.placeholder.com/150' }
];

const cart = [];

function renderProducts() {
    const container = document.getElementById('productContainer');
    container.innerHTML = '';
    products.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.classList.add('product');
        productDiv.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>Harga: ${product.price} IDR</p>
            <button onclick="addToCart(${product.id})">Tambah ke Keranjang</button>
        `;
        container.appendChild(productDiv);
    });
}

function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    cart.push(product);
    renderCart();
}

function renderCart() {
    const cartItems = document.getElementById('cartItems');
    cartItems.innerHTML = '';
    let total = 0;

    cart.forEach((item, index) => {
        total += item.price;
        const itemDiv = document.createElement('div');
        itemDiv.classList.add('cart-item');
        itemDiv.innerHTML = `
            <span>${item.name}</span>
            <span>${item.price} IDR</span>
        `;
        cartItems.appendChild(itemDiv);
    });

    document.getElementById('totalPrice').textContent = total;
}

renderProducts();
