import mongoose from "mongoose";

const BlogSchema = new mongoose.Schema({
  BlogTitle: {
    type: String,
    required: true,
  },
  BlogDescription: {
    type: String,
    required: true,
  },
  BlogLink: {
    type: String,
    required: true,
  },
  BlogImage: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

const Blog = mongoose.model("Blog", BlogSchema);

export default Blog;
