import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  username: { type: String, require: true },
  password: { type: String, require: true },
  email: { type: String, require: true, unique: true },
  role: { type: String, enum: ["admin", "user"], default: "user" },
});
export const User = mongoose.model("User", UserSchema);
