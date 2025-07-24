
//Add Payroll period

import { test, expect } from '@playwright/test';

test('your test name here', async ({ page }) => {
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
  //click the payroll period
  await page.getByRole('link', { name: 'Payroll Period' }).click();
  //click Add payroll period button
  await page.getByRole('link', { name: 'Add Payroll Period' }).click();
  //Click Payroll period name
  await page.locator('#nameid', { name: 'Enter Payroll Period Name' }).click();
  //Enter Payroll period name
  await page.locator('#nameid', { name: 'Enter Payroll Period Name' }).fill('Hdar');
  //await page.locator('#nameid', { name: 'Enter Payroll Period Name' }).fill('January');
  await page.locator('.css-2couma').first().click();
  //select payroll name
  await page.getByRole('option', { name: '983/2016FederalTax' }).click();
  //Enter start date
  await page.locator('#start_dateid').fill('2027-12-01');
  //Enter end date
  await page.locator('#end_dateiid').fill('2027-12-30');
  //Click payroll type
  await page.locator('#payroll_type_id > .css-1k9wa0g-control > .css-hlgwow > .css-2couma').click();
  //Select payroll type
  await page.getByRole('option', { name: 'Weekly', exact: true }).click();
  //Click Fiscal year
  await page.locator('#fiscal_year_id > .css-1k9wa0g-control > .css-hlgwow > .css-2couma').click();
  //Enter Fiscal year
  await page.getByRole('option', { name: '2024/2025' }).click();
  //Click employee pension
  await page.locator('#employee_pension_id > .css-1k9wa0g-control > .css-hlgwow > .css-2couma').click();
  //Select employee pension
  await page.getByRole('option', { name: 'Pension 7 %' }).click();
  //Click Company pension
  await page.locator('#company_pension_id > .css-1k9wa0g-control > .css-hlgwow > .css-2couma').click();
  //Select Company pension
  await page.getByRole('option', { name: 'Company Pension 11 %' }).click();
  //Click the save button
  await page.getByRole('button', { name: 'Save' }).click();
  await page.pause()
});
