import mongoose from "mongoose";

export default async function connectDB(dbConnectionUrl: string) {
  mongoose.set("strictQuery", false);

  try {
    await mongoose.connect(dbConnectionUrl);
    console.log("Database connected");
  } catch (error) {
    throw error;
  }
}
