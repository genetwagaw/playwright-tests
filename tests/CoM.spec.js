import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
   await page.goto('http://hst.et/login');
   await page.locator('#email').fill('genet.wagaw@hst-et.com', {timeout:30000});
   await page.locator('#password').fill('Password.01');
   await page.click('button:has-text("Sign in")');

   await page.click('a:has-text("Company Management")');
   await page.pause();
   await page.click('a:has-text("Add Company")');

  await page.locator('#name').fill('Top');
  await page.locator('#emailInput').fill('CoMmmm@gmail.com');
  await page.locator('#domain').fill('ythree');
  await page.locator('.css-2couma').click();
  await page.locator('role=option[name="Standard Plan(active)"]').click();
  await page.locator('#number_of_employees').fill('33');
  await page.locator('#tin_id').fill('0378874733');
  await page.locator('#address').fill('Adiss abeba');
  await page.locator('#userPassword').fill('P@ssw0rd.02');
  await page.locator('input[placeholder="Confirm Password"]').click()
  await page.locator('input[placeholder="Confirm Password"]').fill('P@ssw0rd.02');
  await page.click('button:has-text("Save")');
//await page.locator('button[type="reset"][data-modal-close="addCompanyModal"]').click();

  await page.pause();
    
});