import { expect, test } from '@playwright/test';

test('shows a specific film page', async ({ page }) => {
  await page.goto('/film/1');

  await expect(page).toHaveTitle(/A New Hope/);
  await expect(page.getByRole('heading', { level: 1 })).toHaveText(
    'A New Hope'
  );
  const filmCard = page.getByLabel('film-card');
  const charactersButton = filmCard.getByText('Characters');

  await charactersButton.click();

  await expect(
    page.getByRole('link', { name: 'Luke Skywalker' })
  ).toHaveAttribute('href', '/person/1');

  await expect(page.getByText('Director')).toBeVisible();
  await expect(page.getByText('George Lucas')).toBeVisible();

  await expect(page.getByText('Producer')).toBeVisible();
  await expect(page.getByText('Gary Kurtz, Rick McCallum')).toBeVisible();

  await expect(page.getByText('EpisodeId')).toBeVisible();
  await expect(page.locator('div').filter({ hasText: /^4$/ })).toBeVisible();

  await expect(page.getByText('ReleaseDate')).toBeVisible();
  await expect(page.getByText('1977-05-25')).toBeVisible();
});
