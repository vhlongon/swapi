'use client';
import { ErrorCard } from '@/components/ErrorCard';
import { getCharactersForFilms } from '@/lib/api';
import { getViewedFilms } from '@/lib/session';
import { useQuery } from '@tanstack/react-query';
import Link from 'next/link';

export const CharactersList = () => {
  const viewedFilms = getViewedFilms();
  const { data, isLoading, error, refetch } = useQuery({
    queryFn: () => getCharactersForFilms(viewedFilms),
    queryKey: ['characters', viewedFilms],
  });

  if (isLoading) {
    return (
      <span
        aria-label="loading"
        className="loading loading-spinner loading-lg"
      ></span>
    );
  }

  if (error) {
    return <ErrorCard error={error} reset={refetch} />;
  }

  if (data) {
    return data.length ? (
      <ul className="flex flex-col gap-4">
        {data.map(character => (
          <li key={character.id}>
            <Link
              className="btn btn-outline w-80"
              href={`/person/${character.id}`}
            >
              {character.name}
            </Link>
          </li>
        ))}
      </ul>
    ) : (
      <p>No characters viewed yet</p>
    );
  }

  return <p>No data</p>;
};
