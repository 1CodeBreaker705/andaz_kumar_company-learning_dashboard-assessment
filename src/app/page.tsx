import ActivityTile from "@/components/dashboard/ActivityTile";
import CourseCard from "@/components/dashboard/CourseCard";
import HeroTile from "@/components/dashboard/HeroTile";
import MobileBottomNav from "@/components/dashboard/MobileBottomNav";
import Sidebar from "@/components/dashboard/Sidebar";
import { supabase } from "@/lib/supabase";
import { Course } from "@/types/course";

export default async function Home() {
  const { data, error } = await supabase.from("courses").select("*");

  if (error) {
    throw new Error(error.message);
  }

  const courses: Course[] = data ?? [];

  if (courses.length === 0) {
    return <main>No courses found</main>;
  }

  return (
    <main className="min-h-screen p-4 pb-24 md:pb-4">
      <MobileBottomNav />
      <div className="flex flex-col md:flex-row gap-4 ">
        <Sidebar />
        <div className="flex-1 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-10 gap-4 auto-rows-auto md:auto-rows-[180px]">
          <HeroTile activeCourses={courses.length} />
          <ActivityTile />
          {courses.map((course, index) => (
            <div
              key={course.id}
              className="col-span-1 xl:col-span-4 row-span-1 "
            >
              <CourseCard course={course} index={index} />
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
