import { MdAccessibility, MdLanguage, MdSecurity, MdSettings } from "react-icons/md";
import { Layout } from "../../layout/Layout";
import styles from "../../styles/Settings.module.css";

export const Settings = () => {
  return (
    <Layout>
      <title>HR PORTAL - Settings</title>
      <h1 className={styles.title}>HR Portal - Settings</h1>
      
      <div className={styles.grid}>
        <div className={styles.card}>
            <h3>Account Settings</h3>
            <div className={styles.iconWrapper}>
                <MdSettings size={65} />
            </div>
        </div>

        <div className={styles.card}>
            <h3>Security</h3>
            <div className={styles.iconWrapper}>
                <MdSecurity size={65} />
            </div>
        </div>

        <div className={styles.card}>
            <h3>Language</h3>
            <div className={styles.iconWrapper}>
                <MdLanguage size={65} />
            </div>
        </div>

        <div className={styles.card}>
            <h3>Accessibility</h3>
            <div className={styles.iconWrapper}>
                <MdAccessibility size={65} />
            </div>
        </div>
      </div>

    </Layout>
  );
};
