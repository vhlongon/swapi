import { FilmCard } from '@/components/FilmCard';
import { getFilmWithCharacters } from '@/lib/api';
import { omit } from '@/lib/utils';

type FilmPageProps = {
  params: {
    id: string;
  };
};

const getData = async (id: number) => {
  const filmData = await getFilmWithCharacters(id);
  return omit(filmData, [
    'planets',
    'species',
    'starships',
    'vehicles',
    'url',
    'edited',
    'created',
  ]);
};

export default async function FilmPage({ params }: FilmPageProps) {
  const film = await getData(Number(params.id));

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4">
      <FilmCard {...film} />
    </main>
  );
}
