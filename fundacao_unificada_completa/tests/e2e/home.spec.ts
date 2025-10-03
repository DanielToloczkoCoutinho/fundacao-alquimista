import { test, expect } from '@playwright/test';

test('home page has correct title', async ({ page }) => {
  await page.goto('http://localhost:3000');
  await expect(page).toHaveTitle(/Alchemist's Codex/);
});

test('navigate to module', async ({ page }) => {
  await page.goto('http://localhost:3000');
  await page.click('text=Nexus Central (M9)');
  await expect(page).toHaveURL(/#nexus/); // This would depend on how navigation is implemented
});
