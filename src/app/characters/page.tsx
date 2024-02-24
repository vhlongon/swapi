import { CharactersList } from './CharactersList';

export default async function CharactersPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1>Characters viewed in films:</h1>
      <CharactersList />
    </main>
  );
}
