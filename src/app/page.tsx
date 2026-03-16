import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import Hero from "@/components/sections/hero";
import { ContextProblem } from "@/components/sections/context-problem";
import { SuperAgents } from "@/components/sections/super-agents";
import { ConvergedPlatform } from "@/components/sections/converged-platform";
import { Features } from "@/components/sections/features";
import { Stats } from "@/components/sections/stats";
import { UseCases } from "@/components/sections/use-cases";
import { Products } from "@/components/sections/products";
import { Ecosystem } from "@/components/sections/ecosystem";
import { GlobalReach } from "@/components/sections/global-reach";
import { CTA } from "@/components/sections/cta";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-white dark:bg-[#080d1a] font-sans antialiased">
      <Header />
      <main className="flex-1">
        <Hero />
        <ContextProblem />
        <SuperAgents />
        <ConvergedPlatform />
        <Features />
        <Stats />
        <UseCases />
        <Products />
        <Ecosystem />
        <GlobalReach />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
