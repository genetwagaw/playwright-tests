
//Add tax region

import { test, expect } from '@playwright/test';
const { chromium } = require('playwright');

test('tax regions', async () => {
  const browser = await chromium.launch({
    headless: false,
  });
  const context = await browser.newContext();
  const page = await context.newPage();
  
  await page.goto('https://mukera.hstpayroll.et/login');
  
  // Login
  await page.locator('#email').click(); // Assuming the email textbox has an ID of 'email'
  await page.locator('#email').fill('genet@hst-et.com');
  //await page.locator('#email').fill('genetw@hst-et.com');
  await page.locator('#password').click(); // Assuming the password textbox has an ID of 'password'
  await page.locator('#password').fill('Password.01');
  //await page.locator('#password').fill('Passw7rd')
  // Click the sign-in button 
  await page.getByRole('button', { name: 'Sign in' }).click();
  // Navigate to Tax Regions
  // Navigate to Company Management
  await page.getByRole('link', { name: ' Company Management' }).click();
  //Navigate to Tax setting
  await page.getByRole('link', { name: 'Tax Setting' }).click();
  // Add Tax Region
  await page.getByRole('link', { name: 'Tax Regions' }).click();
  await page.getByRole('link', { name: 'Add Tax Region' }).click();
  /*await page.locator('#nameid').click(); // Click on the textbox with id="nameid"
await page.locator('#nameid').fill('Dessie');
  await page.getByRole('button', { name: 'Save' }).click();*/
  
  await page.locator('#nameid').click(); // Click on the textbox with id="nameid"
await page.locator('#nameid').fill('Dessie');
//await page.locator('#nameid').fill('Addis Abeba');
  await page.getByRole('button', { name: 'Save' }).click();
  await page.pause()
});