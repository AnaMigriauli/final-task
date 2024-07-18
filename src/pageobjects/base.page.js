class BasePage {
  async open(path) {
    await browser.url(path);
  }
  async waitForElementDisplayed(element, timeout = 12000) {
    await element.waitForDisplayed({ timeout });
  }

  async setValue(element, value) {
    await this.waitForElementDisplayed(element);
    await element.setValue(value);
  }

  async clearValue(element) {
    await this.waitForElementDisplayed(element);
    await element.clearValue();
  }

  async clickElement(element) {
    await this.waitForElementDisplayed(element);
    await element.click();
  }
}

module.exports = BasePage;
