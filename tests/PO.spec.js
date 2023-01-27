const {test, expect} = require('@playwright/test');
const {LoginPage} = require('../pageobjects/LoginPage');
const delay = ms => new Promise(resolve => setTimeout(resolve, ms))
test('@ PO Controls', async ({page})=>{
    const loginpage=new LoginPage(page);
    loginpage.goTo();
    await delay(5000);
    loginpage.validLogin("anshika@gmail.com","Iamking@000");
    await delay(5000);
});