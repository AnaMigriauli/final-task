class LoginPage {
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
    return $('.error-message-container h3[data-test="error"]');
  }
  get title() {
    return $("div.app_logo");
  }
  async fillUserName(username) {
    await this.username.setValue(username);
  }
  async fillPassword(password) {
    await this.password.setValue(password);
  }

  async clearUserName() {
    await this.username.click();
    await this.username.setValue("");
  }

  async clearPassword() {
    await this.password.click();
    await this.password.setValue("");
  }

  async submitLogin() {
    await this.submitBtn.click();
  }

  async getUserNameValue() {
    return await this.username.getValue();
  }

  async getPasswordValue() {
    return await this.password.getValue();
  }
}

module.exports = new LoginPage();
