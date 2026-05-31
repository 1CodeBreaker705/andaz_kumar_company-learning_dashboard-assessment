export default function ActivityTile() {
  const shades = ["bg-zinc-800", "bg-sky-950", "bg-sky-900", "bg-sky-800"];

  return (
    <section className="col-span-1 md:col-span-2 xl:col-span-6 row-span-2 rounded-2xl border border-zinc-800 bg-zinc-900 p-4">
      <h2 className="mb-4 text-xl font-semibold text-zinc-100">
        Learning Activity
      </h2>

      <div className="grid grid-cols-5 md:grid-cols-10 gap-2 md:gap-3">
        {Array.from({ length: 50 }).map((_, i) => (
          <div
            key={i}
            className={`h-7 rounded transition-colors hover:bg-cyan-300  ${
              shades[i % shades.length]
            }`}
          />
        ))}
      </div>

      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="flex items-center justify-center ">
          <div className="w-[65%] md:w-[80%] bg-zinc-800 rounded-2xl text-center">
            <p className="text-xl md:text-2xl font-bold text-zinc-100">18h</p>
            <p className="text-zinc-400">This Week</p>
          </div>
        </div>
        <div className=" flex items-center justify-center ">
          <div className="w-[65%] md:w-[80%] bg-zinc-800 rounded-2xl text-center">
            <p className="text-xl md:text-2xl font-bold text-zinc-100">42</p>
            <p className="text-zinc-400">Lessons</p>
          </div>
        </div>
        <div className=" flex items-center justify-center ">
          <div className="w-[65%] md:w-[80%] bg-zinc-800 rounded-2xl text-center">
            <p className="text-xl md:text-2xl font-bold text-zinc-100 text-center">87%</p>
            <p className="text-zinc-400">Consistency</p>
          </div>
        </div>
      </div>
    </section>
  );
}
