import {
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
} from "lucide-react";
import BlogCard from "../components/BlogsCard";
import Container from "../shared/Container";

const blogs = [
  {
    title: "Top 10 Must-Have Gadgets for 2024",
    slug: "top-10-must-have-gadgets-2024",
    description:
      "Discover the latest gadgets that will revolutionize your tech game this year. From smartwatches to home automation, these are the essentials you need.",
    thumbnail: "/images/blog/blog-1.jpg",
    publishedDate: new Date("2024-10-01T00:00:00Z"),
    author: "John Doe",
  },
  {
    title: "How to Style Your Wardrobe for Every Season",
    slug: "style-your-wardrobe-for-every-season",
    description:
      "A complete guide to building a versatile wardrobe that suits every season. Learn the best fashion tips to stay trendy all year long.",
    thumbnail: "/images/blog/blog-2.jpg",
    publishedDate: new Date("2024-09-15T00:00:00Z"),
    author: "Jane Smith",
  },
  {
    title: "Home Décor Trends: Transform Your Space in 2024",
    slug: "home-decor-trends-2024",
    description:
      "Explore the top home décor trends of 2024 that will inspire you to refresh your living space, from minimalism to vibrant color palettes.",
    thumbnail: "/images/blog/blog-3.jpg",
    publishedDate: new Date("2024-08-20T00:00:00Z"),
    author: "Emily Brown",
  },
];

const Blogs = () => {
  return (
    <main>
      <section className="bg-[url(/images/blog-cover.jpg)] bg-cover bg-center bg-no-repeat">
        <div className="w-full bg-black/65 py-16 md:py-20 lg:py-28">
          <Container>
            <h1 className="text-center text-5xl font-semibold text-white md:text-6xl">
              Blogs
            </h1>
          </Container>
        </div>
      </section>
      <section className="bg-white py-16 md:py-20">
        <Container>
          <div className="grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-6 xl:grid-cols-3">
            {blogs.map((blog, index) => (
              <BlogCard key={index} blog={blog} />
            ))}
          </div>
          <div className="mx-auto mt-9 grid w-[270px] grid-cols-[auto_auto_1fr_auto_auto] divide-x divide-[#141f5e] text-white">
            <button
              disabled={true}
              className="flex size-12 items-center justify-center bg-[#263587] duration-300 hover:bg-[#141f5e] disabled:pointer-events-none disabled:opacity-70"
            >
              <ChevronsLeft className="w-full" />
            </button>
            <button
              disabled={true}
              className="flex size-12 items-center justify-center bg-[#263587] duration-300 hover:bg-[#141f5e] disabled:pointer-events-none disabled:opacity-70"
            >
              <ChevronLeft className="w-full" />
            </button>
            <p className="pointer-events-none flex items-center justify-center bg-[#263587] text-lg font-semibold">
              1 / 1
            </p>
            <button
              disabled={true}
              className="flex size-12 items-center justify-center bg-[#263587] duration-300 hover:bg-[#141f5e] disabled:pointer-events-none disabled:opacity-70"
            >
              <ChevronRight className="w-full" />
            </button>
            <button
              disabled={true}
              className="flex size-12 items-center justify-center bg-[#263587] duration-300 hover:bg-[#141f5e] disabled:pointer-events-none disabled:opacity-70"
            >
              <ChevronsRight className="w-full" />
            </button>
          </div>
        </Container>
      </section>
    </main>
  );
};

export default Blogs;
