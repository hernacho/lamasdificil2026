const buttons = document.querySelectorAll("[data-id]");
const label = document.getElementById("cart-label")

let toastTimeout;

buttons.forEach(button => {
    button.addEventListener("click", () => {
        const product = {
            id: button.dataset.id,
            name: button.dataset.name,
            price: button.dataset.price,
            image: button.dataset.image,
        };
        addToCart(product);
    })
})

// Abrir/Cerrar Toast
document.getElementById("toast-product-close").addEventListener("click", () => {
    closeToast();
})

function closeToast() {
    clearTimeout(toastTimeout);
    document.getElementById("toast-product").classList.remove("flex");
    document.getElementById("toast-product").classList.add("hidden");
}

// Agregar producto al carrito
function addToCart(product) {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const existing = cart.find(item => item.id === product.id);
    if (existing) {
        existing.quantity++;
    } else {
        cart.push({ ...product, quantity: 1 });
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    document.getElementById("toast-product-name").textContent = product.name;
    document.getElementById("toast-product-image").src = product.image;
    document.getElementById("toast-product-price").textContent = `$ ${product.price}`;
    document.getElementById("toast-product").classList.add("flex");
    document.getElementById("toast-product").classList.remove("hidden");
    clearTimeout(toastTimeout);
    toastTimeout = setTimeout(() => {
        closeToast();
    }, 4000);
    renderCart();
}

// Abrir/cerrar panel
const cartPanel = document.getElementById("cart-panel");

document.getElementById("cart-panel-open").addEventListener("click", () => {
    cartPanel.classList.toggle("translate-x-full");
    cartPanel.classList.toggle("translate-x-0");
    renderCart();
})

document.getElementById("cart-panel-close").addEventListener("click", () => {
    cartPanel.classList.add("translate-x-full");
    cartPanel.classList.remove("translate-x-0");
})

// Renderizar productos en el panel
function renderCart() {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const cartProducts = document.getElementById("cart-products");

    cartProducts.innerHTML = cart.map(item => `
        <div class="rounded-sm mx-auto my-2 p-4 flex flex-col bg-white w-11/12 h-fit border border-stone-400">
            <div class="flex gap-4">
                <img src="${item.image}" alt="${item.name}" width="100" />
                <div class="flex flex-col gap-4">
                    <p class="text-2xl">${item.name}</p>
                    <p class="text-4xl font-semibold">$${item.price}</p>
                    <div class="flex w-full px-4 gap-2">
                        <button data-action="decrease" data-id="${item.id}" class="flex items-center justify-center w-6 h-6 bg-stone-400 rounded-sm text-2xl">-</button>
                        <input class="border-stone-500 w-10 border text-center rounded-sm" type="number" value="${item.quantity}" />
                        <button data-action="increase" data-id="${item.id}" class="flex items-center justify-center w-6 h-6 bg-stone-400 rounded-sm text-2xl">+</button>
                    </div>
                </div>
            </div>
            <button data-action="delete" data-id="${item.id}" class="w-full flex justify-end">
  <svg width="32" height="32" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">
    <path d="M667.8 362.1H304V830c0 28.2 23 51 51.3 51h312.4c28.4 0 51.4-22.8 51.4-51V362.2h-51.3z" fill="#CCCCCC" />
    <path d="M750.3 295.2c0-8.9-7.6-16.1-17-16.1H289.9c-9.4 0-17 7.2-17 16.1v50.9c0 8.9 7.6 16.1 17 16.1h443.4c9.4 0 17-7.2 17-16.1v-50.9z" fill="#CCCCCC" />
    <path d="M733.3 258.3H626.6V196c0-11.5-9.3-20.8-20.8-20.8H419.1c-11.5 0-20.8 9.3-20.8 20.8v62.3H289.9c-20.8 0-37.7 16.5-37.7 36.8V346c0 18.1 13.5 33.1 31.1 36.2V830c0 39.6 32.3 71.8 72.1 71.8h312.4c39.8 0 72.1-32.2 72.1-71.8V382.2c17.7-3.1 31.1-18.1 31.1-36.2v-50.9c0.1-20.2-16.9-36.8-37.7-36.8z m-293.5-41.5h145.3v41.5H439.8v-41.5z m-146.2 83.1H729.5v41.5H293.6v-41.5z m404.8 530.2c0 16.7-13.7 30.3-30.6 30.3H355.4c-16.9 0-30.6-13.6-30.6-30.3V382.9h373.6v447.2z" fill="#211F1E" />
    <path d="M511.6 798.9c11.5 0 20.8-9.3 20.8-20.8V466.8c0-11.5-9.3-20.8-20.8-20.8s-20.8 9.3-20.8 20.8v311.4c0 11.4 9.3 20.7 20.8 20.7zM407.8 798.9c11.5 0 20.8-9.3 20.8-20.8V466.8c0-11.5-9.3-20.8-20.8-20.8s-20.8 9.3-20.8 20.8v311.4c0.1 11.4 9.4 20.7 20.8 20.7zM615.4 799.6c11.5 0 20.8-9.3 20.8-20.8V467.4c0-11.5-9.3-20.8-20.8-20.8s-20.8 9.3-20.8 20.8v311.4c0 11.5 9.3 20.8 20.8 20.8z" fill="#211F1E" />
  </svg>
</button>
        </div>
    `).join("");

    // Calcular y mostrar total
    const total = cart.reduce((sum, item) => sum + Number(item.price) * item.quantity, 0);
    document.getElementById("cart-total").textContent = `$ ${total}`;

    // Eventos de botones de cada producto
    cartProducts.querySelectorAll("[data-action]").forEach(button => {
        button.addEventListener("click", () => {
            updateCart(button.dataset.id, button.dataset.action);
        });
    });

    // Ocultar o mostrar Tu carrito está vacío
    if (cart.length > 0) {
        label.classList.add("hidden");
        label.classList.remove("block");
    } else {
        label.classList.remove("hidden");
        label.classList.add("block");
    }
}

// Actualizar cantidad o eliminar producto
function updateCart(id, action) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    if (action === "increase") {
        cart = cart.map(item => item.id === id ? { ...item, quantity: item.quantity + 1 } : item);
    } else if (action === "decrease") {
        cart = cart.map(item => item.id === id ? { ...item, quantity: Math.max(1, item.quantity - 1) } : item);
    } else if (action === "delete") {
        cart = cart.filter(item => item.id !== id);
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    renderCart();
}