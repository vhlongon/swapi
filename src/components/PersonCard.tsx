import { Person } from '@/types';
import Link from 'next/link';
import React from 'react';
import { MoreDetailsList } from './MoreDetailsList';

type PersonCardProps = Omit<
  Person,
  'url' | 'vehicles' | 'starships' | 'species' | 'created' | 'edited'
>;

export const PersonCard = ({ name, films, ...rest }: PersonCardProps) => {
  return (
    <div
      aria-label="person-card"
      className="card w-full max-w-96 bg-neutral text-neutral-content"
    >
      <div className="card-body items-center text-center">
        <h1 className="card-title">{name}</h1>
        <details className="collapse collapse-arrow border border-base-200 bg-base-100">
          <summary className="collapse-title font-medium">Films</summary>
          <div className="collapse-content">
            <ul className="flex flex-col gap-2">
              {films.map(film => (
                <li key={film.id}>
                  <Link
                    className="btn btn-xs btn-outline w-3/4"
                    href={`/film/${film.id}`}
                  >
                    {film.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </details>
        <div className="card-actions mt-2 justify-between w-full">
          <MoreDetailsList {...rest} />
        </div>
      </div>
    </div>
  );
};
