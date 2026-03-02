"use client";
/* eslint-disable @next/next/no-img-element */
import styles from "./Testimonials.module.css";

const testimonials = [
    {
        name: "Hébert, Luz y Caleb",
        role: "Pastores en Amazonas",
        quote: "El SEBIBE nos ayudó a entender como Dios puede usar de diferentes maneras a las personas, nos capacitó y ayudó para venir al Amazonas a servir a las comunidades indígenas.",
        image: "https://sebibe.org/wp-content/uploads/2024/09/Hebert-Luz-y-Caleb-1024x1024.jpg",
    },
    {
        name: "Otoniel y Noralba",
        role: "Misioneros en La Guajira",
        quote: "La formación teológica fue clave para nuestro ministerio transcultural.",
        image: "https://sebibe.org/wp-content/uploads/2024/09/Otoniel-y-Noralba-1024x1024.jpg",
    },
    {
        name: "Familia Pastoral",
        role: "Graduados 2023",
        quote: "Una experiencia que transformó nuestra visión del reino de Dios.",
        image: "https://sebibe.org/wp-content/uploads/2024/01/MG_6380-2048x1365.jpg", // Placeholder until real image
    },
    {
        name: "Juan Pérez",
        role: "Estudiante de Teología",
        quote: "Aquí encontré no solo conocimiento, sino una familia espiritual.",
        image: "https://sebibe.org/wp-content/uploads/2024/01/MG_6486-2048x1365.jpg",
    },
    {
        name: "María González",
        role: "Líder de Jóvenes",
        quote: "Las herramientas de liderazgo han sido vitales para mi servicio en la iglesia local.",
        image: "https://sebibe.org/wp-content/uploads/2024/01/DSC_0025-2048x1365.jpg",
    },
];

// Duplicate for infinite scroll smoothness
const marqueeTestimonials = [...testimonials, ...testimonials];

export default function Testimonials() {
    return (
        <section className={styles.section} id="testimonios">
            <div className={styles.container}>
                <div className={styles.header}>
                    <h2 className={styles.title}>Impacto Real</h2>
                    <p className={styles.subtitle}>
                        Historias de vidas transformadas por la palabra y el servicio.
                    </p>
                </div>

                <div className={styles.carousel}>
                    <div className={styles.marqueeWrapper}>
                        {marqueeTestimonials.map((t, index) => (
                            <div key={index} className={styles.card}>
                                <p className={styles.quote}>{t.quote}</p>
                                <div className={styles.author}>
                                    <img src={t.image} alt={t.name} className={styles.avatar} />
                                    <div className={styles.info}>
                                        <span className={styles.name}>{t.name}</span>
                                        <span className={styles.role}>{t.role}</span>
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
