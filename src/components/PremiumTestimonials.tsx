"use client";
import { useState } from "react";
import styles from "./PremiumTestimonials.module.css";

const testimonials = [
    {
        id: 1,
        name: "David Rodríguez",
        role: "Misiones Transculturales",
        // Using DiceBear Notionists style for a cool transparent avatar placeholder
        image: "https://api.dicebear.com/7.x/notionists/svg?seed=David&backgroundColor=transparent&size=200",
        testimonial: "Llegué buscando dirección y encontré un propósito eterno. Redefiní mi llamado mientras me preparaba en comunidad. El seminario no solo me dio un rigor teológico impecable, sino el fuego interior para llevar el evangelio a donde aún no ha sido predicado.",
    },
    {
        id: 2,
        name: "Ana Sofía",
        role: "Liderazgo Juvenil",
        image: "https://api.dicebear.com/7.x/notionists/svg?seed=Ana&backgroundColor=transparent&size=200",
        testimonial: "Mi visión del liderazgo estaba distorsionada antes de llegar aquí. Entendí que liderar es servir incondicionalmente. El acompañamiento de mis profesores ha transformado mi manera de pastorear a los jóvenes en mi congregación local de formas que nunca imaginé.",
    },
    {
        id: 3,
        name: "Mateo Castellanos",
        role: "Bachillerato en Teología",
        image: "https://api.dicebear.com/7.x/notionists/svg?seed=Mateo&backgroundColor=transparent&size=200",
        testimonial: "El estudio combinado con la profunda espiritualidad que vivimos a diario me fundó sobre la Roca. No solo he memorizado versículos, he aprendido el arte de vivir la Palabra en lo cotidiano. Este lugar forjó mi carácter de manera irreversible.",
    },
    {
        id: 4,
        name: "Valeria Guzmán",
        role: "Adoración y Alabanza",
        image: "https://api.dicebear.com/7.x/notionists/svg?seed=Valeria&backgroundColor=transparent&size=200",
        testimonial: "Antes veía la música solo como arte; aquí entendí que es un instrumento de guerra espiritual. He aprendido a liderar a la congregación hacia la presencia de Dios con excelencia y humildad.",
    },
    {
        id: 5,
        name: "Carlos Mendoza",
        role: "Plantación de Iglesias",
        image: "https://api.dicebear.com/7.x/notionists/svg?seed=Carlos&backgroundColor=transparent&size=200",
        testimonial: "Pensé que plantar iglesias era solo estrategia, pero descubrí que es pura dependencia del Espíritu Santo. El seminario me dio las herramientas y la carga por alcanzar nuevas comunidades.",
    },
    {
        id: 6,
        name: "Elena Suárez",
        role: "Consejería Bíblica",
        image: "https://api.dicebear.com/7.x/notionists/svg?seed=Elena&backgroundColor=transparent&size=200",
        testimonial: "Llegué rota y fui sanada. Luego, Dios me llamó a ser instrumento de sanidad. La preparación que recibo aquí profundiza mi entendimiento del alma a la luz absoluta de las Escrituras.",
    }
];

