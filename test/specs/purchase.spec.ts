import CartPage from '../pages/cart.page';
import Header from '../pages/components/header.component';
import LocationPage from '../pages/location.page';
import ProductsPage from '../pages/products.page';
import PlansPage from '../pages/plans.page';
import DeliveryPage from '../pages/delivery.page';
import BillingPage from '../pages/billing.page';

import * as testData from '../data/purchase-data.json';

describe('Oliver Space - Purchase Flow', () => {
  beforeEach(() => {
    ProductsPage.open();

    Header.clickLocation();

    LocationPage.fillZipCode(testData.delivery.zipCode);
    LocationPage.submitLocationForm();
  });

  afterEach(() => {
    browser.reloadSession();
  });

  it('should verify the empty cart', () => {
    Header.clickCart();

    expect(CartPage.emptyCart).toBeDisplayed();
  });
  it('should add a product and remove it from the cart', () => {
    ProductsPage.moveToItem(testData.product.productIndex);
    ProductsPage.addItemToCart(testData.product.productIndex);

    PlansPage.selectPlan(testData.product.productIndex);

    Header.clickCart();

    CartPage.clearCart();

    expect(CartPage.emptyCart).toBeDisplayed();
  });
  it('should add a product, go to checkout and verify required fields in the delivery page', () => {
    const deliveryRequiredFields = 10;

    ProductsPage.moveToItem(testData.product.productIndex);
    ProductsPage.addItemToCart(testData.product.productIndex);

    PlansPage.selectPlan(testData.product.productIndex);

    Header.clickCart();

    CartPage.checkoutOrder();

    DeliveryPage.submitDelivery();
    const requiredFields = DeliveryPage.verifyAllRequiredFieldsErrors();

    expect(requiredFields).toEqual(deliveryRequiredFields);
  });
  it('should select a single product and checkout the order', () => {
    ProductsPage.moveToItem(testData.product.productIndex);
    ProductsPage.addItemToCart(testData.product.productIndex);

    PlansPage.selectPlan(testData.product.productIndex);

    Header.clickCart();

    CartPage.checkoutOrder();

    DeliveryPage.fillFirstName(testData.delivery.firstName);
    DeliveryPage.fillLastName(testData.delivery.lastName);
    DeliveryPage.fillPhoneNumber(testData.delivery.phoneNumber);
    DeliveryPage.fillStreetAddress(testData.delivery.address);
    DeliveryPage.fillCity(testData.delivery.city);
    DeliveryPage.selectState(testData.delivery.state);
    DeliveryPage.fillZipCode(testData.delivery.zipCode);
    DeliveryPage.selectDeliveryDate(testData.delivery.dayIndex);
    DeliveryPage.fillEmail(testData.delivery.email);
    DeliveryPage.fillPassword(testData.delivery.password);
    DeliveryPage.submitDelivery();

    let isEnabled = BillingPage.verifySubmitButtonEnabled();
    expect(isEnabled).toBe(false);

    BillingPage.fillPayment(
      testData.billing.cardNumber,
      testData.billing.expDate,
      testData.billing.cvc
    );
    isEnabled = BillingPage.verifySubmitButtonEnabled();

    expect(isEnabled).toBe(false);
  });
  it('should select multiple products and checkout the order', () => {
    ProductsPage.moveToItem(testData.product.productIndex);
    ProductsPage.addItemsToCart(testData.product.itemsToAdd);

    Header.clickCart();

    CartPage.checkoutOrder();

    DeliveryPage.fillFirstName(testData.delivery.firstName);
    DeliveryPage.fillLastName(testData.delivery.lastName);
    DeliveryPage.fillPhoneNumber(testData.delivery.phoneNumber);
    DeliveryPage.fillStreetAddress(testData.delivery.address);
    DeliveryPage.fillCity(testData.delivery.city);
    DeliveryPage.selectState(testData.delivery.state);
    DeliveryPage.fillZipCode(testData.delivery.zipCode);
    DeliveryPage.selectDeliveryDate(testData.delivery.dayIndex);
    DeliveryPage.fillEmail(testData.delivery.email);
    DeliveryPage.fillPassword(testData.delivery.password);
    DeliveryPage.submitDelivery();

    let isEnabled = BillingPage.verifySubmitButtonEnabled();
    expect(isEnabled).toBe(false);

    BillingPage.fillPayment(
      testData.billing.cardNumber,
      testData.billing.expDate,
      testData.billing.cvc
    );
    isEnabled = BillingPage.verifySubmitButtonEnabled();

    expect(isEnabled).toBe(false);
  });
});
