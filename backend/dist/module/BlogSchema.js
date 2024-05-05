"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const BlogSchema = new mongoose_1.default.Schema({
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
const Blog = mongoose_1.default.model("Blog", BlogSchema);
exports.default = Blog;
