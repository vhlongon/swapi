import { PersonCard } from '@/components/PersonCard';
import { getPerson, getPersonWithFilms } from '@/lib/api';
import { omit } from '@/lib/utils';
import { Metadata } from 'next';

type PersonPageProps = {
  params: {
    id: string;
  };
};

export const generateMetadata = async ({
  params,
}: PersonPageProps): Promise<Metadata> => {
  const { name } = await getPerson(Number(params.id));

  return {
    title: name,
  };
};

const getData = async (id: number) => {
  const personData = await getPersonWithFilms(id);
  const person = omit(personData, [
    'url',
    'vehicles',
    'starships',
    'species',
    'created',
    'edited',
  ]);

  return person;
};

export default async function PersonPage({ params }: PersonPageProps) {
  const person = await getData(Number(params.id));

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4">
      <PersonCard {...person} />
    </main>
  );
}
