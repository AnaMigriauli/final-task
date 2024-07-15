const loginPage = require("../pageobjects/login.page");

describe("Login Form Tests", () => {
  beforeEach(async () => {
    await loginPage.open();
    await browser.maximizeWindow();
  });

  it("UC-1 Test Login form with empty credentials", async () => {
    await loginPage.fillUserName("ana");
    await loginPage.fillPassword("Migriauli1994");
    await browser.pause(2000);
    console.log("Current username:", await loginPage.getUserNameValue());
    console.log("Current password:", await loginPage.getPasswordValue());
    await browser.pause(2000);

    await loginPage.clearUserName();
    await loginPage.clearPassword();

    await browser.pause(2000);

    console.log("Cleared username:", await loginPage.getUserNameValue());
    console.log("Cleared password:", await loginPage.getPasswordValue());

    await expect(loginPage.username).toHaveValue("");
    await expect(loginPage.password).toHaveValue("");
    await browser.pause(2000);
    await loginPage.submitLogin();
    await browser.pause(2000);

    await expect(loginPage.errorMessage).toBeDisplayed();
    await expect(loginPage.errorMessage).toHaveTextContaining(
      "Epic sadface: Username is required"
    );

    await browser.pause(10000);
  });
  it("UC-2 Test Login form with credentials by passing Username", async () => {
    await loginPage.fillUserName("ana");
    await loginPage.fillPassword("Migriauli1994");
    await loginPage.clearPassword();

    // await expect(loginPage.username).toHaveValue("ana");
    // await expect(loginPage.password).toHaveValue("");
    // await browser.pause(2000);
    await loginPage.clearPassword();
    await loginPage.submitLogin();

    await expect(loginPage.errorMessage).toBeDisplayed();
    await expect(loginPage.errorMessage).toHaveTextContaining(
      "Epic sadface: Password is required"
    );
  });

  it("Test Login form with credentials by passing Username & Password", async () => {
    await loginPage.fillUserName("standard_user");
    await loginPage.fillPassword("secret_sauce");
    // await browser.pause(2000);
    await loginPage.submitLogin();
    await browser.url("/inventory.html");

    const titleElement = await loginPage.title;
    await titleElement.waitForDisplayed();

    const titleText = await titleElement.getText();
    await expect(titleText).toBe("Swag Labs");
  });
});
