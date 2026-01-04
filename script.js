// Data menu Koptek yang lengkap dengan gambar yang diperbaiki
const menuItems = [
    // KOPI TEKNIK
    {
        id: 1,
        name: "Kopi Deadline",
        description: "Espresso double shot dengan extra caffeine untuk menemani begadang",
        price: 25000,
        originalPrice: 30000,
        category: "kopi",
        image: "https://media.istockphoto.com/id/1467199066/id/foto/cangkir-segelas-kopi-dengan-asap-dan-biji-kopi-di-latar-belakang-kayu-tua.jpg?s=612x612&w=is&k=20&c=uYg0ltpNO5nR-e-FiONVR0di4dkVv7Swgu9XsOuCbJs=",
        rating: 4.9,
        badge: "BESTSELLER",
        details: {
            caffeine: "High",
            preparation: "5 min",
            calories: "15 cal",
            size: "Medium"
        }
    },
    {
        id: 2,
        name: "Coding Brew",
        description: "Kopi hitam dengan hint of chocolate, perfect for coding sessions",
        price: 23000,
        category: "kopi",
        image: "https://media.istockphoto.com/id/468318210/id/foto/kopi-turki-dari-atas.jpg?s=612x612&w=0&k=20&c=4n8Sj8i81iNNiosIIelwmTFZE5JVvg-_nCZzIUAS3-Y=",
        rating: 4.8,
        badge: "FAVORITE",
        details: {
            caffeine: "Medium",
            preparation: "4 min",
            calories: "10 cal",
            size: "Regular"
        }
    },
    {
        id: 3,
        name: "Lab Session Latte",
        description: "Latte dengan caramel dan extra milk foam, untuk penyegaran di lab",
        price: 28000,
        category: "kopi",
        image: "https://media.istockphoto.com/id/2155566380/id/foto/secangkir-kopi-di-meja-kayu.jpg?s=612x612&w=0&k=20&c=axzzEKR-eqxfF2jzAMwnod-C0bFeeCaGfOX-xVGmgzk=",
        rating: 4.7,
        details: {
            caffeine: "Medium",
            preparation: "6 min",
            calories: "180 cal",
            size: "Large"
        }
    },
    {
        id: 4,
        name: "Thesis Turbo",
        description: "Triple espresso dengan vanilla dan hazelnut, energi ekstra untuk skripsi",
        price: 32000,
        category: "kopi",
        image: "https://images.unsplash.com/photo-1572442388796-11668a67e53d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        rating: 4.9,
        badge: "STRONG",
        details: {
            caffeine: "Very High",
            preparation: "7 min",
            calories: "25 cal",
            size: "Medium"
        }
    },
    {
        id: 5,
        name: "Calculus Americano",
        description: "Americano extra strong dengan hint of citrus, untuk fokus matematika",
        price: 24000,
        category: "kopi",
        image: "https://media.istockphoto.com/id/2152458695/id/foto/barista-menyiapkan-kopi-hitam-di-kedai-kopi-tangan-barista-membuat-kopi-hitam-manual-dengan.jpg?s=612x612&w=0&k=20&c=spseaA_uRSYKQqQsIxUkDIUFRuczoV4CpfpmbonOFMk=",
        rating: 4.6,
        details: {
            caffeine: "High",
            preparation: "4 min",
            calories: "8 cal",
            size: "Regular"
        }
    },
    {
        id: 6,
        name: "Circuit Mocha",
        description: "Mocha dengan dark chocolate dan espresso double shot",
        price: 29000,
        category: "kopi",
        image: "https://media.istockphoto.com/id/1468192777/id/foto/cokelat-latte.jpg?s=612x612&w=0&k=20&c=yuEmnohDVYq8kF7xA4IF6-qJE3ZUf-PoIh4-BWyEEbI=",
        rating: 4.7,
        badge: "CHOCOLATE",
        details: {
            caffeine: "Medium",
            preparation: "6 min",
            calories: "220 cal",
            size: "Large"
        }
    },
    
    // NON-KOPI
    {
        id: 7,
        name: "Matcha Algorithm",
        description: "Matcha premium dengan susu almond, untuk fokus belajar algoritma",
        price: 29000,
        category: "nonkopi",
        image: "https://media.istockphoto.com/id/1052922434/id/foto/latte-teh-matcha-hijau-organik-dalam-gelas-dan-bubuk-dalam-mangkuk-putih.jpg?s=612x612&w=0&k=20&c=Gi3W97x89yRmZA7XWq6diz34G0ntr55J3NyBUIiN-nM=",
        rating: 4.6,
        details: {
            caffeine: "Low",
            preparation: "5 min",
            calories: "120 cal",
            size: "Regular"
        }
    },
    {
        id: 8,
        name: "Choco Binary",
        description: "Hot chocolate dengan marshmallow dan biscuit, comfort drink",
        price: 27000,
        category: "nonkopi",
        image: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        rating: 4.7,
        details: {
            caffeine: "None",
            preparation: "4 min",
            calories: "210 cal",
            size: "Regular"
        }
    },
    {
        id: 9,
        name: "Blue Screen Smoothie",
        description: "Smoothie berry dengan yogurt dan honey, refresh setelah debugging",
        price: 31000,
        category: "nonkopi",
        image: "https://images.unsplash.com/photo-1505252585461-04db1eb84625?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        rating: 4.5,
        details: {
            caffeine: "None",
            preparation: "8 min",
            calories: "180 cal",
            size: "Large"
        }
    },
    {
        id: 10,
        name: "Milky Way Tea",
        description: "Teh susu dengan bubble dan grass jelly, energi lembut",
        price: 26000,
        category: "nonkopi",
        image: "https://images.unsplash.com/photo-1561047029-3000c68339ca?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        rating: 4.6,
        details: {
            caffeine: "Low",
            preparation: "5 min",
            calories: "190 cal",
            size: "Regular"
        }
    },
    {
        id: 11,
        name: "Data Juice",
        description: "Jus buah segar campuran untuk kesehatan",
        price: 22000,
        category: "nonkopi",
        image: "https://images.unsplash.com/photo-1600271886742-f049cd451bba?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        rating: 4.4,
        details: {
            caffeine: "None",
            preparation: "7 min",
            calories: "110 cal",
            size: "Regular"
        }
    },
    
    // MAKANAN
    {
        id: 12,
        name: "RAM Sandwich",
        description: "Sandwich ayam dengan sayuran segar dan special sauce",
        price: 35000,
        category: "makanan",
        image: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        rating: 4.8,
        badge: "HEALTHY",
        details: {
            type: "Main Course",
            preparation: "10 min",
            calories: "350 cal",
            size: "Regular"
        }
    },
    {
        id: 13,
        name: "Debugging Croissant",
        description: "Croissant almond dengan filling chocolate, snack cepat",
        price: 22000,
        category: "makanan",
        image: "https://media.istockphoto.com/id/1208221291/id/foto/strudel-kepang-puff-cokelat-buatan-sendiri-pai-dengan-kacang-kemiri-dan-almond-tampilan-atas.jpg?s=612x612&w=0&k=20&c=G2pQrYwrTM3Jj5F4cQU0J9zKSf3uLQurFOBP36lpjko=",
        rating: 4.6,
        details: {
            type: "Snack",
            preparation: "3 min",
            calories: "280 cal",
            size: "Regular"
        }
    },
    {
        id: 14,
        name: "Processor Pasta",
        description: "Pasta carbonara dengan keju parmesan dan bacon",
        price: 42000,
        category: "makanan",
        image: "https://images.unsplash.com/photo-1551183053-bf91a1d81141?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        rating: 4.7,
        badge: "MEAL",
        details: {
            type: "Main Course",
            preparation: "15 min",
            calories: "450 cal",
            size: "Regular"
        }
    },
    {
        id: 15,
        name: "Binary Brownies",
        description: "Brownies cokelat dengan kacang walnut",
        price: 18000,
        category: "makanan",
        image: "https://images.unsplash.com/photo-1570145820259-b5b80c5c8bd6?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        rating: 4.5,
        details: {
            type: "Dessert",
            preparation: "2 min",
            calories: "320 cal",
            size: "Regular"
        }
    },
    {
        id: 16,
        name: "Software Salad",
        description: "Salad sayur dengan dressing khusus",
        price: 25000,
        category: "makanan",
        image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        rating: 4.3,
        badge: "HEALTHY",
        details: {
            type: "Salad",
            preparation: "8 min",
            calories: "150 cal",
            size: "Regular"
        }
    },
    
    // PAKET HEMAT
    {
        id: 17,
        name: "Paket Semester",
        description: "Kopi Deadline + RAM Sandwich + Binary Brownies",
        price: 65000,
        originalPrice: 82000,
        category: "paket",
        image: "https://media.istockphoto.com/id/2196277886/id/foto/sandwich-ayam-chipotle-buttermilk-lezat-dengan-roti-panggang-irisan-daging-ayam-coleslaw-keju.jpg?s=612x612&w=0&k=20&c=VcrfO7kqKZo6rNHJ-aL_1dApQYoHvVZGZkXKRuj-lsI=",
        rating: 4.9,
        badge: "HEMAT 20%",
        details: {
            type: "Combo",
            preparation: "15 min",
            calories: "545 cal",
            size: "Full Set"
        }
    },
    {
        id: 18,
        name: "Engineer's Breakfast",
        description: "Americano + Croissant + Fresh Juice paket pagi",
        price: 42000,
        originalPrice: 50000,
        category: "paket",
        image: "https://media.istockphoto.com/id/2180336655/id/foto/gambar-close-up-kue-sarapan-yang-baru-dipanggang-croissant-mentega-emas-di-atas-kantong-kertas.jpg?s=612x612&w=0&k=20&c=SBlpA_v0TNeuq0WjlsPrEm9G6R7phZA4f_MqbFa1HZY=",
        rating: 4.7,
        badge: "BREAKFAST",
        details: {
            type: "Combo",
            preparation: "10 min",
            calories: "420 cal",
            size: "Full Set"
        }
    },
    {
        id: 19,
        name: "Night Shift Pack",
        description: "Thesis Turbo + Processor Pasta + Extra Energy",
        price: 68000,
        originalPrice: 85000,
        category: "paket",
        image: "https://media.istockphoto.com/id/907976254/id/foto/masakan-pasta.jpg?s=612x612&w=0&k=20&c=9FaU0oQo8tHl9Rfsr9OKpcIzQIXpNrrftLcgv5SDNWI=",
        rating: 4.8,
        badge: "HEMAT 20%",
        details: {
            type: "Combo",
            preparation: "20 min",
            calories: "620 cal",
            size: "Full Set"
        }
    },
    
    // SPESIAL TEKNIK
    {
        id: 20,
        name: "Quantum Coffee",
        description: "Kopi dengan teknik penyeduhan khusus menggunakan alat lab",
        price: 45000,
        category: "spesial",
        image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        rating: 4.9,
        badge: "PREMIUM",
        details: {
            caffeine: "Medium",
            preparation: "12 min",
            calories: "8 cal",
            size: "Special"
        }
    },
    {
        id: 21,
        name: "AI Latte Art",
        description: "Latte dengan gambar teknik atau coding pattern",
        price: 35000,
        category: "spesial",
        image: "https://media.istockphoto.com/id/1400194993/id/foto/seni-cappuccino.jpg?s=612x612&w=0&k=20&c=jHJoKBzedd_I4-2BVL1BT0PrACTqsWgRYQTfHrCPIeI=",
        rating: 4.8,
        badge: "ART",
        details: {
            caffeine: "Medium",
            preparation: "8 min",
            calories: "160 cal",
            size: "Regular"
        }
    },
    {
        id: 22,
        name: "Robo Brew",
        description: "Kopi dengan robotic arm brewing system",
        price: 50000,
        category: "spesial",
        image: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        rating: 4.9,
        badge: "TECH",
        details: {
            caffeine: "High",
            preparation: "10 min",
            calories: "12 cal",
            size: "Special"
        }
    }
];

