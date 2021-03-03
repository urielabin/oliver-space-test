import Page from '../page';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class Header extends Page {
  /**
   * Element Selectors
   * define selectors using getter methods
   */
  get cartButton() {
    return $('div[data-qa=link-cart]');
  }
  get locationButton() {
    return $('button[data-qa=location-button]');
  }

  /**
   * Actions
   * a method to encapsule automation code to interact with the page
   */
  clickCart() {
    this.cartButton.waitForDisplayed();
    this.cartButton.waitForClickable();
    this.cartButton.click();
  }

  clickLocation() {
    this.locationButton.waitForDisplayed();
    this.locationButton.waitForClickable();
    this.locationButton.click();
  }
}

export default new Header();
