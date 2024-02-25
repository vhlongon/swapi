import { expect, test } from '@playwright/test';

test('shows movies page title, navigation elements and the list of movies', async ({
  page,
}) => {
  await page.goto('/');

  await expect(page).toHaveTitle(/Swapi App/);
  await expect(page.getByRole('heading', { level: 1 })).toHaveText('Films');

  const nav = page.getByRole('navigation');

  await expect(nav.getByLabel('logo')).toHaveText('Swapi');

  const filmLink = nav.getByRole('link').filter({ hasText: 'Films' });
  await expect(filmLink).toHaveAttribute('href', '/');

  const charactersLink = nav
    .getByRole('link')
    .filter({ hasText: 'Characters' });
  await expect(charactersLink).toHaveAttribute('href', '/characters');

  const episodeIV = page.getByRole('link', { name: 'A New Hope' });
  const episodeV = page.getByRole('link', { name: 'The Empire Strikes Back' });
  const episodeVI = page.getByRole('link', { name: 'Return of the Jedi' });
  const episodeI = page.getByRole('link', {
    name: 'The Phantom Menace',
  });
  const episodeII = page.getByRole('link', {
    name: 'Attack of the Clones',
  });
  const episodeIII = page.getByRole('link', {
    name: 'Revenge of the Sith',
  });

  await expect(episodeIV).toHaveAttribute('href', '/film/4');
  await expect(episodeV).toHaveAttribute('href', '/film/5');
  await expect(episodeVI).toHaveAttribute('href', '/film/6');
  await expect(episodeI).toHaveAttribute('href', '/film/1');
  await expect(episodeII).toHaveAttribute('href', '/film/2');
  await expect(episodeIII).toHaveAttribute('href', '/film/3');
});
