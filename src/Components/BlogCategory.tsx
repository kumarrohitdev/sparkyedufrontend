export default function BlogCategory() {
  const BlogCategory = [
    "React",
    "Next",
    "App Development",
    "Web Development",
    "Authentication",
  ];
  return (
    <div className="border-2 rounded-lg pl-8 pt-2 pb-2 pr-8">
      {BlogCategory.map((item, index) => (
        <button
          className="ml-2 rounded-[30%]  w-fit active:bg-gray-100 hover:bg-gray-200 p-2 "
          key={index}
        >
          {item}
        </button>
      ))}
    </div>
  );
}
