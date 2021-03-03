import Page from './page';
import PlansPage from './plans.page';
import * as testData from '../data/purchase-data.json';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class ProductsPage extends Page {
  /**
   * Element Selectors
   * define selectors using getter methods
   */
  get addToCartButton() {
    return $$('div[data-qa=button-add-to-cart]');
  }
  get productItems() {
    return $$('div.single-cell-item');
  }

  /**
   * Actions
   * a method to encapsule automation code to interact with the page
   */
  addItemToCart(itemIndex: number) {
    this.addToCartButton[itemIndex].waitForClickable();
    this.addToCartButton[itemIndex].click();
  }

  addItemsToCart(numberOfItems: number) {
    for (let i = 0; i < numberOfItems; i++) {
      this.moveToItem(i);
      this.addItemToCart(i);

      if (i < 1) PlansPage.selectPlan(testData.product.productIndex);
    }
  }

  moveToItem(itemIndex: number) {
    browser.waitUntil(() => this.productItems[itemIndex].waitForDisplayed() === true, {
      timeout: 5000,
      timeoutMsg: 'product list expected to load after 5s',
    });
    this.productItems[itemIndex].moveTo();
  }

  /**
   * overwrite specific options to adapt it to page object
   */
  open() {
    return super.open('products');
  }
}

export default new ProductsPage();
