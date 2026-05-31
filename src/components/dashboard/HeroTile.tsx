import { motion } from "framer-motion";

interface HeroTileProps {
  activeCourses: number;
}

export default function HeroTile({ activeCourses }: HeroTileProps) {
  return (
    <motion.section 
      initial={{ opacity: 0, y: 20 }}
      animate={{
        opacity: 1,
        y: 0,
        transition: {
          delay: 0,
          type: "spring",
          stiffness: 300,
          damping: 20,
        },
      }}
      className="col-span-1 md:col-span-2 xl:col-span-10 row-span-1 rounded-2xl border border-zinc-800 bg-zinc-900 text-zinc-100 p-6">
      <div className="flex h-full flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-2xl md:text-3xl xl:text-4xl font-bold">Welcome Back, Learner 👋</h1>

          <p className="mt-2 text-zinc-400">
            Keep building your skills every day
          </p>
        </div>

        <div className="flex flex-wrap gap-6">
          <div>
            <p className=" text-2xl md:text-3xl xl:text-4xl font-bold">{activeCourses}</p>
            <p className="text-zinc-400">Active Courses</p>
          </div>

          <div>
            <p className="text-2xl md:text-3xl xl:text-4xl font-bold">12🔥</p>
            <p className="text-zinc-400">Day Streak</p>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
