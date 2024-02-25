import { config } from '@/app/config';
import { z } from 'zod';

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
  .transform(
    ({ episode_id, opening_crawl, release_date, characters, ...rest }) => ({
      ...rest,
      episodeId: episode_id,
      releaseDate: release_date,
      openingCrawl: opening_crawl,
      characters: characters.map(c => ({
        id: getIdFromUrl(c),
        name: c,
      })),
    })
  );

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
  .transform(
    ({ birth_year, eye_color, hair_color, skin_color, films, ...rest }) => ({
      ...rest,
      birthYear: birth_year,
      eyeColor: eye_color,
      hairColor: hair_color,
      skinColor: skin_color,
      films: films.map(f => ({
        id: getIdFromUrl(f),
        title: f,
      })),
    })
  );

export const PlanetSchema = z
  .object({
    name: z.string(),
    rotation_period: z.string(),
    orbital_period: z.string(),
    diameter: z.string(),
    climate: z.string(),
    gravity: z.string(),
    terrain: z.string(),
    surface_water: z.string(),
    population: z.string(),
    residents: z.array(z.string()),
    films: z.array(z.string()),
    created: z.string().datetime(),
    edited: z.string().datetime(),
    url: z.string(),
  })
  .transform(({ rotation_period, orbital_period, surface_water, ...rest }) => ({
    ...rest,
    rotationPeriod: rotation_period,
    orbitalPeriod: orbital_period,
    surfaceWater: surface_water,
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

const getIdFromUrl = (url: string) => {
  const urlParts = url.split('/').filter(Boolean);

  return Number(urlParts[urlParts.length - 1]);
};

const getPlanet = async (id: number) => {
  const data = await fetchWrapper(`${config.apiUrl}/planets/${id}/`);

  return PlanetSchema.parse(data);
};

export const getPerson = async (id: number) => {
  const data = await fetchWrapper(`${config.apiUrl}/people/${id}/`);

  return PersonSchema.parse(data);
};

const getFilmsForCharacter = async (ids: number[]) => {
  const filmRequests = ids.map(getFilmWithCharacters);

  return Promise.all(filmRequests);
};
export const getPersonWithFilms = async (id: number) => {
  const personData = await getPerson(id);
  const filmsData = await getFilmsForCharacter(
    personData.films.map(({ id }) => id)
  );
  const homeworld = await getPlanet(getIdFromUrl(personData.homeworld));

  return {
    ...personData,
    homeworld: homeworld.name,
    films: filmsData.map(film => ({
      title: film.title,
      id: getIdFromUrl(film.url),
    })),
  };
};

export const getCharactersForFilms = async (ids: number[]) => {
  const filmsData = await Promise.all(ids.map(getFilmWithCharacters));
  const allCharacters = filmsData.flatMap(film => film.characters);

  const uniqueCharacterIds = new Set<number>();
  const result = allCharacters.filter(character => {
    if (uniqueCharacterIds.has(character.id)) {
      return false;
    }
    uniqueCharacterIds.add(character.id);
    return true;
  });

  return result;
};

const getCharactersForFilm = async (ids: number[]) => {
  const characterRequests = ids.map(getPerson);

  return Promise.all(characterRequests);
};

export const getFilm = async (id: number) => {
  const response = await fetchWrapper(`${config.apiUrl}/films/${id}/`);

  return FilmSchema.parse(response);
};

export const getFilmWithCharacters = async (id: number) => {
  const response = await fetchWrapper(`${config.apiUrl}/films/${id}/`);
  const filmData = FilmSchema.parse(response);
  const characters = await getCharactersForFilm(
    filmData.characters.map(({ id }) => id)
  );

  return {
    ...filmData,
    characters: characters.map(character => ({
      name: character.name,
      id: getIdFromUrl(character.url),
    })),
  };
};
