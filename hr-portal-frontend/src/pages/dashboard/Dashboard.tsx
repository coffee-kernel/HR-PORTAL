import { Layout } from "../../layout/Layout";
import styles from "../../styles/DashboardBox.module.css";

export const Dashboard = () => {
  return (
    <Layout>
      <title>HR PORTAL - Dashboard</title>
      <h1 className={styles.title}>HR Portal Dashboard</h1>
      
      <div className={styles.grid}>
        <div className={styles.card}>
            <h3>Total Employees</h3>
            <p className={styles.number}>200</p>
        </div>

        <div className={styles.card}>
            <h3>Total Request</h3>
            <p className={styles.number}>25</p>
        </div>

        <div className={styles.card}>
            <h3>Total Pending Request</h3>
            <p className={styles.number}>5</p>
        </div>

        <div className={styles.card}>
            <h3>New Applicants</h3>
            <p className={styles.number}>46</p>
        </div>

        <div className={styles.card}>
            <h3>Policies Updated</h3>
            <p className={styles.number}>4</p>
        </div>

        <div className={styles.card}>
            <h3>Onboarding List</h3>
            <p className={styles.number}>35</p>
        </div>
      </div>

    </Layout>
  );
};
