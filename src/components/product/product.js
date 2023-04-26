// HTML classes
const product = '.js-product';
const deleteButton = '.js-product__delete';

// Delete product
document
  .querySelectorAll(deleteButton)
  .forEach(button => button.addEventListener('click', () => button.closest(product).remove()));
