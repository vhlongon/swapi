import { CharactersList } from './CharactersList';

export default async function CharactersPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4 gap-4">
      <h1 className="text-4xl font-bold text-center text-accent">Characters</h1>
      <CharactersList />
    </main>
  );
}
