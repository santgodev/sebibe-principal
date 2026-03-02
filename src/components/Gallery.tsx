"use client";
/* eslint-disable @next/next/no-img-element */
import styles from "./Gallery.module.css";
import { useScrollReveal } from "@/hooks/useScrollReveal";

// Using real SEBIBE images for emotional impact
const images = [
    { src: "https://sebibe.org/wp-content/uploads/2024/01/MG_6380-2048x1365.jpg", alt: "Celebración y Logro" },
    { src: "https://sebibe.org/wp-content/uploads/2025/09/IMG_1223-scaled.jpg", alt: "Adoración Profunda" },
    { src: "https://sebibe.org/wp-content/uploads/2024/01/MG_6486-2048x1365.jpg", alt: "Amistad Real" },
    { src: "https://sebibe.org/wp-content/uploads/2025/09/IMG_1226-scaled.jpg", alt: "Momentos de Silencio" },
    { src: "https://sebibe.org/wp-content/uploads/2024/01/DSC_0025-2048x1365.jpg", alt: "Servicio" },
];

export default function Gallery() {
    const { ref, isVisible } = useScrollReveal();

    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <div ref={ref} className={`${styles.header} ${isVisible ? 'scroll-reveal visible' : 'scroll-reveal'}`}>
                    <h2 className={styles.title}>Momentos Reales</h2>
                    <p className={styles.subtitle}>
                        Instantes que capturan nuestra esencia. Sin filtros, sin poses. Solo vida compartida.
                    </p>
                </div>

                <div className={styles.grid}>
                    {images.map((img, index) => (
                        <div key={index} className={styles.item}>
                            <img src={img.src} alt={img.alt} className={styles.image} loading="lazy" />
                            <div className={styles.info}>
                                <span className={styles.caption}>{img.alt}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
