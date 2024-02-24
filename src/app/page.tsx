import { getFilms } from '@/utils/api';

export default async function Home() {
  const films = await getFilms();
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1>Films:</h1>
      <ul>
        {films.map(film => (
          <li key={film.episodeId}>{film.title}</li>
        ))}
      </ul>
    </main>
  );
}
