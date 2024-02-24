import { List } from '@/components/List';
import { getPersonWithFilms } from '@/lib/api';
import { omit } from '@/lib/utils';
import Link from 'next/link';

type PersonPageProps = {
  params: {
    id: string;
  };
};

export default async function PersonPage({ params }: PersonPageProps) {
  const personData = await getPersonWithFilms(Number(params.id));
  const { name, films, ...rest } = omit(personData, [
    'url',
    'vehicles',
    'starships',
    'species',
  ]);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1>{name}</h1>
      <p>Films:</p>
      <ul>
        {films.map(film => (
          <li key={film.id}>
            <Link href={`/film/${film.id}`}>{film.title}</Link>
          </li>
        ))}
      </ul>
      <p>More info:</p>
      <List {...rest} />
    </main>
  );
}
