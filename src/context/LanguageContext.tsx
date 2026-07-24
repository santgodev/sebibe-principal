"use client";

import React, { createContext, useContext, useState, ReactNode, useEffect } from "react";

type Language = "es" | "en";

interface LanguageContextType {
    language: Language;
    setLanguage: (lang: Language) => void;
    t: (key: string, defaultEs?: string, defaultEn?: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const translations: Record<Language, Record<string, string>> = {
    es: {
        // Navbar
        inicio: "Inicio",
        nosotros: "Nosotros",
        testimonios: "Estudiantes",
        vive_tu_llamado: "Vive tu Llamado",
        contacto: "Contacto",
        matriculate: "Matricúlate",
        matriculate_ahora: "Matricúlate Ahora",

        // Premium Testimonials
        historias_transformacion: "Nuestros Estudiantes",
        testimonios_subtitle: "Voces de una generación que ha sido rescatada, sanada y hoy se forma para llevar esperanza al mundo.",
        cerrar: "Cerrar",
        leer_historia: "Leer Historia",
        apoyar_estudiante: "Apoyar a este Estudiante",
        donar_ahora: "Donar Ahora",
        metodo_pago: "Método de Pago Seguro",
        enviar_comprobante: "Enviar Comprobante por WhatsApp",
        instruccion_comprobante: "Una vez realizado el apoyo, por favor envíanos una captura del comprobante por WhatsApp. Esto es vital para nuestros controles financieros y para asegurar que tu aporte llegue correctamente al estudiante.",
        apoyo_global_title: "¿Deseas sembrar en esta generación?",
        apoyo_global_desc: "Tu aporte permite que más jóvenes sigan formándose para la misión global.",

        // Hero
        hero_subtitle_top: "Seminario Bíblico Berea",
        hero_title_1: "Formando líderes para la",
        hero_title_2: "Misión Global",
        hero_desc: "Una experiencia inmersiva de discipulado, teología y comunidad. No es solo estudiar, es ser transformado para impactar una generación.",
        hero_btn_1: "Responder al Llamado",
        hero_btn_2: "Conocer la Visión",
        hero_hover_slogan: "Formación para lo Eterno y Profundo",

        // Facilities Showcase
        fac_eyebrow: "NUESTRA CASA",
        fac_desc: "Diseñado para el encuentro, el estudio y la transformación.",

        // Vive tu Llamado
        vivel_hero_eyebrow: "VIVE TU LLAMADO",
        vivel_hero_title: "Tu futuro empieza",
        vivel_hero_title_2: "con un SÍ",
        vivel_hero_desc: "No es solo un seminario, es el lugar donde tu propósito se encuentra con la preparación. Únete a la próxima generación de líderes globales.",
        vivel_vid_section_title: "Experiencias Reales",
        vivel_book_section_title: "Nuestra Guía de Formación",
        vivel_book_desc: "Descubre el corazón de nuestra propuesta académica y espiritual a través del libro oficial de SEBIBE.",
        vivel_book_btn_label: "Obtener mi Guía",
        vivel_curriculum_btn: "Ver Malla Curricular 2026",
        vivel_cta_title: "¿Estás listo para responder?",
        vivel_cta_btn: "Inicia tu Proceso de Admisión",

        // Default fallback
        loading: "Cargando...",
    },
    en: {
        // Navbar
        inicio: "Home",
        nosotros: "About Us",
        testimonios: "Students",
        vive_tu_llamado: "Live Your Calling",
        contacto: "Contact",
        matriculate: "Enroll",
        matriculate_ahora: "Enroll Now",

        // Premium Testimonials
        historias_transformacion: "Our Students",
        testimonios_subtitle: "Voices of a generation that has been rescued, healed, and is equipping itself today to bring hope to the world.",
        cerrar: "Close",
        leer_historia: "Read Story",
        apoyar_estudiante: "Support this Student",
        donar_ahora: "Donate Now",
        metodo_pago: "Secure Payment Method",
        enviar_comprobante: "Send Receipt via WhatsApp",
        instruccion_comprobante: "Once your support is completed, please send us a screenshot of the receipt via WhatsApp. This is vital for our financial controls and to ensure your contribution reaches the student correctly.",
        apoyo_global_title: "Want to seed into this generation?",
        apoyo_global_desc: "Your contribution allows more young people to continue training for the global mission.",

        // Hero
        hero_subtitle_top: "Berea Biblical Seminary",
        hero_title_1: "Training leaders for the",
        hero_title_2: "Global Mission",
        hero_desc: "An immersive experience of discipleship, theology, and community. It's not just studying, it's being transformed to impact a generation.",
        hero_btn_1: "Answer the Call",
        hero_btn_2: "Discover our Vision",
        hero_hover_slogan: "Training for the Eternal and Deep",

        // Facilities Showcase
        fac_eyebrow: "OUR HOME",
        fac_desc: "Designed for encounter, study, and transformation.",

        // Vive tu Llamado
        vivel_hero_eyebrow: "LIVE YOUR CALLING",
        vivel_hero_title: "Your future begins",
        vivel_hero_title_2: "with a YES",
        vivel_hero_desc: "It's not just a seminary, it's the place where your purpose meets preparation. Join the next generation of global leaders.",
        vivel_vid_section_title: "Real Experiences",
        vivel_book_section_title: "Our Training Guide",
        vivel_book_desc: "Discover the heart of our academic and spiritual proposal through the official SEBIBE book.",
        vivel_book_btn_label: "Get my Guide",
        vivel_curriculum_btn: "View 2026 Curriculum",
        vivel_cta_title: "Are you ready to answer?",
        vivel_cta_btn: "Start your Admission Process",

        // Default fallback
        loading: "Loading...",
    }
};

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
    const [language, setLanguageState] = useState<Language>("es");

    useEffect(() => {
        // 1. Intentar cargar desde localStorage
        const savedLang = localStorage.getItem("preferred_language") as Language;
        if (savedLang === "es" || savedLang === "en") {
            setLanguageState(savedLang);
            return;
        }

        // 2. Si no hay guardado, detectar por navegador
        const browserLang = typeof navigator !== "undefined" ? navigator.language.split("-")[0] : "es";
        if (browserLang === "en") {
            setLanguageState("en");
        }
    }, []);

    const setLanguage = (lang: Language) => {
        setLanguageState(lang);
        localStorage.setItem("preferred_language", lang);
    };

    const t = (key: string, defaultEs?: string, defaultEn?: string): string => {
        const dictionary = translations[language];
        if (dictionary && dictionary[key]) {
            return dictionary[key];
        }

        // Use inline defaults if provided
        if (language === 'en' && defaultEn) return defaultEn;
        if (language === 'es' && defaultEs) return defaultEs;

        // Fallback to the other language dictionary if inline is absent
        const fallbackDict = translations[language === 'en' ? 'es' : 'en'];
        if (fallbackDict && fallbackDict[key]) {
            return fallbackDict[key];
        }

        return defaultEs || defaultEn || key;
    };

    return (
        <LanguageContext.Provider value={{ language, setLanguage, t }}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = () => {
    const context = useContext(LanguageContext);
    if (!context) {
        throw new Error("useLanguage must be used within a LanguageProvider");
    }
    return context;
};
