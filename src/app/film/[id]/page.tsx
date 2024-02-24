import { List } from '@/components/List';
import { getFilm } from '@/utils/api';
import { omit } from '@/utils/utils';

type FilmPageProps = {
  params: {
    id: string;
  };
};

export default async function FilmPage({ params }: FilmPageProps) {
  const filmData = await getFilm(Number(params.id));
  const { title, openingCrawl, ...rest } = omit(filmData, [
    'planets',
    'species',
    'starships',
    'vehicles',
    'url',
  ]);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1>{title}</h1>
      <p>{openingCrawl}</p>
      <List {...rest} />
    </main>
  );
}
