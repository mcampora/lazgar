const { test, expect } = require('@playwright/test');

test('homepage loads and shows key content', async ({ page }) => {
  await page.goto('/');
  await expect(page).toHaveTitle(/lazgar/i);
  await expect(page.getByRole('img', { name: 'logo' })).toBeVisible();
  await expect(page.getByText(/contact us/i)).toBeVisible();
});
