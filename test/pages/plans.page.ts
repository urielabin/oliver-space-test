import Page from './page';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class PlansPage extends Page {
  /**
   * Element Selectors
   * define selectors using getter methods
   */
  get selectPlanButton() {
    return $$('button[data-qa=select-plan]');
  }

  /**
   * Actions
   * a method to encapsule automation code to interact with the page
   */
  selectPlan(planIndex: number) {
    this.selectPlanButton[planIndex].waitForDisplayed();
    this.selectPlanButton[planIndex].waitForClickable();
    this.selectPlanButton[planIndex].click();
  }
}

export default new PlansPage();
