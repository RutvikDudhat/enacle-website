"use client";
import { BlurFade } from "@/components/ui/blur-fade";
import { AnimatedShinyText } from "@/components/ui/animated-shiny-text";
import { MagicCard } from "@/components/ui/magic-card";
import { Target, Eye, Heart } from "lucide-react";

const VALUES = [
  {
    icon: Target,
    title: "Mission",
    body: "To replace the fragmented SaaS stack with a single AI-powered operating system — so every team can focus on what matters, not tool maintenance.",
    accent: "#EF9449",
    bg: "bg-orange-50 dark:bg-orange-950/20",
    border: "border-orange-100 dark:border-orange-900/40",
    iconBg: "bg-orange-100 dark:bg-orange-900/40",
    gradient: "#EF9449",
  },
  {
    icon: Eye,
    title: "Vision",
    body: "A world where every business — from 2-person startups to Fortune 500 enterprises — runs on one intelligent platform that learns, adapts, and grows with them.",
    accent: "#3b82f6",
    bg: "bg-blue-50 dark:bg-blue-950/20",
    border: "border-blue-100 dark:border-blue-900/40",
    iconBg: "bg-blue-100 dark:bg-blue-900/40",
    gradient: "#3b82f6",
  },
  {
    icon: Heart,
    title: "Values",
    body: "Customer obsession, radical transparency, ship fast and iterate, hire for craft — these aren't slogans. They're how we make every decision at Enacle.",
    accent: "#a855f7",
    bg: "bg-purple-50 dark:bg-purple-950/20",
    border: "border-purple-100 dark:border-purple-900/40",
    iconBg: "bg-purple-100 dark:bg-purple-900/40",
    gradient: "#a855f7",
  },
];

export function AboutMission() {
  return (
    <section className="relative py-24 bg-slate-50 dark:bg-slate-900 overflow-hidden">
      {/* Subtle dot texture */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage: "radial-gradient(circle, #64748b 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />
      {/* Orange glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-0 h-60 w-[600px] -translate-x-1/2 rounded-full bg-[#EF9449]/[0.05] blur-3xl"
      />

      <div className="relative z-10 mx-auto max-w-[100rem] px-6 sm:px-10 lg:px-16 xl:px-20">
        {/* Header */}
        <BlurFade delay={0.04} inView>
          <div className="mb-4 flex items-center justify-center gap-2">
            <div className="h-px w-8 bg-[#EF9449]" />
            <AnimatedShinyText
              shimmerWidth={100}
              className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#EF9449]"
            >
              Why We Exist
            </AnimatedShinyText>
            <div className="h-px w-8 bg-[#EF9449]" />
          </div>
        </BlurFade>

        <BlurFade delay={0.08} inView>
          <h2 className="mx-auto mb-3 max-w-2xl text-center text-4xl font-semibold leading-tight tracking-tight text-gray-900 dark:text-white sm:text-5xl">
            Built with{" "}
            <span className="relative inline-block">
              <span style={{ color: "#EF9449" }}>purpose</span>
              <svg className="absolute -bottom-1 left-0 w-full" height="6" viewBox="0 0 200 6" preserveAspectRatio="none">
                <path d="M0 5 Q50 1 100 5 Q150 9 200 5" stroke="#EF9449" strokeWidth="1.8" fill="none" opacity="0.5" />
              </svg>
            </span>
            , not just product
          </h2>
        </BlurFade>

        <BlurFade delay={0.12} inView>
          <p className="mx-auto mb-14 max-w-lg text-center text-sm leading-relaxed text-gray-500 dark:text-slate-400">
            Great software starts with a clear reason to exist. Here&apos;s ours.
          </p>
        </BlurFade>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {VALUES.map((v, i) => (
            <BlurFade key={v.title} delay={0.06 + i * 0.08} inView>
              <MagicCard
                className={`rounded-2xl border ${v.border} ${v.bg} p-8 h-full`}
                gradientColor={v.gradient}
                gradientOpacity={0.06}
              >
                {/* Icon */}
                <div className={`w-11 h-11 rounded-xl flex items-center justify-center mb-5 ${v.iconBg}`}>
                  <v.icon className="h-5 w-5" style={{ color: v.accent }} />
                </div>
                {/* Title with accent bar */}
                <div className="flex items-center gap-2 mb-3">
                  <div className="h-4 w-0.5 rounded-full" style={{ background: v.accent }} />
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white">{v.title}</h3>
                </div>
                <p className="text-sm leading-relaxed text-gray-500 dark:text-slate-400">{v.body}</p>
              </MagicCard>
            </BlurFade>
          ))}
        </div>
      </div>
    </section>
  );
}
