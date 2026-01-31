import styles from './Pricing.module.css';

const Pricing = () => {
    const plans = [
        {
            name: "Starter",
            price: "$19",
            period: "/video",
            features: [
                "1 HD Video Credit",
                "AI Scriptwriting",
                "Standard Background Music",
                "24-hour Support"
            ],
            cta: "Pay As You Go",
            featured: false
        },
        {
            name: "Professional",
            price: "$39",
            period: "/month",
            features: [
                "3 4K Video Credits",
                "AI Voiceover Included",
                "Remove Watermark",
                "Premium Music Library"
            ],
            cta: "Start Free Trial",
            featured: true
        },
        {
            name: "Business",
            price: "$99",
            period: "/month",
            features: [
                "10 4K Video Credits",
                "Multi-user Access",
                "Custom Branding",
                "Priority Rendering"
            ],
            cta: "Get Business",
            featured: false
        }
    ];

    return (
        <section id="pricing" className={styles.pricing}>
            <div className="container">
                <div className={styles.header}>
                    <h2 className="heading-font">Simple, <span className="gradient-text">transparent</span> pricing</h2>
                    <p>Choose the plan that fits your listing volume.</p>
                </div>

                <div className={styles.grid}>
                    {plans.map((plan, i) => (
                        <div key={i} className={`${plan.featured ? styles.featured : 'glass-card'}`}>
                            <h3>{plan.name}</h3>
                            <div className={styles.price}>
                                <span className={styles.amount}>{plan.price}</span>
                                <span className={styles.period}>{plan.period}</span>
                            </div>
                            <ul className={styles.featureList}>
                                {plan.features.map((f, j) => (
                                    <li key={j}>✅ {f}</li>
                                ))}
                            </ul>
                            <button className={plan.featured ? 'btn-primary' : 'btn-primary'} style={{ width: '100%', marginTop: '2rem', background: plan.featured ? 'var(--gradient-main)' : 'rgba(255,255,255,0.05)', border: plan.featured ? 'none' : '1px solid var(--glass-border)' }}>
                                {plan.cta}
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Pricing;
