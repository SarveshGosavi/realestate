import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Examples from "@/components/Examples";
import Pricing from "@/components/Pricing";
import Link from "next/link";

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
          background: 'linear-gradient(var(--primary-glow), var(--secondary-glow))',
          border: '1px solid var(--glass-border)'
        }}>
          <h2 className="heading-font" style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>
            Ready to <span className="gradient-text">automate</span> your marketing?
          </h2>
          <p style={{ color: 'var(--text-muted)', marginBottom: '2.5rem', fontSize: '1.1rem' }}>
            First 3 videos are on us. No credit card required.
          </p>
          <Link href="/generate" className="btn-primary" style={{ display: 'inline-block', padding: '1rem 3rem', fontSize: '1.1rem', textDecoration: 'none' }}>
            Get Started Free
          </Link>
        </div>
      </section>

    </>
  );
}
