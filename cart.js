let cartItems = document.querySelector(".cart-items");
let subtotalPrice = document.querySelector("#subtotal");
let totalPrice = document.querySelector("#cart-total");
let cartCount = document.querySelector(".cart-count");

let cart = JSON.parse(localStorage.getItem("cart")) || [];

function renderCart() {
    if (!cartItems){
        return;
    }

    cartItems.innerHTML = "";

    let subtotal = 0;

    cart.forEach((item, index) => {
        subtotal += item.price * item.quantity;

        cartItems.innerHTML += `
        <div class="cart-item">
            <div class="cart-box">
                <div class="cart-img-box">
                    <img class="cart-img" src="${item.image}" alt="${item.title}">
                </div>
                <div class="cart-text">
                    <h4 class="cart-h4">${item.title}</h4>
                    <div class="cart-price">$${item.price}</div>
                    <div class="cart-qty">
                        <button class="minus-btn" data-index="${index}">−</button>
                        <p class="cart-item-count">${item.quantity}</p>
                        <button class="plus-btn" data-index="${index}">+</button>
                    </div>
                </div>
            </div>
            <button class="cart-remove-btn" data-index="${index}">🗑</button>
        </div>
        `;
    });

    if (subtotalPrice){
        subtotalPrice.textContent = `$${(subtotal).toFixed(2)}`;
    }
    if (totalPrice){
        totalPrice.textContent = `$${(subtotal).toFixed(2)}`;
    }

    updateCartCount();
}

function updateCartCount() {
    if (!cartCount){
        return;
    }

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    let totalItems = 0;
    cart.forEach(item => {
        totalItems += item.quantity;
    });
    cartCount.textContent = totalItems;
}

document.addEventListener("click", (e) => {
    if (e.target.classList.contains("plus-btn")) {
        let index = e.target.dataset.index;
        cart[index].quantity++;
        updateCart();
    }

    if (e.target.classList.contains("minus-btn")) {
        let index = e.target.dataset.index;

        if (cart[index].quantity > 1) {
            cart[index].quantity--;
        }else {
            cart.splice(index, 1);
        }

        updateCart();
    }

    if (e.target.classList.contains("cart-remove-btn")) {
        let index = e.target.dataset.index;
        cart.splice(index, 1);
        updateCart();
    }
});

function updateCart() {
    localStorage.setItem("cart", JSON.stringify(cart));
    renderCart();
}

let payBtn = document.querySelector(".cart-pay-button");
if(payBtn){
    payBtn.addEventListener("click", () => {
        if(localStorage.getItem("isLoggedIn") === "true"){
            // window.location.href = "#";
            alert("Sifariş uğurla tamamlandı!");
        }
        else{
            window.location.href = "login.html";
        }
    });
}

renderCart();
updateCartCount();