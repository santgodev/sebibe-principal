import PremiumTestimonials from "@/components/PremiumTestimonials";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Nuestros Estudiantes | SEBIBE",
    description: "Conoce las historias de transformación y el impacto de nuestros estudiantes en el Seminario Bíblico Internacional Berea.",
};

export default function EstudiantesPage() {
    return (
        <main>
            <PremiumTestimonials />
        </main>
    );
}
