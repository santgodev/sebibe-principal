"use client";
import dynamic from "next/dynamic";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import ProgramsSection from "@/components/ProgramsSection";
import FacilitiesShowcase from "@/components/FacilitiesShowcase";
// import FacultySection from "@/components/FacultySection";
import CTA from "@/components/CTA";

// Dynamic imports for heavy components
const Gallery = dynamic(() => import("@/components/Gallery"), {
  loading: () => <div className="h-96 animate-pulse bg-slate-900/50 rounded-xl m-8" />,
  ssr: false
});

const LocationMap = dynamic(() => import("@/components/LocationMap"), {
  loading: () => <div className="h-96 animate-pulse bg-slate-900/50 rounded-xl m-8" />,
  ssr: false
});

const Testimonials = dynamic(() => import("@/components/Testimonials"), {
  loading: () => <div className="h-64 animate-pulse bg-slate-900/30 rounded-xl m-8" />,
  ssr: false
});

export default function Home() {
  return (
    <main>
      <Hero />
      <Features />
      <ProgramsSection />
      <FacilitiesShowcase />
      {/* <FacultySection /> */}
      <Testimonials />
      <Gallery />
      <CTA />
      <LocationMap />
    </main>
  );
}
