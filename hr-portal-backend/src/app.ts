import express from "express";
import cors from "cors";
import authRoutes from "./routes/auth.routes";
import employeeRoutes from "./routes/employee.route";
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
app.use("/api/employees", employeeRoutes);

export default app;