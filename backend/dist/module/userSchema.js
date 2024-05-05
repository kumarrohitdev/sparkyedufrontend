"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const validator_1 = require("validator");
const userSchema = new mongoose_1.default.Schema({
    username: {
        type: String,
        required: [true, "Username is required"],
        minLength: [8, "Minimum length of username should be 8 characters"],
        unique: [true, "Username already exists"],
        validate: {
            validator: (value) => (0, validator_1.isEmail)(value),
            message: "Enter a valid email address",
        },
    },
    password: {
        type: String,
        required: [true, "Password is required"],
        minLength: [8, "Minimum length of password should be 8 characters"],
        validate: {
            validator: (value) => (0, validator_1.isStrongPassword)(value),
            message: "Password should be strong. It must contain at least 8 characters, including uppercase, lowercase, and special characters.",
        },
    },
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        require: true,
        default: "user"
    }
});
const User = mongoose_1.default.model("User", userSchema);
exports.default = User;
