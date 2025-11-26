import axios from "axios";

const API_URL = "http://localhost:3000/api/auth";

export interface RegisterForm {
  name: string;
  email: string;
  password: string;
}

export const registerUser = async (form: RegisterForm) => {
  try {
    const res = await axios.post(`${API_URL}/register`, form);
    return res.data;
  } catch (err: any) {
    throw new Error(err.response?.data?.error || "Registration failed");
  }
};
