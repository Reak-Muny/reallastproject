// Sample food items data
const foodItems = [
    {
        id: 1,
        name: "Kdam",
        price: 12.99,
        category: "Main Course",
        image: "https://img.freepik.com/free-photo/padthai-shrimp-black-bowl-with-eggs-spring-onion-seasoning-wooden-table_1150-21116.jpg?ga=GA1.1.403470996.1731202948&semt=ais_hybrid&w=740",
        description: "Classic pizza with tomato"
    },
    {
        id: 2,
        name: "Caesar Salad",
        price: 8.99,
        category: "Appetizer",
        image: "https://img.freepik.com/free-photo/pad-thai-white-plate-with-lemon-eggs-seasoning-wooden-table_1150-21191.jpg?ga=GA1.1.403470996.1731202948&semt=ais_hybrid&w=740",
        description: "Fresh romaine lettuce"
    },
    {
        id: 3,
        name: "Chocolate Cake",
        price: 6.99,
        category: "Dessert",
        image: "https://img.freepik.com/free-photo/stir-fried-fresh-rice-flour-noodles-with-mixed-meat-egg_1339-5383.jpg?ga=GA1.1.403470996.1731202948&semt=ais_hybrid&w=740",
        description: "Rich chocolate cake"
    },
    {
        id: 4,
        name: "Fresh Orange Juice",
        price: 4.99,
        category: "Beverage",
        image: "https://img.freepik.com/free-photo/asian-food-restaurant_7939-2017.jpg?ga=GA1.1.403470996.1731202948&semt=ais_hybrid&w=740",
        description: "Freshly squeezed orange"
    },
    {
        id: 5,
        name: "Spaghetti",
        price: 14.99,
        category: "Main Course",
        image: "https://img.freepik.com/free-photo/pork-larb-with-carrot-cucumber-lime-spring-onion-chili-freshly-ground-pepper-lettuce_1150-25934.jpg?ga=GA1.1.403470996.1731202948&semt=ais_hybrid&w=740",
        description: "Classic Italian pasta"
    },
    {
        id: 6,
        name: "Greek Salad",
        price: 9.99,
        category: "Appetizer",
        image: "https://th.bing.com/th/id/OIP.PKUT6udm2-7xMSQgrW-O6AHaE7?w=371&h=202&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
        description: "Crisp cucumbers"
    },
    {
        id: 7,
        name: "Pizza Margherita",
        price: 7.99,
        category: "Desert",
        image: "https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?w=500",
        description: "Classic Italian"
    },
    {
        id: 8,
        name: "Spei",
        price: 3.99,
        category: "Beverage",
        image: "https://images.unsplash.com/photo-1550304943-4f24f54ddde9?w=500",
        description: "Refreshing iced coffee "
    },
    {
        id: 9,
        name: "Caesar Salad",  
        price: 8.99,
        category: "Appetizer",
        image: "https://img.freepik.com/free-photo/thai-food-som-tum-papaya-salad_1150-38091.jpg?ga=GA1.1.403470996.1731202948&semt=ais_hybrid&w=740",
        description: "Crisp romaine lettuce"   
    },
    {
        id: 10,
        name: "bror hort", 
        price: 8.99,
        category: "Appetizer",
        image: "https://img.freepik.com/free-photo/pork-larb-with-carrot-cucumber-lime-spring-onion-chili-freshly-ground-pepper-lettuce_1150-25934.jpg?ga=GA1.1.403470996.1731202948&semt=ais_hybrid&w=740",
        description: "Crisp romaine lettuce"   
    },
    {
        id: 11,
        name: "Shawarma",  
        price: 8.99,
        category: "Appetizer",
        image: "https://img.freepik.com/free-photo/mixed-grill-with-seasoned-mala-sichuan-pepper-chinese-spices_1150-26492.jpg?ga=GA1.1.403470996.1731202948&semt=ais_hybrid&w=740",
        description: "Crisp romaine lettuce"   
    },
    {
        id: 12,
        name: "cow bror hort",  
        price: 8.99,
        category: "Appetizer",
        image: "https://img.freepik.com/free-photo/bbq-with-variety-meats-complete-with-tomatoes-bell-peppers-white-plate_1150-22603.jpg?ga=GA1.1.403470996.1731202948&semt=ais_hybrid&w=740",
        description: "Crisp romaine lettuce"   
    },
];

