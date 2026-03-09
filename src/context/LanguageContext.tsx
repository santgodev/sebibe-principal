"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";

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
        testimonios: "Testimonios",
        contacto: "Contacto",
        matriculate: "Matricúlate",
        matriculate_ahora: "Matricúlate Ahora",

        // Premium Testimonials
        historias_transformacion: "Historias de Transformación",
        testimonios_subtitle: "Voces de una generación que ha sido rescatada, sanada y hoy se forma para llevar esperanza al mundo.",
        cerrar: "Cerrar",
        leer_historia: "Leer Historia",

        // Hero
        hero_subtitle_top: "Seminario Bíblico Berea",
        hero_title_1: "Formación para lo",
        hero_title_2: "Eterno y Profundo",
        hero_desc: "Una experiencia inmersiva de discipulado, teología y comunidad. No es solo estudiar, es ser transformado para impactar una generación.",
        hero_btn_1: "Responder al Llamado",
        hero_btn_2: "Conocer la Visión",

        // Default fallback
        loading: "Cargando...",
    },
    en: {
        // Navbar
        inicio: "Home",
        nosotros: "About Us",
        testimonios: "Testimonials",
        contacto: "Contact",
        matriculate: "Enroll",
        matriculate_ahora: "Enroll Now",

        // Premium Testimonials
        historias_transformacion: "Stories of Transformation",
        testimonios_subtitle: "Voices of a generation that has been rescued, healed, and is equipping itself today to bring hope to the world.",
        cerrar: "Close",
        leer_historia: "Read Story",

        // Hero
        hero_subtitle_top: "Berea Biblical Seminary",
        hero_title_1: "Training for the",
        hero_title_2: "Eternal and Deep",
        hero_desc: "An immersive experience of discipleship, theology, and community. It's not just studying, it's being transformed to impact a generation.",
        hero_btn_1: "Answer the Call",
        hero_btn_2: "Discover our Vision",

        // Default fallback
        loading: "Loading...",
    }
};

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
    const [language, setLanguage] = useState<Language>("es");

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
