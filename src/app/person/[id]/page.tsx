import { List } from '@/components/List';
import { getPersonWithFilms } from '@/utils/api';
import { omit } from '@/utils/utils';

type PersonPageProps = {
  params: {
    id: string;
  };
};

export default async function PersonPage({ params }: PersonPageProps) {
  const personData = await getPersonWithFilms(Number(params.id));
  const { name, ...rest } = omit(personData, [
    'url',
    'vehicles',
    'starships',
    'species',
  ]);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1>{name}</h1>
      <List {...rest} />
    </main>
  );
}
