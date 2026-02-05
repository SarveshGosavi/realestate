import Link from 'next/link';
import styles from './Footer.module.css';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className="container">
                <div className={styles.grid}>
                    <div className={styles.brand}>
                        <Link href="/" className={styles.logo} style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
                            <img src="/logo.png" alt="TourSpace Logo" style={{ height: '32px', width: 'auto' }} />
                            <span className="heading-font" style={{ fontSize: '1.25rem', fontWeight: '800', marginLeft: '0.5rem', color: 'var(--text-main)', letterSpacing: '-0.03em' }}>TourSpace</span>
                        </Link>
                        <p>
                            Revolutionizing property marketing with AI-powered cinematic videos.
                            Sell faster, look better, and capture more leads.
                        </p>
                        <div className={styles.socials}>
                            <a href="#" className={styles.socialIcon}>𝕏</a>
                            <a href="#" className={styles.socialIcon}>📸</a>
                            <a href="#" className={styles.socialIcon}>🔗</a>
                            <a href="#" className={styles.socialIcon}>📺</a>
                        </div>
                    </div>

                    <div className={styles.column}>
                        <h4>Product</h4>
                        <ul>
                            <li><Link href="#features">Features</Link></li>
                            <li><Link href="#examples">Video Studio</Link></li>
                            <li><Link href="#pricing">Pricing</Link></li>
                            <li><Link href="/generate">Generator</Link></li>
                        </ul>
                    </div>

                    <div className={styles.column}>
                        <h4>Company</h4>
                        <ul>
                            <li><Link href="#about">About Us</Link></li>
                            <li><Link href="#">Careers</Link></li>
                            <li><Link href="#">Press Kit</Link></li>
                            <li><Link href="#">Contact</Link></li>
                        </ul>
                    </div>

                    <div className={styles.column}>
                        <h4>Resources</h4>
                        <ul>
                            <li><Link href="#">Blog</Link></li>
                            <li><Link href="#">Tutorials</Link></li>
                            <li><Link href="#">Help Center</Link></li>
                            <li><Link href="#">API Docs</Link></li>
                        </ul>
                    </div>
                </div>

                <div className={styles.bottom}>
                    <p>&copy; {new Date().getFullYear()} TourSpace. All rights reserved.</p>
                    <div className={styles.legal}>
                        <Link href="#">Privacy Policy</Link>
                        <Link href="#">Terms of Service</Link>
                        <Link href="#">Cookie Policy</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
