export default function Loading() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4 gap-4">
      <span
        aria-label="loading"
        className="loading loading-spinner loading-lg"
      ></span>
    </main>
  );
}
