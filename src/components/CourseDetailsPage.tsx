import { useParams } from "react-router-dom";
import Navbar from "./Navbar";
import { Badge } from "@/components/ui/badge";
import { CalendarIcon, BookOpen, Clock, Users, Award } from "lucide-react";

interface CourseSection {
  id: string;
  title: string;
  description: string;
  duration: string;
}

const CourseDetailPage = () => {
  const { courseId } = useParams<{ courseId: string }>();

  // Sample data for Algebra 1 course
  const courseData = {
    id: "1",
    title: "Algebra I",
    description:
      "Master the fundamentals of algebra including linear equations, inequalities, and quadratic functions. This comprehensive course is designed for beginners and provides a solid foundation for more advanced mathematical concepts.",
    thumbnail:
      "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=800&q=80",
    author: "Nathaniel Paz",
    authorAvatar:
      "https://api.dicebear.com/7.x/avataaars/svg?seed=Nathaniel Paz",
    lastModified: "October 15, 2023",
    category: "Mathematics",
    level: "Beginner",
    duration: "8 weeks",
    students: 1245,
    rating: 4.8,
    sections: [
      {
        id: "s1",
        title: "Introduction to Algebra",
        description: "Learn the basic concepts and notation used in algebra.",
        duration: "1 week",
      },
      {
        id: "s2",
        title: "Linear Equations",
        description:
          "Solve linear equations and understand their applications.",
        duration: "2 weeks",
      },
      {
        id: "s3",
        title: "Inequalities",
        description: "Work with inequalities and graph them on a number line.",
        duration: "1 week",
      },
      {
        id: "s4",
        title: "Graphing Functions",
        description:
          "Plot functions on a coordinate plane and analyze their behavior.",
        duration: "2 weeks",
      },
      {
        id: "s5",
        title: "Quadratic Equations",
        description:
          "Solve quadratic equations using factoring, completing the square, and the quadratic formula.",
        duration: "2 weeks",
      },
    ],
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      <Navbar />
      <div className="pt-16 md:pt-20">
        <div className="container px-4 md:px-6 mx-auto py-8">
          {/* Hero Section */}
          <div className="relative rounded-xl overflow-hidden mb-8">
            <img
              src={courseData.thumbnail}
              alt={courseData.title}
              className="w-full h-64 md:h-80 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
              <div className="p-6 text-white">
                <Badge className="mb-2 bg-primary/90">
                  {courseData.category}
                </Badge>
                <h1 className="text-3xl md:text-4xl font-bold mb-2">
                  {courseData.title}
                </h1>
                <div className="flex items-center gap-2 text-sm">
                  <CalendarIcon className="h-4 w-4" />
                  <span>Last updated: {courseData.lastModified}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Course Info */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
                <h2 className="text-2xl font-bold mb-4">About This Course</h2>
                <p className="text-gray-700 mb-6">{courseData.description}</p>

                <h3 className="text-xl font-bold mb-4">What You'll Learn</h3>
                <div className="space-y-4">
                  {courseData.sections.map((section: CourseSection) => (
                    <div
                      key={section.id}
                      className="border-b pb-4 last:border-0"
                    >
                      <h4 className="font-medium text-lg mb-1">
                        {section.title}
                      </h4>
                      <p className="text-gray-600 mb-2">
                        {section.description}
                      </p>
                      <div className="flex items-center text-sm text-gray-500">
                        <Clock className="h-4 w-4 mr-1" />
                        <span>{section.duration}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="lg:col-span-1">
              <div className="bg-white rounded-xl shadow-sm p-6 sticky top-24">
                <h3 className="text-xl font-bold mb-4">Course Information</h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <BookOpen className="h-5 w-5 text-primary mr-3" />
                    <div>
                      <p className="text-sm text-gray-500">Level</p>
                      <p className="font-medium">{courseData.level}</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-5 w-5 text-primary mr-3" />
                    <div>
                      <p className="text-sm text-gray-500">Duration</p>
                      <p className="font-medium">{courseData.duration}</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Users className="h-5 w-5 text-primary mr-3" />
                    <div>
                      <p className="text-sm text-gray-500">Students</p>
                      <p className="font-medium">
                        {courseData.students.toLocaleString()}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Award className="h-5 w-5 text-primary mr-3" />
                    <div>
                      <p className="text-sm text-gray-500">Rating</p>
                      <p className="font-medium">{courseData.rating}/5</p>
                    </div>
                  </div>
                </div>
                <div className="mt-6 pt-6 border-t">
                  <h4 className="font-medium mb-2">Instructor</h4>
                  <div className="flex items-center">
                    <img
                      src={courseData.authorAvatar}
                      alt={courseData.author}
                      className="h-10 w-10 rounded-full mr-3"
                    />
                    <span className="font-medium">{courseData.author}</span>
                  </div>
                </div>
                <button className="w-full mt-6 bg-primary hover:bg-primary/90 text-white font-medium py-3 px-4 rounded-lg transition-colors">
                  Enroll Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetailPage;