// Cart and Orders
let cart = JSON.parse(localStorage.getItem('cart')) || [];
let orders = JSON.parse(localStorage.getItem('orders')) || [];

// DOM Elements
const foodItemsGrid = document.getElementById('foodItemsGrid');
const searchInput = document.getElementById('searchInput');
const searchButton = document.getElementById('searchButton');
const cartItems = document.getElementById('cartItems');
const cartTotal = document.getElementById('cartTotal');
const cartCount = document.querySelector('.cart-count');
const ordersCount = document.querySelector('.orders-count');
const ordersList = document.getElementById('ordersList');
const checkoutButton = document.getElementById('checkoutButton');
const stars = document.querySelectorAll('.stars i');
const ratingText = document.querySelector('.rating-text');
// Render food items
function renderFoodItems(items = foodItems) {
    foodItemsGrid.innerHTML = '';
    
    if (items.length === 0) {
        foodItemsGrid.innerHTML = `
            <div class="col-12 text-center">
                <p class="text-muted">No items found matching your search.</p>
            </div>
        `;
        return;
    }
    
    items.forEach(item => {
        const col = document.createElement('div');
        col.className = 'col-lg-3 mb-4';
        col.innerHTML = `
        
        <div class="food-item">
                <div class="card">
                    <img src="${item.image}" class="card-img-top" alt="${item.name}">
                    <div class="card-body">
                        <h5 class="card-title">${item.name}</h5>
                        <p class="card-text">${item.description}</p>
                        <div class="d-flex justify-content-between align-items-center">
                            <span class="h5 mb-0">$${item.price.toFixed(2)}</span>
                            <button class="btn btn-warning" onclick="addToCart(${item.id})">
                                Add to Cart
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        
            
        `;
        foodItemsGrid.appendChild(col);
    });
}

// Add to cart
function addToCart(itemId) {
    const item = foodItems.find(item => item.id === itemId);
    const cartItem = cart.find(cartItem => cartItem.id === itemId);
    
    if (cartItem) {
        cartItem.quantity++;
    } else {
        cart.push({
            ...item,
            quantity: 1
        });
    }
    
    updateCart();
    saveToLocalStorage();
}

// Update cart
function updateCart() {
    cartItems.innerHTML = '';
    let total = 0;
    
    if (cart.length === 0) {
        cartItems.innerHTML = `
            <div class="text-center text-muted">
                <p>Your cart is empty</p>
            </div>
        `;
    } else {
        cart.forEach(item => {
            const itemTotal = item.price * item.quantity;
            total += itemTotal;
            
            const cartItem = document.createElement('div');
            cartItem.className = 'cart-item';
            cartItem.innerHTML = `
                <img src="${item.image}" alt="${item.name}">
                <div class="cart-item-details">
                    <h6>${item.name}</h6>
                    <p class="mb-0">$${item.price.toFixed(2)}</p>
                </div>
                <div class="cart-item-quantity">
                    <button class="btn btn-sm btn-outline-secondary" onclick="updateQuantity(${item.id}, ${item.quantity - 1})">-</button>
                    <span>${item.quantity}</span>
                    <button class="btn btn-sm btn-outline-secondary" onclick="updateQuantity(${item.id}, ${item.quantity + 1})">+</button>
                </div>
            `;
            cartItems.appendChild(cartItem);
        });
    }
    
    cartTotal.textContent = total.toFixed(2);
    cartCount.textContent = cart.reduce((sum, item) => sum + item.quantity, 0);
}

// Update quantity
function updateQuantity(itemId, newQuantity) {
    if (newQuantity <= 0) {
        cart = cart.filter(item => item.id !== itemId);
    } else {
        const cartItem = cart.find(item => item.id === itemId);
        if (cartItem) {
            cartItem.quantity = newQuantity;
        }
    }
    
    updateCart();
    saveToLocalStorage();
}

