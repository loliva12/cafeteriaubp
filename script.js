const products = [
    { id: 1, name: 'Criollo', price: 600, image: 'https://acdn.mitiendanube.com/stores/002/255/209/products/01-criolllos-independencia1-55ddd590e6b5db01c216863144788050-640-0.jpg' },
    { id: 2, name: 'Medialuna', price: 600, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmiZt87kwMlaIHKCJ0eay7BnoEfq8XaB51dg&s' },
    { id: 3, name: 'Dona', price: 1200, image: 'https://www.exquisita.com.ar/wp-content/uploads/2018/06/dona.jpg.webp' },
    { id: 4, name: 'Café grande', price: 3200, image: 'https://s1.elespanol.com/2022/05/06/ciencia/nutricion/670443708_224112564_1706x960.jpg' },
    { id: 5, name: 'Café chico', price: 2300, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRC0-wFCRDztLqtScZ0KKQjXlqHfK-Z2zzAcjfgRJ9EgcWUYiIG4o9Vg7UOO5Z9K7A24fs&usqp=CAU' },
    { id: 6, name: 'Capuchino', price: 2800, image: 'https://www.cocinatis.com/archivos/202401/receta-capuchino-1280x720x80xX.jpg' },
    { id: 7, name: 'Combo 1: Café grande + Medialuna', price: 3600, image: 'https://contexto-web.com/wp-content/uploads/2022/06/Foto-para-web-1110-%C3%97-694-px-16.jpg' },
    { id: 8, name: 'Combo 2: Café chico + Dona', price: 3000, image: 'https://i.pinimg.com/736x/32/18/07/321807288e05a8b79c4978dafede5bd4.jpg' },
    { id: 9, name: 'Sandwich de Jamón y Queso', price: 1500, image: 'https://s1.elespanol.com/2020/04/23/ciencia/nutricion/alimentacion-dieta-obesidad_484713861_150852066_1706x960.jpg' }
];

let cart = [];
let orderNumber = null;
let estimatedTime = null;

// Cargar lista de productos
function loadProducts() {
    const productList = document.getElementById('product-list');
    products.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'col mb-4';
        productCard.innerHTML = `
            <div class="card h-100">
                <img src="${product.image}" alt="${product.name}" class="card-img-top img-fluid" style="height: 200px; object-fit: cover;">
                <div class="card-body text-center">
                    <h5 class="card-title">${product.name}</h5>
                    <p class="card-text">$${product.price}</p>
                    <button onclick="addToCart(${product.id})" class="btn btn-danger">Agregar</button>
                </div>
            </div>
        `;
        productList.appendChild(productCard);
    });
}

// Agregar al carrito
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    cart.push(product);
    displayCart();
}

// Mostrar carrito
function displayCart() {
    const cartContainer = document.getElementById('cart');
    cartContainer.classList.remove('d-none'); // Mostrar carrito si está oculto
    cartContainer.innerHTML = `<h2 class="text-center">Tu Pedido</h2>`;
    let total = 0;
    cart.forEach(product => {
        total += product.price;
        cartContainer.innerHTML += `
            <div class="d-flex justify-content-between">
                <p>${product.name}</p>
                <p>$${product.price}</p>
            </div>
        `;
    });
    cartContainer.innerHTML += `
        <h3 class="text-center">Total: $${total}</h3>
        <button onclick="proceedToPayment()" class="btn btn-danger w-100 mt-3">Proceder al Pago</button>
    `;
}

// Proceder al pago
function proceedToPayment() {
    document.getElementById('cart').classList.add('d-none');
    document.getElementById('payment').classList.remove('d-none');
    document.getElementById('total-amount').textContent = cart.reduce((sum, product) => sum + product.price, 0);
}

// Confirmar pago y mostrar confirmación
function confirmPayment(paymentMethod) {
    orderNumber = Math.floor(Math.random() * 10000);
    estimatedTime = Math.floor(Math.random() * 10) + 1;
    document.getElementById('payment').classList.add('d-none');
    document.getElementById('confirmation').classList.remove('d-none');
    document.getElementById('order-number').textContent = orderNumber;
    document.getElementById('estimated-time').textContent = estimatedTime;
    alert(`Pago confirmado con ${paymentMethod}`);
}

// Inicializar
document.addEventListener('DOMContentLoaded', loadProducts);
