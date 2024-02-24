import { getFilms } from '@/utils/api';
import Link from 'next/link';

export default async function Home() {
  const films = await getFilms();
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1>Films:</h1>
      <ul>
        {films.map(film => (
          <Link key={film.episodeId} href={`/film/${film.episodeId}`}>
            <li>{film.title}</li>
          </Link>
        ))}
      </ul>
    </main>
  );
}
