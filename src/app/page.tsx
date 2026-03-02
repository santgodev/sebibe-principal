import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Testimonials from "@/components/Testimonials";
import Gallery from "@/components/Gallery";
import CTA from "@/components/CTA";
import LocationMap from "@/components/LocationMap";

export default function Home() {
  return (
    <main>
      <Hero />
      <Features />
      <Testimonials />
      <Gallery />
      <CTA />
      <LocationMap />
    </main>
  );
}
