import { Film } from '@/types';
import Link from 'next/link';
import { MoreDetailsList } from './MoreDetailsList';

type FilmCardProps = Omit<
  Film,
  | 'planets'
  | 'species'
  | 'starships'
  | 'vehicles'
  | 'url'
  | 'created'
  | 'edited'
>;
export const FilmCard = ({
  title,
  characters,
  openingCrawl,
  ...rest
}: FilmCardProps) => {
  return (
    <div className="card w-full max-w-96 bg-neutral text-neutral-content">
      <div className="card-body items-center text-center">
        <h1 className="card-title">{title}</h1>
        <p className="prose prose-base text-md italic text-gray-500">
          {openingCrawl}
        </p>
        <details className="collapse collapse-arrow border border-base-300 bg-base-200">
          <summary className="collapse-title font-medium">Characters</summary>
          <div className="collapse-content">
            <ul className="flex flex-col gap-2">
              {characters.map(character => (
                <li key={character.id}>
                  <Link
                    className="btn btn-xs btn-outline w-3/4"
                    href={`/person/${character.id}`}
                  >
                    {character.name}
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
