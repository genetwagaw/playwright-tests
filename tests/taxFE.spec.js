//Add Fiscal year

import { test, expect } from '@playwright/test';

test('your test name here', async ({ page }) => {
  await page.goto('https://mukera.hstpayroll.et/login', {timeout:30000});

  // Fill email using ID
  await page.locator('#email').fill('genet@hst-et.com'); // Replace with your actual email
  

  // Fill password using ID
  await page.locator('#password').fill('Password.01'); // Replace with your actual password
  //await page.locator('#password').fill('Password.02'); // Replace with your actual password
  // Click the sign-in button 
  await page.getByRole('button', { name: 'Sign in' }).click();
  //await page.pause()
  await page.getByRole('link', {name:'Company Management'}).click();
  await page.getByRole('link', {name:'Tax Setting'}).click();
  await page.getByRole('link', { name: 'Payroll Period' }).click();
  await page.getByRole('link', { name: 'Fiscal Year', exact: true }).click();

  await page.pause();
});