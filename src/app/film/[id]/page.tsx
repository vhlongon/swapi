import { List } from '@/components/List';
import { getFilmWithCharacters } from '@/lib/api';
import { omit } from '@/lib/utils';
import Link from 'next/link';

type FilmPageProps = {
  params: {
    id: string;
  };
};

const getData = async (id: number) => {
  const filmData = await getFilmWithCharacters(id);
  return omit(filmData, ['planets', 'species', 'starships', 'vehicles', 'url']);
};

export default async function FilmPage({ params }: FilmPageProps) {
  const { title, openingCrawl, characters, ...rest } = await getData(
    Number(params.id)
  );

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1>{title}</h1>
      <p>{openingCrawl}</p>
      <p>Characters:</p>
      <ul>
        {characters.map(character => (
          <li key={character.id}>
            <Link href={`/person/${character.id}`}>{character.name}</Link>
          </li>
        ))}
      </ul>
      <p>More info:</p>
      <List {...rest} />
    </main>
  );
}
