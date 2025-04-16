import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";


const AboutUsPage = () => {
  return (
    <div className="bg-white min-h-screen">
      <Navbar />
      <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-blue-600 mb-4">
            About SimplyPi
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Making learning math and computer science as simple as Pi
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80"
              alt="Nathaniel Paz"
              className="rounded-lg shadow-lg w-full h-auto object-cover aspect-ratio-1/1"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              Meet Our Founder
            </h2>
            <h3 className="text-2xl font-semibold text-blue-600 mb-4">
              Nathaniel Paz
            </h3>
            <p className="text-gray-700 mb-4">
              Nathaniel Paz founded SimplyPi with a vision to make quality
              education in mathematics and computer science accessible to
              everyone. As a student who struggled with these subjects early in
              his academic journey, Nathaniel understands firsthand the
              challenges many students face.
            </p>
            <p className="text-gray-700 mb-4">
              With extensive experience in tutoring peers and leading study
              groups throughout his college years, Nathaniel developed a unique
              approach to breaking down complex concepts into simple, digestible
              pieces—making learning as "simple as Pi."
            </p>
          </div>
        </div>

        <div className="bg-blue-50 rounded-xl p-8 mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
            Our Mission
          </h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-gray-700 mb-4">
              At SimplyPi, we believe that quality education should be
              accessible to everyone, regardless of their financial situation or
              geographic location. That's why we've built our platform on
              open-source principles, making all our educational content free
              and available to anyone with an internet connection.
            </p>
            <p className="text-gray-700 mb-4">
              We're committed to creating a collaborative learning environment
              where students can not only learn from our courses but also
              contribute to improving them. By embracing open-source values, we
              ensure that our educational materials are continuously refined and
              updated by a diverse community of educators and learners.
            </p>
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
            Why Open-Source Education Matters
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-blue-600 mb-3">
                Accessibility
              </h3>
              <p className="text-gray-700">
                Open-source education removes financial barriers, making quality
                learning resources available to everyone regardless of economic
                status.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-blue-600 mb-3">
                Collaboration
              </h3>
              <p className="text-gray-700">
                Our open approach encourages educators, students, and
                professionals to collaborate, ensuring diverse perspectives and
                continuously improving content.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-blue-600 mb-3">
                Innovation
              </h3>
              <p className="text-gray-700">
                By sharing knowledge freely, we foster innovation and creative
                problem-solving in the fields of mathematics and computer
                science.
              </p>
            </div>
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            Join Our Mission
          </h2>
          <p className="text-gray-700 mb-8 max-w-3xl mx-auto">
            Whether you're a student looking to learn, an educator wanting to
            contribute, or simply someone who believes in the power of
            accessible education, there's a place for you in the SimplyPi
            community.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link to="/courses">Explore Our Courses</Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link to="/contact">Get Involved</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsPage;
