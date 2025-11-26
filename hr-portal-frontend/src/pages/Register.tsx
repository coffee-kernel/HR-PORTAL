import { useState } from 'react';
import { Link } from 'react-router-dom';
import { registerUser } from '../services/api';
import { Button } from '../components/Button';
import styles from '../styles/Register.module.css';

export const Register = () => {
  const [form, setForm] = useState({ name: '', email: '', password: '' });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const result = await registerUser(form);
      alert(result.message);
    } catch (err: any) {
      alert(err.message || "Registration failed");
    }
  };

  return (
    <div className={styles.container}>
      <title>HR Portal - Sign Up</title>
      <div className={styles.card}>
        <h1>HR Portal – Register</h1>
        <p className={styles.subtitle}>Sign up to create an account.</p>

        <form onSubmit={handleSubmit} className={styles.form}>
          <input
            placeholder="Full Name"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className={styles.input}
          />
          <input
            type="email"
            placeholder="Email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className={styles.input}
          />
          <input
            type="password"
            placeholder="Password"
            value={form.password}
            onChange={(e) => setForm({ ...form, password: e.target.value })}
            className={styles.input}
          />
          <Button type="submit">Register</Button>
        </form>

        <p className={styles.footer}>
          Have an account? <Link to="/login">Login</Link>
        </p>
      </div>
    </div>
  );
};