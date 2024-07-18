const BasePage = require("./base.page");

class LoginPage extends BasePage {
  constructor() {
    super();
  }
  async open() {
    await browser.url("/");
  }
  get username() {
    return $("#user-name");
  }
  get password() {
    return $("#password");
  }
  get submitBtn() {
    return $("#login-button");
  }
  get errorMessage() {
    return $('h3[data-test="error"]');
  }
  get title() {
    return $("div.app_logo");
  }

  async fillUserName(username) {
    await this.setValue(this.username, username);
  }
  async fillPassword(password) {
    await this.setValue(this.password, password);
  }
  async clearUserName() {
    await this.clearValue(this.username);
  }
  async clearPassword() {
    await this.clearValue(this.password);
  }
  async submitLogin() {
    await this.clickElement(this.submitBtn);
  }
}

module.exports = new LoginPage();
