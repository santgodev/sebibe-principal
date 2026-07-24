"use client";
import { useState } from "react";
import styles from "./VideoSection.module.css";
import { useLanguage } from "@/context/LanguageContext";
import Image from "next/image";

export default function VideoSection() {
    const { t } = useLanguage();
    const [open, setOpen] = useState(false);
    const VIDEO_URL = "/assets/videos/about-us-video.mp4";

    return (
        <>
            <section className={styles.section}>
                <div className={styles.bg}>
                    <Image
                        src="/assets/images/sections/about-us.jpg"
                        alt="SEBIBE - Formación Teológica y Discipulado"
                        fill
                        sizes="100vw"
                        className={styles.bgImg}
                        priority
                    />
                    <div className={styles.overlay} />
                </div>

                <div className={styles.content}>
                    <button className={styles.playBtn} onClick={() => setOpen(true)} aria-label="Reproducir video">
                        <div className={styles.playOuter}>
                            <div className={styles.playMiddle}>
                                <div className={styles.playInner}>
                                    <svg viewBox="0 0 24 24" className={styles.playIcon} width="28" height="28">
                                        <polygon points="6,4 20,12 6,20" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <span className={styles.playLabel}>{t("vid_play", "Ver el video", "Watch video")}</span>
                    </button>
                </div>
            </section>

            {/* Full-screen Modal */}
            {open && (
                <div className={styles.modal} onClick={() => setOpen(false)}>
                    <div className={styles.modalInner} onClick={e => e.stopPropagation()}>
                        <button className={styles.closeBtn} onClick={() => setOpen(false)}>
                            <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none">
                                <line x1="18" y1="6" x2="6" y2="18" />
                                <line x1="6" y1="6" x2="18" y2="18" />
                            </svg>
                        </button>
                        <div className={styles.iframeWrap}>
                            <video
                                src={VIDEO_URL}
                                controls
                                autoPlay
                                className={styles.iframe}
                                poster="/assets/images/sections/about-us.jpg"
                            >
                                <track kind="captions" label="Español" default />
                                {t("vid_unsupported", "Tu navegador no soporta videos HTML5.", "Your browser does not support HTML5 videos.")}
                            </video>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
