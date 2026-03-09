"use client";
import styles from "./Features.module.css";
import Link from "next/link";
import Image from "next/image";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useLanguage } from "@/context/LanguageContext";

const features = [
    {
        title: "Teología", titleEn: "Theology",
        sub: "Profunda", subEn: "Deep",
        desc: "No estudiarás solo libros, estudiarás el corazón de Dios. Un rigor académico que desafía tu mente y enciende tu espíritu.", descEn: "You won't just study books, you'll study the heart of God. Academic rigor that challenges your mind and ignites your spirit.",
        img: "https://sebibe.org/wp-content/uploads/2024/01/MG_6653-2048x1365.jpg", // Classroom/Study
        link: "/programas/teologia",
    },
    {
        title: "Misiones", titleEn: "Missions",
        sub: "Globales", subEn: "Global",
        desc: "El mundo no necesita turistas, necesita mensajeros. Entrenamiento intercultural real en las fronteras de la fe.", descEn: "The world doesn't need tourists, it needs messengers. Real cross-cultural training on the frontiers of faith.",
        img: "http://sebibe.org/wp-content/uploads/2025/02/WhatsApp-Image-2025-02-10-at-7.56.56-PM.jpeg", // Mission field
        link: "/programas/misiones",
    },
    {
        title: "Comunidad", titleEn: "Community",
        sub: "Vibrante", subEn: "Vibrant",
        desc: "Más que compañeros de clase, encontrarás hermanos de batalla. Una vida comunitaria que forja carácter para siempre.", descEn: "More than classmates, you will find brothers and sisters in battle. A community life that builds character forever.",
        img: "https://sebibe.org/wp-content/uploads/2024/01/MG_6486-2048x1365.jpg", // Community/Gathering
        link: "/vida-comunitaria",
    },
];

export default function Features() {
    return (
        <section className={styles.section} id="descubre">
            <div className={styles.container}>
                <div className={styles.scrollContainer}>
                    {features.map((feature, index) => (
                        <FeatureRow key={index} feature={feature} index={index + 1} />
                    ))}
                </div>
            </div>
        </section>
    );
}

function FeatureRow({ feature, index }: { feature: any, index: number }) {
    const { ref, isVisible } = useScrollReveal();
    const { t } = useLanguage();
    const num = index < 10 ? `0${index}` : index;

    return (
        <div
            ref={ref}
            className={`${styles.featureRow} ${isVisible ? 'scroll-reveal visible' : 'scroll-reveal'}`}
        >
            <div className={styles.imageWrapper}>
                <Image
                    src={feature.img}
                    alt={t(`feature_title_${index}`, feature.title, feature.titleEn)}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className={styles.featureImage}
                    loading="lazy"
                />
            </div>

            <div className={styles.textContent}>
                <div className={styles.featureNumber}>{num}</div>
                <h2 className={styles.featureTitle}>
                    {t(`feature_title_${index}`, feature.title, feature.titleEn)} <span>{t(`feature_sub_${index}`, feature.sub, feature.subEn)}</span>
                </h2>
                <p className={styles.featureDesc}>{t(`feature_desc_${index}`, feature.desc, feature.descEn)}</p>
                <Link href={feature.link} className={styles.exploreLink}>
                    {t("explore_story", "Explorar Historia", "Explore Story")}
                </Link>
            </div>
        </div>
    )
}
