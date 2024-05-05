import BlogCategory from "../Components/BlogCategory";
import Card from "../Components/Card";

export default function Blog() {
  return (
    <div>
      <h1 className="max-w-6xl mx-auto mt-20 text-4xl font-bold text-center">
        Recent Blogs
      </h1>
      <div className="flex justify-center items-center mt-4">
        <BlogCategory />
      </div>
      <div>
        <Card />
      </div>
    </div>
  );
}
