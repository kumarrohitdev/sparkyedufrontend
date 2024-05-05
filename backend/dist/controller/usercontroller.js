"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetBlogFromDb = exports.createBlogPost = exports.updateUserDetails = exports.profileDetails = exports.authRoute = exports.logoutUser = exports.loginUser = exports.registerUserinDataBase = void 0;
const userSchema_1 = __importDefault(require("../module/userSchema"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const BlogSchema_1 = __importDefault(require("../module/BlogSchema"));
//register a user
const registerUserinDataBase = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let { username, password, lastName, firstName } = req.body;
        let user = yield userSchema_1.default.findOne({ username: username });
        if (user) {
            return res.status(402).json({ Message: "username already exist" });
        }
        let hashPassword = yield bcrypt_1.default.hash(password, 12);
        let newUser = yield userSchema_1.default.create({
            username: username,
            lastName: lastName,
            firstName: firstName,
            password: hashPassword,
        });
        let token = jsonwebtoken_1.default.sign({ username }, "rohitkumamr");
        res.cookie("Token", token, {
            maxAge: 86400000,
            secure: true,
            sameSite: "strict",
        });
        return res.status(200).json({
            message: "user registered",
        });
    }
    catch (error) {
        return res.status(500).json({
            error: error.message,
        });
    }
});
exports.registerUserinDataBase = registerUserinDataBase;
//login user
const loginUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let { username, password } = req.body;
        let user = yield userSchema_1.default.findOne({ username: username });
        if (!user) {
            return res.status(402).json({
                message: "wrong username/password",
            });
        }
        let passwordMatch = yield bcrypt_1.default.compare(password, user.password);
        if (!passwordMatch) {
            return res.status(402).json({
                message: "wrong username/password",
            });
        }
        let token = jsonwebtoken_1.default.sign({ username }, "rohitkumamr");
        res.cookie("Token", token, {
            maxAge: 86400000,
        });
        return res.status(200).json({
            message: "login succsesfully",
        });
    }
    catch (error) {
        return res.status(500).json({
            Error: error.message,
        });
    }
});
exports.loginUser = loginUser;
//logout point
const logoutUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        res.cookie("Token", " ");
        return res.status(200).json({
            message: "Logout Succsefully",
        });
    }
    catch (error) {
        return res.status(500).json({
            error: error.message,
        });
    }
});
exports.logoutUser = logoutUser;
//creating a authenticated route
const authRoute = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        //checking is loginuser is normal user of admin
        const usertype = req.user;
        return res.status(200).json({
            message: "Authorize",
            role: usertype.role,
        });
    }
    catch (error) {
        return res.status(500).json({
            eroor: error.message,
        });
    }
});
exports.authRoute = authRoute;
//my profile details
const profileDetails = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let userToken = req.cookies.Token;
    const isAuth = jsonwebtoken_1.default.verify(userToken, "rohitkumamr");
    let loginuser = isAuth === null || isAuth === void 0 ? void 0 : isAuth.username;
    let userDetails = yield userSchema_1.default.findOne({
        username: loginuser,
    });
    return res.json({
        firstName: userDetails === null || userDetails === void 0 ? void 0 : userDetails.firstName,
        lastName: userDetails === null || userDetails === void 0 ? void 0 : userDetails.lastName,
        userName: userDetails === null || userDetails === void 0 ? void 0 : userDetails.username,
    });
});
exports.profileDetails = profileDetails;
const updateUserDetails = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let userToken = req.cookies.Token;
        const isAuth = jsonwebtoken_1.default.verify(userToken, "rohitkumamr");
        let userName = isAuth === null || isAuth === void 0 ? void 0 : isAuth.username;
        let user = yield userSchema_1.default.findOne({
            username: userName,
        });
        const { username, firstName, lastName } = req.body;
        let updateUser = yield userSchema_1.default.findByIdAndUpdate(user === null || user === void 0 ? void 0 : user._id, {
            username: username,
            firstName: firstName,
            lastName: lastName,
        }, {
            new: true,
        });
        return res.json({
            message: "user Details updated",
        });
    }
    catch (error) {
        return res.json({
            message: error.message,
        });
    }
});
exports.updateUserDetails = updateUserDetails;
//adding new blog post on database
const createBlogPost = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // Validate request body
        let { BlogTitle, BlogDescription, BlogLink, BlogImage } = req.body;
        if (!BlogTitle || !BlogDescription || !BlogLink || !BlogImage) {
            return res.status(400).json({ message: "Missing required fields" });
        }
        // Create new blog post
        const newBlog = yield BlogSchema_1.default.create({
            BlogTitle: BlogTitle,
            BlogDescription: BlogDescription,
            BlogLink: BlogLink,
            BlogImage: BlogImage,
        });
        // Return success response
        return res.status(201).json({
            message: "Blog created",
            newBlog,
        });
    }
    catch (error) {
        // Handle errors
        console.error("Error creating blog post:", error);
        return res.status(500).json({
            message: "Internal server error",
            error: error.message,
        });
    }
});
exports.createBlogPost = createBlogPost;
//creating a route from where we can get blog in json form
const GetBlogFromDb = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const BlogData = yield BlogSchema_1.default.find();
        return res.json(BlogData);
    }
    catch (error) {
        return res.json({
            Message: error.message,
        });
    }
});
exports.GetBlogFromDb = GetBlogFromDb;
