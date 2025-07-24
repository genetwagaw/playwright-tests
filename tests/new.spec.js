import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://hst.et/');
  await page.locator('#navbar').getByRole('link', { name: 'Request' }).click();
  await page.getByRole('textbox', { name: 'First Name*' }).click();
  await page.getByRole('textbox', { name: 'First Name*' }).fill('yalew');
  await page.getByRole('textbox', { name: 'Middle Name*' }).click();
  await page.getByRole('textbox', { name: 'Middle Name*' }).fill('mekome');
  await page.getByRole('textbox', { name: 'Email: *' }).click();
  await page.getByRole('textbox', { name: 'Email: *' }).fill('genet@gamil.com');
  await page.getByRole('textbox', { name: 'Company Name(optional):' }).click();
  await page.getByRole('textbox', { name: 'Company Name(optional):' }).fill('hwp');
  await page.getByRole('textbox', { name: 'Enter TIN' }).click();
  await page.getByRole('textbox', { name: 'Enter TIN' }).fill('0937287372');
  await page.getByPlaceholder('Enter Your Total Employee').click();
  await page.getByPlaceholder('Enter Your Total Employee').fill('4');
  await page.getByRole('textbox', { name: 'Enter Phone no' }).click();
  await page.getByRole('textbox', { name: 'Enter Phone no' }).fill('0963536266');
  await page.locator('.css-ut0szk').click();
  await page.getByRole('option', { name: 'Ethiopia' }).click();
  await page.getByRole('textbox', { name: 'Enter city name' }).click();
  await page.getByRole('textbox', { name: 'Enter city name' }).fill('adiss abeba');
  await page.getByRole('textbox', { name: 'Enter Subcity name' }).click();
  await page.getByRole('textbox', { name: 'Enter Subcity name' }).fill('bole');
  await page.getByRole('button', { name: 'Submit Request' }).click();
});