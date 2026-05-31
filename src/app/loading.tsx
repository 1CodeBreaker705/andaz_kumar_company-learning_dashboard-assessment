export default function Loading() {
  return (
    <main className="min-h-screen p-4 pb-24 md:pb-4">
      <div className="flex flex-col md:flex-row gap-4">
        {/* Tablet/Desktop Sidebar Skeleton */}
        <div className="hidden md:block w-24 xl:w-72 h-[calc(100vh-2rem)] rounded-2xl bg-zinc-900 animate-pulse" />

        <div className="flex-1 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-10 gap-4 auto-rows-auto md:auto-rows-[180px]">
          {/* Hero Tile Skeleton */}
          <div className="col-span-1 md:col-span-2 xl:col-span-10 h-[180px] rounded-2xl bg-zinc-900 animate-pulse" />

          {/* Activity Tile Skeleton */}
          <div className="col-span-1 md:col-span-2 xl:col-span-6 h-[420px] md:h-auto md:row-span-2 rounded-2xl bg-zinc-900 animate-pulse" />

          {/* Course Card Skeletons */}
          {Array.from({ length: 4 }).map((_, i) => (
            <div
              key={i}
              className="col-span-1 xl:col-span-4 h-[180px] rounded-2xl bg-zinc-900 animate-pulse"
            />
          ))}
        </div>
      </div>

      {/* Mobile Bottom Navigation Skeleton */}
      <div className="fixed bottom-0 left-0 right-0 md:hidden border-t border-zinc-800 bg-zinc-900">
        <div className="flex justify-around py-3">
          {Array.from({ length: 4 }).map((_, i) => (
            <div
              key={i}
              className="h-8 w-8 rounded-lg bg-zinc-800 animate-pulse"
            />
          ))}
        </div>
      </div>
    </main>
  );
}
