"use client";
import styles from "./LocationMap.module.css";
import { useLanguage } from "@/context/LanguageContext";

export default function LocationMap() {
    const { t } = useLanguage();
    return (
        <section className={styles.section}>
            <div className={styles.mapWrapper}>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3978.868779183615!2d-74.3986791!3d4.3409192!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f055663748235%3A0x67a32403662283a0!2sSeminario%20B%C3%ADblico%20Internacional%20Berea!5e0!3m2!1ses!2sco!4v1715000000000!5m2!1ses!2sco"
                    className={styles.mapFrame}
                    allowFullScreen={true}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Ubicación SEBIBE"
                ></iframe>
                <div className={styles.overlay}>
                    <h3 className={styles.title}>{t("map_title", "Visítanos", "Visit Us")}</h3>
                    <p className={styles.address}>
                        Via Panamericana Vereda Bosachoque<br />
                        Fusagasugá – Silvania, Cundinamarca
                    </p>
                    <a
                        href="https://maps.app.goo.gl/LCFU3TjTaqVHEiGB6"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.directionsLink}
                    >
                        {t("map_link", "Cómo llegar", "Get Directions")} &rarr;
                    </a>
                </div>
            </div>
        </section>
    );
}
