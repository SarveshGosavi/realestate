'use client';

import { useState } from 'react';
import Link from 'next/link';
import styles from './Navbar.module.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className={`${styles.nav} glass ${isMenuOpen ? styles.menuOpen : ''}`}>
      <div className={`${styles.container} container`}>
        <div className={styles.logo}>
          <Link
            href="/"
            className={styles.logo}
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          >
            <img src="/logo.png" alt="TourSpace Logo" style={{ height: '32px', width: 'auto' }} />
            <span className="heading-font" style={{ fontSize: '1.25rem', fontWeight: '800', marginLeft: '0.5rem', color: 'var(--text-main)', letterSpacing: '-0.03em' }}>TourSpace</span>
          </Link>
        </div>

        <button
          className={styles.hamburger}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <div className={styles.bar}></div>
          <div className={styles.bar}></div>
          <div className={styles.bar}></div>
        </button>

        <div className={`${styles.links} ${isMenuOpen ? styles.active : ''}`}>
          <Link href="/" onClick={() => setIsMenuOpen(false)}>Home</Link>
          <Link href="#features" onClick={() => setIsMenuOpen(false)}>Features</Link>
          <Link href="#examples" onClick={() => setIsMenuOpen(false)}>Examples</Link>
          <Link href="#pricing" onClick={() => setIsMenuOpen(false)}>Pricing</Link>
          <Link href="#about" onClick={() => setIsMenuOpen(false)}>About</Link>
          <div className={styles.mobileCta}>
            <Link href="/signin" className="btn-primary" onClick={() => setIsMenuOpen(false)}>Sign In</Link>
          </div>
        </div>

        <div className={styles.cta}>
          <Link href="/signin" className="btn-primary">Sign In</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
