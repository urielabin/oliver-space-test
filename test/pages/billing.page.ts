import Page from './page';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class BillingPage extends Page {
  /**
   * define selectors using getter methods
   */
  get cardNumberInput() {
    return $$('input.InputElement')[0];
  }
  get expDateInput() {
    return $('input[name=exp-date]');
  }
  get cvcInput() {
    return $('input[name=cvc]');
  }
  get submitButton() {
    return $('button[data-qa=button-payment-submit]');
  }
  get paymentFrame() {
    return $('iframe[title="Secure card payment input frame"]');
  }

  /**
   * Actions
   * a method to encapsule automation code to interact with the page
   */
  fillPayment(cardNumberInput: string, expDate: string, cvc: string) {
    browser.switchToFrame(this.paymentFrame);
    this.fillCardNumber(cardNumberInput);
    this.fillExpDate(expDate);
    this.fillCvc(cvc);
    browser.switchToParentFrame();
  }
  fillCardNumber(cardNumber: string) {
    this.cardNumberInput.waitForDisplayed();
    this.cardNumberInput.setValue(cardNumber);
  }
  fillExpDate(expDate: string) {
    this.expDateInput.setValue(expDate);
  }
  fillCvc(cvc: string) {
    this.cvcInput.setValue(cvc);
  }
  verifySubmitButtonEnabled() {
    const isEnabled = this.submitButton.isEnabled();
    return isEnabled;
  }
}

export default new BillingPage();
