import React from "react";
import CourseCard from "./CourseCard";

interface Course {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  author: string;
  lastModified: string;
}

interface CourseGridProps {
  courses?: Course[];
  title?: string;
  subtitle?: string;
}

const CourseGrid: React.FC<CourseGridProps> = ({
  courses = [
    {
      id: "1",
      title: "Algebra I",
      description:
        "Master the fundamentals of algebra including linear equations, inequalities, and quadratic functions.",
      thumbnail:
        "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=800&q=80",
      author: "Nathaniel Paz",
      lastModified: "2023-10-15",
    },
    {
      id: "2",
      title: "Calculus",
      description:
        "Explore limits, derivatives, and integrals with practical applications and visualizations.",
      thumbnail:
        "https://images.unsplash.com/photo-1509228468518-180dd4864904?w=800&q=80",
      author: "Nathaniel Paz",
      lastModified: "2023-11-20",
    },
    {
      id: "3",
      title: "Python Programming",
      description:
        "Learn Python from scratch with hands-on projects and interactive coding exercises.",
      thumbnail:
        "https://images.unsplash.com/photo-1526379879527-8559ecfcaec0?w=800&q=80",
      author: "Nathaniel Paz",
      lastModified: "2023-12-05",
    },
    {
      id: "4",
      title: "Statistics",
      description:
        "Understand data analysis, probability, and statistical inference with real-world examples.",
      thumbnail:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
      author: "Nathaniel Paz",
      lastModified: "2024-01-10",
    },
    {
      id: "5",
      title: "Data Structures",
      description:
        "Master essential computer science concepts with implementations in Python and JavaScript.",
      thumbnail:
        "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80",
      author: "Nathaniel Paz",
      lastModified: "2024-02-15",
    },
    {
      id: "6",
      title: "Geometry",
      description:
        "Explore shapes, transformations, and proofs with interactive visualizations.",
      thumbnail:
        "https://images.unsplash.com/photo-1582266255765-fa5cf1a1d501?w=800&q=80",
      author: "Nathaniel Paz",
      lastModified: "2024-03-01",
    },
  ],
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
