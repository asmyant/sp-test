class ProjectApp {
  constructor() {
    this.env = require('./utils/env').default;
    this.utils = require('./utils/utils').default;
    this.classes = {
      // Signal: require('./classes/Signal').default,
    };
    this.components = {
      Quantity: require('../../components/quantity/quantity').default,
      product: require('../../components/product/product'),
      cart: require('../../includes/cart/cart'),
    };
    this.helpers = {};
    this.modules = {};

    document.addEventListener('DOMContentLoaded', () => {
      document.documentElement.classList.remove('_loading');
    });
  }
}

global.ProjectApp = new ProjectApp();

if (module.hot) {
  module.hot.accept();
}
