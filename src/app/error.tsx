'use client';

type ErrorPageProps = {
  error: Error & {
    digest?: string;
  };
  reset: () => void;
};

export default function ErrorPage({ error, reset }: ErrorPageProps) {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4">
      <div className="card w-full max-w-96 bg-neutral text-neutral-content">
        <div className="card-body items-center text-center">
          <h1 className="card-title text-error">Error</h1>
          <details className="collapse collapse-arrow border border-base-200 bg-base-100">
            <summary className="collapse-title font-medium">
              See details
            </summary>
            <div className="collapse-content">
              <code>{JSON.stringify(error)}</code>
            </div>
          </details>
          <div className="card-actions mt-2 justify-center w-full">
            <button className="btn btn-outline w-1/2" onClick={reset}>
              Try again
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
