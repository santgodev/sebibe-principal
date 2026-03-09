"use client";
import styles from "./Gallery.module.css";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useLanguage } from "@/context/LanguageContext";
import Image from "next/image";

// Using real SEBIBE images for emotional impact
const images = [
    { src: "http://sebibe.org/wp-content/uploads/2026/03/IMG_2111-scaled.jpg", alt: "Comunidad", altEn: "Community" },
    { src: "http://sebibe.org/wp-content/uploads/2026/03/MG_3653l-scaled.jpg", alt: "Adoración", altEn: "Worship" },
    { src: "http://sebibe.org/wp-content/uploads/2026/03/20240610121131_IMG_4503.jpg", alt: "Estudio", altEn: "Study" },
    { src: "http://sebibe.org/wp-content/uploads/2026/03/IMG_4038-scaled.jpg", alt: "Amistad", altEn: "Friendship" },
    { src: "http://sebibe.org/wp-content/uploads/2026/03/MG_3653-scaled.jpg", alt: "Servicio", altEn: "Service" },
    { src: "http://sebibe.org/wp-content/uploads/2025/09/1.png", alt: "Graduación", altEn: "Graduation" },
];

export default function Gallery() {
    const { t } = useLanguage();
    const { ref, isVisible } = useScrollReveal();

    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <div ref={ref} className={`${styles.header} ${isVisible ? 'scroll-reveal visible' : 'scroll-reveal'}`}>
                    <h2 className={styles.title}>{t("gal_title", "Momentos Reales", "Real Moments")}</h2>
                    <p className={styles.subtitle}>
                        {t("gal_subtitle", "Instantes que capturan nuestra esencia. Sin filtros, sin poses. Solo vida compartida.", "Moments that capture our essence. No filters, no poses. Just shared life.")}
                    </p>
                </div>

                <div className={styles.grid}>
                    {images.map((img, index) => (
                        <div key={index} className={styles.item}>
                            <div className={styles.imageContainer}>
                                <Image
                                    src={img.src}
                                    alt={img.alt}
                                    fill
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    className={styles.image}
                                    loading="lazy"
                                />
                            </div>
                            <div className={styles.info}>
                                <span className={styles.caption}>{t(`gal_alt_${index}`, img.alt, img.altEn)}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
