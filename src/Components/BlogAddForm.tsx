import { FormEvent, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function BlogAddForm() {
  const [blogTitle, setBlogTitle] = useState("");
  const [blogDescription, setBlogDescription] = useState("");
  const [blogLink, setBlogLink] = useState("");
  const [blogImage, setBlogImage] = useState("");


  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const postBlog = async () => {
      try {
        const response = await axios.post(
          "http://localhost:8000/api/v1/createBlog",
          {
            BlogTitle: blogTitle,
            BlogDescription: blogDescription,
            BlogLink: blogLink,
            BlogImage: blogImage,
          },
          {
            withCredentials: true,
          }
        );
        toast.success("Blog Created Succseesfully")
      } catch (error: any) {
        toast.error("Error while Creating Blog Try Again")
      }
    };
    postBlog();
    // Reset form fields after submission
    setBlogTitle("");
    setBlogDescription("");
    setBlogLink("");
    setBlogImage("");
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-md shadow-lg">
      <h1 className="text-center text-3xl font-bold mb-4">Create A New Blog</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label
            htmlFor="blogTitle"
            className="block text-sm font-medium text-gray-700"
          >
            Title
          </label>
          <input
            id="blogTitle"
            type="text"
            value={blogTitle}
            onChange={(e) => setBlogTitle(e.target.value)}
            name="blogTitle"
            placeholder="Enter your Blog Title"
            className="mt-1 p-2 w-full border-gray-300 rounded-md"
            required
          />
        </div>
        <div>
          <label
            htmlFor="blogDescription"
            className="block text-sm font-medium text-gray-700"
          >
            Description
          </label>
          <textarea
            id="blogDescription"
            value={blogDescription}
            onChange={(e) => setBlogDescription(e.target.value)}
            name="blogDescription"
            placeholder="Enter your Blog Description"
            className="mt-1 p-2 w-full border-gray-300 rounded-md"
            required
          />
        </div>
        <div>
          <label
            htmlFor="blogLink"
            className="block text-sm font-medium text-gray-700"
          >
            Link
          </label>
          <input
            id="blogLink"
            type="text"
            value={blogLink}
            onChange={(e) => setBlogLink(e.target.value)}
            name="blogLink"
            placeholder="Enter your Blog Link"
            className="mt-1 p-2 w-full border-gray-300 rounded-md"
            required
          />
        </div>
        <div>
          <label
            htmlFor="blogImage"
            className="block text-sm font-medium text-gray-700"
          >
            Image Link
          </label>
          <input
            id="blogImage"
            type="text"
            value={blogImage}
            onChange={(e) => setBlogImage(e.target.value)}
            name="blogImage"
            placeholder="Enter your Blog Image Link"
            className="mt-1 p-2 w-full border-gray-300 rounded-md"
            required
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
