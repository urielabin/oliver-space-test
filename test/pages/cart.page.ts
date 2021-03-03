import Page from './page';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class CartPage extends Page {
  /**
   * Element Selectors
   * define selectors using getter methods
   */
  get checkoutButton() {
    return $('button[data-qa=button-cart-submit]');
  }
  get emptyCart() {
    return $('div[data-qa=cart-empty]');
  }
  get clearCartIcon() {
    return $('img[data-qa=cart-clear-product]');
  }

  /**
   * Actions
   * a method to encapsule automation code to interact with the page
   */
  clearCart() {
    this.clearCartIcon.waitForDisplayed();
    this.clearCartIcon.waitForClickable();
    this.clearCartIcon.click();
  }
  checkoutOrder() {
    this.checkoutButton.waitForDisplayed();
    this.checkoutButton.waitForClickable();
    this.checkoutButton.click();
  }
}

export default new CartPage();
