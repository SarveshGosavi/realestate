'use client';
import styles from './Features.module.css';
import ScrollReveal from './ScrollReveal';

const Features = () => {
    const features = [
        {
            title: "Zillow Integration",
            description: "Just paste your listing URL. We handle the image scraping and data extraction instantly.",
            icon: "🏠"
        },
        {
            title: "AI Scriptwriting",
            description: "Our LLM analyzes your property details to write punchy, high-conversion captions.",
            icon: "✍️"
        },
        {
            title: "4K Cinematic Render",
            description: "Headless video rendering at 60fps with smooth transitions and professional grading.",
            icon: "🎬"
        },
        {
            title: "AI Voiceover",
            description: "Premium human-like narration from ElevenLabs to guide your potential buyers.",
            icon: "🎙️"
        },
        {
            title: "Social Ready",
            description: "Perfectly formatted for Instagram Reels, TikTok, and YouTube Shorts.",
            icon: "📱"
        },
        {
            title: "Real-time Tracking",
            description: "Watch your video production live and get notified the second it's ready.",
            icon: "⚡"
        }
    ];

    return (
        <section id="features" className={styles.features}>
            <div className="container">
                <ScrollReveal>
                    <div className={styles.header}>
                        <h2 className="heading-font">Everything you need to <br /><span className="gradient-text">sell faster</span></h2>
                        <p>Automate your property marketing with our all-in-one AI engine.</p>
                    </div>
                </ScrollReveal>

                <div className={styles.grid}>
                    {features.map((f, i) => (
                        <ScrollReveal key={i} delay={i * 100}>
                            <div className="glass-card">
                                <div className={styles.icon}>{f.icon}</div>
                                <h3>{f.title}</h3>
                                <p>{f.description}</p>
                            </div>
                        </ScrollReveal>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;
