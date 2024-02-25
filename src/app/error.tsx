'use client';

import { ErrorCard } from '@/components/ErrorCard';

type ErrorPageProps = {
  error: Error & {
    digest?: string;
  };
  reset: () => void;
};

export default function ErrorPage({ error, reset }: ErrorPageProps) {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4">
      <ErrorCard error={error} reset={reset} />
    </main>
  );
}
