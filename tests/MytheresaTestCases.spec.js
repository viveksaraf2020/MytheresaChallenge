 const {test, expect} = require('@playwright/test');
 const {POManager} = require('../pageobjects/POManager');

 //test.describe.configure({mode:'parallel'});

 test('@Login Mytheresa Testing...', async ({page})=>
 {
    const poManager = new POManager(page);
    const username = "vivekqachallenge@maildrop.cc";
    const password = "mytheresaqa1";

     const loginPage = poManager.getLoginPage();
     const landingPage = poManager.getLandingPagePage();
     const myAccountPage = poManager.getMyAccountPage();
    

     await landingPage.goTo();
     await expect(page).toHaveURL('https://www.mytheresa.com/int_en/men.html');
     await expect(page).toHaveTitle("Men's Luxury Fashion & Designer Shopping | Mytheresa");
     await landingPage.clickOnAccountLink();
     await expect(page).toHaveTitle("Create New Customer Account");
     await loginPage.validLogin(username,password);
     //await page.waitForLoadState('networkidle');
     await expect(page).toHaveURL('https://www.mytheresa.com/int_en/customer/account/index/');
     await landingPage.clickOnAccountLink();
     await myAccountPage.verifyMyAccountPageText();
     
 },
 
 test('@Login Mytheresa Testing for In valid password...', async ({page})=>
 {
    const poManager = new POManager(page);
    const username = "vivekqachallenge@maildrop.cc";
    const wrongPassword = "mytheresaqa2";

     const loginPage = poManager.getLoginPage();
     const landingPage = poManager.getLandingPagePage();
     const myAccountPage = poManager.getMyAccountPage();
    

     await landingPage.goTo();
     await expect(page).toHaveURL('https://www.mytheresa.com/int_en/men.html');
     await expect(page).toHaveTitle("Men's Luxury Fashion & Designer Shopping | Mytheresa");
     await landingPage.clickOnAccountLink();
     await expect(page).toHaveTitle("Create New Customer Account");
     await loginPage.inValidLogin(username,wrongPassword);
     await loginPage.verifyInvalidLoginText();
     await expect(loginPage.invalidLogintext).toHaveText('Invalid login or password.')

     
 }
 )
 );
 

 



 

