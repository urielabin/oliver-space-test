import Page from './page';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class DeliveryPage extends Page {
  /**
   * Element Selectors
   * define selectors using getter methods
   */
  get firstNameInput() {
    return $('input[data-qa=input-checkout-fname]');
  }
  get lastNameInput() {
    return $('input[data-qa=input-checkout-lname]');
  }
  get phoneNumberInput() {
    return $('input[data-qa=input-checkout-phone]');
  }
  get streetAddressInput() {
    return $('input[data-qa=input-checkout-address]');
  }
  get cityInput() {
    return $('input[data-qa=input-checkout-city]');
  }
  get stateSelect() {
    return $('select[data-qa=input-checkout-state]');
  }
  get zipCodeInput() {
    return $('input[data-qa=input-checkout-zip]');
  }
  get deliveryDateInput() {
    return $('div[data-qa=input-checkout-datepicker]');
  }
  get emailAddressInput() {
    return $('input[data-qa=input-checkout-email-address]');
  }
  get passwordInput() {
    return $('input[data-qa=input-checkout-password]');
  }
  get daySelect() {
    return $$('span.cell.day.highlighted');
  }
  get continueButton() {
    return $('button[data-qa=button-checkout-submit]');
  }
  get requiredFieldError() {
    return $$('h5*=required');
  }
  /**
   * Actions
   * a method to encapsule automation code to interact with the page
   */

  fillFirstName(firstName: string) {
    this.firstNameInput.waitForDisplayed();
    this.firstNameInput.setValue(firstName);
  }
  fillLastName(lastName: string) {
    this.lastNameInput.waitForDisplayed();
    this.lastNameInput.setValue(lastName);
  }
  fillPhoneNumber(phone: string) {
    this.phoneNumberInput.waitForDisplayed();
    this.phoneNumberInput.setValue(phone);
  }
  fillStreetAddress(address: string) {
    this.streetAddressInput.waitForDisplayed();
    this.streetAddressInput.setValue(address);
  }
  fillCity(city: string) {
    this.cityInput.waitForDisplayed();
    this.cityInput.setValue(city);
  }
  fillZipCode(zipCode: string) {
    this.zipCodeInput.waitForDisplayed();
    this.zipCodeInput.setValue(zipCode);
  }
  fillEmail(email: string) {
    this.emailAddressInput.waitForDisplayed();
    this.emailAddressInput.setValue(email);
  }
  fillPassword(password: string) {
    this.passwordInput.waitForDisplayed();
    this.passwordInput.setValue(password);
  }
  selectState(state: string) {
    this.stateSelect.waitForDisplayed();
    this.stateSelect.waitForClickable();
    this.stateSelect.selectByVisibleText(state);
  }
  selectDeliveryDate(dayIndex: number) {
    this.deliveryDateInput.waitForDisplayed();
    this.deliveryDateInput.waitForClickable();
    this.deliveryDateInput.click();
    browser.pause(3000);
    this.daySelect[dayIndex].waitForDisplayed();
    this.daySelect[dayIndex].waitForClickable();
    this.daySelect[dayIndex].click();
  }
  submitDelivery() {
    this.continueButton.waitForDisplayed();
    this.continueButton.waitForClickable();
    this.continueButton.click();
  }
  verifyAllRequiredFieldsErrors() {
    const numberOfErrors = this.requiredFieldError.length;
    return numberOfErrors;
  }
}

export default new DeliveryPage();
