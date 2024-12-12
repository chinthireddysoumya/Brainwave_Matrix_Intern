document.addEventListener('DOMContentLoaded', () => {
    const cartItemsContainer = document.getElementById('cart-items');
    const cartTotalElement = document.getElementById('cart-total');

    // Retrieve cart from localStorage
    const cart = JSON.parse(localStorage.getItem('cart')) || [];

    // Render cart items
    function renderCart() {
        cartItemsContainer.innerHTML = ''; // Clear existing cart items
        let total = 0;

        cart.forEach((item, index) => {
            total += item.price * item.quantity;

            // Create cart item element
            const cartItem = document.createElement('div');
            cartItem.classList.add('cart-item');

            cartItem.innerHTML = `
                <img src="${item.image}" alt="${item.product}" class="cart-item-image">
                <div class="cart-item-details">
                    <h4>${item.product}</h4>
                    <p>Price: $${item.price.toFixed(2)}</p>
                    <p>Quantity: ${item.quantity}</p>
                    <button class="remove-btn" data-index="${index}">Remove</button>
                </div>
            `;

            cartItemsContainer.appendChild(cartItem);
        });

        cartTotalElement.textContent = total.toFixed(2);
    }

    // Remove item from cart
    cartItemsContainer.addEventListener('click', (event) => {
        if (event.target.classList.contains('remove-btn')) {
            const index = parseInt(event.target.dataset.index, 10);
            cart.splice(index, 1);
            localStorage.setItem('cart', JSON.stringify(cart)); // Update localStorage
            renderCart();
        }
    });

    // Initialize cart
    renderCart();

    // Checkout button
    document.getElementById('checkout').addEventListener('click', () => {
        if (cart.length > 0) {
            alert('Thank you for your purchase!');
            localStorage.removeItem('cart');
            location.reload();
        } else {
            alert('Your cart is empty.');
        }
    });
});
