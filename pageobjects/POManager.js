const {LoginPage} = require('./LoginPage');
const {LandingPage} = require('./LandingPage');
const {MyAccountPage} = require('./MyAccountPage');

class POManager
{
constructor(page)
{
    this.page = page;
    this.loginPage = new LoginPage(this.page);
    this.landingPage = new LandingPage(this.page);
    this.myAccountPage = new MyAccountPage(this.page);


}

getLoginPage()
{
    return this.loginPage;
}

getLandingPagePage()
{
    return this.landingPage;
}

getMyAccountPage()
{
    return this.myAccountPage;
}

}
module.exports = {POManager};