import { getFilms } from '@/lib/api';
import Link from 'next/link';

export default async function Home() {
  const films = await getFilms();

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4 gap-4">
      <h1 className="text-4xl font-bold text-center text-accent">Films</h1>
      <ul className="flex flex-col gap-4 justify-center items-center">
        {films.map(film => (
          <li key={film.episodeId}>
            <Link
              className="btn btn-outline w-80"
              href={`/film/${film.episodeId}`}
            >
              {film.title}
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
