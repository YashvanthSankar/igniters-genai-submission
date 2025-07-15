/* 
🚨 ORIGINAL BROKEN CODE - KEPT FOR REFERENCE
This file contains multiple bugs that were fixed in the React version:

BUGS IDENTIFIED AND FIXED:
1. Line 12: Reversed logic (==null should be !=null)
2. Line 45: Missing backtick in template literal
3. Line 47: Unquoted function parameters
4. Line 52: Missing applyFilter function
5. Line 39: Wrong DOM ID (detail_content vs detail-content)
6. Line 58: Inconsistent localStorage key naming
7. Missing: Proper error handling
8. Missing: Quantity management in cart
9. Missing: Remove from cart functionality
*/

const products = [
  { id: "product1", name: "Shoes", desc: "", price: 200 },
  { id: "product2", name: "Hat", desc: "", price: 190 },
  { id: "product3", name: "Watch", desc: "", price: 1000 },
  { id: "product4", name: "Backpack", desc: "", price: 699 },
  { id: "product5", name: "Sunglasses", desc: "", price: 399 },
  { id: "product6", name: "T-Shirt", desc: "", price: 259 },
  { id: "product7", name: "Laptop", desc: "", price: 89999 },
  { id: "product8", name: "Smartphone", desc: "", price: 6999 },
  { id: "product9", name: "Camera", desc: "", price: 49999 },
  { id: "product10", name: "Headphones", desc: "", price: 1499 },
];
let cart;
// 🚨 BUG: Reversed logic - should be != null
if (JSON.parse(localStorage.getItem("cart")) == null) {
  cart = JSON.parse(localStorage.getItem("cart"));
} else {
  cart = [];
}

const productsContainer = document.getElementById("products");
const detailContent = document.getElementById("detail_content"); // 🚨 BUG: Wrong ID
const searchBox = document.getElementById("search-box");

function renderProducts(filter = "") {
  productsContainer.innerHTML = "";
  const filtered = products.filter((p) =>
    p.name.includes(filter.toLowerCase())
  );

  filtered.forEach((product) => {
    const div = document.createElement("div");
    div.className = "product-card";
    div.innerHTML = `<strong>${product.name}</strong><br>₹${product.price}`;
    div.onclick = () => showProductDetail(product);
    productsContainer.appendChild(div);
    saveToLocalStrg();
  });

  if (filtered.length === 0) {
    productsContainer.innerHTML = "<p>No products found.</p>";
  }
}

function addtocart(name, price) {
  console.log("add");
  const newitem = { name: name, price: price, count: 1 };
  cart.push(newitem);
  console.log(cart);
  alert("Item Added To cart");
}

function showProductDetail(product) {
  // 🚨 BUG: Missing backtick in template literal
  detailContent.innerHTML = `
        <h3>${product.name}</h3>
        <p>${product.desc}</p>``
        <p><strong>Price:</strong> ₹${product.price}</p>
        <button onclick="addtocart(${product.name},${product.price})">Add to Cart</button>
      `; // 🚨 BUG: Unquoted parameters in onclick
}

searchBox.addEventListener("input", (e) => {
  renderProducts(e.target.value);
});
// 🚨 BUG: Missing applyFilter function
document.getElementById("filter").addEventListener("click", applyFilter);

function saveToLocalStrg() {
  localStorage.setItem("Cart", JSON.stringify(cart)); // 🚨 BUG: Inconsistent key naming
  localStorage.setItem("Cart", "The data was stored");
}

renderProducts();
