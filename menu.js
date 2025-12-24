// Product Data from your table
    const products = {
        fries: [
            { id: "french-fries", name: "French Fries", price: 199, weight: "500g", category: "fries", image: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80", badge: "Bestseller" },
            { id: "xlf-fries", name: "XLF Fries", price: 219, weight: "500g", category: "fries", image: "https://images.unsplash.com/photo-1541592106381-b31e9677c0e5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" },
            { id: "crinkle-fries", name: "Crinkle Fries", price: 209, weight: "500g", category: "fries", image: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" },
            { id: "skin-on-fries", name: "Skin on Fries", price: 229, weight: "500g", category: "fries", image: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" },
            { id: "flavory-fries", name: "Flavory Fries", price: 239, weight: "500g", category: "fries", image: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" },
            { id: "super-crispy-fries", name: "Super Crispy Fries", price: 249, weight: "500g", category: "fries", image: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" },
            { id: "skin-on-coated-fries", name: "Skin on Coated Fries", price: 259, weight: "500g", category: "fries", image: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" },
            { id: "rustic-fries", name: "Rustic Fries", price: 229, weight: "500g", category: "fries", image: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" }
        ],
        potato: [
            { id: "potato-wedges", name: "Potato Wedges", price: 249, weight: "500g", category: "potato", image: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80", badge: "Popular" },
            { id: "classic-wedges", name: "Classic Wedges", price: 239, weight: "500g", category: "potato", image: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" },
            { id: "lime-mint-wedges", name: "Lime 'n' Mint Wedges", price: 259, weight: "500g", category: "potato", image: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" },
            { id: "spicy-wedges", name: "Spicy Wedges", price: 259, weight: "500g", category: "potato", image: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" },
            { id: "hash-brown-round", name: "Hash Brown Round", price: 279, weight: "400g", category: "potato", image: "https://images.unsplash.com/photo-1563379091339-03246963d9d6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" },
            { id: "hash-brown-mini-triangle", name: "Hash Brown Mini Triangle", price: 289, weight: "400g", category: "potato", image: "https://images.unsplash.com/photo-1563379091339-03246963d9d6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" },
            { id: "hash-brown-triangle", name: "Hash Brown Triangle", price: 299, weight: "400g", category: "potato", image: "https://images.unsplash.com/photo-1563379091339-03246963d9d6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" },
            { id: "hash-brown-patties", name: "Hash Brown Patties", price: 269, weight: "400g", category: "potato", image: "https://images.unsplash.com/photo-1563379091339-03246963d9d6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" },
            { id: "hash-brown-germs", name: "Hash Brown Germs", price: 249, weight: "400g", category: "potato", image: "https://images.unsplash.com/photo-1563379091339-03246963d9d6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" },
            { id: "tater-shotz", name: "Tater Shotz", price: 319, weight: "500g", category: "potato", image: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" },
            { id: "spicy-hash-brown", name: "Spicy Hash Brown", price: 279, weight: "400g", category: "potato", image: "https://images.unsplash.com/photo-1563379091339-03246963d9d6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" },
            { id: "hash-brown-oval", name: "Hash Brown Oval", price: 289, weight: "400g", category: "potato", image: "https://images.unsplash.com/photo-1563379091339-03246963d9d6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" },
            { id: "classic-patty-herbs-chilli", name: "Classic Patty with Herbs & Chilli", price: 259, weight: "400g", category: "potato", image: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" },
            { id: "potatobets", name: "Potatobets", price: 239, weight: "500g", category: "potato", image: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" },
            { id: "chilli-garlic-poppers", name: "Chilli Garlic Poppers", price: 299, weight: "400g", category: "potato", image: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80", badge: "Spicy" }
        ],
        veggie: [
            { id: "jalapeno-cheesy-pops", name: "Jalapeño Cheesy Pops", price: 349, weight: "300g", category: "veggie", image: "https://images.unsplash.com/photo-1563379091339-03246963d9d6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80", badge: "Cheesy" },
            { id: "veggie-stix", name: "Veggie Stix", price: 289, weight: "400g", category: "veggie", image: "https://images.unsplash.com/photo-1563379091339-03246963d9d6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" },
            { id: "crispy-veggie-bites", name: "Crispy Veggie Bites", price: 279, weight: "400g", category: "veggie", image: "https://images.unsplash.com/photo-1563379091339-03246963d9d6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" },
            { id: "cheesy-paneer-patty", name: "Cheesy Paneer Patty", price: 329, weight: "300g", category: "veggie", image: "https://images.unsplash.com/photo-1563379091339-03246963d9d6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80", badge: "Paneer" },
            { id: "kings-patty", name: "Kings Patty", price: 299, weight: "400g", category: "veggie", image: "https://images.unsplash.com/photo-1563379091339-03246963d9d6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" },
            { id: "veg-burger-patty", name: "Veg Burger Patty", price: 269, weight: "400g", category: "veggie", image: "https://images.unsplash.com/photo-1563379091339-03246963d9d6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" },
            { id: "spicy-paneer-patty", name: "Spicy Paneer Patty", price: 339, weight: "300g", category: "veggie", image: "https://images.unsplash.com/photo-1563379091339-03246963d9d6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80", badge: "Spicy" },
            { id: "mozzarella-cheese-stix", name: "Mozzarella Cheese Stix", price: 359, weight: "300g", category: "veggie", image: "https://images.unsplash.com/photo-1563379091339-03246963d9d6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80", badge: "Cheesy" }
        ],
        indian: [
            { id: "aloo-tikki", name: "Aloo Tikki", price: 229, weight: "500g", category: "indian", image: "https://images.unsplash.com/photo-1563379091339-03246963d9d6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80", badge: "Bestseller" },
            { id: "sabudana-patty", name: "Sabudana Patty", price: 249, weight: "400g", category: "indian", image: "https://images.unsplash.com/photo-1563379091339-03246963d9d6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" },
            { id: "mumbai-aloo-vada", name: "Mumbai Aloo Vada", price: 239, weight: "500g", category: "indian", image: "https://images.unsplash.com/photo-1563379091339-03246963d9d6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" },
            { id: "hara-bhara-kebab", name: "Hara Bhara Kebab", price: 279, weight: "400g", category: "indian", image: "https://images.unsplash.com/photo-1563379091339-03246963d9d6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80", badge: "Healthy" }
        ],
        baked: [
            { id: "margherita-pizza", name: "Margherita Pizza", price: 199, weight: "300g", category: "baked", image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80", badge: "Popular" },
            { id: "veg-paradise-pizza", name: "Veg Paradise Pizza", price: 229, weight: "300g", category: "baked", image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" },
            { id: "tandoori-paneer-pizza", name: "Tandoori Paneer Pizza", price: 259, weight: "300g", category: "baked", image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80", badge: "Paneer" },
            { id: "garden-fresh-pizza", name: "Garden Fresh Pizza", price: 219, weight: "300g", category: "baked", image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" },
            { id: "cheese-onion-capsicum-pizza", name: "Cheese Onion Capsicum Pizza", price: 239, weight: "300g", category: "baked", image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80", badge: "Cheesy" },
            { id: "mexicano-puffets", name: "Mexicano Puffets", price: 189, weight: "250g", category: "baked", image: "https://images.unsplash.com/photo-1563379091339-03246963d9d6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" },
            { id: "italiano-puffets", name: "Italiano Puffets", price: 199, weight: "250g", category: "baked", image: "https://images.unsplash.com/photo-1563379091339-03246963d9d6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" },
            { id: "schezwan-puffets", name: "Schezwan Puffets", price: 209, weight: "250g", category: "baked", image: "https://images.unsplash.com/photo-1563379091339-03246963d9d6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80", badge: "Spicy" },
            { id: "apple-crumble-pie-puffets", name: "Apple Crumble Pie Puffets", price: 229, weight: "250g", category: "baked", image: "https://images.unsplash.com/photo-1563379091339-03246963d9d6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80", badge: "Sweet" },
            { id: "apple-pie", name: "Apple Pie", price: 249, weight: "400g", category: "baked", image: "https://images.unsplash.com/photo-1563379091339-03246963d9d6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80", badge: "Dessert" },
            { id: "mango-peach-pie", name: "Mango - Peach Pie", price: 259, weight: "400g", category: "baked", image: "https://images.unsplash.com/photo-1563379091339-03246963d9d6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80", badge: "Fruity" },
            { id: "pineapple-pie", name: "Pineapple Pie", price: 249, weight: "400g", category: "baked", image: "https://images.unsplash.com/photo-1563379091339-03246963d9d6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80", badge: "Fruity" }
        ]
    };

    // Shopping Cart Logic
    class ShoppingCart {
        constructor() {
            this.cart = {};
            this.orderType = 'retail'; // Default order type
            this.loadCart();
            this.updateCartDisplay();
            this.updateProductQuantityInputs(); // FIX 1: Initialize product quantity inputs
        }
        
        loadCart() {
            const savedCart = localStorage.getItem('hyfunCart');
            if (savedCart) {
                this.cart = JSON.parse(savedCart);
            }
            
            const savedOrderType = localStorage.getItem('hyfunOrderType');
            if (savedOrderType) {
                this.orderType = savedOrderType;
            }
        }
        
        saveCart() {
            localStorage.setItem('hyfunCart', JSON.stringify(this.cart));
            localStorage.setItem('hyfunOrderType', this.orderType);
        }
        
        addItem(productId, name, price, quantity = 1) {
            if (this.cart[productId]) {
                this.cart[productId].quantity += quantity;
            } else {
                this.cart[productId] = {
                    name: name,
                    price: price,
                    quantity: quantity
                };
            }
            
            this.saveCart();
            this.updateCartDisplay();
            this.updateProductQuantityInputs(); // FIX 1: Update quantity inputs when adding
            this.showNotification(`${name} added to cart!`);
        }
        
        updateQuantity(productId, quantity) {
            if (this.cart[productId]) {
                if (quantity <= 0) {
                    delete this.cart[productId];
                } else {
                    this.cart[productId].quantity = quantity;
                }
                this.saveCart();
                this.updateCartDisplay();
                this.updateProductQuantityInputs(); // FIX 1: Update quantity inputs
            }
        }
        
        removeItem(productId) {
            if (this.cart[productId]) {
                delete this.cart[productId];
                this.saveCart();
                this.updateCartDisplay();
                this.updateProductQuantityInputs(); // FIX 1: Update quantity inputs
            }
        }
        
        clearCart() {
            this.cart = {};
            this.saveCart();
            this.updateCartDisplay();
            this.updateProductQuantityInputs(); // FIX 1: Update quantity inputs
        }
        
        setOrderType(type) {
            this.orderType = type;
            this.saveCart();
            this.updateOrderTypeDisplay();
        }
        
        getItemCount() {
            return Object.values(this.cart).reduce((total, item) => total + item.quantity, 0);
        }
        
        getSubtotal() {
            return Object.values(this.cart).reduce((total, item) => total + (item.price * item.quantity), 0);
        }
        
        getDeliveryFee() {
            if (this.orderType === 'bulk' || this.getSubtotal() >= 500) {
                return 0;
            }
            return 49;
        }
        
        getTotal() {
            return this.getSubtotal() + this.getDeliveryFee();
        }
        
        updateCartDisplay() {
            const floatingCartCount = document.getElementById('floating-cart-count');
            const floatingCheckoutBtn = document.getElementById('checkout-floating-btn');
            
            // Update floating button
            const itemCount = this.getItemCount();
            if (floatingCartCount) {
                floatingCartCount.textContent = itemCount;
            }
            
            if (floatingCheckoutBtn) {
                if (itemCount > 0) {
                    floatingCheckoutBtn.classList.add('show');
                } else {
                    floatingCheckoutBtn.classList.remove('show');
                }
            }
        }
        
        updateOrderTypeDisplay() {
            const selectedTypeDisplay = document.getElementById('selected-order-type');
            const confirmationOrderType = document.getElementById('confirmation-order-type');
            
            const typeText = this.orderType === 'retail' ? 'Retail Pack' : 'Bulk Pack';
            
            if (selectedTypeDisplay) {
                selectedTypeDisplay.textContent = typeText;
            }
            
            if (confirmationOrderType) {
                confirmationOrderType.textContent = typeText;
            }
        }
        
        updateModalCartDisplay() {
            const modalCartItems = document.getElementById('modal-cart-items');
            const modalSubtotal = document.querySelector('#your-order-modal .subtotal-amount');
            const modalDelivery = document.querySelector('#your-order-modal .delivery-fee');
            const modalTotal = document.querySelector('#your-order-modal .grand-total-amount');
            
            if (!modalCartItems) return;
            
            // Update totals
            const subtotal = this.getSubtotal();
            const deliveryFee = this.getDeliveryFee();
            const total = this.getTotal();
            
            if (modalSubtotal) modalSubtotal.textContent = `₹${subtotal}`;
            if (modalDelivery) modalDelivery.textContent = `₹${deliveryFee}`;
            if (modalTotal) modalTotal.textContent = `₹${total}`;
            
            // Update cart items display
            if (Object.keys(this.cart).length === 0) {
                modalCartItems.innerHTML = `
                    <div class="empty-cart-message">
                        <i class="fas fa-shopping-basket"></i>
                        <p>Your cart is empty</p>
                        <p class="small-text">Add items from the menu to get started</p>
                    </div>
                `;
            } else {
                let cartHTML = '';
                for (const [productId, item] of Object.entries(this.cart)) {
                    const itemTotal = item.price * item.quantity;
                    cartHTML += `
                        <div class="cart-item" data-product="${productId}">
                            <div class="cart-item-info">
                                <h4 class="cart-item-name">${item.name}</h4>
                                <p class="cart-item-price">₹${item.price} × ${item.quantity}</p>
                            </div>
                            <div class="cart-item-total">₹${itemTotal}</div>
                            <div class="cart-item-controls">
                                <button class="cart-item-minus" data-product="${productId}">-</button>
                                <span class="cart-item-qty">${item.quantity}</span>
                                <button class="cart-item-plus" data-product="${productId}">+</button>
                                <button class="cart-item-remove" data-product="${productId}"><i class="fas fa-trash"></i></button>
                            </div>
                        </div>
                    `;
                }
                modalCartItems.innerHTML = cartHTML;
            }
            
            // Update checkout review section
            this.updateCheckoutReview();
        }
        
        updateCheckoutReview() {
            const reviewItems = document.getElementById('checkout-review-items');
            const reviewSubtotal = document.querySelector('.review-subtotal');
            const reviewDelivery = document.querySelector('.review-delivery');
            const reviewTotal = document.querySelector('.review-total');
            
            if (!reviewItems) return;
            
            // Clear existing items
            reviewItems.innerHTML = '';
            
            // Add current cart items
            let reviewHTML = '';
            for (const [productId, item] of Object.entries(this.cart)) {
                const itemTotal = item.price * item.quantity;
                reviewHTML += `
                    <div class="review-item">
                        <div>
                            <strong>${item.name}</strong>
                            <div>${item.quantity} × ₹${item.price}</div>
                        </div>
                        <div>₹${itemTotal}</div>
                    </div>
                `;
            }
            reviewItems.innerHTML = reviewHTML;
            
            // Update totals
            const subtotal = this.getSubtotal();
            const deliveryFee = this.getDeliveryFee();
            const total = this.getTotal();
            
            if (reviewSubtotal) reviewSubtotal.textContent = `₹${subtotal}`;
            if (reviewDelivery) reviewDelivery.textContent = `₹${deliveryFee}`;
            if (reviewTotal) reviewTotal.textContent = `₹${total}`;
        }
        
        updateProductQuantityInputs() {
            // Update quantity inputs on product cards to match cart
            for (const [productId, item] of Object.entries(this.cart)) {
                const qtyInput = document.querySelector(`.qty-input[data-product="${productId}"]`);
                if (qtyInput) {
                    qtyInput.value = item.quantity;
                }
            }
            
            // Set initial values for all inputs that aren't in cart
            const allQtyInputs = document.querySelectorAll('.qty-input');
            allQtyInputs.forEach(input => {
                const productId = input.dataset.product;
                if (!this.cart[productId] && input.value === '') {
                    input.value = '0';
                }
            });
        }
        
        showNotification(message) {
            const notification = document.getElementById('cart-notification');
            const notificationContent = notification.querySelector('span');
            
            notificationContent.textContent = message;
            notification.classList.add('show');
            
            setTimeout(() => {
                notification.classList.remove('show');
            }, 3000);
        }
        
        generateOrderId() {
            const timestamp = Date.now().toString().slice(-4);
            const random = Math.floor(1000 + Math.random() * 9000);
            return `HYFUN-HYFUN-${timestamp}${random}`;
        }
        
        prepareReceiptData() {
            const receiptData = {
                orderId: '',
                date: new Date().toLocaleDateString('en-IN', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                    hour: '2-digit',
                    minute: '2-digit'
                }),
                orderType: this.orderType === 'retail' ? 'Retail Pack' : 'Bulk Pack',
                customerName: document.getElementById('customer-name')?.value || '--',
                customerPhone: document.getElementById('customer-phone')?.value || '--',
                customerEmail: document.getElementById('customer-email')?.value || '--',
                deliveryDate: document.getElementById('delivery-date')?.value || '--',
                deliveryAddress: document.getElementById('delivery-address')?.value || '--',
                instructions: document.getElementById('special-instructions')?.value || 'None',
                items: this.cart,
                subtotal: this.getSubtotal(),
                deliveryFee: this.getDeliveryFee(),
                total: this.getTotal()
            };
            
            return receiptData;
        }
    }
    
    // DOM Content Loaded
    document.addEventListener('DOMContentLoaded', function() {
        // Initialize cart
        let cart = new ShoppingCart();
        
        // Load all products
        loadAllProducts();
        
        // Set minimum date for delivery date
        const today = new Date();
        const tomorrow = new Date(today);
        tomorrow.setDate(tomorrow.getDate() + 1);
        const minDate = tomorrow.toISOString().split('T')[0];
        const deliveryDateInput = document.getElementById('delivery-date');
        if (deliveryDateInput) {
            deliveryDateInput.min = minDate;
            deliveryDateInput.value = minDate;
        }
        
        // Category filtering
        const categoryButtons = document.querySelectorAll('.category-btn');
        const productContainers = document.querySelectorAll('.products-container');
        
        categoryButtons.forEach(button => {
            button.addEventListener('click', function() {
                const category = this.dataset.category;
                
                // Update active button
                categoryButtons.forEach(btn => btn.classList.remove('active'));
                this.classList.add('active');
                
                // Hide all containers
                productContainers.forEach(container => {
                    container.classList.remove('active');
                });
                
                // Show selected category or all products
                if (category === 'all') {
                    document.getElementById('all-products').classList.add('active');
                    loadAllProducts();
                } else {
                    const targetContainer = document.getElementById(`${category}-products`);
                    if (targetContainer) {
                        targetContainer.classList.add('active');
                        loadCategoryProducts(category);
                    }
                }
            });
        });
        
        // Load all products into the main grid
        function loadAllProducts() {
            const allProductsGrid = document.querySelector('#all-products .products-grid');
            if (!allProductsGrid) return;
            
            allProductsGrid.innerHTML = '';
            
            // Combine all products
            const allProducts = [];
            for (const category in products) {
                allProducts.push(...products[category]);
            }
            
            // Sort by name
            allProducts.sort((a, b) => a.name.localeCompare(b.name));
            
            // Add to grid
            allProducts.forEach(product => {
                allProductsGrid.appendChild(createProductCard(product));
            });
            
            // Update quantity inputs after products are loaded
            cart.updateProductQuantityInputs();
        }
        
        // Load products for specific category
        function loadCategoryProducts(category) {
            const gridId = `${category}-grid`;
            const categoryGrid = document.getElementById(gridId);
            if (!categoryGrid || !products[category]) return;
            
            categoryGrid.innerHTML = '';
            
            products[category].forEach(product => {
                categoryGrid.appendChild(createProductCard(product));
            });
            
            // Update quantity inputs after products are loaded
            cart.updateProductQuantityInputs();
        }
        
        // Create product card HTML with better design
        function createProductCard(product) {
            const card = document.createElement('div');
            card.className = 'product-card';
            card.dataset.category = product.category;
            
            const badge = product.badge ? `<div class="product-badge">${product.badge}</div>` : '';
            
            // FIX 1: Set initial quantity from cart
            const cartQuantity = cart.cart[product.id] ? cart.cart[product.id].quantity : 0;
            
            card.innerHTML = `
                ${badge}
                <div class="product-image">
                    <img src="${product.image}" alt="${product.name}" onerror="this.src='https://images.unsplash.com/photo-1563379091339-03246963d9d6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'">
                </div>
                <h3 class="product-name">${product.name}</h3>
                <span class="product-type">${getCategoryName(product.category)}</span>
                <p>Premium quality ${product.name.toLowerCase()}. Perfect for quick snacks, parties, and family meals. Ready to cook in minutes.</p>
                <div class="product-features">
                    <li>Net Weight: ${product.weight}</li>
                    <li>Ready to Cook</li>
                    <li>Frozen & Preserved</li>
                    <li>Hygienically Packed</li>
                </div>
                <div class="product-pricing">
                    <div class="price">₹${product.price}</div>
                    <div class="quantity-controls">
                        <button class="qty-btn minus" data-product="${product.id}">-</button>
                        <input type="number" class="qty-input" value="${cartQuantity}" min="0" max="20" data-product="${product.id}">
                        <button class="qty-btn plus" data-product="${product.id}">+</button>
                    </div>
                </div>
                <button class="add-to-cart-btn" data-product="${product.id}" data-name="${product.name}" data-price="${product.price}">
                    <i class="fas fa-cart-plus"></i> Add to Cart
                </button>
            `;
            
            return card;
        }
        
        // Get category display name
        function getCategoryName(category) {
            const names = {
                'fries': 'French Fries',
                'potato': 'Potato Specialties',
                'veggie': 'Veggie Specialties',
                'indian': 'Indian Ethnic',
                'baked': 'Baked Snacks'
            };
            return names[category] || category;
        }
        
        // Event delegation for product interactions
        document.addEventListener('click', function(e) {
            // Plus buttons
            if (e.target.classList.contains('plus')) {
                const productId = e.target.dataset.product;
                const qtyInput = document.querySelector(`.qty-input[data-product="${productId}"]`);
                if (qtyInput) {
                    let value = parseInt(qtyInput.value) || 0;
                    if (value < 20) {
                        qtyInput.value = value + 1;
                        // Update cart immediately
                        const addButton = document.querySelector(`.add-to-cart-btn[data-product="${productId}"]`);
                        if (addButton) {
                            const productName = addButton.dataset.name;
                            const productPrice = parseInt(addButton.dataset.price);
                            cart.addItem(productId, productName, productPrice, 1);
                        }
                    }
                }
            }
            
            // Minus buttons
            if (e.target.classList.contains('minus')) {
                const productId = e.target.dataset.product;
                const qtyInput = document.querySelector(`.qty-input[data-product="${productId}"]`);
                if (qtyInput) {
                    let value = parseInt(qtyInput.value) || 0;
                    if (value > 0) {
                        qtyInput.value = value - 1;
                        // Update cart immediately
                        if (cart.cart[productId]) {
                            if (value - 1 === 0) {
                                cart.removeItem(productId);
                            } else {
                                cart.updateQuantity(productId, value - 1);
                            }
                        }
                    }
                }
            }
            
            // Add to cart buttons
            if (e.target.classList.contains('add-to-cart-btn')) {
                const productId = e.target.dataset.product;
                const productName = e.target.dataset.name;
                const productPrice = parseInt(e.target.dataset.price);
                const qtyInput = document.querySelector(`.qty-input[data-product="${productId}"]`);
                const quantity = parseInt(qtyInput?.value) || 1;
                
                if (quantity > 0) {
                    cart.addItem(productId, productName, productPrice, quantity);
                    // Don't reset to 0, keep the quantity in the input
                }
            }
            
            // Cart item controls in modal
            if (e.target.classList.contains('cart-item-minus') || e.target.closest('.cart-item-minus')) {
                const button = e.target.classList.contains('cart-item-minus') ? e.target : e.target.closest('.cart-item-minus');
                const productId = button.dataset.product;
                
                if (cart.cart[productId] && cart.cart[productId].quantity > 1) {
                    cart.updateQuantity(productId, cart.cart[productId].quantity - 1);
                } else {
                    cart.removeItem(productId);
                }
                cart.updateModalCartDisplay();
            }
            
            if (e.target.classList.contains('cart-item-plus') || e.target.closest('.cart-item-plus')) {
                const button = e.target.classList.contains('cart-item-plus') ? e.target : e.target.closest('.cart-item-plus');
                const productId = button.dataset.product;
                
                if (cart.cart[productId] && cart.cart[productId].quantity < 20) {
                    cart.updateQuantity(productId, cart.cart[productId].quantity + 1);
                    cart.updateModalCartDisplay();
                }
            }
            
            if (e.target.classList.contains('cart-item-remove') || e.target.closest('.cart-item-remove')) {
                const button = e.target.classList.contains('cart-item-remove') ? e.target : e.target.closest('.cart-item-remove');
                const productId = button.dataset.product;
                cart.removeItem(productId);
                cart.updateModalCartDisplay();
            }
        });
        
        // Quantity input change events
        document.addEventListener('change', function(e) {
            if (e.target.classList.contains('qty-input')) {
                const productId = e.target.dataset.product;
                const quantity = parseInt(e.target.value) || 0;
                
                // Update cart if quantity > 0, otherwise remove from cart
                if (quantity > 0) {
                    // Find product details
                    const addButton = document.querySelector(`.add-to-cart-btn[data-product="${productId}"]`);
                    if (addButton) {
                        const productName = addButton.dataset.name;
                        const productPrice = parseInt(addButton.dataset.price);
                        cart.updateQuantity(productId, quantity);
                    }
                } else {
                    cart.removeItem(productId);
                }
            }
        });
        
        // Floating checkout button
        const floatingCheckoutBtn = document.getElementById('checkout-floating-btn');
        const yourOrderModal = document.getElementById('your-order-modal');
        const closeYourOrderModal = document.getElementById('close-your-order-modal');
        
        if (floatingCheckoutBtn) {
            floatingCheckoutBtn.addEventListener('click', function() {
                if (cart.getItemCount() === 0) {
                    alert('Please add items to your cart before checkout.');
                    return;
                }
                
                // Update modal cart display
                cart.updateModalCartDisplay();
                
                // Set selected order type
                const orderTypeOptions = document.querySelectorAll('.order-type-option');
                orderTypeOptions.forEach(option => {
                    option.classList.remove('selected');
                    if (option.dataset.type === cart.orderType) {
                        option.classList.add('selected');
                    }
                });
                
                // Show modal
                yourOrderModal.classList.add('active');
                document.body.style.overflow = 'hidden';
            });
        }
        
        if (closeYourOrderModal) {
            closeYourOrderModal.addEventListener('click', function() {
                yourOrderModal.classList.remove('active');
                document.body.style.overflow = 'auto';
            });
        }
        
        // Order type selection
        const orderTypeOptions = document.querySelectorAll('.order-type-option');
        orderTypeOptions.forEach(option => {
            option.addEventListener('click', function() {
                const type = this.dataset.type;
                
                // Update selection
                orderTypeOptions.forEach(opt => opt.classList.remove('selected'));
                this.classList.add('selected');
                
                // Update cart
                cart.setOrderType(type);
                cart.updateModalCartDisplay();
            });
        });
        
        // Confirm order button (Step 1 -> Step 2)
        const confirmOrderBtn = document.getElementById('confirm-order-btn');
        const checkoutModal = document.getElementById('checkout-modal');
        const backToOrderSummaryBtn = document.getElementById('back-to-order-summary');
        
        if (confirmOrderBtn) {
            confirmOrderBtn.addEventListener('click', function() {
                // Validate cart has items
                if (cart.getItemCount() === 0) {
                    alert('Your cart is empty. Please add items before proceeding.');
                    return;
                }
                
                // For bulk orders, validate minimum amount
                if (cart.orderType === 'bulk' && cart.getSubtotal() < 5000) {
                    alert('Bulk orders require a minimum purchase of ₹5000. Please add more items to your cart or switch to Retail Pack.');
                    return;
                }
                
                // Close current modal and open checkout modal
                yourOrderModal.classList.remove('active');
                checkoutModal.classList.add('active');
                
                // Update order type display
                cart.updateOrderTypeDisplay();
                cart.updateCheckoutReview();
            });
        }
        
        // Back to order summary button
        if (backToOrderSummaryBtn) {
            backToOrderSummaryBtn.addEventListener('click', function(e) {
                e.preventDefault();
                
                // Go back to order summary
                checkoutModal.classList.remove('active');
                yourOrderModal.classList.add('active');
                
                // Update modal cart display
                cart.updateModalCartDisplay();
            });
        }
        
        // Order form submission (Step 2 -> Step 3)
        const orderForm = document.getElementById('order-form');
        const confirmationModal = document.getElementById('confirmation-modal');
        
        if (orderForm) {
            orderForm.addEventListener('submit', function(e) {
                e.preventDefault();
                
                // Validate form
                const name = document.getElementById('customer-name').value;
                const phone = document.getElementById('customer-phone').value;
                const address = document.getElementById('delivery-address').value;
                const date = document.getElementById('delivery-date').value;
                
                if (!name || !phone || !address || !date) {
                    alert('Please fill all required fields');
                    return;
                }
                
                if (phone.length !== 10 || !/^\d+$/.test(phone)) {
                    alert('Please enter a valid 10-digit phone number');
                    return;
                }
                
                // Process order
                processOrder();
            });
        }
        
        // Process order function - FIX 2: Properly clear cart after order
        function processOrder() {
            const orderId = cart.generateOrderId();
            const name = document.getElementById('customer-name').value;
            const total = cart.getTotal();
            const date = document.getElementById('delivery-date').value;
            
            // Update confirmation modal
            document.getElementById('order-id-display').textContent = orderId;
            document.getElementById('confirmation-name').textContent = name;
            document.getElementById('confirmation-total').textContent = `₹${total}`;
            document.getElementById('confirmation-date').textContent = new Date(date).toLocaleDateString('en-IN', {
                weekday: 'long',
                year: 'numeric',
                month: 'long',
                day: 'numeric'
            });
            
            // Close checkout modal and show confirmation
            checkoutModal.classList.remove('active');
            confirmationModal.classList.add('active');
            
            // FIX 2: Clear cart after order
            cart.clearCart();
        }
        
        // Print order receipt - FIX 3: Fixed printing issue
        const printReceiptBtn = document.getElementById('print-order-receipt');
        const receiptContainer = document.getElementById('receipt-container');
        
        if (printReceiptBtn) {
            printReceiptBtn.addEventListener('click', function() {
                // Prepare receipt data
                const receiptData = cart.prepareReceiptData();
                receiptData.orderId = document.getElementById('order-id-display').textContent;
                
                // Populate receipt
                document.getElementById('receipt-order-id').textContent = receiptData.orderId;
                document.getElementById('receipt-date').textContent = receiptData.date;
                document.getElementById('receipt-order-type').textContent = receiptData.orderType;
                document.getElementById('receipt-customer-name').textContent = receiptData.customerName;
                document.getElementById('receipt-customer-phone').textContent = receiptData.customerPhone;
                document.getElementById('receipt-customer-email').textContent = receiptData.customerEmail;
                document.getElementById('receipt-delivery-date').textContent = receiptData.deliveryDate;
                document.getElementById('receipt-delivery-address').textContent = receiptData.deliveryAddress;
                document.getElementById('receipt-instructions').textContent = receiptData.instructions;
                
                // Populate receipt items
                const receiptItemsBody = document.getElementById('receipt-items-body');
                receiptItemsBody.innerHTML = '';
                
                // FIX 3: Get the cart data before it was cleared
                const savedCart = localStorage.getItem('hyfunCartLastOrder');
                let orderItems = {};
                
                if (savedCart) {
                    orderItems = JSON.parse(savedCart);
                }
                
                for (const [productId, item] of Object.entries(orderItems)) {
                    const itemTotal = item.price * item.quantity;
                    const row = document.createElement('tr');
                    row.innerHTML = `
                        <td>${item.name}</td>
                        <td>${item.quantity}</td>
                        <td>₹${item.price}</td>
                        <td>₹${itemTotal}</td>
                    `;
                    receiptItemsBody.appendChild(row);
                }
                
                // Update totals
                document.getElementById('receipt-subtotal').textContent = `₹${receiptData.subtotal}`;
                document.getElementById('receipt-delivery-fee').textContent = `₹${receiptData.deliveryFee}`;
                document.getElementById('receipt-total').innerHTML = `<strong>₹${receiptData.total}</strong>`;
                
                // Show receipt and print
                receiptContainer.classList.add('show');
                
                setTimeout(() => {
                    window.print();
                    
                    // Hide receipt after printing
                    setTimeout(() => {
                        receiptContainer.classList.remove('show');
                    }, 500);
                }, 500);
            });
        }
        
        // New order button
        const newOrderBtn = document.getElementById('new-order');
        if (newOrderBtn) {
            newOrderBtn.addEventListener('click', function() {
                confirmationModal.classList.remove('active');
                document.body.style.overflow = 'auto';
                
                // Clear form
                if (orderForm) {
                    orderForm.reset();
                    
                    // Reset date to tomorrow
                    if (deliveryDateInput) {
                        deliveryDateInput.value = minDate;
                    }
                }
            });
        }
        
        // Bulk order button in banner
        const bulkOrderBtn = document.getElementById('bulk-order-button');
        if (bulkOrderBtn) {
            bulkOrderBtn.addEventListener('click', function() {
                const phone = '+917575002999';
                const message = 'Hello, I am interested in bulk order for HyFun Foods products. Please contact me.';
                const whatsappUrl = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
                window.open(whatsappUrl, '_blank');
            });
        }
        
        // Close modals when clicking outside
        window.addEventListener('click', function(e) {
            if (e.target === yourOrderModal) {
                yourOrderModal.classList.remove('active');
                document.body.style.overflow = 'auto';
            }
            if (e.target === checkoutModal) {
                checkoutModal.classList.remove('active');
                document.body.style.overflow = 'auto';
            }
            if (e.target === confirmationModal) {
                confirmationModal.classList.remove('active');
                document.body.style.overflow = 'auto';
            }
        });
        
        // Header scroll effect
        window.addEventListener('scroll', function() {
            const header = document.querySelector('header');
            if (window.scrollY > 50) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });
        
        // Save cart before clearing for receipt purposes
        window.addEventListener('beforeunload', function() {
            if (cart.cart && Object.keys(cart.cart).length > 0) {
                localStorage.setItem('hyfunCartLastOrder', JSON.stringify(cart.cart));
            }
        });
    });