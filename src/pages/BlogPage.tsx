import { Separator } from "@/components/ui/separator";
import Navbar from "@/components/Navbar";
import { SAMPLE_BLOG_POSTS } from "@/data/BlogPost";

const BlogPage = () => {
  return (
    <div className="bg-white min-h-screen pt-20">
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            SimplyPi Blog
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore articles, tutorials, and insights about mathematics,
            computer science, and effective learning strategies.
          </p>
        </div>

        <div className="mb-10">
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <button className="px-4 py-2 rounded-full bg-blue-100 text-blue-700 font-medium hover:bg-blue-200 transition-colors">
              All Topics
            </button>
            <button className="px-4 py-2 rounded-full bg-gray-100 text-gray-700 font-medium hover:bg-gray-200 transition-colors">
              Mathematics
            </button>
            <button className="px-4 py-2 rounded-full bg-gray-100 text-gray-700 font-medium hover:bg-gray-200 transition-colors">
              Computer Science
            </button>
            <button className="px-4 py-2 rounded-full bg-gray-100 text-gray-700 font-medium hover:bg-gray-200 transition-colors">
              Learning Tips
            </button>
          </div>
          <Separator className="my-8" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SAMPLE_BLOG_POSTS.map((post) => (
            <div
              key={post.id}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
            >
              <img
                src={post.imageUrl}
                alt={post.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium text-blue-600">
                    {post.category}
                  </span>
                  <span className="text-sm text-gray-500">{post.readTime}</span>
                </div>
                <h2 className="text-xl font-bold text-gray-900 mb-2">
                  {post.title}
                </h2>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">{post.author}</span>
                  <span className="text-sm text-gray-500">{post.date}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
