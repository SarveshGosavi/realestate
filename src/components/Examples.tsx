'use client';

import { useState, useRef } from 'react';
import styles from './Examples.module.css';
import ScrollReveal from './ScrollReveal';

const Examples = () => {
    const [playingIndex, setPlayingIndex] = useState<number | null>(null);
    const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

    const examples = [
        {
            title: "Lao Ridge Paradise",
            location: "Honolulu, Hawaii",
            video: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
            poster: "/hero-bg.png",
            caption: "Imagine waking up to <highlight>breathtaking ocean views</highlight> every morning",
            price: "$8,500,000",
            beds: "5",
            baths: "6"
        },
        {
            title: "The Timber House",
            location: "Scottsdale, Arizona",
            video: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
            poster: "/interior.png",
            caption: "Experience <highlight>tranquil, natural desert</highlight> living at its finest",
            price: "$3,200,000",
            beds: "4",
            baths: "4.5"
        },
        {
            title: "Ocean Frame",
            location: "Beverly Hills, CA",
            video: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
            poster: "/mansion.png",
            caption: "Discover <highlight>timeless elegance</highlight> in exclusive Trousdale",
            price: "$12,900,000",
            beds: "6",
            baths: "8"
        },
        {
            title: "Cascade Overlook",
            location: "Midway, Utah",
            video: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
            poster: "/beachfront.png",
            caption: "Your private <highlight>mountain sanctuary</highlight> awaits",
            price: "$4,750,000",
            beds: "5",
            baths: "5.5"
        },
        {
            title: "Lely Light",
            location: "Naples, FL",
            video: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4",
            poster: "/mountain.png",
            caption: "Embrace <highlight>coastal luxury</highlight> in paradise",
            price: "$6,100,000",
            beds: "4",
            baths: "5"
        },
        {
            title: "The View Estate",
            location: "Beverly Hills, CA",
            video: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4",
            poster: "/penthouse.png",
            caption: "Live above it all with <highlight>panoramic city views</highlight>",
            price: "$15,500,000",
            beds: "7",
            baths: "9"
        }
    ];

    const handleVideoClick = (index: number) => {
        const video = videoRefs.current[index];
        if (!video) return;

        if (playingIndex === index) {
            // Pause the current video
            video.pause();
            setPlayingIndex(null);
        } else {
            // Pause any currently playing video
            if (playingIndex !== null && videoRefs.current[playingIndex]) {
                videoRefs.current[playingIndex]?.pause();
            }
            // Play the clicked video
            video.play();
            setPlayingIndex(index);
        }
    };

    return (
        <section id="examples" className={styles.examples}>
            <div className="container">
                <ScrollReveal>
                    <div className={styles.header}>
                        <h2 className="heading-font">See what your <br /><span className="gradient-text">listings could look like</span></h2>
                        <p>Join thousands of agents using TourSpace to sell properties faster.</p>
                    </div>
                </ScrollReveal>

                <div className={styles.grid}>
                    {examples.map((ex, i) => (
                        <ScrollReveal key={i} delay={i * 100}>
                            <div className={styles.card}>
                                <div
                                    className={styles.imageWrapper}
                                    onClick={() => handleVideoClick(i)}
                                >
                                    <video
                                        ref={(el) => { videoRefs.current[i] = el; }}
                                        className={styles.image}
                                        poster={ex.poster}
                                        muted
                                        loop
                                        playsInline
                                        preload="metadata"
                                    >
                                        <source src={ex.video} type="video/mp4" />
                                        Your browser does not support the video tag.
                                    </video>

                                    {/* AI Avatar Overlay */}
                                    <div className={styles.avatarOverlay}>
                                        <img src="/ai-avatar.png" alt="AI Agent" />
                                    </div>

                                    {/* Text Caption Overlay - Shows when playing */}
                                    {playingIndex === i && (
                                        <div className={styles.textOverlay}>
                                            <p dangerouslySetInnerHTML={{
                                                __html: ex.caption.replace(
                                                    /<highlight>(.*?)<\/highlight>/g,
                                                    '<span class="' + styles.highlightedText + '">$1</span>'
                                                )
                                            }} />
                                        </div>
                                    )}

                                    {/* Property Details Badge - Shows on hover */}
                                    <div className={styles.propertyBadge}>
                                        <span className={styles.price}>{ex.price}</span>
                                        <span className={styles.details}>{ex.beds} beds • {ex.baths} baths</span>
                                    </div>

                                    {/* Play Button Overlay */}
                                    <div
                                        className={styles.playOverlay}
                                        style={{ opacity: playingIndex === i ? 0 : 1 }}
                                    >
                                        <div className={styles.playButton}>
                                            <svg viewBox="0 0 24 24" fill="currentColor">
                                                <path d="M8 5v14l11-7z" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                                <div className={styles.info}>
                                    <h3>{ex.title}</h3>
                                    <p>{ex.location}</p>
                                </div>
                            </div>
                        </ScrollReveal>
                    ))}
                </div>

                <div className={styles.cta}>
                    <button className="btn-primary">Get Started</button>
                </div>
            </div>
        </section>
    );
};

export default Examples;
