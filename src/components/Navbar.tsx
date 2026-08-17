"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import styles from "./Navbar.module.css";
import { useLanguage } from "@/context/LanguageContext";
import Image from "next/image";

// Flags SVGs as Small Components
const FlagES = () => (
    <svg width="24" height="24" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" style={{ borderRadius: '50%', objectFit: 'cover' }}>
        <path d="M0 108.8h512v294.4H0z" fill="#ffc400" />
        <path d="M0 0h512v108.8H0zm0 403.2h512V512H0z" fill="#c60b1e" />
    </svg>
);

const FlagEN = () => (
    <svg width="24" height="24" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" style={{ borderRadius: '50%', objectFit: 'cover' }}>
        <rect width="512" height="512" fill="#fff" />
        <path d="M512 39.4H0v39.4h512V39.4zm0 78.8H0v39.4h512v-39.4zm0 78.7H0V236.3h512v-39.4zm0 78.8H0v39.4h512v-39.4zm0 78.8H0v39.4h512v-39.4zm0 78.8H0v39.4h512v-39.4z" fill="#b22234" />
        <rect width="244.5" height="210" fill="#3c3b6e" />
        {/* Simple dots as stars */}
        <circle cx="45" cy="45" r="8" fill="#fff" />
        <circle cx="105" cy="45" r="8" fill="#fff" />
        <circle cx="165" cy="45" r="8" fill="#fff" />
        <circle cx="225" cy="45" r="8" fill="#fff" />
        <circle cx="75" cy="95" r="8" fill="#fff" />
        <circle cx="135" cy="95" r="8" fill="#fff" />
        <circle cx="195" cy="95" r="8" fill="#fff" />
        <circle cx="45" cy="145" r="8" fill="#fff" />
        <circle cx="105" cy="145" r="8" fill="#fff" />
        <circle cx="165" cy="145" r="8" fill="#fff" />
        <circle cx="225" cy="145" r="8" fill="#fff" />
    </svg>
);

export default function Navbar() {
    const { language, setLanguage, t } = useLanguage();
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: t("inicio"), href: "/" },
        { name: t("nosotros"), href: "/nosotros" },
        { name: "Iglesia", href: "/iglesias/impacto-river" },
        { name: t("vive_tu_llamado"), href: "/vive-tu-llamado" },
        { name: t("testimonios"), href: "/estudiantes" },
        { name: t("contacto"), href: "https://wa.me/573144787072" },
    ];

    return (
        <header className={`${styles.header} ${isScrolled ? styles.headerScrolled : ""}`}>
            <div className={styles.container}>
                {/* Logo */}
                <Link href="/" className={styles.logo}>
                    <Image
                        src="/assets/images/brand/logo-main.png"
                        alt="SEBIBE"
                        width={180}
                        height={55}
                        className={styles.logoImg}
                        priority
                    />
                </Link>

                {/* Desktop Navigation */}
                <nav className={styles.navDesktop}>
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className={styles.navLink}
                        >
                            {link.name}
                        </Link>
                    ))}

                    <div className={styles.langDesktop}>
                        <button
                            className={`${styles.langIcon} ${language === 'es' ? styles.langActiveIcon : ''}`}
                            onClick={() => setLanguage('es')}
                            title="Español"
                        >
                            <FlagES />
                        </button>
                        <button
                            className={`${styles.langIcon} ${language === 'en' ? styles.langActiveIcon : ''}`}
                            onClick={() => setLanguage('en')}
                            title="English"
                        >
                            <FlagEN />
                        </button>
                    </div>

                    <div className={styles.actionButtons}>
                        <Link href="/biblioteca" className={styles.ctaButtonSecondary}>
                            Biblioteca
                        </Link>
                        <Link href="https://wa.me/573144787072" className={styles.ctaButton}>
                            {t("matriculate")}
                        </Link>
                    </div>
                </nav>

                {/* Mobile Actions */}
                <div className={styles.mobileActions}>
                    <div className={styles.langMobilePill}>
                        <button
                            className={`${styles.langBtnPill} ${language === 'es' ? styles.langActivePill : ''}`}
                            onClick={() => setLanguage('es')}
                        >
                            <FlagES />
                        </button>
                        <button
                            className={`${styles.langBtnPill} ${language === 'en' ? styles.langActivePill : ''}`}
                            onClick={() => setLanguage('en')}
                        >
                            <FlagEN />
                        </button>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className={styles.mobileToggle}
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            {isMobileMenuOpen ? (
                                <path d="M18 6L6 18M6 6l12 12" />
                            ) : (
                                <path d="M3 12h18M3 6h18M3 18h18" />
                            )}
                        </svg>
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <div className={`${styles.mobileMenu} ${isMobileMenuOpen ? styles.mobileMenuOpen : ""}`}>
                <div className={styles.mobileNavList}>
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className={styles.mobileNavLink}
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            {link.name}
                        </Link>
                    ))}

                    <div className={styles.mobileActionButtons}>
                        <Link
                            href="/biblioteca"
                            className={styles.mobileCtaSecondary}
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            Biblioteca
                        </Link>
                        <Link
                            href="https://wa.me/573144787072"
                            className={styles.mobileCta}
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            {t("matriculate_ahora")}
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    );
}
