import Link from 'next/link';
import styles from './Navbar.module.css';

const Navbar = () => {
  return (
    <nav className={`${styles.nav} glass`}>
      <div className={`${styles.container} container`}>
        <div className={styles.logo}>
          <Link href="/">
            <span className="gradient-text">Realestate</span>
          </Link>
        </div>

        <div className={styles.links}>
          <Link href="/">Home</Link>
          <Link href="#features">Features</Link>
          <Link href="#examples">Examples</Link>
          <Link href="#pricing">Pricing</Link>
          <Link href="#about">About</Link>
        </div>

        <div className={styles.cta}>
          <Link href="/signin" className="btn-primary">Sign In</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
