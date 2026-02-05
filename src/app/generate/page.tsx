'use client';

import { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import styles from './generate.module.css';
import Link from 'next/link';

function GenerateContent() {
    const searchParams = useSearchParams();
    const url = searchParams.get('url') || 'your property';

    const [currentStep, setCurrentStep] = useState(0);
    const [progress, setProgress] = useState(0);

    const steps = [
        { title: "Analyzing Listing", description: "Extracting features and high-res images from Zillow.", icon: "🔍" },
        { title: "Writing Script", description: "Our LLM is crafting a high-conversion property story.", icon: "✍️" },
        { title: "Generating Voiceover", description: "Syncing professional narration with ElevenLabs.", icon: "🎙️" },
        { title: "Rendering 4K Video", description: "Applying cinematic transitions and color grading.", icon: "🎬" }
    ];

    useEffect(() => {
        if (currentStep < steps.length) {
            const timer = setTimeout(() => {
                setCurrentStep(prev => prev + 1);
            }, 3000);
            return () => clearTimeout(timer);
        }
    }, [currentStep]);

    return (
        <div className={styles.generateContainer}>
            <div className={styles.content}>
                <div className={styles.header}>
                    <h1>Creating Your <span className="gradient-text">Masterpiece</span></h1>
                    <p>Building a cinematic video for: {url}</p>
                </div>

                <div className={styles.steps}>
                    {steps.map((step, i) => {
                        const isCompleted = i < currentStep;
                        const isActive = i === currentStep;
                        const isPending = i > currentStep;

                        return (
                            <div
                                key={i}
                                className={`${styles.stepCard} glass-card ${isActive ? styles.active : ''} ${isPending ? styles.pending : ''} ${isCompleted ? styles.completed : ''}`}
                            >
                                <div className={styles.stepIcon}>
                                    {isCompleted ? <span className={styles.check}>✓</span> :
                                        isActive ? <div className={styles.spinner}></div> :
                                            <span>{step.icon}</span>}
                                </div>
                                <div className={styles.stepInfo}>
                                    <h3>{step.title}</h3>
                                    <p>{step.description}</p>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {currentStep === steps.length && (
                    <div className={styles.previewCard}>
                        <h2 className="heading-font">Your video is <span className="gradient-text">ready!</span></h2>
                        <div className={styles.videoWrapper}>
                            <video
                                src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4"
                                autoPlay
                                muted
                                loop
                                playsInline
                            />
                        </div>
                        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
                            <button className="btn-primary">Download 4K</button>
                            <Link href="/" className="btn-primary" style={{ background: 'rgba(0,0,0,0.05)', color: 'var(--text-main)', border: '1px solid var(--glass-border)' }}>
                                Back to Home
                            </Link>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default function Generate() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <GenerateContent />
        </Suspense>
    );
}
