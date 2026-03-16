// Product Data
const products = {
    phones: [
        { id: 'p1', name: 'iPhone 15 Pro Max', category: 'iOS', price: 1199.00, image: 'https://images.unsplash.com/photo-1696446701796-da61225697cc?q=80&w=800&auto=format&fit=crop' },
        { id: 'p2', name: 'iPhone 15 Pro', category: 'iOS', price: 999.00, image: 'https://images.unsplash.com/photo-1696446700622-44672322472b?q=80&w=800&auto=format&fit=crop' },
        { id: 'p3', name: 'iPhone 15', category: 'iOS', price: 799.00, image: 'https://images.unsplash.com/photo-1695048133142-1a20484d2569?q=80&w=800&auto=format&fit=crop' },
        { id: 'p4', name: 'iPhone 14 Pro', category: 'iOS', price: 899.00, image: 'https://images.unsplash.com/photo-1663465373099-2a945118ac28?q=80&w=800&auto=format&fit=crop' },
        { id: 'p5', name: 'iPhone SE 3', category: 'iOS', price: 429.00, image: 'https://images.unsplash.com/photo-1591337676887-a4b7f032231db?q=80&w=800&auto=format&fit=crop' },
        { id: 'p6', name: 'iPhone 13', category: 'iOS', price: 599.00, image: 'https://images.unsplash.com/photo-1632661674596-df8be070a5c5?q=80&w=800&auto=format&fit=crop' },
        { id: 'p7', name: 'Samsung Galaxy S24 Ultra', category: 'Android', price: 1299.00, image: 'https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?q=80&w=800&auto=format&fit=crop' },
        { id: 'p8', name: 'Samsung Galaxy Z Fold 5', category: 'Android', price: 1799.00, image: 'https://images.unsplash.com/photo-1678911820864-e2c567c655d7?q=80&w=800&auto=format&fit=crop' },
        { id: 'p9', name: 'Google Pixel 8 Pro', category: 'Android', price: 999.00, image: 'https://images.unsplash.com/photo-1598327105666-5b89351aff97?q=80&w=800&auto=format&fit=crop' },
        { id: 'p10', name: 'OnePlus 12', category: 'Android', price: 799.00, image: 'https://images.unsplash.com/photo-1546054454-aa26e2b734c7?q=80&w=800&auto=format&fit=crop' },
        { id: 'p11', name: 'Asus ROG Phone 8', category: 'Gaming', price: 1099.00, image: 'https://images.unsplash.com/photo-1605280263929-1c42c62ef169?q=80&w=800&auto=format&fit=crop' },
        { id: 'p12', name: 'Xiaomi 14 Pro', category: 'Android', price: 899.00, image: 'https://images.unsplash.com/photo-1593640408182-31c70c8268f5?q=80&w=800&auto=format&fit=crop' }
    ],
    accessories: [
        { id: 'a1', name: 'AirPods Pro 2', category: 'Audio', price: 249.00, image: 'https://images.unsplash.com/photo-1600294037681-c80b4cb5b434?q=80&w=800&auto=format&fit=crop' },
        { id: 'a2', name: 'MagSafe Wireless Charger', category: 'Charging', price: 39.00, image: 'https://images.unsplash.com/photo-1615526678601-26c39f0d46dd?q=80&w=800&auto=format&fit=crop' },
        { id: 'a3', name: 'Apple Watch Series 9', category: 'Wearables', price: 399.00, image: 'https://images.unsplash.com/photo-1579586337278-3befd40fd17a?q=80&w=800&auto=format&fit=crop' },
        { id: 'a4', name: 'Sony WH-1000XM5', category: 'Audio', price: 398.00, image: 'https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?q=80&w=800&auto=format&fit=crop' },
        { id: 'a5', name: 'Galaxy Buds 2 Pro', category: 'Audio', price: 199.00, image: 'https://images.unsplash.com/photo-1606220588913-b3aecb3b0d23?q=80&w=800&auto=format&fit=crop' },
        { id: 'a6', name: 'Anker PowerBank 20K', category: 'Charging', price: 59.00, image: 'https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?q=80&w=800&auto=format&fit=crop' },
        { id: 'a7', name: 'Galaxy Watch 6 Classic', category: 'Wearables', price: 349.00, image: 'https://images.unsplash.com/photo-1434493789847-2f02dc6ca35d?q=80&w=800&auto=format&fit=crop' },
        { id: 'a8', name: 'Bose QuietComfort Earbuds', category: 'Audio', price: 279.00, image: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?q=80&w=800&auto=format&fit=crop' }
    ]
};

// State
let users = JSON.parse(localStorage.getItem('users')) || [];
let currentUser = JSON.parse(localStorage.getItem('currentUser')) || null;
let cart = JSON.parse(localStorage.getItem('cart')) || [];
let orders = JSON.parse(localStorage.getItem('orders')) || [];
let isLogin = true;

// DOM Elements
const phonesGrid = document.getElementById('phones-grid');
const accessoriesGrid = document.getElementById('accessories-grid');
const hamburger = document.getElementById('hamburger');
const navLinksContainer = document.querySelector('.nav-links');

// Modals
const cartModal = document.getElementById('cart-modal');
const authModal = document.getElementById('auth-modal');
const checkoutModal = document.getElementById('checkout-modal');
const successModal = document.getElementById('success-modal');
const ordersModal = document.getElementById('orders-modal');

// Close Buttons
const closeCart = document.getElementById('close-cart');
const closeAuth = document.getElementById('close-auth');
const closeCheckout = document.getElementById('close-checkout');
const closeSuccess = document.getElementById('close-success');
const closeOrders = document.getElementById('close-orders');

// Cart specific elements
const cartItemsContainer = document.getElementById('cart-items');
const cartTotalElement = document.getElementById('cart-total-price');
const cartCountElements = document.querySelectorAll('.cart-count');
const desktopCartIcon = document.getElementById('desktop-cart-icon');
const mobileCartIcon = document.getElementById('mobile-cart-icon');
const proceedToCheckoutBtn = document.getElementById('checkout-btn');

// Orders specific elements
const ordersIcon = document.getElementById('orders-icon');
const mobileOrdersIcon = document.getElementById('mobile-orders-icon');
const mobileOrdersLink = document.querySelector('.mobile-orders-link');
const ordersList = document.getElementById('orders-list');
const mobileAuthIcon = document.getElementById('mobile-auth-icon');
const mobileAuthLink = document.querySelector('.mobile-auth-link');

// User specific
const userIcon = document.getElementById('user-icon');

// Auth elements
const authSwitchLink = document.getElementById('auth-switch-link');
const authTitle = document.getElementById('auth-title');
const authSwitchText = document.getElementById('auth-switch-text');
const authSubmit = document.getElementById('auth-submit');
const nameGroup = document.getElementById('name-group');
const authForm = document.getElementById('auth-form');

// Checkout elements
const paymentForm = document.getElementById('payment-form');
const paymentMethodSelect = document.getElementById('payment-method');
const cardDetails = document.getElementById('card-details');
const paypalDetails = document.getElementById('paypal-details');
const codDetails = document.getElementById('cod-details');
const payBtn = document.getElementById('pay-btn');

// Custom Validation Logic
function showValidationError(input, message) {
    input.classList.add('invalid');
    let errorDiv = input.nextElementSibling;
    if (!errorDiv || !errorDiv.classList.contains('error-message')) {
        errorDiv = document.createElement('div');
        errorDiv.className = 'error-message';
        input.parentNode.insertBefore(errorDiv, input.nextSibling);
    }
    errorDiv.textContent = message;
    errorDiv.style.display = 'block';
}

function clearValidationError(input) {
    input.classList.remove('invalid');
    let errorDiv = input.nextElementSibling;
    if (errorDiv && errorDiv.classList.contains('error-message')) {
        errorDiv.style.display = 'none';
        errorDiv.textContent = '';
    }
}

function validateInput(input) {
    if (input.disabled) {
        clearValidationError(input);
        return true;
    }
    
    if (!input.validity.valid) {
        let message = input.validationMessage;
        if (input.validity.valueMissing) {
            message = 'This field is required.';
        } else if (input.validity.typeMismatch && input.type === 'email') {
            message = 'Please enter a valid email address.';
        } else if (input.pattern && input.validity.patternMismatch) {
            message = input.title || 'Please match the format requested.';
        } else if (input.validity.tooShort) {
            message = `Minimum length is ${input.minLength} characters.`;
        }
        showValidationError(input, message);
        return false;
    } else {
        clearValidationError(input);
        return true;
    }
}

function setupFormValidation(form) {
    const inputs = form.querySelectorAll('input, select');
    inputs.forEach(input => {
        input.addEventListener('input', () => {
            if (input.classList.contains('invalid')) {
                validateInput(input);
            }
        });
        input.addEventListener('blur', () => {
            validateInput(input);
        });
    });
}

// Initialization
function init() {
    updateAuthUI();
    renderProducts(products.phones, phonesGrid);
    renderProducts(products.accessories, accessoriesGrid);
    updateCartUI(); 
    setupEventListeners();
    
    setupFormValidation(authForm);
    setupFormValidation(paymentForm);
}

function updateAuthUI() {
    if (currentUser) {
        userIcon.innerHTML = `<i class="fas fa-sign-out-alt"></i><span style="font-size: 0.8rem; margin-left:5px; font-weight:600;" class="logout-text">Logout</span>`;
        userIcon.title = "Logout " + currentUser.name;
        ordersIcon.style.display = 'inline-flex'; // Show orders icon
        if(mobileOrdersLink) mobileOrdersLink.style.display = 'block';
        if(mobileAuthIcon) mobileAuthIcon.innerHTML = 'Logout';
        if(mobileAuthLink) mobileAuthLink.style.display = 'block';
    } else {
        userIcon.innerHTML = `<i class="fas fa-user"></i>`;
        userIcon.title = "Login";
        ordersIcon.style.display = 'none'; // Hide orders icon
        if(mobileOrdersLink) mobileOrdersLink.style.display = 'none';
        if(mobileAuthIcon) mobileAuthIcon.innerHTML = 'Login';
        if(mobileAuthLink) mobileAuthLink.style.display = 'block';
    }
}

function renderProducts(productList, container) {
    container.innerHTML = productList.map(item => {
        const cartItem = cart.find(c => c.id === item.id);
        
        let controlsButton = '';
        if (cartItem) {
            controlsButton = `
                <div class="product-qty-controls">
                    <button onclick="changeQty('${item.id}', -1)">-</button>
                    <span>${cartItem.quantity}</span>
                    <button onclick="changeQty('${item.id}', 1)">+</button>
                </div>
            `;
        } else {
            controlsButton = `
                <button class="add-to-cart-btn" onclick="addToCart('${item.id}', '${item.name.replace(/'/g, "\\'")}', ${item.price}, '${item.image}')">
                    Add to Cart
                </button>
            `;
        }
        
        return `
            <div class="product-card">
                <div class="product-image">
                    <img src="${item.image}" alt="${item.name}">
                </div>
                <div class="product-info">
                    <div class="product-category">${item.category}</div>
                    <h3 class="product-title">${item.name}</h3>
                    <div class="product-footer">
                        <span class="product-price">$${item.price.toFixed(2)}</span>
                        ${controlsButton}
                    </div>
                </div>
            </div>
        `;
    }).join('');
}


// Cart Logic
window.addToCart = function(id, name, price, image) {
    const existingItem = cart.find(item => item.id === id);
    if(existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({ id, name, price, image, quantity: 1 });
    }
    updateCartUI();
    showToast(`${name} added to cart`);
}

function updateCartUI() {
    // Save to local storage
    localStorage.setItem('cart', JSON.stringify(cart));

    // Update product cards
    renderProducts(products.phones, phonesGrid);
    renderProducts(products.accessories, accessoriesGrid);

    const totalCount = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartCountElements.forEach(el => {
        el.textContent = totalCount;
        el.style.display = totalCount > 0 ? 'flex' : 'none';
    });
    
    const totalPrice = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    cartTotalElement.textContent = '$' + totalPrice.toFixed(2);
    
    // Update Checkout Button with Price
    payBtn.textContent = `Place Order ($${totalPrice.toFixed(2)})`;

    if (cart.length === 0) {
        cartItemsContainer.innerHTML = '<div class="empty-cart-message">Your cart is empty.</div>';
        proceedToCheckoutBtn.disabled = true;
        return;
    }
    
    proceedToCheckoutBtn.disabled = false;
    
    cartItemsContainer.innerHTML = cart.map(item => `
        <div class="cart-item">
            <img src="${item.image}" alt="${item.name}">
            <div class="cart-item-details">
                <div class="cart-item-title">${item.name}</div>
                <div class="cart-item-price">$${item.price.toFixed(2)}</div>
                <div class="cart-item-controls">
                    <button class="qty-btn" onclick="changeQty('${item.id}', -1)">-</button>
                    <span>${item.quantity}</span>
                    <button class="qty-btn" onclick="changeQty('${item.id}', 1)">+</button>
                    <button class="remove-btn" onclick="removeItem('${item.id}')">Remove</button>
                </div>
            </div>
        </div>
    `).join('');
}

window.changeQty = function(id, delta) {
    const item = cart.find(i => i.id === id);
    if(item) {
        item.quantity += delta;
        if(item.quantity <= 0) {
            cart = cart.filter(i => i.id !== id);
        }
    }
    updateCartUI();
}

window.removeItem = function(id) {
    cart = cart.filter(item => item.id !== id);
    updateCartUI();
}

// Order History Logic
function renderOrders() {
    if (!currentUser) return;
    
    const userOrders = orders.filter(o => o.userEmail === currentUser.email);
    
    if (userOrders.length === 0) {
        ordersList.innerHTML = '<div class="empty-cart-message">No orders found.</div>';
        return;
    }
    
    // Sort newest to oldest
    userOrders.sort((a, b) => new Date(b.date) - new Date(a.date));

    ordersList.innerHTML = userOrders.map(order => `
        <div class="cart-item" style="flex-direction: column; align-items: flex-start;">
            <div style="width: 100%; display: flex; justify-content: space-between; border-bottom: 1px solid var(--border-color); padding-bottom: 0.5rem; margin-bottom: 0.5rem;">
                <strong>Order #${order.orderId}</strong>
                <span style="color: var(--text-secondary); font-size: 0.875rem;">${new Date(order.date).toLocaleDateString()}</span>
            </div>
            <div style="width: 100%;">
                ${order.items.map(item => `
                    <div style="display: flex; justify-content: space-between; font-size: 0.875rem; color: var(--text-secondary);">
                        <span>${item.quantity}x ${item.name}</span>
                        <span>$${(item.price * item.quantity).toFixed(2)}</span>
                    </div>
                `).join('')}
            </div>
            <div style="width: 100%; text-align: right; margin-top: 0.5rem; font-weight: bold; color: var(--primary);">
                Total: $${order.total.toFixed(2)}
            </div>
            <div style="font-size: 0.75rem; margin-top: 4px; color: var(--success);">
                Paid via ${order.paymentMethod.toUpperCase()}
            </div>
        </div>
    `).join('');
}

// Modal Toggle Logic
function openModal(modal) {
    modal.classList.add('active');
}
function closeModal(modal) {
    modal.classList.remove('active');
}

// Simple Toast Notification
function showToast(message) {
    const toast = document.createElement('div');
    toast.style.position = 'fixed';
    toast.style.bottom = '20px';
    toast.style.left = '50%';
    toast.style.transform = 'translateX(-50%)';
    toast.style.background = 'var(--primary)';
    toast.style.color = '#fff';
    toast.style.padding = '12px 24px';
    toast.style.borderRadius = '8px';
    toast.style.zIndex = '3000';
    toast.style.boxShadow = '0 10px 15px -3px rgba(0, 0, 0, 0.1)';
    toast.textContent = message;
    
    document.body.appendChild(toast);
    
    setTimeout(() => {
        toast.style.opacity = '0';
        toast.style.transition = 'opacity 0.5s ease';
        setTimeout(() => document.body.removeChild(toast), 500);
    }, 2000);
}


function setupEventListeners() {
    // Hamburger Menu Handle
    if(hamburger) {
        hamburger.addEventListener('click', () => {
            navLinksContainer.classList.toggle('active');
        });
    }

    // Open Modals
    desktopCartIcon.addEventListener('click', () => openModal(cartModal));
    mobileCartIcon.addEventListener('click', () => openModal(cartModal));
    
    ordersIcon.addEventListener('click', () => {
        renderOrders();
        openModal(ordersModal);
    });

    if(mobileOrdersIcon) {
        mobileOrdersIcon.addEventListener('click', (e) => {
            e.preventDefault();
            navLinksContainer.classList.remove('active');
            renderOrders();
            openModal(ordersModal);
        });
    }
    
    // Shared logout logic
    function handleLogout() {
        currentUser = null;
        localStorage.removeItem('currentUser');
        updateAuthUI();
        showToast("Logged out successfully");
        updateCartUI();
    }

    // Auth Modal handling
    userIcon.addEventListener('click', () => {
        if (currentUser) {
            handleLogout();
        } else {
            openModal(authModal);
        }
    });

    if(mobileAuthIcon) {
        mobileAuthIcon.addEventListener('click', (e) => {
            e.preventDefault();
            navLinksContainer.classList.remove('active');
            if (currentUser) {
                handleLogout();
            } else {
                openModal(authModal);
            }
        });
    }

    proceedToCheckoutBtn.addEventListener('click', () => {
        closeModal(cartModal);
        if (!currentUser) {
            showToast("Please login or sign up to proceed to checkout!");
            openModal(authModal);
        } else {
            openModal(checkoutModal);
        }
    });
    
    // Close Modals
    closeCart.addEventListener('click', () => closeModal(cartModal));
    closeAuth.addEventListener('click', () => closeModal(authModal));
    closeCheckout.addEventListener('click', () => closeModal(checkoutModal));
    closeSuccess.addEventListener('click', () => closeModal(successModal));
    closeOrders.addEventListener('click', () => closeModal(ordersModal));
    
    // Close on Outside Click
    window.addEventListener('click', (e) => {
        if(e.target === cartModal) closeModal(cartModal);
        if(e.target === authModal) closeModal(authModal);
        if(e.target === checkoutModal) closeModal(checkoutModal);
        if(e.target === successModal) closeModal(successModal);
        if(e.target === ordersModal) closeModal(ordersModal);
    });
    
    // Auth Switch
    authSwitchLink.addEventListener('click', (e) => {
        e.preventDefault();
        isLogin = !isLogin;
        if(isLogin) {
            authTitle.textContent = 'Login';
            nameGroup.style.display = 'none';
            document.getElementById('name').removeAttribute('required');
            authSubmit.textContent = 'Login';
            authSwitchText.textContent = "Don't have an account?";
            authSwitchLink.textContent = "Sign up";
        } else {
            authTitle.textContent = 'Sign Up';
            nameGroup.style.display = 'block';
            document.getElementById('name').setAttribute('required', 'true');
            authSubmit.textContent = 'Create Account';
            authSwitchText.textContent = "Already have an account?";
            authSwitchLink.textContent = "Login";
        }
    });

    // Authentication Forms Prevent Default
    authForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        let isValid = true;
        authForm.querySelectorAll('input:not([disabled])').forEach(input => {
            if (!validateInput(input)) isValid = false;
        });
        if (!isValid) return;

        const email = document.getElementById('email').value.trim();
        const password = document.getElementById('password').value.trim();
        
        if (isLogin) {
            const user = users.find(u => u.email === email && u.password === password);
            if (user) {
                currentUser = user;
                localStorage.setItem('currentUser', JSON.stringify(currentUser));
                closeModal(authModal);
                showToast(`Welcome back, ${user.name}!`);
                updateAuthUI();
                authForm.reset();
            } else {
                showToast("Invalid credentials");
            }
        } else {
            const name = document.getElementById('name').value.trim();
            if (users.find(u => u.email === email)) {
                showToast("Email already exists!");
                return;
            }
            const newUser = { name, email, password };
            users.push(newUser);
            localStorage.setItem('users', JSON.stringify(users));
            
            currentUser = newUser;
            localStorage.setItem('currentUser', JSON.stringify(currentUser));
            
            closeModal(authModal);
            showToast("Account created successfully!");
            updateAuthUI();
            authForm.reset();
        }
    });

    // Payment Method Selection Logic
    paymentMethodSelect.addEventListener('change', (e) => {
        const method = e.target.value;
        const inputs = cardDetails.querySelectorAll('input');
        
        if (method === 'card') {
            cardDetails.style.display = 'block';
            paypalDetails.style.display = 'none';
            codDetails.style.display = 'none';
            inputs.forEach(input => {
                input.setAttribute('required', 'true');
                input.disabled = false;
            });
        } else if (method === 'paypal') {
            cardDetails.style.display = 'none';
            paypalDetails.style.display = 'block';
            codDetails.style.display = 'none';
            inputs.forEach(input => {
                input.removeAttribute('required');
                input.value = '';
                input.disabled = true; // Prevents validation on hidden fields
            });
        } else if (method === 'cod') {
            cardDetails.style.display = 'none';
            paypalDetails.style.display = 'none';
            codDetails.style.display = 'block';
            inputs.forEach(input => {
                input.removeAttribute('required');
                input.value = '';
                input.disabled = true;
            });
        }
    });

    // Payment Form Submission
    paymentForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        let isValid = true;
        paymentForm.querySelectorAll('input:not([disabled]), select:not([disabled])').forEach(input => {
            if (!validateInput(input)) isValid = false;
        });
        if (!isValid) return;

        const btn = payBtn;
        const originalText = btn.textContent;
        const method = paymentMethodSelect.value;
        
        btn.textContent = "Processing...";
        btn.disabled = true;
        btn.style.opacity = "0.7";
        
        setTimeout(() => {
            btn.textContent = originalText;
            btn.disabled = false;
            btn.style.opacity = "1";
            
            // Build Order Object
            const totalPrice = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
            const orderId = Math.random().toString(36).substr(2, 9).toUpperCase();
            
            const newOrder = {
                orderId: orderId,
                userEmail: currentUser.email,
                items: [...cart],
                total: totalPrice,
                date: new Date().toISOString(),
                paymentMethod: method
            };
            
            // Save order to history
            orders.push(newOrder);
            localStorage.setItem('orders', JSON.stringify(orders));
            
            // Show Success Modal
            document.getElementById('success-order-id').textContent = orderId;
            closeModal(checkoutModal);
            openModal(successModal);
            
            // Empty cart
            cart = []; 
            updateCartUI();
            paymentForm.reset();
            
            // Reset payment method visually to card default state just in case
            paymentMethodSelect.value = 'card';
            paymentMethodSelect.dispatchEvent(new Event('change'));
            
        }, 1500);
    });

    // Smooth Scrolling for Navbar Links
    document.querySelectorAll('.nav-links a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            navLinksContainer.classList.remove('active'); // Close mobile menu when link is clicked
            
            const targetId = this.getAttribute('href');
            if(targetId === '#home') {
                window.scrollTo({ top: 0, behavior: 'smooth' });
            } else {
                const targetElement = document.querySelector(targetId);
                if(targetElement) {
                    const offsetTop = targetElement.getBoundingClientRect().top + window.scrollY - 80;
                    window.scrollTo({ top: offsetTop, behavior: 'smooth' });
                }
            }
            
            // Update active state
            document.querySelectorAll('.nav-links a').forEach(a => a.classList.remove('active'));
            this.classList.add('active');
        });
    });

    // Highlight active link on scroll
    window.addEventListener('scroll', () => {
        let current = '';
        const sections = document.querySelectorAll('section, header');
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if(scrollY >= (sectionTop - 150)) {
                current = section.getAttribute('id');
            }
        });

        document.querySelectorAll('.nav-links a').forEach(a => {
            a.classList.remove('active');
            if(a.getAttribute('href') === `#${current}`) {
                a.classList.add('active');
            }
        });
    });
}

// Run Initialization
init();
