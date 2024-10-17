import { User } from "../Model/User.model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const Register = async (req, res) => {
  try {
    const { username, password, email, role } = req.body;
    if (!username || !password || !email || !role) {
      return res.status(400).json({ message: "All Field Are Required" });
    }
    const user = await User.findOne({ email });
    const Hashedpassword = await bcrypt.hash(password, 10);
    if (user) {
      return res.status(400).json({ message: "User Already Exists" });
    }
    const newUser = await User.create({
      username,
      password: Hashedpassword,
      email,
      role,
    });
    return res.status(200).json({ message: "Registration Successfull" });
  } catch (error) {
    console.log("error in Register", error);
    return res.status(500).json({ message: "Internal Sever Error" });
  }
};
export const Login = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ message: "All Field Are Required" });
    }
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "wrong Email or Password " });
    }
    const Ismatch = await bcrypt.compare(password, user.password);
    const token = jwt.sign({ user: user._id }, process.env.JWT_KEY);
    return res.status(200).json({
      message: "Login Successfully",
      token,
      user: { role: user.role, name: user.username, email: user.email },
    });
  } catch (error) {
    console.log("error in Login", error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};
