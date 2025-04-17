import { Link } from "react-router-dom";
import { Github, Twitter, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-slate-50 py-12 border-t border-slate-200">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-slate-800">SimplyPi</h3>
            <p className="text-slate-600 text-sm">
              Making learning math and CS as Simple as Pi. Our structured
              platform helps students master complex concepts through clear,
              engaging content.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://github.com"
                className="text-slate-600 hover:text-slate-900"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a
                href="https://twitter.com"
                className="text-slate-600 hover:text-slate-900"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
              <a
                href="https://linkedin.com"
                className="text-slate-600 hover:text-slate-900"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-slate-800">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/courses"
                  className="text-slate-600 hover:text-slate-900 text-sm"
                >
                  All Courses
                </Link>
              </li>
              <li>
                <Link
                  to="/blog"
                  className="text-slate-600 hover:text-slate-900 text-sm"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-slate-600 hover:text-slate-900 text-sm"
                >
                  About Us
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-slate-800">Support</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/contact"
                  className="text-slate-600 hover:text-slate-900 text-sm"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  to="/faq"
                  className="text-slate-600 hover:text-slate-900 text-sm"
                >
                  FAQ
                </Link>
              </li>
              <li>
                <Link
                  to="/privacy"
                  className="text-slate-600 hover:text-slate-900 text-sm"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  to="/terms"
                  className="text-slate-600 hover:text-slate-900 text-sm"
                >
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-slate-800">Newsletter</h3>
            <p className="text-slate-600 text-sm">
              Subscribe to our newsletter for the latest updates on courses and
              learning resources.
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="px-3 py-2 border border-slate-300 rounded-l-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent w-full"
              />
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-r-md text-sm transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-slate-200 text-center">
          <p className="text-slate-600 text-sm">
            © {new Date().getFullYear()} SimplyPi. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
