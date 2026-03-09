"use client";
import { useState } from "react";
import styles from "./FacultySection.module.css";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
interface Faculty {
    name: string;
    title: string; titleEn?: string;
    subject: string; subjectEn?: string;
    image: string;
    bio: string; bioEn?: string;
}

const faculty: Faculty[] = [
    {
        name: "Dr. Samuel Torres",
        title: "Doctor en Teología", titleEn: "Doctor of Theology",
        subject: "Hermenéutica Bíblica", subjectEn: "Biblical Hermeneutics",
        image: "https://api.dicebear.com/7.x/notionists/svg?seed=Samuel&backgroundColor=0f172a&size=200",
        bio: "Doctor en Teología con 20 años formando líderes transformados por la Palabra.", bioEn: "Doctor of Theology with 20 years shaping leaders transformed by the Word."
    },
    {
        name: "Pastora Gracia Mora",
        title: "Máster en Misiones", titleEn: "Master of Missions",
        subject: "Plantación de Iglesias", subjectEn: "Church Planting",
        image: "https://api.dicebear.com/7.x/notionists/svg?seed=Gracia&backgroundColor=0f172a&size=200",
        bio: "Misionera con más de 15 años de experiencia en el campo de la plantación transcultural.", bioEn: "Missionary with over 15 years of experience in the field of cross-cultural church planting."
    },
    {
        name: "Ps. Marcos Vidal",
        title: "Licenciado en Música Sacra", titleEn: "Bachelor of Sacred Music",
        subject: "Adoración & Alabanza", subjectEn: "Worship & Praise",
        image: "https://api.dicebear.com/7.x/notionists/svg?seed=Marcos&backgroundColor=0f172a&size=200",
        bio: "Músico y compositor, forma adoradores con excelencia técnica y profundidad espiritual.", bioEn: "Musician and composer, training worshipers with technical excellence and spiritual depth."
    },
    {
        name: "Lic. Ruth Espinoza",
        title: "Consejera Clínica Pastoral", titleEn: "Pastoral Clinical Counselor",
        subject: "Consejería Bíblica", subjectEn: "Biblical Counseling",
        image: "https://api.dicebear.com/7.x/notionists/svg?seed=Ruth&backgroundColor=0f172a&size=200",
        bio: "Especialista en restauración emocional y acompañamiento pastoral integral.", bioEn: "Specialist in emotional restoration and comprehensive pastoral guidance."
    },
    {
        name: "Dr. Felipe Ramos",
        title: "Doctor en Ministerio", titleEn: "Doctor of Ministry",
        subject: "Liderazgo & Visión", subjectEn: "Leadership & Vision",
        image: "https://api.dicebear.com/7.x/notionists/svg?seed=Felipe&backgroundColor=0f172a&size=200",
        bio: "Apasionado por levantar la próxima generación de líderes con carácter y unción.", bioEn: "Passionate about raising the next generation of leaders with character and anointing."
    },
];


export default function FacultySection() {
    const { t } = useLanguage();
    const [active, setActive] = useState<number | null>(null);

    return (
        <section className={styles.section}>
            <div className={styles.topGradient} />
            <div className={styles.container}>
                <div className={styles.header}>
                    <span className={styles.eyebrow}>{t("fac_eyebrow", "QUIÉNES NOS GUÍAN", "WHO GUIDES US")}</span>
                    <h2 className={styles.title}>
                        {t("fac_title_1", "Maestros de", "Teachers of")} <em>{t("fac_title_2", "Excelencia", "Excellence")}</em>
                    </h2>
                    <p className={styles.subtitle}>
                        {t("fac_desc", "Nuestros profesores no solo enseñan la Palabra — la encarnan. Cada clase es una experiencia de mentoría transformadora.", "Our teachers not only teach the Word—they embody it. Every class is an experience of transformative mentoring.")}
                    </p>
                </div>

                <div className={styles.track}>
                    {faculty.map((f, i) => (
                        <div
                            key={i}
                            className={`${styles.card} ${active === i ? styles.cardActive : ''}`}
                            onClick={() => setActive(active === i ? null : i)}
                            onMouseEnter={() => setActive(i)}
                            onMouseLeave={() => setActive(null)}
                        >
                            <div className={styles.imageWrap}>
                                <Image
                                    src={f.image}
                                    alt={f.name}
                                    width={200}
                                    height={200}
                                    className={styles.avatar}
                                />
                                <div className={styles.glowRing} />
                            </div>
                            <div className={styles.info}>
                                <div className={styles.subject}>{t(`fac_subj_${i}`, f.subject, f.subjectEn)}</div>
                                <div className={styles.name}>{f.name}</div>
                                <div className={styles.facultyTitle}>{t(`fac_title_${i}`, f.title, f.titleEn)}</div>
                                <p className={styles.bio}>{t(`fac_bio_${i}`, f.bio, f.bioEn)}</p>
                            </div>
                            <div className={styles.cardOverlay} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
