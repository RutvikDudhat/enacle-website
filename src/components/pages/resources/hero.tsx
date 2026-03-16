"use client";
import { BlurFade } from "@/components/ui/blur-fade";
import { Particles } from "@/components/ui/particles";
import { BookOpen } from "lucide-react";

export function ResourcesHero() {
  return (
    <section className="relative bg-white dark:bg-[#080d1a] pt-28 pb-20 overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] dark:bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:32px_32px] [mask-image:radial-gradient(ellipse_80%_60%_at_50%_0%,#000_60%,transparent_110%)]" />
      <Particles className="absolute inset-0 opacity-20" quantity={50} color="#94a3b8" />
      <div className="relative z-10 mx-auto max-w-350 px-4 sm:px-6 lg:px-8 text-center">
        <BlurFade>
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 dark:border-blue-800 bg-blue-50 dark:bg-blue-950/50 px-3.5 py-1.5 mb-6">
            <BookOpen className="h-3.5 w-3.5 text-blue-600" />
            <span className="text-sm font-medium text-blue-700 dark:text-blue-400">Resources</span>
          </div>
        </BlurFade>
        <BlurFade delay={0.08}>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-[#0f172a] dark:text-white mb-6">
            Everything you need<br /><span className="text-[#f59e0b]">to succeed with Enacle</span>
          </h1>
        </BlurFade>
        <BlurFade delay={0.16}>
          <p className="text-xl text-slate-500 dark:text-slate-400 max-w-2xl mx-auto">
            Guides, templates, case studies, video tutorials, and API docs — curated to help you get the most out of every feature.
          </p>
        </BlurFade>
      </div>
    </section>
  );
}
