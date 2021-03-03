import Page from './page';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LocationPage extends Page {
  /**
   * Element Selectors
   * define selectors using getter methods
   */
  get zipCodeInput() {
    return $('input[data-qa=location-zip]');
  }
  get submitLocationButton() {
    return $('button[data-qa=submit-location]');
  }

  /**
   * Actions
   * a method to encapsule automation code to interact with the page
   */
  fillZipCode(zipCode: string) {
    this.zipCodeInput.waitForDisplayed();
    this.zipCodeInput.setValue(zipCode);
  }

  submitLocationForm() {
    this.submitLocationButton.waitForDisplayed();
    this.submitLocationButton.waitForClickable();
    this.submitLocationButton.click();
    browser.pause(5000);
  }
}

export default new LocationPage();
