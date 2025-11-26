import express from "express";
import cors from "cors";
import authRoutes from "./routes/auth.routes";
import mongoose from "mongoose";

const app = express();

const MONGO_URI = "mongodb+srv://joshieqty17_db_user:lcf3zk61GvMD5sRo@cluster0.cmefcsr.mongodb.net/?appName=Cluster0";

mongoose.connect(MONGO_URI, {
  dbName: "sample_mflix",
})
.then(() => console.log("MongoDB connected"))
.catch((err) => console.error("MongoDB connection error:", err));

app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);

export default app;