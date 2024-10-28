import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./pages/Navbar";
import Footer from "./pages/Footer";
import Blogs from "./pages/Blogs";
import Blog from "./pages/Blog";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Blogs />} />
        <Route path="/blog/:id" element={<Blog />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
