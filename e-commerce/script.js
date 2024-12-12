
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

