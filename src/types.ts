import { z } from 'zod';
import {
  FilmSchema,
  FilmsSchema,
  PeopleSchema,
  PersonSchema,
} from './utils/api';

export type Film = z.output<typeof FilmSchema>;
export type FilmResponse = z.input<typeof FilmSchema>;
export type FilmsResponse = z.input<typeof FilmsSchema>;

export type Person = z.output<typeof PersonSchema>;
export type PersonResponse = z.input<typeof PersonSchema>;
export type PeopleResponse = z.input<typeof PeopleSchema>;
