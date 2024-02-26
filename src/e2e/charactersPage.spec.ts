import { expect, test } from '@playwright/test';

test('shows characters from visited filmes page', async ({ page }) => {
  await page.goto('/characters');

  await expect(page).toHaveTitle(/Characters - Swapi App/);
  await expect(page.getByRole('heading', { level: 1 })).toHaveText(
    'Characters'
  );

  // not other pages are visited yet
  await expect(page.getByText('No characters viewed yet')).toBeVisible();

  // visit a film page
  await page.goto('/film/1');
  await page.goto('/characters');

  await expect(page.getByRole('link', { name: 'C-3PO' })).toHaveAttribute(
    'href',
    '/person/2',
    { timeout: 20000 }
  );
});