// Customization options prices
const customizationPrices = {
    sugar: {
        less: 0,
        normal: 0,
        extra: 2000
    },
    ice: {
        less: 0,
        normal: 0,
        extra: 1500
    },
    topping: {
        whippedcream: 3000,
        chocolate: 4000,
        caramel: 3500,
        cookies: 2500
    },
    size: {
        regular: 0,
        large: 5000,
        xlarge: 8000
    }
};

// Shopping cart
let cart = JSON.parse(localStorage.getItem('koptek_cart')) || [];
let currentPage = 'home';
let currentUser = null;
let orderHistory = JSON.parse(localStorage.getItem('koptek_orders')) || [];
let tekPoints = 150;
let currentCustomizingItem = null;
let isEditingProfile = false;

// Initialize the app
document.addEventListener('DOMContentLoaded', function() {
    // Initialize circuit background
    createCircuitBackground();
    createBinaryCode();
    createParticles();
    
    // Check if user is already logged in
    const savedUser = localStorage.getItem('koptek_user');
    if (savedUser) {
        try {
            currentUser = JSON.parse(savedUser);
            showMainApp();
        } catch (e) {
            console.error('Error parsing saved user:', e);
            localStorage.removeItem('koptek_user');
            showLoginPage();
        }
    } else {
        showLoginPage();
    }
    
    setupEventListeners();
});

// Show login page
function showLoginPage() {
    document.getElementById('loginPage').style.display = 'flex';
    document.getElementById('mainApp').style.display = 'none';
}

// Show main application
function showMainApp() {
    document.getElementById('loginPage').style.display = 'none';
    document.getElementById('mainApp').style.display = 'block';
    
    // Update user info
    updateUserInfo();
    renderFeaturedMenu();
    renderMenu();
    updateCartCount();
    updatePointsDisplay();
    showPage('home');
    
    // Start header animation
    startHeaderAnimation();
}

// Create circuit background animation
function createCircuitBackground() {
    const circuitBg = document.getElementById('circuitBg');
    
    // Create circuit lines
    for (let i = 0; i < 20; i++) {
        const line = document.createElement('div');
        line.className = 'circuit-line';
        
        const isHorizontal = Math.random() > 0.5;
        const width = Math.random() * 200 + 100;
        const height = 2;
        
        if (isHorizontal) {
            line.style.width = `${width}px`;
            line.style.height = `${height}px`;
            line.style.top = `${Math.random() * 100}%`;
            line.style.left = `${Math.random() * 100}%`;
        } else {
            line.style.width = `${height}px`;
            line.style.height = `${width}px`;
            line.style.top = `${Math.random() * 100}%`;
            line.style.left = `${Math.random() * 100}%`;
        }
        
        circuitBg.appendChild(line);
    }
    
    // Create circuit nodes
    for (let i = 0; i < 50; i++) {
        const node = document.createElement('div');
        node.className = 'circuit-node';
        node.style.top = `${Math.random() * 100}%`;
        node.style.left = `${Math.random() * 100}%`;
        circuitBg.appendChild(node);
    }
}

// Create binary code animation
function createBinaryCode() {
    const binaryContainer = document.getElementById('binaryCode');
    const binaryCount = 30;
    
    for (let i = 0; i < binaryCount; i++) {
        const binary = document.createElement('div');
        binary.className = 'binary-code';
        binary.style.top = `${Math.random() * 100}%`;
        binary.style.left = `${Math.random() * 100}%`;
        
        // Generate random binary string
        let binaryString = '';
        for (let j = 0; j < 10; j++) {
            binaryString += Math.random() > 0.5 ? '1' : '0';
        }
        
        binary.textContent = binaryString;
        binaryContainer.appendChild(binary);
        
        // Animate binary
        setInterval(() => {
            let newString = '';
            for (let j = 0; j < 10; j++) {
                newString += Math.random() > 0.5 ? '1' : '0';
            }
            binary.textContent = newString;
        }, Math.random() * 2000 + 1000);
    }
}

// Create particles
function createParticles() {
    const particlesContainer = document.getElementById('particles');
    const particleCount = 50;
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.width = `${Math.random() * 10 + 2}px`;
        particle.style.height = particle.style.width;
        particle.style.top = `${Math.random() * 100}%`;
        particle.style.left = `${Math.random() * 100}%`;
        
        // Generate random animation parameters
        const tx1 = Math.random() * 100 - 50;
        const ty1 = Math.random() * 100 - 50;
        const tx2 = Math.random() * 100 - 50;
        const ty2 = Math.random() * 100 - 50;
        const tx3 = Math.random() * 100 - 50;
        const ty3 = Math.random() * 100 - 50;
        
        // Set custom properties for animation
        particle.style.setProperty('--tx1', `${tx1}px`);
        particle.style.setProperty('--ty1', `${ty1}px`);
        particle.style.setProperty('--tx2', `${tx2}px`);
        particle.style.setProperty('--ty2', `${ty2}px`);
        particle.style.setProperty('--tx3', `${tx3}px`);
        particle.style.setProperty('--ty3', `${ty3}px`);
        
        // Add animation
        particle.style.animation = `moveParticle ${Math.random() * 20 + 10}s linear infinite`;
        particlesContainer.appendChild(particle);
    }
}

// Start header scan line animation
function startHeaderAnimation() {
    const header = document.querySelector('.circuit-header');
    setInterval(() => {
        const scanLine = document.createElement('div');
        scanLine.style.position = 'absolute';
        scanLine.style.top = `${Math.random() * 100}%`;
        scanLine.style.left = '0';
        scanLine.style.width = '100%';
        scanLine.style.height = '1px';
        scanLine.style.background = 'linear-gradient(90deg, transparent, var(--circuit), transparent)';
        scanLine.style.animation = 'scanLine 2s linear';
        
        header.appendChild(scanLine);
        
        // Remove after animation
        setTimeout(() => {
            scanLine.remove();
        }, 2000);
    }, 3000);
}

// Update user info display
function updateUserInfo() {
    if (currentUser) {
        document.getElementById('userName').textContent = currentUser.name;
        const roleText = currentUser.role === 'student' ? 'Mahasiswa' : 'Staff';
        document.getElementById('userRole').innerHTML = `<i class="fas fa-user-${currentUser.role === 'student' ? 'graduate' : 'tie'}"></i> ${roleText}`;
        
        // Update email if exists
        if (currentUser.email) {
            document.getElementById('userEmail').textContent = currentUser.email;
        }
        
        // Get first letter of name for avatar
        const initials = currentUser.name.split(' ').map(n => n[0]).join('').toUpperCase();
        document.getElementById('userAvatar').textContent = initials.slice(0, 2);
        
        tekPoints = currentUser.points || 150;
    }
}

// Update points display
function updatePointsDisplay() {
    const pointsElement = document.querySelector('#currentPoints');
    const availablePoints = document.querySelector('#availablePoints');
    
    if (pointsElement) pointsElement.textContent = tekPoints;
    if (availablePoints) availablePoints.textContent = `TekPoints: ${tekPoints}`;
    
    const progressElement = document.querySelector('#pointsProgress');
    if (progressElement) {
        const progress = Math.min((tekPoints / 250) * 100, 100);
        progressElement.style.width = `${progress}%`;
    }
}

