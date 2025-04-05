import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.demoblaze.com/index.html');
  await page.getByRole('link', { name: 'Samsung galaxy s6' }).click();
  await page.getByRole('link', { name: 'Add to cart' }).click();
  await page.getByRole('link', { name: 'Cart', exact: true }).click();
  const product = page.locator('td:has-text("Samsung galaxy s6")');
  await expect(product).toBeVisible();
  await page.getByRole('link', { name: 'Delete' }).click();
  await expect(product).toHaveCount(0);
});