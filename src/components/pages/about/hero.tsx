"use client";
import { BlurFade } from "@/components/ui/blur-fade";
import { AnimatedShinyText } from "@/components/ui/animated-shiny-text";
import { BorderBeam } from "@/components/ui/border-beam";

const STATS = [
  { v: "2023",  label: "Founded",       color: "#EF9449", bg: "bg-orange-50 dark:bg-orange-950/30",   border: "border-orange-200 dark:border-orange-800/60" },
  { v: "50k+",  label: "Teams",          color: "#3b82f6", bg: "bg-blue-50 dark:bg-blue-950/30",       border: "border-blue-200 dark:border-blue-800/60" },
  { v: "$48M",  label: "Raised",         color: "#10b981", bg: "bg-emerald-50 dark:bg-emerald-950/30", border: "border-emerald-200 dark:border-emerald-800/60" },
  { v: "120+",  label: "Team members",   color: "#a855f7", bg: "bg-purple-50 dark:bg-purple-950/30",   border: "border-purple-200 dark:border-purple-800/60" },
];

export function AboutHero() {
  return (
    <section className="relative bg-white dark:bg-slate-950 pt-32 pb-24 overflow-hidden">
      {/* Dot texture */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage: "radial-gradient(circle, #64748b 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />
      {/* Orange glow top-center */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-0 h-80 w-[700px] -translate-x-1/2 rounded-full bg-[#EF9449]/[0.07] blur-3xl"
      />
      {/* Subtle side glows */}
      <div aria-hidden className="pointer-events-none absolute left-0 top-1/3 h-64 w-64 rounded-full bg-blue-500/[0.04] blur-3xl" />
      <div aria-hidden className="pointer-events-none absolute right-0 top-1/2 h-64 w-64 rounded-full bg-purple-500/[0.04] blur-3xl" />

      <div className="relative z-10 mx-auto max-w-[100rem] px-6 sm:px-10 lg:px-16 xl:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left — copy */}
          <div>
            {/* Eyebrow */}
            <BlurFade delay={0.04} inView>
              <div className="mb-5 flex items-center gap-2">
                <div className="h-px w-8 bg-[#EF9449]" />
                <AnimatedShinyText
                  shimmerWidth={100}
                  className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#EF9449]"
                >
                  Our Story
                </AnimatedShinyText>
                <div className="h-px w-8 bg-[#EF9449]" />
              </div>
            </BlurFade>

            {/* Headline */}
            <BlurFade delay={0.08} inView>
              <h1 className="text-5xl sm:text-6xl font-extrabold tracking-tight text-gray-900 dark:text-white mb-6 leading-[1.05]">
                We&apos;re building the{" "}
                <span className="relative inline-block">
                  <span style={{ color: "#EF9449" }}>OS</span>
                  <svg className="absolute -bottom-1 left-0 w-full" height="6" viewBox="0 0 60 6" preserveAspectRatio="none">
                    <path d="M0 5 Q15 1 30 5 Q45 9 60 5" stroke="#EF9449" strokeWidth="1.8" fill="none" opacity="0.5" />
                  </svg>
                </span>{" "}
                for every business
              </h1>
            </BlurFade>

            {/* Body */}
            <BlurFade delay={0.14} inView>
              <p className="text-lg text-slate-500 dark:text-slate-400 leading-relaxed max-w-lg">
                Enacle was founded in 2023 by engineers and operators who were tired of stitching
                together 15 different SaaS tools just to run a company. We believed there was a better
                way — one platform, one AI, one source of truth.
              </p>
            </BlurFade>
          </div>

          {/* Right — stats */}
          <BlurFade delay={0.2} inView>
            <div className="grid grid-cols-2 gap-4">
              {STATS.map((stat) => (
                <div
                  key={stat.label}
                  className={`relative rounded-2xl border ${stat.border} ${stat.bg} p-7 overflow-hidden`}
                >
                  <BorderBeam size={160} duration={10} colorFrom="#EF9449" colorTo="#f59e0b" />
                  <p className="text-4xl font-extrabold mb-1.5 tabular-nums" style={{ color: stat.color }}>
                    {stat.v}
                  </p>
                  <p className="text-sm text-slate-500 dark:text-slate-400 font-medium">{stat.label}</p>
                </div>
              ))}
            </div>
          </BlurFade>
        </div>
      </div>
    </section>
  );
}
