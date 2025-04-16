import CourseGrid from "@/components/CourseGrid";
import Navbar from "@/components/Navbar";

const CoursesPage = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      <Navbar />
      <div className="pt-16 md:pt-20">
        <CourseGrid
          title="All Courses"
          subtitle="Explore our comprehensive collection of mathematics and computer science courses"
        />
      </div>
    </div>
  );
};

export default CoursesPage;
