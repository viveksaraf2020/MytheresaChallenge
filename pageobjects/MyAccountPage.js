const { expect } = require("@playwright/test");


class MyAccountPage {

constructor(page)
{
    this.page = page;
    this.myAccountText = page.locator("(//*[contains(text(),'My account')])[4]");
    this.helloText = page.locator("//*[contains(text(),'Hello, Vivek QAchallenge!')]");
    this.emailID = page.locator("//*[contains(text(),'E-mail: vivekqachallenge@maildrop.cc')]");

}

async verifyMyAccountPageText()
{
   await expect(page.myAccountText).toContainText('My account');
    
}


}
module.exports = {MyAccountPage};