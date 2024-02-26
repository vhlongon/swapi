import { expect, test } from '@playwright/test';

test('shows a specific person/character page', async ({ page }) => {
  await page.goto('/person/1');

  await expect(page).toHaveTitle(/Luke Skywalker/);
  await expect(page.getByRole('heading', { level: 1 })).toHaveText(
    'Luke Skywalker'
  );
  const filmCard = page.getByLabel('person-card');
  const filmsButton = filmCard.getByText('Films');

  await filmsButton.click();

  await expect(page.getByRole('link', { name: 'A New Hope' })).toHaveAttribute(
    'href',
    '/film/1'
  );

  await expect(page.getByText('Gender')).toBeVisible();
  await expect(page.getByText('male')).toBeVisible();

  await expect(page.getByText('Height')).toBeVisible();
  await expect(page.getByText('172')).toBeVisible();

  await expect(page.getByText('Homeworld')).toBeVisible();
  await expect(page.getByText('Tatooine')).toBeVisible();

  await expect(page.getByText('Mass')).toBeVisible();
  await expect(page.getByText('77')).toBeVisible();

  await expect(page.getByText('BirthYear')).toBeVisible();
  await expect(page.getByText('19BBY')).toBeVisible();

  await expect(page.getByText('EyeColor')).toBeVisible();
  await expect(page.getByText('blue')).toBeVisible();

  await expect(page.getByText('HairColor')).toBeVisible();
  await expect(page.getByText('blond')).toBeVisible();

  await expect(page.getByText('SkinColor')).toBeVisible();
  await expect(page.getByText('fair')).toBeVisible();
});
