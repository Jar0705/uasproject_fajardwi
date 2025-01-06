const products = [
    {
        id: 1,
        name: "Pakan Burung A",
        description: "Pakan burung berkualitas tinggi untuk semua jenis burung.",
        price: 50000,
        imageUrl: "https://via.placeholder.com/150"
    },
    {
        id: 2,
        name: "Pakan Burung B",
        description: "Pakan burung dengan nutrisi lengkap.",
        price: 60000,
        imageUrl: "https://via.placeholder.com/150"
    },
    {
        id: 3,
        name: "Pakan Burung C",
        description: "Pakan burung dengan rasa yang disukai burung.",
        price: 55000,
        imageUrl: "https://via.placeholder.com/150"
    }
];

let cartCount = 0;

function displayProducts() {
    const productList = document.getElementById('product-list');
    products.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.className = 'product';
        productDiv.innerHTML = `
            <img src="${product.imageUrl}" alt="${product.name}">
            <h2>${product.name}</h2>
            <p>${product.description}</p>
            <p>Harga: Rp ${product.price}</p>
            <button onclick="addToCart()">Tambah ke Keranjang</button>
        `;
        productList.appendChild(productDiv);
    });
}

function addToCart() {
    cartCount++;
    document.getElementById('cart-count').innerText = cartCount;
}

// Load products on page load
window.onload = displayProducts;
