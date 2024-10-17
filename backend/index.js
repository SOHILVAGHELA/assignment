import express from "express";
import dotenv from "dotenv";
import db from "./Database/db.js";
import UserRoute from "./Routes/User.Route.js";
import cors from "cors";
dotenv.config();
const app = express();

const port = process.env.PORT || 4040;

// middleware
app.use(express.json());
app.use(cors());
//Route
app.use("/user", UserRoute);
db()
  .then(() => {
    app.listen(port, () => console.log(`server starting on port ${port}`));
  })
  .catch((err0r) => console.log(error));
