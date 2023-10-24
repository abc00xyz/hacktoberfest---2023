const products = document.querySelectorAll('.product');
const cartItems = document.querySelector('.cart ul.cart-items');
const cartTotal = document.getElementById('cart-total');

let cart = [];

products.forEach((product, index) => {
    product.addEventListener('click', () => {
        const productName = product.querySelector('h2').textContent;
        const productPrice = product.querySelector('.price').textContent;

        cart.push({ name: productName, price: parseFloat(productPrice.slice(1)) });
        updateCart();
    });
});

function updateCart() {
    cartItems.innerHTML = '';
    let total = 0;

    cart.forEach((item, index) => {
        const cartItem = document.createElement('li');
        cartItem.innerHTML = `
            <span>${item.name}</span>
            <span>$${item.price.toFixed(2)}</span>
        `;
        cartItems.appendChild(cartItem);
        total += item.price;
    });

    cartTotal.textContent = `$${total.toFixed(2)}`;
}
