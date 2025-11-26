import { Link } from 'react-router-dom';
import styles from '../../styles/NotFound.module.css';

export const NotFound = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>404</h1>
      <p className={styles.message}>Oops! Page not found.</p>
      <Link to="/login" className={styles.link}>
        Go to Login
      </Link>
    </div>
  );
};