// Show notification
function showNotification(message, type = 'info') {
    // Create notification element if it doesn't exist
    let notification = document.getElementById('notification');
    if (!notification) {
        notification = document.createElement('div');
        notification.id = 'notification';
        notification.className = 'notification hidden';
        document.body.appendChild(notification);
    }
    
    // Set color based on type
    switch(type) {
        case 'success':
            notification.style.background = 'linear-gradient(45deg, var(--accent), var(--binary))';
            break;
        case 'warning':
            notification.style.background = 'linear-gradient(45deg, var(--warning), #ff9f43)';
            break;
        case 'error':
            notification.style.background = 'linear-gradient(45deg, var(--danger), #ff6b6b)';
            break;
        default:
            notification.style.background = 'linear-gradient(45deg, var(--primary), var(--secondary))';
    }
    
    notification.textContent = message;
    notification.classList.remove('hidden');
    
    setTimeout(() => {
        notification.classList.add('hidden');
    }, 3000);
}

// Render featured menu (for home page)
function renderFeaturedMenu() {
    const featuredMenu = document.getElementById('featuredMenu');
    if (!featuredMenu) return;
    
    featuredMenu.innerHTML = '';
    
    // Get 6 featured items
    const featuredItems = [
        menuItems.find(item => item.id === 1), // Kopi Deadline
        menuItems.find(item => item.id === 7), // Matcha Algorithm
        menuItems.find(item => item.id === 12), // RAM Sandwich
        menuItems.find(item => item.id === 17), // Paket Semester
        menuItems.find(item => item.id === 20), // Quantum Coffee
        menuItems.find(item => item.id === 3)  // Lab Session Latte
    ];
    
    featuredItems.forEach(item => {
        if (!item) return;
        
        const menuItem = document.createElement('div');
        menuItem.className = 'menu-item';
        menuItem.setAttribute('data-category', item.category);
        
        const badge = item.badge ? `<div class="menu-badge">${item.badge}</div>` : '';
        const originalPrice = item.originalPrice ? `<div class="menu-price-old">Rp ${item.originalPrice.toLocaleString('id-ID')}</div>` : '';
        
        // Create details HTML
        const detailsHTML = `
            <div class="menu-details">
                <div class="menu-detail">
                    <i class="fas fa-bolt"></i>
                    <span>${item.details.caffeine || item.details.type}</span>
                </div>
                <div class="menu-detail">
                    <i class="fas fa-clock"></i>
                    <span>${item.details.preparation}</span>
                </div>
                <div class="menu-detail">
                    <i class="fas fa-fire"></i>
                    <span>${item.details.calories}</span>
                </div>
            </div>
        `;
        
        menuItem.innerHTML = `
            ${badge}
            <img src="${item.image}" alt="${item.name}" class="menu-img">
            <div class="menu-content">
                <div class="menu-header">
                    <div class="menu-name">${item.name}</div>
                    <div class="menu-price">
                        ${originalPrice}
                        Rp ${item.price.toLocaleString('id-ID')}
                    </div>
                </div>
                <p class="menu-desc">${item.description}</p>
                ${detailsHTML}
                <div class="menu-footer">
                    <div class="rating">
                        <i class="fas fa-star"></i>
                        <span>${item.rating}</span>
                    </div>
                    <button class="add-to-cart" data-id="${item.id}">
                        <i class="fas fa-plus"></i> Tambah
                    </button>
                </div>
            </div>
        `;
        
        featuredMenu.appendChild(menuItem);
    });
    
    // Add event listeners to add-to-cart buttons
    featuredMenu.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', function(e) {
            e.stopPropagation();
            const id = parseInt(this.getAttribute('data-id'));
            showCustomizationModal(id);
        });
    });
    
    // Add click event to menu items
    featuredMenu.querySelectorAll('.menu-item').forEach(item => {
        item.addEventListener('click', function() {
            const id = parseInt(this.querySelector('.add-to-cart').getAttribute('data-id'));
            showCustomizationModal(id);
        });
    });
}

// Render menu items
function renderMenu(filterCategory = 'all') {
    const menuGrid = document.getElementById('menuGrid');
    if (!menuGrid) return;
    
    menuGrid.innerHTML = '';
    
    const filteredItems = filterCategory === 'all' 
        ? menuItems 
        : menuItems.filter(item => item.category === filterCategory);
    
    filteredItems.forEach(item => {
        const menuItem = document.createElement('div');
        menuItem.className = 'menu-item';
        menuItem.setAttribute('data-category', item.category);
        
        const badge = item.badge ? `<div class="menu-badge">${item.badge}</div>` : '';
        const originalPrice = item.originalPrice ? `<div class="menu-price-old">Rp ${item.originalPrice.toLocaleString('id-ID')}</div>` : '';
        
        // Create details HTML
        const detailsHTML = `
            <div class="menu-details">
                <div class="menu-detail">
                    <i class="fas fa-bolt"></i>
                    <span>${item.details.caffeine || item.details.type}</span>
                </div>
                <div class="menu-detail">
                    <i class="fas fa-clock"></i>
                    <span>${item.details.preparation}</span>
                </div>
                <div class="menu-detail">
                    <i class="fas fa-fire"></i>
                    <span>${item.details.calories}</span>
                </div>
                <div class="menu-detail">
                    <i class="fas fa-ruler"></i>
                    <span>${item.details.size}</span>
                </div>
            </div>
        `;
        
        menuItem.innerHTML = `
            ${badge}
            <img src="${item.image}" alt="${item.name}" class="menu-img">
            <div class="menu-content">
                <div class="menu-header">
                    <div class="menu-name">${item.name}</div>
                    <div class="menu-price">
                        ${originalPrice}
                        Rp ${item.price.toLocaleString('id-ID')}
                    </div>
                </div>
                <p class="menu-desc">${item.description}</p>
                ${detailsHTML}
                <div class="menu-footer">
                    <div class="rating">
                        <i class="fas fa-star"></i>
                        <span>${item.rating}</span>
                        <span style="color: rgba(255, 255, 255, 0.5); font-size: 12px;">(${Math.floor(Math.random() * 100) + 50})</span>
                    </div>
                    <button class="add-to-cart" data-id="${item.id}">
                        <i class="fas fa-plus"></i> Pesan
                    </button>
                </div>
            </div>
        `;
        
        menuGrid.appendChild(menuItem);
    });
    
    // Add event listeners to add-to-cart buttons
    menuGrid.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', function(e) {
            e.stopPropagation();
            const id = parseInt(this.getAttribute('data-id'));
            showCustomizationModal(id);
        });
    });
    
    // Add click event to menu items
    menuGrid.querySelectorAll('.menu-item').forEach(item => {
        item.addEventListener('click', function() {
            const id = parseInt(this.querySelector('.add-to-cart').getAttribute('data-id'));
            showCustomizationModal(id);
        });
    });
}

// Show customization modal
function showCustomizationModal(itemId) {
    const item = menuItems.find(item => item.id === itemId);
    if (!item) return;
    
    currentCustomizingItem = item;
    
    const modal = document.getElementById('customizationModal');
    const modalTitle = document.getElementById('modalItemName');
    const modalPrice = document.getElementById('modalItemPrice');
    
    modalTitle.textContent = item.name;
    modalPrice.textContent = `Rp ${item.price.toLocaleString('id-ID')}`;
    
    modal.style.display = 'flex';
    
    // Reset all options
    document.querySelectorAll('input[type="radio"]').forEach(radio => {
        if (radio.name === 'sugar' || radio.name === 'ice' || radio.name === 'size') {
            radio.checked = radio.value === 'less' || radio.value === 'normal' || radio.value === 'regular';
        }
    });
    
    document.querySelectorAll('input[type="checkbox"]').forEach(checkbox => {
        checkbox.checked = false;
    });
    
    document.getElementById('specialNotes').value = '';
}

