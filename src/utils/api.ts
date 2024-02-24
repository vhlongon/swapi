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

export const FilmsSchema = z.object({
  count: z.number(),
  results: z.array(FilmSchema),
  previous: z.string().nullable(),
  next: z.string().nullable(),
});

export const PersonSchema = z
  .object({
    birth_year: z.string(),
    eye_color: z.string(),
    films: z.array(z.string()),
    gender: z.string(),
    hair_color: z.string(),
    height: z.string(),
    homeworld: z.string(),
    mass: z.string(),
    name: z.string(),
    skin_color: z.string(),
    created: z.string().datetime(),
    edited: z.string().datetime(),
    species: z.array(z.string()),
    starships: z.array(z.string()),
    vehicles: z.array(z.string()),
    url: z.string(),
  })
  .transform(({ birth_year, eye_color, hair_color, skin_color, ...rest }) => ({
    ...rest,
    birthYear: birth_year,
    eyeColor: eye_color,
    hairColor: hair_color,
    skinColor: skin_color,
  }));

export const PeopleSchema = z.object({
  count: z.number(),
  results: z.array(PersonSchema),
  previous: z.string().nullable(),
  next: z.string().nullable(),
});

export const getFilms = async () => {
  const data = await fetchWrapper(`${config.apiUrl}/films/`);

  return FilmsSchema.parse(data).results;
};

export const getPeople = async () => {
  const data = await fetchWrapper(`${config.apiUrl}/people/`);

  return PeopleSchema.parse(data);
};

export const getPersonId = (url: string) => {
  const urlParts = url.split('/').filter(Boolean);

  return Number(urlParts[urlParts.length - 1]);
};

export const getPerson = async (id: number) => {
  const data = await fetchWrapper(`${config.apiUrl}/people/${id}/`);

  return PersonSchema.parse(data);
};

export const getCharactersForFilm = async (resourceUrls: string[]) => {
  const characterRequests = resourceUrls.map(resourceUrl =>
    getPerson(getPersonId(resourceUrl))
  );

  return Promise.all(characterRequests);
};

export const getFilm = async (id: number) => {
  const response = await fetchWrapper(`${config.apiUrl}/films/${id}/`);
  const filmData = FilmSchema.parse(response);
  const characters = await getCharactersForFilm(filmData.characters);

  return {
    ...filmData,
    characters: characters.map(character => character.name),
  };
};
