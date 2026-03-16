import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { AppDock } from "@/components/layout/app-dock";
import Hero from "@/components/sections/hero";
import { Features } from "@/components/sections/features";
import { Products } from "@/components/sections/products";
import { CTA } from "@/components/sections/cta";

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
        <Features />
        <Products />
        <CTA />
      </main>
      <Footer />
      <AppDock />
    </>
  );
}
