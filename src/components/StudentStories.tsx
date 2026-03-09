"use client";
import { useState } from "react";
import styles from "./StudentStories.module.css";
import Image from "next/image";

const students = [
    {
        id: 1,
        name: "David Rodríguez",
        role: "Estudiante de Misiones",
        image: "https://sebibe.org/wp-content/uploads/2024/01/MG_6486-2048x1365.jpg", // Placeholder until you have the real photo
        testimonial: "Llegué a Berea buscando conocimiento, pero encontré un propósito. Cada clase me desafió a ir más profundo en mi relación con Dios. Hoy me preparo para llevar su palabra a donde aún no ha sido escuchada. El proceso no ha sido fácil, pero la comunidad me ha sostenido.",
    },
    {
        id: 2,
        name: "Ana Sofía",
        role: "Liderazgo Juvenil",
        image: "https://sebibe.org/wp-content/uploads/2025/09/IMG_1223-scaled.jpg", // Placeholder until you have the real photo
        testimonial: "Antes de venir al seminario, mi visión del liderazgo era muy limitada. Aquí aprendí que liderar es servir y amar incondicionalmente. Las experiencias rácticas y el acompañamiento constante de los profesores transformaron mi manera de pastorear a los jóvenes en mi iglesia local.",
    },
    {
        id: 3,
        name: "Mateo Castellanos",
        role: "Bachillerato en Teología",
        image: "https://sebibe.org/wp-content/uploads/2024/01/DSC_0025-2048x1365.jpg", // Placeholder until you have the real photo
        testimonial: "El rigor académico combinado con la profunda espiritualidad me ha fundado sobre la Roca. No solo he memorizado versículos, he aprendido a vivir la Palabra en mi día a día. Crecer en esta familia ha cambiado mi vida y llamado para siempre.",
    }
];

export default function StudentStories() {
    const [activeId, setActiveId] = useState<number | null>(null);

    return (
        <section className={styles.section} id="historias">
            <div className={styles.container}>
                <div className={styles.header}>
                    <h2 className={styles.title}>Voces de una Generación</h2>
                    <p className={styles.subtitle}>
                        Conoce las historias de los jóvenes que están siendo formados para transformar el mundo. Haz clic en cada uno para leer su testimonio.
                    </p>
                </div>

                <div className={styles.grid}>
                    {students.map((student) => (
                        <div
                            key={student.id}
                            className={`${styles.card} ${activeId === student.id ? styles.active : ''}`}
                            onClick={() => setActiveId(activeId === student.id ? null : student.id)}
                            role="button"
                            tabIndex={0}
                            aria-expanded={activeId === student.id}
                        >
                            <div className={styles.imageWrapper}>
                                <Image
                                    src={student.image}
                                    alt={student.name}
                                    fill
                                    sizes="(max-width: 768px) 100vw, 33vw"
                                    className={styles.image}
                                />
                                <div className={styles.overlay}>
                                    <div>
                                        <h3 className={styles.name}>{student.name}</h3>
                                        <span className={styles.role}>{student.role}</span>
                                    </div>
                                    <span className={styles.icon}>
                                        {activeId === student.id ? '−' : '+'}
                                    </span>
                                </div>
                            </div>
                            <div className={styles.content}>
                                <div className={styles.contentInner}>
                                    <p className={styles.testimonial}>"{student.testimonial}"</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
