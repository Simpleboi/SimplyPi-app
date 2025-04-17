import HeroSection from "@/components/HeroSection";
import CourseGrid from "@/components/CourseGrid";
import Navbar from "@/components/Navbar";

function Home() {
  return (
    <div className="w-full min-h-screen bg-white">
      <Navbar />
      <HeroSection
        title="Making learning Math and CS as Simple as Pi"
        subtitle="A structured learning platform designed to help students master mathematics and computer science concepts through clear, engaging content."
        ctaText="Start Learning Now"
        onCtaClick={() => console.log("CTA clicked")}
      />
      <CourseGrid
        title="Featured Courses"
        subtitle="Explore our most popular courses in mathematics and computer science"
      />
    </div>
  );
}

export default Home;
