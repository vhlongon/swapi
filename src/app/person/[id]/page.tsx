import { PersonCard } from '@/components/PersonCard';
import { getPersonWithFilms } from '@/lib/api';
import { omit } from '@/lib/utils';

type PersonPageProps = {
  params: {
    id: string;
  };
};

export default async function PersonPage({ params }: PersonPageProps) {
  const personData = await getPersonWithFilms(Number(params.id));
  const person = omit(personData, [
    'url',
    'vehicles',
    'starships',
    'species',
    'created',
    'edited',
  ]);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4">
      <PersonCard {...person} />
    </main>
  );
}
