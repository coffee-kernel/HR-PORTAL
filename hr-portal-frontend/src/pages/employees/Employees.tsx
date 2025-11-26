import { Layout } from "../../layout/Layout";
import styles from "../../styles/Employees.module.css";

export const Employees = () => {
  return (
    <Layout>
      <title>HR PORTAL - Employees</title>
      <h1 className={styles.title}>HR Portal - Employees</h1>
      
      <div className={styles.grid}>
        <div className={styles.card}>
            <h3>Total Employees</h3>
            <p className={styles.number}>200</p>
        </div>
      </div>

    </Layout>
  );
};
