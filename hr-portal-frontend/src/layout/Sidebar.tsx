import { useState } from "react";
import { Link } from "react-router-dom";
import { MdDashboard, MdPeople, MdPolicy, MdSettings, MdMenu, MdLogout } from "react-icons/md";
import { useNavigate, useLocation } from "react-router-dom";
import styles from "../styles/Sidebar.module.css";

export const Sidebar = () => {
  const [open, setOpen] = useState (false);

  const location = useLocation();
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <>
      <button className={styles.hamburger}
        onClick={() => setOpen(!open)}>
          <MdMenu size={28} />
        </button>

      <aside className={`${styles.sidebar} ${open ? styles.open : ""}`}>
        <h2 className={styles.logo}>HR Portal</h2>
        
        <nav className={styles.menu}>
          <Link to="/dashboard" className={location.pathname === "/dashboard" ? styles.active : ""}>
            <MdDashboard size={20} />
            <span>Dashboard</span>
          </Link>

          <Link to="/employees" className={location.pathname.startsWith("/employees") ? styles.active : ""}>
            <MdPeople size={20} />
            <span>Employees</span>
          </Link>

          <Link to="/policies" className={location.pathname.startsWith("/policies") ? styles.active : ""}>
            <MdPolicy size={20} />
            <span>Policies</span>
          </Link>

          <Link to="/settings" className={location.pathname === "/settings" ? styles.active : ""}>
            <MdSettings size={20} />
            <span>Settings</span>
          </Link>
        </nav>

        {/* LOGOUT BUTTON */}
        <div className={styles.logoutSection}>
          <button className={styles.logoutBtn} onClick={logout}>
            <MdLogout size={20} />
            <span>Logout</span>
          </button>
        </div>
      </aside>
    </>
  );
};
