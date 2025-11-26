import mongoose from "mongoose";

// MongoDB User interface
export interface IUser extends mongoose.Document {
  name: string;
  email: string;
  password: string;
}

// MongoDB User model
const User = mongoose.models.User || mongoose.model<IUser>(
  "User",
  new mongoose.Schema<IUser>({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
  })
);

export default User;
