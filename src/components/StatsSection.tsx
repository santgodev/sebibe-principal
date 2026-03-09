"use client";
import { useEffect, useRef, useState } from "react";
import styles from "./StatsSection.module.css";

interface Stat {
    value: number;
    suffix: string;
    label: string;
    description: string;
}

const stats: Stat[] = [
    { value: 500, suffix: "+", label: "Egresados", description: "Transformados e impactando el mundo con excelencia" },
    { value: 10, suffix: "+", label: "Años de Trayectoria", description: "Una herencia de formación bíblica fiel y profunda" },
    { value: 5, suffix: "", label: "Especializaciones", description: "Teología, Plantación, Música, Consejería y misiones" },
    { value: 30, suffix: "+", label: "Naciones Alcanzadas", description: "Egresados ministrando en pueblos y ciudades del mundo" },
];

function AnimatedNumber({ target, suffix, isVisible }: { target: number; suffix: string; isVisible: boolean }) {
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (!isVisible) return;
        const duration = 2200;
        const steps = 80;
        const increment = target / steps;
        let current = 0;
        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                setCount(target);
                clearInterval(timer);
            } else {
                setCount(Math.floor(current));
            }
        }, duration / steps);
        return () => clearInterval(timer);
    }, [isVisible, target]);

    return <span>{count}{suffix}</span>;
}

export default function StatsSection() {
    const ref = useRef<HTMLDivElement>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
            { threshold: 0.3 }
        );
        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, []);

    return (
        <section className={styles.section} ref={ref}>
            <div className={styles.ambientGlow} />
            <div className={styles.container}>
                <div className={styles.label}>NUESTRO IMPACTO</div>
                <div className={styles.grid}>
                    {stats.map((stat, i) => (
                        <div key={i} className={styles.card} style={{ animationDelay: `${i * 0.15}s` }}>
                            <div className={styles.number}>
                                <AnimatedNumber target={stat.value} suffix={stat.suffix} isVisible={isVisible} />
                            </div>
                            <div className={styles.statLabel}>{stat.label}</div>
                            <p className={styles.statDesc}>{stat.description}</p>
                            <div className={styles.cardLine} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
