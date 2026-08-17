import styles from "./PlanYourVisit.module.css";

export default function PlanYourVisit() {
  return (
    <section id="visita" className={styles.section}>
      <div className={styles.splitContainer}>
        
        {/* Lado Visual: El Video 100% Inmersivo */}
        <div className={styles.visualSide}>
          <div className={styles.mapContainer}>
            <video 
              src="/assets/videos/impacto-river/impacto-river-ubi.mp4" 
              autoPlay 
              loop 
              muted 
              playsInline
              controls={false}
            />
            <div className={styles.videoOverlay}>
              <h3 className={styles.videoTitle}>Cómo llegar</h3>
            </div>
          </div>
        </div>

        {/* Lado Contenido: Tipografía Limpia y Elegante */}
        <div className={styles.contentSide}>
          <span className={styles.subtitle}>Planifica tu Visita</span>
          <h2 className={styles.title}>Te esperamos este fin de semana</h2>

          <div className={styles.infoBlock}>
            <span className={styles.infoLabel}>Horarios</span>
            <span className={styles.infoText}>
              <strong>Servicio Dominical:</strong> Domingos, 10:00 AM - 12:00 PM<br/>
              <strong>Reunión de Jóvenes:</strong> Sábados, 4:30 PM - 6:00 PM
            </span>
          </div>

          <div className={styles.infoBlock}>
            <span className={styles.infoLabel}>Ubicación</span>
            <span className={styles.infoText}>
              Carrera 6 # 9 - 11<br/>
              Diagonal a la Alcaldía de Silvania
            </span>
            <a 
              href="https://www.google.com/maps/search/?api=1&query=Carrera+6+%23+9+-+11,+Silvania,+Cundinamarca" 
              target="_blank" 
              rel="noopener noreferrer"
              className={styles.pillButton}
            >
              <svg className={styles.buttonIcon} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              Abrir en Google Maps
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
