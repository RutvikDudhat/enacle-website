"use client";
import { BlurFade } from "@/components/ui/blur-fade";
import { Particles } from "@/components/ui/particles";
import { ShimmerButton } from "@/components/ui/shimmer-button";
import { Users, ArrowRight } from "lucide-react";

export function SolutionsHero() {
  return (
    <section className="relative bg-white dark:bg-[#080d1a] pt-28 pb-20 overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] dark:bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:32px_32px] [mask-image:radial-gradient(ellipse_80%_60%_at_50%_0%,#000_60%,transparent_110%)]" />
      <Particles className="absolute inset-0 opacity-20" quantity={60} color="#94a3b8" />
      <div className="relative z-10 mx-auto max-w-350 px-4 sm:px-6 lg:px-8 text-center">
        <BlurFade>
          <div className="inline-flex items-center gap-2 rounded-full border border-violet-200 dark:border-violet-800 bg-violet-50 dark:bg-violet-950/50 px-3.5 py-1.5 mb-6">
            <Users className="h-3.5 w-3.5" style={{ color: "#7B68EE" }} />
            <span className="text-sm font-medium" style={{ color: "#7B68EE" }}>Solutions by team</span>
          </div>
        </BlurFade>
        <BlurFade delay={0.08}>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-[#0f172a] dark:text-white mb-6">
            Built for how your<br /><span className="text-[#FFC800]">team actually works</span>
          </h1>
        </BlurFade>
        <BlurFade delay={0.16}>
          <p className="text-xl text-slate-500 dark:text-slate-400 max-w-2xl mx-auto mb-10">
            Whether you run engineering, marketing, sales, support, HR, or the whole company — Enacle has a workflow purpose-built for you.
          </p>
        </BlurFade>
        <BlurFade delay={0.22}>
          <ShimmerButton shimmerColor="#FD71AF" background="#292D34" className="rounded-xl px-7 py-3.5 text-base font-bold text-white">
            Find your solution <ArrowRight className="inline h-4 w-4 ml-1.5" />
          </ShimmerButton>
        </BlurFade>
      </div>
    </section>
  );
}
