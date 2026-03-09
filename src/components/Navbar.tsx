"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import styles from "./Navbar.module.css";
import { useLanguage } from "@/context/LanguageContext";
import Image from "next/image";

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
        { name: t("testimonios"), href: "/testimonios" },
        { name: t("contacto"), href: "https://wa.me/573144787072" },
    ];

    return (
        <header className={`${styles.header} ${isScrolled ? styles.headerScrolled : ""}`}>
            <div className={styles.container}>
                {/* Logo */}
                <Link href="/" className={styles.logo}>
                    <Image
                        src="https://sebibe.org/wp-content/uploads/2023/12/cropped-logo-general-azul.2.png"
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

                    {/* Language Switcher Desktop */}
                    <div className={styles.langSwitcher}>
                        <button
                            className={`${styles.langBtn} ${language === 'es' ? styles.langActive : ''}`}
                            onClick={() => setLanguage('es')}
                        >ES</button>
                        <span className={styles.langDivider}>|</span>
                        <button
                            className={`${styles.langBtn} ${language === 'en' ? styles.langActive : ''}`}
                            onClick={() => setLanguage('en')}
                        >EN</button>
                    </div>

                    <Link href="https://wa.me/573144787072" className={styles.ctaButton}>
                        {t("matriculate")}
                    </Link>
                </nav>

                {/* Mobile Menu Button */}
                <button
                    className={styles.mobileToggle}
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    aria-label="Toggle menu"
                >
                    <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        {isMobileMenuOpen ? (
                            <path d="M18 6L6 18M6 6l12 12" />
                        ) : (
                            <path d="M3 12h18M3 6h18M3 18h18" />
                        )}
                    </svg>
                </button>
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

                    {/* Language Switcher Mobile */}
                    <div className={styles.mobileLangSwitcher}>
                        <button
                            className={`${styles.langBtn} ${language === 'es' ? styles.langActive : ''}`}
                            onClick={() => { setLanguage('es'); setIsMobileMenuOpen(false); }}
                        >ES</button>
                        <span className={styles.langDivider}>|</span>
                        <button
                            className={`${styles.langBtn} ${language === 'en' ? styles.langActive : ''}`}
                            onClick={() => { setLanguage('en'); setIsMobileMenuOpen(false); }}
                        >EN</button>
                    </div>

                    <Link
                        href="https://wa.me/573144787072"
                        className={styles.mobileCta}
                        onClick={() => setIsMobileMenuOpen(false)}
                    >
                        {t("matriculate_ahora")}
                    </Link>
                </div>
            </div>
        </header>
    );
}
