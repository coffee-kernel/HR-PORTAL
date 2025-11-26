import { Layout } from "../../layout/Layout";
import styles from "../../styles/Policies.module.css";

export const Policies = () => {
  return (
    <Layout>
      <title>HR PORTAL - Policies</title>
      <h1 className={styles.title}>HR Portal - Policies</h1>
      
      <div className={styles.grid}>
        <div className={styles.card}>
            <h3>Policies Updated</h3>
            <p className={styles.number}>4</p>
        </div>
      </div>

    </Layout>
  );
};
