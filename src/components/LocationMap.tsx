import styles from "./LocationMap.module.css";

export default function LocationMap() {
    return (
        <section className={styles.section}>
            <div className={styles.mapWrapper}>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15914.868779183615!2d-74.3986791!3d4.3409192!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f055663748235%3A0x67a32403662283a0!2sSeminario%20B%C3%ADblico%20Internacional%20Berea!5e0!3m2!1ses!2sco!4v1715000000000!5m2!1ses!2sco"
                    className={styles.mapFrame}
                    allowFullScreen={true}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Ubicación SEBIBE"
                ></iframe>
                <div className={styles.overlay}>
                    <h3 className={styles.title}>Visítanos</h3>
                    <p className={styles.address}>
                        Via Panamericana Vereda Bosachoque<br />
                        Fusagasugá – Silvania, Cundinamarca
                    </p>
                    <a
                        href="https://maps.app.goo.gl/9JH6+4V"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.directionsLink}
                    >
                        Cómo llegar &rarr;
                    </a>
                </div>
            </div>
        </section>
    );
}
