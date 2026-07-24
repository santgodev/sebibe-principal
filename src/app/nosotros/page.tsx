import VideoSection from "@/components/VideoSection";
import FacultySection from "@/components/FacultySection";
import StatsSection from "@/components/StatsSection";
import CTA from "@/components/CTA";
import { Metadata } from "next";
import styles from "./Nosotros.module.css";

export const metadata: Metadata = {
    title: "Nosotros | SEBIBE",
    description: "Nuestra visión es formar una generación de líderes apasionados, fundamentados en la Palabra y listos para impactar el mundo.",
};

export default function NosotrosPage() {
    return (
        <main className={styles.page}>
            {/* Cinematic Page Header */}
            <header className={styles.hero}>
                <div className={styles.heroContent}>
                    <span className={styles.eyebrow}>CONÓCENOS</span>
                    <h1 className={styles.title}>
                        Nuestra <span className={styles.italic}>Identidad</span>
                    </h1>
                    <div className={styles.divider} />
                    <p className={styles.desc}>
                        Somos una comunidad vibrante dedicada a equipar a la próxima generación de líderes. Nuestra misión es la formación teológica profunda y el discipulado que trasciende el aula.
                    </p>
                </div>
            </header>

            {/* Core Video Section - The main focus */}
            <div className={styles.videoWrapper}>
                <VideoSection />
            </div>

            {/* Final CTA */}
            <div className="py-20 bg-[#020617]">
                <CTA />
            </div>
        </main>
    );
}
