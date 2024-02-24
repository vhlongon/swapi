import { z } from 'zod';
import { config } from '@/app/config';

const fetchWrapper = async (
  url: string,
  options?: RequestInit
): Promise<Response> => {
  const response = await fetch(url, options);

  if (!response.ok) {
    throw new Error(`Request failed with status ${response.status}`);
  }

  const data = await response.json();

  return data;
};

export const FilmSchema = z
  .object({
    title: z.string(),
    episode_id: z.number(),
    opening_crawl: z.string(),
    director: z.string(),
    producer: z.string(),
    release_date: z.string(),
    species: z.array(z.string()),
    starships: z.array(z.string()),
    vehicles: z.array(z.string()),
    characters: z.array(z.string()),
    planets: z.array(z.string()),
    url: z.string(),
    created: z.string().datetime(),
    edited: z.string().datetime(),
  })
  .transform(({ episode_id, opening_crawl, release_date, ...rest }) => ({
    ...rest,
    episodeId: episode_id,
    releaseDate: release_date,
    openingCrawl: opening_crawl,
  }));

const FilmsSchema = z.object({
  count: z.number(),
  results: z.array(FilmSchema),
});

export const getFilms = async () => {
  const data = await fetchWrapper(`${config.apiUrl}/films/`);

  return FilmsSchema.parse(data).results;
};
