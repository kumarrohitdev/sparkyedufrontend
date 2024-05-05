import { Request, Response } from "express";
import User from "../module/userSchema";
import JWT from "jsonwebtoken";
import bcrypt from "bcrypt";
import BlogSchema from "../module/BlogSchema";

interface AuthenticatedRequest extends Request {
  user?: any;
}

//register a user
export const registerUserinDataBase = async (req: Request, res: Response) => {
  try {
    let { username, password, lastName, firstName } = req.body;
    let user = await User.findOne({ username: username });
    if (user) {
      return res.status(402).json({ Message: "username already exist" });
    }

    let hashPassword = await bcrypt.hash(password, 12);
    let newUser = await User.create({
      username: username,
      lastName: lastName,
      firstName: firstName,
      password: hashPassword,
    });

    let token = JWT.sign({ username }, "rohitkumamr");

    res.cookie("Token", token, {
      maxAge: 86400000,
      secure: true,
      sameSite: "strict",
    });
    return res.status(200).json({
      message: "user registered",
    });
  } catch (error: any) {
    return res.status(500).json({
      error: error.message,
    });
  }
};

//login user
export const loginUser = async (req: Request, res: Response) => {
  try {
    let { username, password } = req.body;
    let user = await User.findOne({ username: username });
    if (!user) {
      return res.status(402).json({
        message: "wrong username/password",
      });
    }

    let passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) {
      return res.status(402).json({
        message: "wrong username/password",
      });
    }

    let token = JWT.sign({ username }, "rohitkumamr");

    res.cookie("Token", token, {
      maxAge: 86400000,
    });

    return res.status(200).json({
      message: "login succsesfully",
    });
  } catch (error: any) {
    return res.status(500).json({
      Error: error.message,
    });
  }
};

//logout point
export const logoutUser = async (req: Request, res: Response) => {
  try {
    res.cookie("Token", " ");
    return res.status(200).json({
      message: "Logout Succsefully",
    });
  } catch (error: any) {
    return res.status(500).json({
      error: error.message,
    });
  }
};

//creating a authenticated route
export const authRoute = async (req: AuthenticatedRequest, res: Response) => {
  try {
    //checking is loginuser is normal user of admin
    const usertype = req.user;
    return res.status(200).json({
      message: "Authorize",
      role: usertype.role,
    });
  } catch (error: any) {
    return res.status(500).json({
      eroor: error.message,
    });
  }
};

//my profile details
export const profileDetails = async (req: Request, res: Response) => {
  let userToken = req.cookies.Token;
  const isAuth = JWT.verify(userToken, "rohitkumamr") as { username: string };
  let loginuser = isAuth?.username;
  let userDetails = await User.findOne({
    username: loginuser,
  });
  return res.json({
    firstName: userDetails?.firstName,
    lastName: userDetails?.lastName,
    userName: userDetails?.username,
  });
};

export const updateUserDetails = async (req: Request, res: Response) => {
  try {
    let userToken = req.cookies.Token;
    const isAuth = JWT.verify(userToken, "rohitkumamr") as { username: string };
    let userName = isAuth?.username;
    let user = await User.findOne({
      username: userName,
    });
    const { username, firstName, lastName } = req.body;
    let updateUser = await User.findByIdAndUpdate(
      user?._id,
      {
        username: username,
        firstName: firstName,
        lastName: lastName,
      },
      {
        new: true,
      }
    );

    return res.json({
      message: "user Details updated",
    });
  } catch (error: any) {
    return res.json({
      message: error.message,
    });
  }
};

//adding new blog post on database
export const createBlogPost = async (req: Request, res: Response) => {
  try {
    // Validate request body
    let { BlogTitle, BlogDescription, BlogLink, BlogImage } = req.body;
    if (!BlogTitle || !BlogDescription || !BlogLink || !BlogImage) {
      return res.status(400).json({ message: "Missing required fields" });
    }

    // Create new blog post
    const newBlog = await BlogSchema.create({
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
  } catch (error: any) {
    // Handle errors
    console.error("Error creating blog post:", error);
    return res.status(500).json({
      message: "Internal server error",
      error: error.message,
    });
  }
};

//creating a route from where we can get blog in json form
export const GetBlogFromDb = async (req: Request, res: Response) => {
  try {
    const BlogData = await BlogSchema.find();
    return res.json(BlogData);
  } catch (error: any) {
    return res.json({
      Message: error.message,
    });
  }
};
