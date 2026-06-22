import { Benefits } from "@/components/sections/Benefits";
import { Clients } from "@/components/sections/Clients";
import { CTA } from "@/components/sections/CTA";
import { Features } from "@/components/sections/Features";
import { Footer } from "@/components/sections/Footer";
import { Hero } from "@/components/sections/Hero";
import { Highlights } from "@/components/sections/Highlights";
import { Pricing } from "@/components/sections/Pricing";
import { SiteHeader } from "@/components/sections/SiteHeader";
import { Vitrine } from "@/components/sections/Vitrine";

export default function HomePage() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <Features />
        <Highlights />
        <Vitrine />
        <Clients />
        <Benefits />
        <Pricing />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
