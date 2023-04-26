// HTML classes
const container = '.js-quantity';
const button = '.js-quantity__button';
const input = '.js-quantity__input';
const price = '.js-quantity__price';

/**
 *
 */
class Quantity {
  /**
   * Quantity logic
   * @param node {HTMLElement}
   */
  constructor(node) {
    this.node = node;
    this.input = node.querySelector(input);
    this.count = Number(this.input.value);
    this.decrementButton = node.querySelector('[data-action="decrement"]');
    this.price = node.querySelector(price);
    this.events();
  }

  events() {
    this.node.querySelectorAll(button).forEach(b =>
      b.addEventListener('click', () => {
        const action = b.dataset.action;
        action === 'increment' ? this.increment() : this.decrement();

        this.updateDisplay();
        this.setDisabled();
        this.updatePrice();
      })
    );
  }

  /**
   * Decrement count
   */
  decrement() {
    this.count--;
  }

  /**
   * Set disabled
   */
  setDisabled() {
    this.count > 1
      ? this.decrementButton.removeAttribute('disabled')
      : this.decrementButton.setAttribute('disabled', 'disabled');
  }

  /**
   * Increment count
   */
  increment() {
    this.count++;
  }

  /**
   * Update display
   */
  updateDisplay() {
    this.input.value = this.count;
  }

  /**
   * Update price
   */
  updatePrice() {
    const { price } = this.price.dataset;

    this.price.innerHTML = this.count * price;
  }
}

export default document.querySelectorAll(container).forEach(item => new Quantity(item));
