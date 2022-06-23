class LandingPage {

constructor(page)
{
    this.page = page;
    this.mytheresaPageImage = page.locator('//*[@id="logo_wrapper"]/a/img[1]');
    this.myAccountLink = page.locator('a#myaccount');

}

async goTo()
{
    await this.page.goto("https://www.mytheresa.com/int_en/men.html");
}

async clickOnAccountLink ()
{
await this.myAccountLink.click();

}


}
module.exports = {LandingPage};