// Render profile information
function renderProfile() {
    const profileInfoGrid = document.getElementById('profileInfoGrid');
    if (!profileInfoGrid) return;
    
    const isGuest = currentUser?.isGuest || false;
    
    profileInfoGrid.innerHTML = '';
    
    // Generate profile info HTML based on current user data
    const profileData = currentUser || {
        name: 'Guest User',
        email: 'guest@koptek.id',
        phone: '-',
        birthDate: '-',
        gender: 'Rahasia',
        city: '-'
    };
    
    const profileFields = [
        {
            label: 'Nama Lengkap',
            value: profileData.name,
            type: 'text',
            field: 'name',
            editable: true
        },
        {
            label: 'Email',
            value: profileData.email,
            type: 'email',
            field: 'email',
            editable: true,
            extraButton: `<button class="change-email-btn" data-field="email">
                <i class="fas fa-sync-alt"></i> Ganti Email
            </button>`
        },
        {
            label: 'Nomor Handphone',
            value: profileData.phone || '-',
            type: 'tel',
            field: 'phone',
            editable: true
        },
        {
            label: 'Tanggal Lahir',
            value: profileData.birthDate || '-',
            type: 'date',
            field: 'birthDate',
            editable: true
        },
        {
            label: 'Jenis Kelamin',
            value: profileData.gender || 'Rahasia',
            type: 'gender',
            field: 'gender',
            editable: true
        },
        {
            label: 'Kota',
            value: profileData.city || '-',
            type: 'text',
            field: 'city',
            editable: true
        }
    ];
    
    profileFields.forEach(field => {
        const item = document.createElement('div');
        item.className = 'profile-info-item';
        
        let valueContent = '';
        
        if (field.type === 'gender' && isEditingProfile) {
            valueContent = `
                <div class="gender-options">
                    <div class="gender-option">
                        <label class="gender-label">
                            <input type="radio" name="gender" value="Wanita" ${profileData.gender === 'Wanita' ? 'checked' : ''}>
                            <div class="gender-content">Wanita</div>
                        </label>
                    </div>
                    <div class="gender-option">
                        <label class="gender-label">
                            <input type="radio" name="gender" value="Pria" ${profileData.gender === 'Pria' ? 'checked' : ''}>
                            <div class="gender-content">Pria</div>
                        </label>
                    </div>
                    <div class="gender-option">
                        <label class="gender-label">
                            <input type="radio" name="gender" value="Rahasia" ${(!profileData.gender || profileData.gender === 'Rahasia') ? 'checked' : ''}>
                            <div class="gender-content">Rahasia</div>
                        </label>
                    </div>
                </div>
            `;
        } else if (isEditingProfile) {
            valueContent = `
                <input type="${field.type}" value="${field.value === '-' ? '' : field.value}" 
                       placeholder="Masukkan ${field.label.toLowerCase()}" 
                       data-field="${field.field}" class="profile-input">
                <i class="fas fa-edit edit-icon"></i>
            `;
        } else {
            valueContent = `
                <span>${field.value}</span>
                ${field.editable ? `<i class="fas fa-edit edit-icon"></i>` : ''}
            `;
        }
        
        item.innerHTML = `
            <div class="profile-info-label">
                <i class="fas fa-${getFieldIcon(field.field)}"></i> ${field.label}
            </div>
            <div class="profile-info-value ${field.editable && !isEditingProfile ? 'editable' : ''}" 
                 data-field="${field.field}" ${field.editable && !isEditingProfile ? 'style="cursor: pointer;"' : ''}>
                ${valueContent}
                ${field.extraButton && !isEditingProfile ? field.extraButton : ''}
            </div>
        `;
        
        profileInfoGrid.appendChild(item);
    });
    
    // Show/hide save button based on edit mode
    const saveBtn = document.getElementById('saveProfileBtn');
    if (saveBtn) {
        saveBtn.classList.toggle('hidden', !isEditingProfile);
    }
    
    // Set edit button text
    const editBtn = document.getElementById('editProfileDetailsBtn');
    if (editBtn) {
        editBtn.innerHTML = isEditingProfile ? 
            '<i class="fas fa-times"></i> Batal' : 
            '<i class="fas fa-edit"></i> Edit';
    }
    
    // Add event listeners for editable fields
    if (isEditingProfile) {
        document.querySelectorAll('.profile-info-value.editable').forEach(item => {
            item.addEventListener('click', function() {
                const field = this.getAttribute('data-field');
                if (field !== 'gender') { // Gender handled separately
                    const input = this.querySelector('input');
                    if (input) {
                        input.focus();
                    }
                }
            });
        });
    }
}

// Get icon for profile field
function getFieldIcon(field) {
    switch(field) {
        case 'name': return 'user';
        case 'email': return 'envelope';
        case 'phone': return 'phone';
        case 'birthDate': return 'birthday-cake';
        case 'gender': return 'venus-mars';
        case 'city': return 'city';
        default: return 'info-circle';
    }
}

// Save profile changes
function saveProfileChanges() {
    if (!currentUser) return;
    
    // Get all input values
    const nameInput = document.querySelector('input[data-field="name"]');
    const emailInput = document.querySelector('input[data-field="email"]');
    const phoneInput = document.querySelector('input[data-field="phone"]');
    const birthDateInput = document.querySelector('input[data-field="birthDate"]');
    const cityInput = document.querySelector('input[data-field="city"]');
    const genderInput = document.querySelector('input[name="gender"]:checked');
    
    // Update user data
    if (nameInput) currentUser.name = nameInput.value || currentUser.name;
    if (emailInput) currentUser.email = emailInput.value || currentUser.email;
    if (phoneInput) currentUser.phone = phoneInput.value || currentUser.phone;
    if (birthDateInput) currentUser.birthDate = birthDateInput.value || currentUser.birthDate;
    if (cityInput) currentUser.city = cityInput.value || currentUser.city;
    if (genderInput) currentUser.gender = genderInput.value;
    
    // Save to localStorage
    saveUserToStorage();
    
    // Update UI
    updateUserInfo();
    
    // Exit edit mode
    isEditingProfile = false;
    renderProfile();
    
    showNotification('Profil berhasil diperbarui', 'success');
}

// Add customized item to cart
function addCustomizedToCart() {
    if (!currentCustomizingItem) return;
    
    // Calculate customization costs
    let customizationCost = 0;
    const customizations = {};
    
    // Sugar level
    const sugarLevel = document.querySelector('input[name="sugar"]:checked').value;
    customizationCost += customizationPrices.sugar[sugarLevel];
    customizations.sugar = sugarLevel;
    
    // Ice level
    const iceLevel = document.querySelector('input[name="ice"]:checked').value;
    customizationCost += customizationPrices.ice[iceLevel];
    customizations.ice = iceLevel;
    
    // Size
    const size = document.querySelector('input[name="size"]:checked').value;
    customizationCost += customizationPrices.size[size];
    customizations.size = size;
    
    // Toppings
    const toppings = [];
    document.querySelectorAll('input[name="topping"]:checked').forEach(checkbox => {
        const topping = checkbox.value;
        customizationCost += customizationPrices.topping[topping];
        toppings.push(topping);
    });
    customizations.toppings = toppings;
    
    // Special notes
    const notes = document.getElementById('specialNotes').value;
    customizations.notes = notes;
    
    // Calculate total price
    const totalPrice = currentCustomizingItem.price + customizationCost;
    
    // Create cart item
    const cartItem = {
        ...currentCustomizingItem,
        quantity: 1,
        customization: customizations,
        customizationCost: customizationCost,
        totalPrice: totalPrice
    };
    
    // Check if same item with same customization exists
    const existingIndex = cart.findIndex(item => 
        item.id === cartItem.id && 
        JSON.stringify(item.customization) === JSON.stringify(cartItem.customization)
    );
    
    if (existingIndex !== -1) {
        cart[existingIndex].quantity += 1;
    } else {
        cart.push(cartItem);
    }
    
    updateCartCount();
    saveCartToStorage();
    showNotification(`${currentCustomizingItem.name} telah ditambahkan ke keranjang`, 'success');
    
    // Close modal
    document.getElementById('customizationModal').style.display = 'none';
    
    // If we're on the cart page, update it
    if (currentPage === 'cart') {
        renderCart();
    }
    
    // If we're on the order page, update summary
    if (currentPage === 'order') {
        renderOrderForm();
    }
}

// Update cart count
function updateCartCount() {
    const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
    const cartCountElement = document.getElementById('cartCount');
    if (cartCountElement) {
        cartCountElement.textContent = totalItems;
    }
}

// Render cart
function renderCart() {
    const cartItems = document.getElementById('cartItems');
    const emptyCartMessage = document.getElementById('emptyCartMessage');
    
    if (!cartItems) return;
    
    if (cart.length === 0) {
        if (emptyCartMessage) emptyCartMessage.classList.remove('hidden');
        updateCartSummary();
        return;
    }
    
    if (emptyCartMessage) emptyCartMessage.classList.add('hidden');
    cartItems.innerHTML = '';
    
    cart.forEach((item, index) => {
        const cartItem = document.createElement('div');
        cartItem.className = 'cart-item';
        
        // Build customization text
        let customizationText = '';
        if (item.customization) {
            const parts = [];
            if (item.customization.sugar) parts.push(`Gula: ${item.customization.sugar}`);
            if (item.customization.ice) parts.push(`Es: ${item.customization.ice}`);
            if (item.customization.size) parts.push(`Size: ${item.customization.size}`);
            if (item.customization.toppings && item.customization.toppings.length > 0) {
                parts.push(`Topping: ${item.customization.toppings.join(', ')}`);
            }
            customizationText = parts.join(' | ');
        }
        
        cartItem.innerHTML = `
            <div class="cart-item-info">
                <img src="${item.image}" alt="${item.name}" class="cart-item-img">
                <div class="cart-item-details">
                    <div class="cart-item-name">${item.name}</div>
                    ${customizationText ? `<div class="cart-item-custom">${customizationText}</div>` : ''}
                    ${item.customization?.notes ? `<div class="cart-item-custom">Catatan: ${item.customization.notes}</div>` : ''}
                    <div class="cart-item-price">Rp ${item.totalPrice ? item.totalPrice.toLocaleString('id-ID') : item.price.toLocaleString('id-ID')}</div>
                    <div style="font-size: 12px; color: rgba(255, 255, 255, 0.7); margin-top: 5px;">
                        ${item.category === 'kopi' ? '☕' : item.category === 'makanan' ? '🍽️' : '🥤'} ${item.category}
                    </div>
                </div>
            </div>
            <div class="cart-item-controls">
                <div class="quantity-control">
                    <div class="quantity-btn minus-btn" data-index="${index}">
                        <i class="fas fa-minus"></i>
                    </div>
                    <span style="font-weight: 600;">${item.quantity}</span>
                    <div class="quantity-btn plus-btn" data-index="${index}">
                        <i class="fas fa-plus"></i>
                    </div>
                </div>
                <div class="remove-item" data-index="${index}" title="Hapus dari Keranjang">
                    <i class="fas fa-trash"></i>
                </div>
            </div>
        `;
        
        cartItems.appendChild(cartItem);
    });
    
    // Update item count
    const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
    const itemCountElement = document.getElementById('itemCount');
    if (itemCountElement) {
        itemCountElement.textContent = `${totalItems} item`;
    }
    
    // Update cart summary
    updateCartSummary();
    
    // Add event listeners to cart controls
    cartItems.querySelectorAll('.minus-btn').forEach(button => {
        button.addEventListener('click', function() {
            const index = parseInt(this.getAttribute('data-index'));
            updateCartItemQuantity(index, -1);
        });
    });
    
    cartItems.querySelectorAll('.plus-btn').forEach(button => {
        button.addEventListener('click', function() {
            const index = parseInt(this.getAttribute('data-index'));
            updateCartItemQuantity(index, 1);
        });
    });
    
    cartItems.querySelectorAll('.remove-item').forEach(button => {
        button.addEventListener('click', function() {
            const index = parseInt(this.getAttribute('data-index'));
            removeFromCart(index);
        });
    });
    
    // Add event listener to menu button in empty cart
    const menuButton = document.querySelector('[data-page="menu"]');
    if (menuButton) {
        menuButton.addEventListener('click', function(e) {
            e.preventDefault();
            showPage('menu');
        });
    }
}

