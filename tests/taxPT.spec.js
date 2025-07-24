
//Add payroll type

import { test, expect } from '@playwright/test';
const { chromium } = require('playwright');

test('add payroll type', async () => {
  const browser = await chromium.launch({
    headless: false
  });
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto('https://mukera.hstpayroll.et/login');
  // Fill email using ID
  await page.locator('#email').fill('genet@hst-et.com'); // Replace with your actual email

  // Fill password using ID
  await page.locator('#password').fill('Password.01'); // Replace with your actual password

  // Click the sign-in button 
  await page.getByRole('button', { name: 'Sign in' }).click();
  // Navigate to Company Management
  await page.getByRole('link', { name: ' Company Management' }).click();
  //Navigate to Tax setting
  await page.getByRole('link', { name: 'Tax Setting' }).click();


  await page.getByRole('link', { name: 'Payroll Type' }).click();

  await page.getByRole('link', { name: 'Add Payroll Type' }).click();

  await page.click('text="Add Payroll Type"');
  await page.locator('#nameid').fill('Test3');

  await page.getByRole('button', { name: 'Save' }).click();
await page.pause();

});