export default function PremiumTestimonials() {
    // Track clicked card for mobile
    const [activeId, setActiveId] = useState<number | null>(null);
    // Track hovered card for desktop to dim the others
    const [hoveredId, setHoveredId] = useState<number | null>(null);

    const handleCardClick = (id: number) => {
        setActiveId(activeId === id ? null : id);
    };

    return (
        <section className={styles.pageWrapper}>
            <div className={styles.ambientLight}></div>

            <div className={styles.header}>
                <h1 className={styles.title}>
                    Frutos de <span className={styles.titleHighlight}>Impacto</span>
                </h1>
                <p className={styles.subtitle}>
                    Voces de una generación que ha echado raíces profundas y hoy da fruto. Descubre a quienes se forman para alimentar al mundo de esperanza.
                </p>
            </div>

            <div className={styles.treeContainer}>
                {/* Abstract Stylized Tree Background */}
                <div className={styles.treeSVGContainer}>
                    <svg viewBox="0 0 1200 1200" preserveAspectRatio="xMidYMax meet" className={styles.treeSvg}>
                        <defs>
                            <linearGradient id="goldGradient" x1="0%" y1="100%" x2="0%" y2="0%">
                                <stop offset="0%" stopColor="rgba(212, 175, 55, 0)" />
                                <stop offset="20%" stopColor="rgba(212, 175, 55, 0.4)" />
                                <stop offset="80%" stopColor="rgba(253, 230, 138, 0.8)" />
                                <stop offset="100%" stopColor="rgba(253, 230, 138, 0)" />
                            </linearGradient>
                            <filter id="premiumGlow" x="-50%" y="-50%" width="200%" height="200%">
                                <feGaussianBlur stdDeviation="3" result="blur1" />
                                <feGaussianBlur stdDeviation="10" result="blur2" />
                                <feMerge>
                                    <feMergeNode in="blur2" />
                                    <feMergeNode in="blur1" />
                                    <feMergeNode in="SourceGraphic" />
                                </feMerge>
                            </filter>
                        </defs>

                        {/* Full-width expansive background network lines */}
                        <g fill="none" stroke="url(#goldGradient)" filter="url(#premiumGlow)">
                            <path d="M 600 1200 C 300 1000, -200 1050, -800 800" className={styles.decorativeBranch} />
                            <path d="M 600 1200 C 900 1000, 1400 1050, 2000 800" className={styles.decorativeBranch} />

                            <path d="M 600 1200 C 400 1100, -100 900, -1000 600" className={styles.decorativeBranch} />
                            <path d="M 600 1200 C 800 1100, 1300 900, 2200 600" className={styles.decorativeBranch} />

                            <path d="M 600 1200 C 450 1050, 350 800, 350 550" className={styles.decorativeBranch} />
                            <path d="M 600 1200 C 750 1050, 850 800, 850 550" className={styles.decorativeBranch} />

                            <path d="M 600 1200 C 200 1150, -400 1000, -1500 300" className={styles.decorativeBranch} />
                            <path d="M 600 1200 C 1000 1150, 1600 1000, 2700 300" className={styles.decorativeBranch} />

                            <path d="M 600 1200 C 500 1000, 200 1050, -50 800" className={styles.decorativeBranch} />
                            <path d="M 600 1200 C 700 1000, 1000 1050, 1250 800" className={styles.decorativeBranch} />
                        </g>

                        {/* Main aesthetic flow lines connecting to the fruits */}
                        <g fill="none" stroke="url(#goldGradient)" filter="url(#premiumGlow)">
                            {/* Row 1 */}
                            <path d="M 600 1200 C 600 1000, 208 800, 208 375" className={styles.mainBranch} />
                            <path d="M 600 1200 C 600 800, 600 500, 600 265" className={styles.mainBranch} />
                            <path d="M 600 1200 C 600 1000, 992 800, 992 375" className={styles.mainBranch} />

                            {/* Row 2 */}
                            <path d="M 600 1200 C 600 1100, 208 1000, 208 857" className={styles.mainBranch} />
                            <path d="M 600 1200 C 600 1100, 600 900, 600 747" className={styles.mainBranch} />
                            <path d="M 600 1200 C 600 1100, 992 1000, 992 857" className={styles.mainBranch} />
                        </g>

                        {/* Glowing Connection Nodes */}
                        <g fill="#D4AF37" filter="url(#premiumGlow)">
                            <circle cx="208" cy="375" r="5" className={styles.nodePoint} />
                            <circle cx="600" cy="265" r="5" className={styles.nodePoint} />
                            <circle cx="992" cy="375" r="5" className={styles.nodePoint} />
                            <circle cx="208" cy="857" r="5" className={styles.nodePoint} />
                            <circle cx="600" cy="747" r="5" className={styles.nodePoint} />
                            <circle cx="992" cy="857" r="5" className={styles.nodePoint} />
                        </g>
                    </svg>
                </div>

                <div className={styles.grid}>
                    {testimonials.map((t) => {
                        // Logic for dimming inactive fruits
                        const isInteracting = activeId === t.id || hoveredId === t.id;
                        const anyInteracting = activeId !== null || hoveredId !== null;
                        const isDimmed = anyInteracting && !isInteracting;

                        return (
                            <div
                                key={t.id}
                                className={`
                                    ${styles.card} 
                                    ${activeId === t.id ? styles.active : ''}
                                    ${isDimmed ? styles.dimmed : ''}
                                    ${styles[`fruitPos${t.id}`]}
                                `}
                                onClick={() => handleCardClick(t.id)}
                                onMouseEnter={() => setHoveredId(t.id)}
                                onMouseLeave={() => setHoveredId(null)}
                                role="button"
                                tabIndex={0}
                                aria-expanded={activeId === t.id}
                            >
                                {/* Hover hint */}
                                <div className={styles.indicator}>
                                    <span>Ver Fruto</span>
                                </div>

                                {/* Floating transparent avatar (Fruit) */}
                                <div className={styles.avatarWrapper}>
                                    <img src={t.image} alt={`Avatar de ${t.name}`} className={styles.avatar} />
                                </div>

                                {/* Glassmorphism content overlay */}
                                <div className={styles.contentBox}>
                                    <h3 className={styles.name}>{t.name}</h3>
                                    <span className={styles.role}>{t.role}</span>
                                    <p className={styles.testimonial}>"{t.testimonial}"</p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
