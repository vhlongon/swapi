'use client';
import { getCharactersForFilms } from '@/lib/api';
import { getViewedFilms } from '@/lib/session';
import { useQuery } from '@tanstack/react-query';
import Link from 'next/link';

export const CharactersList = () => {
  const viewedFilms = getViewedFilms();
  const { data, isLoading, error } = useQuery({
    queryFn: () => getCharactersForFilms(viewedFilms),
    queryKey: ['characters', viewedFilms],
  });

  if (isLoading) {
    return <div>loading</div>;
  }

  if (error) {
    return <div>Something went wrong</div>;
  }

  if (data) {
    const count = data?.length;
    return count ? (
      <>
        <p>Viewed: {count}</p>
        <ul>
          {data.map(character => (
            <li key={character.id}>
              <Link href={`/person/${character.id}`}>{character.name}</Link>
            </li>
          ))}
        </ul>
      </>
    ) : (
      <p>No characters viewed yet</p>
    );
  }

  return <p>No data</p>;
};
