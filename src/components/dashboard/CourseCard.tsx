"use client";
import { Course } from "@/types/course";
import { motion } from "framer-motion";
import { Boxes, Brain, Code, Rocket } from "lucide-react";

interface CourseCardProps {
  course: Course;
  index: number;
}

const iconMap = {
  Brain,
  Boxes,
  Code,
  Rocket,
};

export default function CourseCard({ course, index }: CourseCardProps) {
  const Icon = iconMap[course.icon_name as keyof typeof iconMap] || Code;
  return (
    <motion.article
      initial={{
        opacity: 0,
        y: 20,
      }}
      animate={{
        opacity: 1,
        y: 0,
        transition: {
          delay: 0.2 + index * 0.1,
          type: "spring",
          stiffness: 300,
          damping: 20,
        },
      }}
      whileHover={{
        scale: 1.02,
        y: -2,
        transition: {
          duration: 0.2,
        },
      }}
      className="relative overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900 p-5 hover:cursor-pointer  hover:border-cyan-500/40 transition-colors "
    >
      {/* Gradient Mesh */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 via-transparent to-cyan-500/10" />

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col justify-between">
        <div>
          <div className="mb-4 flex items-center justify-between">
            <div className="rounded-xl border border-zinc-700 bg-zinc-800 text-zinc-100 p-2">
              <Icon size={22} />
            </div>

            <span className="text-sm text-zinc-400">{course.progress}%</span>
          </div>

          <h2 className="text-lg font-semibold text-zinc-100 break-words">
            {course.title}
          </h2>
        </div>

        <div className="mt-6">
          <div className="mb-2 flex items-center justify-between text-sm text-zinc-400">
            <span>Progress</span>
            <span>{course.progress}%</span>
          </div>

          <div className="h-2 overflow-hidden rounded-full bg-zinc-800">
            <motion.div
              initial={{
                width: 0,
              }}
              animate={{
                width: `${course.progress}%`,
              }}
              transition={{
                duration: 1,
                delay: 0.2 + index * 0.1,
              }}
              className="h-full rounded-full bg-gradient-to-r from-cyan-500 to-indigo-500"
            />
          </div>
        </div>
      </div>
    </motion.article>
  );
}
