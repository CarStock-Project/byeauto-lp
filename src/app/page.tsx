import { Benefits } from "@/components/sections/Benefits";
import { CTA } from "@/components/sections/CTA";
import { Features } from "@/components/sections/Features";
import { Footer } from "@/components/sections/Footer";
import { Hero } from "@/components/sections/Hero";
import { Showcase } from "@/components/sections/Showcase";
import { SiteHeader } from "@/components/sections/SiteHeader";

export default function HomePage() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <Features />
        <Showcase />
        <Benefits />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
