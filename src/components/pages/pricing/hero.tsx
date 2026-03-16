"use client";
import { BlurFade } from "@/components/ui/blur-fade";
import { Particles } from "@/components/ui/particles";
import { DollarSign } from "lucide-react";

export function PricingHero() {
  return (
    <section className="relative bg-white dark:bg-[#080d1a] pt-28 pb-16 overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] dark:bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:32px_32px] [mask-image:radial-gradient(ellipse_80%_60%_at_50%_0%,#000_60%,transparent_110%)]" />
      <Particles className="absolute inset-0 opacity-20" quantity={50} color="#94a3b8" />
      <div className="relative z-10 mx-auto max-w-350 px-4 sm:px-6 lg:px-8 text-center">
        <BlurFade>
          <div className="inline-flex items-center gap-2 rounded-full border border-violet-200 dark:border-violet-800 bg-violet-50 dark:bg-violet-950/50 px-3.5 py-1.5 mb-6">
            <DollarSign className="h-3.5 w-3.5" style={{ color: "#7B68EE" }} />
            <span className="text-sm font-medium" style={{ color: "#7B68EE" }}>Simple pricing</span>
          </div>
        </BlurFade>
        <BlurFade delay={0.08}>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-[#0f172a] dark:text-white mb-6">
            One price.<br /><span style={{ color: "#FFC800" }}>Everything included.</span>
          </h1>
        </BlurFade>
        <BlurFade delay={0.16}>
          <p className="text-xl text-slate-500 dark:text-slate-400 max-w-xl mx-auto">
            All 12 products in every plan. No hidden add-ons, no per-feature charges. Start free — upgrade when you&apos;re ready.
          </p>
        </BlurFade>
      </div>
    </section>
  );
}
