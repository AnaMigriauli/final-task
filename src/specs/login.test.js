const loginPage = require("../pageobjects/login.page");
const {
  validCredentials,
  invalidCredentials,
} = require("../utils/credentials");

describe("Login Form Tests", () => {
  beforeEach(async () => {
    await loginPage.open();
  });

  it("UC-1 Test Login form with empty credentials", async () => {
    await loginPage.fillUserName(invalidCredentials.username);
    await loginPage.fillPassword(invalidCredentials.password);

    await loginPage.clearUserName();
    await loginPage.clearPassword();
    await loginPage.submitLogin();

    await expect(loginPage.errorMessage).toHaveTextContaining(
      "Epic sadface: Username is required"
    );
  });

  it("UC-2 Test Login form with credentials by passing Username", async () => {
    await loginPage.fillUserName(invalidCredentials.username);
    await loginPage.fillPassword(invalidCredentials.password);

    await loginPage.clearPassword();
    await loginPage.submitLogin();

    await expect(loginPage.errorMessage).toHaveTextContaining(
      "Epic sadface: Password is required"
    );
  });

  it("UC-3 Test Login form with credentials by passing Username & Password", async () => {
    await loginPage.fillUserName(validCredentials.username);
    await loginPage.fillPassword(validCredentials.password);

    await loginPage.submitLogin();

    await browser.url("/inventory.html");
    const titleElement = await loginPage.title;
    await titleElement.waitForDisplayed();

    const titleText = await titleElement.getText();
    await expect(titleText).toBe("Swag Labs");
  });
});
