import React from "react";
import CourseCard from "./CourseCard";
import { courses } from "@/data/Course";

interface Course {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  author: string;
  lastModified: string;
  category?: string;
}

interface CourseGridProps {
  courses?: Course[];
  title?: string;
  subtitle?: string;
}

const CourseGrid: React.FC<CourseGridProps> = ({
  title = "Featured Courses",
  subtitle = "Explore our most popular courses in mathematics and computer science",
}) => {
  return (
    <section className="w-full py-12 bg-white">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col items-center text-center mb-10">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 md:text-4xl">
            {title}
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl">{subtitle}</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {courses.map((course) => (
            <CourseCard
              id={course.id}
              key={course.id}
              title={course.title}
              description={course.description}
              thumbnail={course.thumbnail}
              authorName={course.author}
              lastModified={course.lastModified}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CourseGrid;
