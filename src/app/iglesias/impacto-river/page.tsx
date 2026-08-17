import ChurchHero from "@/components/iglesias/ChurchHero";
import PlanYourVisit from "@/components/iglesias/PlanYourVisit";

export const metadata = {
  title: "Impacto River | Bienvenidos a Casa",
  description: "Encuentra tu propósito y construye relaciones genuinas en Impacto River. Planifica tu visita este fin de semana.",
};

export default function ImpactoRiverPage() {
  return (
    <main>
      <ChurchHero />
      <PlanYourVisit />
    </main>
  );
}
