const {test, expect} = require('@playwright/test');
const delay = ms => new Promise(resolve => setTimeout(resolve, ms))
//test.use({ browserName: 'webkit'});

test('@Web UI Controls', async ({page})=>
{
   await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
   const userName = page.locator('#username');
   const signIn = page.locator("#signInBtn");
   const documentLink = page.locator("[href*='documents-request']");
   await delay(2000);
   const dropdown = page.locator("select.form-control");
   await dropdown.selectOption("consult");
   await delay(2000);
   await page.locator(".radiotextsty").last().click();
   await delay(2000);
   await page.locator("#okayBtn").click();
   await delay(2000);
   console.log(await page.locator(".radiotextsty").last().isChecked());
   await delay(2000);
   await expect(page.locator(".radiotextsty").last()).toBeChecked();
   await delay(2000);
   await page.locator("#terms").click();
   await delay(2000);
   await expect( page.locator("#terms")).toBeChecked();
   await delay(2000);
   await page.locator("#terms").uncheck();
   await delay(2000);
   expect( await page.locator("#terms").isChecked()).toBeFalsy();
   await delay(2000);
   await expect(documentLink).toHaveAttribute("class","blinkingText");
   await delay(2000);
});












