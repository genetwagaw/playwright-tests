import { test, chromium } from '@playwright/test';

test('Employer sends message to Job Seeker', async () => {
  const browser = await chromium.launch();
  
  // Context 1: Employer
  const employerContext = await browser.newContext();
  const employerPage = await employerContext.newPage();
  await employerPage.goto('https://yourwebsite.com/login');
  await employerPage.fill('#email', 'employer@example.com');
  await employerPage.fill('#password', 'employer123');
  await employerPage.click('button[type="submit"]');

  // Send message
  await employerPage.click('text=Messages');
  await employerPage.click('text=New Message');
  await employerPage.fill('#recipient', 'jobseeker@example.com');
  await employerPage.fill('#message', 'Hello, I have reviewed your profile.');
  await employerPage.click('text=Send');

  // Context 2: Job Seeker
  const jobSeekerContext = await browser.newContext();
  const jobSeekerPage = await jobSeekerContext.newPage();
  await jobSeekerPage.goto('https://yourwebsite.com/login');
  await jobSeekerPage.fill('#email', 'jobseeker@example.com');
  await jobSeekerPage.fill('#password', 'jobseeker123');
  await jobSeekerPage.click('button[type="submit"]');

  // Check message
  await jobSeekerPage.click('text=Messages');
  await jobSeekerPage.waitForSelector('text=Hello, I have reviewed your profile.');

  await browser.close();
});


