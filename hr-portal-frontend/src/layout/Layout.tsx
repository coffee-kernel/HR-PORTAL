import { Sidebar } from "./Sidebar";
import { Navbar } from "./Navbar";
import styles from "../styles/Dashboard.module.css";

type LayoutProps = {
  children: React.ReactNode;
};

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div className={styles.container}>
      <Sidebar />
      <div className={styles.mainContent}>
        <Navbar />
        <div className={styles.pageContent}>
          {children}
        </div>
      </div>
    </div>
  );
};
