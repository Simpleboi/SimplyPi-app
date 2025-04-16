export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  category: string;
  imageUrl: string;
  readTime: string;
}

export const SAMPLE_BLOG_POSTS: BlogPost[] = [
  {
    id: "1",
    title: "Understanding Calculus: A Visual Approach",
    excerpt:
      "Learn how to visualize complex calculus concepts with these simple techniques that make derivatives and integrals intuitive.",
    author: "Dr. Sarah Chen",
    date: "May 15, 2023",
    category: "Mathematics",
    imageUrl:
      "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=800&q=80",
    readTime: "8 min read",
  },
  {
    id: "2",
    title: "5 Python Tricks Every CS Student Should Know",
    excerpt:
      "Boost your coding efficiency with these Python shortcuts that will save you time and make your code more elegant.",
    author: "Michael Rodriguez",
    date: "April 22, 2023",
    category: "Computer Science",
    imageUrl:
      "https://images.unsplash.com/photo-1526379879527-8559ecfcb0c8?w=800&q=80",
    readTime: "6 min read",
  },
  {
    id: "3",
    title: "The Beauty of Mathematical Patterns",
    excerpt:
      "Discover how mathematical patterns appear in nature and how understanding them can deepen your appreciation of the world around you.",
    author: "Emma Watson",
    date: "March 10, 2023",
    category: "Mathematics",
    imageUrl:
      "https://images.unsplash.com/photo-1509228468518-180dd4864904?w=800&q=80",
    readTime: "10 min read",
  },
  {
    id: "4",
    title: "How to Approach Algorithm Problems",
    excerpt:
      "A step-by-step guide to breaking down and solving complex algorithm challenges, with practical examples.",
    author: "James Liu",
    date: "February 28, 2023",
    category: "Computer Science",
    imageUrl:
      "https://images.unsplash.com/photo-1580894732444-8ecded7900cd?w=800&q=80",
    readTime: "12 min read",
  },
  {
    id: "5",
    title: "Study Techniques That Actually Work",
    excerpt:
      "Evidence-based learning strategies that can help you retain information better and study more efficiently.",
    author: "Dr. Amanda Johnson",
    date: "January 15, 2023",
    category: "Learning Tips",
    imageUrl:
      "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&q=80",
    readTime: "7 min read",
  },
  {
    id: "6",
    title: "The History of Pi: More Than Just 3.14",
    excerpt:
      "Explore the fascinating history of pi and how this mathematical constant has evolved throughout human civilization.",
    author: "Dr. Robert Chen",
    date: "December 5, 2022",
    category: "Mathematics",
    imageUrl:
      "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=800&q=80",
    readTime: "9 min read",
  },
];
