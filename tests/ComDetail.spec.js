     import { test, expect } from '@playwright/test';
     
     test('test', async ({ page }) => {
        await page.goto('http://hst.et/login', {timeout:30000});
        await page.locator('#email').fill('genet.wagaw@hst-et.com');
        await page.getByRole('textbox', { name: 'E-mail' }).fill('genet.wagaw@hst-et.com');
        await page.locator('#password').fill('Password.01');
        await page.getByRole('textbox', { name: 'Password' }).fill('Password.01');
        await page.getByRole('button', { name: 'Sign in' }).click();
        await page.click('button:has-text("Sign in")');
     await page.getByRole('link', { name: 'Company Management' }).click();
     await page.click('a:has-text("Company Management")');
     await page.pause();
await page.locator("tr:has-text('CoMmmm@gmail.com') #productAction1").click();
await page.locator('a:has-text("Deactivate")').click();
await page.locator("tr:has-text('CoMmmm@gmail.com') #productAction1").click();
await page.locator('a:has-text("Activate")').click();
await page.locator("tr:has-text('CoMmmm@gmail.com') #productAction1").click();
await page.locator('button:has-text("Details")').click();
await page.click('a:has-text("Pay Now")');
await page.locator('.px-3 > .inline-flex').first().click();
await page.click('button:has-text("Copy Code")');
await page.locator("tr:has-text('CoMmmm@gmail.com') #productAction1").click();
await page.locator('a:has-text("Delete")').click();
await page.click('button:has-text("Cancel")');
await page.click('button:has-text("Yes, Delete It!")');
await page.pause();
});