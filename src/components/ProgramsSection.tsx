"use client";
import { useState } from "react";
import styles from "./ProgramsSection.module.css";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import Image from "next/image";

interface Area {
    number: string;
    name: string;
    nameEn?: string;
    description: string;
    descriptionEn?: string;
    highlights: string[];
    highlightsEn?: string[];
    tag: string;
    tagEn?: string;
    bgColor: string;
}

const areas: Area[] = [
    {
        number: "01",
        name: "Teología & Hermenéutica", nameEn: "Theology & Hermeneutics",
        description: "La base de todo ministerio. Aprende a leer, interpretar y proclamar la Palabra con fidelidad, profundidad y poder.", descriptionEn: "The foundation of all ministry. Learn to read, interpret and proclaim the Word with faithfulness, depth and power.",
        highlights: ["Bachillerato en Teología", "Hermenéutica Avanzada", "Homilética y Predicación", "Griego Bíblico Introductorio"],
        highlightsEn: ["Bachelor in Theology", "Advanced Hermeneutics", "Homiletics & Preaching", "Introductory Biblical Greek"],
        tag: "FUNDACIÓN", tagEn: "FOUNDATION",
        bgColor: "rgba(212, 175, 55, 0.05)",
    },
    {
        number: "02",
        name: "Plantación de Iglesias", nameEn: "Church Planting",
        description: "Visión, estrategia y fe para fundar comunidades de fe transformadoras. Del sueño al movimiento.", descriptionEn: "Vision, strategy and faith to found transformative faith communities. From dream to movement.",
        highlights: ["Estrategia Misionera", "Liderazgo Apostólico", "Obra Social y Comunidad", "Finanzas para el Ministerio"],
        highlightsEn: ["Missionary Strategy", "Apostolic Leadership", "Social Work & Community", "Ministry Finances"],
        tag: "EXPANSIÓN", tagEn: "EXPANSION",
        bgColor: "rgba(100, 150, 255, 0.04)",
    },
    {
        number: "03",
        name: "Formación Musical", nameEn: "Musical Training",
        description: "Como parte integral de tu proceso, desarrollarás habilidades musicales básicas para servir y adorar en tu iglesia local.", descriptionEn: "As an integral part of your process, you will develop basic musical skills to serve and worship in your local church.",
        highlights: ["Piano Práctico", "Guitarra Acústica y Eléctrica", "Técnica Vocal", "Batería y Percusión"],
        highlightsEn: ["Practical Piano", "Acoustic & Electric Guitar", "Vocal Technique", "Drums & Percussion"],
        tag: "HABILIDADES", tagEn: "SKILLS",
        bgColor: "rgba(180, 83, 9, 0.05)",
    },
    {
        number: "04",
        name: "Consejería Bíblica", nameEn: "Biblical Counseling",
        description: "El ministerio de restaurar almas. Forma consejeros con herramientas psicológicas y raíces profundamente bíblicas.", descriptionEn: "The ministry of restoring souls. Train counselors with psychological tools and deeply biblical roots.",
        highlights: ["Psicología Pastoral", "Trauma y Sanidad Interior", "Consejería Pre-matrimonial", "Ética Ministerial"],
        highlightsEn: ["Pastoral Psychology", "Trauma & Inner Healing", "Pre-marital Counseling", "Ministerial Ethics"],
        tag: "RESTAURACIÓN", tagEn: "RESTORATION",
        bgColor: "rgba(52, 211, 153, 0.04)",
    },
    {
        number: "05",
        name: "Misiones & Evangelismo", nameEn: "Missions & Evangelism",
        description: "Ve hasta lo último de la tierra. Preparación integral para evangelismo transcultural y plantación de misiones.", descriptionEn: "Go to the ends of the earth. Comprehensive preparation for cross-cultural evangelism and mission planting.",
        highlights: ["Misiones Transculturales", "Lingüística Aplicada", "Evangelismo Creativo", "Sostén y Vida en el Campo"],
        highlightsEn: ["Cross-cultural Missions", "Applied Linguistics", "Creative Evangelism", "Support & Field Life"],
        tag: "MOVIMIENTO", tagEn: "MOVEMENT",
        bgColor: "rgba(212, 100, 55, 0.04)",
    },
];

