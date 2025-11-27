import { Request, Response } from "express";
import Employee from "../models/Employee";

export const createEmployee = async (req: Request, res: Response) => {
    try {
        const employee = await Employee.create(req.body);
        res.status(201).json(employee);
    } catch (error) {
        res.status(500).json({ message: "Failed to save employee details.", error });
    }
};

export const getEmployees = async (req: Request, res: Response) => {
    try {
        const employees = await Employee.find();
        res.json(employees);
    } catch (error) {
        res.status(500).json({ message: "Failed to fetch employees.", error });
    }
};