// Update cart item quantity
function updateCartItemQuantity(index, change) {
    if (index < 0 || index >= cart.length) return;
    
    cart[index].quantity += change;
    
    if (cart[index].quantity <= 0) {
        cart.splice(index, 1);
    }
    
    updateCartCount();
    saveCartToStorage();
    renderCart();
    
    // If we're on the order page, update summary
    if (currentPage === 'order') {
        renderOrderForm();
    }
}

// Remove item from cart
function removeFromCart(index) {
    if (index < 0 || index >= cart.length) return;
    
    const item = cart[index];
    cart.splice(index, 1);
    updateCartCount();
    saveCartToStorage();
    renderCart();
    showNotification(`${item.name} telah dihapus dari keranjang`, 'warning');
    
    // If we're on the order page, update summary
    if (currentPage === 'order') {
        renderOrderForm();
    }
}

// Update cart summary
function updateCartSummary() {
    const subtotal = cart.reduce((total, item) => total + ((item.totalPrice || item.price) * item.quantity), 0);
    const studentDiscount = currentUser?.role === 'student' ? subtotal * 0.15 : 0;
    const pointsDiscount = 0; // Will be updated from order page
    const tax = (subtotal - studentDiscount - pointsDiscount) * 0.1;
    const delivery = 5000;
    const total = subtotal - studentDiscount - pointsDiscount + tax + delivery;
    
    const subtotalElement = document.getElementById('subtotal');
    const studentDiscountElement = document.getElementById('studentDiscount');
    const pointsDiscountElement = document.getElementById('pointsDiscount');
    const taxElement = document.getElementById('tax');
    const totalElement = document.getElementById('total');
    
    if (subtotalElement) subtotalElement.textContent = `Rp ${subtotal.toLocaleString('id-ID')}`;
    if (studentDiscountElement) studentDiscountElement.textContent = `- Rp ${studentDiscount.toLocaleString('id-ID')}`;
    if (pointsDiscountElement) pointsDiscountElement.textContent = `- Rp ${pointsDiscount.toLocaleString('id-ID')}`;
    if (taxElement) taxElement.textContent = `Rp ${tax.toLocaleString('id-ID')}`;
    if (totalElement) totalElement.textContent = `Rp ${total.toLocaleString('id-ID')}`;
}

// Show page
function showPage(page) {
    // Hide all sections
    document.querySelectorAll('section[id$="Section"], #homeContent').forEach(section => {
        section.classList.add('hidden');
    });
    
    // Update active nav link
    document.querySelectorAll('nav a').forEach(link => {
        link.classList.remove('active');
    });
    
    const activeLink = document.querySelector(`nav a[data-page="${page}"]`);
    if (activeLink) {
        activeLink.classList.add('active');
    }
    
    // Show selected page
    currentPage = page;
    
    if (page === 'home') {
        document.getElementById('homeContent').classList.remove('hidden');
        document.getElementById('homeSection').classList.remove('hidden');
    } else {
        const pageElement = document.getElementById(`${page}Section`);
        if (pageElement) {
            pageElement.classList.remove('hidden');
        }
    }
    
    // Special handling for specific pages
    if (page === 'menu') {
        renderMenu();
    } else if (page === 'cart') {
        renderCart();
    } else if (page === 'order') {
        renderOrderForm();
    } else if (page === 'profile') {
        renderProfile();
    } else if (page === 'history') {
        renderOrderHistory();
    } else if (page === 'loyalty') {
        renderLoyaltySection();
    }
}

