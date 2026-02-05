'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import styles from './Hero.module.css';

const Hero = () => {
    const [url, setUrl] = useState('');
    const router = useRouter();

    const handleGenerate = () => {
        if (!url) return;
        router.push(`/generate?url=${encodeURIComponent(url)}`);
    };

    return (
        <section className={styles.hero}>
            <div className={`${styles.container} container`}>
                <div className={styles.content}>
                    <h1 className={`${styles.title} ${styles.animateIn}`}>
                        The Future of <br />
                        <span className="gradient-text">Realestate Video</span>
                    </h1>
                    <p className={`${styles.subtitle} ${styles.animateIn} ${styles.delay1}`}>
                        Professional, cinematic property videos from a simple link.
                        No equipment, no editing, no waiting.
                    </p>

                    <div className={`${styles.inputWrapper} glass ${styles.animateIn} ${styles.delay2}`}>
                        <input
                            type="text"
                            placeholder="Paste Zillow or Redfin link here..."
                            className={styles.input}
                            value={url}
                            onChange={(e) => setUrl(e.target.value)}
                        />
                        <button className="btn-primary" onClick={handleGenerate}>Generate Video</button>
                    </div>

                    <div className={`${styles.badges} ${styles.animateIn} ${styles.delay3}`}>
                        <span className={styles.badge}>✨ Starts at $19</span>
                        <span className={styles.badge}>⏱ 4 Minute Generation</span>
                        <span className={styles.badge}>🎬 4K Resolution</span>
                    </div>
                </div>

                {/* Floating elements for visual interest */}
                <div className={styles.floatingImage1}>
                    <img src="/interior.png" alt="Modern Interior" />
                </div>
                <div className={styles.floatingImage2}>
                    <img src="/kitchen.png" alt="Luxury Kitchen" />
                </div>
                <div className={styles.glow1}></div>
                <div className={styles.glow2}></div>
            </div>
        </section>
    );
};

export default Hero;
