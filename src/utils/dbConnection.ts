import mongoose from "mongoose";

require("dotenv").config({ path: "MONGODB_URI" });

mongoose.set("strictQuery", false);

const connectDB = async () =>
  mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost:27017");

export default connectDB;
