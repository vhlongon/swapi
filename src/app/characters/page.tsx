import { Metadata } from 'next';
import { CharactersList } from './CharactersList';

export const metadata: Metadata = {
  title: 'Characters - Swapi App',
  description:
    'List of Star Wars characters from the visisted films by the user',
};

export default function CharactersPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4 gap-4">
      <h1 className="text-4xl font-bold text-center text-accent">Characters</h1>
      <CharactersList />
    </main>
  );
}
