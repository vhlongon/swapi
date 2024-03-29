import { config } from '@/app/config';
import { HttpResponse, delay, http } from 'msw';
import {
  mockFilm,
  mockFilmesResponse,
  mockPeopleResponse,
  mockPerson,
  mockPlanet,
} from './mockData';

type HandlerOptions = Partial<{
  error: string;
  delay: number;
}>;

export const getFilmsHandler = (opts?: HandlerOptions) => {
  const { error, delay: delayTime = 0 } = opts || {};

  return http.get(`${config.apiUrl}/films/`, async () => {
    if (delayTime) {
      await delay(delayTime);
    }

    if (error) {
      return HttpResponse.error();
    }

    return HttpResponse.json(mockFilmesResponse, { status: 200 });
  });
};

export const getFilmHandler = (opts?: HandlerOptions) => {
  const { error, delay: delayTime = 0 } = opts || {};

  return http.get(`${config.apiUrl}/films/:id`, async () => {
    if (delayTime) {
      await delay(delayTime);
    }

    if (error) {
      return HttpResponse.error();
    }

    return HttpResponse.json(mockFilm, { status: 200 });
  });
};

export const getPersonHandler = (opts?: HandlerOptions) => {
  const { error, delay: delayTime = 0 } = opts || {};

  return http.get(`${config.apiUrl}/people/:id`, async () => {
    if (delayTime) {
      await delay(delayTime);
    }

    if (error) {
      return HttpResponse.error();
    }

    return HttpResponse.json(mockPerson, { status: 200 });
  });
};

export const getPeopleHandler = (opts?: HandlerOptions) => {
  const { error, delay: delayTime = 0 } = opts || {};

  return http.get(`${config.apiUrl}/people/`, async () => {
    if (delayTime) {
      await delay(delayTime);
    }

    if (error) {
      return HttpResponse.error();
    }

    return HttpResponse.json(mockPeopleResponse, { status: 200 });
  });
};

export const getPlanetHandler = (opts?: HandlerOptions) => {
  const { error, delay: delayTime = 0 } = opts || {};

  return http.get(`${config.apiUrl}/planets/:id`, async () => {
    if (delayTime) {
      await delay(delayTime);
    }

    if (error) {
      return HttpResponse.error();
    }

    return HttpResponse.json(mockPlanet, { status: 200 });
  });
};

export const handlers = [
  getFilmsHandler(),
  getPeopleHandler(),
  getFilmHandler(),
  getPersonHandler(),
  getPlanetHandler(),
];
