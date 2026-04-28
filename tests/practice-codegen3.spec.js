import {test, expect} from '@playwright/test';

test('Practice Selectors', async ({page}) => {
  await page.goto('https://www.saucedemo.com');
  await page.pause();

  // Using any object property
  await page.click('id=user-name');
  await page.locator('id=user-name').fill('chamod');
  await page.locator('[id="user-name"]').fill('standard_user');

  // using Xpath
  await page.locator('xpath=//input[@id="password"]').click();
  await page.locator('//input[@id="password"]').fill('secret_sauce');

  // using CSS Selector
  // #login-button
  await page.locator('#login-button').click();

  //using text 
  await page.locator('text=Login').click();
  await page.locator(':has-text("Login")').click(); // everything that has text login

  


})