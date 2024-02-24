import { getFilm } from '@/utils/api';

type FilmPageProps = {
  params: {
    id: string;
  };
};

export default async function FilmPage({ params }: FilmPageProps) {
  const film = await getFilm(Number(params.id));

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1>{film.title}</h1>
      <ul>
        <li>Opening crawl: {film.openingCrawl}</li>
        <ul>
          Characters:
          <br />
          {film.characters.map((character, index) => (
            <li key={index}>{character}</li>
          ))}
        </ul>
        <li>Director: {film.director}</li>
        <li>Producer: {film.producer}</li>
        <li>Release date: {film.releaseDate}</li>
      </ul>
    </main>
  );
}
