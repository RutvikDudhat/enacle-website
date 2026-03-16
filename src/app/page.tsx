import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { AppDock } from "@/components/layout/app-dock";
import Hero from "@/components/sections/hero";
import { Features } from "@/components/sections/features";
import { Products } from "@/components/sections/products";
import { CTA } from "@/components/sections/cta";
import { OurTechnologies } from "@/components/sections/our-technologies";
import { DevelopmentProcess } from "@/components/sections/development-process";

export const metadata = {
  title: "Enacle — AI Operating System for Modern Teams",
  description: "Run projects, docs, chat, automations, and AI agents in one unified platform.",
};

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <OurTechnologies />
        <Features />
        <Products />
        <DevelopmentProcess />
        <CTA />
      </main>
      <Footer />
      <AppDock />
    </>
  );
}
