import { test, expect } from '@playwright/test';
// Utility function for login
test.describe('Multiple Tests Example', () => {
test('Test 1: Verify Homepage Title', async ({ page }) => {
  await page.goto('http://hst.et/login');
  await page.locator('#email').fill('genet.wagaw@hst-et.com');
  await page.locator('#password').fill('Password.01');
  await page.locator('button:has-text("Sign in")').click();
});
test('Test 2: Check Navigation to About Page', async ({ page }) => {
await page.goto('http://hst.et/login');   
await page.locator('a:has-text("Domains Management")').click();
});

//  test('Test 3: Verify Content on Homepage', async ({ page }) => {
//  await page.goto('http://hst.et/login');   
//   await page.locator('a:has-text("Client Request")').click();
//    await page.pause()
//  });
 });