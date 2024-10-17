import mongoose from "mongoose";

const db = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("DB connetected ");
  } catch (error) {
    console.log("error in db", error);
  }
};
export default db;
