
class LoginPage {

constructor(page)
{
    this.page = page;
    this.userEmail = page.locator('(//*[@id="email"])[2]');
    this.userPassword = page.locator('(//*[@id="pass"])[2]');
    this.signInButton = page.locator('(//*[@id="send2"])[2]');
    this.createAccountPageText = page.locator("//*[contains(text(),'Create an Account')]");
    this.myAccountText = page.locator("(//*[contains(text(),'My account')])[4]");
    this.invalidLogintext = page.locator("//*[contains(text(),'Invalid login or password.')]");

}

async validLogin(username,password)
{
await this.userEmail.type(username);
await this.userPassword.type(password);

 await Promise.all(
    [

         this.page.waitForNavigation(),
         this.signInButton.click(),
    ]
); 
}

async inValidLogin(username,wrongPassword)
{
await this.userEmail.type(username);
await this.userPassword.type(wrongPassword);

 await Promise.all(
    [

         this.page.waitForNavigation(),
         this.signInButton.click(),
    ]
); 
}

async verifyInvalidLoginText()
{
    await expect.soft(page.invalidLogintext).toHaveText("Invalid login or password.");
    
}

}
module.exports = {LoginPage};