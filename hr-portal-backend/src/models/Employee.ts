import mongoose from "mongoose";

const EmployeeSchema = new mongoose.Schema(
    {
        name: { type: String, required: true },
        email : { type: String, required: true, unique: true },
        position: { type: String, required: true },
        department: { type: String, required: true },
        status : { type: String, enum: ['active', 'inactive', 'on leave'], default: 'active' },
    },
    { timestamps: true }
);

export default mongoose.model("Employee", EmployeeSchema);