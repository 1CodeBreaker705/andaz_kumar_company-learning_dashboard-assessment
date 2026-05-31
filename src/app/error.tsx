"use client";

export default function Error({error,reset}: {error: Error;
reset: () => void;
}) {
  return (
    <main className="flex min-h-screen items-center justify-center bg-zinc-950 p-4">
      <div className="rounded-2xl border border-red-800 bg-zinc-900 p-8 text-center">
        <h1 className="mb-3 text-2xl font-bold text-red-400">
          Something went wrong
        </h1>

        <p className="mb-6 text-zinc-400">{error.message}</p>

        <button
          onClick={() => reset()}
          className="rounded-xl bg-red-500 px-4 py-2 text-white transition hover:bg-red-600"
        >
          Try Again
        </button>
      </div>
    </main>
  );
}
