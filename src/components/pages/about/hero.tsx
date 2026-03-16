"use client";
import { BlurFade } from "@/components/ui/blur-fade";
import { Particles } from "@/components/ui/particles";
import { BorderBeam } from "@/components/ui/border-beam";

export function AboutHero() {
  return (
    <section className="relative bg-white dark:bg-[#080d1a] pt-28 pb-20 overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] dark:bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:32px_32px] [mask-image:radial-gradient(ellipse_80%_60%_at_50%_0%,#000_60%,transparent_110%)]" />
      <Particles className="absolute inset-0 opacity-20" quantity={60} color="#94a3b8" />
      <div className="relative z-10 mx-auto max-w-350 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <BlurFade>
              <p className="text-xs font-bold uppercase tracking-[0.25em] mb-4" style={{ color: "#7B68EE" }}>Our story</p>
            </BlurFade>
            <BlurFade delay={0.08}>
              <h1 className="text-5xl sm:text-6xl font-extrabold tracking-tight text-[#0f172a] dark:text-white mb-6 leading-[1.05]">
                We&apos;re building the OS for every business
              </h1>
            </BlurFade>
            <BlurFade delay={0.14}>
              <p className="text-lg text-slate-500 dark:text-slate-400 leading-relaxed">
                Enacle was founded in 2023 by a team of engineers and operators who were tired of stitching together 15 different SaaS tools just to run a company. We believed there was a better way — one platform, one AI, one source of truth.
              </p>
            </BlurFade>
          </div>
          <BlurFade delay={0.2}>
            <div className="grid grid-cols-2 gap-4">
              {[
                { v: "2023", label: "Founded",     color: "#7B68EE", bg: "bg-violet-50 dark:bg-violet-950/40",  border: "border-violet-200 dark:border-violet-800" },
                { v: "50k+", label: "Teams",        color: "#FFC800", bg: "bg-yellow-50 dark:bg-yellow-950/40", border: "border-yellow-200 dark:border-yellow-800" },
                { v: "$48M", label: "Raised",       color: "#10b981", bg: "bg-emerald-50 dark:bg-emerald-950/40",border: "border-emerald-200 dark:border-emerald-800" },
                { v: "120+", label: "Team members", color: "#FD71AF", bg: "bg-pink-50 dark:bg-pink-950/40",     border: "border-pink-200 dark:border-pink-800" },
              ].map((stat) => (
                <div key={stat.label} className={`rounded-2xl border ${stat.border} ${stat.bg} p-6 relative overflow-hidden`}>
                  <BorderBeam size={150} duration={10} colorFrom="#7B68EE" colorTo="#FD71AF" />
                  <p className={`text-3xl font-extrabold mb-1`} style={{ color: stat.color }}>{stat.v}</p>
                  <p className="text-sm text-slate-500 dark:text-slate-400">{stat.label}</p>
                </div>
              ))}
            </div>
          </BlurFade>
        </div>
      </div>
    </section>
  );
}
