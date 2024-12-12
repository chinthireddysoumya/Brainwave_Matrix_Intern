
// document.addEventListener('DOMContentLoaded', () => {
//     const cartItems = document.getElementById('cart-items');
//     const cartTotal = document.getElementById('cart-total');
//     const addToCartButtons = document.querySelectorAll('.add-to-cart');
//     const cart = [];

//     addToCartButtons.forEach(button => {
//         button.addEventListener('click', () => {
//             const product = button.dataset.product;
//             const price = parseFloat(button.dataset.price);
//             const image = button.dataset.image;

//             // Check if item already exists in the cart
//             const existingItem = cart.find(item => item.product === product);
//             if (existingItem) {
//                 existingItem.quantity += 1; // Increase quantity
//             } else {
//                 // Add new item to cart
//                 cart.push({ product, price, image, quantity: 1 });
//             }

//             renderCart();
//         });
//     });

//     function renderCart() {
//         cartItems.innerHTML = ''; // Clear existing cart items
//         let total = 0;

//         cart.forEach((item, index) => {
//             total += item.price * item.quantity;

//             // Create cart item element
//             const cartItem = document.createElement('div');
//             cartItem.classList.add('cart-item');

//             cartItem.innerHTML = `
//                 <img src="${item.image}" alt="${item.product}" class="cart-item-image">
//                 <div class="cart-item-details">
//                     <h4>${item.product}</h4>
//                     <p>Price: $${item.price.toFixed(2)}</p>
//                     <p>Quantity: 
//                         <button class="quantity-btn decrease" data-index="${index}">-</button>
//                         <span>${item.quantity}</span>
//                         <button class="quantity-btn increase" data-index="${index}">+</button>
//                     </p>
//                     <button class="remove-btn" data-index="${index}">Remove</button>
//                 </div>
//             `;

//             cartItems.appendChild(cartItem);
//         });

//         cartTotal.textContent = total.toFixed(2);

//         // Attach event listeners to quantity and remove buttons
//         attachCartListeners();
//     }

//     function attachCartListeners() {
//         const increaseButtons = document.querySelectorAll('.quantity-btn.increase');
//         const decreaseButtons = document.querySelectorAll('.quantity-btn.decrease');
//         const removeButtons = document.querySelectorAll('.remove-btn');

//         increaseButtons.forEach(button => {
//             button.addEventListener('click', () => {
//                 const index = parseInt(button.dataset.index);
//                 cart[index].quantity += 1;
//                 renderCart();
//             });
//         });

//         decreaseButtons.forEach(button => {
//             button.addEventListener('click', () => {
//                 const index = parseInt(button.dataset.index);
//                 if (cart[index].quantity > 1) {
//                     cart[index].quantity -= 1;
//                 } else {
//                     cart.splice(index, 1); // Remove item if quantity is 0
//                 }
//                 renderCart();
//             });
//         });

//         removeButtons.forEach(button => {
//             button.addEventListener('click', () => {
//                 const index = parseInt(button.dataset.index);
//                 cart.splice(index, 1); // Remove item from cart
//                 renderCart();
//             });
//         });
//     }
// });



// document.getElementById('checkout').addEventListener('click', () => {
//     if (cart.length > 0) {
//         alert('Thank you for your purchase!');
//         // Clear the cart without reassigning the const variable
//         // cart.length = 0;
//         // renderCart(); // Re-render the cart to show it's empty
//     } else {
//         alert('Your cart is empty.');
//     }
// });

























// document.addEventListener('DOMContentLoaded', () => {
//     const addToCartButtons = document.querySelectorAll('.add-to-cart');
//     const cart = JSON.parse(localStorage.getItem('cart')) || [];

//     addToCartButtons.forEach(button => {
//         button.addEventListener('click', () => {
//             const product = button.dataset.product;
//             const price = parseFloat(button.dataset.price);
//             const image = button.dataset.image;

//             // Check if item already exists in the cart
//             const existingItem = cart.find(item => item.product === product);
//             if (existingItem) {
//                 existingItem.quantity += 1; // Increase quantity
//             } else {
//                 cart.push({ product, price, image, quantity: 1 });
//             }

//             localStorage.setItem('cart', JSON.stringify(cart));
//             alert(`${product} has been added to your cart.`);
//         });
//     });

//     // Handle navigation to cart page
//     document.querySelector('nav a[href="add_to_cart.html"]').addEventListener('click', (event) => {
//         event.preventDefault();
//         window.location.href = 'add_to_cart.html';
//     });
// });



// 
document.addEventListener('DOMContentLoaded', () => {
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    const cart = JSON.parse(localStorage.getItem('cart')) || [];

    addToCartButtons.forEach(button => {
        button.addEventListener('click', () => {
            const product = button.dataset.product;
            const price = parseFloat(button.dataset.price);
            const image = button.dataset.image;

            // Check if item already exists in the cart
            const existingItem = cart.find(item => item.product === product);
            if (existingItem) {
                existingItem.quantity += 1; // Increase quantity
            } else {
                // Add new item to cart
                cart.push({ product, price, image, quantity: 1 });
            }

            localStorage.setItem('cart', JSON.stringify(cart)); // Save to localStorage
            alert(`${product} added to cart!`);
        });
    });
});




// 



document.addEventListener('DOMContentLoaded', () => {
    const carouselImages = document.querySelector('.carousel-images');
    const prevButton = document.querySelector('.carousel-control.prev');
    const nextButton = document.querySelector('.carousel-control.next');
    const slides = document.querySelectorAll('.carousel-slide');
    const totalSlides = slides.length;

    let currentIndex = 0;

    function updateCarousel() {
        const offset = -currentIndex * 100; // Calculate the translation offset
        carouselImages.style.transform = `translateX(${offset}%)`;
    }

    prevButton.addEventListener('click', () => {
        currentIndex = (currentIndex === 0) ? totalSlides - 1 : currentIndex - 1;
        updateCarousel();
    });

    nextButton.addEventListener('click', () => {
        currentIndex = (currentIndex === totalSlides - 1) ? 0 : currentIndex + 1;
        updateCarousel();
    });

    // Auto-slide every 5 seconds
    setInterval(() => {
        currentIndex = (currentIndex === totalSlides - 1) ? 0 : currentIndex + 1;
        updateCarousel();
    }, 2000);
});

