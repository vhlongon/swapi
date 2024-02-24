import {
  FilmsResponse,
  FilmResponse,
  PersonResponse,
  PeopleResponse,
  PlanetResponse,
} from '@/types';

export const mockFilm: FilmResponse = {
  episode_id: 1,
  title: 'A New Hope',
  release_date: '1977-05-25',
  characters: ['https://swapi.dev/api/people/1/'],
  planets: [],
  starships: [],
  vehicles: [],
  species: [],
  url: '',
  created: '2014-12-10T14:23:31.880000Z',
  edited: '2014-12-20T19:49:45.256000Z',
  director: 'George Lucas',
  producer: 'George Lucas, Rick McCallum',
  opening_crawl: 'Episode IV opening crawl',
};

export const mockPlanet: PlanetResponse = {
  name: 'Tatooine',
  rotation_period: '23',
  orbital_period: '304',
  diameter: '10465',
  climate: 'arid',
  gravity: '1 standard',
  terrain: 'desert',
  surface_water: '1',
  population: '200000',
  residents: ['https://swapi.dev/api/people/1/'],
  films: ['https://swapi.dev/api/films/1/'],
  created: '2014-12-09T13:50:49.641000Z',
  edited: '2014-12-20T20:58:18.411000Z',
  url: 'https://swapi.dev/api/planets/1/',
};

export const mockPerson: PersonResponse = {
  name: 'Luke Skywalker',
  height: '172',
  mass: '77',
  hair_color: 'blond',
  skin_color: 'fair',
  eye_color: 'blue',
  birth_year: '19BBY',
  gender: 'male',
  homeworld: 'https://swapi.dev/api/planets/1/',
  films: ['https://swapi.dev/api/films/1/'],
  species: [],
  vehicles: ['https://swapi.dev/api/vehicles/14/'],
  starships: ['https://swapi.dev/api/starships/12/'],
  created: '2014-12-09T13:50:51.644000Z',
  edited: '2014-12-20T21:17:56.891000Z',
  url: 'https://swapi.dev/api/people/1/',
};

export const peopleResponse: PeopleResponse = {
  count: 1,
  next: null,
  previous: null,
  results: [mockPerson],
};

export const filmesResponse: FilmsResponse = {
  count: 1,
  next: null,
  previous: null,
  results: [mockFilm],
};