// Render order form sesuai contoh
function renderOrderForm() {
    const orderContainer = document.querySelector('.order-container');
    if (!orderContainer) return;
    
    // Calculate totals
    const subtotal = cart.reduce((total, item) => total + ((item.totalPrice || item.price) * item.quantity), 0);
    const studentDiscount = currentUser?.role === 'student' ? subtotal * 0.15 : 0;
    const tax = (subtotal - studentDiscount) * 0.1;
    const delivery = 5000;
    const total = subtotal - studentDiscount + tax + delivery;
    
    // Generate order items list
    let orderItemsHTML = '';
    if (cart.length === 0) {
        orderItemsHTML = `
            <div class="order-items-container">
                <div style="text-align: center; padding: 20px;">
                    <i class="fas fa-shopping-cart" style="font-size: 40px; color: rgba(0, 212, 255, 0.3); margin-bottom: 10px;"></i>
                    <div style="color: rgba(255, 255, 255, 0.7);">Keranjang kosong</div>
                </div>
            </div>
        `;
    } else {
        orderItemsHTML = cart.map((item, index) => `
            <div class="order-item">
                <div class="order-item-header">
                    <div class="order-item-name">${item.name}</div>
                    <div class="order-item-price">Rp ${((item.totalPrice || item.price) * item.quantity).toLocaleString('id-ID')}</div>
                </div>
                <div class="order-item-details">
                    ${item.customization?.size ? item.customization.size.charAt(0).toUpperCase() + item.customization.size.slice(1) : 'Regular'} |
                    ${item.customization?.ice ? item.customization.ice.charAt(0).toUpperCase() + item.customization.ice.slice(1) + ' Ice' : 'Normal Ice'} |
                    ${item.customization?.sugar ? item.customization.sugar.charAt(0).toUpperCase() + item.customization.sugar.slice(1) + ' Sugar' : 'Normal Sugar'}
                    ${item.customization?.toppings && item.customization.toppings.length > 0 ? 
                        `| ${item.customization.toppings.map(t => t.charAt(0).toUpperCase() + t.slice(1)).join(', ')}` : ''}
                </div>
                ${item.customization?.notes ? 
                    `<div class="order-item-details" style="font-style: italic; color: rgba(255, 255, 255, 0.6);">Note: ${item.customization.notes}</div>` : ''}
                <div class="order-item-footer">
                    <div class="order-item-quantity">
                        <button class="order-qty-btn minus-order-btn" data-index="${index}">-</button>
                        <span style="font-weight: 600; min-width: 20px; text-align: center;">${item.quantity}</span>
                        <button class="order-qty-btn plus-order-btn" data-index="${index}">+</button>
                    </div>
                    <button class="order-qty-btn" style="color: #E53E3E; background: rgba(229, 62, 62, 0.1);" data-index="${index}" data-remove="true">
                        <i class="fas fa-trash"></i>
                    </button>
                </div>
            </div>
        `).join('');
    }
    
    orderContainer.innerHTML = `
        <div class="order-form">
            <!-- Delivery Options -->
            <div class="delivery-options">
                <div class="delivery-option active" data-option="pickup">
                    <div class="delivery-option-icon">
                        <i class="fas fa-store"></i>
                    </div>
                    <div class="delivery-option-title">Pickup</div>
                    <div class="delivery-option-desc">Ambil di outlet</div>
                </div>
                <div class="delivery-option" data-option="dinein">
                    <div class="delivery-option-icon">
                        <i class="fas fa-utensils"></i>
                    </div>
                    <div class="delivery-option-title">Dine-In</div>
                    <div class="delivery-option-desc">Makan di tempat</div>
                </div>
                <div class="delivery-option" data-option="delivery">
                    <div class="delivery-option-icon">
                        <i class="fas fa-motorcycle"></i>
                    </div>
                    <div class="delivery-option-title">Delivery</div>
                    <div class="delivery-option-desc">Diantar ke alamat</div>
                </div>
            </div>
            
            <!-- Outlet Info -->
            <div class="outlet-info">
                <div class="outlet-header">
                    <div>
                        <div class="outlet-name">Koptek Kampus Teknik (Drive Thru)</div>
                        <div class="outlet-address">Gedung Teknik Lt. 1, Kampus Utama, Jl. Teknologi No. 123</div>
                    </div>
                    <button class="btn" style="padding: 5px 15px; font-size: 14px;">
                        <i class="fas fa-edit"></i> Ubah
                    </button>
                </div>
            </div>
            
            <!-- Order Items -->
            <div style="margin-bottom: 25px;">
                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 15px;">
                    <div style="font-weight: 600; color: white; font-size: 18px;">Pesan</div>
                    <button class="btn" data-page="menu" style="padding: 8px 20px;">
                        <i class="fas fa-plus"></i> Tambah Pesanan
                    </button>
                </div>
                
                <div class="order-items-container">
                    ${orderItemsHTML}
                </div>
            </div>
            
            <!-- Voucher Section -->
            <div class="voucher-section">
                <div class="voucher-header">
                    <div>
                        <div class="voucher-count">
                            <i class="fas fa-ticket-alt" style="color: var(--circuit); margin-right: 8px;"></i>
                            2 voucher siap dipakai
                        </div>
                        <div class="voucher-desc">Diskon hingga 30%</div>
                    </div>
                    <button type="button" class="btn" style="padding: 8px 20px; background: linear-gradient(45deg, var(--circuit), var(--binary));">
                        <i class="fas fa-tag"></i> Pakai Kode Voucher
                    </button>
                </div>
            </div>
            
            <!-- Promo Banner -->
            <div class="promo-banner">
                <div class="promo-icon">
                    <i class="fas fa-fire-alt"></i>
                </div>
                <div class="promo-text">
                    <div class="promo-title">Tambah 1 produk lagi dapatkan disc 30% hingga Rp 31.000</div>
                    <div class="promo-desc">Syarat dan ketentuan berlaku</div>
                </div>
                <div class="promo-icon">
                    <i class="fas fa-chevron-right"></i>
                </div>
            </div>
            
            <!-- Payment Section -->
            <div class="payment-section">
                <h3 style="color: var(--circuit); margin-bottom: 20px; font-size: 20px;">Metode Pembayaran</h3>
                
                <div class="payment-methods">
                    <div class="payment-method" data-method="gopay">
                        <div class="payment-icon">
                            <i class="fas fa-wallet"></i>
                        </div>
                        <div>GoPay</div>
                    </div>
                    <div class="payment-method" data-method="ovo">
                        <div class="payment-icon">
                            <i class="fas fa-mobile-alt"></i>
                        </div>
                        <div>OVO</div>
                    </div>
                    <div class="payment-method" data-method="dana">
                        <div class="payment-icon">
                            <i class="fas fa-qrcode"></i>
                        </div>
                        <div>DANA</div>
                    </div>
                    <div class="payment-method active" data-method="cash">
                        <div class="payment-icon">
                            <i class="fas fa-money-bill-wave"></i>
                        </div>
                        <div>Cash</div>
                    </div>
                </div>
                <input type="hidden" id="paymentMethod" value="cash" required>
                
                <div style="margin-top: 25px;">
                    <button type="button" class="btn btn-primary" id="placeOrderBtn" style="width: 100%; padding: 18px; font-size: 18px;">
                        <i class="fas fa-lock"></i> Pilih Pembayaran
                    </button>
                </div>
            </div>
        </div>
        
        <div class="order-summary">
            <h3 style="color: var(--circuit); margin-bottom: 20px; font-size: 20px;">Total</h3>
            
            <div class="cart-summary">
                <div class="summary-row">
                    <span>Subtotal</span>
                    <span>Rp ${subtotal.toLocaleString('id-ID')}</span>
                </div>
                ${currentUser?.role === 'student' ? `
                <div class="summary-row">
                    <span>Diskon Mahasiswa (15%)</span>
                    <span>- Rp ${studentDiscount.toLocaleString('id-ID')}</span>
                </div>
                ` : ''}
                <div class="summary-row">
                    <span>Diskon Voucher</span>
                    <span>- Rp 0</span>
                </div>
                <div class="summary-row">
                    <span>Pajak (10%)</span>
                    <span>Rp ${tax.toLocaleString('id-ID')}</span>
                </div>
                <div class="summary-row">
                    <span>Ongkos Kirim</span>
                    <span>Rp ${delivery.toLocaleString('id-ID')}</span>
                </div>
            </div>
            
            <!-- Total -->
            <div class="order-summary-total">
                <div class="order-summary-total-row">
                    <div>
                        <div class="order-total-label">Total</div>
                        <div class="order-total-desc">Termasuk pajak dan ongkir</div>
                    </div>
                    <div class="order-total-price">Rp ${total.toLocaleString('id-ID')}</div>
                </div>
            </div>
            
            <!-- Additional Info -->
            <div style="margin-top: 25px; padding: 15px; background: rgba(255, 255, 255, 0.05); border-radius: 10px;">
                <div style="display: flex; align-items: flex-start; gap: 10px; margin-bottom: 10px;">
                    <i class="fas fa-clock" style="color: var(--circuit); margin-top: 3px;"></i>
                    <div>
                        <div style="font-weight: 500; color: white;">Estimasi Waktu</div>
                        <div style="font-size: 14px; color: rgba(255, 255, 255, 0.7);">15-25 menit untuk pickup/dine-in</div>
                    </div>
                </div>
                <div style="display: flex; align-items: flex-start; gap: 10px;">
                    <i class="fas fa-info-circle" style="color: var(--circuit); margin-top: 3px;"></i>
                    <div>
                        <div style="font-weight: 500; color: white;">Syarat & Ketentuan</div>
                        <div style="font-size: 14px; color: rgba(255, 255, 255, 0.7);">Pesanan tidak dapat dibatalkan setelah diproses</div>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    // Setup event listeners
    setupOrderFormEvents();
    
    // Add event listeners for quantity buttons in order form
    document.querySelectorAll('.minus-order-btn, .plus-order-btn').forEach(button => {
        button.addEventListener('click', function() {
            const index = parseInt(this.getAttribute('data-index'));
            const isMinus = this.classList.contains('minus-order-btn');
            updateCartItemQuantity(index, isMinus ? -1 : 1);
            // Update the order form after changing quantity
            setTimeout(() => renderOrderForm(), 100);
        });
    });
    
    // Add event listeners for remove buttons
    document.querySelectorAll('[data-remove="true"]').forEach(button => {
        button.addEventListener('click', function() {
            const index = parseInt(this.getAttribute('data-index'));
            removeFromCart(index);
            // Update the order form after removing item
            setTimeout(() => renderOrderForm(), 100);
        });
    });
    
    // Add delivery option listeners
    document.querySelectorAll('.delivery-option').forEach(option => {
        option.addEventListener('click', function() {
            document.querySelectorAll('.delivery-option').forEach(opt => {
                opt.classList.remove('active');
            });
            this.classList.add('active');
        });
    });
    
    // Add menu button listener
    const menuButton = document.querySelector('[data-page="menu"]');
    if (menuButton) {
        menuButton.addEventListener('click', function(e) {
            e.preventDefault();
            showPage('menu');
        });
    }
}

// Setup order form events
function setupOrderFormEvents() {
    // Payment method selection
    document.querySelectorAll('.payment-method').forEach(method => {
        method.addEventListener('click', function() {
            document.querySelectorAll('.payment-method').forEach(m => {
                m.classList.remove('active');
            });
            
            this.classList.add('active');
            const paymentMethod = this.getAttribute('data-method');
            document.getElementById('paymentMethod').value = paymentMethod;
        });
    });
    
    // Voucher button
    const voucherBtn = document.querySelector('.btn[style*="background: linear-gradient(45deg, var(--circuit), var(--binary))"]');
    if (voucherBtn) {
        voucherBtn.addEventListener('click', function() {
            showNotification('Fitur voucher akan segera hadir!', 'info');
        });
    }
    
    // Place order button
    const placeOrderBtn = document.getElementById('placeOrderBtn');
    if (placeOrderBtn) {
        placeOrderBtn.addEventListener('click', function() {
            if (cart.length === 0) {
                showNotification('Keranjang Anda kosong. Silakan tambahkan item terlebih dahulu.', 'warning');
                return;
            }
            processOrder();
        });
    }
}

// Process order
function processOrder() {
    if (cart.length === 0) {
        showNotification('Keranjang Anda kosong. Silakan tambahkan item terlebih dahulu.', 'warning');
        return;
    }
    
    // Generate order number
    const now = new Date();
    const orderNumber = `KT-${now.getFullYear()}${(now.getMonth() + 1).toString().padStart(2, '0')}${now.getDate().toString().padStart(2, '0')}-${Math.floor(Math.random() * 1000).toString().padStart(3, '0')}`;
    
    // Calculate subtotal
    const subtotal = cart.reduce((total, item) => total + ((item.totalPrice || item.price) * item.quantity), 0);
    
    // Calculate discounts
    const studentDiscount = currentUser?.role === 'student' ? subtotal * 0.15 : 0;
    
    // Calculate points earned
    const pointsEarned = Math.floor((subtotal - studentDiscount) / 5000);
    
    // Update user points
    tekPoints += pointsEarned;
    
    if (currentUser) {
        currentUser.points = tekPoints;
        saveUserToStorage();
    }
    
    // Get delivery method
    const deliveryMethod = document.querySelector('.delivery-option.active')?.getAttribute('data-option') || 'pickup';
    const deliveryText = deliveryMethod === 'pickup' ? 'Ambil di Toko' : 
                       deliveryMethod === 'dinein' ? 'Makan di Tempat' : 'Diantar ke Alamat';
    
    // Create order object
    const order = {
        orderNumber: orderNumber,
        date: now.toISOString(),
        items: JSON.parse(JSON.stringify(cart)), // Deep copy
        customer: {
            name: currentUser?.name || 'Pelanggan',
            deliveryMethod: deliveryMethod,
            deliveryText: deliveryText,
            paymentMethod: document.getElementById('paymentMethod').value
        },
        subtotal: subtotal,
        discount: studentDiscount,
        tax: (subtotal - studentDiscount) * 0.1,
        delivery: 5000,
        total: subtotal - studentDiscount + (subtotal - studentDiscount) * 0.1 + 5000,
        status: 'processing',
        pointsEarned: pointsEarned
    };
    
    // Save order to history
    orderHistory.push(order);
    saveOrdersToStorage();
    
    // Clear cart
    cart = [];
    updateCartCount();
    saveCartToStorage();
    
    // Show success page
    renderSuccessPage(order);
    showPage('success');
    
    // Show notification
    showNotification(`Pesanan berhasil! Anda mendapatkan ${pointsEarned} TekPoints.`, 'success');
}

// Render success page
function renderSuccessPage(order) {
    const successSection = document.getElementById('successSection');
    if (!successSection) return;
    
    const deliveryTime = order.customer.deliveryMethod === 'delivery' ? '30-45 menit' : '15-20 menit';
    
    successSection.innerHTML = `
        <div class="order-success">
            <div class="success-icon">
                <i class="fas fa-check-circle"></i>
            </div>
            <h2 style="color: var(--circuit); margin-bottom: 15px;">Pesanan Berhasil!</h2>
            <p style="margin-bottom: 10px; font-size: 18px;">Terima kasih telah memesan di Koptek.</p>
            <p style="margin-bottom: 20px; color: rgba(255, 255, 255, 0.8);">Pesanan Anda sedang diproses dan akan siap dalam ${deliveryTime}.</p>
            
            <div style="background: rgba(255, 255, 255, 0.05); padding: 25px; border-radius: 15px; max-width: 500px; margin: 30px auto; border: 1px solid rgba(0, 212, 255, 0.2);">
                <div style="text-align: left;">
                    <h3 style="color: var(--circuit); margin-bottom: 15px; font-size: 18px;">Detail Pesanan</h3>
                    
                    <div style="margin-bottom: 15px;">
                        <div style="font-size: 12px; color: rgba(255, 255, 255, 0.6);">Nomor Pesanan</div>
                        <div style="font-weight: 600; color: var(--circuit); font-size: 16px;">${order.orderNumber}</div>
                    </div>
                    
                    <div style="margin-bottom: 15px;">
                        <div style="font-size: 12px; color: rgba(255, 255, 255, 0.6);">Waktu Pemesanan</div>
                        <div style="font-weight: 500;">${new Date(order.date).toLocaleString('id-ID', {
                            weekday: 'long',
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric',
                            hour: '2-digit',
                            minute: '2-digit'
                        })}</div>
                    </div>
                    
                    <div style="margin-bottom: 15px;">
                        <div style="font-size: 12px; color: rgba(255, 255, 255, 0.6);">Metode</div>
                        <div style="font-weight: 500;">${order.customer.deliveryText}</div>
                    </div>
                    
                    <div style="margin-bottom: 15px;">
                        <div style="font-size: 12px; color: rgba(255, 255, 255, 0.6);">Pembayaran</div>
                        <div style="font-weight: 500;">${order.customer.paymentMethod.charAt(0).toUpperCase() + order.customer.paymentMethod.slice(1)}</div>
                    </div>
                    
                    <div style="margin-bottom: 15px;">
                        <div style="font-size: 12px; color: rgba(255, 255, 255, 0.6);">Total Items</div>
                        <div style="font-weight: 500;">${order.items.reduce((total, item) => total + item.quantity, 0)} item</div>
                    </div>
                    
                    <div style="margin-top: 20px; padding-top: 15px; border-top: 1px solid rgba(255, 255, 255, 0.1);">
                        <div style="display: flex; justify-content: space-between;">
                            <div style="font-weight: 600;">Total Pembayaran</div>
                            <div style="font-weight: 700; color: var(--circuit); font-size: 18px;">Rp ${order.total.toLocaleString('id-ID')}</div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div style="margin-top: 30px;">
                <p style="margin-bottom: 20px; color: rgba(255, 255, 255, 0.8);">
                    <i class="fas fa-gift" style="color: var(--circuit);"></i> 
                    Anda mendapatkan <strong style="color: var(--circuit);">${order.pointsEarned} TekPoints</strong> dari pesanan ini!
                </p>
                <div style="display: flex; gap: 15px; justify-content: center;">
                    <button class="btn btn-primary" id="trackOrderBtn">
                        <i class="fas fa-map-marker-alt"></i> Lacak Pesanan
                    </button>
                    <button class="btn" id="backToMenuBtn">
                        <i class="fas fa-utensils"></i> Pesan Lagi
                    </button>
                </div>
            </div>
        </div>
    `;
    
    // Add event listeners
    document.getElementById('trackOrderBtn')?.addEventListener('click', () => {
        showNotification('Fitur pelacakan pesanan akan segera hadir!', 'info');
    });
    
    document.getElementById('backToMenuBtn')?.addEventListener('click', () => {
        showPage('menu');
    });
}

// Save cart to localStorage
function saveCartToStorage() {
    localStorage.setItem('koptek_cart', JSON.stringify(cart));
}

// Save user to localStorage
function saveUserToStorage() {
    if (currentUser) {
        localStorage.setItem('koptek_user', JSON.stringify(currentUser));
    }
}

// Save orders to localStorage
function saveOrdersToStorage() {
    localStorage.setItem('koptek_orders', JSON.stringify(orderHistory));
}

// Setup event listeners
function setupEventListeners() {
    // Login form
    document.getElementById('loginForm').addEventListener('submit', function(e) {
        e.preventDefault();
        const username = document.getElementById('username').value.trim();
        const email = document.getElementById('email').value.trim();
        
        if (!username || !email) {
            showNotification('Harap masukkan nama dan email Anda', 'error');
            return;
        }
        
        // Validate email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            showNotification('Format email tidak valid', 'error');
            return;
        }
        
        // Login successful
        currentUser = {
            username: username.toLowerCase().replace(/\s+/g, '_'),
            role: 'student',
            name: username,
            email: email,
            phone: '',
            birthDate: '',
            gender: 'Rahasia',
            city: '',
            points: Math.floor(Math.random() * 100) + 50, // Random points between 50-150
            isGuest: false
        };
        
        saveUserToStorage();
        showMainApp();
        showNotification(`Selamat datang, ${currentUser.name}!`, 'success');
        
        // Reset form
        this.reset();
    });

    // Guest login button
    document.getElementById('guestBtn').addEventListener('click', function() {
        // Generate random guest user
        const guestNames = ['Mahasiswa Teknik', 'Anak Mesin', 'Anak Elektro', 'Coder Cafe', 'Lab Assistant'];
        const randomName = guestNames[Math.floor(Math.random() * guestNames.length)];
        
        currentUser = {
            username: 'guest_' + Math.random().toString(36).substring(7),
            role: 'student',
            name: randomName,
            email: 'guest@koptek.id',
            phone: '-',
            birthDate: '-',
            gender: 'Rahasia',
            city: '-',
            points: 50,
            isGuest: true
        };
        
        saveUserToStorage();
        showMainApp();
        showNotification(`Selamat datang, ${currentUser.name}! (Mode Tamu)`, 'success');
    });

    // Modal close button
    document.getElementById('modalClose')?.addEventListener('click', function() {
        document.getElementById('customizationModal').style.display = 'none';
    });

    // Cancel customization button
    document.getElementById('cancelCustomization')?.addEventListener('click', function() {
        document.getElementById('customizationModal').style.display = 'none';
    });

    // Add customized item to cart button
    document.getElementById('addCustomizedToCart')?.addEventListener('click', function() {
        addCustomizedToCart();
    });

    // Logout button
    document.getElementById('logoutBtn')?.addEventListener('click', function() {
        currentUser = null;
        localStorage.removeItem('koptek_user');
        cart = [];
        saveCartToStorage();
        showLoginPage();
        showNotification('Anda telah logout', 'info');
    });

    // Navigation
    document.querySelectorAll('nav a, .logo').forEach(element => {
        element.addEventListener('click', function(e) {
            e.preventDefault();
            const page = this.getAttribute('data-page');
            if (page) {
                showPage(page);
            }
        });
    });

    // Order button in header
    document.querySelector('.order-btn')?.addEventListener('click', function(e) {
        e.preventDefault();
        showPage('order');
    });

    // Cart icon
    document.getElementById('cartIcon')?.addEventListener('click', function() {
        showPage('cart');
    });

    // Menu category filter
    document.querySelectorAll('.category-btn').forEach(button => {
        button.addEventListener('click', function() {
            document.querySelectorAll('.category-btn').forEach(btn => {
                btn.classList.remove('active');
            });
            
            this.classList.add('active');
            const category = this.getAttribute('data-category');
            renderMenu(category);
        });
    });

    // Load more button
    document.getElementById('loadMoreBtn')?.addEventListener('click', function() {
        showNotification('Menampilkan lebih banyak menu...', 'info');
        setTimeout(() => {
            showNotification('Semua menu telah ditampilkan', 'info');
        }, 1000);
    });

    // Checkout button
    document.getElementById('checkoutBtn')?.addEventListener('click', function() {
        if (cart.length === 0) {
            showNotification('Keranjang Anda kosong. Silakan tambahkan item terlebih dahulu.', 'warning');
            return;
        }
        showPage('order');
    });

    // Close modal when clicking outside
    window.addEventListener('click', function(e) {
        const modal = document.getElementById('customizationModal');
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });

    // Tombol jelajahi menu di hero section
    document.getElementById('exploreMenuBtn')?.addEventListener('click', function() {
        showPage('menu');
        showNotification('Selamat menjelajahi menu teknik kami!', 'info');
    });

    // Tombol lihat semua menu di home
    document.getElementById('viewAllMenuBtn')?.addEventListener('click', function() {
        showPage('menu');
    });

    // Tombol edit profil di header
    document.getElementById('editProfileBtn')?.addEventListener('click', function() {
        showPage('profile');
    });

    // Tombol edit profil details
    document.getElementById('editProfileDetailsBtn')?.addEventListener('click', function() {
        isEditingProfile = !isEditingProfile;
        renderProfile();
        
        if (isEditingProfile) {
            showNotification('Mode edit diaktifkan. Klik pada field untuk mengubah.', 'info');
        }
    });

    // Tombol save profile
    document.getElementById('saveProfileBtn')?.addEventListener('click', function() {
        saveProfileChanges();
    });

    // Tombol ganti email
    document.addEventListener('click', function(e) {
        if (e.target.closest('.change-email-btn')) {
            const emailInput = document.querySelector('input[data-field="email"]');
            if (emailInput) {
                emailInput.focus();
                showNotification('Silakan masukkan email baru Anda', 'info');
            }
        }
    });

    // Enter key untuk save profile
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Enter' && isEditingProfile && currentPage === 'profile') {
            e.preventDefault();
            saveProfileChanges();
        }
    });
}

// Render order history
function renderOrderHistory() {
    const historySection = document.querySelector('#historySection .order-history');
    if (!historySection) return;
    
    if (orderHistory.length === 0) {
        historySection.innerHTML = `
            <div style="text-align: center; padding: 40px 20px;">
                <i class="fas fa-history" style="font-size: 60px; color: rgba(0, 212, 255, 0.3); margin-bottom: 20px;"></i>
                <h3 style="color: rgba(255, 255, 255, 0.7); margin-bottom: 10px;">Belum Ada Riwayat Pesanan</h3>
                <p style="color: rgba(255, 255, 255, 0.5);">Pesanan Anda akan muncul di sini setelah melakukan pemesanan</p>
                <button class="btn" data-page="menu" style="margin-top: 20px;">
                    <i class="fas fa-utensils"></i> Lihat Menu
                </button>
            </div>
        `;
        
        // Add event listener to button
        historySection.querySelector('button').addEventListener('click', function(e) {
            e.preventDefault();
            showPage('menu');
        });
        return;
    }
    
    // Sort orders by date (newest first)
    const sortedOrders = [...orderHistory].sort((a, b) => new Date(b.date) - new Date(a.date));
    
    historySection.innerHTML = `
        <div style="max-height: 500px; overflow-y: auto;">
            ${sortedOrders.map(order => {
                const orderDate = new Date(order.date);
                const statusColor = order.status === 'processing' ? 'var(--warning)' : 
                                  order.status === 'completed' ? 'var(--accent)' : 'var(--danger)';
                const statusText = order.status === 'processing' ? 'Diproses' : 
                                  order.status === 'completed' ? 'Selesai' : 'Dibatalkan';
                
                return `
                    <div style="background: rgba(255, 255, 255, 0.05); border-radius: 10px; padding: 20px; margin-bottom: 15px; border: 1px solid rgba(0, 212, 255, 0.1);">
                        <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 15px;">
                            <div>
                                <div style="font-weight: 600; color: var(--circuit);">${order.orderNumber}</div>
                                <div style="font-size: 12px; color: rgba(255, 255, 255, 0.6); margin-top: 5px;">
                                    ${orderDate.toLocaleDateString('id-ID', {
                                        weekday: 'long',
                                        year: 'numeric',
                                        month: 'long',
                                        day: 'numeric',
                                        hour: '2-digit',
                                        minute: '2-digit'
                                    })}
                                </div>
                            </div>
                            <div style="background: ${statusColor}; color: white; padding: 5px 10px; border-radius: 20px; font-size: 12px; font-weight: 600;">
                                ${statusText}
                            </div>
                        </div>
                        
                        <div style="margin-bottom: 15px;">
                            <div style="font-size: 14px; color: rgba(255, 255, 255, 0.8); margin-bottom: 5px;">
                                ${order.items.length} item • ${order.customer.deliveryText}
                            </div>
                            <div style="font-size: 12px; color: rgba(255, 255, 255, 0.6);">
                                Pembayaran: ${order.customer.paymentMethod.charAt(0).toUpperCase() + order.customer.paymentMethod.slice(1)}
                            </div>
                        </div>
                        
                        <div style="display: flex; justify-content: space-between; align-items: center;">
                            <div style="font-weight: 700; color: var(--circuit); font-size: 18px;">
                                Rp ${order.total.toLocaleString('id-ID')}
                            </div>
                            <div style="display: flex; gap: 10px;">
                                <button class="btn" style="padding: 5px 15px; font-size: 12px;" data-order="${order.orderNumber}">
                                    <i class="fas fa-redo"></i> Pesan Ulang
                                </button>
                            </div>
                        </div>
                    </div>
                `;
            }).join('')}
        </div>
    `;
    
    // Add event listeners to reorder buttons
    historySection.querySelectorAll('button[data-order]').forEach(button => {
        button.addEventListener('click', function() {
            const orderNumber = this.getAttribute('data-order');
            const order = orderHistory.find(o => o.orderNumber === orderNumber);
            
            if (order) {
                cart = JSON.parse(JSON.stringify(order.items)); // Deep copy
                updateCartCount();
                saveCartToStorage();
                showNotification('Items dari pesanan telah ditambahkan ke keranjang', 'success');
                showPage('cart');
            }
        });
    });
}

// Render loyalty section
function renderLoyaltySection() {
    const loyaltySection = document.getElementById('loyaltySection');
    if (!loyaltySection) return;
    
    const points = currentUser?.points || tekPoints;
    const level = Math.floor(points / 100) + 1;
    const nextLevelPoints = level * 100;
    const progress = (points % 100) || 100;
    
    loyaltySection.querySelector('.loyalty-section').innerHTML = `
        <div class="loyalty-title">Program Loyalty Koptek</div>
        <p style="max-width: 700px; margin: 0 auto 30px; color: rgba(255, 255, 255, 0.9);">
            Dapatkan 1 TekPoint untuk setiap Rp 5.000 pembelian. Tukarkan points Anda dengan diskon atau item menu spesial.
        </p>
        
        <div style="background-color: rgba(255, 255, 255, 0.1); padding: 30px; border-radius: 10px; max-width: 600px; margin: 0 auto;">
            <div style="text-align: center; margin-bottom: 30px;">
                <div style="font-size: 14px; color: rgba(255, 255, 255, 0.8); margin-bottom: 5px;">TEKPOINTS ANDA</div>
                <div style="font-size: 48px; font-weight: 700; color: var(--circuit);" id="currentPoints">${points}</div>
                <div style="font-size: 14px; color: rgba(255, 255, 255, 0.8); margin-top: 5px;">Level ${level}</div>
                
                <div style="margin-top: 20px;">
                    <div style="width: 100%; height: 10px; background-color: rgba(255, 255, 255, 0.2); border-radius: 5px; overflow: hidden;">
                        <div id="pointsProgress" style="height: 100%; background: linear-gradient(90deg, var(--circuit), var(--binary)); width: ${progress}%;"></div>
                    </div>
                    <div style="display: flex; justify-content: space-between; margin-top: 5px; font-size: 12px;">
                        <span>${points} points</span>
                        <span>${nextLevelPoints - points} to next level</span>
                        <span>${nextLevelPoints} points</span>
                    </div>
                </div>
            </div>
            
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); gap: 20px;">
                <div style="background-color: rgba(255, 255, 255, 0.1); padding: 20px; border-radius: 10px; text-align: center; border: 1px solid rgba(0, 212, 255, 0.2);">
                    <div style="font-size: 20px; font-weight: 600; color: var(--circuit); margin-bottom: 10px;">50 Points</div>
                    <div style="font-size: 14px; margin-bottom: 10px;">Diskon Rp 5.000</div>
                    <button class="btn" style="padding: 8px 15px; font-size: 12px;" data-redeem="50" ${points < 50 ? 'disabled style="opacity: 0.5; cursor: not-allowed;"' : ''}>
                        ${points >= 50 ? 'Tukarkan' : 'Points kurang'}
                    </button>
                </div>
                <div style="background-color: rgba(255, 255, 255, 0.1); padding: 20px; border-radius: 10px; text-align: center; border: 1px solid rgba(0, 212, 255, 0.2);">
                    <div style="font-size: 20px; font-weight: 600; color: var(--circuit); margin-bottom: 10px;">100 Points</div>
                    <div style="font-size: 14px; margin-bottom: 10px;">1 Gelas Kopi Gratis</div>
                    <button class="btn" style="padding: 8px 15px; font-size: 12px;" data-redeem="100" ${points < 100 ? 'disabled style="opacity: 0.5; cursor: not-allowed;"' : ''}>
                        ${points >= 100 ? 'Tukarkan' : 'Points kurang'}
                    </button>
                </div>
                <div style="background-color: rgba(255, 255, 255, 0.1); padding: 20px; border-radius: 10px; text-align: center; border: 1px solid rgba(0, 212, 255, 0.2);">
                    <div style="font-size: 20px; font-weight: 600; color: var(--circuit); margin-bottom: 10px;">200 Points</div>
                    <div style="font-size: 14px; margin-bottom: 10px;">Paket Hemat + Snack</div>
                    <button class="btn" style="padding: 8px 15px; font-size: 12px;" data-redeem="200" ${points < 200 ? 'disabled style="opacity: 0.5; cursor: not-allowed;"' : ''}>
                        ${points >= 200 ? 'Tukarkan' : 'Points kurang'}
                    </button>
                </div>
            </div>
            
            <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid rgba(255, 255, 255, 0.1);">
                <h4 style="color: var(--circuit); margin-bottom: 15px; text-align: center;">Cara Mendapatkan Points</h4>
                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 15px;">
                    <div style="text-align: center;">
                        <i class="fas fa-shopping-cart" style="color: var(--circuit); margin-bottom: 10px;"></i>
                        <div style="font-size: 12px;">1 point / Rp 5.000 belanja</div>
                    </div>
                    <div style="text-align: center;">
                        <i class="fas fa-user-plus" style="color: var(--circuit); margin-bottom: 10px;"></i>
                        <div style="font-size: 12px;">50 points / referral</div>
                    </div>
                    <div style="text-align: center;">
                        <i class="fas fa-birthday-cake" style="color: var(--circuit); margin-bottom: 10px;"></i>
                        <div style="font-size: 12px;">100 points / ulang tahun</div>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    updatePointsDisplay();
    
    // Add event listeners to redeem buttons
    loyaltySection.querySelectorAll('[data-redeem]').forEach(button => {
        button.addEventListener('click', function() {
            if (this.disabled) return;
            
            const pointsNeeded = parseInt(this.getAttribute('data-redeem'));
            const points = currentUser?.points || tekPoints;
            
            if (points >= pointsNeeded) {
                tekPoints -= pointsNeeded;
                if (currentUser) {
                    currentUser.points = tekPoints;
                    saveUserToStorage();
                }
                
                let reward = '';
                switch(pointsNeeded) {
                    case 50: reward = 'voucher diskon Rp 5.000'; break;
                    case 100: reward = '1 gelas kopi gratis'; break;
                    case 200: reward = 'paket hemat + snack'; break;
                }
                
                showNotification(`Berhasil menukarkan ${pointsNeeded} TekPoints untuk ${reward}!`, 'success');
                updatePointsDisplay();
                renderLoyaltySection();
            }
        });
    });
}