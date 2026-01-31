import styles from './Hero.module.css';

const Hero = () => {
    return (
        <section className={styles.hero}>
            <div className={`${styles.container} container`}>
                <div className={styles.content}>
                    <h1 className={styles.title}>
                        The Future of <br />
                        <span className="gradient-text">Realestate Video</span>
                    </h1>
                    <p className={styles.subtitle}>
                        Professional, cinematic property videos from a simple link.
                        No equipment, no editing, no waiting.
                    </p>

                    <div className={`${styles.inputWrapper} glass`}>
                        <input
                            type="text"
                            placeholder="Paste Zillow or Redfin link here..."
                            className={styles.input}
                        />
                        <button className="btn-primary">Generate Video</button>
                    </div>

                    <div className={styles.badges}>
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
