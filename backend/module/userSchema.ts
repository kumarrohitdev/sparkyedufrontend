import mongoose from "mongoose";
import { isStrongPassword, isEmail } from "validator";

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, "Username is required"],
    minLength: [8, "Minimum length of username should be 8 characters"],
    unique: [true, "Username already exists"],
    validate: {
      validator: (value: string) => isEmail(value),
      message: "Enter a valid email address",
    },
  },
  password: {
    type: String,
    required: [true, "Password is required"],
    minLength: [8, "Minimum length of password should be 8 characters"],
    validate: {
      validator: (value: string) => isStrongPassword(value),
      message:
        "Password should be strong. It must contain at least 8 characters, including uppercase, lowercase, and special characters.",
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
  role:{
    type:String,
    require:true,
    default:"user"
  }
});

const User = mongoose.model("User", userSchema);

export default User;
