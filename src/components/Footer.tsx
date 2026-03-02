import Link from "next/link";
import styles from "./Footer.module.css";

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.grid}>
                    {/* Brand */}
                    <div>
                        <Link href="/" className={styles.brandName}>
                            SEBIBE<span className={styles.brandDot}>.</span>
                        </Link>
                        <p className={styles.brandDesc}>
                            Formando líderes para la misión global con excelencia académica y espiritualidad pentecostal desde hace más de 16 años.
                        </p>
                    </div>

                    {/* Links */}
                    <div>
                        <h4 className={styles.colTitle}>Enlaces Rápidos</h4>
                        <ul className={styles.linkList}>
                            <li><Link href="/nosotros" className={styles.link}>Acerca de Nosotros</Link></li>
                            <li><Link href="/programas" className={styles.link}>Nuestros Programas</Link></li>
                            <li><Link href="/admisiones" className={styles.link}>Proceso de Admisión</Link></li>
                            <li><Link href="/blog" className={styles.link}>Conversaciones en Berea</Link></li>
                        </ul>
                    </div>

                    {/* Programs */}
                    <div>
                        <h4 className={styles.colTitle}>Programas</h4>
                        <ul className={styles.linkList}>
                            <li><Link href="/programas/bachillerato" className={styles.link}>Bachillerato en Teología</Link></li>
                            <li><Link href="/programas/liderazgo" className={styles.link}>Diplomado en Liderazgo</Link></li>
                            <li><Link href="/programas/misiones" className={styles.link}>Escuela de Misiones</Link></li>
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
                    <p>&copy; {new Date().getFullYear()} Seminario Bíblico Internacional Berea. Todos los derechos reservados.</p>
                </div>
            </div>
        </footer>
    );
}
