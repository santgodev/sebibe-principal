"use client";
import styles from "./Hero.module.css";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import Image from "next/image";
export default function Hero() {
    const { t } = useLanguage();
    return (
        <section className={styles.hero}>
            <div className={styles.bgWrapper}>
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className={styles.bgVideo}
                >
                    <source src="/assets/videos/hero-loop.mp4" type="video/mp4" />
                    <track kind="captions" label="Español" default />
                </video>
                <Image
                    src="/assets/images/sections/hero-main.jpg"
                    alt="Estudiantes del Seminario Bíblico Berea en un momento de comunión y estudio"
                    fill
                    priority
                    sizes="100vw"
                    className={styles.bgImage}
                />
                <div className={styles.overlay}></div>
            </div>

            <div className={styles.content}>
                <div className={styles.subtitleContainer}>
                    <div className={styles.subtitle}>{t("hero_subtitle_top") || "Seminario Bíblico Berea"}</div>
                    <div className={styles.hoverSlogan}>{t("hero_hover_slogan") || "Formación para lo Eterno y Profundo"}</div>
                </div>
                <h1 className={styles.title}>
                    {t("hero_title_1") || "Formando líderes para la"} <br />
                    <span className={styles.titleItalic}>{t("hero_title_2") || "Misión Global"}</span>
                </h1>
                <p className={styles.desc}>
                    {t("hero_desc") || "Una experiencia inmersiva de disipulado, teología y comunidad. No es solo estudiar, es ser transformado para impactar una generación."}
                </p>

                <div className={styles.actions}>
                    <Link href="https://wa.me/573144787072" className={`${styles.button} ${styles.btnPrimary}`}>
                        {t("hero_btn_1") || "Responder al Llamado"}
                    </Link>
                    <Link href="/nosotros" className={`${styles.button} ${styles.btnSecondary}`}>
                        {t("hero_btn_2") || "Conocer la Visión"}
                    </Link>
                </div>
            </div>
        </section>
    );
}
