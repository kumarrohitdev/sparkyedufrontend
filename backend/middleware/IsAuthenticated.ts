import jwt, { TokenExpiredError, JsonWebTokenError } from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";
import User from "../module/userSchema";

interface AuthenticatedRequest extends Request {
  user?: any;
}
export const isAuthenticated = async (
  req: AuthenticatedRequest,
  res: Response,
  next: NextFunction
) => {
  try {
    const token = req.cookies.Token;
    if (!token) {
      return res
        .status(401)
        .json({ error: "Unauthorized", message: "Token not provided" });
    }

    const isAuth = jwt.verify(token, "rohitkumamr") as { username: string };
    const user = await User.findOne({ username: isAuth.username });

    if (!user) {
      return res.status(401).json({
        error: "Unauthorized",
        message: "User not found in database",
        expiredToken: true,
      });
    }

    req.user = user;

    next();
  } catch (error) {
    if (error instanceof TokenExpiredError) {
      return res
        .status(401)
        .json({ error: "Unauthorized", message: "Token expired" });
    } else if (error instanceof JsonWebTokenError) {
      return res
        .status(401)
        .json({ error: "Unauthorized", message: "Invalid token" });
    } else {
      next();
    }
  }
};
