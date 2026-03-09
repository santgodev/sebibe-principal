import Hero from "@/components/Hero";
import Features from "@/components/Features";
import ProgramsSection from "@/components/ProgramsSection";
import VideoSection from "@/components/VideoSection";
// import FacultySection from "@/components/FacultySection";
import Testimonials from "@/components/Testimonials";
import Gallery from "@/components/Gallery";
import CTA from "@/components/CTA";
import LocationMap from "@/components/LocationMap";

export default function Home() {
  return (
    <main>
      <Hero />
      <Features />
      <ProgramsSection />
      <VideoSection />
      {/* <FacultySection /> */}
      <Testimonials />
      <Gallery />
      <CTA />
      <LocationMap />
    </main>
  );
}
