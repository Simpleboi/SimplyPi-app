import { Suspense } from "react";
import { useRoutes, Routes, Route } from "react-router-dom";
import routes from "tempo-routes";
import Home from "./pages/Home";
import CoursesPage from "./pages/CoursePage";
import AboutUsPage from "./pages/AboutUsPage";
import BlogPage from "./pages/BlogPage";

function App() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <>
        {import.meta.env.VITE_TEMPO === "true" && useRoutes(routes)}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/courses" element={<CoursesPage />} />
          <Route path="/about" element={<AboutUsPage />} />
          <Route path="/blog" element={<BlogPage />} />
        </Routes>
      </>
    </Suspense>
  );
}

export default App;
