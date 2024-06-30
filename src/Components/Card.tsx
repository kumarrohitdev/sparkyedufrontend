import axios from "axios";
import { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";

interface Blog {
  BlogTitle: string;
  BlogDescription: string;
  BlogImage: string;
}

export default function Card() {
  const [results, setResults] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8000/api/v1/blogdata",
          {
            withCredentials: true,
          }
        );
        setResults(response.data);
        setLoading(false);
      } catch (error) {
        setError("Error fetching data");
        setLoading(false);
      }
    };
    fetchBlog();
  }, []);

  if (loading) {
    return (
      <div className="grid lg:grid-cols-2 max-w-6xl mx-auto mt-20 gap-2">
        <div className="border-0 rounded-md p-4 shadow-lg">
          <Skeleton height={200} />
          <Skeleton count={2} />
        </div>
        <div className="border-0 rounded-md p-4 shadow-lg">
          <Skeleton height={200} />
          <Skeleton count={2} />
        </div>
        <div className="border-0 rounded-md p-4 shadow-lg">
          <Skeleton height={200} />
          <Skeleton count={2} />
        </div>
        <div className="border-0 rounded-md p-4 shadow-lg">
          <Skeleton height={200} />
          <Skeleton count={2} />
        </div>
        <div className="border-0 rounded-md p-4 shadow-lg">
          <Skeleton height={200} />
          <Skeleton count={2} />
        </div>
        <div className="border-0 rounded-md p-4 shadow-lg">
          <Skeleton height={200} />
          <Skeleton count={2} />
        </div>
      </div>
    );
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="grid lg:grid-cols-2 max-w-6xl mx-auto mt-20 gap-2 fit m-20">
      {results.map((item, index) => (
        <div
          key={index}
          className="border-0 rounded-md p-4 shadow-lg lg:grid-cols-2 md:grid-cols-2 grid-cols-1 grid-rows-1 grid lg:h-fit sm:gap-5 m-8"
        >
          <div className="fit">
            <img className="h-fit rounded-md" src={item.BlogImage} alt="Blog image" />
          </div>
          <div>
            <h1 className="text-xl font-semibold text-gray-700">{item.BlogTitle || ""}</h1>
            <p className="line-clamp-3">{item.BlogDescription || ""}</p>
          </div>
          <button className="bg-black text-white p-2 w-fit flex mx-auto rounded-md active:bg-inherit justify-center items-center mt-6">Read Now</button>
        </div>
      ))}
    </div>
  );
}
