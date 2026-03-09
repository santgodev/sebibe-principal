"use client";
import styles from "./Testimonials.module.css";
import { useLanguage } from "@/context/LanguageContext";
import Image from "next/image";

const testimonials = [
    {
        name: "Hébert, Luz y Caleb",
        role: "Pastores en Amazonas", roleEn: "Pastors in Amazonas",
        quote: "El SEBIBE nos ayudó a entender como Dios puede usar de diferentes maneras a las personas, nos capacitó y ayudó para venir al Amazonas a servir a las comunidades indígenas.", quoteEn: "SEBIBE helped us understand how God can use people in different ways, trained us and helped us come to the Amazon to serve indigenous communities.",
        image: "https://sebibe.org/wp-content/uploads/2024/09/Hebert-Luz-y-Caleb-1024x1024.jpg",
    },
    {
        name: "Otoniel y Noralba",
        role: "Misioneros en La Guajira", roleEn: "Missionaries in La Guajira",
        quote: "La formación teológica fue clave para nuestro ministerio transcultural.", quoteEn: "Theological training was key for our cross-cultural ministry.",
        image: "https://sebibe.org/wp-content/uploads/2024/09/Otoniel-y-Noralba-1024x1024.jpg",
    },
    {
        name: "Familia Pastoral",
        role: "Graduados 2023", roleEn: "Graduates 2023",
        quote: "Una experiencia que transformó nuestra visión del reino de Dios.", quoteEn: "An experience that transformed our vision of God's kingdom.",
        image: "https://sebibe.org/wp-content/uploads/2024/01/MG_6380-2048x1365.jpg", // Placeholder until real image
    },
    {
        name: "Juan Pérez",
        role: "Estudiante de Teología", roleEn: "Theology Student",
        quote: "Aquí encontré no solo conocimiento, sino una familia espiritual.", quoteEn: "Here I found not only knowledge, but a spiritual family.",
        image: "https://sebibe.org/wp-content/uploads/2024/01/MG_6486-2048x1365.jpg",
    },
    {
        name: "María González",
        role: "Líder de Jóvenes", roleEn: "Youth Leader",
        quote: "Las herramientas de liderazgo han sido vitales para mi servicio en la iglesia local.", quoteEn: "The leadership tools have been vital for my service in the local church.",
        image: "https://sebibe.org/wp-content/uploads/2024/01/DSC_0025-2048x1365.jpg",
    },
];

// Duplicate for infinite scroll smoothness
const marqueeTestimonials = [...testimonials, ...testimonials];

export default function Testimonials() {
    const { t } = useLanguage();
    return (
        <section className={styles.section} id="testimonios">
            <div className={styles.container}>
                <div className={styles.header}>
                    <h2 className={styles.title}>{t("testi_title", "Impacto Real", "Real Impact")}</h2>
                    <p className={styles.subtitle}>
                        {t("testi_subtitle", "Historias de vidas transformadas por la palabra y el servicio.", "Stories of lives transformed by the Word and service.")}
                    </p>
                </div>

                <div className={styles.carousel}>
                    <div className={styles.marqueeWrapper}>
                        {marqueeTestimonials.map((tItem, index) => (
                            <div key={index} className={styles.card}>
                                <p className={styles.quote}>{t(`testi_q_${index}`, tItem.quote, tItem.quoteEn)}</p>
                                <div className={styles.author}>
                                    <Image
                                        src={tItem.image}
                                        alt={tItem.name}
                                        width={48}
                                        height={48}
                                        className={styles.avatar}
                                    />
                                    <div className={styles.info}>
                                        <span className={styles.name}>{tItem.name}</span>
                                        <span className={styles.role}>{t(`testi_r_${index}`, tItem.role, tItem.roleEn)}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
