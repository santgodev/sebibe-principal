"use client";
import { useState, useRef, useEffect } from "react";
import styles from "./FacilitiesShowcase.module.css";
import { useLanguage } from "@/context/LanguageContext";

const facilities = [
    { es: "Ambientes de Paz", en: "Peaceful Environments", time: 0 },
    { es: "Nuestra Capilla", en: "Our Chapel", time: 8 },
    { es: "Nuestro Comedor", en: "Our Dining Hall", time: 12 },
    { es: "Espacios de Estudio", en: "Study Spaces", time: 14 },
    { es: "Nuestra Biblioteca", en: "Our Library", time: 18 },
    { es: "Vida en Comunidad", en: "Community Life", time: 20 },
    { es: "Tu futuro hogar", en: "Your future home", time: 22 },
    { es: "Prepárate para servir", en: "Prepare to serve", time: 25 },
];

export default function FacilitiesShowcase() {
    const { language, t } = useLanguage();
    const [index, setIndex] = useState(0);
    const [fade, setFade] = useState(true);
    const videoRef = useRef<HTMLVideoElement>(null);
    const lastIndexRef = useRef(0);

    const handleTimeUpdate = () => {
        if (!videoRef.current) return;
        const currentTime = videoRef.current.currentTime;

        // Find the correct index based on timestamps
        let newIndex = 0;
        for (let i = facilities.length - 1; i >= 0; i--) {
            if (currentTime >= facilities[i].time) {
                newIndex = i;
                break;
            }
        }

        // Only trigger update if the index has changed
        if (newIndex !== lastIndexRef.current) {
            lastIndexRef.current = newIndex;
            setFade(false);
            setTimeout(() => {
                setIndex(newIndex);
                setFade(true);
            }, 400); // Faster fade (400ms) to match video pace
        }
    };

    const currentText = language === "en" ? facilities[index].en : facilities[index].es;

    return (
        <section className={styles.section}>
            <div className={styles.videoWrapper}>
                <video
                    ref={videoRef}
                    src="https://sebibe.org/wp-content/uploads/2026/03/instalaciones.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                    onTimeUpdate={handleTimeUpdate}
                    className={styles.video}
                >
                    <track kind="captions" label="Español" default />
                </video>
                <div className={styles.overlay} />
            </div>

            <div className={styles.content}>
                <div className={styles.textContainer}>
                    <span className={styles.eyebrow}>{t("fac_eyebrow", "NUESTRA CASA", "OUR HOME")}</span>
                    <div className={`${styles.titleWrapper} ${fade ? styles.fadeIn : styles.fadeOut}`}>
                        <h2 className={styles.title}>{currentText}</h2>
                        <div className={styles.underline} />
                    </div>
                    <p className={styles.desc}>
                        {t("fac_desc", "Diseñado para el encuentro, el estudio y la transformación.", "Designed for encounter, study, and transformation.")}
                    </p>
                </div>
            </div>
        </section>
    );
}