export default function ProgramsSection() {
    const [active, setActive] = useState(0);
    const { t } = useLanguage();

    return (
        <section className={styles.section}>
            <div className={styles.leftGlow} />
            <div className={styles.container}>
                <header className={styles.header}>
                    <span className={styles.eyebrow}>{t("prog_eyebrow", "CURRÍCULO INTEGRAL", "COMPREHENSIVE CURRICULUM")}</span>
                    <h2 className={styles.title}>
                        {t("prog_title", "Un vistazo a", "A glimpse of")} <em>{t("prog_title_2", "nuestro currículo", "our curriculum")}</em>
                    </h2>
                </header>

                <div className={styles.body}>
                    {/* Left: Program List */}
                    <nav className={styles.list} role="tablist" aria-label="Áreas curriculares">
                        {areas.map((p, i) => (
                            <button
                                key={i}
                                role="tab"
                                id={`tab-${i}`}
                                aria-selected={active === i}
                                aria-controls={`panel-${i}`}
                                className={`${styles.listItem} ${active === i ? styles.listItemActive : ''}`}
                                onClick={() => setActive(i)}
                            >
                                <span className={styles.listNumber}>{p.number}</span>
                                <div className={styles.listContent}>
                                    <div className={styles.listTag}>{t(`area_tag_${i}`, p.tag, p.tagEn)}</div>
                                    <div className={styles.listName}>{t(`area_name_${i}`, p.name, p.nameEn)}</div>
                                </div>
                                <span className={styles.listArrow}>→</span>
                            </button>
                        ))}
                    </nav>

                    {/* Right: Program Detail */}
                    <div
                        className={styles.detail}
                        role="tabpanel"
                        id={`panel-${active}`}
                        aria-labelledby={`tab-${active}`}
                    >
                        <Image
                            src="http://sebibe.org/wp-content/uploads/2026/03/INSTALACIONES.jpeg"
                            alt="Fondo de programa"
                            fill
                            className={styles.detailBg}
                            sizes="(max-width: 900px) 100vw, 60vw"
                        />
                        <div className={styles.detailInner} key={active}>
                            <div className={styles.detailTag}>{t(`area_tag_${active}`, areas[active].tag, areas[active].tagEn)}</div>
                            <h3 className={styles.detailName}>{t(`area_name_${active}`, areas[active].name, areas[active].nameEn)}</h3>
                            <p className={styles.detailDesc}>{t(`area_desc_${active}`, areas[active].description, areas[active].descriptionEn)}</p>
                            <div className={styles.highlights}>
                                {areas[active].highlights.map((h, i) => {
                                    const hEn = areas[active].highlightsEn ? areas[active].highlightsEn[i] : h;
                                    return (
                                        <div key={i} className={styles.highlight}>
                                            <span className={styles.checkmark}>✦</span> {t(`area_hilite_${active}_${i}`, h, hEn)}
                                        </div>
                                    );
                                })}
                            </div>
                            <div className={styles.detailFooter}>
                                <div className={styles.duration}>
                                    <span className={styles.durationLabel}>{t("prog_dur_label", "Duración del Programa", "Program Duration")}</span>
                                    <span className={styles.durationValue}>{t("prog_dur_1", "3 años", "3 years")}</span>
                                    <span className={styles.durationSub}>{t("prog_dur_2", "2 Años Residencial + 1 Año Prácticas Locales", "2 Years Residential + 1 Year Local Practice")}</span>
                                </div>
                                <Link href="https://wa.me/573144787072" className={styles.detailCta}>
                                    {t("prog_apply", "Aplicar ahora", "Apply now")} <span>→</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
