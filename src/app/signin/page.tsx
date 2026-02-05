'use client';

import Link from 'next/link';
import styles from './signin.module.css';

export default function SignIn() {
  return (
    <div className={styles.signinContainer}>
      <div className={`${styles.card} glass-card`}>
        <div className={styles.header}>
          <h1>Welcome <span className="gradient-text">Back</span></h1>
          <p>Sign in to manage your property videos</p>
        </div>

        <form className={styles.form} onClick={(e) => e.preventDefault()}>
          <div className={styles.inputGroup}>
            <label htmlFor="email">Email Address</label>
            <input 
              type="email" 
              id="email" 
              placeholder="name@company.com" 
              required 
            />
          </div>
          
          <div className={styles.inputGroup}>
            <label htmlFor="password">Password</label>
            <input 
              type="password" 
              id="password" 
              placeholder="••••••••" 
              required 
            />
          </div>

          <button className="btn-primary" style={{ width: '100%', marginTop: '1rem' }}>
            Sign In
          </button>
        </form>

        <div className={styles.footer}>
          Don't have an account? <Link href="/signup">Sign up for free</Link>
        </div>
      </div>
    </div>
  );
}
