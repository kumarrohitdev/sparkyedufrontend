"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = __importDefault(require("express"));
const usercontroller_1 = require("../controller/usercontroller");
const IsAuthenticated_1 = require("../middleware/IsAuthenticated");
exports.router = express_1.default.Router();
exports.router.route("/register").post(usercontroller_1.registerUserinDataBase);
exports.router.route("/login").post(usercontroller_1.loginUser);
exports.router.route("/logout").get(usercontroller_1.logoutUser);
exports.router.route("/auth").get(IsAuthenticated_1.isAuthenticated, usercontroller_1.authRoute);
exports.router.route("/profile").get(IsAuthenticated_1.isAuthenticated, usercontroller_1.profileDetails);
exports.router.route("/update").post(IsAuthenticated_1.isAuthenticated, usercontroller_1.updateUserDetails);
exports.router.route("/createBlog").post(IsAuthenticated_1.isAuthenticated, usercontroller_1.createBlogPost);
exports.router.route("/blogdata").get(usercontroller_1.GetBlogFromDb);
