import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '../components/Button';
import styles from '../styles/Login.module.css';

export const Login = () => {
  const [form, setForm] = useState({ email: '', password: '' });
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      console.log('Sending login request...');

      const res = await fetch('http://localhost:3000/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json', 
        },
        body: JSON.stringify({
          email: form.email.trim(),
          password: form.password,
        }),
      });

      console.log('Response status:', res.status);

      const data = await res.json();
      console.log('Response data:', data);

      if (!res.ok) {
        alert(data.error || 'Login failed');
        return;
      }

      localStorage.setItem('token', data.token);
      localStorage.setItem('user', JSON.stringify(data.user));
      alert('Login successful!');
      navigate('/dashboard');
    } catch (err: any) {
      console.error('Fetch error:', err);
      alert('Cannot reach backend. Is http://localhost:3000 running?');
    }
  };

  return (
    <div className={styles.container}>
      <title>HR Portal - Sign In</title>
      <div className={styles.card}>
        <h1>HR Portal</h1>
        <p className={styles.subtitle}>Sign in to manage employees</p>

        <form onSubmit={handleSubmit} className={styles.form}>
          <input
            type="email"
            placeholder="Email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className={styles.input}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={form.password}
            onChange={(e) => setForm({ ...form, password: e.target.value })}
            className={styles.input}
            required
          />
          <Button type="submit">Sign In</Button>
        </form>

        <p className={styles.footer}>
          Don't have an account? <Link to="/register">Register</Link>
        </p>
      </div>
    </div>
  );
};