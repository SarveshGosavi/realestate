import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Examples from "@/components/Examples";
import Pricing from "@/components/Pricing";

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <Examples />
      <Pricing />

      {/* Dynamic CTA Section */}
      <section className="container">
        <div className="glass-card" style={{
          textAlign: 'center',
          padding: '4rem 2rem',
          background: 'linear-gradient(rgba(124, 58, 237, 0.1), rgba(59, 130, 246, 0.1))',
          border: '1px solid rgba(124, 58, 237, 0.2)'
        }}>
          <h2 className="heading-font" style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>
            Ready to <span className="gradient-text">automate</span> your marketing?
          </h2>
          <p style={{ color: 'var(--text-muted)', marginBottom: '2.5rem', fontSize: '1.1rem' }}>
            First 3 videos are on us. No credit card required.
          </p>
          <button className="btn-primary" style={{ padding: '1rem 3rem', fontSize: '1.1rem' }}>
            Get Started Free
          </button>
        </div>
      </section>

      <footer style={{ padding: '4rem 0', textAlign: 'center', borderTop: '1px solid var(--glass-border)', marginTop: '4rem' }}>
        <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>
          &copy; 2025 Realestate. All rights reserved.
        </p>
      </footer>
    </>
  );
}
