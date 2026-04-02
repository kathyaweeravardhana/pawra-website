function getCart() {
  return JSON.parse(localStorage.getItem("cart")) || [];
}

function saveCart(cart) {
  localStorage.setItem("cart", JSON.stringify(cart));
  updateCartCount();
}

function addToCart(name, price, image) {
  let cart = getCart();
  let existingItem = cart.find(item => item.name === name);

  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    cart.push({
      name: name,
      price: price,
      image: image,
      quantity: 1
    });
  }

  saveCart(cart);
  alert(name + " added to cart!");
}

function updateCartCount() {
  const cart = getCart();
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  document.querySelectorAll("#cart-count").forEach(el => {
    el.textContent = totalItems;
  });
}

function renderCart() {
  const cartItemsContainer = document.getElementById("cart-items");
  const cartTotalElement = document.getElementById("cart-total");

  if (!cartItemsContainer || !cartTotalElement) return;

  const cart = getCart();
  cartItemsContainer.innerHTML = "";

  if (cart.length === 0) {
    cartItemsContainer.innerHTML = `
      <div class="form-card text-center">
        <h4>Your cart is empty</h4>
        <p class="mb-3">Add some products to get started.</p>
        <a href="products.html" class="btn btn-brand">Go to Products</a>
      </div>
    `;
    cartTotalElement.textContent = "0.00";
    return;
  }

  let total = 0;

  cart.forEach((item, index) => {
    total += item.price * item.quantity;

    cartItemsContainer.innerHTML += `
      <div class="form-card mb-3">
        <div class="row align-items-center">
          <div class="col-md-2 text-center">
            <img src="${item.image}" alt="${item.name}" class="cart-item-img">
          </div>
          <div class="col-md-4">
            <h5>${item.name}</h5>
            <p class="mb-0">LKR ${item.price.toFixed(2)}</p>
          </div>
          <div class="col-md-3 mt-3 mt-md-0">
            <button class="btn btn-sm btn-outline-secondary" onclick="changeQty(${index}, -1)">-</button>
            <span class="mx-2 fw-bold">${item.quantity}</span>
            <button class="btn btn-sm btn-outline-secondary" onclick="changeQty(${index}, 1)">+</button>
          </div>
          <div class="col-md-3 text-md-end mt-3 mt-md-0">
            <button class="btn btn-sm btn-danger" onclick="removeItem(${index})">Remove</button>
          </div>
        </div>
      </div>
    `;
  });

  cartTotalElement.textContent = total.toFixed(2);
}

function changeQty(index, amount) {
  let cart = getCart();
  cart[index].quantity += amount;

  if (cart[index].quantity <= 0) {
    cart.splice(index, 1);
  }

  saveCart(cart);
  renderCart();
}

function removeItem(index) {
  let cart = getCart();
  cart.splice(index, 1);
  saveCart(cart);
  renderCart();
}

function filterProducts(category, buttonElement = null) {
  const items = document.querySelectorAll(".product-item");
  const buttons = document.querySelectorAll(".filter-btn");

  items.forEach(item => {
    if (category === "all" || item.dataset.category === category) {
      item.classList.remove("hidden-product");
    } else {
      item.classList.add("hidden-product");
    }
  });

  buttons.forEach(btn => btn.classList.remove("active"));
  if (buttonElement) {
    buttonElement.classList.add("active");
  }
}

function applyCategoryFromURL() {
  const params = new URLSearchParams(window.location.search);
  const category = params.get("category");
  if (!category) return;

  const buttons = document.querySelectorAll(".filter-btn");
  const map = { all: 0, dogs: 1, cats: 2, toys: 3, grooming: 4 };

  if (map[category] !== undefined && buttons[map[category]]) {
    filterProducts(category, buttons[map[category]]);
  }
}

document.addEventListener("DOMContentLoaded", function () {
  updateCartCount();
  renderCart();
  applyCategoryFromURL();
});