import { z } from 'zod';
import { FilmSchema } from './utils/api';

export type Film = z.output<typeof FilmSchema>;
export type RawFilm = z.input<typeof FilmSchema>;
