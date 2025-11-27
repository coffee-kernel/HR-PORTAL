import axios from "axios";

export interface Employee {
  _id?: string;
  name: string;
  department: string;
  email: string;
  position: string;
  status: "active" | "inactive" | "on leave";
}

// Backend runs on port 3000
const API_URL = "http://localhost:3000/api/employees";

export const getEmployees = async (): Promise<Employee[]> => {
  const res = await axios.get(API_URL);
  return res.data;
};

export const createEmployee = async (employee: Employee): Promise<Employee> => {
  const res = await axios.post(API_URL, employee);
  return res.data;
};
