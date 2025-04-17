import { Separator } from "@/components/ui/separator";
import Navbar from "@/components/Navbar";
import { SAMPLE_BLOG_POSTS } from "@/data/BlogPost";
import { useState, useEffect } from "react";
import { CATEGORIES } from "@/data/Course";
import {
  Search,
  Clock,
  Calendar,
  User,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

// Constants
const POSTS_PER_PAGE = 6;

// Blog Post Interface
interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  category: string;
  imageUrl: string;
  readTime: string;
}

const BlogPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All Topics");
  const [currentPage, setCurrentPage] = useState(1);
  const [featuredPost, setFeaturedPost] = useState<BlogPost | null>(null);
  const [filteredPosts, setFilteredPosts] = useState<BlogPost[]>([]);

  useEffect(() => {
    // Set the first post as featured
    if (SAMPLE_BLOG_POSTS.length > 0) {
      setFeaturedPost(SAMPLE_BLOG_POSTS[0]);
    }

    // Filter posts based on search and category
    filterPosts();
  }, [searchQuery, selectedCategory]);

  const filterPosts = () => {
    let filtered = [...SAMPLE_BLOG_POSTS];

    // Filter by search query
    if (searchQuery) {
      filtered = filtered.filter(
        (post) =>
          post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
          post.author.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Filter by category
    if (selectedCategory !== "All Topics") {
      filtered = filtered.filter((post) => post.category === selectedCategory);
    }

    setFilteredPosts(filtered);
    setCurrentPage(1); // Reset to first page when filters change
  };

  // Calculate pagination
  const totalPages = Math.ceil(filteredPosts.length / POSTS_PER_PAGE);
  const indexOfLastPost = currentPage * POSTS_PER_PAGE;
  const indexOfFirstPost = indexOfLastPost - POSTS_PER_PAGE;
  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleCategoryClick = (category: string) => {
    setSelectedCategory(category);
  };

  return (
    <div className="bg-white min-h-screen pt-20">
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-900 mb-4 tracking-tight">
            SimplyPi Blog
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore articles, tutorials, and insights about mathematics,
            computer science, and effective learning strategies.
          </p>
        </div>

        {/* Search and Filter Section */}
        <div className="mb-10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-8">
            <div className="relative w-full md:w-96">
              <Search
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                size={18}
              />
              <Input
                type="text"
                placeholder="Search articles..."
                className="pl-10 pr-4 py-2 w-full"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <div className="flex flex-wrap justify-center gap-2">
              {CATEGORIES.map((category) => (
                <button
                  key={category}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    selectedCategory === category
                      ? "bg-blue-100 text-blue-700 hover:bg-blue-200"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                  onClick={() => handleCategoryClick(category)}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
          <Separator className="my-8" />
        </div>

        {/* Blog Posts Grid */}
        {currentPosts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {currentPosts.map((post) => (
              <div
                key={post.id}
                className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-blue-100 flex flex-col h-full transform hover:-translate-y-1"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={post.imageUrl}
                    alt={post.title}
                    className="w-full h-48 object-cover transition-transform duration-500 hover:scale-105"
                  />
                  <div className="absolute top-0 right-0 m-4">
                    <span className="px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-xs font-medium">
                      {post.category}
                    </span>
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <h2 className="text-xl font-bold text-gray-900 mb-3 hover:text-blue-600 transition-colors cursor-pointer">
                    {post.title}
                  </h2>
                  <p className="text-gray-600 mb-4 flex-grow">{post.excerpt}</p>
                  <div className="flex flex-wrap gap-4 text-sm text-gray-500 mt-auto pt-4 border-t border-gray-100">
                    <div className="flex items-center gap-1">
                      <Calendar size={14} />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock size={14} />
                      <span>{post.readTime}</span>
                    </div>
                    <div className="flex items-center gap-1 ml-auto">
                      <User size={14} />
                      <span>{post.author}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <h3 className="text-2xl font-medium text-gray-700 mb-4">
              No articles found
            </h3>
            <p className="text-gray-500 mb-8">
              Try adjusting your search or filter criteria
            </p>
            <Button
              onClick={() => {
                setSearchQuery("");
                setSelectedCategory("All Topics");
              }}
            >
              Reset Filters
            </Button>
          </div>
        )}

        {/* Pagination */}
        {filteredPosts.length > POSTS_PER_PAGE && (
          <div className="flex justify-center mt-12">
            <div className="flex items-center space-x-2">
              <Button
                variant="outline"
                size="sm"
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className="flex items-center gap-1"
              >
                <ChevronLeft size={16} /> Previous
              </Button>

              {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                (number) => (
                  <Button
                    key={number}
                    variant={currentPage === number ? "default" : "outline"}
                    size="sm"
                    onClick={() => handlePageChange(number)}
                    className={currentPage === number ? "bg-blue-600" : ""}
                  >
                    {number}
                  </Button>
                )
              )}

              <Button
                variant="outline"
                size="sm"
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="flex items-center gap-1"
              >
                Next <ChevronRight size={16} />
              </Button>
            </div>
          </div>
        )}

        {/* Newsletter Subscription */}
        <div className="mt-20 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-8 shadow-md">
          <div className="text-center mb-6">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              Subscribe to Our Newsletter
            </h3>
            <p className="text-gray-600">
              Get the latest articles and learning resources delivered to your
              inbox
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
            <Input
              type="email"
              placeholder="Your email address"
              className="flex-grow"
            />
            <Button>Subscribe</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
