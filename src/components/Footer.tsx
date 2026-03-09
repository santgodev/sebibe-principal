"use client";
import Link from "next/link";
import styles from "./Footer.module.css";
import { useLanguage } from "@/context/LanguageContext";
import Image from "next/image";

export default function Footer() {
    const { t } = useLanguage();
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.grid}>
                    {/* Brand */}
                    <div>
                        <Link href="/" className={styles.brandName}>
                            <Image
                                src="http://sebibe.org/wp-content/uploads/2023/12/cropped-logo-general-azul.2.png"
                                alt="SEBIBE"
                                width={180}
                                height={60}
                                className={styles.brandNameImg}
                                loading="lazy"
                            />
                        </Link>
                        <p className={styles.brandDesc}>
                            {t("ft_brand_desc", "Formando líderes para la misión global con excelencia académica y espiritualidad pentecostal desde hace más de 16 años.", "Equipping leaders for global mission with academic excellence and Pentecostal spirituality for over 16 years.")}
                        </p>
                    </div>

                    {/* Links */}
                    <div>
                        <h4 className={styles.colTitle}>{t("ft_quick_links", "Enlaces Rápidos", "Quick Links")}</h4>
                        <ul className={styles.linkList}>
                            <li><Link href="/nosotros" className={styles.link}>{t("ft_about", "Acerca de Nosotros", "About Us")}</Link></li>
                            <li><Link href="/programas" className={styles.link}>{t("ft_programs", "Nuestros Programas", "Our Programs")}</Link></li>
                            <li><Link href="/admisiones" className={styles.link}>{t("ft_admissions", "Proceso de Admisión", "Admission Process")}</Link></li>
                            <li><Link href="/blog" className={styles.link}>{t("ft_blog", "Conversaciones en Berea", "Conversations in Berea")}</Link></li>
                        </ul>
                    </div>

                    {/* Programs */}
                    <div>
                        <h4 className={styles.colTitle}>{t("ft_programs_title", "Programas", "Programs")}</h4>
                        <ul className={styles.linkList}>
                            <li><Link href="/programas/bachillerato" className={styles.link}>{t("ft_prog_1", "Bachillerato en Teología", "Bachelor in Theology")}</Link></li>
                            <li><Link href="/programas/liderazgo" className={styles.link}>{t("ft_prog_2", "Diplomado en Liderazgo", "Diploma in Leadership")}</Link></li>
                            <li><Link href="/programas/misiones" className={styles.link}>{t("ft_prog_3", "Escuela de Misiones", "School of Missions")}</Link></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className={styles.colTitle}>Contacto</h4>
                        <ul className={styles.linkList}>
                            <li className={styles.contactItem}>
                                <span className={styles.icon}>📍</span>
                                <span>Fusagasugá – Cundinamarca.<br />Vereda Bosachoque</span>
                            </li>
                            <li className={styles.contactItem}>
                                <span className={styles.icon}>📞</span>
                                <a href="tel:+573144787072" className={styles.link}>(314) 478 7072</a>
                            </li>
                            <li className={styles.contactItem}>
                                <span className={styles.icon}>✉️</span>
                                <a href="mailto:sebiberesidencial@gmail.com" className={styles.link}>info@sebibe.org</a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className={styles.copyright}>
                    <p>&copy; {new Date().getFullYear()} {t("ft_copy", "Seminario Bíblico Internacional Berea. Todos los derechos reservados.", "Berea International Biblical Seminary. All rights reserved.")}</p>
                </div>
            </div>
        </footer>
    );
}
