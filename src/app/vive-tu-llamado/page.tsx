"use client";
import { useState } from "react";
import styles from "./ViveTuLlamado.module.css";
import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import CTA from "@/components/CTA";

const youtubeVideos = [
    {
        id: "v1",
        youtubeId: "01ulVGQM0aE", 
        title: "La Misión En Venezuela | Conversaciones en Berea",
        titleEn: "Mission In Venezuela | Conversations at Berea",
    },
    {
        id: "v2",
        youtubeId: "YAkyLtHGwr8",
        title: "¿Cómo finalizar bien en el ministerio?",
        titleEn: "How to finish well in the ministry?",
    },
    {
        id: "v3",
        youtubeId: "KNjCev1MrVA",
        title: "Xpan GLOBAL | Conversaciones en Berea",
        titleEn: "Xpan GLOBAL | Conversations at Berea",
    }
];

export default function ViveTuLlamadoPage() {
    const { t, language } = useLanguage();
    const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

    return (
        <main className={styles.page}>
            {/* Hero Section */}
            <section className={styles.hero}>
                <div className={styles.heroBg}>
                    <Image
                        src="/assets/images/sections/hero-vive-tu-llamado.jpeg" // New hero image
                        alt="Vive tu Llamado"
                        fill
                        className={styles.heroImg}
                        priority
                    />
                    <div className={styles.heroOverlay} />
                </div>
                
                <div className={styles.heroContent}>
                    <span className={styles.eyebrow}>{t("vivel_hero_eyebrow", "VIVE TU LLAMADO", "LIVE YOUR CALLING")}</span>
                    <h1 className={styles.title}>
                        {t("vivel_hero_title", "Tu futuro empieza", "Your future begins")}<br/>
                        <span className={styles.italic}>{t("vivel_hero_title_2", "con un SÍ", "with a YES")}</span>
                    </h1>
                    <p className={styles.desc}>
                        {t("vivel_hero_desc", "No es solo un seminario, es el lugar donde tu propósito se encuentra con la preparación. Únete a la próxima generación de líderes globales.", "It's not just a seminary, it's the place where your purpose meets preparation. Join the next generation of global leaders.")}
                    </p>
                </div>
            </section>

            {/* Video Testimonials Section */}
            <section className={styles.section}>
                <div className={styles.container}>
                    <header className={styles.sectionHeader}>
                        <h2 className={styles.sectionTitle}>{t("vivel_vid_section_title", "Experiencias Reales", "Real Experiences")}</h2>
                    </header>
                    
                    <div className={styles.videoGrid}>
                        {youtubeVideos.map((video) => (
                            <div 
                                key={video.id} 
                                className={styles.videoCard}
                                onClick={() => setSelectedVideo(video.youtubeId)}
                            >
                                <div className={styles.thumbnailWrapper}>
                                    <Image
                                        src={`https://img.youtube.com/vi/${video.youtubeId}/maxresdefault.jpg`}
                                        alt={language === 'en' ? video.titleEn : video.title}
                                        fill
                                        className={styles.videoImg}
                                        unoptimized
                                    />
                                    <div className={styles.playButton}>
                                        <div className={styles.playTriangle} />
                                    </div>
                                </div>
                                <div className={styles.videoInfo}>
                                    <h3 className={styles.videoTitle}>
                                        {language === 'en' ? video.titleEn : video.title}
                                    </h3>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Book Section */}
            <section className={styles.bookSection}>
                <div className={styles.container}>
                    <div className={styles.bookFlex}>
                        <div className={styles.bookImage}>
                            <Image
                                src="/assets/images/sections/vive-tu-llamado.jpeg" // Replaced generated book mockup with real image
                                alt="Libro SEBIBE"
                                fill
                                style={{ objectFit: 'cover' }}
                            />
                        </div>
                        <div className={styles.bookContent}>
                            <h2 className={styles.bookHeader}>{t("vivel_book_section_title", "Nuestra Guía de Formación", "Our Training Guide")}</h2>
                            <p className={styles.bookText}>
                                {t("vivel_book_desc", "Descubre el corazón de nuestra propuesta académica y espiritual a través del libro oficial de SEBIBE. Una hoja de ruta para aquellos que han decidido responder al llamado.", "Discover the heart of our academic and spiritual proposal through the official SEBIBE book. A roadmap for those who have decided to answer the call.")}
                            </p>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', alignItems: 'flex-start' }}>
                                <Link href="https://wa.me/573144787072" className={styles.bookBtn}>
                                    <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
                                        <path d="M4 19h16v2H4v-2zm8-18L4.91 9.09l1.41 1.41L11 5.83V17h2V5.83l4.68 4.68 1.41-1.41L12 1z"/>
                                    </svg>
                                    {t("vivel_book_btn_label", "Obtener mi Guía", "Get my Guide")}
                                </Link>
                                
                                <Link 
                                    href="/assets/INFORMACIÓN%20SEBIBE_%202%20Semestre%202026.pdf" 
                                    className={styles.curriculumBtn}
                                    target="_blank"
                                >
                                    <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                                        <path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"/>
                                    </svg>
                                    {t("vivel_curriculum_btn", "Ver Malla Curricular 2026", "View 2026 Curriculum")}
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className={styles.section}>
                <div className={styles.container} style={{ textAlign: 'center' }}>
                    <h2 className={styles.sectionTitle} style={{ marginBottom: '3rem' }}>{t("vivel_cta_title", "¿Estás listo para responder?", "Are you ready to answer?")}</h2>
                    <CTA />
                </div>
            </section>

            {/* YouTube Modal */}
            {selectedVideo && (
                <div className={styles.modal} onClick={() => setSelectedVideo(null)}>
                    <div className={styles.modalContent} onClick={e => e.stopPropagation()}>
                        <button className={styles.closeBtn} onClick={() => setSelectedVideo(null)}>
                            Cerrar [✕]
                        </button>
                        <iframe
                            width="100%"
                            height="100%"
                            src={`https://www.youtube.com/embed/${selectedVideo}?autoplay=1`}
                            title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen
                        ></iframe>
                    </div>
                </div>
            )}
        </main>
    );
}
