let cartItems = [];
let totalPrice = 0;

function addToCart(productName, productPrice) {
    cartItems.push({ name: productName, price: productPrice });
    totalPrice += productPrice;
    updateCart();
    showNotification(`${productName} telah ditambahkan ke keranjang.`);
}

function updateCart() {
    const cartItemsList = document.getElementById('cart-items');
    const totalPriceElement = document.getElementById('total-price');
    
    // Clear current cart items
    cartItemsList.innerHTML = '';

    // Add items to cart
    cartItems.forEach(item => {
        const listItem = document.createElement('li');
        listItem.textContent = `${item.name} - Rp ${item.price}`;
        cartItemsList.appendChild(listItem);
    });

    // Update total price
    totalPriceElement.textContent = totalPrice;
}

function showNotification(message) {
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = message;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.remove();
    }, 3000); // Notifikasi akan hilang setelah 3 detik
}
