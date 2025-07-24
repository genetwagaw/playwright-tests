
//Add Fiscal Year

import { test, expect } from '@playwright/test';

test('your test name here', async ({ page }) => {
  await page.goto('https://mukera.hstpayroll.et/login');

  // Fill email using ID
  await page.locator('#email').fill('genet@hst-et.com'); // Replace with your actual email
  

  // Fill password using ID
  await page.locator('#password').fill('Password.01'); // Replace with your actual password
  //await page.locator('#password').fill('Password.02'); // Replace with your actual password
  // Click the sign-in button 
  await page.pause()
  const button = page.locator('role=button[name="Sign in"]');
  await button.click()
  //await page.getByRole('button', { name: 'Sign in' }).click();
  // Navigate to Company Management
  await page.getByRole('link', { name: ' Company Management' }).click();

  // Navigate to Tax Setting
  await page.getByRole('link', { name: 'Tax Setting' }).click();

  // Navigate to Add Fiscal Year
  await page.locator('#ordersTable > div > div.flex.flex-wrap.items-center.gap-3.mb-4 > div.shrink-0.w-full.sm\:w-auto > a').click();
  //await page.getByRole('link', { name: 'Add Fiscal Year' }).click();
await page.pause()
  // Fill Name using ID
  await page.getByPlaceholder('Enter Name of Fiscal year').click()
  await page.getByPlaceholder('Enter Name of Fiscal year').fill('2024')
  //await page.locator('#nameid').click();
  //await page.locator('#nameid').fill('2025/2027');

  // Fill Start Date using ID
  await page.locator('#start_dateid').fill('2025-12-10');

  // Fill End Date using ID
  await page.locator('#end_dateiid').fill('2027-12-10');
await page.pause()
  // Fill Description using ID
  await page.locator('#description').click();
  await page.locator('#description').fill('test');

  // Click Save button (using getByRole)
  await page.getByRole('button', { name: 'Save' }).click();
  await page.pause()

});
