import { useLocation } from "react-router-dom";
import styles from "../styles/Navbar.module.css";

export const Navbar = () => {
  const location = useLocation();

  const titleMap: Record<string, string> = {
    "/dashboard": "Dashboard",
    "/employees": "Employees",
    "/policies": "Policies",
    "/settings": "Settings",
  };

  const pageTitle = titleMap[location.pathname] || "HR - Portal";

  return (
    <header className={styles.navbar}>
      <div className={styles.title}>{pageTitle}</div>
    </header>
  );
};
