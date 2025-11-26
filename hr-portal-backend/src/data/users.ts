import bcrypt from "bcrypt";

const hashedPassword = bcrypt.hashSync("admin", 10);

export const users = [
    {
        id: 1,
        email: "admin@gmail.com",
        password: hashedPassword,
        name: "Admin User",
        role: "Administrator"
    }
];