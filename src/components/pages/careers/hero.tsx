"use client";
import { BlurFade } from "@/components/ui/blur-fade";
import { Particles } from "@/components/ui/particles";
import { BorderBeam } from "@/components/ui/border-beam";
import { ShimmerButton } from "@/components/ui/shimmer-button";
import { ArrowRight, MapPin, Globe2, Zap } from "lucide-react";
import Link from "next/link";

const STATS = [
  { value: "120+", label: "Team Members", color: "#7B68EE", bg: "bg-violet-50 dark:bg-violet-950/40",    border: "border-violet-200 dark:border-violet-800" },
  { value: "18",   label: "Open Roles",   color: "#FFC800", bg: "bg-yellow-50 dark:bg-yellow-950/40",   border: "border-yellow-200 dark:border-yellow-800" },
  { value: "22+",  label: "Countries",    color: "#10b981", bg: "bg-emerald-50 dark:bg-emerald-950/40", border: "border-emerald-200 dark:border-emerald-800" },
  { value: "4.9★", label: "Glassdoor",    color: "#FD71AF", bg: "bg-pink-50 dark:bg-pink-950/40",       border: "border-pink-200 dark:border-pink-800" },
];

export function CareersHero() {
  return (
    <section className="relative bg-white dark:bg-[#080d1a] pt-28 pb-24 overflow-hidden">
      {/* Dot-grid background */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] dark:bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:32px_32px] [mask-image:radial-gradient(ellipse_80%_60%_at_50%_0%,#000_60%,transparent_110%)]" />
      <Particles className="absolute inset-0 opacity-25" quantity={70} color="#94a3b8" />

      {/* Top gradient accent */}
      <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-225 h-85 rounded-full blur-3xl" style={{ background: "rgba(123,104,238,0.1)" }} />

      <div className="relative z-10 mx-auto max-w-350 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left copy */}
          <div>
            <BlurFade>
              <div className="inline-flex items-center gap-2 rounded-full bg-violet-50 dark:bg-violet-950/40 border border-violet-200 dark:border-violet-800 px-3.5 py-1.5 mb-6">
                <span className="w-2 h-2 rounded-full animate-pulse" style={{ background: "#7B68EE" }} />
                <span className="text-xs font-bold uppercase tracking-[0.18em]" style={{ color: "#7B68EE" }}>We&apos;re Hiring</span>
              </div>
            </BlurFade>

            <BlurFade delay={0.08}>
              <h1 className="text-5xl sm:text-6xl font-extrabold tracking-tight text-[#0f172a] dark:text-white mb-6 leading-[1.05]">
                Build the future of{" "}
                <span className="bg-clip-text text-transparent" style={{ backgroundImage: "linear-gradient(135deg, #7B68EE, #FD71AF)" }}>
                  intelligent work
                </span>
              </h1>
            </BlurFade>

            <BlurFade delay={0.14}>
              <p className="text-lg text-slate-500 dark:text-slate-400 leading-relaxed mb-8">
                Join a world-class team of engineers, designers, and operators building the AI-powered OS that replaces every tool your company runs on. Remote-first, deeply ambitious, zero BS.
              </p>
            </BlurFade>

            <BlurFade delay={0.18}>
              <div className="flex flex-wrap items-center gap-3 mb-8">
                <div className="flex items-center gap-1.5 text-sm text-slate-500 dark:text-slate-400">
                  <Globe2 className="h-4 w-4" style={{ color: "#7B68EE" }} /> Remote-first
                </div>
                <span className="text-slate-300 dark:text-slate-700">·</span>
                <div className="flex items-center gap-1.5 text-sm text-slate-500 dark:text-slate-400">
                  <MapPin className="h-4 w-4" style={{ color: "#FD71AF" }} /> SF · London · Bangalore
                </div>
                <span className="text-slate-300 dark:text-slate-700">·</span>
                <div className="flex items-center gap-1.5 text-sm text-slate-500 dark:text-slate-400">
                  <Zap className="h-4 w-4" style={{ color: "#FFC800" }} /> Series B · $48M raised
                </div>
              </div>
            </BlurFade>

            <BlurFade delay={0.22}>
              <div className="flex flex-wrap gap-3">
                <Link href="#openings">
                  <ShimmerButton
                    background="#292D34"
                    shimmerColor="#FD71AF"
                    borderRadius="12px"
                    className="px-6 py-3 text-sm font-bold"
                  >
                    View Open Roles
                    <ArrowRight className="ml-2 h-4 w-4 inline" />
                  </ShimmerButton>
                </Link>
                <Link
                  href="#culture"
                  className="flex items-center gap-2 px-5 py-3 rounded-xl border border-zinc-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-sm font-semibold text-zinc-700 dark:text-slate-200 hover:border-zinc-400 dark:hover:border-slate-500 transition-all shadow-sm"
                >
                  Our Culture
                </Link>
              </div>
            </BlurFade>
          </div>

          {/* Right stats */}
          <BlurFade delay={0.2}>
            <div className="grid grid-cols-2 gap-4">
              {STATS.map((s) => (
                <div key={s.label} className={`rounded-2xl border ${s.border} ${s.bg} p-6 relative overflow-hidden`}>
                  <BorderBeam size={150} duration={10} colorFrom="#7B68EE" colorTo="#FD71AF" />
                  <p className="text-3xl font-extrabold mb-1" style={{ color: s.color }}>{s.value}</p>
                  <p className="text-sm text-slate-500 dark:text-slate-400">{s.label}</p>
                </div>
              ))}
            </div>
          </BlurFade>

        </div>
      </div>
    </section>
  );
}
