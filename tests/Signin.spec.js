import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
   await page.goto('http://hst.et/login' , {timeout:30000});
   await page.locator('#email').fill('genet.wagaw@hst-et.com');
   //await page.getByRole('textbox', { name: 'E-mail' }).fill('genet.wagaw@hst-et.com');
   await page.locator('#password').fill('Password.01');
   await page.getByRole('textbox', { name: 'Password' }).fill('Password.01');
   //await page.getByRole('button', { name: 'Sign in' }).click();
   await page.click('button:has-text("Sign in")');
   await page.pause();
   await expect(page.getByRole('heading', { name: 'Dashboards' })).toBeVisible();
   
   });