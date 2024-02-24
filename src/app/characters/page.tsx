import { getCharactersForFilms } from '@/utils/api';
import { getViewedFilms } from '@/utils/session';
import Link from 'next/link';

export default async function CharactersPage() {
  const viewedFilms = getViewedFilms();
  const characters = await getCharactersForFilms(viewedFilms);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1>Characters viewed in films:</h1>
      {characters.length > 0 ? (
        <ul>
          {characters.map(character => (
            <li key={character.id}>
              <Link href={`/person/${character.id}`}>{character.name}</Link>
            </li>
          ))}
        </ul>
      ) : (
        <p>No characters viewed yet</p>
      )}
    </main>
  );
}
