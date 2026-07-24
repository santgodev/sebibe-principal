"use client";
import styles from "./Gallery.module.css";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useLanguage } from "@/context/LanguageContext";
import Image from "next/image";

// Using real SEBIBE images for emotional impact
const images = [
    { src: "/assets/images/gallery/community.jpg", alt: "Comunidad", altEn: "Community" },
    { src: "/assets/images/gallery/worship.jpg", alt: "Adoración", altEn: "Worship" },
    { src: "/assets/images/gallery/study.jpg", alt: "Estudio", altEn: "Study" },
    { src: "/assets/images/gallery/friendship.jpg", alt: "Amistad", altEn: "Friendship" },
    { src: "/assets/images/gallery/service.jpg", alt: "Servicio", altEn: "Service" },
    { src: "/assets/images/gallery/graduation.png", alt: "Graduación", altEn: "Graduation" },
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
