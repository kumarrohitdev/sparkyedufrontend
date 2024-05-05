import express from "express"
import {GetBlogFromDb, authRoute, createBlogPost, loginUser, logoutUser, profileDetails, registerUserinDataBase, updateUserDetails } from "../controller/usercontroller"
import { isAuthenticated } from "../middleware/IsAuthenticated"
export const router=express.Router()

router.route("/register").post(registerUserinDataBase)
router.route("/login").post(loginUser)
router.route("/logout").get(logoutUser)
router.route("/auth").get(isAuthenticated,authRoute)
router.route("/profile").get(isAuthenticated,profileDetails)
router.route("/update").post(isAuthenticated,updateUserDetails)
router.route("/createBlog").post(isAuthenticated,createBlogPost);
router.route("/blogdata").get(GetBlogFromDb)


