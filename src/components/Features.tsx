"use client";
/* eslint-disable @next/next/no-img-element */
import styles from "./Features.module.css";
import Link from "next/link";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const features = [
    {
        title: "Teología",
        sub: "Profunda",
        desc: "No estudiarás solo libros, estudiarás el corazón de Dios. Un rigor académico que desafía tu mente y enciende tu espíritu.",
        img: "https://sebibe.org/wp-content/uploads/2024/01/MG_6653-2048x1365.jpg", // Classroom/Study
        link: "/programas/teologia",
    },
    {
        title: "Misiones",
        sub: "Globales",
        desc: "El mundo no necesita turistas, necesita mensajeros. Entrenamiento intercultural real en las fronteras de la fe.",
        img: "http://sebibe.org/wp-content/uploads/2025/02/WhatsApp-Image-2025-02-10-at-7.56.56-PM.jpeg", // Mission field
        link: "/programas/misiones",
    },
    {
        title: "Comunidad",
        sub: "Vibrante",
        desc: "Más que compañeros de clase, encontrarás hermanos de batalla. Una vida comunitaria que forja carácter para siempre.",
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
    const num = index < 10 ? `0${index}` : index;

    return (
        <div
            ref={ref}
            className={`${styles.featureRow} ${isVisible ? 'scroll-reveal visible' : 'scroll-reveal'}`}
        >
            <div className={styles.imageWrapper}>
                <img src={feature.img} alt={feature.title} className={styles.featureImage} loading="lazy" />
            </div>

            <div className={styles.textContent}>
                <div className={styles.featureNumber}>{num}</div>
                <h2 className={styles.featureTitle}>
                    {feature.title} <span>{feature.sub}</span>
                </h2>
                <p className={styles.featureDesc}>{feature.desc}</p>
                <Link href={feature.link} className={styles.exploreLink}>
                    Explorar Historia
                </Link>
            </div>
        </div>
    )
}
