// HTML classes
const cart = '.js-cart';
const toggleButton = '.js-cart__toggle';

// Toggle mobile class
document
  .querySelector(toggleButton)
  .addEventListener('click', () => document.querySelector(cart).classList.toggle('active'));
