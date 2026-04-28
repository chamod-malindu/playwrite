import { test, expect, chromium } from '@playwright/test';

let context;
let page;
test.beforeAll(async ({ browser }) => {

  context = await browser.newContext();
  await context.tracing.start({ screenshots: true, snapshots: true });

  page = await context.newPage();
});

test.afterAll(async () => {
  await context.tracing.stop({ path: 'trace2.zip' });
});

test("Record Demo page", async () => {
  const browser = await chromium.launch({
    headless: false
  });
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto('https://www.saucedemo.com/');
  await page.locator('[data-test="username"]').click();
  await page.locator('[data-test="username"]').fill('standard_user');
  await page.locator('[data-test="password"]').click();
  await page.locator('[data-test="password"]').fill('secret_sauce');
  await page.locator('[data-test="login-butto"]').click();
  await page.locator('div').filter({ hasText: 'Swag Labs' }).nth(5).click();
  await page.close();

  // ---------------------
  await context.close();
  await browser.close();
});