// Checkout
function checkout() {
    if (cart.length === 0) {
        alert('Your cart is empty!');
        return;
    }
    
    const order = {
        id: Date.now(),
        items: [...cart],
        total: cart.reduce((sum, item) => sum + (item.price * item.quantity), 0),
        date: new Date().toLocaleString(),
        status: 'pending'
    };
    
    orders.push(order);
    cart = [];
    
    updateCart();
    updateOrders();
    saveToLocalStorage();
    
    alert('Order placed successfully!');
}

// Update orders
function updateOrders() {
    ordersList.innerHTML = '';
    ordersCount.textContent = orders.length;
    
    if (orders.length === 0) {
        ordersList.innerHTML = `
            <div class="text-center text-muted">
                <p>No orders yet</p>
            </div>
        `;
        return;
    }
    
    orders.forEach(order => {
        const orderElement = document.createElement('div');
        orderElement.className = 'order-item';
        orderElement.innerHTML = `
            <div class="order-item-header">
                <div>
                    <strong>Order #${order.id}</strong>
                    <br>
                    <small>${order.date}</small>
                </div>
                <div>
                    <span class="badge bg-${order.status === 'pending' ? 'warning' : 'success'}">${order.status}</span>
                    ${order.status === 'pending' ? `
                        <button class="btn btn-sm btn-danger ms-2" onclick="cancelOrder(${order.id})">
                            Cancel
                        </button>
                    ` : ''}
                </div>
            </div>
            <div class="order-item-products">
                ${order.items.map(item => `
                    <div class="d-flex justify-content-between">
                        <span>${item.name} x${item.quantity}</span>
                        <span>$${(item.price * item.quantity).toFixed(2)}</span>
                    </div>
                `).join('')}
                <hr>
                <div class="d-flex justify-content-between">
                    <strong>Total</strong>
                    <strong>$${order.total.toFixed(2)}</strong>
                </div>
            </div>
        `;
        ordersList.appendChild(orderElement);
    });
}

// Cancel order
function cancelOrder(orderId) {
    if (confirm('Are you sure you want to cancel this order?')) {
        orders = orders.filter(order => order.id !== orderId);
        updateOrders();
        saveToLocalStorage();
    }
}

// Search functionality
function searchFood() {
    const searchTerm = searchInput.value.toLowerCase().trim();
    const filteredItems = foodItems.filter(item => 
        item.name.toLowerCase().includes(searchTerm) ||
        item.category.toLowerCase().includes(searchTerm) ||
        item.description.toLowerCase().includes(searchTerm)
    );
    renderFoodItems(filteredItems);
}

// Event listeners
searchInput.addEventListener('input', searchFood);
searchButton.addEventListener('click', searchFood);
checkoutButton.addEventListener('click', checkout);

// Save to localStorage
function saveToLocalStorage() {
    localStorage.setItem('cart', JSON.stringify(cart));
    localStorage.setItem('orders', JSON.stringify(orders));
}

// Initial render
renderFoodItems();
updateCart();
updateOrders(); 
// Star Rating System
        stars.forEach(star => {
            // Hover effect
            star.addEventListener('mouseover', function() {
                const rating = this.getAttribute('data-rating');
                updateStars(rating);
                ratingText.textContent = `Rating: ${rating}/5`;
            });

            // Click effect
            star.addEventListener('click', function() {
                const rating = this.getAttribute('data-rating');
                stars.forEach(s => {
                    if (s.getAttribute('data-rating') <= rating) {
                        s.classList.add('active');
                    } else {
                        s.classList.remove('active');
                    }
                });
                ratingText.textContent = `You rated: ${rating}/5`;
            });
        });

        // Reset on mouse leave
        document.querySelector('.stars').addEventListener('mouseleave', function() {
            const activeStars = document.querySelectorAll('.stars i.active');
            if (activeStars.length === 0) {
                stars.forEach(star => star.style.color = '#ddd');
                ratingText.textContent = 'stars to rate';
            }
        });

        function updateStars(rating) {
            stars.forEach(star => {
                if (star.getAttribute('data-rating') <= rating) {
                    star.style.color = '#ffc107';
                } else {
                    star.style.color = '#ddd';
                }
            });
        }