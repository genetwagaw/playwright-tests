// tests/multipleTests.spec.js
import { test, expect } from '@playwright/test';

test.describe('Multiple Tests Example', () => {
  test('Test 1: Verify Homepage Title', async ({ page }) => {
   await page.goto('http://hst.et/login');
   await page.locator('#email').fill('genet.wagaw@hst-et.com');
   //await page.getByRole('textbox', { name: 'E-mail' }).fill('genet.wagaw@hst-et.com');
   await page.locator('#password').fill('Password.01');
   //await page.getByRole('textbox', { name: 'Password' }).fill('Password.01');
   //await page.getByRole('button', { name: 'Sign in' }).click();
   await page.click('button:has-text("Sign in")');
    await expect(page).toHaveTitle(/Dashboards/);
  });

  test('Test 2: Check Navigation to About Page', async ({ page }) => {
  await page.goto('http://hst.et/login');
    await page.click('a:has-text("Domains Management")');
    await expect(page).toHaveURL(/Domain List/);
  });

  test('Test 3: Verify Content on Homepage', async ({ page }) => {
  await page.goto('http://hst.et/login');
    //const content = await page.textContent('h1');
    await expect(page).toHaveURL(/Client Request/);
  });
});


